<template lang="pug">
  div.control__section
    .control__inputs
      .control-field
        .field
          h2.title.is-4 {{ copy.addRemoveElements }}
        .field
          button(
            class="button is-success input-button"
            @click="addBoxes"
            aria-label="Add element"
          )
            span.icon.is-small
              i.fa.fa-plus(aria-hidden="true")
          button(
            class="button is-danger input-button"
            @click="removeBoxes"
            aria-label="Remove element"
          )
            span.icon.is-small
              i.fa.fa-minus(aria-hidden="true")
      // Grid Template Columns Field
      .control-field
        add-select-drop(
          v-bind:text="copy.controls.gridTemplateColumns"
          type="gridTemplateColumns"
          v-bind:modelData="gridColumnTemplateData"
          v-bind:modelString="gridColumns"
          v-bind:featuredText="copy.column"
        )
      // Grid Template Rows Field
      .control-field
        add-select-drop(
          v-bind:text="copy.controls.gridTemplateRows"
          type="gridTemplateRows"
          v-bind:modelData="gridRowTemplateData"
          v-bind:modelString="gridRows"
          v-bind:featuredText="copy.row"
        )
      .control-field
        selectDrop(
          v-bind:text="copy.controls.gridGapColumn"
          v-bind:string="gridColumnGapString"
          v-bind:modelData="gridColumnGap"
        )
      .control-field
        selectDrop(
          v-bind:text="copy.controls.gridGapRow"
          v-bind:string="gridRowGapString"
          v-bind:modelData="gridRowGap"
        )
      .control-field
        align-justify(
          v-bind:title="copy.controls.justifyItems.title"
          v-bind:text="copy.controls.justifyItems.description"
          property="justifyItems"
        )
      .control-field
        align-justify(
          v-bind:title="copy.controls.alignItems.title"
          v-bind:text="copy.controls.alignItems.description"
          property="alignItems"
        )
      //- // Justify Content Field
      //- .control-field
      //-   align-justify(
      //-     v-bind:title="copy.controls.justifyContent.title"
      //-     v-bind:text="copy.controls.justifyContent.description"
      //-     v-bind:show-content="true"
      //-     property="justifyContent"
      //-   )
      //- .control-field
      //-   align-justify(
      //-     v-bind:title="copy.controls.alignContent.title"
      //-     v-bind:text="copy.controls.alignContent.description"
      //-     v-bind:show-content="true"
      //-     property="alignContent"
      //-   )
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
    gridColumnTemplateData() {
      return this.$store.state.styles.gridTemplateColumns
    },
    gridRowTemplateData() {
      return this.$store.state.styles.gridTemplateRows
    },
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
header.header {
  border-bottom: 1px solid #dbdbdb;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);

  & .hero {
    padding: 2rem;
  }
}


.control__section {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.control__inputs {
  overflow-y: auto;
}

.control-field {
  border-top: 1px solid #dbdbdb;
  padding: 2.5rem !important;

  &:first-child {
    border-top: 0;
  }
}

.input-button:first-child {
  margin-right: 5px;
}

.control-field {
  padding: 2rem 1rem;

}

@media (max-width: 767px) {
  .control__section {
    height: auto;
  }
}
</style>
