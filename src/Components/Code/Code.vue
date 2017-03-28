
<template lang="pug">
  div.content
    pre
      |  .container {
      |   display: {{ this.$store.state.display }};
      |   grid-template-column: {{ this.gridColumns }};
      |   grid-template-row: {{ this.gridRows }};
      |   grid-row-gap: {{ this.$store.state.gridRowGap }};
      |   justify-items: {{ this.$store.state.justifyItems }};
      |   align-items: {{ this.$store.state.alignItems }};
      |   justify-content: {{ this.$store.state.justifyContent }};
      |   align-content: {{ this.$store.state.alignContent }};
      |  }
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'gridColumns',
      'gridRows'
    ]),
    styles() {
      return {
        display: this.$store.state.display,
        gridTemplateRows: this.gridRows,
        gridTemplateColumns: this.gridColumns,
        gridColumnGap: this.$store.state.gridColumnGap,
        gridRowGap: this.$store.state.gridRowGap,
        justifyItems: this.$store.state.justifyItems,
        alignItems: this.$store.state.alignItems,
        justifyContent: this.$store.state.justifyContent,
        alignContent: this.$store.state.alignContent,
      }
    }
  }
}
</script>

<style lang="scss">
</style>
