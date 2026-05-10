const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/lobisomem/';

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

function initGame(lobbyId, players) {
    let shuffled = [...players].sort(() => Math.random() - 0.5);
    
    // Assign roles based on player count
    let roles = {};
    roles[shuffled[0]] = 'lobisomem';
    if (players.length > 2) roles[shuffled[1]] = 'vidente';
    else roles[shuffled[1]] = 'aldeao'; // Se tiver só 2, é só aldeão (para teste)
    
    for (let i = 2; i < players.length; i++) {
        roles[shuffled[i]] = 'aldeao';
    }

    const game = {
        id: lobbyId,
        players: [...players], // Alives
        roles,
        phase: 'night_wolf', // night_wolf, night_seer, day_vote
        votes: {},
        dead: [],
        status: 'playing',
        log: 'A noite caiu sobre a vila... O Lobisomem deve escolher uma vítima!'
    };
    saveGame(lobbyId, game);
    return game;
}

function checkWinCondition(game) {
    const wolves = game.players.filter(p => game.roles[p] === 'lobisomem');
    const village = game.players.filter(p => game.roles[p] !== 'lobisomem');

    if (wolves.length === 0) return 'village';
    if (wolves.length >= village.length) return 'wolves';
    return null;
}

function play(id, player, target, actionCmd) {
    const game = loadGame(id);
    if (!game || game.status !== 'playing') return { error: 'Nenhum jogo em andamento.' };
    if (!game.players.includes(player)) return { error: 'Você está morto ou não faz parte do jogo.' };

    let actionLog = '';

    if (actionCmd === 'matar') {
        if (game.phase !== 'night_wolf') return { error: 'Não é hora dos lobos atacarem!' };
        if (game.roles[player] !== 'lobisomem') return { error: 'Você não é um lobisomem!' };
        if (!game.players.includes(target)) return { error: 'Alvo inválido.' };

        game.deadTonight = target;
        game.phase = game.players.some(p => game.roles[p] === 'vidente') ? 'night_seer' : 'day_vote';
        actionLog = `Lobisomem agiu. `;
        if (game.phase === 'day_vote') {
            game.players = game.players.filter(p => p !== game.deadTonight);
            game.dead.push(game.deadTonight);
            actionLog += `\n🌅 O dia amanheceu. A vila encontrou o corpo de @${game.deadTonight.split('@')[0]}!`;
            
            const win = checkWinCondition(game);
            if (win) {
                game.status = 'finished';
                game.winner = win;
            }
        }
    } else if (actionCmd === 'ver') {
        if (game.phase !== 'night_seer') return { error: 'Não é hora da vidente.' };
        if (game.roles[player] !== 'vidente') return { error: 'Você não é a vidente!' };
        if (!game.players.includes(target)) return { error: 'Alvo inválido.' };

        const role = game.roles[target] === 'lobisomem' ? '🔴 LOBISOMEM' : '🔵 INOCENTE';
        actionLog = `Você olhou na bola de cristal e viu que @${target.split('@')[0]} é: ${role}.`;
        
        game.phase = 'day_vote';
        game.players = game.players.filter(p => p !== game.deadTonight);
        game.dead.push(game.deadTonight);
        game.log = `🌅 O dia amanheceu. O corpo de @${game.deadTonight.split('@')[0]} foi encontrado dilacerado!`;
        
        const win = checkWinCondition(game);
        if (win) {
            game.status = 'finished';
            game.winner = win;
        }

        saveGame(id, game);
        return { game, actionLog, privateMsg: true }; // Send this privately
    } else if (actionCmd === 'votar') {
        if (game.phase !== 'day_vote') return { error: 'A votação ocorre apenas de dia!' };
        if (!game.players.includes(target)) return { error: 'Alvo inválido.' };

        game.votes[player] = target;
        actionLog = `@${player.split('@')[0]} votou em @${target.split('@')[0]}.`;

        // Check if everyone voted
        if (Object.keys(game.votes).length === game.players.length) {
            const counts = {};
            for (let v of Object.values(game.votes)) {
                counts[v] = (counts[v] || 0) + 1;
            }
            let maxVotes = 0;
            let lynched = null;
            for (let p in counts) {
                if (counts[p] > maxVotes) {
                    maxVotes = counts[p];
                    lynched = p;
                }
            }

            game.players = game.players.filter(p => p !== lynched);
            game.dead.push(lynched);
            actionLog += `\n🔥 A vila decidiu linchar @${lynched.split('@')[0]}!`;
            
            const win = checkWinCondition(game);
            if (win) {
                game.status = 'finished';
                game.winner = win;
            } else {
                game.phase = 'night_wolf';
                game.votes = {};
                actionLog += `\n🌃 A noite cai novamente. Lobisomens, escolham sua vítima!`;
            }
        }
    }

    game.log = actionLog;
    saveGame(id, game);
    return { game, actionLog };
}

function renderBoard(game) {
    let txt = `🐺 *LOBISOMEM* 🌕\n\n`;
    txt += `*Vivos (${game.players.length}):*\n`;
    game.players.forEach(p => txt += `👤 @${p.split('@')[0]}\n`);
    
    if (game.dead.length > 0) {
        txt += `\n*Cemitério:*\n`;
        game.dead.forEach(p => txt += `💀 @${p.split('@')[0]} (${game.roles[p]})\n`);
    }

    txt += `\nFase Atual: *${game.phase.includes('night') ? '🌃 NOITE' : '☀️ DIA (Votação)'}*\n`;
    if (game.phase === 'day_vote') txt += `Use /votar @usuario para linchar alguém.\n`;
    return txt;
}

module.exports = { initGame, play, loadGame, renderBoard, deleteGame };
