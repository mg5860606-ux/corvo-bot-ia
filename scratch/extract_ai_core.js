const fs = require('fs');
const path = require('path');

const corvoPath = path.join(__dirname, '../corvo.js');
const corvoContent = fs.readFileSync(corvoPath, 'utf8');

// The lines we want to extract are between the GEMINI_TOOLS declaration and the end of callGroqAgent
// GEMINI_TOOLS starts roughly at `const GEMINI_TOOLS = [`
// callGroqAgent ends at the closing brace of `async function callGroqAgent`

const startIndex = corvoContent.indexOf('const GEMINI_TOOLS = [');
// Find the end of callGroqAgent
const callGroqAgentIndex = corvoContent.indexOf('async function callGroqAgent');
const endOfCallGroqAgentIndex = corvoContent.indexOf('}', callGroqAgentIndex + 800) + 1; // Approximate length of the function is ~800 chars

// Wait, let's just find `// =========================================================================\r\n\r\nglobal.modoAI = `
const endMarker = corvoContent.indexOf('global.modoAI =');
const endMarkerFinal = corvoContent.lastIndexOf('}', endMarker) + 1;

let extractedCode = corvoContent.substring(startIndex, endMarkerFinal);

const header = `const fs = require('fs');
const { execSync } = require('child_process');
const moment = require('moment-timezone');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Groq = require('groq-sdk');
const { color } = require('../ARQUIVES/funcoes/exports.js');

// Helper to access globals
const getConfigAdmin = () => global.CONFIG_ADMIN || {
  MODEL_PRIMARY: "gemini-1.5-flash",
  MODEL_SECONDARY: "gemini-1.5-pro",
  MODEL_TERTIARY: "gemini-2.0-flash-exp",
  GOOGLE_API_KEYS: []
};
const getConfigGroq = () => global.CONFIG_GROQ || {
  KEYS: [], MODEL: "llama-3.3-70b-versatile"
};

`;

// Replace CONFIG_ADMIN and CONFIG_GROQ references with getConfigAdmin() and getConfigGroq()
extractedCode = extractedCode.replace(/CONFIG_ADMIN\.GOOGLE_API_KEYS/g, 'getConfigAdmin().GOOGLE_API_KEYS');
extractedCode = extractedCode.replace(/CONFIG_ADMIN\.MODEL_PRIMARY/g, 'getConfigAdmin().MODEL_PRIMARY');
extractedCode = extractedCode.replace(/CONFIG_ADMIN\.MODEL_SECONDARY/g, 'getConfigAdmin().MODEL_SECONDARY');
extractedCode = extractedCode.replace(/CONFIG_ADMIN\.MODEL_TERTIARY/g, 'getConfigAdmin().MODEL_TERTIARY');
extractedCode = extractedCode.replace(/CONFIG_GROQ\.KEYS/g, 'getConfigGroq().KEYS');
extractedCode = extractedCode.replace(/CONFIG_GROQ\.MODEL/g, 'getConfigGroq().MODEL');

// Replace the original chunk in corvo.js
const requireStatement = `const { callGeminiAI, callGeminiWithFallback, callGeminiAgentInternal, callGeminiAgent, callGroqAI, callGroqAgent } = require('./ARQUIVES/ai_core.js');\n`;

const newCorvoContent = corvoContent.substring(0, startIndex) + requireStatement + corvoContent.substring(endMarkerFinal);

const aiCorePath = path.join(__dirname, '../ARQUIVES/ai_core.source.js');

fs.writeFileSync(aiCorePath, header + extractedCode + `\nmodule.exports = { callGeminiAI, callGeminiWithFallback, callGeminiAgentInternal, callGeminiAgent, callGroqAI, callGroqAgent };`, 'utf8');
fs.writeFileSync(corvoPath, newCorvoContent, 'utf8');

console.log("Extraction complete.");
