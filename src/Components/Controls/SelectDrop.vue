<template lang="pug">
  div
    .field
      label.label {{ title }}
    .field.has-addons
      p.control
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
    //- .field(v-if="string.length > 0")
    //-   p Current value
    //-     code grid-column-gap: {{ string }}
    //- .field(v-else)
    //-   p.is-small Add a value above to apply to the grid
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { valuesToString } from '../../lib/utils';

export default {
  props: {
    title: String,
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
