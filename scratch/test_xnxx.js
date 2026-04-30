const axios = require('axios');

async function test() {
    const q = 'https://www.xnxx.com/video-1b2p3v31/hot_girl_porn';
    const endpoint = 'xnxx';
    try {
        console.log("Testing /api/download/xnxx ...");
        const res1 = await axios.get(`https://api.vreden.web.id/api/download/${endpoint}?url=${encodeURIComponent(q)}`);
        console.log("Res1:", res1.status);
    } catch (e) {
        console.log("Res1 Error:", e.message);
    }

    try {
        console.log("Testing /api/v1/download/xnxx ...");
        const res2 = await axios.get(`https://api.vreden.web.id/api/v1/download/${endpoint}?url=${encodeURIComponent(q)}`);
        console.log("Res2:", res2.status, JSON.stringify(res2.data, null, 2));
    } catch (e) {
        console.log("Res2 Error:", e.message);
    }
}

test();
