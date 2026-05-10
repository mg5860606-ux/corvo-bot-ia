
const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/forca/';

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

function initGame(id, player1, player2, word) {
    const game = {
        id,
        players: [player1, player2],
        word: word.toLowerCase(),
        guessed: [],
        lives: 6,
        status: 'playing'
    };
    saveGame(id, game);
    return game;
}

function renderGame(game) {
    let display = '';
    for (const char of game.word) {
        if (game.guessed.includes(char) || char === ' ') display += char;
        else display += ' _ ';
    }
    return `Palavra: ${display}\nVidas: ${'❤️'.repeat(game.lives)}\nLetras: ${game.guessed.join(', ')}`;
}

function play(id, player, letter) {
    const game = loadGame(id);
    if (!game) return { error: 'Jogo não encontrado.' };
    if (game.status !== 'playing') return { error: 'O jogo já terminou.' };
    if (player !== game.players[1]) return { error: 'Apenas o desafiado pode chutar!' };

    letter = letter.toLowerCase();
    if (game.guessed.includes(letter)) return { error: 'Você já tentou essa letra!' };

    game.guessed.push(letter);
    if (!game.word.includes(letter)) {
        game.lives--;
    }

    const won = [...game.word].every(char => char === ' ' || game.guessed.includes(char));
    if (won) {
        game.status = 'finished';
        game.winner = player;
        saveGame(id, game);
        return { game, won: true };
    }

    if (game.lives <= 0) {
        game.status = 'finished';
        game.winner = game.players[0]; // Desafiador ganhou
        saveGame(id, game);
        return { game, lost: true };
    }

    saveGame(id, game);
    return { game };
}

module.exports = { initGame, loadGame, play, renderGame };
