const axios = require('axios')
const cheerio = require('cheerio')

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  Origin: 'https://savett.cc',
  Referer: 'https://savett.cc/en1/download',
  'User-Agent':
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
}

async function getSession() {
  const res = await axios.get('https://savett.cc/en1/download')

  return {
    csrf: res.data.match(/name="csrf_token" value="([^"]+)"/)?.[1],
    cookie: res.headers['set-cookie']
      ?.map(v => v.split(';')[0])
      .join('; ')
  }
}

async function request(url, csrf, cookie) {
  const res = await axios.post(
    'https://savett.cc/en1/download',
    `csrf_token=${encodeURIComponent(csrf)}&url=${encodeURIComponent(url)}`,
    {
      headers: {
        ...headers,
        Cookie: cookie
      }
    }
  )

  return res.data
}

function parse(html) {
  const $ = cheerio.load(html)

  const stats = []
  $('#video-info .my-1 span').each((_, el) => {
    stats.push($(el).text().trim())
  })

  const data = {
    username: $('#video-info h3').first().text().trim() || null,
    views: stats[0] || null,
    likes: stats[1] || null,
    bookmarks: stats[2] || null,
    comments: stats[3] || null,
    shares: stats[4] || null,
    duration: $('#video-info p.text-muted')
      .first()
      .text()
      .replace(/Duration:/i, '')
      .trim() || null,
    type: null,
    mp4: {
      nowm: [],
      wm: []
    },
    mp3: [],
    slides: []
  }

  // 📸 Slides
  const slides = $('.carousel-item[data-data]')
  if (slides.length) {
    data.type = 'photo'

    slides.each((_, el) => {
      try {
        const json = JSON.parse(
          $(el).attr('data-data').replace(/&quot;/g, '"')
        )

        if (Array.isArray(json.URL)) {
          json.URL.forEach(url => {
            data.slides.push({
              index: data.slides.length + 1,
              url
            })
          })
        }
      } catch {}
    })

    return data
  }

  // 🎥 Vídeo
  data.type = 'video'

  $('#formatselect option').each((_, el) => {
    const label = $(el).text().toLowerCase()
    const raw = $(el).attr('value')
    if (!raw) return

    try {
      const json = JSON.parse(raw.replace(/&quot;/g, '"'))
      if (!json.URL) return

      if (label.includes('mp4') && !label.includes('watermark')) {
        data.mp4.nowm.push(...json.URL)
      }

      if (label.includes('watermark')) {
        data.mp4.wm.push(...json.URL)
      }

      if (label.includes('mp3')) {
        data.mp3.push(...json.URL)
      }
    } catch {}
  })

  return data
}

async function tiktokDL(url) {
  const { csrf, cookie } = await getSession()
  if (!csrf || !cookie) return null

  const html = await request(url, csrf, cookie)
  return parse(html)
}

module.exports = tiktokDL