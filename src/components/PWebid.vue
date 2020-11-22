<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  WEBID 89  webid: {{ webId }}
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import store from '../store'

export default {
  store,
  name: 'PWebid',
  props: {
    msg: String
  },
  created(){
    this.webId = this.$store.state.webId
  },
  methods: {
    logout() {
      this.webId = Math.random()
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
      set: function(value) { this.$store.commit('setWebId', 'W'+value)}
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
