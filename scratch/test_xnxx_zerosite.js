const axios = require('axios');

async function test() {
    const q = 'https://www.xnxx.com/video-1b2p3v31/hot_girl_porn';
    const apikey = 'SANDRO_MD_2005';
    try {
        console.log("Testing Zerosite /api/dl/xnxx ...");
        const res = await axios.get(`https://api.zerotwo.online/api/dl/xnxx?url=${encodeURIComponent(q)}&apikey=${apikey}`);
        console.log("Res:", res.status, JSON.stringify(res.data, null, 2));
    } catch (e) {
        console.log("Res Error:", e.message);
        if (e.response) console.log("Data:", e.response.data);
    }
}

test();
