
const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/jokenpo/';

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

function initGame(id, player1, player2) {
    const game = {
        id,
        players: [player1, player2],
        moves: [null, null],
        status: 'waiting'
    };
    saveGame(id, game);
    return game;
}

function play(id, player, choice) {
    const game = loadGame(id);
    if (!game) return { error: 'Jogo não encontrado.' };
    if (game.status === 'finished') return { error: 'O jogo já terminou.' };
    
    const pIdx = game.players.indexOf(player);
    if (pIdx === -1) return { error: 'Você não está neste jogo!' };
    
    const choices = ['pedra', 'papel', 'tesoura'];
    if (!choices.includes(choice.toLowerCase())) return { error: 'Escolha inválida! Use: pedra, papel ou tesoura.' };

    game.moves[pIdx] = choice.toLowerCase();
    
    if (game.moves[0] && game.moves[1]) {
        game.status = 'finished';
        const m1 = game.moves[0];
        const m2 = game.moves[1];
        
        if (m1 === m2) {
            game.winner = 'draw';
        } else if (
            (m1 === 'pedra' && m2 === 'tesoura') ||
            (m1 === 'papel' && m2 === 'pedra') ||
            (m1 === 'tesoura' && m2 === 'papel')
        ) {
            game.winner = game.players[0];
        } else {
            game.winner = game.players[1];
        }
        saveGame(id, game);
        return { game, finished: true };
    }
    
    saveGame(id, game);
    return { game, waiting: true };
}

module.exports = { initGame, loadGame, play };
