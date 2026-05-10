/*
  Simple "Carta" (High Card) multiplayer game module for Corvo Bot.
  Two players draw a random card; the higher rank wins.
  Cards are represented by emojis for visual appeal.
*/

const suits = ['♠️', '♥️', '♦️', '♣️'];
const ranks = [
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 },
  { name: '6', value: 6 },
  { name: '7', value: 7 },
  { name: '8', value: 8 },
  { name: '9', value: 9 },
  { name: '10', value: 10 },
  { name: 'J', value: 11 },
  { name: 'Q', value: 12 },
  { name: 'K', value: 13 },
  { name: 'A', value: 14 },
];

function drawCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const rank = ranks[Math.floor(Math.random() * ranks.length)];
  return { ...rank, suit, emoji: `${rank.name}${suit}` };
}

function renderGame(player1, player2) {
  const p1Card = drawCard();
  const p2Card = drawCard();
  const result =
    p1Card.value > p2Card.value
      ? `${player1} vence! 🎉`
      : p1Card.value < p2Card.value
      ? `${player2} vence! 🎉`
      : 'Empate! 🤝';
  return `
🂠 *Carta* 🂠

${player1} tirou: ${p1Card.emoji}
${player2} tirou: ${p2Card.emoji}

*Resultado:* ${result}
`;
}

module.exports = { drawCard, renderGame };
