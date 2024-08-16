<script lang="ts">
import CarCard from "@/components/molecules/CarCard/CarCard.vue";
import axios from "axios";
import { defineComponent } from "vue";
const name = 'Home'

export default defineComponent({
  name,

  components: { CarCard }, 

  // props: { },

  mounted () { 
    this.getAllCars()
  },

  updated () { },

  data () {
    return { 
      items: [0,1,2,3,4,5,6,7,8,9,10]
    }
  },

  methods: { 
    getAllCars() {
      axios.get(`https://localhost:7148/api/Car/GetAllCars`)
      .then((response) => {
        console.log(response)
      })
    }
  },

  computed: { }, 

});
</script>

<template>
  <div class="car-list-container p-5">
    <CarCard
      v-for="i in items"
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
