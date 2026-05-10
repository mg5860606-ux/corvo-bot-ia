//========== ttk

case 'tiktok':
case 'tt':
case 'ttdl': {
  try {
    if (!args[0]) return reply('❌ Envie o link do TikTok')
    reply(mess.teste())    
    const data = await tiktokDL(args[0])
    if (!data) return reply(mess.error())
    const tiktokDL = require('./ARQUIVES/@thyago/th-tiktok')
//opcional (cap)
    const caption =
`🎵 TikTok
👤 ${data.username || 'Desconhecido'}
👁️ ${data.views || '-'} | ❤️ ${data.likes || '-'}

${data.duration ? `⏱ ${data.duration}` : ''}`

    if (data.type === 'photo' && data.slides.length) {
      for (const img of data.slides) {
        await corvo.sendMessage(from, {
          image: { url: img.url },
          caption,
          contextInfo: NkChannelKk
}, { quoted: selo })
}
      return
}
//break não evita o duplicamento
    if (data.mp4.nowm.length) {
      await corvo.sendMessage(from, {
        video: { url: data.mp4.nowm[0] },
        caption,
        contextInfo: NkChannelKk
}, { quoted: selo })
      return
}
    return reply(mess.error())
} catch (e) {
    console.log(e)
    reply(mess.error())
}
}
break

case 'threads':
case 'thdl':
case 'threadsdl': {
  try {
    if (!args[0]) return reply('❌ Envie o link do Threads')
    reply(mess.teste())
    const threadsDL = require('./ARQUIVES/@thyago/threads-th')
    const data = await threadsDL(args[0])
    if (!data || !data.media.length) return reply(mess.error())
//opcional 
    const caption =
`👤 @${data.author.username || 'desconhecido'}

${data.author.caption || ''}`

    // envia tudo (imagem ou vídeo)
    for (const m of data.media) {
      if (m.type === 'video') {
        await corvo.sendMessage(from, {
          video: { url: m.url },
          caption,
          contextInfo: NkChannelKk
        }, { quoted: selo })
      } else {
        await corvo.sendMessage(from, {
          image: { url: m.url },
          caption,
          contextInfo: NkChannelKk
        }, { quoted: selo })
      }
    }

  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break

case 'ytmp3': {
  try {
    if (!args[0]) {
      reply(mess.syntaxDownloadMusic())
      break
    }

    reply(mess.teste())

    const ytDL = require('./ARQUIVES/@thyago/th-youtube')
    const data = await ytDL(args[0])

    if (!data || !data.mp3.length) {
      reply(mess.error())
      break
    }

    const audioURL = data.mp3[0].url

    await corvo.sendMessage(from, {
      audio: { url: String(audioURL) },
      mimetype: 'audio/mpeg',
      fileName: `${data.title}.mp3`,
      contextInfo: NkChannelKk
    }, { quoted: selo })

  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break

case 'ytmp4': {
  try {
    if (!args[0]) {
      reply('❌ Envie o link do YouTube')
      break
    }

    reply(mess.teste())

    const ytDL = require('./ARQUIVES/@thyago/th-youtube')
    const data = await ytDL(args[0])

    if (!data || !data.mp4.length) {
      reply(mess.error())
      break
    }

    const caption =
`🎬 ${data.title}
⏱ ${data.duration}s`

    const videoURL = data.mp4[0].url // melhor qualidade disponível

    await corvo.sendMessage(from, {
      video: { url: String(videoURL) },
      caption,
      contextInfo: NkChannelKk
    }, { quoted: selo })

  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break

case 'hd2':
case 'upscale':
case 'enhance': {
  try {
    if (!quoted)
      return reply('📸 Marque uma imagem para melhorar em HD.')

    const mime = (quoted.msg || quoted).mimetype || ''
    if (!/image/.test(mime))
      return reply('📸 Marque uma imagem para melhorar em HD.')

    reply('🔄 Melhorando a imagem, aguarde...')

    const { enlarger } = require('./ARQUIVES/@thyago/hd-th')
    const fs = require('fs')
    const path = require('path')

    const tmpDir = './tmp'
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir)

    const stamp = Date.now()
    const input = path.join(tmpDir, `${stamp}-in.jpg`)
    const output = path.join(tmpDir, `${stamp}-out.png`)

    // baixar imagem marcada
    const buffer = await quoted.download()
    fs.writeFileSync(input, buffer)

    // processar HD
    const hdBuffer = await enlarger(input)
    fs.writeFileSync(output, hdBuffer)

    // enviar UMA VEZ
    await corvo.sendMessage(from, {
      image: fs.readFileSync(output),
      caption: '✨ Imagem aprimorada em HD',
      contextInfo: NkChannelKk
    }, { quoted: selo })

    // limpar arquivos
    fs.unlinkSync(input)
    fs.unlinkSync(output)

  } catch (e) {
    console.error(e)
    reply('❌ Erro ao melhorar a imagem.')
  }
}
break

npm install zencf
//módulo para o Spotify funcionar!!!

case 'spotify':
case 'spotdl': {
  try {
    if (!args[0])
      return reply('🎵 Envie um link do Spotify ou o nome da música.')

    reply('🎧 Baixando do Spotify, aguarde...')

    const spotify = require('./ARQUIVES/@thyago/th-spotify')
    const data = await spotify(args.join(' '))

    // se for pesquisa
    if (!data.buffer) {
      let txt = '🔎 *Resultados Spotify*\n\n'
      data.tracks.slice(0, 5).forEach((m, i) => {
        txt += `${i + 1}. ${m.name} — ${m.artists[0].name}\n`
      })
      return reply(txt)
    }

    await corvo.sendMessage(from, {
      audio: data.buffer,
      mimetype: 'audio/mpeg',
      fileName: `${data.title}.mp3`,
      contextInfo: NkChannelKk
    }, { quoted: selo })

  } catch (e) {
    console.error(e)
    reply('❌ Erro ao baixar do Spotify.')
  }
}
break

e tipo, da pra funcionar sem o módulo, mas sla se compensa, depender da cloudfire é fd

se não quiser usar o módulo, usa 

async function gettoken() {
  const r = await axios.post(
    'https://api.spotidownloader.com/session',
    {},
    {
      headers: {
        'user-agent': UA,
        'content-type': 'application/json',
        origin: 'https://spotidownloader.com',
        referer: 'https://spotidownloader.com/'
      }
    }
  )

  if (!r.data?.token) throw 'TOKEN_SPOTIFY_INVALIDO'
  return r.data.token
}