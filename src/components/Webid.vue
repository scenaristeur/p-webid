<template>
  <div class="webid">
  webId: {{ webId }}
  </div>
</template>

<script>
import store from '../store'

export default {
  store,
  name: 'Webid',
  created(){
    this.webId = this.$store.state.solid.webId
  },
  methods: {
    },
  watch:{
    webId(){
      console.log("watch webid", this.webId)
    }
  },
  computed:{
    webId:{
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
  }
}
</script>
