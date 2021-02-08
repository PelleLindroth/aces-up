export default {
  deal: ({ commit }) => {
    commit('DEAL')
  },
  deleteCard: ({ state, commit }, payload) => {
    commit('DELETE_CARD', payload.card)
    switch (payload.slot) {
      case 1:
        commit('UPDATE_STACK_1', state.stack1.slice(0, -1))
        break
      case 2:
        commit('UPDATE_STACK_2', state.stack2.slice(0, -1))
        break
      case 3:
        commit('UPDATE_STACK_3', state.stack3.slice(0, -1))
        break
      case 4:
        commit('UPDATE_STACK_4', state.stack4.slice(0, -1))
        break
    }
  },
  shuffleDeck: ({ commit }) => {
    commit('SHUFFLE_DECK')
  },
}