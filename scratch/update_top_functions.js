const fs = require('fs');
const path = 'corvo.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Atualizar Importações e Funções no topo
const topReplacement = `
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const pdfParse = require('pdf-parse');
const googleIt = require('google-it');

const CONFIG_ADMIN = {
    GOOGLE_API_KEYS: ["AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    MODEL_PRIMARY: "gemini-1.5-flash",
    MODEL_SECONDARY: "gemini-1.5-pro",
    MODEL_TERTIARY: "gemini-pro"
};

global.aiEditMode = false;

async function callGeminiAI(prompt, mediaData = null, modelName = CONFIG_ADMIN.MODEL_PRIMARY) {
    for (const key of CONFIG_ADMIN.GOOGLE_API_KEYS) {
        if (!key) continue;
        try {
            const genAI = new GoogleGenerativeAI(key);
            const model = genAI.getGenerativeModel({ model: modelName });
            
            let parts = [{ text: prompt }];
            if (mediaData) {
                parts.push({
                    inlineData: {
                        data: mediaData.data.toString("base64"),
                        mimeType: mediaData.mimeType
                    }
                });
            }

            const result = await model.generateContent(parts);
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

async function callGeminiWithFallback(prompt, mediaData = null) {
    try { return await callGeminiAI(prompt, mediaData, CONFIG_ADMIN.MODEL_PRIMARY); }
    catch (e) {
        try { return await callGeminiAI(prompt, mediaData, CONFIG_ADMIN.MODEL_SECONDARY); }
        catch (e2) { return await callGeminiAI(prompt, mediaData, CONFIG_ADMIN.MODEL_TERTIARY); }
    }
}
`;

// Substituir o bloco antigo (linhas 7 a 38 aprox)
const oldConfigPart = content.substring(content.indexOf('const { GoogleGenerativeAI }'), content.indexOf('async function startcorvo'));
content = content.replace(oldConfigPart, topReplacement + "\n");

fs.writeFileSync(path, content, 'utf8');
console.log('Top functions updated');
