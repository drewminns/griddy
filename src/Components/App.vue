<template lang="pug">
  div
    app-header
    section.app-container
      section.columns
        .column.is-5.scrollable
          app-controls
        .column.result.is-7
          app-preview.result__preview
          app-code.result__code
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
  height: calc(100vh - 52px);
  padding-top: 1rem;

  & > .columns {
    height: 100%;
  }
}

.scrollable {
  overflow-y: auto;
}


.result {
  display: flex;
  flex-direction: column;

  &__preview {
    flex: 1 0 70%;
  }

  &__code {
    flex: 1 0 30%;
  }
}

</style>
