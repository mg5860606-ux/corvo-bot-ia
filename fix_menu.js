const fs = require('fs');
let content = fs.readFileSync('corvo.js', 'utf8');

const target = `var msgMenu = generateWAMessageFromContent(from, {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      contextInfo: {
                        participant: sender,
                        quotedMessage: { conversation: "░⃟⃛🕸️ ᴀǫᴜɪ ᴇsᴛᴀ sᴇᴜ ᴍᴇɴᴜ ░⃟⃛🕸️" }
                      },
                      body: { text: "*🕸️ ᴍᴇɴᴜ ɪɴᴛᴇʀᴀᴛɪᴠᴏ 🕸️*" },
                      carouselMessage
                    }
                  }
                }
              }, {});`;

// Let's use a simpler target if literal fails
if (content.includes('quotedMessage: { conversation: "░⃟⃛🕸️ ᴀǫᴜɪ ᴇsᴛᴀ sᴇᴜ ᴍᴇɴᴜ ░⃟⃛🕸️" }')) {
    console.log('Found menu start...');
}

// I'll rewrite the menu block completely
let lines = content.split('\n');
let start = -1;
let end = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('var msgMenu = generateWAMessageFromContent(from, {')) {
        start = i;
    }
    if (start !== -1 && lines[i].includes('}, {});') && i > start) {
        end = i;
        break;
    }
}

if (start !== -1 && end !== -1) {
    console.log(`Replacing menu from line ${start+1} to ${end+1}`);
    const newMenu = `              var msgMenu = generateWAMessageFromContent(from, {
                interactiveMessage: {
                  contextInfo: {
                    participant: sender,
                    quotedMessage: { conversation: "░⃟⃛🕸️ ᴀǫᴜɪ ᴇsᴛᴀ sᴇᴜ ᴍᴇɴᴜ ░⃟⃛🕸️" }
                  },
                  header: {
                    title: "Corvo",
                    subtitle: "Menu",
                    hasMediaAttachment: true,
                    ...(mediaMenu.videoMessage
                      ? { videoMessage: mediaMenu.videoMessage }
                      : { imageMessage: mediaMenu.imageMessage })
                  },
                  headerType: mediaMenu.videoMessage ? "VIDEO" : "IMAGE",
                  body: { text: textok },
                  footer: { text: "ᴇsᴄᴏʟʜᴀ ᴀ ᴏᴘçãᴏ ᴀʙᴀɪxᴏ" },
                  nativeFlowMessage: { buttons: botoes }
                }
              }, {});`;
    lines.splice(start, end - start + 1, newMenu);
    fs.writeFileSync('corvo.js', lines.join('\n'), 'utf8');
} else {
    console.log('Menu block not found.');
}
