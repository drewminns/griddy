<template lang="pug">
  div
    section.app-container
      section.columns
        .column.is-2-desktop.is-3-tablet.intro
          .top-header
            header.header
              h1.title.is-1.is-inverted Griddy
            .description
              p Learn the CSS Grid!
          .meta
            p.is-1
              |Follow me
              | <a href="http://twitter.com/drewisthe">@drewisthe</a>
            p
              a.twitter-share-button(
                href="https://twitter.com/intent/tweet?text=Hello%20world"
              ) Share
        .column.is-3-desktop.is-3-tablet.scrollable
          app-controls
        .column.result.is-7-desktop.is-6-tablet
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
  font-size: 14px;
}

.app-container {

  & > .columns {
    height: 100%;
    margin-top: 0;
  }

  .intro {


    .title, .subtitle {
      color: white;
    }
  }
}

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  background-color: #363636;
  color: #fff;

  header.header {
    text-align: center;
    background: #1e87f0;
    padding: 4rem 2rem;

    .title {
      font-weight: bold;
      color: white;
    }

  }

  .description {
    font-size: 1.2rem;
  }

  .meta, .description {
    padding: 2rem;
    text-align: center;

    a {
      color: #1e87f0;
    }
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
  padding: 35px;
  height: 100vh;

  &__preview {
    height: 70%;
  }

  &__code {
    height: 30%;
    margin-top: 10px;
    overflow-y: auto;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
}

@media (max-width: 767px) {

  .header {
    padding: 2rem;
  }

  .scrollable {
    height: auto;
  }

  .result {
    height: auto;
  }

  .intro .meta, .intro .description {
    padding: 1rem 2rem;
    text-align: center;
  }
}

.select::after {
  z-index: 2 !important;
}

</style>
