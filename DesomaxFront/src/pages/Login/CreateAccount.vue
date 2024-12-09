<script lang="ts">
import InsertUser from '@/classes/InsertUser'
import Image from '@/components/atoms/Image/Image.vue'
import Loading from '@/components/atoms/Loading/Loading.vue'
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import FormInputMask from '@/components/molecules/Inputs/FormInputMask/FormInputMask.vue'
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue'
import FormRadioButton from '@/components/molecules/Inputs/FormRadioButton/FormRadioButton.vue'
import LabelValue from '@/shared/LabelValue'
import ETypeToast, { toast } from '@/tools/toast'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'CreateAccount'

export default defineComponent({
  name,

  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Image,
    FormInputText,
    FormInputMask,
    PrimaryButton,
    Loading,
    FormRadioButton
  },

  // props: { },

  mounted() {},

  updated() {},

  data() {
    return {
      mask: '99999999999',
      regex: /[^0-9]+/g,
      loading: false,
      payload: new InsertUser(),
      confirmPassword: '',
      optionsStatus: [new LabelValue('Masculino', 0), new LabelValue('Feminino', 1)]
    }
  },

  methods: {
    insertUser() {
      if (
        this.payload.firstName != '' &&
        this.payload.lastName != '' &&
        this.payload.email != '' &&
        this.payload.phone != '' &&
        this.payload.userName != '' &&
        this.payload.cpf != '' &&
        this.payload.password != '' &&
        this.confirmPassword != ''
      ) {
        const validPassword = this.isValidPassword(this.payload.password)

        if (validPassword) {
          axios
            .post(`https://localhost:7148/api/User/InsertUser`, this.payload)
            .then(() => {
              toast(ETypeToast.Success, 'Sucesso!', 'Usuário adicionado com sucesso!')
              this.$router.push('/')
            })
            .catch(() => {
              toast(
                ETypeToast.Error,
                'Ocorreu um erro.',
                'Não foi possível adicionar o usuário, tente novamente.'
              )
            })
        }
      } else {
        console.log(this.payload, this.confirmPassword)
        toast(
          ETypeToast.Error,
          'Ocorreu um erro.',
          'Preencha todas as informações, tente novamente.'
        )

        return false
      }
    },

    isValidPassword(password: string) {
      if (password.length < 8) {
        toast(ETypeToast.Error, 'Ocorreu um erro.', 'A senha deve conter no mínimo 8 caracteres')
        return false
      }

      const numberRegex = /\d/gm

      if (password.match(numberRegex) === null) {
        toast(
          ETypeToast.Error,
          'Ocorreu um erro.',
          'A senha deve conter no mínimo um caracter numérico'
        )
        return false
      }
      const upperCaseRegex = /[A-Z]/gm
      if (password.match(upperCaseRegex) === null) {
        toast(
          ETypeToast.Error,
          'Ocorreu um erro.',
          'A senha deve conter no mínimo um caracter maiúsculo'
        )
        return false
      }
      const specialCharRegex = /[?'",.>,()\-_çÇ=+%$#@&*!`~|/]/gm
      if (password.match(specialCharRegex) === null) {
        toast(
          ETypeToast.Error,
          'Ocorreu um erro.',
          'A senha deve conter no mínimo um caracter especial'
        )
        return false
      }

      if (password != this.confirmPassword) {
        toast(ETypeToast.Error, 'Ocorreu um erro.', 'As senhas não são as mesmas')
        return false
      }

      return true
    },

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

      <div class="grid items-start gap-x-8 note1:gap-y-5 monitor1:gap-y-8 py-6 w-[100%] form">
        <FormInputText
          class="one-field"
          input-label="Nome"
          placeholder="Digite seu nome"
          font-label="Poppins Medium"
          v-model="payload.firstName"
        />

        <FormInputText
          class="one-field"
          input-label="Sobrenome"
          placeholder="Digite seu sobrenome"
          font-label="Poppins Medium"
          v-model="payload.lastName"
        />

        <FormInputText
          class="one-field"
          input-label="E-mail"
          placeholder="Digite seu e-mail"
          font-label="Poppins Medium"
          v-model="payload.email"
        />

        <FormInputMask
          class="one-fields"
          input-label="Celular"
          font-label="Poppins Medium"
          mask="(99)99999-9999"
          :auto-clear="false"
          placeholder="Digite um celular"
          v-model="payload.phone"
        />

        <FormInputText
          class="one-field"
          input-label="Nome de Usuário"
          placeholder="Digite um nome de usuário"
          font-label="Poppins Medium"
          v-model="payload.userName"
        />

        <FormInputMask
          input-label="CPF"
          font-label="Poppins Medium"
          placeholder="Informe o CPF"
          mask="999.999.999-99"
          v-model="payload.cpf"
        />

        <FormInputText
          class="one-field"
          input-label="Senha"
          placeholder="Digite sua senha"
          font-label="Poppins Medium"
          v-model="payload.password"
        />

        <FormInputText
          class="one-field"
          input-label="Confirme sua Senha"
          placeholder="Digite sua senha"
          font-label="Poppins Medium"
          v-model="confirmPassword"
        />

        <FormInputText
          class="one-field"
          input-label="Estado (Sigla)"
          placeholder="Digite a sigla do estado em que vive"
          font-label="Poppins Medium"
          v-model:model-value="payload.state"
        />

        <FormInputText
          class="one-field"
          input-label="Cidade"
          placeholder="Digite a cidade onde mora"
          font-label="Poppins Medium"
          v-model:model-value="payload.city"
        />

        <FormInputText
          class="one-field"
          input-label="Endereço"
          placeholder="Digite seu endereço"
          font-label="Poppins Medium"
          v-model:model-value="payload.address"
        />

        <FormRadioButton
          class="one-field"
          input-label="Gênero"
          fontLabel="Poppins Medium"
          fontLabelRadio="Poppins Regular"
          :options="optionsStatus"
          option-label="label"
          option-value="value"
          v-model:model-value="payload.gender"
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

      <div class="flex flex-row-reverse items-center gap-5">
        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-2">
          <PrimaryButton
            :just-slot="loading"
            text="Salvar"
            button-color="var(--primary-color)"
            hover-color="#ff8819"
            rounding="10px"
            uppercase
            @click="insertUser"
          >
            <Loading />
          </PrimaryButton>
        </div>

        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-2">
          <PrimaryButton
            text="Voltar"
            button-color="var(--tertiary-color)"
            hover-color="#bebebe"
            rounding="10px"
            uppercase
            @click="$router.push('/')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .form {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1600px) {
  .form {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
