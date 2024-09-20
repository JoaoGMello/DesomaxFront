<script lang="ts">
import { defineComponent } from 'vue'
const name = 'MyVehicles'

export default defineComponent({
  name,

  components: {},

  // props: {},

  mounted() {
    this.loginInfo = localStorage.getItem('loginInfo')
  },

  updated() {},

  data() {
    return {
      loginInfo: ''
    }
  },

  methods: {},

  computed: {}
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
