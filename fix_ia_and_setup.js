const fs = require('fs');

// Fix 1: IA responding when off in corvo.js
let corvoContent = fs.readFileSync('corvo.js', 'utf8');
const iaSearch = 'async function responderComInteligencia(texto, estilo, mediaData_ = null) {';
if (corvoContent.includes(iaSearch)) {
    console.log('Patching responderComInteligencia in corvo.js...');
    corvoContent = corvoContent.replace(iaSearch, iaSearch + '\n          if (!nescessario.corvoia) return false;');
}

fs.writeFileSync('corvo.js', corvoContent, 'utf8');

// Fix 2: connect.js setup flow
let connectContent = fs.readFileSync('ARQUIVES/connect.js', 'utf8');
const setupSearch = 'if (!infoConfig.NomeDoBot || !infoConfig.ownerName || !infoConfig.ownerNumber) {';
if (connectContent.includes(setupSearch)) {
    console.log('Patching setup flow in connect.js...');
    // We only ask if EVERYTHING is empty. If they have at least one thing, we assume they know what they are doing.
    // OR we check for a special skip file.
    connectContent = connectContent.replace(setupSearch, 'if (!infoConfig.NomeDoBot && !infoConfig.ownerName && !infoConfig.ownerNumber) {');
}

fs.writeFileSync('ARQUIVES/connect.js', connectContent, 'utf8');
