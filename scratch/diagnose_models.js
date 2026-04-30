const { GoogleGenerativeAI } = require("@google/generative-ai");
const fetch = require("node-fetch");

async function listModels() {
    const key = "AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q"; // Chave 0 do arquivo
    console.log("Testando chave:", key.substring(0, 10) + "...");
    
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.models) {
            console.log("MODELOS DISPONÍVEIS NESTA CHAVE:");
            data.models.forEach(m => {
                console.log(`- ${m.name} (Suporta: ${m.supportedGenerationMethods.join(", ")})`);
            });
        } else {
            console.log("A API respondeu, mas não retornou modelos. Detalhes:");
            console.log(JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error("Erro ao conectar na API do Google:", e.message);
    }
}

listModels();
