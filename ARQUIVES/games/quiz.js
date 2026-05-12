const fs = require('fs');
const path = require('path');
const Groq = require('groq-sdk');
const { nescessario } = require('../funcoes/exports'); // To get the API key if possible, but let's just assume we can get it or pass it.
// Actually, corvo.js has the groq call logic. It's better to just manage the state here and do the AI call in corvo.js, or pass the text.

const dataPath = path.join(__dirname, '../../DADOS DO CORVO/games/quiz.json');

// Garante que o diretório e o arquivo existam
if (!fs.existsSync(path.dirname(dataPath))) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
}
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify({}));
}

function loadGames() {
    try {
        return JSON.parse(fs.readFileSync(dataPath));
    } catch (error) {
        return {};
    }
}

function saveGames(games) {
    fs.writeFileSync(dataPath, JSON.stringify(games, null, 2));
}

module.exports = {
    // We will generate the question using corvo.js groq function and just pass the result here
    initGame: (groupId, hostJid, question, correctAnswer) => {
        const games = loadGames();
        
        games[groupId] = {
            host: hostJid,
            question: question,
            correctAnswer: correctAnswer.toLowerCase().trim(),
            status: 'playing',
            startedAt: Date.now()
        };

        saveGames(games);
        return games[groupId];
    },

    play: (groupId, playerJid, answer) => {
        const games = loadGames();
        const game = games[groupId];

        if (!game || game.status !== 'playing') {
            return { error: 'Nenhum Quiz em andamento neste grupo.' };
        }

        const normalizedAnswer = answer.toLowerCase().trim();
        const isCorrect = normalizedAnswer === game.correctAnswer || normalizedAnswer.includes(game.correctAnswer);

        if (isCorrect) {
            game.status = 'finished';
            delete games[groupId];
            saveGames(games);
            return { correct: true, winner: playerJid };
        } else {
            return { correct: false };
        }
    },

    getGame: (groupId) => {
        return loadGames()[groupId];
    },

    deleteGame: (groupId) => {
        const games = loadGames();
        delete games[groupId];
        saveGames(games);
    }
};
