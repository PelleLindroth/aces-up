import Vue from 'vue'
import Vuex from 'vuex'
import * as Deck from '../deck'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
let deck = Deck.createDeck()

export default new Vuex.Store({
  state: {
    currentFour: [],
    deck: deck,
    stack1: [],
    stack2: [],
    stack3: [],
    stack4: []
  },
  mutations,
  actions,
  getters
})
