export default {
  getDeck: state => {
    return state.deck
  },
  getCurrentFour: state => {
    return state.currentFour
  },
  getStacksLength: state => {
    return state.stack1.length + state.stack2.length + state.stack3.length + state.stack4.length
  }
}