
const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/tesouro/';

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
    return Array(5).fill(null).map(() => Array(5).fill('🟫'));
}

function initGame(id, player1, player2) {
    const game = {
        id,
        players: [player1, player2],
        turn: 0,
        board: createBoard(),
        treasures: [],
        found: [0, 0],
        status: 'playing'
    };
    // Place 5 treasures
    let placed = 0;
    while (placed < 5) {
        let r = Math.floor(Math.random() * 5);
        let c = Math.floor(Math.random() * 5);
        if (!game.treasures.some(t => t.r === r && t.c === c)) {
            game.treasures.push({ r, c });
            placed++;
        }
    }
    saveGame(id, game);
    return game;
}

function renderBoard(board) {
    let text = '   0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣\n';
    const rows = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣'];
    for (let r = 0; r < 5; r++) {
        text += rows[r] + ' ' + board[r].join('') + '\n';
    }
    return text;
}

function play(id, player, r, c) {
    const game = loadGame(id);
    if (!game) return { error: 'Jogo não encontrado.' };
    if (game.status !== 'playing') return { error: 'O jogo já terminou.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez!' };
    if (r < 0 || r > 4 || c < 0 || c > 4) return { error: 'Coordenadas inválidas!' };
    if (game.board[r][c] !== '🟫') return { error: 'Você já cavou aí!' };

    const treasureIdx = game.treasures.findIndex(t => t.r === r && t.c === c);
    if (treasureIdx !== -1) {
        game.board[r][c] = '💰';
        game.found[game.turn]++;
        game.treasures.splice(treasureIdx, 1);
        
        if (game.treasures.length === 0) {
            game.status = 'finished';
            if (game.found[0] > game.found[1]) game.winner = game.players[0];
            else if (game.found[1] > game.found[0]) game.winner = game.players[1];
            else game.winner = 'draw';
            saveGame(id, game);
            return { game, found: true, finished: true };
        }
        
        saveGame(id, game);
        return { game, found: true };
    } else {
        game.board[r][c] = '🕳️';
        game.turn = 1 - game.turn;
        saveGame(id, game);
        return { game, found: false };
    }
}

module.exports = { initGame, loadGame, play, renderBoard };
