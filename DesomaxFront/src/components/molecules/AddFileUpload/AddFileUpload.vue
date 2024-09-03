<script lang="ts">
import { defineComponent } from "vue";
const name = 'AddFileUpload'

export default defineComponent({
  name,

  emits: ['selectedImage'],

  components: { }, 

  props: { 
    title: {
      type: String,
      default: "",
  	},
  },

  mounted () { },

  updated () { },

  data () {
    return { 
      selectedFile: null,
      selectedFileUrl: '',
      iptImageRef: null,
    }
  },

  methods: { 
    clickUpload() {
      if (!this.selectedFile) {
        const element = document.getElementById('iptImageRef');
        if (element) {
          element.click();
        } else {
          console.error('Element with id "iptImageRef" not found');
        }
      }
    },

    handleFileChange(e: any) {
      const file = e.target.files[0];
      this.selectedFile = file;
      this.selectedFileUrl = file ? URL.createObjectURL(file) : null;
      this.$emit('selectedImage', file);
    },

    handleDelete() {
      this.selectedFile = null;
      this.selectedFileUrl = null;
    },
  },

  computed: { }, 

});
</script>

<template>
  <div class="w-full">
    <span class="note1:text-[0.8rem] note2:text-[0.82rem] monitor1:text-[0.95rem] mb-[0.4rem] ml-2 text-[#434343] font-semibold" v-if="title">{{ title }}</span>
    <div class="container-upload" @click="clickUpload">
      <div v-if="selectedFile" class="box-buttons">
        <div class="icon-delete" @click.stop="handleDelete">
          <i class="pi pi-trash text-white"></i>
        </div>
      </div>
      <div class="box-center" :style="{ backgroundImage: `url(${selectedFileUrl})` }">
        <span v-if="!selectedFile" class="box-center">
          <i class="pi pi-plus-circle icon-upload"></i>
          <span class="text-upload">Adicione um Banner</span>
        </span>
      </div>
    </div>
    <input type="file" id="iptImageRef" style="display: none" accept="image/*" @change="handleFileChange" />
  </div>
</template>


<style scoped>
.container-upload{
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items:center ;
	width: '100%';
	height: 15rem;
	position: relative;
	margin-bottom: 2rem;
	border: 2px dashed #dfdfdf;
	background: #ffffff;
	border-radius: 10px 10px 10px 10px;
	-webkit-border-radius: 10px 10px 10px 10px;
	-moz-border-radius: 10px 10px 10px 10px;
}
.icon-upload{
font-size: 3rem;
color: #2D2C70;
margin-bottom: 10px;
}
.box-buttons{
position:absolute;
top:0.5rem;
right:0;
height: 4.5rem;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
}
.icon-delete{
	background-color:#D60023;
	width: 3rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px 0 0 5px;
}
.icon-edit{
	background-color:#D60023;
	width: 3rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px 0 0 5px;
}
.text-upload{
	font-size: 1.5rem;
color: #9f9d9d;
}
.box-center{
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
