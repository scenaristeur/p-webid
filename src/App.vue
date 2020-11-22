<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PopockLogin />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PopockLogin from 'popock-login/dist/popock-login.min.js'

export default {
  name: 'App',
  components: {
    HelloWorld, PopockLogin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
