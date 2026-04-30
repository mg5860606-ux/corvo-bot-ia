const fs = require('fs');
const enviarMenu = require('./menu');
const { temTagProtecao } = require('./tag');
const { linkLogic } = require('./links/links');

global.groupCache = new Map();

module.exports = (client) => {
    // Inicialização de ficheiros de base de dados
    if (!fs.existsSync('./links/links.json')) {
        if (!fs.existsSync('./links')) fs.mkdirSync('./links');
        fs.writeFileSync('./links/links.json', JSON.stringify({ autoJoin: false }));
    }
    // Só cria o arquivo se ele NÃO existir. Se existir, ele não mexe
    if (!fs.existsSync('./div.json')) {
        fs.writeFileSync('./div.json', JSON.stringify({ mensagem: "CORVO TA NA PISTA 🦇" }));
    }
    if (!fs.existsSync('./setdiv.json')) {
        fs.writeFileSync('./setdiv.json', JSON.stringify({ quantidade: 1 }));
    }

    // Carrega o que está salvo no arquivo para a memória
    global.quantidadeDiv = JSON.parse(fs.readFileSync('./setdiv.json', 'utf-8')).quantidade;

    try {
        global.mensagemDiv = JSON.parse(fs.readFileSync('./div.json', 'utf-8')).mensagem;
    } catch (e) {
        console.log('Erro no div.json, resetando...');

        const padrao = { mensagem: "Mensagem padrão" };
        fs.writeFileSync('./div.json', JSON.stringify(padrao, null, 2));

        global.mensagemDiv = padrao.mensagem;
    }

    client.ev.on("messages.upsert", async (m) => {
        try {
            const msg = m.messages[0];
            if (!msg.message) return;

            const from = msg.key.remoteJid;
            const isGroup = from.endsWith("@g.us");

            // --- AUTO-JOIN: USA O TEXTO ORIGINAL (CASE-SENSITIVE) PARA EVITAR ERRO 400 ---
            const fullBody = (msg.message.conversation || msg.message.extendedTextMessage?.text || "");
            await linkLogic(client, m, fullBody);

            // Definição de comandos e prefixo
            const body = fullBody.toLowerCase().trim();
            const prefix = "/";
            const isCmd = body.startsWith(prefix);
            const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : null;

            const sender = msg.key.fromMe ? client.user.id.split(':')[0] + '@s.whatsapp.net' : (msg.key.participant || from);
            // --- FILTRO DE PRIVADO: SÓ RESPONDE SE FOR COMANDO ---
            if (!isGroup && !isCmd) return;

            let groupMetadata;
            let isAdmins = true; // No privado, o dono tem sempre permissão

            if (isGroup) {
                // Gestão de Cache para evitar Erro 429
                if (global.groupCache.has(from)) {
                    groupMetadata = global.groupCache.get(from);
                } else {
                    groupMetadata = await client.groupMetadata(from);
                    global.groupCache.set(from, groupMetadata);
                    setTimeout(() => global.groupCache.delete(from), 60000);
                }

                if (temTagProtecao(groupMetadata?.desc || "")) return;

                const sender = msg.key.fromMe ? client.user.id.split(':')[0] + '@s.whatsapp.net' : (msg.key.participant || from);
                // Variável isAdmins personalizada
                isAdmins = groupMetadata.participants.filter(v => v.admin !== null).map(v => v.id).includes(sender);
            }

            const args = body.split(/ +/).slice(1);

            switch (command) {

                case 'menu':
                    // Adicionado o 'sender' no final da chamada para evitar o erro de 'undefined'
                    await enviarMenu(client, from, msg.pushName || "USER", prefix, msg, sender);
                    break;

                case 'msgdiv':
                    const novaMsg = args.join(" ");
                    if (!novaMsg) return await client.sendMessage(from, { text: "❌ Digite a nova mensagem com o link!" });

                    // 1. Atualiza a variável global NA HORA para o comando 'a' e '/div'
                    global.mensagemDiv = novaMsg;

                    // 2. Salva no arquivo para não perder quando o bot desligar
                    fs.writeFileSync('./div.json', JSON.stringify({ mensagem: global.mensagemDiv }, null, 2));

                    await client.sendMessage(from, { text: "✅ Mensagem e link atualizados com sucesso!" });
                    break;

                case 'setdiv':
                    if (isNaN(args[0])) return;
                    global.quantidadeDiv = parseInt(args[0]);
                    fs.writeFileSync('./setdiv.json', JSON.stringify({ quantidade: global.quantidadeDiv }));
                    await client.sendMessage(from, { text: `✅ Quantidade definida para: ${global.quantidadeDiv}` });
                    break;

                case 'autojoin':
                    const dbPath = './links/links.json';
                    let dbAuto = JSON.parse(fs.readFileSync(dbPath));
                    dbAuto.autoJoin = !dbAuto.autoJoin;
                    fs.writeFileSync(dbPath, JSON.stringify(dbAuto, null, 2));
                    await client.sendMessage(from, { text: `🚀 *AUTO-ENTRADA:* ${dbAuto.autoJoin ? 'LIGADO ✅' : 'DESLIGADO ❌'}` });
                    break;

                case 'div':
                    if (!isGroup) return; // Comando /div apenas para grupos
                    const botId_ = client.user.id.split(':')[0] + '@s.whatsapp.net';
                    const pnts = groupMetadata.participants
                        .filter(p => p.admin === null && p.id !== botId_)
                        .map(u => u.id);
                    for (let i = 0; i < global.quantidadeDiv; i++) {
                        await client.relayMessage(from, {
                            requestPaymentMessage: {
                                currencyCodeIso4217: "BRL", amount1000: "10000",
                                noteMessage: { extendedTextMessage: { text: global.mensagemDiv, contextInfo: { mentionedJid: pnts } } }
                            }
                        }, {});
                        await new Promise(r => setTimeout(r, 1600));
                    }
                    break;

                case 'nuke':
                    if (!isGroup || !isAdmins) return; // Nuke exige admin e ser em grupo
                    await client.groupUpdateSubject(from, "CORVO TA NA PISTA 🦇").catch(() => null);
                    const code = await client.groupInviteCode(from).catch(() => "Privado");
                    await client.groupUpdateDescription(from, `VEM PRO NOVO:\nhttps://chat.whatsapp.com/${code}`).catch(() => null);
                    const botId = client.user.id.split(':')[0] + '@s.whatsapp.net';
                    const listBan = groupMetadata.participants.filter(p => p.id !== botId).map(p => p.id);
                    if (listBan.length > 0) await client.groupParticipantsUpdate(from, listBan, "remove").catch(() => null);
                    break;
            }
        } catch (err) { console.log(err); }
    });
};