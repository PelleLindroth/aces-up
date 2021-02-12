export default {
  checkGameOver: ({ dispatch, getters }) => {
    let game = true
    let currentFour = getters.getCurrentFour
    let deck = getters.getDeck

    if (deck.length) {
      game = false
      currentFour.forEach(card => {
        if (card && card.value != 14) {
          game = true
        } else if (!card) {
          game = true
        }
      })
    } else {
      let suits = []
      currentFour.forEach(card => {
        if (card) {
          suits.push(card.suit)
        }
      })
      suits = [...new Set([...suits])]
      if (suits.length > 3) {
        game = false
      }
    }

    if (!game) {
      dispatch('endGame')
    }
  },
  checkWin: ({ getters }) => {
    const currentFour = getters.getCurrentFour
    let win = true

    currentFour.forEach(card => {
      if (card && card.value != 14) {
        win = false
      }
    })

    if (getters.getStacksLength > 4 || getters.getDeck.length) {
      win = false
    }

    return win
  },
  endGame: async ({ commit, dispatch }) => {
    const win = await dispatch('checkWin')

    if (win) {
      commit('SET_WIN', true)
    }
    commit('SET_FIRST_GAME_FALSE')
    commit('SET_GAME', false)
  },
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
  startGame: ({ dispatch, commit }) => {
    commit('RESET_STACKS')
    commit('CREATE_NEW_DECK')
    dispatch('shuffleDeck')
    commit('SET_WIN', false)
    commit('SET_GAME', true)
  },
  shuffleDeck: ({ commit }) => {
    commit('SHUFFLE_DECK')
  },
}