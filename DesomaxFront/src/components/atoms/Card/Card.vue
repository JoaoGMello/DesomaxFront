<script lang="ts">
import { defineComponent } from "vue";

const name = 'Card'

export default defineComponent({
  name,

  components: { }, 

  props: {
    height: {
      type: String,
      default: '100%'
    },

    width: {
      type: String,
      default: '100%'
    },

    paddingResp: {
      type: String,
      default: ''
    },

    padding: {
      type: String,
      default: '0'
    },

    rounding: {
      type: String,
      default: '0.6rem'
    },

    marginContent: {
      type: String,
      default: '0'
    },

    paddingContent: {
      type: String,
      default: '0'
    },

    grid: {
      type: Boolean,
      default: false
    },

    gridStructure: {
      type: String,
      default: 'max-content 1fr max-content'
    },

    scrollX: {
      type: Boolean,
      default: false
    },

    shadow: {
      type: Boolean,
      default: false
    }
  },
 
  mounted() { },

  updated() { },

  data() {
    return { }
  },

  methods: { },

  computed: { }, 
});
</script>

<template>
  <div class="bg-[#fff] overflow-y-hidden card-principal" :class="{ 'grid': grid, 'overflow-x-auto' : scrollX, 'overflow-x-hidden' : !scrollX }">
    <slot name="header"></slot>
    
    <span class="size-full overflow-x-hidden overflow-y-auto content-card">
      <slot name="content"></slot>
    </span>

    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.card-principal {
  height: v-bind('height');
  width: v-bind('width');
  /* box-shadow: v-bind('shadow ? "0px 2px 8px 1px #2020201a" : "none"'); */
   
  grid-template-rows: v-bind('grid ? `${gridStructure}` : ""');
  border-radius: v-bind('rounding');
}

.content-card {
  margin: v-bind('marginContent');
  padding: v-bind('paddingContent');
}

@media (min-width: 1024px) {
  .card-principal {
    padding: v-bind('paddingResp ? paddingResp : padding');
  }
}

@media (min-width: 1500px) {
  .card-principal {
    padding: v-bind('padding ? padding : paddingResp');
  }
}
</style>
