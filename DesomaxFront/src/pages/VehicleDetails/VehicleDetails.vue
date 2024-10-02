<script lang="ts">
import CarDetailsViewModel from '@/classes/CarDetailsViewModel'
import Card from '@/components/atoms/Card/Card.vue'
import CardTitle from '@/components/molecules/CardTitle/CardTitle.vue'
import FormInputMask from '@/components/molecules/Inputs/FormInputMask/FormInputMask.vue'
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue'
import FormTextArea from '@/components/molecules/Inputs/FormTextArea/FormTextArea.vue'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'VehicleDetails'

export default defineComponent({
  name,

  components: { Card, CardTitle, FormInputText, FormInputMask, FormTextArea },

  // props: { },

  mounted() {
    this.carId = localStorage.getItem('CarId') || ''
    this.getCarById()
  },

  updated() {},

  data() {
    return {
      carId: '',
      carDetails: new CarDetailsViewModel(),
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },

  methods: {
    getCarById() {
      const payload = {
        carId: this.carId
      }

      axios.post(`https://localhost:7148/api/Car/GetCarById`, payload).then((response) => {
        this.carDetails = response.data[0]
        console.log(this.carDetails)
      })
    }
  },

  computed: {}
})
</script>

<template>
  <div class="vehicle-container flex gap-10 h-full p-10">
    <div class="h-full w-[65%]">
      <CardTitle
        title="Detalhes do Veículo"
        :shadow="false"
        turn-back
        @click-turn-back="$router.push('/home')"
      >
        <div class="relative size-full">
          <div class="size-full flex flex-col gap-y-8 overflow-x-hidden overflow-y-auto">
            <div class="grid items-baseline gap-x-8 gap-y-4 py-6 form-vehicle">
              <div>
                <div class="label">Marca</div>
                <div class="field">{{ carDetails.brand }}</div>
              </div>

              <div>
                <div class="label">Modelo</div>
                <div class="field">{{ carDetails.model }}</div>
              </div>

              <div class="description">
                <div class="label">Descrição</div>
                <div class="field">{{ carDetails.description }}</div>
              </div>

              <div>
                <div class="label">Ano</div>
                <div class="field">{{ carDetails.year }}</div>
              </div>

              <div>
                <div class="label">Km</div>
                <div class="field">{{ carDetails.km }}</div>
              </div>

              <div>
                <div class="label">Estado</div>
                <div class="field">{{ carDetails.state }}</div>
              </div>

              <div>
                <div class="label">Cidade</div>
                <div class="field">{{ carDetails.city }}</div>
              </div>

              <div>
                <div class="label">Cor</div>
                <div class="field">{{ carDetails.color }}</div>
              </div>

              <div>
                <div class="label">Vendedor</div>
                <div class="field">{{ carDetails.seller }}</div>
              </div>
            </div>
          </div>
        </div>
      </CardTitle>
    </div>
    <div class="h-full w-[35%]">
      <Card padding="0px" margin-content="0px">
        <template #content>
          <div class="flex flex-col gap-1">
            <div class="flex justify-center items-center w-full">
              <img class="w-full h-[250px] object-cover" :src="carDetails.image" alt="" />
            </div>

            <div class="flex flex-col gap-3 px-5">
              <div class="price">R$ {{ carDetails.price }}</div>

              <div class="message">Envie uma mensagem para o vendedor</div>

              <FormInputText
                class="one-field"
                input-label="Nome"
                placeholder="Digite seu nome"
                font-label="Poppins Medium"
                v-model:model-value="name"
              />

              <FormInputText
                class="one-field"
                input-label="E-mail"
                placeholder="Digite seu e-mail"
                font-label="Poppins Medium"
                v-model:model-value="email"
              />

              <FormInputMask
                class="one-fields"
                input-label="Telefone"
                font-label="Poppins Medium"
                mask="(99)99999-9999"
                :auto-clear="false"
                placeholder="Digite um número de telefone"
                v-model:model-value="phone"
              />

              <FormTextArea
                class="description"
                input-label="Descrição"
                placeholder="Digite uma breve descrição"
                font-label="Poppins Medium"
                v-model="message"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.form-vehicle {
  grid-template-columns: repeat(4, 1fr);
}

.label {
  font-size: large;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #454545;
}

.field {
  font-size: 14px;
  font-weight: 500;
  color: #585858;
}

.price {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 0.04px;
  color: #2e2d37;
}

.message {
  font-size: 15px;
  color: #696977;
  font-weight: 400;
}
</style>
