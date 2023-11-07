<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const links = ref(
  [
    { name: 'Home', address: '/' },
    { name: 'Quem Sou Eu?', address: '/me' },
    { name: 'O que faço?', address: '/do' },
    { name: 'Hobbies', address: '/hobbies' }
  ]
)
</script>

<template>
  <header>
    <nav>
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/me">Quem Sou Eu?</router-link>
      <router-link class="nav-item" to="/do">O que faço?</router-link>
      <router-link class="nav-item" to="/hobbies">Hobbies</router-link>

      <!-- <router-link v-for="link of links" class="nav-item" to="{link.address}">{{ link.name }}</router-link> -->
    </nav>
  </header>

  <RouterView />
</template>

<style>
.nav-item{
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px; 
  
}
</style>
