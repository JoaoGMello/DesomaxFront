<script lang="ts">
import { defineComponent } from 'vue'
const name = 'NavBar'

export default defineComponent({
  name,

  components: {},

  // props: { },

  mounted() {},

  updated() {},

  data() {
    return {
      active: false
    }
  },

  methods: {},

  computed: {}
})
</script>

<template>
  <div class="header">
    <nav class="nav" :class="{ active: active }">
      <a href="/home" class="logo">Desomax</a>
      <button class="hamburger" @click="active = !active"></button>
      <ul class="nav-list">
        <li><a href="/my-vehicles">Meus veículos anunciados</a></li>
        <li><a href="/add-vehicle">Anuncie seu veículo</a></li>
        <li><a href="/my-profile">Perfil</a></li>
        <li><a href="/">Sair</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
a {
  font-family: sans-serif;
  text-decoration: none;
}

.header {
  background: #ff7b00;
  padding-inline: 16px;
}

.nav {
  max-width: 1280px;
  height: 70px;
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 30px;
  color: #fff;
}

.nav-list {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-list a {
  font-size: 18px;
  color: #fff;
  padding-block: 16px;
}

.hamburger {
  display: none;
  border: none;
  background: none;
  border-top: 3px solid #fff;
  cursor: pointer;
}

.hamburger::after,
.hamburger::before {
  content: ' ';
  display: block;
  width: 30px;
  height: 3px;
  background: #fff;
  margin-top: 5px;
  position: relative;
  transition: 0.3s;
}

@media (max-width: 750px) {
  .hamburger {
    display: block;
    z-index: 1;
  }

  .nav-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #ff7b00;
    clip-path: circle(100px at 90% -15%);
    transition: 1s ease-out;

    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 0;

    pointer-events: none;
  }

  .nav-list a {
    font-size: 24px;
    opacity: 0;
  }

  .nav-list li:nth-child(1) a {
    transition: 0.5s 0.2s;
  }

  .nav-list li:nth-child(2) a {
    transition: 0.5s 0.4s;
  }

  .nav-list li:nth-child(3) a {
    transition: 0.5s 0.6s;
  }

  /* Estilos ativos */

  .nav.active .nav-list {
    clip-path: circle(1500px at 90% -15%);
    pointer-events: all;
  }

  .nav.active .nav-list a {
    opacity: 1;
  }

  .nav.active .hamburger {
    position: fixed;
    top: 26px;
    right: 16px;
    border-top-color: transparent;
  }

  .nav.active .hamburger::before {
    transform: rotate(135deg);
  }

  .nav.active .hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
</style>
