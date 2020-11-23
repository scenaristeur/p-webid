<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Login: <Login />
    <Profile />
    Webid: <Webid />
    Storage: <Storage />
    Todo : <Todo />
    url : {{ url }}
    <b-button @click="test">Test</b-button>
    <b-button @click="test2">Test 2</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    'Login': () => import('@/components/Login.vue'),
    'Webid': () => import('@/components/Webid.vue'),
    'Profile': () => import('@/components/Profile.vue'),
    'Todo': () => import('@/components/Todo.vue'),
    'Storage': () => import('@/components/Storage.vue'),
  },
  data() {
    return {
      url: undefined
    }
  },
  created(){
    this.$route.query.url != undefined ? this.updateUrl(this.$route.query.url) : ""
  },
  methods: {
    test() {
      this.$router.push({ path: '/', query: { url: 'test' } })
    },
    test2() {
      this.$router.push({ path: '/', query: { url: 'test2' } })
    },
    updateUrl(url){
      console.log("URL",url)
      this.url = url
    }
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log(to)
      to.query.url != undefined ? this.updateUrl(to.query.url) : ""

    }
  }
}
</script>
