export default {
  getCards: state => {
    return state.deck
  },
  getCurrentFour: state => {
    return state.currentFour
  }
}