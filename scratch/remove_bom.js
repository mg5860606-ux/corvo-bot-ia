const fs = require('fs');
const path = './DADOS DO CORVO/usuarios/users.json';
try {
    let content = fs.readFileSync(path, 'utf8');
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
        fs.writeFileSync(path, content, 'utf8');
        console.log('BOM removed from users.json');
    } else {
        console.log('No BOM found in users.json');
    }
} catch (e) {
    console.error(e);
}
