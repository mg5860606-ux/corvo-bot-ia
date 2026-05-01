const fs = require('fs');
let content = fs.readFileSync('corvo.js', 'utf8');
let lines = content.split('\n');

// Line 11355 is index 11354
if (lines[11354].includes('}, { quoted: info });')) {
    lines[11354] = lines[11354].replace('}, { quoted: info });', '} } }, { quoted: info });');
    console.log('Fixed line 11355');
} else {
    console.log('Line 11355 mismatch:', lines[11354]);
}

fs.writeFileSync('corvo.js', lines.join('\n'), 'utf8');
