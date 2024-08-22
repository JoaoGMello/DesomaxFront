<script lang="ts">
import { defineComponent } from 'vue'
import Popup from '../Popup.vue'
const name = 'SuccessPopup'

export default defineComponent({
  name,

  emits: ['update:modelValue'],

  components: { Popup },

  props: {
    modelValue: {
      type: Boolean,
      default: false
    },

    message: {
      type: String,
      default: '--'
    }
  },

  mounted() {},

  updated() {},

  data() {
    return {
      value: this.modelValue
    }
  },

  methods: {},

  computed: {}
})
</script>

<template>
  <Popup v-model="value" height="20rem" width="45rem">
    <div class="grid w-full h-full rounded-[30px] bg-[white] p-5 popup-success">
      <div class="header grid pb-[0.7rem]">
        <!-- <div class="relative flex justify-self-center self-center icone-popup pt-10"><img :src="returnSuccessIcon"/></div> -->
        <div
          class="absolute flex justify-self-end cross"
          @click="$emit('update:modelValue', false)"
        >
          <Cross class="cursor-pointer" />
        </div>
      </div>

      <div class="text-[#2D2C70] font-medium text-3xl text-center">{{ message }}</div>
    </div>
  </Popup>
</template>

<style scoped></style>
