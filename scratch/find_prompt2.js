const fs = require('fs');
const lines = fs.readFileSync('corvo.js', 'utf8').split(/\r?\n/);
const index = lines.findIndex(l => l.includes("Fênix"));
if (index !== -1) {
    console.log('Found Fênix at line', index + 1);
} else {
    console.log('Not found');
    const i2 = lines.findIndex(l => l.includes("ESTRUTURA DE ARQUIVOS:"));
    console.log('ESTRUTURA DE ARQUIVOS at', i2 + 1);
}
