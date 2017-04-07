<template lang="pug">
  div
    .field
      label.label {{ text.title }}
      p(v-html="text.description")
    .field.has-addons
      p.control.is-expanded
        input(
          class="input"
          placeholder="10"
          type="number"
          min="0"
          v-model.number.lazy="modelData.amount"
          @change="modifyPixelUnitVal({ property: modelData.property, value: modelData.amount })"
        )
      p.control
        span.select
          select(
            v-model="modelData.unit"
            @change="modifyWordUnitVal({ property: modelData.property, unit: modelData.unit })"
          )
            option(val="px") px
            option(val="%") %
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { valuesToString } from '../../lib/utils';

export default {
  props: {
    text: Object,
    string: String,
    modelData: Object,
  },
  methods: {
    ...mapActions([
      'modifyPixelUnitVal',
      'modifyWordUnitVal'
    ])
  }
}
</script>

<style lang="scss">
</style>
