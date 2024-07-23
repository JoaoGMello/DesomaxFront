<script lang="ts">
import PrimaryButton from '@/components/atoms/PrimaryButton/PrimaryButton.vue'
import CardTitle from '@/components/molecules/CardTitle/CardTitle.vue'
import { defineComponent } from 'vue'
const name = 'Profile'

export default defineComponent({
  name,

  components: { CardTitle, PrimaryButton },

  props: {},

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
          <div class="grid items-baseline gap-x-8 gap-y-4 py-6 form-profile"></div>
        </div>
      </div>
    </CardTitle>
  </div>
</template>

<style scoped>
.form-profile {
  grid-template-columns: repeat(6, 1fr);
}
</style>
