const fs = require('fs');
let content = fs.readFileSync('corvo.js', 'utf8');
content = content.replace("bwait callGeminiWithFallback", "await callGeminiWithFallback");
fs.writeFileSync('corvo.js', content);
console.log('Fixed bwait typo');
