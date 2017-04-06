<template lang="pug">
  div
    .field
      h2.title.is-4 {{ text.title }}
      p {{ text.description }}
    .field.has-addons(v-for="(item, index) in modelData")
      p.control
        label.hidden(v-bind:for="index + type") {{ `${text.title} ${index} amount` }}
        input(
          v-bind:id="index + type"
          class="input"
          placeholder="1"
          type="number"
          min="1"
          v-model.number.lazy="item.amount"
          v-bind:aria-label="`${text.title} ${index} amount`"
          v-bind:disabled="item.unit === 'auto'"
          @change="modifyArrayValAction({ property: type, val: 'amount', unit: item.amount, index })"
        )
      p.control
        label.hidden(v-bind:for="index + type") {{ `${text.title} ${index} unit` }}
        span.select
          select(
            v-model="item.unit"
            @change="modifyArrayValAction({ property: type, val: 'unit', unit: item.unit, index })"
            v-bind:aria-label="`${text.title} ${index} unit`"
          )
            option(val="fr") fr
            option(val="px") px
            option(val="auto") auto
      p.control
        button(
          @click="removeGridArrayValues({ type, index })"
          class="button hint--right"
          aria-label="Delete property"
        )
          i.fa.fa-times(aria-hidden="true")
    p.control
      button(
        class="button is-info"
        @click="addGridArrayValues(valueToSend)"
      ) {{ copy.addIt }}
       i.fa.fa-icon
    .field(v-if="modelData.length > 0")
      p {{ copy.currentValue }}:
      p
        code {{ text.selector }}: {{ modelString }}
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
    modelString: String,
    modelData: Array
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
    valueToSend: function() {
      return {
        property: this.type,
        amount: this.gridTemplateVal.amount,
        unit: this.gridTemplateVal.unit
      }
    }
  },
  methods: {
    ...mapActions([
      'addGridArrayValues',
      'removeGridArrayValues',
      'modifyArrayValAction'
    ])
  }
}
</script>

<style lang="scss">
  label.hidden {
    font-size: 0;
    position: absolute;
  }

</style>
