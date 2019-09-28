<template>
  <div id="app">
    <Header msg="Header"></Header>
    <Home></Home>
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
import { Header, Footer, Home } from './components/index'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  },
  mounted () {
    console.log(process.env.ROOT_API)
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
