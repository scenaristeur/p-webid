<template>
  <div id="app">

PLogin:  <PLogin />
PWebid:    <PWebid />
  </div>
</template>

<script>
import store from './store'

export default {
  store,
  name: 'App',
  components: {
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
