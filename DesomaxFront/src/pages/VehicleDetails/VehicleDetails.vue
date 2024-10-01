<script lang="ts">
import CarDetailsViewModel from '@/classes/CarDetailsViewModel'
import Card from '@/components/atoms/Card/Card.vue'
import CardTitle from '@/components/molecules/CardTitle/CardTitle.vue'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'VehicleDetails'

export default defineComponent({
  name,

  components: { Card, CardTitle },

  // props: { },

  mounted() {
    this.carId = localStorage.getItem('CarId') || ''
    this.getCarById()
  },

  updated() {},

  data() {
    return {
      carId: '',
      carDetails: new CarDetailsViewModel()
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
      <CardTitle title="Detalhes do Veículo" :shadow="false" turn-back>
        <div class="relative size-full">
          <div class="size-full flex flex-col gap-y-8 overflow-x-hidden overflow-y-auto">
            <div class="grid items-baseline gap-x-8 gap-y-4 py-6 form-vehicle"></div>
          </div>
        </div>
      </CardTitle>
    </div>
    <div class="h-full w-[35%]">
      <Card padding="0px" margin-content="0px">
        <template #content>
          <div>
            <div class="flex justify-center items-center w-full">
              <img class="w-full h-[250px] object-cover" :src="carDetails.image" alt="" />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.form-vehicle {
  grid-template-columns: repeat(3, 1fr);
}
</style>
