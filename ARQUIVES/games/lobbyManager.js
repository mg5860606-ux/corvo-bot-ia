const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/lobbies/';

if (!fs.existsSync(DB_PATH)) {
    fs.mkdirSync(DB_PATH, { recursive: true });
}

function saveLobby(id, data) {
    fs.writeFileSync(path.join(DB_PATH, `${id}.json`), JSON.stringify(data, null, 2));
}

function loadLobby(id) {
    const file = path.join(DB_PATH, `${id}.json`);
    if (fs.existsSync(file)) {
        return JSON.parse(fs.readFileSync(file));
    }
    return null;
}

function deleteLobby(id) {
    const file = path.join(DB_PATH, `${id}.json`);
    if (fs.existsSync(file)) fs.unlinkSync(file);
}

// id = groupId
function createLobby(id, gameName, host) {
    const lobby = {
        id,
        gameName,
        host,
        players: [host],
        status: 'waiting',
        createdAt: Date.now()
    };
    saveLobby(id, lobby);
    return lobby;
}

function joinLobby(id, player) {
    const lobby = loadLobby(id);
    if (!lobby) return { error: 'Nenhum lobby ativo neste grupo.' };
    if (lobby.status !== 'waiting') return { error: 'O jogo já começou!' };
    if (lobby.players.includes(player)) return { error: 'Você já está no lobby!' };
    
    lobby.players.push(player);
    saveLobby(id, lobby);
    return { success: true, lobby };
}

function startLobby(id, player, minPlayers = 2) {
    const lobby = loadLobby(id);
    if (!lobby) return { error: 'Nenhum lobby ativo neste grupo.' };
    if (lobby.host !== player) return { error: 'Apenas o dono do lobby pode iniciar o jogo.' };
    if (lobby.players.length < minPlayers) return { error: `É necessário pelo menos ${minPlayers} jogadores para iniciar.` };
    
    lobby.status = 'playing';
    saveLobby(id, lobby);
    return { success: true, lobby };
}

module.exports = { createLobby, joinLobby, startLobby, loadLobby, deleteLobby, saveLobby };
