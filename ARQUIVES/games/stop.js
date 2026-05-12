const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../DADOS DO CORVO/games/stop.json');

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

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const CATEGORY_POOL = [
    "Nome", "Animal", "Cor", "CEP (Cidade/Estado/País)", "Fruta", 
    "Objeto", "Profissão", "Marca", "Filme/Série", "Comida", "Adjetivo"
];

module.exports = {
    initGame: (groupId, players) => {
        const games = loadGames();
        
        // Pick random letter
        const letter = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        
        // Pick 5 random categories
        const shuffledCats = [...CATEGORY_POOL].sort(() => 0.5 - Math.random());
        const categories = shuffledCats.slice(0, 5);
        
        games[groupId] = {
            players: [...players],
            letter: letter,
            categories: categories,
            status: 'playing',
            startedAt: Date.now()
        };
        
        saveGames(games);
        return games[groupId];
    },
    
    play: (groupId, playerJid, answerText) => {
        const games = loadGames();
        const game = games[groupId];
        
        if (!game || game.status !== 'playing') {
            return { error: 'Nenhum jogo de STOP! em andamento neste grupo.' };
        }
        
        if (!game.players.includes(playerJid)) {
            return { error: 'Você não está participando deste STOP!' };
        }
        
        // answerText format expected: "Nome, Animal, Cor, CEP, Fruta"
        const answers = answerText.split(',').map(a => a.trim());
        
        if (answers.length < game.categories.length) {
            return { error: `Faltam respostas! São ${game.categories.length} categorias separadas por vírgula.` };
        }
        
        // Check if all answers start with the correct letter
        let wrongAnswers = [];
        for (let i = 0; i < game.categories.length; i++) {
            const word = answers[i];
            if (!word || word[0].toLowerCase() !== game.letter.toLowerCase()) {
                wrongAnswers.push(game.categories[i]);
            }
        }
        
        if (wrongAnswers.length > 0) {
            return { error: `Estas respostas não começam com a letra '${game.letter}': ${wrongAnswers.join(', ')}` };
        }
        
        // Valid STOP!
        game.status = 'finished';
        delete games[groupId];
        saveGames(games);
        
        return { winner: playerJid, answers: answers, categories: game.categories, letter: game.letter };
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
