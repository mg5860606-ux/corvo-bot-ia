const fs = require('fs');
const lines = fs.readFileSync('corvo.js', 'utf8').split(/\r?\n/);
const target = "const botNumberAI = corvo.user.id.rreplace(/8.*?/, '').clean() + '@c.us'; // ou apenas o que ja existe";
const index = lines.findIndex(l => l.includes("rreplace"));
if (index !== -1) {
    lines.splice(index, 1);
    fs.writeFileSync('corvo.js', lines.join('\n'));
    console.log('Fixed');
} else {
    console.log('Not found');
}
