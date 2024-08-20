<script lang="ts">
import { defineComponent } from 'vue'
const name = 'Cross'

export default defineComponent({
  name,

  components: {},

  // props: {},

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
  <div class="cross"></div>
</template>

<style scoped>
.cross {
  position: relative;
  width: 25px;
  height: 25px;
  opacity: v-bind('backgroundCrossClaro ? "0.9" : "0.3"');
}

.cross:before,
.cross:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 29px;
  width: 3px;
  background-color: v-bind('backgroundCrossClaro ? "#fff" : "#333"');
}
.cross:before {
  transform: rotate(45deg);
}
.cross:after {
  transform: rotate(-45deg);
}
</style>
