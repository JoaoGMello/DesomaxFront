<script lang="ts">
import Loading from "@/components/atoms/Loading/Loading.vue";
import PrimaryButton from "@/components/atoms/PrimaryButton/PrimaryButton.vue";
import { defineComponent } from "vue";
const name = 'Login'

export default defineComponent({
  name,

  components: { PrimaryButton, Loading }, 

//props: { },

  mounted () { },

  updated () { },

  data () {
    return { 
      loading: false,
    }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
  <div class="login-container">
    <div class="image-content absolute z-1 h-full w-[50%] pt-8 px-8 flex flex-col justify-center">

    </div>
    
    <div class="absolute z-1 h-full w-[50%] pt-8 px-8 flex flex-col justify-center">
      <div class="flex flex-col items-center note1:pt-8 note2:pt-10 note2:pl-10 note1:pr-10 note2:pr-[8rem] monitor1:pt-0 content-info">
        <div class="note1:text-[1.5rem] monitor1:text-[2.1rem] text-[var(--primary-color)] poppins-medium login-title"> Bem-Vindo(a) ao Desomax </div>
        <div class="note1:text-[0.95rem] monitor1:text-[1.1rem] text-[var(--tertiary-color)] poppins-regular label-login"> Produtos de limpeza de alta qualidade </div>
        <div class="note1:w-[90%] note2:w-[28rem] monitor1:w-[30rem] inputs-content">
          <div class="note1:text-[0.95rem] text-[var(--tertiary-color)] note1:mb-2 monitor1:mb-4 poppins-regular label-login"> Acesse a plataforma </div>
          
          <div class="flex flex-col note1:gap-y-2 monitor1:gap-y-4">

          </div>
        </div>

        <div class="note1:h-[35px] monitor1:h-[42px] w-[16rem] note1:my-6 monitor1:mt-8">
          <PrimaryButton
            :just-slot="loading"
            text="acessar"
            button-color="var(--primary-color)"
            hover-color="var(--hover-primary-color)"
            rounding="10px"
            uppercase
          >
            <Loading/>
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.content-info {
  animation: myAnim 0.35s ease 0s 1 normal forwards;
}

@keyframes myAnim {
	0% {
		transform: scale(0.8);
	}

	100% {
		transform: scale(1);
	}
}
</style>
