<template>
  <div class="webid">
    <div>
      <b-button-group>
        <b-button v-for="fo in folder.folders" :key="fo.url" variant="outline-dark">{{ decodeURI(fo.name) }}</b-button>
      </b-button-group>
    </div>
    <b-list-group>
      <b-list-group-item button v-for="fi in folder.files" :key="fi.url" variant="outline-dark" @click="setContent(fi)">{{ decodeURI(fi.name) }}</b-list-group-item>
    </b-list-group>

    <p>
      La fonctionnalité de création d'article sera bientôt opérationnelle.<br>
      En attendant, vous pouvez utiliser <a href="https://scenaristeur.github.io/solid-vue-panes/post" target="_blank">Popock post</a>
      et notamment l'outil Dokieli</p>
      Wiki {{ url }}
      <br>

      <b-modal id="wiki-content" :title="decodeURI(title)" size="xl">
        <template #modal-header="{ cancel }">
          <!-- Emulate built in modal header close button action -->
          <h4>{{decodeURI(title)}}</h4>
          <b-button size="sm" variant="success"
           :href="'https://scenaristeur.github.io/solid-vue-panes/editor?url='+file_url" target="_blank">
            Editer
          </b-button>
          <b-button size="sm"  @click="cancel()">
            Fermer
          </b-button>
        </template>
        <iframe ref="frame" width="100%" v-if="extension == 'html'" :src="file_url">... chargement {{ file_url }}</iframe>
        <div v-else-if="extension == 'ttl'">
          <p v-for="(t, i) in triples" :key="'t_'+i">
            <span class="col">{{localname(t.subject.value)}}</span>
            <span class="col">{{localname(t.predicate.value)}}</span>
            <span v-if="t.termType=='NamedNode'" class="col">{{localname(t.object.value)}}</span>
            <span v-else>{{t.object.value}}</span>


          </p>
        </div>
        <div v-else>
          {{ extension}}
          <hr>        {{ content }}
        </div>


        <template #modal-footer="{ cancel }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success"
           :href="'https://scenaristeur.github.io/solid-vue-panes/editor?url='+file_url" target="_blank">
            Editer
          </b-button>
          <b-button size="sm"  @click="cancel()">
            Fermer
          </b-button>
          <!-- Button with custom close trigger value -->
          <!-- <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
          Forget it
        </b-button> -->
      </template>

    </b-modal>

    <!-- derniers articles / dokieli ?
    <a v-bind:href="webId" target="_blank">{{ webId }}</a> -->
  </div>
</template>

<script>
import store from '@/store'
import GroupMixin from '@/mixins/GroupMixin.js'
import ConverterMixin from '@/mixins/ConverterMixin.js'

const auth = solid.auth
const fc = new SolidFileClient(auth)
import { fetchDocument } from 'tripledoc';
//import { vcard } from 'rdf-namespaces'

export default {
  store,
  name: 'Wiki',
  props: ['url'],
  mixins: [GroupMixin, ConverterMixin],
  // components:{
  //   'ViewSelector': () => import('@/components/ViewSelector.vue'),
  // },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
    this.update()
  },
  data: function(){
    return {
      folder: {},
      content: {},
      title: "",
      extension: "",
      file_url: "",
      triples: []
    }
  },
  methods: {
    async update(){
      console.log(this.url)
      let storage = await this.$getStorage(this.url)
      this.storage = `${storage}`+'wiki/'
      if( !(await fc.itemExists(this.storage)) ) {
        await fc.createFolder(this.storage) // only create if it doesn't already exist
      }
      // ? await fc.createFolder(this.storage) : ""
      console.log(this.storage)
      this.folder = await fc.readFolder(this.storage)
      console.log(this.folder)
    },
    async setContent(f){
      this.extension = f.url.split('.').pop()
      this.file_url = f.url
      if (this.extension == "ttl"){
        let doc = await fetchDocument(f.url)
        this.triples = doc.getTriples()
      }
      else{
        this.content = await fc.readFile(f.url)
      }
      this.title = f.name
      this.$bvModal.show('wiki-content')
    }
  },
  watch:{
    webId(){
      console.log("watch webid", this.webId)
    },
    url(){
      this.update()
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
iframe {
  min-height: 70vh;
/*   background:url(./loader.gif) center center no-repeat; height: 100%;*/
}
</style>
