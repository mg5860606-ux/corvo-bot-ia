const fs = require('fs');
const path = require('path');
const { getName } = require('../funcoes/exports.js');

const DB_PATH = './DADOS DO CORVO/games/aposta_corrida/';
if (!fs.existsSync(DB_PATH)) fs.mkdirSync(DB_PATH, { recursive: true });

const EMOJIS = ['🚀', '🏎️', '👾', '🛸', '🏍️', '🏃', '🐎', '🚲'];
const TRACK_LENGTH = 20;

function createRace(groupId) {
    const competitors = [];
    const numCompetitors = 4;
    const shuffledEmojis = [...EMOJIS].sort(() => 0.5 - Math.random());
    
    for (let i = 0; i < numCompetitors; i++) {
        competitors.push({
            id: i + 1,
            emoji: shuffledEmojis[i],
            pos: 0,
            name: `Competidor ${i + 1}`
        });
    }

    const race = {
        groupId,
        competitors,
        status: 'betting', // betting, racing, finished
        bets: [],
        createdAt: Date.now(),
        messageKey: null
    };
    
    return race;
}

function renderTrack(race) {
    let txt = `🏁 *CORRIDA DE APOSTAS* 🏁\n\n`;
    
    race.competitors.forEach(c => {
        let track = '-'.repeat(TRACK_LENGTH);
        let visualTrack = track.substring(0, c.pos) + c.emoji + track.substring(c.pos + 1);
        txt += `|🏁 ${visualTrack} |\n`;
    });
    
    if (race.status === 'betting') {
        txt += `\n💰 *APOSTAS ABERTAS!*\nUse: \`apostar <número> <quantia>\`\nTempo restante: {tempo}s`;
    } else if (race.status === 'racing') {
        txt += `\n🚀 *EM ANDAMENTO!* 🚀\nTorçam por seus competidores!`;
    }
    
    return txt;
}

function advanceRace(race) {
    let winner = null;
    race.competitors.forEach(c => {
        if (race.status !== 'finished') {
            const move = Math.floor(Math.random() * 3); // 0, 1, 2
            c.pos += move;
            if (c.pos >= TRACK_LENGTH - 1) {
                c.pos = TRACK_LENGTH - 1;
                if (!winner) winner = c;
            }
        }
    });
    
    if (winner) {
        race.status = 'finished';
        race.winner = winner;
    }
    return winner;
}

module.exports = { createRace, renderTrack, advanceRace };
