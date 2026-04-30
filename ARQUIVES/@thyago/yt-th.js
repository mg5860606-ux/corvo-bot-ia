const axios = require('axios');

const SPIDERX_KEY = 'MVscNJviBtf6rqvl2yXI';

const ENDPOINTS = {
  playAudio: 'https://api.spiderx.com.br/api/downloads/play-audio',
  playVideo: 'https://api.spiderx.com.br/api/downloads/play-video',
  ytmp3: 'https://api.spiderx.com.br/api/downloads/yt-mp3',
  ytmp4: 'https://api.spiderx.com.br/api/downloads/yt-mp4',
  ytSearch: 'https://api.spiderx.com.br/api/search/youtube', 
};

const isYtUrl = (t = '') =>
  /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(String(t));

function safeTitle(name = 'arquivo') {
  return String(name)
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80) || 'arquivo';
}

async function spiderxGet(url, params) {
  const { data } = await axios.get(url, {
    params: { ...params, api_key: SPIDERX_KEY },
    timeout: 25000,
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });

  if (!data || !data.url) return null;

  return {
    title: data.title || null,
    description: data.description || null,
    thumbnail: data.thumbnail || null,
    duration: data.total_duration_in_seconds || null,
    channel: data.channel || null, // { name, url }
    download: data.url,
  };
}

// Pesquisa por termo e retorna MP3
async function spiderxPlayAudio(search) {
  const termo = String(search || '').trim();
  if (!termo) return null;
  return spiderxGet(ENDPOINTS.playAudio, { search: termo });
}

// Pesquisa por termo e retorna MP4
async function spiderxPlayVideo(search) {
  const termo = String(search || '').trim();
  if (!termo) return null;
  return spiderxGet(ENDPOINTS.playVideo, { search: termo });
}

// Baixa MP3 por URL do YouTube
async function spiderxYtMp3(url) {
  const u = String(url || '').trim();
  if (!u || !isYtUrl(u)) return null;
  return spiderxGet(ENDPOINTS.ytmp3, { url: u });
}

// Baixa MP4 por URL do YouTube
async function spiderxYtMp4(url) {
  const u = String(url || '').trim();
  if (!u || !isYtUrl(u)) return null;
  return spiderxGet(ENDPOINTS.ytmp4, { url: u });
}
// Pesquisa vídeos no YouTube por termo (retorna lista)
async function spiderxYtSearch(search) {
  const termo = String(search || '').trim();
  if (!termo) return null;

  const { data } = await axios.get(ENDPOINTS.ytSearch, {
    params: { search: termo, api_key: SPIDERX_KEY },
    timeout: 25000,
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });

  if (!Array.isArray(data)) return null;

  // normaliza e limpa
  return data
    .map((v) => ({
      title: v?.title || null,
      views: v?.views || null,
      thumbnail: v?.thumbnail || null,
      duration: v?.duration || null,
      published_at: v?.published_at || null,
      url: v?.url || null,
    }))
    .filter((v) => v.url && v.title);
}

module.exports = {
  spiderxPlayAudio,
  spiderxPlayVideo,
  spiderxYtMp3,
  spiderxYtMp4,
  spiderxYtSearch, 
  isYtUrl,
  safeTitle,
};