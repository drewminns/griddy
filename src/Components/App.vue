<template lang="pug">
  div
    app-header
    section.app-container
      div.columns
        .column.is-5
          app-controls
        .column.result.is-7
          app-preview.result__item
          app-code.result__item
</template>

<script>
import appHeader from './Header/Header.vue';
import appControls from './Controls/Controls.vue';
import appPreview from './Preview/Preview.vue';
import appCode from './Code/Code.vue';

export default {
  components: {
    appHeader,
    appControls,
    appPreview,
    appCode,
  }
}
</script>

<style lang="scss">
.app-container {
  height: 100vh;
  padding-top: 1rem;
}


.result {
  display: flex;
  flex-direction: column;

  &__item {
    flex: 1 0 50%;
  }
}

</style>
