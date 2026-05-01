const fs = require('fs');
let content = fs.readFileSync('corvo.js', 'utf8');
let lines = content.split('\n');

// Line 22392 (index 22391)
lines[22391] = `              await corvo.relayMessage(from, {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      body: { text: \`⸺͟͞ꪶ𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐏𝐋𝐀𝐘 𝐕𝟐ꫂ ♪\` },
                      footer: { text: \`\${tempo}, \${pushname}! Aqui está o resultado da sua pesquisa, selecione a música a qual você deseja baixar.\` },
                      contextInfo: { participant: sender, quotedMessage: info.message },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "single_select",
                          buttonParamsJson: JSON.stringify({
                            title: "SELECIONAR",
                            sections: [{ title: NomeDoBot, highlight_label: "", rows: Lrows }]
                          })
                        }]
                      }
                    }
                  }
                }
              }, {});`;

fs.writeFileSync('corvo.js', lines.join('\n'), 'utf8');
