const fs = require('fs');
const path = require('path');

const DB_PATH = './DADOS DO CORVO/games/monopoly/';

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

// 16 Spaces:
// 0: Start, 1-3: Props, 4: Jail (visit), 5-7: Props, 8: Parking, 9-11: Props, 12: Go to Jail, 13-15: Props
const boardConfig = [
    { name: 'INÍCIO', type: 'start', emoji: '🏁' },
    { name: 'Rua Augusta', type: 'prop', cost: 100, rent: 20, emoji: '🟫' },
    { name: 'Av. Paulista', type: 'prop', cost: 120, rent: 25, emoji: '🟫' },
    { name: 'Sorte/Revés', type: 'luck', emoji: '❓' },
    { name: 'Cadeia', type: 'jail', emoji: '🚓' },
    { name: 'Copacabana', type: 'prop', cost: 200, rent: 40, emoji: '🟦' },
    { name: 'Ipanema', type: 'prop', cost: 220, rent: 45, emoji: '🟦' },
    { name: 'Imposto', type: 'tax', amount: 200, emoji: '💸' },
    { name: 'Estacionamento', type: 'parking', emoji: '🅿️' },
    { name: 'Av. Brasil', type: 'prop', cost: 300, rent: 60, emoji: '🟩' },
    { name: 'Interlagos', type: 'prop', cost: 320, rent: 65, emoji: '🟩' },
    { name: 'Sorte/Revés', type: 'luck', emoji: '❓' },
    { name: 'Vá p/ Cadeia', type: 'gotojail', emoji: '⚖️' },
    { name: 'Morumbi', type: 'prop', cost: 400, rent: 80, emoji: '🟪' },
    { name: 'Leblon', type: 'prop', cost: 420, rent: 85, emoji: '🟪' },
    { name: 'Imposto', type: 'tax', amount: 100, emoji: '💸' }
];

function initGame(lobbyId, players) {
    const pData = {};
    players.forEach((p, idx) => {
        pData[p] = { money: 1500, pos: 0, jail: 0, icon: ['🔴', '🔵', '🟢', '🟡'][idx % 4] };
    });

    const game = {
        id: lobbyId,
        players,
        pData,
        turn: 0,
        properties: {}, // { spaceIndex: ownerId }
        status: 'playing',
        log: 'Jogo iniciado!'
    };
    saveGame(lobbyId, game);
    return game;
}

function play(id, player, actionCmd) {
    const game = loadGame(id);
    if (!game || game.status !== 'playing') return { error: 'Nenhum jogo em andamento.' };
    
    if (actionCmd !== 'status' && game.players[game.turn] !== player) {
        return { error: 'Não é sua vez!' };
    }

    const pState = game.pData[player];
    let actionLog = '';

    if (actionCmd === 'rolar') {
        if (pState.jail > 0) {
            pState.jail--;
            actionLog = `Você está na cadeia. Faltam ${pState.jail} turnos.`;
            game.turn = (game.turn + 1) % game.players.length;
        } else {
            const dice = Math.floor(Math.random() * 6) + 1;
            pState.pos += dice;
            if (pState.pos >= 16) {
                pState.pos -= 16;
                pState.money += 200; // Passed GO
                actionLog += `Passou pelo Início (+R$200)! `;
            }
            
            const space = boardConfig[pState.pos];
            actionLog += `🎲 Rolou ${dice}. Caiu em: ${space.emoji} ${space.name}. `;

            if (space.type === 'prop') {
                const owner = game.properties[pState.pos];
                if (owner && owner !== player) {
                    pState.money -= space.rent;
                    game.pData[owner].money += space.rent;
                    actionLog += `\n💸 Pagou R$${space.rent} de aluguel para @${owner.split('@')[0]}.`;
                } else if (!owner) {
                    actionLog += `\n💰 Propriedade à venda por R$${space.cost}. Envie /comprar ou /passar.`;
                    game.log = actionLog;
                    saveGame(id, game);
                    return { game, waitAction: true };
                }
            } else if (space.type === 'tax') {
                pState.money -= space.amount;
                actionLog += `\n💸 Pagou R$${space.amount} de impostos.`;
            } else if (space.type === 'gotojail') {
                pState.pos = 4;
                pState.jail = 3;
                actionLog += `\n🚔 FOI PRESO!`;
            } else if (space.type === 'luck') {
                const isGood = Math.random() > 0.5;
                if (isGood) {
                    pState.money += 100;
                    actionLog += `\n🍀 Sorte! Achou R$100.`;
                } else {
                    pState.money -= 50;
                    actionLog += `\n📉 Revés! Perdeu R$50.`;
                }
            }

            if (pState.money < 0) {
                actionLog += `\n💀 FALÊNCIA! Você perdeu o jogo.`;
                game.status = 'finished';
                game.winner = game.players.find(p => p !== player);
            } else {
                game.turn = (game.turn + 1) % game.players.length;
            }
        }
    } else if (actionCmd === 'comprar') {
        const space = boardConfig[pState.pos];
        if (space.type !== 'prop' || game.properties[pState.pos]) return { error: 'Não pode comprar isso.' };
        if (pState.money < space.cost) return { error: 'Dinheiro insuficiente!' };

        pState.money -= space.cost;
        game.properties[pState.pos] = player;
        actionLog = `🤝 Comprou ${space.name} por R$${space.cost}!`;
        game.turn = (game.turn + 1) % game.players.length;
    } else if (actionCmd === 'passar') {
        actionLog = `Passou a vez e não comprou.`;
        game.turn = (game.turn + 1) % game.players.length;
    }

    game.log = actionLog;
    saveGame(id, game);
    return { game, actionLog };
}

function renderBoard(game) {
    let txt = `🏦 *MONOPOLY MINI* 🏦\n\n`;
    
    // Draw simple map: 0-4 (top), 5-7 (right), 8-12 (bottom), 13-15 (left)
    // For WhatsApp, a linear representation with player icons is better because grids break on different screen sizes.
    
    for (let i = 0; i < 16; i++) {
        let playersHere = game.players.filter(p => game.pData[p].pos === i).map(p => game.pData[p].icon).join('');
        let ownerTag = game.properties[i] ? `(Dono: @${game.properties[i].split('@')[0]})` : '';
        txt += `${boardConfig[i].emoji} ${i}. ${boardConfig[i].name} ${playersHere} ${ownerTag}\n`;
    }

    txt += `\n*Status dos Jogadores:*\n`;
    game.players.forEach((p, idx) => {
        const turnMarker = idx === game.turn ? '👉' : '  ';
        txt += `${turnMarker} ${game.pData[p].icon} @${p.split('@')[0]} - R$${game.pData[p].money}\n`;
    });

    txt += `\nÚltima Ação: ${game.log}\n\nComandos: /rolar, /comprar, /passar`;
    return txt;
}

module.exports = { initGame, play, loadGame, renderBoard, deleteGame };
