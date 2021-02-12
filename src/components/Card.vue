<template>
  <article
    :style="{ transform: `rotate(${(Math.random() - 0.5) * 2}deg` }"
    v-if="!flipped"
    class="card"
  >
    <div class="upper-left">
      <img :src="getImage" alt="Heart" />
      <p>{{ cardValue }}</p>
    </div>
    <div class="center">
      <img :src="getImage" alt="Heart" />
    </div>
    <div class="lower-right">
      <img :src="getImage" alt="Heart" />
      <p>{{ cardValue }}</p>
    </div>
  </article>

  <article
    v-else
    class="card flipped"
    :style="{ transform: `rotate(${(Math.random() - 0.5) * 2}deg` }"
  >
    <img src="@/assets/logo.svg" alt="Aces Up Logo" />
  </article>
</template>

<script>
export default {
  computed: {
    cardValue() {
      switch (this.card.value) {
        case 11:
          return 'J'
        case 12:
          return 'Q'
        case 13:
          return 'K'
        case 14:
          return 'A'
        default:
          return this.card.value
      }
    },
    getImage() {
      return require(`@/assets/${this.card.suit}.svg`)
    },
  },
  props: {
    card: Object,
    flipped: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #e4e1db;
  border: 0.5rem solid #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 1px rgba(120, 120, 120, 0.5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  height: 100%;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  position: absolute;
  -webkit-tap-highlight-color: transparent;
  width: 100%;

  @media screen and (max-width: 650px) {
    border: 0.3rem solid #fff;
    font-size: 0.8rem;
    padding: 0.5rem;
    width: 95%;
  }

  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  &.flipped {
    background-color: #343478;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 6rem;
      margin-bottom: 2rem;

      @media screen and (max-width: 650px) {
        width: 4rem;
      }
    }
  }

  .upper-left,
  .lower-right {
    img {
      width: 1.5rem;

      @media screen and (max-width: 650px) {
        width: 1.1rem;
      }
    }
  }
  .upper-left {
    align-self: flex-start;
  }

  .lower-right {
    align-self: flex-end;
    transform: rotate(180deg);
  }

  .center {
    img {
      width: 2.5rem;

      @media screen and (max-width: 650px) {
        width: 1.7rem;
      }
    }
  }
}
</style>
