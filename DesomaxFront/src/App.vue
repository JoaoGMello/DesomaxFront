<script lang="ts">
import { defineComponent } from 'vue'
import Toast from 'primevue/toast'
const name = 'App'

export default defineComponent({
  name,

  components: { Toast },

  props: {},

  mounted() {},

  updated() {},

  data() {
    return {}
  },

  methods: {},

  computed: {}
})
</script>

<template>
  <div class="size-full">
    <Toast />
    <router-view></router-view>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
