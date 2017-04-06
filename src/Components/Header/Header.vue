<template lang="pug">
  header.top-header
    nav.nav.has-shadow
      .nav-center
        .nav-item
          h1.title {{ copy.title }}
</template>

<script>
import copy from '../../lib/copy';

export default {
  data: function() {
    return {
      copy,
    }
  }
}
</script>

<style lang="scss">
  .nav {
    background-color: hsl(0, 0%, 7%);

    .title {
      color: white;
    }
  }
</style>
