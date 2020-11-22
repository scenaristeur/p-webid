<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Todo 89  webid: {{ webId }}
  </div>
</template>

<script>
import store from '../store'

export default {
  store,
  name: 'Todo',
  props: {
    msg: String
  },
  async created(){
    //console.log(fc)

  },
  methods: {

  },
  watch:{
    async webId(){
      console.log("watch webid", this.webId)
    }
  },
  computed:{
    webId:{
      get: function() { return this.$store.state.webId},
      set: function() {}
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
