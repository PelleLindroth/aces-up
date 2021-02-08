<template>
  <div id="app">
    <SlotView />
    <Talon :cards="cards" />
  </div>
</template>

<script>
import SlotView from './components/SlotView'
import Talon from './components/Talon'

export default {
  name: 'App',
  components: {
    SlotView,
    Talon,
  },
  computed: {
    cards() {
      return this.$store.getters.getCards
    },
  },
}
</script>

<style lang="scss">
:root {
  font-size: 62.5%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #333;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: auto repeat(8, 6rem) auto;
  grid-template-rows: 3rem 20rem 22rem 20rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  @media screen and (max-width: 650px) {
    gap: 2rem;
    grid-template-columns: auto repeat(8, 2.2rem) auto;
    grid-template-rows: 1rem 10rem 90% 10rem;
  }
}
</style>
