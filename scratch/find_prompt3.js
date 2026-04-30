const fs = require('fs');
const lines = fs.readFileSync('corvo.js', 'utf8').split(/\r?\n/);
const i = lines.findIndex(l => l.includes("getBotFileTree()"));
console.log(lines[i]);
