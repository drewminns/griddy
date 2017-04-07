<template lang="pug">
  div
    .field
      h2.title.is-4 {{ text.title }}
      p(v-html="text.description")
    .field.has-addons(v-for="(item, index) in modelData")
      p.control__text {{ typeText }} {{ index + 1 }}
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
            option(val="%") %
            option(val="auto") auto
      p.control
        button(
          @click="removeGridArrayValues({ type, index })"
          class="button hint--top is-danger"
          aria-label="Delete property"
        )
          span.icon.is-small
            i.fa.fa-times(aria-hidden="true")
    p.control
      button(
        v-bind:class="{ button: true, 'is-info': modelData.length > 0, 'is-success' : modelData.length === 0 }"
        @click="addGridArrayValues(valueToSend)"
      )
        span.icon.is-small
          i.fa.fa-plus
        span(v-if="modelData.length > 0") {{ copy.addIt }} {{ featuredText }}
        span(v-else) {{ copy.addA }} {{ featuredText }}
    .field.field__detail(v-if="modelData.length > 0")
      p {{ copy.currentValue }}:
      p
        code {{ text.selector }}: {{ modelString }}
    .field.field__detail(v-else)
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
    modelData: Array,
    featuredText: String
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
    typeText: function() {
      return this.featuredText[0].toUpperCase() + this.featuredText.substring(1);
    },
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

  .field.has-addons {
    align-items: center;
  }

  label.hidden {
    font-size: 0;
    position: absolute;
  }

  .control__text {
    margin-right: 1rem;
    min-width: 75px;
  }

  .field__detail {
    margin-top: 1rem;
  }

</style>
