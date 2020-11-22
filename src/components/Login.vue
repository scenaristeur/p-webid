<template>
  <div class="login">
    <b-button v-if="webId == null" @click="login" variant="success">Login</b-button>
    <b-button v-else @click="logout" variant="danger">Logout</b-button>
  </div>
</template>

<script>
import store from '../store'
const auth = solid.auth
const popUri = 'https://solidcommunity.net/common/popup.html'

export default {
  store,
  name: 'Login',
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
      get: function() { return this.$store.state.solid.webId},
      set: function(value) { this.$store.dispatch('solid/setWebId', value)}
    },
  }
}
</script>
