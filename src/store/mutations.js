import * as Deck from '../deck'

export default {
  DEAL: (state) => {
    state.stack1.push(state.deck.pop())
    state.stack2.push(state.deck.pop())
    state.stack3.push(state.deck.pop())
    state.stack4.push(state.deck.pop())
  },
  DELETE_CARD: (state, deletable) => {
    state.deck = state.deck.filter(card => card.id !== deletable.id)
  },
  SET_CURRENT_FOUR: (state) => {
    state.currentFour = []
    state.currentFour.push(state.stack1[state.stack1.length - 1])
    state.currentFour.push(state.stack2[state.stack2.length - 1])
    state.currentFour.push(state.stack3[state.stack3.length - 1])
    state.currentFour.push(state.stack4[state.stack4.length - 1])
  },
  SET_DELETABLE: (state) => {
    state.currentFour.forEach(card => {
      if (card) {
        for (let i = 0; i < 4; i++) {
          if (state.currentFour[i] && card.suit == state.currentFour[i].suit && card.value < state.currentFour[i].value) {
            card.deletable = true
          }
        }
      }
    })
  },
  SHUFFLE_DECK: (state) => {
    state.deck = Deck.shuffleDeck(state.deck)
  },
  UPDATE_STACK_1: (state, value) => {
    state.stack1 = value
  },
  UPDATE_STACK_2: (state, value) => {
    state.stack2 = value
  },
  UPDATE_STACK_3: (state, value) => {
    state.stack3 = value
  },
  UPDATE_STACK_4: (state, value) => {
    state.stack4 = value
  }
}