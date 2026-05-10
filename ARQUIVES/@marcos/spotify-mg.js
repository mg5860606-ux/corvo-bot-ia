const axios = require('axios')
const { zencf } = require('zencf')

const UA =
  'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'

async function gettoken() {
  const { token } = await zencf.turnstileMin(
    'https://spotidownloader.com/en13',
    '0x4AAAAAAA8QAiFfE5GuBRRS'
  )

  const r = await axios.post(
    'https://api.spotidownloader.com/session',
    { token },
    {
      headers: {
        'user-agent': UA,
        'content-type': 'application/json',
        origin: 'https://spotidownloader.com',
        referer: 'https://spotidownloader.com/'
      }
    }
  )

  if (!r.data?.token) throw 'TOKEN_SPOTIFY_INVALID'
  return r.data.token
}

async function searchspotify(query, bearer) {
  const r = await axios.post(
    'https://api.spotidownloader.com/search',
    { query },
    {
      headers: {
        'user-agent': UA,
        'content-type': 'application/json',
        authorization: `Bearer ${bearer}`,
        origin: 'https://spotidownloader.com',
        referer: 'https://spotidownloader.com/'
      }
    }
  )

  return r.data
}

async function dlspotify(id, bearer) {
  const r = await axios.post(
    'https://api.spotidownloader.com/download',
    { id },
    {
      headers: {
        'user-agent': UA,
        'content-type': 'application/json',
        authorization: `Bearer ${bearer}`,
        origin: 'https://spotidownloader.com',
        referer: 'https://spotidownloader.com/'
      }
    }
  )

  if (!r.data?.link) throw 'DOWNLOAD_LINK_INVALID'

  const audio = await axios.get(r.data.link, {
    responseType: 'arraybuffer',
    headers: {
      'user-agent': UA,
      authorization: `Bearer ${bearer}`
    }
  })

  return {
    buffer: Buffer.from(audio.data),
    title: r.data.title || 'spotify-audio'
  }
}

async function spotify(input) {
  const bearer = await gettoken()

  // link spotify
  if (/spotify\.com\/track\//i.test(input)) {
    const id = input.split('/track/')[1].split('?')[0]
    return await dlspotify(id, bearer)
  }

  // id puro
  if (/^[a-zA-Z0-9]{22}$/.test(input)) {
    return await dlspotify(input, bearer)
  }

  // pesquisa
  return await searchspotify(input, bearer)
}

module.exports = spotify