<template lang="pug">
  div.control__section
    .control-field
      .field
        label.label {{ copy.addRemoveElements }}
      .field
        button(
          class="button is-success input-button"
          @click="addBoxes"
        )
          i.fa.fa-plus(aria-hidden="true")
        button(
          class="button is-danger input-button"
          @click="removeBoxes"
        )
          i.fa.fa-minus(aria-hidden="true")
    // Grid Template Columns Field
    .control-field
      add-select-drop(
        v-bind:text="copy.controls.gridTemplateColumns"
        type="gridTemplateColumns"
        v-bind:modelData="gridColumns"
      )
    // Grid Template Rows Field
    .control-field
      add-select-drop(
        v-bind:text="copy.controls.gridTemplateRows"
        type="gridTemplateRows"
        v-bind:modelData="gridRows"
      )
    .control-field
      .columns
        .column
          selectDrop(
            v-bind:title="copy.controls.gridGapColumn.title"
            v-bind:string="gridColumnGapString"
            v-bind:modelData="gridColumnGap"
          )
        .column
          selectDrop(
            v-bind:title="copy.controls.gridGapRow.title"
            v-bind:string="gridRowGapString"
            v-bind:modelData="gridRowGap"
          )
    // Justify Items Field
    .control-field
      align-justify(
        v-bind:title="copy.controls.justifyItems.title"
        property="justifyItems"
      )
    // Align Items Field
    .control-field
      align-justify(
        v-bind:title="copy.controls.alignItems.title"
        property="alignItems"
      )
    // Justify Content Field
    .control-field
      align-justify(
        v-bind:title="copy.controls.justifyContent.title"
        v-bind:show-content="true"
        property="justifyContent"
      )
    // Align Content Field
    .control-field
      align-justify(
        v-bind:title="copy.controls.alignContent.title"
        v-bind:show-content="true"
        property="alignContent"
      )
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import copy from '../../lib/copy';

import AddSelectDrop from './AddSelectDrop.vue';
import SelectDrop from './SelectDrop.vue';
import AlignJustify from './AlignJustify.vue';

export default {
  data() {
    return {
      copy: copy
    }
  },
  components: {
    addSelectDrop: AddSelectDrop,
    selectDrop: SelectDrop,
    alignJustify: AlignJustify,
  },
  computed: {
    ...mapGetters([
      'gridColumns',
      'gridRows',
      'gridColumnGapString',
      'gridRowGapString',
    ]),
    gridColumnGap() {
      return {
        property: 'gridColumnGap',
        amount: this.$store.state.styles.gridColumnGap.amount,
        unit: this.$store.state.styles.gridColumnGap.unit
      }
    },
    gridRowGap() {
      return {
        property: 'gridRowGap',
        amount: this.$store.state.styles.gridRowGap.amount,
        unit: this.$store.state.styles.gridRowGap.unit
      }
    },
  },
  methods: {
    ...mapActions([
      'addBoxes',
      'removeBoxes'
    ])
  }
}
</script>

<style lang="scss" scoped>
.control__section {
  padding: 25px;
}

.input-button:first-child {
  margin-right: 5px;
}

.control-field {
  border-top: 1px solid lightgrey;
  margin-top: .75rem;
  padding: .75rem;
}
</style>
