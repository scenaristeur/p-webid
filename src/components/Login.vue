<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    LOGIN 100 webid: {{ webId }}
    <button v-if="webId == null" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
  </div>
</template>

<script>
import store from '../store'
const auth = solid.auth
const popUri = 'https://solidcommunity.net/common/popup.html'

export default {
  store,
  name: 'Login',
  props: {
    msg: String
  },
  created(){
    this.webId = this.$store.state.webId
    solid.auth.trackSession(session => {
      if (!session)
      this.webId = null
      else
      this.webId = session.webId
    });
  },
  methods: {
    async login() {
      let session = await auth.currentSession()
      if (!session) { session = await auth.popupLogin({ popupUri:popUri }) }
      console.log(`Logged in as ${session.webId}.`)
    },
    logout() {
      auth.logout()

    }
  },
  watch:{
    webId(){
      console.log("watch webid", this.webId)
    }
  },
  computed:{
    webId:{
      get: function() { return this.$store.state.webId},
      set: function(value) { this.$store.commit('setWebId', value)}
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
