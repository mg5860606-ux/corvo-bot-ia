const fs = require('fs');

let content = fs.readFileSync('corvo.js', 'utf8');

// 1. Alterar o comando /editbot
const oldEditBot = `          case 'editbot': {
            if (!SoDono) return reply(mess.onlyOwner());
            if (!q) return reply("❌ Use: " + prefix + "editbot on/off");
            if (q.toLowerCase() === 'on') { global.aiEditMode = true; return reply("✅ Modo Assistente ATIVADO!"); }
            if (q.toLowerCase() === 'off') { global.aiEditMode = false; return reply("❌ Modo Assistente DESATIVADO."); }
          }
          break;`;

const newEditBot = `          case 'editbot': {
            if (!SoDono) return reply(mess.onlyOwner());
            global.aiEditMode = !global.aiEditMode;
            return reply(global.aiEditMode ? "✅ Modo Assistente ATIVADO!" : "❌ Modo Assistente DESATIVADO.");
          }
          break;`;

content = content.replace(oldEditBot, newEditBot);

// 2. Adicionar o sistema de memória na lógica do assistente
// Vamos procurar a linha onde a IA é chamada na VERSÃO AVANÇADA
const searchLine = 'let aiResponse = await callGeminiWithFallback(prompt, mediaBuffer ? { data: mediaBuffer, mimeType: mimeType } : null);';

const memoryLogic = `
                // --- SISTEMA DE MEMÓRIA ---
                const memoryFile = './DADOS DO CORVO/func/ai_memory.json';
                let history = [];
                if (fs.existsSync(memoryFile)) {
                    try { history = JSON.parse(fs.readFileSync(memoryFile)); } catch (e) {}
                }
                
                // Manter apenas as últimas 20 mensagens para não pesar o prompt
                if (history.length > 20) history = history.slice(-20);
                
                history.push({ role: 'user', content: body });
                
                let historyText = history.map(h => (h.role === 'user' ? 'Dono: ' : 'Você: ') + h.content).join('\\n');
                let fullPrompt = prompt + "\\n\\nHISTÓRICO RECENTE DAS CONVERSAS:\\n" + historyText;

                let aiResponse = await callGeminiWithFallback(fullPrompt, mediaBuffer ? { data: mediaBuffer, mimeType: mimeType } : null);
                
                history.push({ role: 'bot', content: aiResponse });
                fs.writeFileSync(memoryFile, JSON.stringify(history, null, 2));
                // --------------------------
`;

content = content.replace(searchLine, memoryLogic);

fs.writeFileSync('corvo.js', content);
console.log('Update completed');
