<template>
  <div class="webid">
    <a v-bind:href="webId" target="_blank">{{ webId }}</a>
    <b-card
    title="Inbox"
    tag="article"
    style="max-width: 40rem;min-width: 20rem;"
    class="mb-2">
    <b-card-text>

      Inbox: {{ inbox}}<br>
    </b-card-text>
    <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>  
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
