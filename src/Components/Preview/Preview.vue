<template lang="pug">
  div.preview
    .grid__parent(:style="styleObj")
      .grid__item(
        v-for="item in $store.state.boxes"
      )
        p {{ item }}
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
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    padding: 10px;
  }

  &__item {
    background: blue;
    color: #fff;
    padding: 20px;
    font-size: 11px;
    border-radius: 5px;
    // overflow: hidden;
  }
}

</style>
