<script lang="ts">
import Image from '@/components/atoms/Image/Image.vue'
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue'
import { defineComponent } from 'vue'
const name = 'CreateAccount'

export default defineComponent({
  name,

  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Image,
    FormInputText
  },

  // props: { },

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
  <div class="login-container flex h-full">
    <div
      class="image-content h-full w-[50%] pt-8 px-8 flex flex-col justify-center items-center bg-orange-200"
    >
      <Image
        imgWidth="80%"
        imgHeight="80%"
        imgHeightResp="80%"
        imageName="Enthusiastic-cuate-img.svg"
      />
    </div>

    <div class="h-full w-[50%] pt-8 px-8 flex flex-col items-center">
      <div
        class="note1:text-[2.5rem] monitor1:text-[3.1rem] text-[var(--primary-color)] poppins-medium login-title"
      >
        Cadastre-se
      </div>

      <div class="grid items-start gap-x-8 gap-y-4 py-6 w-[100%] form">
        <FormInputText class="one-field" input-label="Nome" placeholder="Digite seu nome" />

        <FormInputText
          class="one-field"
          input-label="Sobrenome"
          placeholder="Digite seu sobrenome"
        />

        <FormInputText class="one-field" input-label="E-mail" placeholder="Digite seu e-mail" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
}
</style>
