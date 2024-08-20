<script lang="ts">
import { defineComponent } from 'vue'
const name = 'Popup'

export default defineComponent({
  name,

  components: {},

  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '29em'
    },
    width: {
      type: String,
      default: '55%'
    },
    maxHeight: {
      type: String,
      default: '40em'
    },
    maxwidth: {
      type: String,
      default: '40em'
    }
  },

  emits: ['positiveClick', 'negativeclick', 'class'],

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
  <div>
    <Teleport to=".popup-slot">
      <div class="modal-popup center-full flex items-center justify-center" v-if="modelValue">
        <div class="conteudo-popup">
          <slot></slot>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.modal-popup {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 100;
  overflow: auto;
  backdrop-filter: blur(1px);
}

::-webkit-scrollbar {
  display: none;
}

.conteudo-popup {
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 350px) {
  .conteudo-popup {
    width: 90%;
  }
}
@media (min-width: 768px) {
  .conteudo-popup {
    width: 50em;
  }
}
@media (min-width: 1024px) {
  .conteudo-popup {
    height: v-bind('height');
    width: v-bind('width');
    max-height: v-bind('maxHeight');
  }
}

@media (min-width: 1240px) {
}

@media (min-width: 1500px) {
}
</style>
