<script lang="ts">
import CarDetailsViewModel from '@/classes/CarDetailsViewModel'
import CarCard from '@/components/molecules/CarCard/CarCard.vue'
import { useLoginStore } from '@/store/loginStore'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'Home'

export default defineComponent({
  name,

  components: { CarCard },

  // props: { },

  setup() {
    const store = useLoginStore()
    return {
      store
    }
  },

  mounted() {
    this.loginInfo = localStorage.getItem('loginInfo') || ''
    this.getAllCars()
  },

  updated() {},

  data() {
    return {
      carList: new CarDetailsViewModel(),
      loginInfo: ''
    }
  },

  methods: {
    getAllCars() {
      axios.get(`https://localhost:7148/api/Car/GetAllCars`).then((response) => {
        this.carList = response.data
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
      :like="i.like"
      :car-id="i.id"
      :edit-vehicle="false"
    />
  </div>
</template>

<style scoped>
.car-list-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
}
</style>
