<script lang="ts">
import CarDetailsViewModel from '@/classes/CarDetailsViewModel'
import CarCard from '@/components/molecules/CarCard/CarCard.vue'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'Home'

export default defineComponent({
  name,

  components: { CarCard },

  // props: { },

  mounted() {
    this.getAllCars()
  },

  updated() {},

  data() {
    return {
      carList: new CarDetailsViewModel()
    }
  },

  methods: {
    getAllCars() {
      axios.get(`https://localhost:7148/api/Car/GetAllCars`).then((response) => {
        this.carList = response.data
        console.log(this.carList)
      })
    }
  },

  computed: {}
})
</script>

<template>
  <div class="car-list-container p-5">
    <CarCard
      v-for="(i, index) in carList"
      :key="index"
      :brand="i.brand"
      :model="i.model"
      :image="i.image"
      :price="i.price"
      :km="i.km"
      :color="i.color"
      :description="i.description"
      :year="i.year"
      :city="i.city"
      :state="i.state"
    />
  </div>
</template>

<style scoped>
.car-list-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
}
</style>
