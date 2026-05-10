const axios = require('axios')
const FormData = require('form-data')
const crypto = require('crypto')

async function uploadMediaFire(buffer, filename, mimetype) {
  const fileSize = buffer.length
  const fileHash = crypto.createHash('sha256').update(buffer).digest('hex')

  const COOKIE_API_URL = 'https://cookies.ryzecodes.xyz/api/cookies'
  const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/144.0.0.0'

  // ===== cookies =====
  const cookieRes = await axios.get(COOKIE_API_URL)
  if (!cookieRes.data?.cookies) throw 'Falha ao obter cookies'

  const cookieHeader = cookieRes.data.cookies
    .map(c => `${c.name}=${c.value}`)
    .join('; ')

  const baseHeaders = {
    'User-Agent': USER_AGENT,
    'Cookie': cookieHeader,
    'Origin': 'https://app.mediafire.com',
    'Referer': 'https://app.mediafire.com/'
  }

  // ===== session token =====
  const tokenRes = await axios.post(
    'https://www.mediafire.com/application/get_session_token.php',
    'response_format=json',
    { headers: { ...baseHeaders, 'Content-Type': 'application/x-www-form-urlencoded' } }
  )

  const sessionToken = tokenRes.data?.response?.session_token
  if (!sessionToken) throw 'Session token inválido'

  // ===== action token =====
  const actionRes = await axios.post(
    'https://www.mediafire.com/api/1.5/user/get_action_token.php',
    `session_token=${sessionToken}&response_format=json&type=upload&lifespan=1440`,
    { headers: { ...baseHeaders, 'Content-Type': 'application/x-www-form-urlencoded' } }
  )

  const actionToken = actionRes.data?.response?.action_token
  if (!actionToken) throw 'Action token inválido'

  // ===== check upload =====
  const checkForm = new FormData()
  checkForm.append('uploads', JSON.stringify([{
    filename,
    folder_key: 'myfiles',
    size: fileSize,
    hash: fileHash,
    resumable: 'yes',
    preemptive: 'yes'
  }]))
  checkForm.append('session_token', sessionToken)
  checkForm.append('response_format', 'json')

  const checkRes = await axios.post(
    'https://www.mediafire.com/api/1.5/upload/check.php',
    checkForm,
    { headers: { ...baseHeaders, ...checkForm.getHeaders() } }
  )

  const check = checkRes.data?.response
  if (check?.result !== 'Success') throw 'Upload check falhou'
  if (check?.hash_exists === 'yes') throw 'Arquivo já existe'

  const uploadUrl = check.upload_url?.resumable
    || 'https://www.mediafire.com/api/upload/resumable.php'

  // ===== upload =====
  const uploadRes = await axios.post(
    `${uploadUrl}?session_token=${sessionToken}&action_token=${actionToken}&response_format=json`,
    buffer,
    {
      headers: {
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/octet-stream',
        'x-file-name': filename,
        'x-file-size': fileSize,
        'x-file-hash': fileHash,
        'x-unit-id': '0',
        'x-unit-size': fileSize,
        'x-unit-hash': fileHash
      },
      maxBodyLength: Infinity
    }
  )

  const uploadKey = uploadRes.data?.response?.doupload?.key
  if (!uploadKey) throw 'Falha no upload'

  // ===== poll =====
  let quickKey
  for (let i = 0; i < 20; i++) {
    const pollForm = new FormData()
    pollForm.append('key', uploadKey)
    pollForm.append('session_token', sessionToken)
    pollForm.append('response_format', 'json')

    const pollRes = await axios.post(
      'https://www.mediafire.com/api/1.5/upload/poll_upload.php',
      pollForm,
      { headers: { ...baseHeaders, ...pollForm.getHeaders() } }
    )

    const r = pollRes.data?.response?.doupload
    if (r?.status === '99') {
      quickKey = r.quickkey
      break
    }

    await new Promise(r => setTimeout(r, 2000))
  }

  if (!quickKey) throw 'Timeout no MediaFire'

  return {
    filename,
    size: fileSize,
    url: `https://www.mediafire.com/file/${quickKey}/`
  }
}

module.exports = { uploadMediaFire }