<template>
  <div id="app">
    <transition name="modal">
      <Overlay v-show="!gameOn" />
    </transition>
    <SlotView />
    <Talon :cards="cards" />
  </div>
</template>

<script>
import Overlay from './components/Overlay'
import SlotView from './components/SlotView'
import Talon from './components/Talon'

export default {
  name: 'App',
  components: {
    Overlay,
    SlotView,
    Talon,
  },
  computed: {
    cards() {
      return this.$store.getters.getDeck
    },
    gameOn() {
      return this.$store.state.game
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Roboto:wght@300;400;700&display=swap');

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
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}

#app {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: auto repeat(8, 6rem) auto;
  grid-template-rows: 3rem 20rem 22rem 20rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .modal-enter,
  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.3s;
  }

  .modal-enter-to,
  .modal-leave {
    opacity: 1;
  }

  @media screen and (max-width: 650px) {
    gap: 1rem;
    grid-template-columns: auto repeat(8, 9.4%) auto;
    grid-template-rows: 1rem 12.5rem 80% 12.5rem;
  }
}
</style>
