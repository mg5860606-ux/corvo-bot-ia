const fs = require('fs');

let code = fs.readFileSync('corvo.js', 'utf8');

const headInject = `
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const pdfParse = require('pdf-parse');
const googleIt = require('google-it');

const CONFIG_ADMIN = {
    GOOGLE_API_KEYS: [
        /* Api 1 */ "AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q",
        /* Api 2 */ "",
        /* Api 3 */ "",
        /* Api 4 */ "",
        /* Api 5 */ "",
        /* Api 6 */ "",
        /* Api 7 */ "",
        /* Api 8 */ "",
        /* Api 9 */ "",
        /* Api 10 */ "",
        /* Api 11 */ "",
        /* Api 12 */ "",
        /* Api 13 */ "",
        /* Api 14 */ "",
        /* Api 15 */ ""
    ],
    MODEL_PRIMARY: "gemini-1.5-flash",
    MODEL_SECONDARY: "gemini-1.5-pro",
    MODEL_TERTIARY: "gemini-pro"
};

global.aiEditMode = false;
global.currentApiKeyIndex = 0;

async function callGeminiAI(prompt, mediaData = null, modelName = CONFIG_ADMIN.MODEL_PRIMARY) {
    const keys = CONFIG_ADMIN.GOOGLE_API_KEYS.filter(k => k && k.trim() !== "");
    if (keys.length === 0) throw new Error("Nenhuma API key configurada.");
    
    for (let i = 0; i < keys.length; i++) {
        const keyToUse = keys[global.currentApiKeyIndex];
        global.currentApiKeyIndex = (global.currentApiKeyIndex + 1) % keys.length;
        
        try {
            const genAI = new GoogleGenerativeAI(keyToUse);
            const model = genAI.getGenerativeModel({ model: modelName });
            let parts = [{ text: prompt }];
            if (mediaData) {
                parts.push({ inlineData: { data: mediaData.data.toString("base64"), mimeType: mediaData.mimeType } });
            }
            const result = await model.generateContent(parts);
            return (await result.response).text().trim();
        } catch (e) {
            console.error(\`[AI-ERROR] Model \${modelName} failed:\`, e.message);
            if (e.message.includes("429") || e.message.includes("quota") || e.message.includes("API key not valid")) continue;
            throw e;
        }
    }
    throw new Error("Todas as chaves de API falharam ou atingiram o limite.");
}

async function callGeminiWithFallback(prompt, mediaData = null) {
    try { return await callGeminiAI(prompt, mediaData, CONFIG_ADMIN.MODEL_PRIMARY); }
    catch (e) {
        try { return await callGeminiAI(prompt, mediaData, CONFIG_ADMIN.MODEL_SECONDARY); }
        catch (e2) { return await callGeminiAI(prompt, mediaData, CONFIG_ADMIN.MODEL_TERTIARY); }
    }
}
`;

const assistantLogic = `
        // MODO ASSISTENTE IA - VERSÃO AVANÇADA
        const isMentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.includes(botNumber) || 
                          body.toLowerCase().startsWith('corvo,') || body.toLowerCase().startsWith('corvo ');

        if (global.aiEditMode && isMentioned && SoDono) {
            try {
                reply("⏳ Pensando...");

                let mediaBuffer = null;
                let mimeType = null;

                const msgMedia = info.message?.imageMessage || info.message?.videoMessage || info.message?.documentMessage || 
                               info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage || 
                               info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage || 
                               info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.documentMessage;

                if (msgMedia) {
                    mimeType = msgMedia.mimetype;
                    let typeStr = mimeType.includes('image') ? 'image' : mimeType.includes('video') ? 'video' : 'document';
                    mediaBuffer = await getFileBuffer(msgMedia, typeStr);
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

                const promptText = \`Você é o Corvo, um desenvolvedor e assistente super avançado, sarcástico, mas muito prestativo. Você age como uma pessoa real, não como um robô. Fale de forma natural, usando algumas gírias leves de programação. Nada de "Como uma IA...". Você foi criado por Marcos (o dono).

Dono: \${pushname}
Instrução: "\${body}"

ÁRVORE DE DIRETÓRIOS (Use para saber onde estão os arquivos do bot):
\${getBotFileTree()}

HABILIDADES:
1. Se precisar pesquisar na web: responda exatamente com "[SEARCH] o que pesquisar".
2. Se o dono pedir para ver uma função ou "case": responda com "[READ] o bloco de código".
3. Se ele pedir para editar um arquivo (ex: corvo.js): responda com "[EDIT: caminho_do_arquivo] o código COMPLETO da área corrigida".
4. Se ele pedir para criar um PDF (ex: colocar um comando num PDF): responda com "[PDF_CREATE: nome.pdf] o texto do PDF".
5. Se não for comando de código/arquivo, apenas converse normalmente, seja legal e proativo. \`;

                const memoryFile = './DADOS DO CORVO/func/ai_memory.json';
                let history = [];
                if (fs.existsSync(memoryFile)) {
                    try { history = JSON.parse(fs.readFileSync(memoryFile)); } catch (e) {}
                }
                if (history.length > 20) history = history.slice(-20);
                history.push({ role: 'user', content: body });
                
                let historyText = history.map(h => (h.role === 'user' ? 'Dono: ' : 'Corvo: ') + h.content).join('\\n');
                let fullPrompt = promptText + "\\n\\nHISTÓRICO DA CONVERSA:\\n" + historyText;

                let aiResponse = await callGeminiWithFallback(fullPrompt, mediaBuffer ? { data: mediaBuffer, mimeType: mimeType } : null);
                
                history.push({ role: 'bot', content: aiResponse });
                fs.writeFileSync(memoryFile, JSON.stringify(history, null, 2));

                if (aiResponse.startsWith("[SEARCH]")) {
                    const query = aiResponse.replace("[SEARCH]", "").trim();
                    reply("🔍 Buscando na web por: " + query);
                    const searchRes = await googleIt({ query: query });
                    let resBody = "🌐 *RESULTADOS DA BUSCA* 🌐\\n\\n";
                    searchRes.slice(0, 3).forEach((r, i) => {
                        resBody += \`*\${i + 1}. \${r.title}*\\n🔗 \${r.link}\\n\\n\`;
                    });
                    reply(resBody);
                } else if (aiResponse.startsWith("[READ]")) {
                    const code = aiResponse.replace("[READ]", "").trim();
                    await enviarTextoGrande(corvo, from, "✅ Código encontrado:\\n\\n" + code, info);
                } else if (aiResponse.startsWith("[EDIT:")) {
                    const match = aiResponse.match(/\\[EDIT: (.*?)\\]/);
                    if (match) {
                        const targetFile = match[1];
                        let newCode = aiResponse.replace(/\\[EDIT: .*?\\]/, "").trim();
                        newCode = newCode.replace(/\`\`\`javascript/g, "").replace(/\`\`\`js/g, "").replace(/\`\`\`/g, "").trim();
                        fs.writeFileSync(targetFile, newCode, "utf8");
                        reply("✅ Feito mestre! Arquivo " + targetFile + " foi atualizado. Reiniciando pra aplicar...");
                        setTimeout(() => {
                            const { spawn } = require('child_process');
                            spawn('node', ['ARQUIVES/connect.js'], { stdio: 'inherit', detached: true }).unref();
                            process.exit();
                        }, 2000);
                    }
                } else if (aiResponse.startsWith("[PDF_CREATE:")) {
                    const match = aiResponse.match(/\\[PDF_CREATE: (.*?)\\]/);
                    if (match) {
                        const pdfName = match[1].endsWith('.pdf') ? match[1] : match[1] + '.pdf';
                        let pdfText = aiResponse.replace(/\\[PDF_CREATE: .*?\\]/, "").trim();
                        const pdfDoc = await PDFDocument.create();
                        const page = pdfDoc.addPage([600, 800]);
                        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
                        page.drawText(pdfText, { x: 50, y: 750, size: 12, font, color: rgb(0, 0, 0) });
                        const pdfBytes = await pdfDoc.save();
                        fs.writeFileSync(pdfName, Buffer.from(pdfBytes));
                        await corvo.sendMessage(from, { document: fs.readFileSync(pdfName), mimetype: 'application/pdf', fileName: pdfName }, { quoted: info });
                        fs.unlinkSync(pdfName);
                    }
                } else {
                    reply(aiResponse);
                }
            } catch (e) {
                reply("❌ Deu erro aqui: " + e.message);
            }
            return;
        }
`;

const toggleCommand = `
          case 'editbot': {
            if (!SoDono) return reply(mess.onlyOwner());
            global.aiEditMode = !global.aiEditMode;
            return reply(global.aiEditMode ? "✅ Modo Assistente ATIVADO!" : "❌ Modo Assistente DESATIVADO.");
          }
          break;
`;

// Insert header
const headerTarget = "const moment = require('moment-timezone');";
if (code.includes(headerTarget)) {
    code = code.replace(headerTarget, headerTarget + "\\n" + headInject);
}

// Insert logic before switch
const switchTarget = "switch (command) {";
if (code.includes(switchTarget)) {
    code = code.replace(switchTarget, assistantLogic + "\\n        " + switchTarget + "\\n" + toggleCommand);
}

fs.writeFileSync('corvo.js', code);
console.log('Injected AI successfully!');
