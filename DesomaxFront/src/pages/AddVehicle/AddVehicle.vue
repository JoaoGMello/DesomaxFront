<script lang="ts">
import ContentPopup from '@/components/organisms/Popup/components/ContentPopup.vue'
import { defineComponent } from 'vue'
const name = 'AddVehicle'

export default defineComponent({
  name,

  components: { ContentPopup },

  // props: { },

  mounted() {},

  updated() {},

  data() {
    return { popUpAddImage: false }
  },

  methods: {},

  computed: {}
})
</script>

<template>
  <div>
    <ContentPopup v-model="popUpAddImage" title="Adicionar Imagem"> </ContentPopup>
  </div>
</template>

<style scoped></style>
