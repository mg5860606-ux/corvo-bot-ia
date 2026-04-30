const fs = require('fs');
let content = fs.readFileSync('corvo.js', 'utf8');
content = content.replace(/bwait /g, "await ");
fs.writeFileSync('corvo.js', content);
console.log('Fixed all bwait typos');
