<template>
  <div class="webid">
    <div>
      <b-button v-b-toggle.collapse-inbox variant="primary"><b-icon icon="mailbox"></b-icon> {{ folder.files != undefined ? folder.files.length : 0}}</b-button>
      <b-collapse id="collapse-inbox" class="mt-2">
        <!-- <b-card> -->
        <b-button-group v-if="folder.folders!= undefined && folder.folders.length > 0">
          <b-button v-for="fo in folder.folders" :key="fo.url">{{ fo }}</b-button>
        </b-button-group>

        <b-list-group class="scroll">
          <b-list-group-item v-for="fi in folder.files" :key="fi.url">
            <InboxSummaryLine :url="fi.url" />
          </b-list-group-item>
        </b-list-group>
        <!-- <p class="card-text">Collapse contents Here</p>
        <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
        <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse> -->
      <!-- </b-card> -->
    </b-collapse>
  </div>

</div>
</template>

<script>
import store from '@/store'
const auth = solid.auth
const fc = new SolidFileClient(auth)

export default {
  store,
  props: ['inbox'],
  name: 'Inbox',
  components:{
    'InboxSummaryLine': () => import('@/components/inbox/InboxSummaryLine'),
  },
  created(){
    this.webId = this.$store.state.profile.profile.webId
    this.update()
  },
  data: function(){
    return {
      folder: {}
    }
  },
  methods: {
    async update(){
      this.folder = {}
      try{
        this.folder = await fc.itemExists(this.inbox) && await fc.readFolder(this.inbox)
      }catch(e){
        console.log(e)
      }
    }
  },
  watch:{
    inbox(){
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
.scroll{
  position: relative;
  bottom:0px;
  max-height: 35vh;
  margin-bottom: 10px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
