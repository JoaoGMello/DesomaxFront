<script lang="ts">
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import CardTitle from '@/components/molecules/CardTitle/CardTitle.vue'
import FormInputMask from '@/components/molecules/Inputs/FormInputMask/FormInputMask.vue';
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue';
import FormRadioButton from '@/components/molecules/Inputs/FormRadioButton/FormRadioButton.vue';
import LabelValue from '@/shared/LabelValue';
import { defineComponent } from 'vue'
const name = 'Profile'

export default defineComponent({
  name,

  components: { CardTitle, PrimaryButton, FormInputText, FormInputMask, FormRadioButton },

  props: {},

  mounted() {},

  updated() {},

  data() {
    return {
      mask: '99999999999',
      regex: /[^0-9]+/g,
      optionsStatus: [new LabelValue('Masculino', 0), new LabelValue('Feminino', 1)],
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

            <FormRadioButton
              class="one-field"
              input-label="Gênero"
              fontLabel="Poppins Medium"
              fontLabelRadio="Poppins Regular"
              :options="optionsStatus"
              option-label="label"
              option-value="value"
            />

            <FormInputText
              class="one-field"
              input-label="Estado"
              placeholder="Digite o estado em que vive"
              font-label="Poppins Medium"
            />

            <FormInputText
              class="one-field"
              input-label="Cidade"
              placeholder="Digite a cidade onde mora"
              font-label="Poppins Medium"
            />

            <FormInputText
              class="one-field"
              input-label="Endereço"
              placeholder="Digite seu endereço"
              font-label="Poppins Medium"
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
