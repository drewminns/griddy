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
    .control-field
      .field
        label.label Grid Template Columns
      .field.has-addons
        p.control
          input(
            class="input"
            placeholder="1"
            type="number"
            min="1"
            v-model.number="gridTemplateColumnsVal.amount"
          )
        p.control
          span.select
            select(v-model="gridTemplateColumnsVal.unit")
              option(val="fr") fr
              option(val="px") px
        p.control
          button(
            class="button is-primary"
            @click="addGridArrayValues(gridTemplateColumns)"
          ) Add it
      .field(v-if="gridColumns.length > 0")
        p Current value
          code grid-template-columns: {{ gridColumns }}
        button(@click="removeGridArrayValues('gridTemplateColumns')") Remove last value
      .field(v-else)
        p.is-small Add a value above to apply to the grid
    .control-field
      .field
        label.label Grid Template Rows
      .field.has-addons
        p.control
          input(
            class="input"
            placeholder="1"
            type="number"
            min="1"
            v-model.number="gridTemplateRowsVal.amount"
          )
        p.control
          span.select
            select(v-model="gridTemplateRowsVal.unit")
              option(val="fr") fr
              option(val="px") px
        p.control
          button(
            class="button is-primary"
            @click="addGridArrayValues(gridTemplateRows)"
          ) Add it
      .field(v-if="gridRows.length > 0")
        p Current value
          code grid-row-columns: {{ gridRows }}
        button(@click="removeGridArrayValues('gridTemplateRows')") Remove last value
      .field(v-else)
        p.is-small Add a value above to apply to the grid
    .control-field
      .field
        label.label Grid Column Gap
      .field.has-addons
        p.control
          input(
            class="input"
            placeholder="10"
            type="number"
            min="1"
            v-model.number="gridColumnGap.amount"
            @change="modifyPixelUnitVal({ property: 'gridColumnGap', value: gridColumnGap.amount })"
          )
        p.control
          span.select
            select(
              v-model="gridColumnGap.unit"
              @change="modifyWordUnitVal({ property: 'gridColumnGap', unit: gridColumnGap.unit })"
            )
              option(val="px") px
              option(val="%") %
      .field(v-if="gridRows.length > 0")
        p Current value
          code grid-column-gap: {{ gridRows }}
      .field(v-else)
        p.is-small Add a value above to apply to the grid
    .control-field
      .field
        label.label Grid Row Gap
      .field.has-addons
        p.control
          input(
            class="input"
            placeholder="10"
            type="number"
            min="1"
            v-model.number="gridRowGap.amount"
            @change="modifyPixelUnitVal({ property: 'gridRowGap', value: gridRowGap.amount })"
          )
        p.control
          span.select
            select(
              v-model="gridRowGap.unit"
              @change="modifyWordUnitVal({ property: 'gridRowGap', unit: gridRowGap.unit })"
            )
              option(val="px") px
              option(val="%") %
      .field(v-if="gridRows.length > 0")
        p Current value
          code grid-column-gap: {{ gridRows }}
      .field(v-else)
        p.is-small Add a value above to apply to the grid
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      gridTemplateColumnsVal: {
        amount: '1',
        unit: 'fr'
      },
      gridTemplateRowsVal: {
        amount: '1',
        unit: 'fr'
      },
    }
  },
  computed: {
    ...mapGetters([
      'gridColumns',
      'gridRows'
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
    gridTemplateColumns: function () {
      return {
        property: 'gridTemplateColumns',
        amount: this.gridTemplateColumnsVal.amount,
        unit: this.gridTemplateColumnsVal.unit
      }
    },
    gridTemplateRows: function () {
      return {
        property: 'gridTemplateRows',
        amount: this.gridTemplateRowsVal.amount,
        unit: this.gridTemplateRowsVal.unit
      }
    }
  },
  methods: {
    ...mapActions([
      'addBoxes',
      'removeBoxes',
      'addGridArrayValues',
      'removeGridArrayValues',
      'modifyPixelUnitVal',
      'modifyWordUnitVal'
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
