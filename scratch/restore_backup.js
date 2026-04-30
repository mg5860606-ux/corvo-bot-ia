const fs = require('fs');
fs.copyFileSync('corvo.js.backup', 'corvo.js');
console.log('Restored corvo.js from corvo.js.backup');
