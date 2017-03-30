<template lang="pug">
  div
    .field
      label.label {{ title }}
    .field.has-addons
      p.control
        input(
          class="input"
          placeholder="1"
          type="number"
          min="1"
          v-model.number="gridTemplateVal.amount"
        )
      p.control
        span.select
          select(v-model="gridTemplateVal.unit")
            option(val="fr") fr
            option(val="px") px
      p.control
        button(
          class="button is-primary"
          @click="addGridArrayValues({ property: type, amount: gridTemplateVal.amount, unit: gridTemplateVal.unit })"
        ) Add it
    .field(v-if="modelData.length > 0")
      p Current value
        code grid-template-columns: {{ modelData }}
      button(
        @click="removeGridArrayValues(type)"
        class="button is-danger is-small"
      )
        span.icon.is-small
          i.fa.fa-times(aria-hidden="true")
    .field(v-else)
      p.is-small Add a value above to apply to the grid
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    title: String,
    type: String,
    modelData: String
  },
  data() {
    return {
      gridTemplateVal: {
        amount: '1',
        unit: 'fr'
      }
    }
  },
  computed: {
    ...mapGetters([
      'gridColumns',
    ])
  },
  methods: {
    ...mapActions([
      'addGridArrayValues',
      'removeGridArrayValues',
    ])
  }
}
</script>

<style lang="scss">
</style>
