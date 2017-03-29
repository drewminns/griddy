<template lang="pug">
  div.preview
    .grid__parent(:style="styleObj")
      .grid__item(v-for="item in $store.state.boxes") {{ item }}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'styleObj'
    ]),
  }
}
</script>

<style lang="scss">
.grid {

  &__parent {
    width: 100%;
    display: grid;
  }

  &__item {
    background-color: #72d0eb;
    color: #fff;
    padding: 20px;
    font-size: 150%;
  }
}

</style>
