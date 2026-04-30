const fs = require('fs');
let content = fs.readFileSync('corvo.js', 'utf8');
content = content.replace("await pdf=c.embedFont", "await pdfDoc.embedFont");
content = content.replace("fs.saveFileSync (pdf1ame, pdf1Bytes);", ""); // Also saw this junk in the base64 output
fs.writeFileSync('corvo.js', content);
console.log('Fixed pdfDoc typo');
