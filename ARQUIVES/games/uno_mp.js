const fs = require('fs');
const path = require('path');
const { getName } = require('../funcoes/exports.js');

const DB_PATH = './DADOS DO CORVO/games/uno_mp/';

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

const colors = ['🔴', '🔵', '🟡', '🟢'];
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Bloqueio', 'Reverso', '+2'];
const wilds = ['Coringa', '+4'];

function createDeck() {
    let deck = [];
    for (let color of colors) {
        deck.push({ color, value: '0' });
        for (let i = 0; i < 2; i++) {
            for (let value of values.slice(1)) {
                deck.push({ color, value });
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        deck.push({ color: '⚫', value: 'Coringa' });
        deck.push({ color: '⚫', value: '+4' });
    }
    return deck.sort(() => Math.random() - 0.5);
}

function formatCard(card) {
    if (card.color === '⚫') return `🃏 ${card.value}`;
    return `${card.color} ${card.value}`;
}

function initGame(lobbyId, players) {
    let deck = createDeck();
    let hands = {};
    players.forEach(p => {
        hands[p] = deck.splice(0, 7);
    });

    let topCard = deck.pop();
    while (topCard.color === '⚫') {
        deck.push(topCard);
        deck.sort(() => Math.random() - 0.5);
        topCard = deck.pop();
    }

    const game = {
        id: lobbyId,
        players,
        hands,
        deck,
        discardPile: [topCard],
        turn: 0,
        direction: 1,
        currentColor: topCard.color,
        status: 'playing'
    };
    saveGame(lobbyId, game);
    return game;
}

function nextTurn(game, step = 1) {
    game.turn = (game.turn + (step * game.direction) + game.players.length) % game.players.length;
}

function drawCards(game, player, amount) {
    for (let i = 0; i < amount; i++) {
        if (game.deck.length === 0) {
            const top = game.discardPile.pop();
            game.deck = game.discardPile.sort(() => Math.random() - 0.5);
            game.discardPile = [top];
        }
        game.hands[player].push(game.deck.pop());
    }
}

function play(id, player, cardIndex, newColor = null) {
    const game = loadGame(id);
    if (!game || game.status !== 'playing') return { error: 'Nenhum jogo em andamento.' };
    if (game.players[game.turn] !== player) return { error: 'Não é sua vez!' };

    const hand = game.hands[player];
    
    // Draw card if cardIndex is -1
    if (cardIndex === -1) {
        drawCards(game, player, 1);
        nextTurn(game);
        saveGame(id, game);
        return { game, action: 'Pescou 1 carta.' };
    }

    if (cardIndex < 0 || cardIndex >= hand.length) return { error: 'Carta inválida!' };

    const card = hand[cardIndex];
    const topCard = game.discardPile[game.discardPile.length - 1];

    const canPlay = card.color === '⚫' || card.color === game.currentColor || card.value === topCard.value;
    if (!canPlay) return { error: 'Você não pode jogar essa carta!' };

    if (card.color === '⚫') {
        if (!colors.includes(newColor)) return { error: 'Você precisa escolher uma cor válida (🔴, 🔵, 🟡, 🟢).' };
        game.currentColor = newColor;
    } else {
        game.currentColor = card.color;
    }

    hand.splice(cardIndex, 1);
    game.discardPile.push(card);

    let action = `Jogou ${formatCard(card)}`;
    if (newColor) action += ` e escolheu a cor ${newColor}`;

    if (hand.length === 0) {
        game.status = 'finished';
        game.winner = player;
        saveGame(id, game);
        return { game, action: `${action} e BATEU! 🎉`, finished: true };
    }

    if (card.value === 'Bloqueio') {
        nextTurn(game, 2);
    } else if (card.value === 'Reverso') {
        if (game.players.length === 2) {
            nextTurn(game, 2); // In 2 players, reverse acts like skip
        } else {
            game.direction *= -1;
            nextTurn(game);
        }
    } else if (card.value === '+2') {
        nextTurn(game);
        drawCards(game, game.players[game.turn], 2);
        nextTurn(game); // Skip the penalized player's turn
    } else if (card.value === '+4') {
        nextTurn(game);
        drawCards(game, game.players[game.turn], 4);
        nextTurn(game); // Skip the penalized player's turn
    } else {
        nextTurn(game);
    }

    saveGame(id, game);
    return { game, action };
}

function renderBoard(game) {
    const topCard = game.discardPile[game.discardPile.length - 1];
    let txt = `🃏 *UNO MULTIPLAYER* 🃏\n\n`;
    txt += `*Carta na Mesa:* ${formatCard(topCard)}\n`;
    txt += `*Cor Atual:* ${game.currentColor}\n\n`;
    
    txt += `*Jogadores:*\n`;
    game.players.forEach((p, i) => {
        const turnMarker = i === game.turn ? '👉' : '  ';
        txt += `${turnMarker} ${getName(p)} (@${p.split('@')[0]}) - ${game.hands[p].length} cartas\n`;
    });
    return txt;
}

function renderHand(game, player) {
    const hand = game.hands[player];
    let txt = `Sua mão:\n\n`;
    hand.forEach((c, i) => {
        txt += `[${i}] - ${formatCard(c)}\n`;
    });
    txt += `\nEnvie */jogar <indice>* para jogar uma carta ou */pescar* para comprar.`;
    return txt;
}

module.exports = { initGame, play, loadGame, renderBoard, renderHand, deleteGame };
