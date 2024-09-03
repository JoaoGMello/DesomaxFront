<script lang="ts">
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue';
import AddFileUpload from '@/components/molecules/AddFileUpload/AddFileUpload.vue';
import CardTitle from '@/components/molecules/CardTitle/CardTitle.vue';
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue';
import FormTextArea from '@/components/molecules/Inputs/FormTextArea/FormTextArea.vue';
import { defineComponent } from 'vue'
const name = 'AddVehicle'

export default defineComponent({
  name,

  components: { CardTitle, PrimaryButton, FormInputText, FormTextArea, AddFileUpload },

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
  <div class="size-full">
    <CardTitle title="Adicione um veículo" :shadow="false" turn-back>
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
          />
        </div>
      </template>

      <div class="relative size-full">
        <div class="size-full flex flex-col gap-y-8 overflow-x-hidden overflow-y-auto">
          <div class="grid items-baseline gap-x-8 gap-y-4 py-6 form-vehicle">
            <FormInputText
              class="model"
              input-label="Modelo"
              placeholder="Digite seu endereço"
              font-label="Poppins Medium"
            />

            <FormInputText
              class="brand"
              input-label="Marca"
              placeholder="Digite seu endereço"
              font-label="Poppins Medium"
            />

            <FormTextArea
              class="description"
              input-label="Descrição"
              placeholder="Digite seu endereço"
              font-label="Poppins Medium"
            />

            <AddFileUpload
              class="image"
              title="Imagem"
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

.model {grid-area: 1 / 1 / 2 / 2;}
.brand {grid-area: 1 / 2 / 2 / 3;}
.description {grid-area: 2 / 1 / 3 / 3;}
.image {grid-area: 1 / 3 / 3 / 4;}
</style>
