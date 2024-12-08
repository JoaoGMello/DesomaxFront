<script lang="ts">
import CarDetailsViewModel, { CarDetails } from '@/classes/CarDetailsViewModel'
import Card from '@/components/atoms/Card/Card.vue'
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import CardTitle from '@/components/molecules/CardTitle/CardTitle.vue'
import FormInputMask from '@/components/molecules/Inputs/FormInputMask/FormInputMask.vue'
import FormInputText from '@/components/molecules/Inputs/FormInputText/FormInputText.vue'
import FormTextArea from '@/components/molecules/Inputs/FormTextArea/FormTextArea.vue'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'VehicleDetails'

export default defineComponent({
  name,

  components: { Card, CardTitle, FormInputText, FormInputMask, FormTextArea, PrimaryButton },

  // props: { },

  mounted() {
    this.carId = localStorage.getItem('CarId') || ''
    this.getCarById()
  },

  updated() {},

  data() {
    return {
      carId: '',
      carDetails: new CarDetails(),
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
                <div class="field">{{ carDetails.km.toLocaleString('pt-BR') }}</div>
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
              <div class="flex items-center justify-between">
                <div class="price">
                  {{
                    carDetails.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                  }}
                </div>
                <div class="note1:h-[2.1rem] monitor1:h-[2.35rem] w-[11rem]">
                  <a
                    :href="`mailto:${carDetails.emailSeller}?subject=Usuário interessado no veículo ${carDetails.brand} ${carDetails.model}&amp;body=Olá,%0D%0A%0D%0A ${message} %0D%0A%0D%0A
                    Informações do Interessado:%0D%0A
                    -Nome: ${name}%0D%0A
                    -Telefone: ${phone}%0D%0A
                    -Email: ${email}%0D%0A%0D%0A
                    Por favor, entre em contato para que possamos discutir mais detalhes sobre o veículo.%0D%0A
                    Aguardo seu retorno.%0D%0A
                    Atenciosamente,%0D%0A
                     ${name}`"
                  >
                    <PrimaryButton
                      text="Enviar Mensagem"
                      weight-text="500"
                      icon-height-resp="0.95rem"
                      icon-height="1rem"
                      button-color="var(--primary-color)"
                      hover-color="#ff8819"
                      padding-resp="1rem 0"
                      padding="1.2rem 0"
                    />
                  </a>
                </div>
              </div>

              <div class="message">Envie uma mensagem para o vendedor</div>

              <div
                class="flex flex-col gap-2 overflow-auto note1:h-[210px] monitor2:h-full"
              >
                <FormInputText
                  class="one-field"
                  input-label="Nome Completo"
                  placeholder="Informe seu nome completo"
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
                  placeholder="Digite seu número de telefone"
                  v-model:model-value="phone"
                />

                <FormTextArea
                  class="description"
                  input-label="Mande sua mensagem"
                  placeholder="Informe o que mais te chamou atenção e o que gostaria de discutir com o vendedor"
                  font-label="Poppins Medium"
                  v-model="message"
                />
              </div>
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
