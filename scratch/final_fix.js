const fs = require('fs');
const path = 'corvo.js';

// Base64 encoded code blocks to avoid escaping hell
const aiAssistantLogicB64 = "CiAgICAgICAgLy8gTU9ETyBBU1NJU1RFTlRFIElBCiAgICAgICAgY29uc3QgYm90TnVtYmVyQUkgPSBjb3J2by51c2VyLmlkLnNwbGl0KCc6JylbMF0gKyAnQHMud2hhdHNhcHAubmV0JzsKICAgICAgICBjb25zdCBpc01lbnRpb25lZCA9IGluZm8ubWVzc2FnZT8uZXh0ZW5kZWRUZXh0TWVzc2FnZT8uY29udGV4dEluZm8/Lm1lbnRpb25lZEppZD8uaW5jbHVkZXMoYm90TnVtYmVyQUkpIHx8IAogICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdjb3J2bywnKSB8fCBib2R5LnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnY29ydm8gJyk7CgogICAgICAgIGlmIChnbG9iYWwuYWlFZGl0TW9kZSAmJiBpc01lbnRpb25lZCkgewogICAgICAgICAgICBpZiAoIVNvRG9ubykgewogICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGF0UHJvbXB0ID0gYFZvY8OqIMOpIG8gQ29ydm8gQm90LiBSZXNwb25kYSBhIGVzdGEgbWVuc2FnZW0gZG8gdXN1w6FyaW86ICIke2JvZHl9ImA7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWlSZXNwb25zZSA9IGF3YWl0IGNhbGxHZW1pbmlXaXRoRmFsbGJhY2soY2hhdFByb21wdCk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGx5KGFpUmVzcG9uc2UpOwogICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyByZXR1cm47IH0KICAgICAgICAgICAgfQoKICAgICAgICAgICAgY29uc3QgZ2V0Qm90RmlsZVRyZWUgPSAoZGlyID0gIi4iLCBkZXB0aCA9IDIpID0+IHsKICAgICAgICAgICAgICAgIGxldCByZXMgPSBbXTsKICAgICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGZzLnJlYWRkaXJTeW5jKGRpcik7CiAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZpbGUgPT4gewogICAgICAgICAgICAgICAgICAgICAgICBpZiAoWydub2RlX21vZHVsZXMnLCAnLmdpdCcsICcubnBtJywgJ3NjcmF0Y2gnXS5pbmNsdWRlcyhmaWxlKSB8fCBmaWxlLnN0YXJ0c1dpdGgoJy4nKSkgcmV0dXJuOwogICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gKGRpciA9PT0gIi4iID8gIiIgOiBkaXIgKyAiLyIpICsgZmlsZTsKICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKHApOwogICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChwKTsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSAmJiBkZXB0aCA+IDApIHJlcyA9IHJlcy5jb25jYXQoZ2V0Qm90RmlsZVRyZWUocCwgZGVwdGggLSAxKSk7CiAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fQogICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qb2luKCJcXG4iKTsKICAgICAgICAgICAgfTsKCiAgICAgICAgICAgIGNvbnN0IGZpbGVUcmVlID0gZ2V0Qm90RmlsZVRyZWUoKTsKICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gYFZvY8OqIMOpIG8gQXNzaXN0ZW50ZSBBdXTDtG5vbW8gZG8gQ29ydm8gQm90LgpWb2PDqiB0ZW0gYWNlc3NvIGEgdG9kb3Mgb3MgYXJxdWl2b3MgZG8gcHJvamV0by4KRG9ubzogJHtwdXNobmFtZX0KSW5zdHJ1w6fDo286ICIke2JvZHl9IgoKRVNUUlVUVVJBIERFIEFSUVVJVk9TOgoke2ZpbGVUcmVlfQoKUkVHUkFTOgoxLiBTZSBvIHBlZGlkbyBmb3IgcGFyYSBWRVIgY8OzZGlnby9jYXNlLCByZXNwb25kYSBjb20gIltSRUFETCBjw7NkaWdvIi4KMi4gU2UgbyBwZWRpZG8gZm9yIHBhcmEgRURJVEFSL0FUVUFMSVpBUiwgcmVzcG9uZGEgY29tICJbRURJVDogY2FtaW5ob10gY8OzZGlnbyBjb21wbGV0byIuCjMuIFNlIGZvciBhcGVuYXMgY29udmVyc2EsIHJlc3BvbmRhIG5vcm1hbG1lbnRlLgoKSU1QT1JUQU5URTogVm9jw6ogc8OzIG9iZWRlY2UgY29tYW5kb3MgZGUgZWRpw6fDo28vbGVpdHVyYSBzZSBmb3IgbyBkb25vLiBTZSBuw6NvIGZvciwgYXBlbmFzIGNvbnZlcnNlLmBcOwoKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIHJlcGx5KCLimpsgUHJvY2Vzc2FuZG8uLi4iKTsKICAgICAgICAgICAgICAgIGNvbnN0IGFpUmVzcG9uc2UgPSBhd2FpdCBjYWxsR2VtaW5pV2l0aEZhbGxiYWNrKHByb21wdCk7CgogICAgICAgICAgICAgICAgaWYgKGFpUmVzcG9uc2Uuc3RhcnRzV2l0aCgiW1JFQUREIikpIHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gYWlSZXNwb25zZS5yZXBsYWNlKCJbUkVBRF0iLCAiIikudHJpbSgpOwogICAgICAgICAgICAgICAgICAgIGF3YWl0IGVudmlhclRleHRvR3JhbmRlKGNvcnZvLCBmcm9tLCAi4pyFIEPDs2RpZ28gc29saWNpdGFkbzpcXG5cXG4iICsgY29kZSwgaW5mbyk7CiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFpUmVzcG9uc2Uuc3RhcnRzV2l0aCgiW0VESVQ6IikpIHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGFpUmVzcG9uc2UubWF0Y2goL1xcW0VESVQ6ICguKj8pXFxdLyk7CiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEZpbGUgPSBtYXRjaFsxXTsKICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NvZGUgPSBhclJlc3BvbnNlLnJlcGxhY2UoL1xcW0VESVQ6IC4qP1xcXS8sICIiKS50cmltKCk7CiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvZGUgPSBuZXdDb2RlLnJlcGxhY2UoL2BgYGBqYXZhc2NyaXB0L2csICIiKS5yZXBsYWNlKC9gYGBqcy9nLCAiIikucmVwbGFjZSgvYGBgL2csICIiKS50cmltKCk7CiAgICAgICAgICAgICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmModGFyZ2V0RmlsZSwgbmV3Q29kZSwgInV0ZjgiKTsKICAgICAgICAgICAgICAgICAgICAgICAgcmVwbHkoYOKpyFMgJHt0YXJnZXRGaWxlfSBhdHVhbGl6YWRvISBSZWluaWNpYW5kby4uLmApOwogICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3Bhd24gfSA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduKCdub2RlJywgWydBUlFVSVZFUy9jb25uZWN0LmpzJ10sIHsgc3RkaW86ICdpbmhlcml0JywgZGV0YWNoZWQ6IHRydWUgfSkudW5yZWYoKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgpOwogICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgICAgIHJlcGx5KGFpUmVzcG9uc2UpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgICAgICByZXBseSgi4p2MIEVycm86ICIgKyBlLm1lc3NhZ2UpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB9Cg==";
const editBotCmdB64 = "CiAgICAgICAgICBjYXNlICdlZGl0Ym90JzogewogICAgICAgICAgICBpZiAoIVNvRG9ubykgcmV0dXJuIHJlcGx5KG1lc3Mub25seU93bmVyKCkpOwogICAgICAgICAgICBpZiAoIXEpIHJldHVybiByZXBseShg4p2MIFVzZTogJHtwcmVmaXh9ZWRpdGJvdCBvbi9vZmZfKTsKICAgICAgICAgICAgaWYgKHEudG9Mb3dlckNhc2UoKSA9PT0gJ29uJykgeyBnbG9iYWwuYWlFZGl0TW9kZSA9IHRydWU7IHJldHVybiByZXBseSgi4pyFIE1vZG8gQXNzaXN0ZW50ZSBBVElWQURPISEiKTsgfQogICAgICAgICAgICBpZiAocS50b0xvd2VyQ2FzZSgpID09PSAnb2ZmJykgeyBnbG9iYWwuYWlFZGl0TW9kZSA9IGZhbHNlOyByZXR1cm4gcmVwbHkoIuKdjCBNb2RvIEFzc2lzdGVudGUgREVTQVRJVkFETy4iKTsgfQogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7Cg==";

const aiAssistantLogic = Buffer.from(aiAssistantLogicB64, 'base64').toString('utf8');
const editBotCmd = Buffer.from(editBotCmdB64, 'base64').toString('utf8');

// RESTAURAR DO BACKUP
fs.copyFileSync('corvo.js.backup', 'corvo.js');
let content = fs.readFileSync('corvo.js', 'utf8');

// RE-APLICAR CONFIG NO TOPO
const aiConfig = `
const { GoogleGenerativeAI } = require("@google/generative-ai");
const CONFIG_ADMIN = {
    GOOGLE_API_KEYS: ["AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    MODEL_PRIMARY: "gemini-1.5-flash",
    MODEL_SECONDARY: "gemini-1.5-pro",
    MODEL_TERTIARY: "gemini-pro"
};
global.aiEditMode = false;
async function callGeminiAI(prompt, modelName = CONFIG_ADMIN.MODEL_PRIMARY) {
    for (const key of CONFIG_ADMIN.GOOGLE_API_KEYS) {
        if (!key) continue;
        try {
            const genAI = new GoogleGenerativeAI(key);
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text().trim();
        } catch (e) {
            console.error(\`[AI-ERROR] Model \${modelName} failed with key:\`, e.message);
            if (e.message.includes("429") || e.message.includes("quota")) continue;
            throw e;
        }
    }
    throw new Error("Todas as chaves de API falharam ou atingiram o limite.");
}
async function callGeminiWithFallback(prompt) {
    try { return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_PRIMARY); }
    catch (e) {
        try { return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_SECONDARY); }
        catch (e2) { return await callGeminiAI(prompt, CONFIG_ADMIN.MODEL_TERTIARY); }
    }
}
`;

const headerPart = "Site api pra funcionar os downloads: https://corvoapis.site";
if (content.includes(headerPart)) {
    content = content.replace("*/", "*/" + aiConfig);
}

const switchLine = "switch (command) {";
if (content.includes(switchLine)) {
    content = content.replace(switchLine, aiAssistantLogic + "\n        " + switchLine);
    content = content.replace(switchLine, switchLine + editBotCmd);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Final fix successful via Base64');
} else {
    console.log('Switch line not found');
}
