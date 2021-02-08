<template>
  <div class="overlay">
    <h1>{{ headerText }}</h1>
    <div class="message-box">
      <h2
        :style="
          $store.state.firstGame
            ? { fontSize: '2.5rem' }
            : { fontSize: '2.2rem' }
        "
        @click="start"
      >
        {{ buttonText }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    buttonText() {
      if (this.$store.state.firstGame) {
        return 'PLAY'
      } else {
        return 'PLAY AGAIN'
      }
    },
    headerText() {
      if (this.$store.state.firstGame || this.$store.state.win) {
        return 'ACES UP!'
      } else {
        return 'GAME OVER'
      }
    },
    played() {
      return false
    },
    win() {
      return false
    },
  },
  methods: {
    start() {
      this.$store.dispatch('startGame')
    },
  },
}
</script>

<style lang="scss" scoped>
.overlay {
  background-color: rgba(50, 50, 50, 0.8);
  color: #ececec;
  cursor: default;
  font-family: 'Luckiest Guy', cursive;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;

  h1 {
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    font-size: 7rem;
    margin-top: 10rem;

    @media screen and (max-width: 650px) {
      font-size: 5rem;
    }
  }
  .message-box {
    margin-top: 5%;
    h2 {
      background-color: red;
      border-radius: 50%;
      cursor: pointer;
      width: 10rem;
      height: 10rem;
      display: grid;
      place-items: center;
      transition: all 0.2s ease-in-out;

      @media screen and (max-width: 650px) {
        width: 9rem;
        height: 9rem;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
