<script setup>
import SideBar from './components/SideBar.vue'
import TitleBar from './components/TitleBar.vue'
</script>

<template>
  <v-app>
    <v-main>
      <TitleBar />
      <SideBar />
    </v-main>
  </v-app>
</template>

<style>
* {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

::-webkit-scrollbar {
  display: none;
}

.v-application {
  font-family: 'NotoSans' !important;
}

</style>