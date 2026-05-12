const fs = require('fs');
const path = require('path');
const { getName } = require('../funcoes/exports.js');

const DB_PATH = './DADOS DO CORVO/games/roleta_mp/';

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

function deleteGame(id) {
    const file = path.join(DB_PATH, `${id}.json`);
    if (fs.existsSync(file)) fs.unlinkSync(file);
}

function initGame(lobbyId, players) {
    const game = {
        id: lobbyId,
        players: [...players], // Alives
        dead: [],
        turn: 0,
        chambers: 6,
        bulletIndex: Math.floor(Math.random() * 6),
        currentChamber: 0,
        status: 'playing'
    };
    saveGame(lobbyId, game);
    return game;
}

function play(id, player) {
    const game = loadGame(id);
    if (!game || game.status !== 'playing') return { error: 'Nenhum jogo em andamento.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez de atirar!' };

    const isDead = game.currentChamber === game.bulletIndex;
    let action = '';

    if (isDead) {
        action = `💥 *POW!* @${player.split('@')[0]} (${getName(player)}) disparou e M-O-R-R-E-U! 💀`;
        game.dead.push(player);
        game.players.splice(game.turn, 1);
        
        if (game.players.length === 1) {
            game.status = 'finished';
            game.winner = game.players[0];
            action += `\n\n🎉 O grande sobrevivente foi @${game.winner.split('@')[0]} (${getName(game.winner)})!`;
        } else {
            // Reload the gun
            game.chambers = 6;
            game.bulletIndex = Math.floor(Math.random() * 6);
            game.currentChamber = 0;
            action += `\n\n🔫 A arma foi recarregada.`;
            // turn index adjusts automatically since the dead player is removed
            if (game.turn >= game.players.length) game.turn = 0; 
        }
    } else {
        action = `✨ *CLIQUE!* Câmara vazia. @${player.split('@')[0]} (${getName(player)}) sobreviveu! 🍀`;
        game.currentChamber++;
        game.turn = (game.turn + 1) % game.players.length;
    }

    saveGame(id, game);
    return { game, action, isDead, finished: game.status === 'finished' };
}

function renderBoard(game) {
    let txt = `🔫 *ROLETA RUSSA MULTIPLAYER* 🔫\n\n`;
    txt += `*Sobreviventes:*\n`;
    game.players.forEach((p, i) => {
        const turnMarker = i === game.turn ? '👉' : '  ';
        txt += `${turnMarker} @${p.split('@')[0]} (${getName(p)}) 😰\n`;
    });
    if (game.dead.length > 0) {
        txt += `\n*Presuntos:*\n`;
        game.dead.forEach(p => {
            txt += `💀 @${p.split('@')[0]} (${getName(p)})\n`;
        });
    }
    
    txt += `\n👉 Vez de: @${game.players[game.turn].split('@')[0]} (${getName(game.players[game.turn])})\n`;
    txt += `Envie */atirar* para puxar o gatilho!`;
    return txt;
}

module.exports = { initGame, play, loadGame, renderBoard, deleteGame };
