<template>
  <div class="group">

<GroupeHeader :group="group" />

      <Cockpit :url="url" />

  Group {{ url}}
</div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Group',
  props: ['url'],
  components:{
    'Cockpit': () => import('@/components/gouvernance/Cockpit.vue'),
    'GroupeHeader': () => import('@/components/groups/GroupeHeader.vue'),

  },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
    this.update()
  },
  data: function(){
    return {
      group: {members:[], subgroups:[]}
    }
  },
  methods: {
  async update(){
      this.group = await this.$updateGroupe(this.url)
      console.log("GROUPE",this.group)
    },

  },
  watch:{
    url(){
      this.update()
    },
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
