const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/detetive/';

if (!fs.existsSync(DB_PATH)) {
    fs.mkdirSync(DB_PATH, { recursive: true });
}

function saveGame(id, data) {
    fs.writeFileSync(path.join(DB_PATH, `${id}.json`), JSON.stringify(data, null, 2));
}

function loadGame(id) {
    const file = path.join(DB_PATH, `${id}.json`);
    if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file));
    return null;
}

function deleteGame(id) {
    const file = path.join(DB_PATH, `${id}.json`);
    if (fs.existsSync(file)) fs.unlinkSync(file);
}

const SUSPEITOS = ['Coronel Mostarda', 'Dona Branca', 'Professor Plum', 'Srta Scarlet', 'Sra Peacock', 'Reverendo Verde'];
const ARMAS = ['Corda', 'Cano de Chumbo', 'Faca', 'Chave Inglesa', 'Castiçal', 'Revólver'];
const LOCAIS = ['Cozinha', 'Salão de Baile', 'Jardim de Inverno', 'Sala de Jantar', 'Biblioteca', 'Escritório'];

function randomPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function initGame(lobbyId, players) {
    const crime = {
        suspeito: randomPick(SUSPEITOS),
        arma: randomPick(ARMAS),
        local: randomPick(LOCAIS)
    };

    const game = {
        id: lobbyId,
        players,
        turn: 0,
        crime,
        status: 'playing',
        log: 'O assassinato ocorreu! Encontrem o culpado, a arma e o local!'
    };
    saveGame(lobbyId, game);
    return game;
}

function play(id, player, palpiteStr) {
    const game = loadGame(id);
    if (!game || game.status !== 'playing') return { error: 'Nenhum jogo em andamento.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez de palpitar!' };

    // palpiteStr like "Professor Plum | Faca | Biblioteca"
    const partes = palpiteStr.split('|').map(s => s.trim());
    if (partes.length !== 3) return { error: 'Palpite inválido. Use o formato: /palpite Suspeito | Arma | Local' };

    const [pSuspeito, pArma, pLocal] = partes;

    let acertos = 0;
    if (game.crime.suspeito.toLowerCase() === pSuspeito.toLowerCase()) acertos++;
    if (game.crime.arma.toLowerCase() === pArma.toLowerCase()) acertos++;
    if (game.crime.local.toLowerCase() === pLocal.toLowerCase()) acertos++;

    let actionLog = `@${player.split('@')[0]} palpitou:\n🕵️ ${pSuspeito}\n🗡️ ${pArma}\n📍 ${pLocal}\n\n`;

    if (acertos === 3) {
        actionLog += `🎉 EXCELENTE DETETIVE! Você desvendou o crime perfeitamente!`;
        game.status = 'finished';
        game.winner = player;
    } else {
        actionLog += `❌ Você acertou ${acertos} de 3 elementos. (Não direi quais!)`;
        game.turn = (game.turn + 1) % game.players.length;
    }

    game.log = actionLog;
    saveGame(id, game);
    return { game, actionLog };
}

function renderBoard(game) {
    let txt = `🕵️‍♂️ *DETETIVE CLÁSSICO* 🩸\n\n`;
    
    txt += `*Suspeitos:* ${SUSPEITOS.join(', ')}\n`;
    txt += `*Armas:* ${ARMAS.join(', ')}\n`;
    txt += `*Locais:* ${LOCAIS.join(', ')}\n\n`;

    if (game.status === 'playing') {
        txt += `👉 Vez de: @${game.players[game.turn].split('@')[0]}\n`;
        txt += `Comando: /palpite Suspeito | Arma | Local\nExemplo: /palpite Dona Branca | Corda | Cozinha`;
    }
    return txt;
}

module.exports = { initGame, play, loadGame, renderBoard, deleteGame };
