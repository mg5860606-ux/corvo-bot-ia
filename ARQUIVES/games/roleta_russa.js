const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../DADOS DO CORVO/games/roleta.json');

// Garante que o diretório e o arquivo existam
if (!fs.existsSync(path.dirname(dataPath))) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
}
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify({}));
}

function loadGames() {
    try {
        return JSON.parse(fs.readFileSync(dataPath));
    } catch (error) {
        return {};
    }
}

function saveGames(games) {
    fs.writeFileSync(dataPath, JSON.stringify(games, null, 2));
}

module.exports = {
    initGame: (groupId, players) => {
        const games = loadGames();
        
        // Número de câmaras = número de jogadores, ou pelo menos 6 se forem poucos
        const chambers = Math.max(6, players.length);
        const bulletPos = Math.floor(Math.random() * chambers);

        games[groupId] = {
            players: [...players],
            turn: 0,
            chambers: chambers,
            bulletPos: bulletPos,
            currentChamber: 0,
            status: 'playing',
            startedAt: Date.now()
        };

        saveGames(games);
        return games[groupId];
    },

    play: (groupId, playerJid) => {
        const games = loadGames();
        const game = games[groupId];

        if (!game || game.status !== 'playing') {
            return { error: 'Nenhum jogo de Roleta Russa em andamento neste grupo.' };
        }

        if (game.players[game.turn] !== playerJid) {
            return { error: `Não é a sua vez! Vez de: @${game.players[game.turn].split('@')[0]}` };
        }

        // Verifica se atirou a bala
        const isDead = game.currentChamber === game.bulletPos;

        if (isDead) {
            game.status = 'finished';
            const deadPlayer = playerJid;
            delete games[groupId];
            saveGames(games);
            return { dead: true, deadPlayer: deadPlayer, game: game };
        } else {
            // Próximo turno
            game.currentChamber++;
            game.turn = (game.turn + 1) % game.players.length;
            saveGames(games);
            return { dead: false, game: game };
        }
    },

    getGame: (groupId) => {
        return loadGames()[groupId];
    },

    deleteGame: (groupId) => {
        const games = loadGames();
        delete games[groupId];
        saveGames(games);
    }
};
