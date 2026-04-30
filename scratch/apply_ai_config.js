const fs = require('fs');
const path = 'corvo.js';
let content = fs.readFileSync(path, 'utf8');

const headerPart = "Site api pra funcionar os downloads: https://corvoapis.site";
const aiConfig = `

const { GoogleGenerativeAI } = require("@google/generative-ai");

// CONFIGURAÇÃO DE ADMINISTRAÇÃO AUTÔNOMA
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
    try {
        return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_PRIMARY);
    } catch (e) {
        try {
            return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_SECONDARY);
        } catch (e2) {
            return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_TERTIARY);
        }
    }
}
`;

if (content.includes(headerPart)) {
    const lines = content.split(/\r?\n/);
    const index = lines.findIndex(l => l.includes(headerPart));
    if (index !== -1 && lines[index+1].includes("*/")) {
        lines.splice(index + 2, 0, aiConfig);
        fs.writeFileSync(path, lines.join('\n'), 'utf8');
        console.log('Edit successful');
    } else {
        console.log('Closing comment not found after header part');
    }
} else {
    console.log('Header part not found');
}
