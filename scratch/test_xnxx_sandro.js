const axios = require('axios');

async function test() {
    const q = 'https://www.xnxx.com/video-1b2p3v31/hot_girl_porn';
    const apikey = 'corvo-md-domina';
    try {
        console.log("Testing SandroHost /api/xnxx ...");
        const res = await axios.get(`https://api.sandrohost.com.br/api/xnxx?url=${encodeURIComponent(q)}&apikey=${apikey}`);
        console.log("Res:", res.status, JSON.stringify(res.data, null, 2));
    } catch (e) {
        console.log("Res Error:", e.message);
        if (e.response) console.log("Data:", e.response.data);
    }
}

test();
