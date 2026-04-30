const fs = require('fs');
const lines = fs.readFileSync('corvo.js', 'utf8').split(/\r?\n/);
const index = lines.findIndex(l => l.includes("const prompt = `Você é"));
if (index !== -1) {
    console.log('Found at line', index + 1);
    console.log(lines.slice(index - 2, index + 5).join('\n'));
} else {
    console.log('Not found');
    const idx2 = lines.findIndex(l => l.includes("let fullPrompt = prompt +"));
    if (idx2 !== -1) console.log('fullPrompt at line', idx2 + 1);
}
