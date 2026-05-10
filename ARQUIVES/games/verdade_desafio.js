
const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/verdade_desafio/';

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

const VERDADES = [
    "Qual é o seu maior segredo?",
    "Quem você levaria para uma ilha deserta?",
    "Qual foi a coisa mais embaraçosa que você já fez?",
    "Você já mentiu para o seu melhor amigo?",
    "Qual é o seu maior medo?"
];

const DESAFIOS = [
    "Mande um áudio cantando uma música brega.",
    "Mude sua foto de perfil por 1 hora.",
    "Mande um trava-língua difícil sem errar.",
    "Diga algo engraçado sobre o dono do bot.",
    "Mande um sticker aleatório agora."
];

function initGame(id, player1, player2) {
    const game = {
        id,
        players: [player1, player2],
        turn: 0,
        status: 'playing'
    };
    saveGame(id, game);
    return game;
}

function play(id, player, type) {
    const game = loadGame(id);
    if (!game) return { error: 'Jogo não encontrado.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez!' };

    let prompt = '';
    if (type.toLowerCase() === 'verdade') {
        prompt = VERDADES[Math.floor(Math.random() * VERDADES.length)];
    } else if (type.toLowerCase() === 'desafio') {
        prompt = DESAFIOS[Math.floor(Math.random() * DESAFIOS.length)];
    } else {
        return { error: 'Escolha "verdade" ou "desafio"!' };
    }

    game.turn = 1 - game.turn;
    saveGame(id, game);
    return { game, prompt };
}

module.exports = { initGame, loadGame, play };
