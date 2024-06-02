<script lang="ts">
import { defineComponent } from "vue";
import files from "@/shared/files";

const name = 'Icon'

export default defineComponent({
  name,

  components: { }, 

  props: { 
    itsUrl: {
      type: Boolean,
      default: true
    },

    iconName: {
      type: String,
      default: ''
    },

    altText: {
      type: String,
      default: ''
    },

    iconSize: {
      type: String,
      default: ''
    },

    iconSizeResp: {
      type: String,
      default: ''
    },

    colorIcon: {
      type: String,
      default: '#6f7d6c'
    },

    iconHeightResp: {
      type: String,
      default: ''
    },

    iconHeight: {
      type: String,
      default: '1rem'
    },

    iconWidthResp: {
      type: String,
      default: 'auto'
    },

    iconWidth: {
      type: String,
      default: 'auto'
    },
  },

  mounted () { },

  updated () { },

  data () {
    return { }
  },

  methods: { },

  computed: { 
    returnsIconPath(): URL {
      return files.returnsImageURL(this.iconName, true)
    },
  }, 

});
</script>

<template>
  <img :src="`${returnsIconPath}`" 
  :alt="altText" 
  class="select-none icon-properties" 
  v-if="itsUrl">

  <i :class="iconName" 
  class="select-none icon-properties" 
  v-else></i>
</template>


<style scoped>
.icon-properties {
  color: v-bind('colorIcon') !important;
}

@media (min-width: 1024px) {
  .icon-properties {
    height: v-bind('iconHeightResp');
    width: v-bind('iconWidthResp');
    font-size: v-bind('iconSizeResp');
  } 
}

@media (min-width: 1500px) {
  .icon-properties {
    height: v-bind('iconHeight');
    width: v-bind('iconWidth');
    font-size: v-bind('iconSize');
  } 
}
</style>
