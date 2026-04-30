/* 
* Não revenda ou passe para alguém essa base.
* Author: CORVO.
* Apoio: XERECA.
* Site api pra funcionar os downloads: https://corvo-md.com
*/

const { generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');

module.exports = async (client, from, pushname, prefix, msg, sender) => {
    try {
        const donoBot = "𝐂𝐎𝐑𝐕𝐎"; 
        const nomeBot = "𝐂𝐎𝐑𝐕𝐎-𝐅𝐋𝐎𝐎𝐃";

        const textoMenu = `
┏━━━〔 ⚔️ 〕━━━┓
  ➲ 𝐔𝐒𝐔𝐀́𝐑𝐈𝐎: ${pushname}
  ➲ 𝐃𝐎𝐍𝐎: ${donoBot}
  ➲ 𝐁𝐎𝐓: ${nomeBot}
┗━━━〔 ⚔️ 〕━━━┛

╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
     📑 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

Clique nos botões abaixo para executar os comandos de flood e automação rapidamente.

> 🦇 𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘣𝘺 𝘊𝘰𝘳𝘷𝘰`.trim();

        const buttons = [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "🚀 DIVULGAR",
                    id: `${prefix}div`
                })
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "⚙️ CONFIG DIV",
                    id: `${prefix}setdiv`
                })
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "💥 NUKE",
                    id: `${prefix}nuke`
                })
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "🤖 AUTO-ENTRADA",
                    id: `${prefix}autojoin`
                })
            }
        ];

        const interactiveMessage = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: textoMenu
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: "© 2026 Corvo Flood Systems"
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: "𝕸𝕰𝕹𝖀 𝕴𝕹𝕿𝕰𝕽𝕬𝕿𝕴𝐕𝕺",
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: buttons
                        })
                    })
                }
            }
        };

        const message = generateWAMessageFromContent(from, interactiveMessage, { 
            userJid: client.user.id, 
            quoted: msg 
        });

        await client.relayMessage(from, message.message, { messageId: message.key.id });

    } catch (err) {
        console.log("Erro no menu: " + err);
        // Fallback caso os botões falhem
        await client.sendMessage(from, { text: "❌ Erro ao gerar menu interativo." }, { quoted: msg });
    }
};
