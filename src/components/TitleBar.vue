<script>
export default {

  methods: {
    Close() {
      window.close();
    }
  }
}
</script>

<template>
  <v-layout>
    <v-app-bar color="rgb(255, 255, 255)" density="compact">
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

div {
  font-size: 13px;
  color: rgb(95, 94, 94);
}

.header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #212121;
}

.header p {
  font-size: 16px;
  text-align: center;
  color: #757575;
  margin-bottom: 30px;
}

.v-list-item--nav .v-list-item-title {
    color: rgb(95, 94, 94);
}

.v-list {
    margin-top: 10px;
}
</style>