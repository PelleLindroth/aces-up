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
        class="card-slot one"
        v-model="stack1"
        group="cards"
        :move="allowDrop"
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
      },
    },
    stack2: {
      get() {
        return this.$store.state.stack2
      },
      set(value) {
        this.$store.commit('UPDATE_STACK_2', value)
        this.$store.commit('SET_CURRENT_FOUR')
      },
    },
    stack3: {
      get() {
        return this.$store.state.stack3
      },
      set(value) {
        this.$store.commit('UPDATE_STACK_3', value)
        this.$store.commit('SET_CURRENT_FOUR')
      },
    },
    stack4: {
      get() {
        return this.$store.state.stack4
      },
      set(value) {
        this.$store.commit('UPDATE_STACK_4', value)
        this.$store.commit('SET_CURRENT_FOUR')
      },
    },
  },
  methods: {
    discard(card, slot) {
      if (card.deletable) {
        this.$store.dispatch('deleteCard', { card, slot })
        this.$store.commit('SET_CURRENT_FOUR')
      }
    },
    resetMarginTop(e) {
      e.item.style.marginTop = 0
    },
    allowDrop(e) {
      return e.to.classList[1] == 'empty'
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
  display: flex;
  justify-content: space-between;

  .slot-wrapper {
    height: 100%;
    width: 100%;

    .card-slot {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 95%;
      height: 100%;
    }
  }
}
</style>
