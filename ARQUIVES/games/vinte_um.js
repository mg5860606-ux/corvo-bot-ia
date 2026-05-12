const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../DADOS DO CORVO/games/vinte_um.json');

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

const SUITS = ['♠️', '♥️', '♦️', '♣️'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
    let deck = [];
    for (let suit of SUITS) {
        for (let value of VALUES) {
            deck.push({ suit, value });
        }
    }
    return deck.sort(() => Math.random() - 0.5);
}

function calculateScore(hand) {
    let score = 0;
    let aces = 0;
    
    for (let card of hand) {
        if (['J', 'Q', 'K'].includes(card.value)) {
            score += 10;
        } else if (card.value === 'A') {
            aces += 1;
            score += 11;
        } else {
            score += parseInt(card.value);
        }
    }
    
    while (score > 21 && aces > 0) {
        score -= 10;
        aces -= 1;
    }
    
    return score;
}

module.exports = {
    initGame: (sender) => {
        const games = loadGames();
        
        let deck = createDeck();
        let playerHand = [deck.pop(), deck.pop()];
        let dealerHand = [deck.pop(), deck.pop()];
        
        games[sender] = {
            deck: deck,
            playerHand: playerHand,
            dealerHand: dealerHand,
            status: 'playing',
            startedAt: Date.now()
        };
        
        saveGames(games);
        return games[sender];
    },
    
    hit: (sender) => {
        const games = loadGames();
        const game = games[sender];
        
        if (!game || game.status !== 'playing') {
            return { error: 'Você não tem um jogo de 21 em andamento. Use !vinte_um' };
        }
        
        game.playerHand.push(game.deck.pop());
        const score = calculateScore(game.playerHand);
        
        if (score > 21) {
            game.status = 'finished';
            delete games[sender];
            saveGames(games);
            return { bust: true, game };
        }
        
        saveGames(games);
        return { bust: false, game };
    },
    
    stand: (sender) => {
        const games = loadGames();
        const game = games[sender];
        
        if (!game || game.status !== 'playing') {
            return { error: 'Você não tem um jogo de 21 em andamento.' };
        }
        
        let dealerScore = calculateScore(game.dealerHand);
        while (dealerScore < 17) {
            game.dealerHand.push(game.deck.pop());
            dealerScore = calculateScore(game.dealerHand);
        }
        
        const playerScore = calculateScore(game.playerHand);
        game.status = 'finished';
        
        let result = '';
        if (dealerScore > 21) result = 'player_win';
        else if (dealerScore > playerScore) result = 'dealer_win';
        else if (playerScore > dealerScore) result = 'player_win';
        else result = 'draw';
        
        delete games[sender];
        saveGames(games);
        return { result, game };
    },
    
    calculateScore,
    
    renderHand: (hand, hidden = false) => {
        if (hidden) {
            return `${hand[0].value}${hand[0].suit} | 🎴`;
        }
        return hand.map(c => `${c.value}${c.suit}`).join(' | ');
    }
};
