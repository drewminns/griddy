<template lang="pug">
  div
    .field
      label.label {{ text.title }}
      p {{ text.description }}
    .field.has-addons
      p.control
        input(
          class="input"
          placeholder="1"
          type="number"
          min="1"
          v-bind:disabled="gridTemplateVal.unit === 'auto'"
          v-model.number="gridTemplateVal.amount"
        )
      p.control
        span.select
          select(v-model="gridTemplateVal.unit")
            option(val="fr") fr
            option(val="px") px
            option(val="auto") auto
      p.control
        button(
          class="button is-primary"
          @click="addGridArrayValues(valueToSend)"
        ) {{ copy.addIt }}
    .field(v-if="modelData.length > 0")
      p {{ copy.currentValue }}
        code {{ text.selector }}: {{ modelData }}
      button(
        @click="removeGridArrayValues(type)"
        class="button is-danger is-small"
      )
        span.icon.is-small
          i.fa.fa-times(aria-hidden="true")
    .field(v-else)
      p.is-small {{ copy.addAValue }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import copy from '../../lib/copy';
export default {
  props: {
    text: Object,
    type: String,
    modelData: String
  },
  data() {
    return {
      copy,
      gridTemplateVal: {
        amount: '1',
        unit: 'fr'
      }
    }
  },
  computed: {
    ...mapGetters([
      'gridColumns',
    ]),
    valueToSend: function() {
      return {
        property: this.type,
        amount: (this.gridTemplateVal.unit !== 'auto' ? this.gridTemplateVal.amount : this.gridTemplateVal.unit),
        unit: (this.gridTemplateVal.unit !== 'auto' ? this.gridTemplateVal.unit : '')
      }
    }
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
