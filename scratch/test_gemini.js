const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
    const apiKey = "AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q"; // Key 1 from the code
    const genAI = new GoogleGenerativeAI(apiKey);
    
    try {
        // The SDK doesn't have a direct listModels on genAI in some versions, 
        // but we can try to fetch the models list via axios or the REST API if needed.
        // Or check if there's a way in the SDK.
        
        // Actually, let's just try to call a simple model without tools/systemInstruction
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hi");
        console.log("Success with gemini-1.5-flash:", (await result.response).text());
    } catch (e) {
        console.error("Error with gemini-1.5-flash:", e.message);
        console.error("Full error:", e);
    }
}

listModels();
