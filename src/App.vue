<template>
  <div id="app">

    Login: <Login />
    Webid: <Webid />
    Storage: <Storage />
    Todo : <Todo />
  </div>
</template>

<script>
import store from './store'

export default {
  store,
  name: 'App',
  components: {
    'Login': () => import('@/components/Login.vue'),
    'Webid': () => import('@/components/Webid.vue'),
    'Todo': () => import('@/components/Todo.vue'),
    'Storage': () => import('@/components/Storage.vue'),
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
