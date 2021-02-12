<template>
  <div class="slot-view">
    <div class="slot-wrapper">
      <draggable
        :disabled="disableDraggable"
        v-model="stack1"
        v-if="!stack1.length"
        class="card-slot empty"
      ></draggable>
      <draggable
        v-else
        :disabled="disableDraggable"
        :move="allowDrop"
        class="card-slot one"
        v-model="stack1"
        group="cards"
        @start="resetMarginTop"
      >
        <Card
          v-for="(card, index) in stack1"
          :key="card.name"
          :style="{ marginTop: `${index * 2}rem` }"
          :card="card"
          @click.native="discard(card, 1)"
        />
      </draggable>
    </div>
    <div class="slot-wrapper">
      <draggable
        :disabled="disableDraggable"
        v-model="stack2"
        v-if="!stack2.length"
        class="card-slot empty"
      ></draggable>
      <draggable
        v-else
        :disabled="disableDraggable"
        class="card-slot two"
        v-model="stack2"
        group="cards"
        :move="allowDrop"
        @start="resetMarginTop"
      >
        <Card
          v-for="(card, index) in stack2"
          :key="card.name"
          :style="{ marginTop: `${index * 2}rem` }"
          :card="card"
          @click.native="discard(card, 2)"
        />
      </draggable>
    </div>

    <div class="slot-wrapper">
      <draggable
        :disabled="disableDraggable"
        v-model="stack3"
        v-if="!stack3.length"
        class="card-slot empty"
      ></draggable>
      <draggable
        v-else
        :disabled="disableDraggable"
        class="card-slot three"
        v-model="stack3"
        group="cards"
        :move="allowDrop"
        @start="resetMarginTop"
      >
        <Card
          v-for="(card, index) in stack3"
          :key="card.name"
          :style="{ marginTop: `${index * 2}rem` }"
          :card="card"
          @click.native="discard(card, 3)"
        />
      </draggable>
    </div>

    <div class="slot-wrapper">
      <draggable
        :disabled="disableDraggable"
        v-model="stack4"
        v-if="!stack4.length"
        class="card-slot empty"
      ></draggable>
      <draggable
        v-else
        :disabled="disableDraggable"
        class="card-slot four"
        v-model="stack4"
        group="cards"
        :move="allowDrop"
        @start="resetMarginTop"
      >
        <Card
          v-for="(card, index) in stack4"
          :key="card.name"
          :style="{ marginTop: `${index * 2}rem` }"
          :card="card"
          @click.native="discard(card, 4)"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Card from '../components/Card'
export default {
  order: 1,
  components: {
    Card,
    draggable,
  },
  computed: {
    disableDraggable() {
      return !this.$store.getters.getCurrentFour.includes(undefined)
    },
    stack1: {
      get() {
        return this.$store.state.stack1
      },
      set(value) {
        this.$store.commit('UPDATE_STACK_1', value)
        this.$store.commit('SET_CURRENT_FOUR')
        this.$store.dispatch('checkGameOver')
      },
    },
    stack2: {
      get() {
        return this.$store.state.stack2
      },
      set(value) {
        this.$store.commit('UPDATE_STACK_2', value)
        this.$store.commit('SET_CURRENT_FOUR')
        this.$store.dispatch('checkGameOver')
      },
    },
    stack3: {
      get() {
        return this.$store.state.stack3
      },
      set(value) {
        this.$store.commit('UPDATE_STACK_3', value)
        this.$store.commit('SET_CURRENT_FOUR')
        this.$store.dispatch('checkGameOver')
      },
    },
    stack4: {
      get() {
        return this.$store.state.stack4
      },
      set(value) {
        this.$store.commit('UPDATE_STACK_4', value)
        this.$store.commit('SET_CURRENT_FOUR')
        this.$store.dispatch('checkGameOver')
      },
    },
  },
  methods: {
    allowDrop(e) {
      let stackLength = 0

      switch (e.from.classList[1]) {
        case 'one':
          stackLength = this.stack1.length
          break
        case 'two':
          stackLength = this.stack2.length
          break
        case 'three':
          stackLength = this.stack3.length
          break
        case 'four':
          stackLength = this.stack4.length
          break
      }
      if (
        e.to.classList[1] == 'empty' &&
        !(e.draggedContext.index < stackLength - 1 && e.to != e.from)
      ) {
        e.dragged.style.opacity = 0
      } else {
        e.dragged.style.opacity = 1
      }

      return (
        e.to.classList[1] == 'empty' &&
        !(e.draggedContext.index < stackLength - 1)
      )
    },
    checkWin() {
      console.log('check win')
    },
    discard(card, slot) {
      if (card.deletable) {
        this.$store.dispatch('deleteCard', { card, slot })
        this.$store.commit('SET_CURRENT_FOUR')
        this.$store.dispatch('checkGameOver')
      }
    },
    resetMarginTop(e) {
      if (e.to != e.from) {
        e.item.style.marginTop = 0
      }
    },
  },
  updated() {
    this.$store.commit('SET_DELETABLE')
  },
}
</script>

<style lang="scss" scoped>
.slot-view {
  grid-column: 2 / span 8;
  grid-row: 2;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 650px) {
    gap: 0.2rem;
  }

  .slot-wrapper {
    height: 100%;
    width: 100%;

    .card-slot {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
