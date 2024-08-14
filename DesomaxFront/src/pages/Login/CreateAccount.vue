<script lang="ts">
import Image from '@/components/atoms/Image/Image.vue'
import Loading from '@/components/atoms/Loading/Loading.vue'
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import FormInputMask from '@/components/molecules/Inputs/FormInputMask/FormInputMask.vue'
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue'
import FormRadioButton from '@/components/molecules/Inputs/FormRadioButton/FormRadioButton.vue'
import { defineComponent } from 'vue'
const name = 'CreateAccount'

export default defineComponent({
  name,

  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Image,
    FormInputText,
    FormInputMask,
    FormRadioButton,
    PrimaryButton,
    Loading
  },

  // props: { },

  mounted() {},

  updated() {},

  data() {
    return {
      mask: '99999999999',
      regex: /[^0-9]+/g,
      loading: false
    }
  },

  methods: {
    changeMask(phone: string) {
      const phoneSize = phone.replace(this.regex, '').length

      if (phoneSize === 11) this.mask = '(99) 99999-9999'
      if (phoneSize === 10) this.mask = '(99) 9999-9999'
    }
  },

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

    <div class="h-full w-[50%] pt-8 px-8 flex flex-col items-center justify-between">
      <div
        class="note1:text-[2.5rem] monitor1:text-[3.1rem] text-[var(--primary-color)] poppins-medium login-title"
      >
        Cadastre-se
      </div>

      <div class="grid items-start gap-x-8 note1:gap-y-5 monitor1:gap-y-10 py-6 w-[100%] form">
        <FormInputText
          class="one-field"
          input-label="Nome"
          placeholder="Digite seu nome"
          font-label="Poppins Medium"
        />

        <FormInputText
          class="one-field"
          input-label="Sobrenome"
          placeholder="Digite seu sobrenome"
          font-label="Poppins Medium"
        />

        <FormInputText
          class="one-field"
          input-label="E-mail"
          placeholder="Digite seu e-mail"
          font-label="Poppins Medium"
        />

        <FormInputMask
          class="one-fields"
          input-label="Celular"
          font-label="Poppins Medium"
          mask="(99)99999-9999"
          :auto-clear="false"
          placeholder="Digite um celular"
        />

        <FormInputText
          class="one-field"
          input-label="Nome de Usuário"
          placeholder="Digite um nome de usuário"
          font-label="Poppins Medium"
        />

        <FormInputMask
          input-label="CPF"
          font-label="Poppins Medium"
          placeholder="Informe o CPF"
          mask="999.999.999-99"
        />

        <FormInputText
          class="one-field"
          input-label="Senha"
          placeholder="Digite sua senha"
          font-label="Poppins Medium"
        />

        <FormInputText
          class="one-field"
          input-label="Confirme sua Senha"
          placeholder="Digite sua senha"
          font-label="Poppins Medium"
        />
      </div>

      <div
        class="note1:text-[0.95rem] monitor1:text-[1.1rem] text-[var(--tertiary-color)] poppins-regular"
      >
        Ao criar um perfil na Desomax, solicitamos suas informações básicas de contato e detalhes
        sobre suas preferências de compra. Garantimos a privacidade dos seus dados, utilizados
        apenas para proporcionar uma experiência personalizada. Seu cadastro permite acesso a
        ofertas exclusivas e serviços personalizados.
      </div>

      <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-2">
        <PrimaryButton
          :just-slot="loading"
          text="Salvar"
          button-color="var(--primary-color)"
          hover-color="#ff8819"
          rounding="10px"
          uppercase
          @click="$router.push('/')"
        >
          <Loading />
        </PrimaryButton>
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
