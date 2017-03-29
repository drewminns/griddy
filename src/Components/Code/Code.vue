
<template lang="pug">
  div.content
    pre
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
</style>
