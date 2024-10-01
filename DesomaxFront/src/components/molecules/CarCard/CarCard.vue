<script lang="ts">
import Icon from '@/components/atoms/Icon/Icon.vue'
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import router from '@/router'
import ETypeToast, { toast } from '@/tools/toast'
import axios from 'axios'
import { defineComponent } from 'vue'
const name = 'CarCard'

export default defineComponent({
  name,

  components: {
    PrimaryButton,
    Icon
  },

  props: {
    brand: {
      type: String,
      default: ''
    },

    model: {
      type: String,
      default: ''
    },

    year: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: ''
    },

    description: {
      type: String,
      default: ''
    },

    price: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    },

    km: {
      type: String,
      default: ''
    },

    city: {
      type: String,
      default: ''
    },

    state: {
      type: String,
      default: ''
    },

    like: {
      type: Boolean,
      default: false
    },

    carId: {
      type: String,
      default: ''
    }
  },

  mounted() {
    this.hasLike = this.like
  },

  updated() {},

  data() {
    return {
      hasLike: false
    }
  },

  methods: {
    likeCar() {
      this.hasLike = !this.hasLike
      const payload = {
        carId: this.carId,
        like: this.hasLike
      }
      axios
        .put(`https://localhost:7148/api/Car/LikeCar`, payload)
        .then(() => {
          toast(ETypeToast.Success, 'Sucesso!', 'Carro atualizado!')
        })
        .catch(() => {
          toast(
            ETypeToast.Error,
            'Ocorreu um erro.',
            'Não foi possível dar o like no carro, tente novamente.'
          )
        })
    },

    redirect() {
      localStorage.setItem('CarId', this.carId)
      this.$router.push('/vehicle-details')
    }
  },

  computed: {}
})
</script>

<template>
  <div class="flex flex-col card">
    <img :src="image" alt="" class="h-[160px] w-full image" />

    <div class="p-3 info-container h-[210px]">
      <div class="flex items-center gap-2">
        <div class="brand font-semibold">{{ brand }}</div>
        <div class="model font-semibold">{{ model }}</div>
      </div>

      <div class="info text-sm font-medium text-[#6f7d6c]">
        {{ description }}
      </div>

      <div class="price font-semibold flex items-center">R$ {{ price }}</div>

      <div class="flex justify-between items-center">
        <div class="year font-semibold text-sm text-[#6f7d6c]">{{ year }}</div>
        <div class="mileage font-semibold text-sm text-[#6f7d6c]">{{ km }} Km</div>
      </div>

      <div class="note1:h-[35px]">
        <PrimaryButton
          text="Detalhes"
          button-color="var(--primary-color)"
          hover-color="#ff8819"
          rounding="10px"
          uppercase
          @click="redirect"
        />
      </div>
    </div>

    <div class="flex justify-between items-center p-3">
      <div class="flex gap-2 items-center justify-center">
        <Icon
          class="pt-1"
          :its-url="false"
          iconHeight="1.4rem"
          iconHeightResp="1.2rem"
          iconName="pi pi-map-marker"
        />
        <div class="flex gap-1">
          <div class="city font-semibold text-xs text-[#6f7d6c]">{{ city }}</div>
          <div class="font-semibold text-xs text-[#6f7d6c]">-</div>
          <div class="state font-semibold text-xs text-[#6f7d6c]">{{ state }}</div>
        </div>
      </div>
      <Icon
        class="pt-1 cursor-pointer"
        @click="likeCar()"
        :its-url="false"
        iconHeight="1.4rem"
        iconHeightResp="1.2rem"
        :iconName="hasLike ? 'pi pi-heart-fill' : 'pi pi-heart'"
      />
    </div>
  </div>
</template>

<style scoped>
.image {
  border-radius: 10px 10px 0px 0px;
}

.info-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  border-bottom: 1px solid #d6d6d6;
}

.info {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.card {
  background-color: #ffffff;
  width: 260px;
  border-radius: 10px;
}
</style>
