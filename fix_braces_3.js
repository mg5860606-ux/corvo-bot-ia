const fs = require('fs');
let content = fs.readFileSync('corvo.js', 'utf8');

const target = 'forwardedNewsletterMessageInfo: { newsletterJid: "120363173003902460@newsletter" } }, { quoted: info });';
const replacement = 'forwardedNewsletterMessageInfo: { newsletterJid: "120363173003902460@newsletter" } } }, { quoted: info });';

if (content.includes(target)) {
    console.log('Fixing braces at 20055...');
    content = content.replace(target, replacement);
} else {
    console.log('Target not found literal.');
}

fs.writeFileSync('corvo.js', content, 'utf8');
