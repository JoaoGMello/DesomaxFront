<script lang="ts">
import { defineComponent } from 'vue'
import Popup from '../Popup.vue'
import Cross from '@/components/atoms/Cross/Cross.vue'
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
const name = 'ConfirmationPopup'

export default defineComponent({
  name,

  components: { Popup, Cross, PrimaryButton },

  props: {
    message: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    positiveText: {
      type: String,
      default: 'Sim'
    },
    negativeText: {
      type: String,
      default: 'Não'
    },
    modelValue: {
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
  <Popup v-model="value" height="20rem" width="45rem">
    <div class="grid h-full w-full bg-white rounded-[8px] p-2">
      <div class="header grid pb-[0.7rem]">
        <div class="relative flex justify-self-center self-center icone-popup">
          <!-- <img class="h-[45px]" :src="caminhoIcone" /> -->
        </div>
        <div
          class="absolute flex justify-self-end cross"
          @click="$emit('update:modelValue', false)"
        >
          <Cross class="cursor-pointer" />
        </div>
      </div>

      <div class="mensagem-popup text-[#616161] text-[23px] text-center py-[0.5rem]">
        {{ message }}
      </div>

      <div class="botoes-popup flex gap-10 items-center justify-center pb-[2.4rem] pt-[1rem]">
        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem]">
          <PrimaryButton
            :text="negativeText"
            button-color="var(--tertiary-color)"
            hover-color="#bebebe"
            rounding="10px"
            uppercase
          >
          </PrimaryButton>
        </div>

        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem]">
          <PrimaryButton
            :text="positiveText"
            button-color="var(--primary-color)"
            hover-color="#ff8819"
            rounding="10px"
            uppercase
          >
          </PrimaryButton>
        </div>
      </div>
    </div>
  </Popup>
</template>

<style scoped>
.popup-icone-confirmacao {
  grid-template-rows: 3.5em repeat(2, max-content);
}

.botoes-popup > * {
  width: 230px;
  height: 45px;
}
@media (min-width: 350px) {
  .header {
    padding-top: 1rem;
  }
  .cross {
    padding-bottom: 1rem;
    padding-right: 1rem;
  }
  .botoes-popup {
    font-size: 20px;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    align-items: center;
  }
}
@media (min-width: 768px) {
  .botoes-popup {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .header {
    padding-top: 2rem;
  }
  .cross {
    padding-top: 0rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
}
@media (min-width: 1480px) {
}
</style>
