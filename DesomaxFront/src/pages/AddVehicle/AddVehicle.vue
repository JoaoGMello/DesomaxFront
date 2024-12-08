<script lang="ts">
import InsertCar from '@/classes/InsertCar'
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import AddFileUpload from '@/components/molecules/AddFileUpload/AddFileUpload.vue'
import CardTitle from '@/components/molecules/CardTitle/CardTitle.vue'
import FormInputNumber from '@/components/molecules/Inputs/FormInputNumber/FormInputNumber.vue'
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue'
import FormTextArea from '@/components/molecules/Inputs/FormTextArea/FormTextArea.vue'
import ETypeToast, { toast } from '@/tools/toast'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'AddVehicle'

export default defineComponent({
  name,

  components: {
    CardTitle,
    PrimaryButton,
    FormInputText,
    FormTextArea,
    AddFileUpload,
    FormInputNumber
  },

  // props: { },

  mounted() {
    this.loginInfo = localStorage.getItem('loginInfo') || ''
    this.payload.userId = this.loginInfo.replace(/[\\"]/g, '')
  },

  updated() {},

  data() {
    return {
      payload: new InsertCar(),
      loginInfo: '',
      aux: ''
    }
  },

  methods: {
    convertFileToBase64(file: File) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => this.callback(reader.result)
    },

    callback(base64) {
      this.payload.image = base64
      this.aux = base64
    },

    insertCar() {
      if (
        this.payload.brand != '' &&
        this.payload.model != '' &&
        this.aux != '' &&
        this.payload.price != 0 &&
        this.payload.km != 0 &&
        this.payload.color != '' &&
        this.payload.year != '' &&
        this.payload.description != ''
      ) {
        axios
          .post(`https://localhost:7148/api/Car/InsertCar`, this.payload)
          .then(() => {
            toast(ETypeToast.Success, 'Sucesso!', 'Usuário adicionado com sucesso!')
            this.$router.push('/home')
          })
          .catch(() => {
            toast(
              ETypeToast.Error,
              'Ocorreu um erro.',
              'Não foi adicionar o veículo, tente novamente.'
            )
          })
      } else {
        toast(ETypeToast.Error, 'Ocorreu um erro.', 'Preencha todas as informações para proseguir.')
      }
    }
  },

  computed: {}
})
</script>

<template>
  <div class="size-full">
    <CardTitle title="Adicione um veículo" :shadow="false" turn-back @click-turn-back="$router.push('/home')">
      <template #headerButtons>
        <div class="note1:h-[2.1rem] monitor1:h-[2.35rem] w-[10rem]">
          <PrimaryButton
            text="Adicionar"
            weight-text="500"
            icon-height-resp="0.95rem"
            icon-height="1rem"
            button-color="var(--primary-color)"
            hover-color="#ff8819"
            padding-resp="1rem 0"
            padding="1.2rem 0"
            @click="insertCar"
          />
        </div>
      </template>

      <div class="relative size-full">
        <div class="size-full flex flex-col gap-y-8 overflow-x-hidden overflow-y-auto">
          <div class="grid items-baseline gap-x-8 gap-y-4 py-6 form-vehicle">
            <FormInputText
              class="model"
              input-label="Modelo"
              placeholder="Digite o modelo do veículo"
              font-label="Poppins Medium"
              v-model="payload.model"
            />

            <FormInputText
              class="brand"
              input-label="Marca"
              placeholder="Digite a marca do veículo"
              font-label="Poppins Medium"
              v-model="payload.brand"
            />

            <FormTextArea
              class="description"
              input-label="Descrição"
              placeholder="Digite uma breve descrição"
              font-label="Poppins Medium"
              v-model="payload.description"
            />

            <AddFileUpload
              class="image"
              title="Imagem"
              @selected-image="convertFileToBase64($event)"
            />

            <FormInputText
              class="date"
              input-label="Ano de fabricação"
              placeholder="Digite o ano de fabricação"
              font-label="Poppins Medium"
              v-model="payload.year"
            />

            <FormInputNumber
              class="km"
              input-label="Quilometragem"
              placeholder="Digite a quilometragem"
              font-label="Poppins Medium"
              v-model="payload.km"
            />

            <FormInputNumber
              class="price"
              input-label="Preço"
              placeholder="Digite o valor do veículo"
              font-label="Poppins Medium"
              v-model="payload.price"
            />

            <FormInputText
              class="color"
              input-label="Cor"
              placeholder="Digite a cor do veículo"
              font-label="Poppins Medium"
              v-model="payload.color"
            />
          </div>
        </div>
      </div>
    </CardTitle>
  </div>
</template>

<style scoped>
.form-vehicle {
  grid-template-columns: repeat(3, 1fr);
}

.model {
  grid-area: 1 / 1 / 2 / 2;
}
.brand {
  grid-area: 1 / 2 / 2 / 3;
}
.description {
  grid-area: 2 / 1 / 3 / 3;
}
.image {
  grid-area: 1 / 3 / 3 / 4;
}
</style>
