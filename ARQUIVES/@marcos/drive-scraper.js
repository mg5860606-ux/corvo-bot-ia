import axios from 'axios'
import fs from 'fs'
import crypto from 'crypto'
import path from 'path'

/* ========= CONFIG ========= */

const ORIGIN = 'https://drive.google.com'
const UPLOAD_URL =
  'https://clients6.google.com/upload/drive/v2internal/files?uploadType=resumable'

const COOKIES = "__Secure-3PSIDCC=AKEyXzWxbuaSelynonf6KzD-cm9Hc0oCmVnKNZvU_OAckKW0XKGafsj1O9Nh0d3_y-JyU6yuZA; __Secure-1PSIDCC=AKEyXzVcQ99_DVCrf2E33WK6p6iGjDOUW7JD-x-j63HOl4FefGKvtLEKeED6chWUpXVNWiBd; SIDCC=AKEyXzWLp9A1jjE4dMO2A3a8VdWeMZZeEdY9etSk8vOPciKNXM3EZu0QT96boOMCdTq13Z80; __Secure-3PSID=g.a0006Qgh-kczrgqs7IsgGhYPdXmVT5D1OxS4hWcJz5dPCHYc6xrlo6HcJw1APVMkLxMNxAYASAACgYKAUASARMSFQHGX2MiPeoowHHd2OLyMle5wPe8HRoVAUF8yKrVo-P7Gay2ce7qrHikLebT0076; __Secure-1PSID=g.a0006Qgh-kczrgqs7IsgGhYPdXmVT5D1OxS4hWcJz5dPCHYc6xrlITp_Gg_HoyVRmKaa_il4yAACgYKASgSARMSFQHGX2MiBt3ig4GMISpRQQsff9W4yxoVAUF8yKq8T0dBjELDNoOagOrHIZGQ0076; __Secure-3PSIDRTS=sidts-CjYB7I_69Bx4bWmadhzGGJgtg189qOUBC7ftxz40trEsDM9H4yzWj1P5HV5tA6Dfv90GtuRCHXUQAA; NID=528=AtunuBm2MYRQMpmHTzCNVaCtB4D2KfIVKUe4wtONtXN6QVUWzzC5ys8QI1K15uUB0NneaTzbdnoV-uVOpdqntTRYu6H0yVoHY5dATORij1V3DUdwNCKyEPGfE7JhE0C28EGKV_eCLcS0PzY0eDMn5rMmEd4KFLwy3X5FvP6djFzF6m2viaic-sTkIzVRM69XkxNPxcAQ5PdP6iuqr9Ie78r1FaFcGT-v1jfzkanIh0IZ5nCZbuVbvR1IAlM8J-pH_TmuDG9i4_PeSHRavYBcjesgUsEa8hjYe4jGy_OUFrORMkpdwaY-PyfOj8YnWbugsYZmb4AyL9fzIEy444s8GNrd99W2FGZssFzSFvgaI2lx3aI8LHwVQw9Gnz1kpSMh-U43TDUa77jUa251S5oqLbFxuCNNMSjjakGaX_yzkIg2icA7n7eQFwT5anndOyqJQX2Si-oBo0vbaz1K1esInPRDJdlAWpvlXnqglPcEcWe22t_RjKJnyboEP9t-rf-OOjysUvzfbAcFaedVy2wSOZ8KSkHcKSTsQVt6U1koTDmoc9Mqx17eaDZD42Z6p4qHxzzXLycCPLjSp2YkVC29RLcZvzBn_9VOjde6ARkym9MYgPcNHdRZ0AYAKgwCdSqGlLRVgkniLiE; __Secure-1PSIDTS=sidts-CjYB7I_69Bx4bWmadhzGGJgtg189qOUBC7ftxz40trEsDM9H4yzWj1P5HV5tA6Dfv90GtuRCHXUQAA; __Secure-OSID=g.a0006Qgh-lCrqdCTnlHfZ3jqwCzdTf8y8Kx6TY-s1bp6Cmya6XqR9oMAuyo5USVhEVROVgj19gACgYKAa8SARMSFQHGX2MieTFDQo62qb-NkpKVilkwOBoVAUF8yKpCVVSPZhIhyfWqhKNetuAa0076; SID=g.a0006Qgh-kczrgqs7IsgGhYPdXmVT5D1OxS4hWcJz5dPCHYc6xrlftT5QCpISSCCnrunX70mXAACgYKAfMSARMSFQHGX2MiZpjoDULwN9HZsJMM9ReglxoVAUF8yKozLlusJgDO6rIL71agVCPu0076; OSID=g.a0006Qgh-lCrqdCTnlHfZ3jqwCzdTf8y8Kx6TY-s1bp6Cmya6XqROdr84dl8Hu2Vh_jKUR6fAQACgYKASUSARMSFQHGX2Mi0o3tJQ_9-bYUyQQ3nfJv1xoVAUF8yKpZT4vl01VeAXUi22q8POQl0076; SAPISID=hITM127iApAmBnZL/At0m9trCOuQbwZyP-; HSID=AEZbLO7mvsJXQgXnX; __Secure-1PSIDRTS=sidts-CjYB7I_69Bx4bWmadhzGGJgtg189qOUBC7ftxz40trEsDM9H4yzWj1P5HV5tA6Dfv90GtuRCHXUQAA; __Secure-3PAPISID=hITM127iApAmBnZL/At0m9trCOuQbwZyP-; __Secure-1PAPISID=hITM127iApAmBnZL/At0m9trCOuQbwZyP-; __Secure-3PSIDTS=sidts-CjYB7I_69Bx4bWmadhzGGJgtg189qOUBC7ftxz40trEsDM9H4yzWj1P5HV5tA6Dfv90GtuRCHXUQAA; APISID=G_WC9P_yXWYAhsYJ/AmA6kYIqG-yGb1my0; SSID=AlHUQuMB1FZDTaBxa";
/* ========= UTILS ========= */

function extractCookie(name, cookies) {
  return cookies.match(new RegExp(`${name}=([^;]+)`))?.[1]
}

function generateSapisidHash(sapisid, origin) {
  const time = Math.floor(Date.now() / 1000)
  const payload = `${time} ${sapisid} ${origin}`
  const hash = crypto.createHash('sha1').update(payload).digest('hex')
  return `SAPISIDHASH ${time}_${hash}`
}

/* ========= AUTH ========= */

const SAPISID =
  extractCookie('SAPISID', COOKIES) ||
  extractCookie('__Secure-3PAPISID', COOKIES)

if (!SAPISID) {
  throw new Error('❌ SAPISID não encontrado nos cookies')
}

const headersBase = {
  Accept: '*/*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Type': 'application/json; charset=UTF-8',
  'X-Goog-Api-Key': 'AIzaSyD_InbmSFufIEps5UAt2NmB_3LvBH3Sz_8',
  'X-Goog-Authuser': '0',
  'X-Goog-Drive-Client-Version': 'drive.web-frontend_20260122.14_p1',
  Origin: ORIGIN,
  Referer: `${ORIGIN}/`,
  Cookie: COOKIES,
  Authorization: generateSapisidHash(SAPISID, ORIGIN),
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120',
}

/* ========= SCRAPER ========= */

export async function uploadDrive(buffer, mime = 'application/octet-stream') {
  const tmpDir = path.join(process.cwd(), 'tmp')
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true })

  const ext = mime.split('/')[1] || 'bin'
  const filename = `upload_${Date.now()}.${ext}`
  const filePath = path.join(tmpDir, filename)

  fs.writeFileSync(filePath, buffer)
  const fileSize = fs.statSync(filePath).size

  try {
    /* 1️⃣ iniciar sessão */
    const initRes = await axios.post(
      UPLOAD_URL,
      {
        title: filename,
        mimeType: mime,
      },
      {
        headers: {
          ...headersBase,
          'X-Upload-Content-Type': mime,
          'X-Upload-Content-Length': fileSize.toString(),
        },
      }
    )

    const sessionUrl = initRes.headers.location
    if (!sessionUrl) throw new Error('❌ Session URL não retornada')

    /* 2️⃣ upload binário */
    const uploadRes = await axios.put(sessionUrl, buffer, {
      headers: {
        'Content-Type': mime,
        'Content-Length': fileSize.toString(),
      },
    })

    const fileId = uploadRes.data?.id
    if (!fileId) throw new Error('❌ FileID não retornado')

    /* 3️⃣ tornar público (opcional) */
    try {
      await axios.post(
        `https://clients6.google.com/drive/v2internal/files/${fileId}/permissions`,
        {
          role: 'reader',
          type: 'anyone',
          withLink: true,
        },
        { headers: headersBase }
      )
    } catch {}

    return {
      view: `https://drive.google.com/file/d/${fileId}/view`,
      direct: `https://drive.google.com/uc?id=${fileId}&export=download`,
    }
  } finally {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
  }
}