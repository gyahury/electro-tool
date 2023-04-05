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
::-webkit-scrollbar {
  display: none;
}

.v-application {
  font-family: 'NotoSans' !important;
}

@font-face {
  font-family: 'NotoSans';
  src: url('assets/fonts/NotoSansKR-Bold.otf') format('truetype');
}

/* 영문, 특수문자 폰트 */
@font-face {
  font-family: 'NotoSans';
  src: url('assets/fonts/OpenSans-SemiBold.ttf') format('truetype');
  unicode-range: U+0020-007E;
}
</style>