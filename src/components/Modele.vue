<template>
  <div class="webid">
    <a v-bind:href="webId" target="_blank">{{ webId }}</a>
  </div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Webid',
  // components:{
  //   'ViewSelector': () => import('@/components/ViewSelector.vue'),
  // },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
  },
  // data: function(){
  //   return {
  //     //  selected: ""
  //   }
  // },
  // methods: {
  // },
  watch:{
    webId(){
      console.log("watch webid", this.webId)
    }
  },
  computed:{
    webId:{
      get: function() { return this.$store.state.profile.profile.webId},
      set: function() {}
    },
  }
}
</script>
<style>
.color-primary {
  color: #00fac4;
}
</style>
