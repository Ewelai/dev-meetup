<template>
  <v-app id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </v-app>
</template>

<script>
import { Header, Footer } from './components/index';
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
