const { GoogleGenerativeAI } = require("@google/generative-ai");

async function test25Flash() {
    const apiKey = "AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q"; // Key 1
    const genAI = new GoogleGenerativeAI(apiKey);
    
    try {
        console.log(`Testing gemini-2.5-flash...`);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent("Respond only with 'OK' if you can read this.");
        console.log(`Success with gemini-2.5-flash:`, (await result.response).text().trim());
    } catch (e) {
        console.error(`Error with gemini-2.5-flash:`, e.message);
    }
}

test25Flash();
