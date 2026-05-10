
const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/batalha_naval/';

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

function createBoard() {
    return Array(5).fill(null).map(() => Array(5).fill('🌊'));
}

function initGame(id, player1, player2) {
    const game = {
        id,
        players: [player1, player2],
        turn: 0,
        boards: [createBoard(), createBoard()], // Hidden boards with ships
        views: [createBoard(), createBoard()],  // What each player sees of the opponent
        status: 'playing'
    };
    // Randomly place 3 ships for each player
    for (let p = 0; p < 2; p++) {
        let placed = 0;
        while (placed < 3) {
            let r = Math.floor(Math.random() * 5);
            let c = Math.floor(Math.random() * 5);
            if (game.boards[p][r][c] === '🌊') {
                game.boards[p][r][c] = '🚢';
                placed++;
            }
        }
    }
    saveGame(id, game);
    return game;
}

function renderView(view) {
    let text = '   0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣\n';
    const rows = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣'];
    for (let r = 0; r < 5; r++) {
        text += rows[r] + ' ' + view[r].join('') + '\n';
    }
    return text;
}

function play(id, player, r, c) {
    const game = loadGame(id);
    if (!game) return { error: 'Jogo não encontrado.' };
    if (game.status !== 'playing') return { error: 'O jogo já terminou.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez!' };
    if (r < 0 || r > 4 || c < 0 || c > 4) return { error: 'Coordenadas inválidas!' };

    const opponent = 1 - game.turn;
    if (game.views[opponent][r][c] !== '🌊') return { error: 'Você já atirou aí!' };

    if (game.boards[opponent][r][c] === '🚢') {
        game.views[opponent][r][c] = '💥';
        game.boards[opponent][r][c] = '🔥';
        
        // Check win
        const remaining = game.boards[opponent].flat().filter(cell => cell === '🚢').length;
        if (remaining === 0) {
            game.status = 'finished';
            game.winner = player;
            saveGame(id, game);
            return { game, hit: true, win: true };
        }
        
        saveGame(id, game);
        return { game, hit: true };
    } else {
        game.views[opponent][r][c] = '💨';
        game.turn = opponent;
        saveGame(id, game);
        return { game, hit: false };
    }
}

module.exports = { initGame, loadGame, play, renderView };
