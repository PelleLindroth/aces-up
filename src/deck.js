export const createDeck = () => {
  let suits = ['hearts', 'diamonds', 'clubs', 'spades']
  let deck = []

  suits.forEach(suit => {
    for (let i = 2; i <= 14; i++) {
      deck.push({ suit, value: i, id: `${suit}-${i}`, deletable: false })
    }
  })

  return deck
}

export const shuffleDeck = deck => {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck
}
