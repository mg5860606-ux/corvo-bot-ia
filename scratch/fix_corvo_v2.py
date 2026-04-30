
import os

file_path = r'c:\corvo-bot-corrigido\corvo.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Target is the corrupted block from line 11839 (approx) to 11874 (approx)
# Actually, I'll search for unique anchors.

target_part = """              var msg = generateWAMessageFromContent(from, {
                interactiveMessage: {
                  body: { text: '*Resultados da metadinha* 💝 ↴' },
                  carouselMessage:           case 'ytvideo':
          case 'ytmp4':
          case 'video':
          case 'playvideo':
          case 'playvid':
          case 'playmp4': {
            try {
              if (!q) return reply(`🎬 Exemplo: ${prefix}playvideo bad liar`)
              await reagir(from, "⏳")
              
              const res = await axios.get(`https://api.spiderx.com.br/api/downloads/play-video?search=${encodeURIComponent(q)}&api_key=${CONFIG_ADMIN.SPIDERX_API_KEY}`);
              const data = res.data;
              
              if (!data || !data.url) return reply("❌ Não encontrei vídeo para essa busca nos registros do SPIDERX.");
              
              const { title, thumbnail, total_duration_in_seconds, url } = data;
              const duracao = `${Math.floor(total_duration_in_seconds / 60)}:${String(total_duration_in_seconds % 60).padStart(2, '0')}`;
              
              const caption = `🎬 *𝐒𝐏𝐈𝐃𝐄𝐑𝐗 𝐕𝐈𝐃𝐄𝐎* 🎬\\n\\n📌 *Título:* {title}\\n⏱️ *Duração:* {duracao}\\n\\n*Enviando vídeo...*`;
              
              await corvo.sendMessage(from, { image: { url: thumbnail }, caption }, { quoted: info });
              
              const videoBuffer = await getBuffer(url);
              await corvo.sendMessage(from, { video: videoBuffer, caption: `✅ {title}`, mimetype: 'video/mp4' }, { quoted: info });
              
              await reagir(from, "✅");
            } catch (e) {
              console.error("[VIDEO-ERROR]", e.message);
              reply("❌ Erro ao processar vídeo: " + e.message);
            }
          }
          break;
site(quote, 40, 40)"""

# Wait, the caption has {title} and {duracao} which might be literal in the file or variables.
# Let's look at the view_file output carefully.
# 11860:               const caption = `🎬 *𝐒𝐏𝐈𝐃𝐄𝐑𝐗 𝐕𝐈𝐃𝐄𝐎* 🎬\n\n📌 *Título:* ${title}\n⏱️ *Duração:* ${duracao}\n\n*Enviando vídeo...*`;
# 11874: site(quote, 40, 40)

# I will use a regex-like approach or just very specific chunks.

# Let's try to replace the whole corrupted area.

replacement = """              var msg = generateWAMessageFromContent(from, {
                interactiveMessage: {
                  body: { text: '*Resultados da metadinha* 💝 ↴' },
                  carouselMessage: {
                    cards: [
                      {
                        header: {
                          hasMediaAttachment: true,
                          imageMessage: maleMedia.imageMessage
                        },
                        body: { text: "• Perfil Masculino 🕊️" },
                        footer: { text: NomeDoBot },
                        nativeFlowMessage: { buttons: [] }
                      },
                      {
                        header: {
                          hasMediaAttachment: true,
                          imageMessage: femaleMedia.imageMessage
                        },
                        body: { text: "• Perfil Feminino 🌸" },
                        footer: { text: NomeDoBot },
                        nativeFlowMessage: { buttons: [] }
                      }
                    ]
                  }
                }
              }, { quoted: info });

              await corvo.relayMessage(from, msg.message, { messageId: msg.key.id });

            } catch (e) {
              console.log('[METADINHA ERROR]', e?.message || e);
              reply("❌ Erro ao buscar metadinha.");
            }
            break;

          case 'ytvideo':
          case 'ytmp4':
          case 'video':
          case 'playvideo':
          case 'playvid':
          case 'playmp4': {
            try {
              if (!q) return reply(`🎬 Exemplo: ${prefix}playvideo bad liar`)
              await reagir(from, "⏳")
              
              const res = await axios.get(`https://api.spiderx.com.br/api/downloads/play-video?search=${encodeURIComponent(q)}&api_key=${CONFIG_ADMIN.SPIDERX_API_KEY}`);
              const data = res.data;
              
              if (!data || !data.url) return reply("❌ Não encontrei vídeo para essa busca nos registros do SPIDERX.");
              
              const { title, thumbnail, total_duration_in_seconds, url } = data;
              const duracao = `${Math.floor(total_duration_in_seconds / 60)}:${String(total_duration_in_seconds % 60).padStart(2, '0')}`;
              
              const caption = `🎬 *𝐒𝐏𝐈𝐃𝐄𝐑𝐗 𝐕𝐈𝐃𝐄𝐎* 🎬\\n\\n📌 *Título:* ${title}\\n⏱️ *Duração:* ${duracao}\\n\\n*Enviando vídeo...*`;
              
              await corvo.sendMessage(from, { image: { url: thumbnail }, caption }, { quoted: info });
              
              const videoBuffer = await getBuffer(url);
              await corvo.sendMessage(from, { video: videoBuffer, caption: `✅ ${title}`, mimetype: 'video/mp4' }, { quoted: info });
              
              await reagir(from, "✅");
            } catch (e) {
              console.error("[VIDEO-ERROR]", e.message);
              reply("❌ Erro ao processar vídeo: " + e.message);
            }
          }
          break;

          case 'bratvid':
          case 'iphonequote':
          case 'fakequote': {
            try {
              var quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
              var participant = info.message?.extendedTextMessage?.contextInfo?.participant || sender

              var texto = q?.trim()

              if (!texto && quoted) {
                texto =
                  quoted?.conversation ||
                  quoted?.extendedTextMessage?.text ||
                  quoted?.imageMessage?.caption ||
                  quoted?.videoMessage?.caption ||
                  ''
              }

              if (!texto) {
                return reply(`Exemplo:
${prefix}bratvid halo

Ou responda uma mensagem com:
${prefix}bratvid`)
              }

              await reagir(from, "📱")

              var nomeAutor = pushname || "Usuário"

              var bodyApi = {
                type: "quote",
                format: "png",
                backgroundColor: "#111111",
                width: 512,
                height: 768,
                scale: 2,
                messages: [
                  {
                    entities: [],
                    avatar: true,
                    from: {
                      id: 1,
                      name: nomeAutor
                    },
                    text: texto,
                    replyMessage: {}
                  }
                ]
              }

              var res = await axios.post(
                "https://bot.lyo.su/quote/generate",
                bodyApi,
                {
                  headers: { "Content-Type": "application/json" },
                  timeout: 20000
                }
              )

              if (!res?.data?.result?.image) {
                return reply("❌ Não consegui gerar a quote.")
              }

              var quoteBuffer = Buffer.from(res.data.result.image, "base64")

              var JimpModule = require('jimp')
              var Jimp = JimpModule.Jimp || JimpModule

              var bg = await Jimp.read("https://files.catbox.moe/akgwu2.jpg")
              bg.resize(1080, 1920)
              bg.blur(6)
              bg.brightness(-0.25)

              var quote = await Jimp.read(quoteBuffer)
              quote.resize(760, Jimp.AUTO)

              var moldura = new Jimp({ width: 840, height: quote.bitmap.height + 80, color: 0x00000000 })

              var branco = 0xffffffff

              // linhas/cantos brancos estilo da imagem
              for (var i = 0; i < 160; i++) {
                moldura.setPixelColor(branco, 20 + i, 20)
                moldura.setPixelColor(branco, 20, 20 + i)

                moldura.setPixelColor(branco, moldura.bitmap.width - 21 - i, 20)
                moldura.setPixelColor(branco, moldura.bitmap.width - 21, 20 + i)

                moldura.setPixelColor(branco, 20 + i, moldura.bitmap.height - 21)
                moldura.setPixelColor(branco, 20, moldura.bitmap.height - 21 - i)

                moldura.setPixelColor(branco, moldura.bitmap.width - 21 - i, moldura.bitmap.height - 21)
                moldura.setPixelColor(branco, moldura.bitmap.width - 21, moldura.bitmap.height - 21 - i)
              }

              moldura.composite(quote, 40, 40)
"""

# I need to be VERY careful with the target.
# I'll use a script that finds the line containing "interactiveMessage: {" and "site(quote, 40, 40)" and replaces everything in between.
