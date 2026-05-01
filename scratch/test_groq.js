const { callGroqAgent } = require('../ARQUIVES/ai_core.js');

// Configuração global simulada
global.CONFIG_GROQ = {
  KEYS: ["SUA_KEY_AQUI"], // O teste vai falhar se não tiver key, mas validamos a conexão
  MODEL: "llama-3.3-70b-versatile"
};

async function test() {
  try {
    console.log("Iniciando teste da IA...");
    // Simular o Marcos falando com o bot
    const resp = await callGroqAgent("Quem é você?", "Marcos", "test_chat");
    console.log("Resposta da IA:", resp);
  } catch (e) {
    console.log("Erro esperado (sem API Key):", e.message);
  }
}

test();
