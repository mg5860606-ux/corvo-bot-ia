const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'ARQUIVES', 'ai_core.source.js');
const outputFile = path.join(__dirname, 'ARQUIVES', 'ai_core.js');

console.log("🛡️ Iniciando Criptografia do Núcleo de IA...");

if (!fs.existsSync(inputFile)) {
    console.error("❌ Erro: O arquivo ai_core.source.js não foi encontrado!");
    process.exit(1);
}

try {
    const sourceCode = fs.readFileSync(inputFile, 'utf8');

    console.log("⏳ Ofuscando...");

    // Criptografia pesada, pois o arquivo é pequeno e aguenta!
    const obfuscationResult = JavaScriptObfuscator.obfuscate(sourceCode, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1.0,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1.0,
        debugProtection: false,
        disableConsoleOutput: false,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        numbersToExpressions: true,
        renameGlobals: false,
        selfDefending: false,
        simplify: true,
        splitStrings: true,
        splitStringsChunkLength: 5,
        stringArray: true,
        stringArrayCallsTransform: true,
        stringArrayEncoding: ['base64'],
        stringArrayIndexShift: true,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayWrappersCount: 2,
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersParametersMaxCount: 4,
        stringArrayWrappersType: 'function',
        stringArrayThreshold: 1.0,
        unicodeEscapeSequence: false
    });

    fs.writeFileSync(outputFile, obfuscationResult.getObfuscatedCode());

    console.log("✅ Criptografia Concluída com Sucesso!");
    console.log(`🔒 O núcleo ${outputFile} foi gerado e está protegido.`);
} catch (error) {
    console.error("❌ Ocorreu um erro durante a ofuscação:", error);
}
