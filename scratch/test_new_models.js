const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testNewModels() {
    const apiKey = "AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q"; // Key 1
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const modelsToTest = ["gemini-2.0-flash", "gemini-3-flash-preview", "gemini-2.5-pro"];
    
    for (const modelName of modelsToTest) {
        try {
            console.log(`Testing ${modelName}...`);
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Respond only with 'OK' if you can read this.");
            console.log(`Success with ${modelName}:`, (await result.response).text().trim());
        } catch (e) {
            console.error(`Error with ${modelName}:`, e.message);
        }
    }
}

testNewModels();
