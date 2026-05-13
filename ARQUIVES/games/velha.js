
const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/velha/';

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
    return Array(9).fill('⬜');
}

function renderBoard(board) {
    let text = '';
    for (let i = 0; i < 9; i++) {
        text += board[i];
        if ((i + 1) % 3 === 0) text += '\n';
    }
    return text;
}

function checkWin(board) {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const [a, b, c] of wins) {
        if (board[a] !== '⬜' && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    if (board.every(cell => cell !== '⬜')) return 'draw';
    return null;
}

function initGame(id, player1, player2) {
    const game = {
        id,
        players: [player1, player2],
        turn: 0,
        board: createBoard(),
        status: 'playing'
    };
    saveGame(id, game);
    return game;
}

function play(id, player, pos) {
    const game = loadGame(id);
    if (!game) return { error: 'Jogo não encontrado.' };
    if (game.status !== 'playing') return { error: 'O jogo já terminou.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez!' };
    if (pos < 1 || pos > 9 || game.board[pos - 1] !== '⬜') return { error: 'Posição inválida!' };

    game.board[pos - 1] = game.turn === 0 ? '❌' : '⭕';
    const win = checkWin(game.board);
    
    if (win) {
        game.status = 'finished';
        game.winner = win === 'draw' ? 'draw' : player;
        saveGame(id, game);
        return { game, finished: true };
    }

    game.turn = 1 - game.turn;
    saveGame(id, game);
    return { game };
}

module.exports = { initGame, loadGame, play, renderBoard, saveGame };
