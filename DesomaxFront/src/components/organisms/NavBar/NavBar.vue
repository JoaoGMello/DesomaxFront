<script lang="ts">
import { defineComponent } from "vue";
const name = 'NavBar'

export default defineComponent({
  name,

  components: { }, 

  // props: { },

  mounted () { },

  updated () { },

  data () {
    return { 
      sideBarIcon: false
    }
  },

  methods: { },

  computed: { }, 

});
</script>

<template>
  <div class="header">
    <div class="navbar">
      <div class="logo text-[#FFFFFF]">Logo</div>
      <ul class="links">
        <li class="text-[#FFFFFF] cursor-pointer button">Home</li>
        <li class="text-[#FFFFFF] cursor-pointer button">About</li>
        <li class="text-[#FFFFFF] cursor-pointer button">Services</li>
        <li class="text-[#FFFFFF] cursor-pointer button">Contact</li>
      </ul>
      <div></div>
      <div class="cursor-pointer" @click="sideBarIcon = !sideBarIcon">
        <i class="sidebar-button pi pi-bars"></i>
      </div>
    </div>

    <div class="dropdown-menu" v-if="sideBarIcon">
      <li class="text-[#FFFFFF] cursor-pointer button">Home</li>
      <li class="text-[#FFFFFF] cursor-pointer button">About</li>
      <li class="text-[#FFFFFF] cursor-pointer button">Services</li>
      <li class="text-[#FFFFFF] cursor-pointer button">Contact</li>
    </div>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  background-color: #006CB7;
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 0 2rem;
}

.navbar{
  width: 100%;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.links {
  display: flex;
  gap: 2rem;
}

ul {
  list-style: none;
}

.button:hover {
  color: aqua;
}

.sidebar-button {
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
}

.dropdown-menu {
  position: absolute;
  right: 2rem;
  top: 60px;
  width: 300px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: hidden;
  height: 190px;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dropdown-menu li {
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 990px) {
  .links {
    display: none;
  }

  .sidebar-button {
    display: block;
  }

  .dropdown-menu {
    display: block
  }
}

@media (max-width: 576px) {
  .dropdown-menu {
    left: 2rem;
    width: unset;
  }
}
</style>