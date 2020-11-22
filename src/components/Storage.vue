<template>
  <div class="webid">
    storage: {{ storage }}
  </div>
</template>

<script>
import store from '../store'

export default {
  store,
  name: 'Storage',
  created(){
    this.storage = this.$store.state.storage
  },
  methods: {
  },
  watch:{
    webId(){
      console.log("watch storage", this.storage)
    }
  },
  computed:{
    storage:{
      get: function() { return this.$store.state.storage},
      set: function() {}
    },
  }
}
</script>
