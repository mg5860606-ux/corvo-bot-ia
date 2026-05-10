const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/corrida/';

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

const CARROS = ['🏎️', '🚓', '🚕', '🚙', '🚜', '🛵', '🚑', '🚒'];

function initGame(lobbyId, players) {
    let pData = {};
    players.forEach((p, idx) => {
        pData[p] = { pos: 0, car: CARROS[idx % CARROS.length] };
    });

    const game = {
        id: lobbyId,
        players,
        pData,
        turn: 0,
        status: 'playing',
        log: 'A corrida vai começar! Liguem os motores!'
    };
    saveGame(lobbyId, game);
    return game;
}

function play(id, player, actionCmd) {
    const game = loadGame(id);
    if (!game || game.status !== 'playing') return { error: 'Nenhum jogo em andamento.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez de acelerar!' };

    let actionLog = '';

    if (actionCmd === 'acelerar') {
        const dice = Math.floor(Math.random() * 6) + 1; // 1 to 6
        const eventChance = Math.random();
        
        let move = dice;
        let eventMsg = '';

        if (eventChance > 0.85) {
            move += 3;
            eventMsg = ' 🚀 Usou o NITRO! (+3)';
        } else if (eventChance < 0.15) {
            move -= 2;
            eventMsg = ' 💥 Bateu num buraco! (-2)';
        } else if (eventChance > 0.4 && eventChance < 0.5) {
            move = 0;
            eventMsg = ' 🛑 Pneu furou! Ficou parado.';
        }

        if (move < 0) move = 0;
        game.pData[player].pos += move;

        actionLog = `Você tirou ${dice} no dado.${eventMsg} Andou ${move} casas.`;

        if (game.pData[player].pos >= 30) {
            game.status = 'finished';
            game.winner = player;
            actionLog += `\n🏁 CRUZOU A LINHA DE CHEGADA!`;
        } else {
            game.turn = (game.turn + 1) % game.players.length;
        }
    }

    game.log = actionLog;
    saveGame(id, game);
    return { game, actionLog };
}

function renderBoard(game) {
    let txt = `🏁 *CORRIDA MALUCA* 🏁\n\n`;
    const trackLength = 30;

    game.players.forEach(p => {
        const data = game.pData[p];
        let track = '-'.repeat(trackLength);
        
        let pPos = data.pos >= trackLength ? trackLength - 1 : data.pos;
        let visualTrack = track.substring(0, pPos) + data.car + track.substring(pPos + 1);
        
        txt += `@${p.split('@')[0]}\n[${visualTrack}] 🏁\n\n`;
    });

    if (game.status === 'playing') {
        txt += `\n👉 Vez de: @${game.players[game.turn].split('@')[0]}\nComandos: /acelerar`;
    }
    return txt;
}

module.exports = { initGame, play, loadGame, renderBoard, deleteGame };
