<template lang="pug">
  div
    .field
      label.label {{ title }}
    .field
      p.control
        span.select
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
    showContent: Boolean
  },
  computed: {
    modelVal: function() {
      return this.$store.state.styles[this.property];
    }
  },
  methods: {
    updateProperty(e) {
      this.$store.commit('modifyStringValue', {
        property: this.property,
        value: e.target.value
      });
    }
  }
}
</script>

<style lang="scss">
</style>
