<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <PLogin />
    <PWebid />
    <hr>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import store from './store'
import HelloWorld from './components/HelloWorld.vue'

export default {
  store,
  name: 'App',
  components: {
    HelloWorld,
    'PLogin': () => import('@/components/PLogin.vue'),
    'PWebid': () => import('@/components/PWebid.vue'),
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
