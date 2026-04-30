const axios = require('axios');

async function listModels() {
    const apiKey = "AIzaSyB4JXhqReVz_PXUyJwVIsTC6gRMNgrVn0Q";
    try {
        const response = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        console.log("Models (v1beta):", response.data.models.map(m => m.name));
    } catch (e) {
        console.error("Error listing models (v1beta):", e.response ? e.response.data : e.message);
    }

    try {
        const response = await axios.get(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
        console.log("Models (v1):", response.data.models.map(m => m.name));
    } catch (e) {
        console.error("Error listing models (v1):", e.response ? e.response.data : e.message);
    }
}

listModels();
