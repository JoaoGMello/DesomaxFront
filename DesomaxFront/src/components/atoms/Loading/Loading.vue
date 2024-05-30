<script lang="ts">
import { defineComponent } from "vue";
const name = 'Loading'

export default defineComponent({
  name,

  components: { }, 

  // props: { },

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
  <div class="loading-v">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>


<style scoped>
.loading-v {
  --loading-medium-color:#d1d1d1;
  --loading-medium-thickness: 3px;
  --loading-medium-size: 24px;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: var(--loading-medium-size);
  height: var(--loading-medium-size);
  border: var(--loading-medium-thickness) solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--loading-medium-color) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
