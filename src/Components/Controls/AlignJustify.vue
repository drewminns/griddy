<template lang="pug">
  div
    .field
      label.label {{ title }}
      p(v-html="text")
    .field
      p.control.is-expanded
        span.select.is-fullwidth
          select(
            v-model="modelVal"
            @change="updateProperty"
          )
            option(val="stretch") stretch
            option(val="center") center
            option(val="start") start
            option(val="end") end
            option(val="space-around" v-show="showContent") space-around
            option(val="space-between" v-show="showContent") space-between
            option(val="space-evenly" v-show="showContent") space-evenly
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  props: {
    title: String,
    property: String,
    belongsTo: String,
    showContent: Boolean,
    text: String
  },
  computed: {
    modelVal: function() {
      return this.$store.state.styles[this.property];
    }
  },
  methods: {
    ...mapActions([
      'modifyAlignJustifyVal'
    ]),
    updateProperty(e) {
      this.modifyAlignJustifyVal({
        property: this.property,
        value: e.target.value
      })
    }
  }
}
</script>

<style lang="scss">
</style>
