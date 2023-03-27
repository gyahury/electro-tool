<script>export default {

  methods: {
      Close() {
          window.close(); 
      }
      }
  }
</script>

<template>
      <v-layout>
        <v-app-bar
          color="rgb(255, 255, 255)"
          density="compact"
        >  
          <v-app-bar-title></v-app-bar-title>
          <template v-slot:prepend>
            <v-btn icon="mdi-vuejs"></v-btn>
          </template>
          <template v-slot:append>
            <v-btn icon="mdi-close" @click="Close" size="small" style="color: rgb(100, 100, 100);"></v-btn>
          </template>
        </v-app-bar>
        <v-main>
        </v-main>
      </v-layout>
  </template>

<style>
  .v-toolbar__content {
      -webkit-app-region: drag;
  }
  .v-toolbar__append {
      -webkit-app-region: no-drag;
  }
</style>