const fs = require('fs');
const lines = fs.readFileSync('corvo.js', 'utf8').split(/\r?\n/);
const start = lines.findIndex(l => l.includes("const isMentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.includes(botNumberAI) ||"));
const end = lines.findIndex(l => l.includes("switch (command) {"));

if (start !== -1 && end !== -1 && start < end) {
    // We want to delete from 'start' to the line before 'end'
    lines.splice(start, end - start);
    fs.writeFileSync('corvo.js', lines.join('\n'));
    console.log('Removed old logic block');
} else {
    console.log('Could not find bounds');
}
