<template lang="pug">
  div.preview
    .grid__parent(:style="styleObj")
      .grid__item(
        v-for="(item, index) in $store.state.boxes"
      )
        p {{ index + 1 }}
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
    // background-color: #f5f5f5;

  }

  &__item {
    background: #3273dc;
    color: #fff;
    padding: 20px;
    font-size: 21px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &__details {
      position: relative;
    }

    &__overlay {
      position: absolute;
      background: yellow;
      top: 0;
      left: -50%;
    }
  }
}

</style>
