const fs = require('fs');
const path = 'corvo.js';
let content = fs.readFileSync(path, 'utf8');

// Corrigindo dataGp para jsonGp
if (content.includes('dataGp?.[0]?.multiprefix')) {
    content = content.replace(/dataGp\?\.\[0\]/g, 'jsonGp[0]');
    fs.writeFileSync(path, content, 'utf8');
    console.log('Variável dataGp corrigida para jsonGp!');
} else {
    console.log('Variável não encontrada para correção.');
}
