import axios from 'axios';
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';


const ORIGIN = "https://drive.google.com";
const UPLOAD_URL = "https://clients6.google.com/upload/drive/v2internal/files?uploadType=resumable";

const headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json; charset=UTF-8", 
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Google Chrome\";v=\"132\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-goog-api-key": "AIzaSyD_InbmSFufIEps5UAt2NmB_3LvBH3Sz_8",
    "x-goog-authuser": "0",
    "x-goog-drive-client-version": "drive.web-frontend_20260122.14_p1",
    "Origin": ORIGIN,
    "Referer": `${ORIGIN}/`,
};

function generateSapisidHash(sapisid, origin) {
    const time = Math.floor(Date.now() / 1000);
    const payload = `${time} ${sapisid} ${origin}`;
    const hash = crypto.createHash('sha1').update(payload).digest('hex');
    return `SAPISIDHASH ${time}_${hash}`;
}


const SAPISID = "hITM127iApAmBnZL/At0m9trCOuQbwZyP-";
const COOKIES = "__Secure-3PSIDCC=AKEyXzWxbuaSelynonf6KzD-cm9Hc0oCmVnKNZvU_OAckKW0XKGafsj1O9Nh0d3_y-JyU6yuZA; __Secure-1PSIDCC=AKEyXzVcQ99_DVCrf2E33WK6p6iGjDOUW7JD-x-j63HOl4FefGKvtLEKeED6chWUpXVNWiBd; SIDCC=AKEyXzWLp9A1jjE4dMO2A3a8VdWeMZZeEdY9etSk8vOPciKNXM3EZu0QT96boOMCdTq13Z80; __Secure-3PSID=g.a0006Qgh-kczrgqs7IsgGhYPdXmVT5D1OxS4hWcJz5dPCHYc6xrlo6HcJw1APVMkLxMNxAYASAACgYKAUASARMSFQHGX2MiPeoowHHd2OLyMle5wPe8HRoVAUF8yKrVo-P7Gay2ce7qrHikLebT0076; __Secure-1PSID=g.a0006Qgh-kczrgqs7IsgGhYPdXmVT5D1OxS4hWcJz5dPCHYc6xrlITp_Gg_HoyVRmKaa_il4yAACgYKASgSARMSFQHGX2MiBt3ig4GMISpRQQsff9W4yxoVAUF8yKq8T0dBjELDNoOagOrHIZGQ0076; __Secure-3PSIDRTS=sidts-CjYB7I_69Bx4bWmadhzGGJgtg189qOUBC7ftxz40trEsDM9H4yzWj1P5HV5tA6Dfv90GtuRCHXUQAA; NID=528=AtunuBm2MYRQMpmHTzCNVaCtB4D2KfIVKUe4wtONtXN6QVUWzzC5ys8QI1K15uUB0NneaTzbdnoV-uVOpdqntTRYu6H0yVoHY5dATORij1V3DUdwNCKyEPGfE7JhE0C28EGKV_eCLcS0PzY0eDMn5rMmEd4KFLwy3X5FvP6djFzF6m2viaic-sTkIzVRM69XkxNPxcAQ5PdP6iuqr9Ie78r1FaFcGT-v1jfzkanIh0IZ5nCZbuVbvR1IAlM8J-pH_TmuDG9i4_PeSHRavYBcjesgUsEa8hjYe4jGy_OUFrORMkpdwaY-PyfOj8YnWbugsYZmb4AyL9fzIEy444s8GNrd99W2FGZssFzSFvgaI2lx3aI8LHwVQw9Gnz1kpSMh-U43TDUa77jUa251S5oqLbFxuCNNMSjjakGaX_yzkIg2icA7n7eQFwT5anndOyqJQX2Si-oBo0vbaz1K1esInPRDJdlAWpvlXnqglPcEcWe22t_RjKJnyboEP9t-rf-OOjysUvzfbAcFaedVy2wSOZ8KSkHcKSTsQVt6U1koTDmoc9Mqx17eaDZD42Z6p4qHxzzXLycCPLjSp2YkVC29RLcZvzBn_9VOjde6ARkym9MYgPcNHdRZ0AYAKgwCdSqGlLRVgkniLiE; __Secure-1PSIDTS=sidts-CjYB7I_69Bx4bWmadhzGGJgtg189qOUBC7ftxz40trEsDM9H4yzWj1P5HV5tA6Dfv90GtuRCHXUQAA; __Secure-OSID=g.a0006Qgh-lCrqdCTnlHfZ3jqwCzdTf8y8Kx6TY-s1bp6Cmya6XqR9oMAuyo5USVhEVROVgj19gACgYKAa8SARMSFQHGX2MieTFDQo62qb-NkpKVilkwOBoVAUF8yKpCVVSPZhIhyfWqhKNetuAa0076; SID=g.a0006Qgh-kczrgqs7IsgGhYPdXmVT5D1OxS4hWcJz5dPCHYc6xrlftT5QCpISSCCnrunX70mXAACgYKAfMSARMSFQHGX2MiZpjoDULwN9HZsJMM9ReglxoVAUF8yKozLlusJgDO6rIL71agVCPu0076; OSID=g.a0006Qgh-lCrqdCTnlHfZ3jqwCzdTf8y8Kx6TY-s1bp6Cmya6XqROdr84dl8Hu2Vh_jKUR6fAQACgYKASUSARMSFQHGX2Mi0o3tJQ_9-bYUyQQ3nfJv1xoVAUF8yKpZT4vl01VeAXUi22q8POQl0076; SAPISID=hITM127iApAmBnZL/At0m9trCOuQbwZyP-; HSID=AEZbLO7mvsJXQgXnX; __Secure-1PSIDRTS=sidts-CjYB7I_69Bx4bWmadhzGGJgtg189qOUBC7ftxz40trEsDM9H4yzWj1P5HV5tA6Dfv90GtuRCHXUQAA; __Secure-3PAPISID=hITM127iApAmBnZL/At0m9trCOuQbwZyP-; __Secure-1PAPISID=hITM127iApAmBnZL/At0m9trCOuQbwZyP-; __Secure-3PSIDTS=sidts-CjYB7I_69Bx4bWmadhzGGJgtg189qOUBC7ftxz40trEsDM9H4yzWj1P5HV5tA6Dfv90GtuRCHXUQAA; APISID=G_WC9P_yXWYAhsYJ/AmA6kYIqG-yGb1my0; SSID=AlHUQuMB1FZDTaBxa";

headers['Cookie'] = COOKIES;
headers['authorization'] = generateSapisidHash(SAPISID, ORIGIN);

let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    
    let filename = 'test_upload.txt';
    let content = Buffer.from("Hello Google Drive!");
    let isTemp = false;

    try {
        if (mime) {
            content = await q.download();
            let ext = mime.split('/')[1] || 'bin';
            filename = `upload_${Date.now()}.${ext}`;
            isTemp = true;
        } 
        
        let tmpDir = path.join(process.cwd(), 'tmp');
        if (!fs.existsSync(tmpDir)) {
            fs.mkdirSync(tmpDir, { recursive: true });
        }
        
        let filePath = path.join(tmpDir, filename);
        fs.writeFileSync(filePath, content);

        console.log("🚀 Starting Drive Upload...");
        m.reply("🚀 Uploading to Google Drive...");
        
        const stats = fs.statSync(filePath);
        const fileName = path.basename(filePath);
        const fileSize = stats.size;
        
        console.log("1️⃣ Initiating upload session...");
        
        const metadata = {
            title: fileName,
            mimeType: mime || "text/plain",
        };
        
        const initHeaders = {
            ...headers,
            "X-Upload-Content-Type": mime || "text/plain",
            "X-Upload-Content-Length": fileSize.toString(),
        };

        const initResponse = await axios.post(UPLOAD_URL, metadata, { headers: initHeaders });
        
        console.log("   Status:", initResponse.status);
        const sessionUrl = initResponse.headers['location'] || initResponse.headers['Location'];
        
        if (!sessionUrl) {
            throw new Error("No upload location header received!");
        }
        console.log("   Session URL received.");


        console.log("2️⃣ Uploading file content...");
        
        const fileContent = fs.readFileSync(filePath);
        
        const uploadResponse = await axios.put(sessionUrl, fileContent, {
            headers: {
                ...headers, 
                "Content-Type": mime || "text/plain",
                "Content-Length": fileSize.toString(),
            }
        });
        
        console.log("✅ Upload Complete!");
        
        if (uploadResponse.data) {
            const fileId = uploadResponse.data.id || uploadResponse.data.driveId;
            if (fileId) {
                console.log("3️⃣ Making file public...");
                let publicStatus = "";
                try {
                    const permissionUrl = `https://clients6.google.com/drive/v2internal/files/${fileId}/permissions`;
                    const permissionBody = {
                        "role": "reader",
                        "type": "anyone",
                        "withLink": true
                    };
                    
                    await axios.post(permissionUrl, permissionBody, { headers: headers }); // Reuse headers
                    console.log("✅ File is now public (Anyone with the link).");
                    publicStatus = "✅ File is now public (Anyone with the link).";
                    
                } catch (permError) {
                    console.error("⚠️ Failed to set permissions:", permError.message);
                    publicStatus = `⚠️ Failed to set public permissions: ${permError.message}`;
                    if (permError.response) console.error(JSON.stringify(permError.response.data));
                }

                m.reply(`✅ Upload Complete!\n${publicStatus}\n\n🎉 File Link: https://drive.google.com/file/d/${fileId}/view\n🔗 Direct Download: https://drive.google.com/uc?id=${fileId}&export=download`);
            } else {
                 m.reply('✅ Upload Complete! \n' + JSON.stringify(uploadResponse.data, null, 2));
            }
        }
        
        if (isTemp && fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

    } catch (error) {
        console.error("❌ Failed:", error.message);
        let errMsg = error.message;
        if (error.response) {
            console.error("   Status:", error.response.status);
            console.error("   Data:", JSON.stringify(error.response.data));
            errMsg += `\nStatus: ${error.response.status}`;
        }
        m.reply(`❌ Failed to upload: ${errMsg}`);
    }
};

handler.help = ['driveupload'];
handler.tags = ['tools'];
handler.command = /^(driveupload|gdriveup)$/i;

export default handler;
