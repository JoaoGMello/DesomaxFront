<script lang="ts">
import files from "@/shared/files";
import { defineComponent } from "vue";
const name = 'Image'

export default defineComponent({
  name,

  components: { }, 

  props: { 
    imageName: {
      type: String,
      default: ''
    },

    altText: {
      type: String,
      default: ''
    },

    imgHeight: {
      type: String,
      default: ''
    },

    imgHeightResp: {
      type: String,
      default: ''
    },

    imgWidth: {
      type: String,
      default: ''
    }
  },

  mounted () { },

  updated () { },

  data () {
    return { }
  },

  methods: { },

  computed: { 
    returnsImagePath() {
      return files.returnsImageURL(this.imageName)
    },
  }, 

});
</script>

<template>
  <img 
    :src="`${returnsImagePath}`"
    :alt="altText"
    class="image-properties"
  >
</template>


<style scoped>
.image-properties {
  width: v-bind('imgWidth');
  object-fit: cover;
  object-position: center;
}

@media (min-width: 1024px) {
  .image-properties {
    height: v-bind('imgHeightResp');
  } 
}

@media (min-width: 1500px) {
  .image-properties {
    height: v-bind('imgHeight');
  } 
}
</style>
