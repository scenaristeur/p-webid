<template>
  <div class="webid">
    <fieldset>
      storage: {{ storage }}<br>
      folder: {{ folder }}
    </fieldset>
    BASIC | NETWORK |  DATA
  </div>
</template>

<script>
import store from '../store'
const auth = solid.auth
const fc   = new SolidFileClient(auth)

export default {
  store,
  name: 'Storage',
  created(){
    this.storage = this.$store.state.storage
  },
  data: function () {
    return {
      folder: null
    }
  },
  methods: {
  },
  watch:{
    async storage(){
      console.log("watch storage", this.storage)
      if (this.storage != null){
        this.folder = await fc.readFolder( this.storage )
        console.log(this.folder)
      }else{
        this.folder = null
      }
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
