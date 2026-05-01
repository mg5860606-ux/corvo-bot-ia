const fs = require('fs');
const { execSync } = require('child_process');
const moment = require('moment-timezone');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Groq = require('groq-sdk');
const { color } = require('../ARQUIVES/funcoes/exports.js');

// Helper to access globals
const getConfigGroq = () => global.CONFIG_GROQ || {
  KEYS: [], MODEL: "llama-3.3-70b-versatile"
};

const getConfigAdmin = () => global.CONFIG_ADMIN || {
  MODEL_PRIMARY: "gemini-1.5-flash",
  MODEL_SECONDARY: "gemini-1.5-pro",
  MODEL_TERTIARY: "gemini-2.0-flash-exp",
  GOOGLE_API_KEYS: []
};

// =========================================================================
//                             LÓGICA GROQ AI (PRIMÁRIA COM RODÍZIO)
// =========================================================================

async function callGroqAI(prompt, systemPrompt = "Você é um bot de WhatsApp humano e sarcástico.") {
  const keys = getConfigGroq().KEYS.filter(k => k && k.trim() !== "" && k !== "COLOQUE_SUA_API_AQUI");
  if (keys.length === 0) throw new Error("Nenhuma API key do Groq configurada.");

  for (let i = 0; i < keys.length; i++) {
    const keyToUse = keys[global.currentGroqKeyIndex];
    global.currentGroqKeyIndex = (global.currentGroqKeyIndex + 1) % keys.length;

    try {
      const groq = new Groq({ apiKey: keyToUse });
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
        model: getConfigGroq().MODEL,
        temperature: 0.7,
        max_tokens: 2048,
      });

      return completion.choices[0]?.message?.content || "";
    } catch (e) {
      console.error(` [GROQ-ERROR] Key Index ${global.currentGroqKeyIndex} failed:`, e.message);
      if (e.message.includes("429") || e.message.includes("limit") || e.message.includes("API key")) continue;
      throw e;
    }
  }
  throw new Error("Todas as chaves do Groq falharam ou atingiram o limite.");
}

async function callGroqAgent(userPrompt, pushName, from = null, botName = "Corvo", ownerName = "Mestre") {
  const keys = getConfigGroq().KEYS.filter(k => k && k.trim() !== "" && k !== "COLOQUE_SUA_API_AQUI");
  if (keys.length === 0) throw new Error("Nenhuma API key do Groq configurada.");

  const systemInstruction = `Você é o ${botName}, um bot de WhatsApp com personalidade forte, sarcástica, extremamente humano e leal ao seu dono.
Você NÃO é uma IA genérica ou assistente padrão, haja como um amigo real.
REGRAS:
1. Nunca diga que é robô, IA ou assistente. Você é o ${botName}.
2. Seja prestativo mas mantenha sua personalidade sarcástica e direta.
3. O usuário com quem você fala é o seu dono (${ownerName}), trate-o com respeito e lealdade absoluta, mas sem ser robótico.
4. NUNCA pergunte qual é o seu próprio nome e NUNCA pergunte como o usuário quer ser chamado. Você já sabe que seu nome é ${botName} e seu dono é ${ownerName}.
5. Mantenha as respostas concisas e naturais para o WhatsApp.
6. Se o usuário te cumprimentar ou chamar, responda de forma inteligente e desenvolva o assunto, evite respostas de uma única palavra.`;

  for (let i = 0; i < keys.length; i++) {
    const keyToUse = keys[global.currentGroqKeyIndex];
    global.currentGroqKeyIndex = (global.currentGroqKeyIndex + 1) % keys.length;

    try {
      const groq = new Groq({ apiKey: keyToUse });

      // Memória local
      if (!global.groqChatHistory) global.groqChatHistory = {};
      if (!global.groqChatHistory[from]) global.groqChatHistory[from] = [];

      const history = global.groqChatHistory[from];
      if (history.length > 20) global.groqChatHistory[from] = history.slice(-20);

      const messages = [
        { role: "system", content: systemInstruction },
        ...global.groqChatHistory[from],
        { role: "user", content: `[Usuário: ${pushName}]\n${userPrompt}` }
      ];

      const completion = await groq.chat.completions.create({
        messages: messages,
        model: getConfigGroq().MODEL,
        temperature: 0.8,
      });

      const response = completion.choices[0]?.message?.content || "";

      // Salvar no histórico
      global.groqChatHistory[from].push({ role: "user", content: userPrompt });
      global.groqChatHistory[from].push({ role: "assistant", content: response });

      return response;
    } catch (e) {
      console.error(` [GROQ-AGENT-ERROR] Key Index ${global.currentGroqKeyIndex} failed:`, e.message);
      if (e.message.includes("429") || e.message.includes("limit") || e.message.includes("API key")) continue;
      throw e;
    }
  }
  throw new Error("Todas as chaves do Groq no Agente falharam.");
}

// =========================================================================
//                             LÓGICA GEMINI (FALLBACK)
// =========================================================================

async function callGeminiAI(prompt, mediaData = null, modelName = getConfigAdmin().MODEL_PRIMARY) {
  const keys = getConfigAdmin().GOOGLE_API_KEYS.filter(k => k && k.trim() !== "" && k !== "COLOQUE_SUA_API_AQUI");
  
  if (keys.length === 0) {
    return await callGroqAI(prompt);
  }

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
      console.error(` [AI-ERROR] Model ${modelName} failed:`, e.message);
      if (e.message.includes("429") || e.message.includes("quota") || e.message.includes("API key not valid")) continue;
      throw e;
    }
  }
  return await callGroqAI(prompt);
}

async function callGeminiWithFallback(prompt, mediaData = null) {
  try {
    return await callGeminiAI(prompt, mediaData, getConfigAdmin().MODEL_PRIMARY);
  } catch (e) {
    return await callGroqAI(prompt);
  }
}

async function callGeminiAgent(userPrompt, pushName, corvo = null, from = null) {
  try {
    return await callGroqAgent(userPrompt, pushName, from);
  } catch (e) {
    const keys = getConfigAdmin().GOOGLE_API_KEYS.filter(k => k && k.trim() !== "" && k !== "COLOQUE_SUA_API_AQUI");
    if (keys.length > 0) {
        return await callGeminiAI(userPrompt);
    }
    throw e;
  }
}

module.exports = { callGeminiAI, callGeminiWithFallback, callGeminiAgent, callGroqAI, callGroqAgent };