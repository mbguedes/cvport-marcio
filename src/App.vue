<template>
  <Sidebar />
  <main class="content">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<style>
/* Estilo para o conteúdo principal */
.content {
  /* Deixa espaço para a sidebar fixa no desktop */
  padding-left: 120px; /* 100px da sidebar + 20px de margem */
  padding-top: 2rem;
  padding-right: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .content {
    /* Em telas menores, a sidebar some, então o padding volta ao normal */
    padding-left: 2rem;
  }
}
</style>