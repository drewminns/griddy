
<template lang="pug">
  div.content
    pre.code__display
      code.code__lang
        |  .container {
        |     display: grid;
        |     {{ styleString.trim() }}
        |  }
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'styleString'
    ]),
  }
}
</script>

<style lang="scss">
  .code {
    overflow-y: hidden;

    &__display {
      height: 100%;
      counter-reset: line;
      padding: 10px;
      overflow-y: auto;
    }

    &__lang {
      padding: 10px 0;
      font-size: 1rem;
    }
  }


</style>
