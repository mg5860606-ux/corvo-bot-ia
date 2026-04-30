const fs = require('fs');
let content = fs.readFileSync('corvo.js', 'utf8');

const oldLogic = `
        if (global.aiEditMode && isMentioned) {
            if (!SoDono) {
                try {
                    const aiResponse = await callGeminiWithFallback("Você é o Corvo Bot. Responda a esta mensagem: " + body);
                    return reply(aiResponse);
                } catch (e) { return; }
            }
`;

const newLogic = `
        if (global.aiEditMode && isMentioned && SoDono) {
`;

if (content.includes("if (!SoDono) {")) {
    content = content.replace(oldLogic, newLogic);
    fs.writeFileSync('corvo.js', content);
    console.log('Fixed auth logic');
} else {
    console.log('Could not find old logic block to replace');
}
