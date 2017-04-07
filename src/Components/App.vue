<template lang="pug">
  div
    section.app-container
      section.columns
        .column.is-4-desktop.is-6-tablet.scrollable
          app-controls
        .column.result.is-8-desktop.is-6-tablet
          app-preview.result__preview
          app-code.result__code
</template>

<script>
import appControls from './Controls/Controls.vue';
import appPreview from './Preview/Preview.vue';
import appCode from './Code/Code.vue';

export default {
  components: {
    appControls,
    appPreview,
    appCode,
  }
}
</script>


<style src="../assets/bulma.min.css"></style>
<style src="../assets/hint.css"></style>
<style lang="scss">
html {
  font-size: 15px;
}

.app-container {

  & > .columns {
    height: 100%;
    margin-top: 0;
  }
}

.scrollable {
  height: 100vh;
  border-right: 1px solid #ededed;
  box-shadow: 2px 0 10px rgba(10, 10, 10, 0.1);
  padding: 0;
}

.result {
  display: flex;
  flex-direction: column;
  padding: 25px;
  height: 100vh;

  &__preview {
    height: 80%;
  }

  &__code {
    height: 20%;
    margin-top: 10px;
    overflow-y: auto;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
}

.select::after {
  z-index: 2 !important;
}

</style>
