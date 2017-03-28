<template lang="pug">
  div.preview
    .grid__parent(:style="styles")
      .grid__item(v-for="item in $store.state.boxes") {{ item }}
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
.grid {

  &__parent {
    width: 100%;
  }

  &__item {
    background-color: #72d0eb;
    color: #fff;
    padding: 20px;
    font-size: 150%;
  }
}

</style>
