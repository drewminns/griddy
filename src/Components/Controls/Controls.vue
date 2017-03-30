<!-- This is really ugly. It needs to be refactored into separate components -->
<template lang="pug">
  div.control__section
    .control-field
      .field
        label.label Add/Remove elements within the grid
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
        title="Grid Template Columns"
        type="gridTemplateColumns"
        v-bind:modelData="gridColumns"
      )
    // Grid Template Rows Field
    .control-field
      add-select-drop(
        title="Grid Template Rows"
        type="gridTemplateRows"
        v-bind:modelData="gridRows"
      )
    // Grid Column Gap Field
    .control-field
      selectDrop(
        title="Grid Column Gap"
        v-bind:string="gridColumnGapString"
        v-bind:modelData="gridColumnGap"
      )
    // Grid Row Gap Field
    .control-field
      selectDrop(
        title="Grid Row Gap"
        v-bind:string="gridRowGapString"
        v-bind:modelData="gridRowGap"
      )
    // Justify Items Field
    .control-field
      align-justify(
        title="Justify Items"
        property="justifyItems"
      )
    // Align Items Field
    .control-field
      align-justify(
        title="Align Items"
        property="alignItems"
      )
    // Justify Content Field
    .control-field
      align-justify(
        title="Justify Content"
        v-bind:show-content="true"
        property="justifyContent"
      )
    // Align Content Field
    .control-field
      align-justify(
        title="Align Content"
        v-bind:show-content="true"
        property="alignContent"
      )
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AddSelectDrop from './AddSelect.vue';
import SelectDrop from './SelectDrop.vue';
import AlignJustify from './AlignJustify.vue';

export default {
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
