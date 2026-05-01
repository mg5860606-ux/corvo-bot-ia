console.log("-----------------------------------------");
console.log(">>> INICIANDO CONNECT.JS - AGUARDE... <<<");
console.log("-----------------------------------------");
const Baileys = require('@whiskeysockets/baileys');
const makeWASocket = Baileys.default || Baileys;
const useMultiFileAuthState = Baileys.useMultiFileAuthState || (Baileys.default && Baileys.default.useMultiFileAuthState);
let makeInMemoryStore;
try {
    const B = require('@whiskeysockets/baileys');
    makeInMemoryStore = B.makeInMemoryStore || (B.default && B.default.makeInMemoryStore);
    if (!makeInMemoryStore) {
        const B2 = require('@whiskeysockets/baileys/lib/Store');
        makeInMemoryStore = B2.makeInMemoryStore || (B2.default && B2.default.makeInMemoryStore);
    }
} catch (e) {
    try {
        const B3 = require('@whiskeysockets/baileys/lib/Store/make-in-memory-store');
        makeInMemoryStore = B3.makeInMemoryStore || (B3.default && B3.default.makeInMemoryStore);
    } catch (e2) {
        // Mock de emergência se tudo falhar
        makeInMemoryStore = () => ({
            readFromFile: () => {},
            writeToFile: () => {},
            bind: () => {},
            messages: {}
        });
    }
}
if (!makeInMemoryStore) {
    makeInMemoryStore = () => ({
        readFromFile: () => {},
        writeToFile: () => {},
        bind: () => {},
        messages: {}
    });
}
const makeCacheableSignalKeyStore = Baileys.makeCacheableSignalKeyStore || (Baileys.default && Baileys.default.makeCacheableSignalKeyStore);
const fetchLatestBaileysVersion = Baileys.fetchLatestBaileysVersion || (Baileys.default && Baileys.default.fetchLatestBaileysVersion);
const DisconnectReason = Baileys.DisconnectReason || (Baileys.default && Baileys.default.DisconnectReason);
const PHONENUMBER_MCC = Baileys.PHONENUMBER_MCC || (Baileys.default && Baileys.default.PHONENUMBER_MCC);
const qrcodeTerminal = require('qrcode-terminal');
const { fs, readline, LoggerB, Boom, axios, util, time, date, getBuffer, banner2, banner3, colors, getGroupAdmins, mess, getRandom, NodeCache, nescessario, setting, extractDDD, extractStateFromNumber, extractStateFromDDD } = require('../ARQUIVES/funcoes/exports.js');
const moment = require('moment-timezone');
const qrcode = "./DADOS DO CORVO/qr-code";

const logger = LoggerB.child({});
logger.level = 'silent';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise(resolve => rl.question(text, resolve));
const msgRetryCounterCache = new NodeCache();

const SUPORTE_NUMBER = "";

// Funções de boas-vindas e despedida padrão
function welcome(numero, subject) {
    return `Olá @${numero}, seja bem-vindo(a) ao grupo *${subject}*! Leia as regras e divirta-se.`;
}

function bye(numero) {
    return `O membro @${numero} saiu do grupo. Até mais!`;
}

function welcome2(numero, subject) {
    return `Bem-vindo(a) @${numero} ao *${subject}*!`;
}

function bye2(numero) {
    return `@${numero} saiu do grupo.`;
}

function collectNumbers(inputString) {
    return inputString.replace(/\D/g, '');
}

if (!fs.existsSync('./DADOS DO CORVO/data')) {
    fs.mkdirSync('./DADOS DO CORVO/data', { recursive: true });
}

const store = makeInMemoryStore({ logger: LoggerB.child({ level: 'silent', stream: 'store' }) });
store.readFromFile('./DADOS DO CORVO/data/baileys_store.json');
setInterval(() => {
    store.writeToFile('./DADOS DO CORVO/data/baileys_store.json');
}, 10000);

async function startConnect() {
    const configPath = './DADOS DO CORVO/INFO_CORVO/media/INFO_CORVO.json';
    let infoConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    
    if (!infoConfig.NomeDoBot || !infoConfig.ownerName || !infoConfig.ownerNumber) {
        console.log(colors.magenta("\n╔══╌✯╌══⊱×⊰ CONFIGURAÇÃO INICIAL ⊱×⊰══╌✯╌══╗"));
        let pNomeBot = await question(colors.cyan("1. Como você quer chamar a IA? (Ex: Assistente, Bot, etc)\n--> "));
        infoConfig.NomeDoBot = pNomeBot.trim() || "Assistente";
        let pOwnerName = await question(colors.cyan("2. Qual é o seu nome? (Como a IA deve te chamar?)\n--> "));
        infoConfig.ownerName = pOwnerName.trim() || "Mestre";
        let pOwnerNum = await question(colors.cyan("3. Qual o seu número de WhatsApp (com DDI e DDD)? Ex: 5511999999999\n--> "));
        infoConfig.ownerNumber = pOwnerNum.replace(/\D/g, '');
        fs.writeFileSync(configPath, JSON.stringify(infoConfig, null, 2));
        console.log(colors.green("✅ Configuração salva com sucesso!\n"));
    }

    const { state, saveCreds } = await useMultiFileAuthState(qrcode);

    let botNumber = "";
    let usePairingCode = false;
    let menuShown = false;
    
    const hasSession = fs.existsSync(`${qrcode}/creds.json`);

    async function showMenuWrapper() {
        if (menuShown) return;
        menuShown = true;

        console.log(colors.magenta("╔══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╗"));
        console.log(colors.magenta("║𖣴") + colors.white(" Escolha uma opção ↴"));
        console.log(colors.magenta("╚══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╝"));
        console.log(colors.magenta("║") + colors.blue("╭━ ━━ ── ── ━━ ━╮"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("1") + colors.red(" )") + colors.cyan(" Código (Pairing)"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("2") + colors.red(" )") + colors.cyan(" QR-Code"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("3") + colors.red(" )") + colors.cyan(" Suporte"));
        console.log(colors.magenta("║") + colors.blue("╰━ ━━ ── ── ━━ ━╯"));
        console.log(colors.magenta("╚══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╝"));
        
        let option = await question(colors.white("╰━> "));
        option = option.trim();

        switch(option) {
            case '1':
                usePairingCode = true;
                const askBotNumber = await question(colors.white("\nDigite o número do WHATSAPP DO BOT (ex: 5511999999999) ↴\n--> "));
                botNumber = askBotNumber.replace(/\D/g, '');
                if (!botNumber || botNumber.length < 12) {
                    console.log(colors.red("\n⚠️ Número inválido! Tente novamente.\n"));
                    menuShown = false;
                    await showMenuWrapper();
                }
                break;
            case '2':            
                usePairingCode = false;
                console.log(colors.cyan("\nAguardando QR Code..."));
                break;
            case '3':
                console.log(colors.cyan(`\nSuporte: https://wa.me/5511947285405\n`));
                menuShown = false; 
                await showMenuWrapper();
                break;
            default:
                console.log(colors.red("\nOPÇÃO INVÁLIDA!\n"));
                menuShown = false;
                await showMenuWrapper();
        }
    }

    if (!hasSession) {
        await showMenuWrapper();
    }

    let version = [2, 3000, 1017531287];
    try {
        const fetched = await fetchLatestBaileysVersion();
        if (fetched && fetched.version) version = fetched.version;
    } catch (e) {}

    const corvo = makeWASocket({
        logger,        
        printQRInTerminal: false, 
        version,
        browser: ['Ubuntu', 'Chrome', '20.0.04'],
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, logger),
        },
        phoneNumber: botNumber, 
        msgRetryCounterCache,
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
        keepAliveIntervalMs: 60000,
        markOnlineOnConnect: true,
    });

    if (usePairingCode && !hasSession && botNumber) {
        setTimeout(async () => {
            try {
                let code = await corvo.requestPairingCode(botNumber);
                code = code?.match(/.{1,4}/g)?.join("-") || code;
                console.log(colors.black(colors.bgGreen(`\n Seu código de emparelhamento: `)), colors.black(colors.white(code)));
                console.log(colors.gray('\nVá no WhatsApp > Aparelhos Conectados > Conectar com número de telefone\n'));
            } catch (error) {
                console.log(colors.red("Erro ao solicitar código: " + error));
            }
        }, 3000);
    }

    store.bind(corvo.ev);
    corvo.store = store;


    
    const restartConnection = async () => {
        process.removeAllListeners('unhandledRejection'); 
        startConnect().catch(e => console.log(colors.red("Erro ao reiniciar: " + e)));
    };

    corvo.ev.on("creds.update", saveCreds);

    corvo.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect, qr } = update;
        if (lastDisconnect?.error) {
            console.log(colors.red(`[DEBUG] Erro de conexão: ${lastDisconnect.error.message || lastDisconnect.error}`));
        }
        const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode;

        if (qr && !usePairingCode) {
            console.log(colors.cyan("\n📱 ESCANEIE O QR PARA CONECTAR-SE AO BOT:\n"));
            qrcodeTerminal.generate(qr, { small: true }); 
            console.log(colors.yellow("\n• ABRA O WHATSAPP > DISPOSITIVOS CONECTADOS > CONECTAR NOVO APARELHO\n"));
        }

        if (connection === "close") {
            if (shouldReconnect) {
                
                if (shouldReconnect === DisconnectReason.loggedOut) {
                    console.log(colors.red("🔴 Sessão encerrada. Delete a pasta e tente novamente."));
                    process.exit(1);
                } else {
                    console.log(colors.yellow(`⚠️ Conexão fechada. Reconectando em 5s...`));
                    setTimeout(() => restartConnection(), 5000);
                }
            }
        } else if (connection === "open") {
            console.log(banner3.string);
            console.log(banner2.string);
            console.log(colors.green(mess.open()));
            console.log(colors.bgGreen(colors.black(" [SISTEMA] BOT CONECTADO E PRONTO PARA USO! ")));
            if (!hasSession) rl.close();
        } else if (connection === "connecting") {
            console.log(`${colors.white("×")} [${colors.red(date,time)}] - ${colors.yellow(mess.connecting())}`);
        }
    });
    
    // Carregamento inicial do Corvo com proteção contra erros
    let startcorvo;
    try {
        console.log(colors.yellow("[SISTEMA] Carregando lógica do Corvo (corvo.js)..."));
        startcorvo = require('../corvo.js');
        console.log(colors.green("[SISTEMA] Lógica carregada com sucesso!"));
    } catch (e) {
        console.log(colors.bgRed(colors.white(" [ERRO FATAL] Falha ao carregar corvo.js: ")), e);
    }

    // Watcher eficiente: recarrega apenas se o arquivo mudar, não a cada mensagem
    fs.watchFile(require.resolve('../corvo.js'), () => {
        console.log(colors.cyan('\n[HOT-RELOAD] Alteração detectada em corvo.js! Recarregando...'));
        delete require.cache[require.resolve('../corvo.js')];
        try {
            startcorvo = require('../corvo.js');
            console.log(colors.green('[HOT-RELOAD] Corvo.js recarregado com sucesso!'));
        } catch (e) {
            console.log(colors.red('[HOT-RELOAD] Erro ao recarregar corvo.js:'), e.message);
        }
    });

    corvo.ev.on("messages.upsert", (upsert) => {
        if (!upsert || !upsert.messages) return;
        // console.log(colors.cyan(` [RECEBIDO] Mensagem de ${upsert.messages[0].key.remoteJid}`));
        startcorvo(upsert, corvo, qrcode).catch(err => {
            console.log(colors.bgRed(colors.white(" [ERRO] Falha ao processar mensagem no startcorvo: ")), err);
        });
    });

    corvo.ev.process(async (events) => {
        if (!events["group-participants.update"]) return;
        try {
            const naga2 = events["group-participants.update"];
            if (!fs.existsSync(`./DADOS DO CORVO/grupos/ATIVAÇÕES-CORVO/${naga2.id}.json`)) return;

            const jsonGp = JSON.parse(fs.readFileSync(`./DADOS DO CORVO/grupos/ATIVAÇÕES-CORVO/${naga2.id}.json`));
            let grpmdt;
            try { grpmdt = await corvo.groupMetadata(naga2.id) } catch { return }
            if (!grpmdt?.id.endsWith('@g.us')) return;

            const membros_ = grpmdt.participants;
            
            const normalizar = alvo => {
                if (!alvo) return '';
                // Se alvo não for string (pode ser objeto), extrair o id
                if (typeof alvo !== 'string') {
                    if (alvo.id) return normalizar(alvo.id);
                    if (alvo.jid) return normalizar(alvo.jid);
                    return '';
                }
                if (alvo.includes('@lid') && membros_) {
                    const alvoLimpo = alvo.replace(/:.*(?=@)/, '');
                    for (const p of membros_) {
                        const pLid = (p.lid || '').replace(/:.*(?=@)/, '');
                        const pId = (p.id || '').replace(/:.*(?=@)/, '');
                        if ((pLid && pLid === alvoLimpo) || (pId && pId === alvoLimpo)) {
                            const campos = [p.id, p.jid, p.participantPn, p.participant];
                            for (const campo of campos) {
                                if (campo && typeof campo === 'string' && campo.includes('@s.whatsapp.net')) {
                                    return campo.replace(/:.*(?=@)/, '');
                                }
                            }
                            if (p.phoneNumber) {
                                return String(p.phoneNumber).replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                            }
                        }
                    }
                    return alvo.replace(/:.*(?=@)/, '');
                }
                return alvo;
            };

            const rawParticipant = naga2.participants[0];
            let participante = normalizar(typeof rawParticipant === 'string' ? rawParticipant : rawParticipant?.id || rawParticipant?.jid || '');
            if (participante.includes(':')) participante = participante.replace(/:.*(?=@)/, '');
            const numero = participante.split('@')[0];
            const NumeroDoBot = corvo.user.id.split(':')[0];
            if (participante.startsWith(corvo.user.id.split(':')[0])) return;
            
            function gerarContextNewsletter() {
                if (setting.channelnk === "0@newsletter") {
                    return {}; 
                }
                return {
                    isForwarded: true,
                    forwardingScore: 1,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: setting.channelnk,
                        newsletterName: infoConfig.NomeDoBot || "Bot",
                        serverMessageId: ''
                    }
                };
            }
            const NkChannelKk = gerarContextNewsletter();

            if (naga2.action === 'add' && nescessario.listanegraG.includes(participante)) {
                await corvo.sendMessage(grpmdt.id, { text: mess.blackList(grpmdt, naga2), mentions: [participante] });
                return corvo.groupParticipantsUpdate(grpmdt.id, [participante], 'remove');
            }
            if (naga2.action === 'add' && jsonGp[0].listanegra.includes(participante)) {
                await corvo.sendMessage(grpmdt.id, { text: mess.blackList(grpmdt, naga2), mentions: [participante] });
                return corvo.groupParticipantsUpdate(grpmdt.id, [participante], 'remove');
            }
            if (jsonGp[0].antifake && naga2.action === 'add' && !numero.startsWith('55')) {
                if (jsonGp[0].legenda_estrangeiro != "0") {
                    await corvo.sendMessage(grpmdt.id, { text: jsonGp[0].legenda_estrangeiro });
                }
                return setTimeout(() => corvo.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
            }
            if (jsonGp[0].ANTI_DDD.active && naga2.action === 'add' && jsonGp[0].ANTI_DDD.listaProibidos.includes(extractDDD(numero))) {
                await corvo.sendMessage(grpmdt.id, { text: mess.forbiddenStateFromDDD(participante, extractStateFromDDD, extractDDD), mentions: [participante] });
                return setTimeout(() => corvo.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
            }

            // [ANTI BOT - VERIFICAÇÃO DE METADATA (CONTA BUSINESS/BOT)]
            if (jsonGp[0].antibot && naga2.action === 'add') {
                try {
                    const waStatus = await corvo.onWhatsApp(participante);
                    if (waStatus && waStatus[0] && waStatus[0].isBusiness) {
                        await corvo.sendMessage(grpmdt.id, { 
                            text: `🤖 *ANTI-BOT SISTEMA* 🤖\n\nUma conta identificada como *Business/Bot* (@${numero}) tentou entrar no grupo. Removendo imediatamente!`, 
                            mentions: [participante] 
                        });
                        return setTimeout(() => corvo.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
                    }
                } catch (err) {
                    console.log("Erro na checagem antibot metadata:", err);
                }
            }

            const tipoMidia = url => {
                if (!url) return null;
                const ext = url.slice(url.lastIndexOf('.') + 1).toLowerCase();
                return ext.match(/jpe?g|png|gif|webp/) ? 'image' :
                       ext.match(/mp4|mov|mkv|avi|webm/) ? 'video' : null;
            };

            const fotoPerfil = async jid => {
                try {
                    return await corvo.profilePictureUrl(jid, 'image');
                } catch {
                    return 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
                }
            };

            const mdata_2 = grpmdt || await corvo.groupMetadata(naga2.id);
            if (jsonGp[0].antifake && !numero.startsWith('55')) return;
            const gp = jsonGp[0];
            const wl = gp.wellcome?.[0];
            const wl2 = gp.wellcome?.[1];
            const subject = mdata_2.subject || '';
            const prefixo = gp.multiprefix ? gp.prefixos?.[0] : setting.prefix;
            const desc = mdata_2.desc || '';
            const [ppimg] = await Promise.all([fotoPerfil(participante)]);
            const fundo = wl?.fundobv || ppimg;
            const acao = naga2.action;

            const legendaBase = (txt) => txt
                .replace('#hora#', time)
                .replace('#nomedogp#', subject)
                .replace('#numerodele#', '@' + numero)
                .replace('#numerobot#', NumeroDoBot)
                .replace('#prefixo#', prefixo)
                .replace('#descrição#', desc)
                .replace('#estado#', extractStateFromNumber(numero));

            // Criar lista de menções incluindo tanto @s.whatsapp.net quanto @lid para garantir menção real
            const mentionList = [participante];
            if (participante.includes('@s.whatsapp.net')) {
                const numP = participante.split('@')[0];
                const pData = membros_.find(p => {
                    const pId = (p.id || '').replace(/:.*(?=@)/, '').split('@')[0];
                    return pId === numP;
                });
                if (pData && pData.lid) mentionList.push(pData.lid.replace(/:.*(?=@)/, ''));
            } else if (participante.includes('@lid')) {
                const lidLimpo = participante.split('@')[0];
                const pData = membros_.find(p => {
                    const pLid = (p.lid || '').replace(/:.*(?=@)/, '').split('@')[0];
                    const pId = (p.id || '').replace(/:.*(?=@)/, '').split('@')[0];
                    return pLid === lidLimpo || pId === lidLimpo;
                });
                if (pData) {
                    const campos = [pData.id, pData.jid, pData.participantPn, pData.participant];
                    for (const campo of campos) {
                        if (campo && typeof campo === 'string' && campo.includes('@s.whatsapp.net')) {
                            mentionList.push(campo.replace(/:.*(?=@)/, ''));
                            break;
                        }
                    }
                    if (mentionList.length === 1 && pData.phoneNumber) {
                        mentionList.push(String(pData.phoneNumber).replace(/[^0-9]/g, '') + '@s.whatsapp.net');
                    }
                }
            }

            if (wl?.bemvindo1) {
                const legenda = acao === 'add' ? (wl.legendabv ? legendaBase(wl.legendabv) : welcome(numero, subject)) : (wl.legendasaiu ? legendaBase(wl.legendasaiu) : bye(numero));
                const tipo = tipoMidia(fundo);
                const msg = {
                    caption: legenda,
                    mentions: mentionList,
                    contextInfo: { ...NkChannelKk, mentionedJid: mentionList }
                };

                if (tipo === 'image') {
                    msg.image = { url: fundo };
                } else if (tipo === 'video') {
                    msg.video = { url: fundo };
                    msg.gifPlayback = true;
                } else {
                    msg.image = { url: ppimg };
                }

                await corvo.sendMessage(mdata_2.id, msg).catch(async () => {
                    msg.image = { url: ppimg };
                    await corvo.sendMessage(mdata_2.id, msg);
                });
            }
            if (wl2?.bemvindo2) {
                if (acao === 'add') {
                    const teks = acao === 'add' ? (wl2.legendabv2 ? legendaBase(wl2.legendabv2) : welcome2(numero, subject)) : (wl2.legendasaiu2 ? legendaBase(wl2.legendasaiu2) : bye2(numero));
                    await corvo.sendMessage(mdata_2.id, {
                        text: teks,
                        mentions: mentionList,
                        contextInfo: { ...NkChannelKk, mentionedJid: mentionList }
                    });
                } else if (acao === 'remove') {
                    const teks = wl2.legendasaiu2
                        ? legendaBase(wl2.legendasaiu2)
                        : bye2(numero);
                    await corvo.sendMessage(mdata_2.id, {
                        text: teks,
                        mentions: mentionList,
                        contextInfo: { ...NkChannelKk, mentionedJid: mentionList }
                    });
                }
            }

        } catch (e) {
            console.log(e);
        }
    });
}

startConnect().catch(async (error) => {
    console.log(colors.red(`[FALHA INICIAL] Ocorreu um erro ao tentar conectar: ${error.message}`));
    console.log(colors.yellow("Tentando reiniciar em 5 segundos..."));
    setTimeout(() => {
        startConnect().catch(e => console.log(colors.red("Erro na nova tentativa: " + e)));
    }, 5000);
});