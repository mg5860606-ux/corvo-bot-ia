const fs = require('fs');
const path = 'corvo.js';
let content = fs.readFileSync(path, 'utf8');

const targetLine = "async function startFunctionNaga() {";
const aiLogic = `
        const botNumber = corvo.user.id.split(':')[0] + '@s.whatsapp.net';
        const isMentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.includes(botNumber) || 
                          info.message?.requestPaymentMessage?.noteMessage?.extendedTextMessage?.contextInfo?.mentionedJid?.includes(botNumber) ||
                          body.toLowerCase().includes('corvo');

        if (global.aiEditMode && isMentioned && SoDono) {
            const getBotFileTree = (dir = ".", depth = 2) => {
                let res = [];
                try {
                    const list = fs.readdirSync(dir);
                    list.forEach(file => {
                        if (['node_modules', '.git', '.npm', 'scratch'].includes(file) || file.startsWith('.')) return;
                        const p = (dir === "." ? "" : dir + "/") + file;
                        const stat = fs.statSync(p);
                        res.push(p);
                        if (stat.isDirectory() && depth > 0) res = res.concat(getBotFileTree(p, depth - 1));
                    });
                } catch (e) {}
                return res.join("\\n");
            };

            const fileTree = getBotFileTree();
            const prompt = \`Você é o Assistente Autônomo do Corvo Bot.
Você tem acesso a todos os arquivos do projeto listados abaixo.
O dono enviou uma instrução: "\${body}"

ESTRUTURA DE ARQUIVOS:
\${fileTree}

REGRAS:
1. Se o dono pedir para VER um código ou uma "case" (ex: "me manda a case do antiporn"), localize o arquivo (provavelmente corvo.js) e responda APENAS com o bloco de código solicitado. Comece sua resposta com "[READ]".
2. Se o dono pedir para EDITAR ou ATUALIZAR algo, localize o arquivo, leia o conteúdo e gere o código COMPLETO corrigido para o arquivo. Comece sua resposta com "[EDIT: caminho/do/arquivo]".
3. Use o contexto de fotos/vídeos se o link for fornecido (não implementado nesta etapa, mas mantenha em mente).
4. Seja profissional e direto.

Se for apenas uma conversa, responda normalmente.\`;

            try {
                reply("⏳ Processando solicitação do dono...");
                const aiResponse = await callGeminiWithFallback(prompt);

                if (aiResponse.startsWith("[READ]")) {
                    const code = aiResponse.replace("[READ]", "").trim();
                    await corvo.sendMessage(from, { text: "✅ Aqui está o código solicitado:\\n\\n" + code }, { quoted: info });
                } else if (aiResponse.startsWith("[EDIT:")) {
                    const targetFile = aiResponse.match(/\\[EDIT: (.*?)\\]/)[1];
                    let newCode = aiResponse.replace(/\\[EDIT: .*?\\]/, "").trim();
                    // Remover markdown
                    newCode = newCode.replace(/\`\`\`javascript/g, "").replace(/\`\`\`js/g, "").replace(/\`\`\`/g, "").trim();
                    
                    if (fs.existsSync(targetFile)) {
                        fs.writeFileSync(targetFile, newCode, "utf8");
                        reply(\`✅ Arquivo \${targetFile} atualizado com sucesso! Reiniciando...\`);
                        setTimeout(() => {
                            const { spawn } = require('child_process');
                            spawn('node', ['ARQUIVES/connect.js'], { stdio: 'inherit', detached: true }).unref();
                            process.exit();
                        }, 2000);
                    } else {
                        reply(\`❌ Arquivo não encontrado para edição: \${targetFile}\`);
                    }
                } else {
                    reply(aiResponse);
                }
            } catch (e) {
                reply("❌ Erro na IA: " + e.message);
            }
            return;
        }
`;

if (content.includes(targetLine)) {
    content = content.replace(targetLine, targetLine + aiLogic);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Edit successful');
} else {
    console.log('Target line not found');
}
