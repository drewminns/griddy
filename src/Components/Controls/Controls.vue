<template lang="pug">
  div
    h1 Hello
    button(@click="addBoxes") Add another box
    button(@click="removeBoxes") Remove a box
    input(
      placeholder="1"
      type="number"
      v-model.number="gridTemplateColumnsVal.amount"
    )
    select(v-model="gridTemplateColumnsVal.unit")
      option(val="fr") fr
      option(val="px") px
    button(
      @click="addGridColumnValues({ amount: gridTemplateColumnsVal.amount, unit: gridTemplateColumnsVal.unit})"
    ) Update it
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      gridTemplateColumnsVal: {
        amount: '1',
        unit: 'fr'
      }
    }
  },
  methods: {
    ...mapActions([
      'addBoxes',
      'removeBoxes',
      'addGridColumnValues'
    ])
  }
}
</script>

<style lang="scss">
</style>
