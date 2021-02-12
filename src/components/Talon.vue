<template>
  <ul
    @click="deal"
    :style="cardsInDeck ? { cursor: 'pointer' } : { cursor: 'default' }"
    class="talon"
  >
    <Card flipped v-for="card in cards" :key="card.id" :card="card" />
  </ul>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
    Card,
  },
  computed: {
    cardsInDeck() {
      return this.$store.getters.getDeck.length > 0
    },
  },
  methods: {
    async deal() {
      if (this.cardsInDeck) {
        await this.$store.dispatch('deal')
        this.$store.commit('SET_CURRENT_FOUR')
        this.$store.dispatch('checkGameOver')
      }
    },
  },
  props: {
    cards: Array,
  },
}
</script>

<style lang="scss" scoped>
.talon {
  grid-column: 5 / span 2;
  grid-row: 4;
  position: relative;

  @media screen and (max-width: 650px) {
    margin-left: -0.5rem;
  }
}
</style>
