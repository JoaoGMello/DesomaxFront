<script lang="ts">
import UserDetails from '@/classes/UserDetails'
import UserId from '@/classes/UserId'
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import CardTitle from '@/components/molecules/CardTitle/CardTitle.vue'
import FormInputMask from '@/components/molecules/Inputs/FormInputMask/FormInputMask.vue'
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue'
import FormRadioButton from '@/components/molecules/Inputs/FormRadioButton/FormRadioButton.vue'
import LabelValue from '@/shared/LabelValue'
import ETypeToast, { toast } from '@/tools/toast'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'Profile'

export default defineComponent({
  name,

  components: { CardTitle, PrimaryButton, FormInputText, FormInputMask, FormRadioButton },

  props: {},

  mounted() {
    this.loginInfo = localStorage.getItem('loginInfo') || ''
    this.payload.id = this.loginInfo.replace(/[\\"]/g, '')
    this.getUserById()
  },

  updated() {},

  data() {
    return {
      mask: '99999999999',
      loginInfo: '',
      regex: /[^0-9]+/g,
      optionsStatus: [new LabelValue('Masculino', 0), new LabelValue('Feminino', 1)],
      payload: new UserDetails(),
      confirmPassword: ''
    }
  },

  methods: {
    changeMask(phone: string) {
      const phoneSize = phone.replace(this.regex, '').length

      if (phoneSize === 11) this.mask = '(99) 99999-9999'
      if (phoneSize === 10) this.mask = '(99) 9999-9999'
    },

    getUserById() {
      const request = new UserId()

      request.userId = this.loginInfo.replace(/[\\"]/g, '')

      axios.post(`https://localhost:7148/api/User/GetUserById`, request).then((response) => {
        this.payload = response.data
        this.confirmPassword = this.payload.password
      })
    },

    updateUser() {
      const validPassword = this.isValidPassword(this.payload.password)
      if (validPassword) {
        axios
          .put(`https://localhost:7148/api/User/UpdateUser`, this.payload)
          .then(() => {
            toast(ETypeToast.Success, 'Sucesso!', 'Usuário alterado com sucesso!')
          })
          .catch(() => {
            toast(
              ETypeToast.Error,
              'Ocorreu um erro.',
              'Não foi possível atualizar o usuário, tente novamente.'
            )
          })
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
    }
  },

  computed: {}
})
</script>

<template>
  <div class="size-full">
    <CardTitle title="Detalhes do Perfil" :shadow="false" turn-back>
      <template #headerButtons>
        <div class="note1:h-[2.1rem] monitor1:h-[2.35rem] w-[10rem]">
          <PrimaryButton
            text="Salvar"
            weight-text="500"
            icon-height-resp="0.95rem"
            icon-height="1rem"
            button-color="var(--primary-color)"
            hover-color="#ff8819"
            padding-resp="1rem 0"
            padding="1.2rem 0"
            @click="updateUser"
          />
        </div>
      </template>

      <div class="relative size-full">
        <div class="size-full flex flex-col gap-y-8 overflow-x-hidden overflow-y-auto">
          <div class="grid items-baseline gap-x-8 gap-y-4 py-6 form-profile">
            <FormInputText
              class="one-field"
              input-label="Nome"
              placeholder="Digite seu nome"
              font-label="Poppins Medium"
              v-model:model-value="payload.firstName"
            />

            <FormInputText
              class="one-field"
              input-label="Sobrenome"
              placeholder="Digite seu sobrenome"
              font-label="Poppins Medium"
              v-model:model-value="payload.lastName"
            />

            <FormInputText
              class="one-field"
              input-label="E-mail"
              placeholder="Digite seu e-mail"
              font-label="Poppins Medium"
              v-model:model-value="payload.email"
            />

            <FormInputMask
              class="one-fields"
              input-label="Celular"
              font-label="Poppins Medium"
              mask="(99)99999-9999"
              :auto-clear="false"
              placeholder="Digite um celular"
              v-model:model-value="payload.phone"
            />

            <FormInputText
              class="one-field"
              input-label="Nome de Usuário"
              placeholder="Digite um nome de usuário"
              font-label="Poppins Medium"
              v-model:model-value="payload.userName"
            />

            <FormInputMask
              input-label="CPF"
              font-label="Poppins Medium"
              placeholder="Informe o CPF"
              mask="999.999.999-99"
              v-model:model-value="payload.cpf"
            />

            <FormInputText
              class="one-field"
              input-label="Senha"
              placeholder="Digite sua senha"
              font-label="Poppins Medium"
              v-model:model-value="payload.password"
            />

            <FormInputText
              class="one-field"
              input-label="Confirme sua Senha"
              placeholder="Digite sua senha"
              font-label="Poppins Medium"
              v-model:model-value="confirmPassword"
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

            <FormInputText
              class="one-field"
              input-label="Estado"
              placeholder="Digite o estado em que vive"
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
          </div>
        </div>
      </div>
    </CardTitle>
  </div>
</template>

<style scoped>
.form-profile {
  grid-template-columns: repeat(3, 1fr);
}
</style>
