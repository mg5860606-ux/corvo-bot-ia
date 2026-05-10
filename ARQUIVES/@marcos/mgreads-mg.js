const axios = require('axios')
const cheerio = require('cheerio')

async function threadsDL(url) {
  const get = await axios.get('https://sssthreads.net/')
  const cookies = get.headers['set-cookie']
    ?.map(v => v.split(';')[0])
    .join('; ')

  if (!cookies) return null

  const $get = cheerio.load(get.data)
  const csrf = $get('meta[name="csrf-token"]').attr('content')
  if (!csrf) return null

  const res = await axios.post(
    'https://sssthreads.net/fetch-data',
    { url },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrf,
        origin: 'https://sssthreads.net',
        referer: 'https://sssthreads.net/',
        Cookie: cookies
      }
    }
  )

  if (!res.data?.html) return null

  const $ = cheerio.load(res.data.html)

  const author = {
    username: $('.author-name').text().trim() || null,
    avatar: $('.author-avatar').attr('src') || null,
    caption: $('.post-description').text().trim() || null
  }

  const media = []

  $('.media-item').each((_, el) => {
    const thumb = $(el).find('.thumbnail-img').attr('data-src') || null
    let video = null
    let image = null

    $(el).find('.download-link').each((__, a) => {
      const href = $(a).attr('href')
      const text = $(a).text().toLowerCase()

      if (text.includes('video')) video = href
      else if (text.includes('photo')) image = href
    })

    if (video || image) {
      media.push({
        type: video ? 'video' : 'image',
        thumbnail: thumb,
        url: video || image
      })
    }
  })

  return { author, media }
}

module.exports = threadsDL