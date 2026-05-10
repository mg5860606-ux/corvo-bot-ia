
const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/rimas/';

if (!fs.existsSync(DB_PATH)) {
    fs.mkdirSync(DB_PATH, { recursive: true });
}

function saveGame(id, data) {
    fs.writeFileSync(path.join(DB_PATH, `${id}.json`), JSON.stringify(data, null, 2));
}

function loadGame(id) {
    const file = path.join(DB_PATH, `${id}.json`);
    if (fs.existsSync(file)) {
        return JSON.parse(fs.readFileSync(file));
    }
    return null;
}

const PALAVRAS = ['amor', 'corvo', 'bot', 'fogo', 'jogo', 'vitoria', 'derrota', 'amigo', 'inimigo', 'paz'];

function initGame(id, player1, player2) {
    const word = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    const game = {
        id,
        players: [player1, player2],
        word,
        status: 'playing',
        startTime: Date.now()
    };
    saveGame(id, game);
    return game;
}

function checkRhyme(word, attempt) {
    if (word === attempt) return false;
    const suffix = word.slice(-2).toLowerCase();
    return attempt.toLowerCase().endsWith(suffix);
}

function play(id, player, attempt) {
    const game = loadGame(id);
    if (!game) return { error: 'Jogo não encontrado.' };
    if (game.status !== 'playing') return { error: 'O jogo já terminou.' };
    if (!game.players.includes(player)) return { error: 'Você não está nesta batalha!' };

    if (checkRhyme(game.word, attempt)) {
        game.status = 'finished';
        game.winner = player;
        saveGame(id, game);
        return { game, success: true };
    }

    return { error: 'Não rimou ou palavra igual! Tente novamente.' };
}

module.exports = { initGame, loadGame, play };
