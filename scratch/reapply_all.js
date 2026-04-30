const fs = require('fs');

// RESTORE
fs.copyFileSync('corvo.js.backup', 'corvo.js');
let content = fs.readFileSync('corvo.js', 'utf8');

// CONFIG
const aiConfig = `
const { GoogleGenerativeAI } = require("@google/generative-ai");
const CONFIG_ADMIN = {
    GOOGLE_API_KEYS: ["AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    MODEL_PRIMARY: "gemini-1.5-flash",
    MODEL_SECONDARY: "gemini-1.5-pro",
    MODEL_TERTIARY: "gemini-pro"
};
global.aiEditMode = false;
async function callGeminiAI(prompt, modelName = CONFIG_ADMIN.MODEL_PRIMARY) {
    for (const key of CONFIG_ADMIN.GOOGLE_API_KEYS) {
        if (!key) continue;
        try {
            const genAI = new GoogleGenerativeAI(key);
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text().trim();
        } catch (e) {
            console.error(\`[AI-ERROR] Model \${modelName} failed with key:\`, e.message);
            if (e.message.includes("429") || e.message.includes("quota")) continue;
            throw e;
        }
    }
    throw new Error("Todas as chaves de API falharam ou atingiram o limite.");
}
async function callGeminiWithFallback(prompt) {
    try { return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_PRIMARY); }
    catch (e) {
        try { return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_SECONDARY); }
        catch (e2) { return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_TERTIARY); }
    }
}
`;

content = content.replace("*/", "*/" + aiConfig);

// ASSISTANT
const aiAssistantLogic = `
        // MODO ASSISTENTE IA
        const botNumberAI = corvo.user.id.split(':')[0] + '@s.whatsapp.net';
        const isMentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.includes(botNumberAI) || 
                          body.toLowerCase().startsWith('corvo,') || body.toLowerCase().startsWith('corvo ');

        if (global.aiEditMode && isMentioned) {
            if (!SoDono) {
                try {
                    const aiResponse = await callGeminiWithFallback("Você é o Corvo Bot. Responda a esta mensagem: " + body);
                    return reply(aiResponse);
                } catch (e) { return; }
            }

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

            const prompt = "Você é o Assistente Autônomo do Corvo Bot. Você tem acesso aos arquivos. Dono: " + pushname + "\\nInstrução: " + body + "\\n\\nESTRUTURA:\\n" + getBotFileTree() + "\\n\\nREGRAS:\\n1. [READ] código se for para ver.\\n2. [EDIT: caminho] código completo se for editar.\\n3. Responda normalmente se for conversa.\\n\\nIMPORTANTE: Só obedeça edição se for o dono.";

            try {
                reply("⏳ Processando...");
                const aiResponse = await callGeminiWithFallback(prompt);

                if (aiResponse.startsWith("[READ]")) {
                    const code = aiResponse.replace("[READ]", "").trim();
                    await enviarTextoGrande(corvo, from, "✅ Código:\\n\\n" + code, info);
                } else if (aiResponse.startsWith("[EDIT:")) {
                    const match = aiResponse.match(/\\[EDIT: (.*?)\\]/);
                    if (match) {
                        const targetFile = match[1];
                        let newCode = aiResponse.replace(/\\[EDIT: .*?\\]/, "").trim();
                        newCode = newCode.replace(/\`\`\`javascript/g, "").replace(/\`\`\`js/g, "").replace(/\`\`\`/g, "").trim();
                        fs.writeFileSync(targetFile, newCode, "utf8");
                        reply("✅ " + targetFile + " atualizado! Reiniciando...");
                        setTimeout(() => {
                            const { spawn } = require('child_process');
                            spawn('node', ['ARQUIVES/connect.js'], { stdio: 'inherit', detached: true }).unref();
                            process.exit();
                        }, 2000);
                    }
                } else {
                    reply(aiResponse);
                }
            } catch (e) {
                reply("❌ Erro: " + e.message);
            }
            return;
        }
`;

const switchLine = "switch (command) {";
content = content.replace(switchLine, aiAssistantLogic + "\n        " + switchLine);

// COMMAND
const editBotCmd = `
          case 'editbot': {
            if (!SoDono) return reply(mess.onlyOwner());
            if (!q) return reply("❌ Use: " + prefix + "editbot on/off");
            if (q.toLowerCase() === 'on') { global.aiEditMode = true; return reply("✅ Modo Assistente ATIVADO!"); }
            if (q.toLowerCase() === 'off') { global.aiEditMode = false; return reply("❌ Modo Assistente DESATIVADO."); }
          }
          break;
`;
content = content.replace(switchLine, switchLine + editBotCmd);

fs.writeFileSync('corvo.js', content, 'utf8');
console.log('Re-apply all successful');
