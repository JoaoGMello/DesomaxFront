<script lang="ts">
import { defineComponent } from "vue";
const name = 'App'

export default defineComponent({
  name,

  components: { }, 

  props: { },

  mounted () { },

  updated () { },

  data () {
    return { }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
  <div class="size-full">
    <router-view></router-view>
  </div>
</template>


<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
