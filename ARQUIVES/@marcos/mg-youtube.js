const axios = require('axios')
const crypto = require('crypto')

const KEY = MVscNJviBtf6rqvl2yXI

function decrypt(enc) {
  const b = Buffer.from(enc.replace(/\s/g, ''), 'base64')
  const iv = b.subarray(0, 16)
  const data = b.subarray(16)
  const d = crypto.createDecipheriv('aes-128-cbc', KEY, iv)
  return JSON.parse(Buffer.concat([d.update(data), d.final()]).toString())
}

async function savetube(url) {
  const random = await axios.get('https://media.savetube.vip/api/random-cdn', {
    headers: {
      origin: 'https://save-tube.com',
      referer: 'https://save-tube.com/',
      'User-Agent': 'Mozilla/5.0'
    }
  })

  const cdn = random.data?.cdn
  if (!cdn) return null

  const info = await axios.post(
    `https://${cdn}/v2/info`,
    { url },
    {
      headers: {
        'Content-Type': 'application/json',
        origin: 'https://save-tube.com',
        referer: 'https://save-tube.com/',
        'User-Agent': 'Mozilla/5.0'
      }
    }
  )

  if (!info.data?.status) return null

  const json = decrypt(info.data.data)

  async function download(type, quality) {
    const r = await axios.post(
      `https://${cdn}/download`,
      {
        id: json.id,
        key: json.key,
        downloadType: type,
        quality: String(quality)
      },
      {
        headers: {
          'Content-Type': 'application/json',
          origin: 'https://save-tube.com',
          referer: 'https://save-tube.com/',
          'User-Agent': 'Mozilla/5.0'
        }
      }
    )
    return r.data?.data?.downloadUrl || null
  }

  const mp4 = []
  const mp3 = []

  for (const v of json.video_formats || []) {
    const url = await download('video', v.quality)
    if (url) {
      mp4.push({
        quality: Number(v.quality),
        label: v.label,
        url
      })
    }
  }

  for (const a of json.audio_formats || []) {
    const url = await download('audio', a.quality)
    if (url) {
      mp3.push({
        quality: Number(a.quality),
        label: a.label,
        url
      })
    }
  }

  // sempre na melhor qualidade primeiro
  mp4.sort((a, b) => b.quality - a.quality)
  mp3.sort((a, b) => b.quality - a.quality)

  return {
    title: json.title,
    duration: json.duration,
    thumbnail: json.thumbnail,
    mp4,
    mp3
  }
}

module.exports = savetube