<template>
  <ul @click="deal" class="talon">
    <Card flipped v-for="card in cards" :key="card.id" :card="card" />
  </ul>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
    Card,
  },
  created() {
    this.$store.dispatch('shuffleDeck')
  },
  methods: {
    deal() {
      this.$store.dispatch('deal')
      this.$store.commit('SET_CURRENT_FOUR')
    },
  },
  props: {
    cards: Array,
  },
}
</script>

<style lang="scss" scoped>
.talon {
  cursor: pointer;
  grid-column: 5 / span 2;
  grid-row: 4;
  position: relative;
}
</style>
