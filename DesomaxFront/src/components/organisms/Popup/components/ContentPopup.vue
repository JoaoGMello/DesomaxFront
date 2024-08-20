<script lang="ts">
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import { defineComponent } from 'vue'
import Popup from '../Popup.vue'
import Cross from '@/components/atoms/Cross/Cross.vue'
const name = 'ContentPopup'

export default defineComponent({
  name,

  emits: ['update:modelValue', 'positiveClick'],

  components: { PrimaryButton, Popup, Cross },

  props: {
    title: {
      type: String,
      required: true
    },

    subTitle: {
      type: String,
      default: '--'
    },

    divisor: {
      type: String,
      default: 'Divisor.svg'
    },

    lowerCase: {
      type: Boolean,
      default: true
    },

    hasButton: {
      type: Boolean,
      default: true
    },

    icon: {
      type: String,
      default: '--'
    },

    buttonText: {
      type: String,
      default: 'Sim'
    },

    buttonHeight: {
      type: String,
      default: ''
    },

    buttonWidth: {
      type: String,
      default: '200px'
    },

    modelValue: {
      type: Boolean,
      default: false
    },

    alturaPopup: {
      type: String,
      default: 'auto'
    },

    popupHeight: {
      type: String,
      default: '43em'
    },

    closable: {
      type: Boolean,
      default: true
    },

    buttonDisabled: {
      type: Boolean,
      default: false
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
  <Popup v-model="value">
    <div class="grid h-full w-full bg-white rounded-[30px] p-2">
      <div class="grid relative w-full pt-[2rem] pb-[0.7rem]">
        <div class="relative flex flex-col justify-self-center icone-popup">
          <!-- <img class="h-[22px]" :src="caminhoDivisor"/> -->
          <div class="title flex justify-center text-center">{{ title }}</div>
          <div
            v-if="subTitle != '--'"
            class="flex justify-center text-center text-[#626262] font-medium text-lg pt-5"
          >
            {{ subTitle }}
          </div>
        </div>
        <div
          class="absolute flex justify-self-end items-center pt-[1.2rem] cross"
          @click="$emit('update:modelValue', false)"
        >
          <Cross class="cursor-pointer" v-if="closable" />
        </div>
      </div>

      <div class="flex justify-center">
        <slot></slot>
      </div>

      <div v-if="hasButton" class="flex gap-10 items-center justify-center pb-[2.4rem] pt-[1rem]">
        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-6 monitor1:mt-8">
          <PrimaryButton
            text="acessar"
            button-color="var(--primary-color)"
            hover-color="#ff8819"
            rounding="10px"
            uppercase
          >
          </PrimaryButton>
        </div>

        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-6 monitor1:mt-8">
          <PrimaryButton
            text="acessar"
            button-color="var(--tertiary-color)"
            hover-color="#bebebe"
            rounding="10px"
            uppercase
          >
          </PrimaryButton>
        </div>
      </div>

      <div></div>
    </div>
  </Popup>
</template>

<style scoped></style>
