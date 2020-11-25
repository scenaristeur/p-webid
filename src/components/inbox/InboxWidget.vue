<template>
  <div class="webid">

    <b-button-group>
       <b-button variant="outline-primary">
         <b-icon icon="mailbox"></b-icon> Inbox
       </b-button>
       <b-button variant="outline-primary">
         <b-icon icon="envelope"></b-icon> Send
       </b-button>
     </b-button-group>
</div>
</template>

<script>
import store from '@/store'

export default {
  store,
  props: ['inbox'],
  name: 'InboxWidget',
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
