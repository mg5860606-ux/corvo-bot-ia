const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'corvo.source.js');
const outputFile = path.join(__dirname, 'corvo.js');

console.log("🛡️  Iniciando Criptografia do Código Fonte...");

if (!fs.existsSync(inputFile)) {
    console.error("❌ Erro: O arquivo corvo.source.js não foi encontrado!");
    console.error("Certifique-se de que o seu código original foi renomeado para corvo.source.js");
    process.exit(1);
}

try {
    const sourceCode = fs.readFileSync(inputFile, 'utf8');

    console.log("⏳ Ofuscando as linhas... (Isso pode demorar alguns segundos devido ao tamanho do arquivo)");

    // Configuração de ofuscação média-alta (balanceada para performance e segurança)
    const obfuscationResult = JavaScriptObfuscator.obfuscate(sourceCode, {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        disableConsoleOutput: false,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        numbersToExpressions: true,
        renameGlobals: false,
        selfDefending: false,
        simplify: true,
        splitStrings: false,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
    });

    fs.writeFileSync(outputFile, obfuscationResult.getObfuscatedCode());

    console.log("✅ Criptografia Concluída com Sucesso!");
    console.log(`🔒 O arquivo ${outputFile} foi gerado e está protegido.`);
    console.log("⚠️  Lembre-se de editar sempre o corvo.source.js e rodar este script novamente (node proteger.js) para aplicar as mudanças.");

} catch (error) {
    console.error("❌ Ocorreu um erro durante a ofuscação:", error);
}
