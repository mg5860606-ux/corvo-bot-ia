
const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/lig4/';

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
    return Array(6).fill(null).map(() => Array(7).fill('⚪'));
}

function renderBoard(board) {
    let text = '1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣\n';
    for (let r = 0; r < 6; r++) {
        text += board[r].join('') + '\n';
    }
    return text;
}

function checkWin(board, r, c, color) {
    const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1]
    ];
    for (const [dr, dc] of directions) {
        let count = 1;
        // Check one direction
        for (let i = 1; i < 4; i++) {
            const nr = r + dr * i, nc = c + dc * i;
            if (nr >= 0 && nr < 6 && nc >= 0 && nc < 7 && board[nr][nc] === color) count++;
            else break;
        }
        // Check opposite direction
        for (let i = 1; i < 4; i++) {
            const nr = r - dr * i, nc = c - dc * i;
            if (nr >= 0 && nr < 6 && nc >= 0 && nc < 7 && board[nr][nc] === color) count++;
            else break;
        }
        if (count >= 4) return true;
    }
    return false;
}

function initGame(id, player1, player2) {
    const game = {
        id,
        players: [player1, player2],
        turn: 0, // 0 for player1 (🔵), 1 for player2 (🔴)
        board: createBoard(),
        status: 'playing'
    };
    saveGame(id, game);
    return game;
}

function play(id, player, col) {
    const game = loadGame(id);
    if (!game) return { error: 'Jogo não encontrado.' };
    if (game.status !== 'playing') return { error: 'O jogo já terminou.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez!' };
    if (col < 0 || col > 6) return { error: 'Coluna inválida.' };

    const color = game.turn === 0 ? '🔵' : '🔴';
    let row = -1;
    for (let r = 5; r >= 0; r--) {
        if (game.board[r][col] === '⚪') {
            row = r;
            break;
        }
    }

    if (row === -1) return { error: 'Coluna cheia!' };

    game.board[row][col] = color;

    if (checkWin(game.board, row, col, color)) {
        game.status = 'finished';
        game.winner = player;
        saveGame(id, game);
        return { game, win: true };
    }

    // Check draw
    if (game.board.every(r => r.every(c => c !== '⚪'))) {
        game.status = 'finished';
        game.winner = 'draw';
        saveGame(id, game);
        return { game, draw: true };
    }

    game.turn = 1 - game.turn;
    saveGame(id, game);
    return { game };
}

module.exports = { initGame, loadGame, play, renderBoard };
