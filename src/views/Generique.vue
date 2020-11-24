<template>
  <div class="generique">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    Login: <Login />
    <Profile />
    Webid: <Webid />
    Storage: <Storage />
    Todo : <Todo /> -->

    <div>
      <b-card
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      >
      <b-card-title>{{ resource.titre }}</b-card-title>
      <!-- <b-card-header></b-card-header> -->
      <b-card-text v-if="resource.content">
        {{ resource.content }}
      </b-card-text>
      <b-card-text>[[ predicats list ]]</b-card-text>
      <!-- <router-link to="/attrs">/attrs</router-link> -->
      <b-button :to="'/?url='+thing.internal_url" class="sm" variant="primary">More</b-button>
      <!-- <b-button :to="'/?resource='+thing.internal_url" class="sm" variant="primary">More</b-button> -->
      <b-card-footer>
        <small>

          <Date v-if="resource.created" :dateIso="resource.created"/>
          <UserName v-if="resource.maker" :webId="resource.maker" />
          {{ resource.shortTypes }}<br>
          <a :href="thing.internal_url" target="_blank">url</a>

        </small>
      </b-card-footer>
    </b-card>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  //getLiteral,
  getUrlAll,
  getUrl,
} from "@inrupt/solid-client";
import { FOAF, VCARD, RDFS, RDF, DCTERMS } from "@inrupt/vocab-common-rdf";
import ConverterMixin from '@/mixins/ConverterMixin'

export default {
  name: 'Generique',
  props: ['thing'],
  mixins: [ConverterMixin],
  components: {
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date'),
    // 'Login': () => import('@/components/Login.vue'),
    // 'Webid': () => import('@/components/Webid.vue'),
    // 'Profile': () => import('@/components/Profile.vue'),
    // 'Todo': () => import('@/components/Todo.vue'),
    // 'Storage': () => import('@/components/Storage.vue'),
  },
  data() {
    return {
      // titre: null,
      // content: null,
      // shortTypes: [],
      resource: {}
    }
  },
  created(){
    this.updateThing()
  },
  methods: {
    updateThing(){
      this.resource = {}
      //  this.resource.thing = this.thing
      this.resource.titre = getStringNoLocale(this.thing, RDFS.label) || getStringNoLocale(this.thing, VCARD.fn);
      this.resource.types = getUrlAll(this.thing, RDF.type);
      this.populateFromTypes()
    },
    populateFromTypes(){
      //  console.log(this.types)
      this.resource.shortTypes = this.resource.types.map(t => this.localname(t)).filter(this.onlyUnique)

      switch (true) {
        case this.resource.shortTypes.includes("Article"):
        //  console.log("ART")
        this.resource.content  = getStringNoLocale(this.thing, 'http://rdfs.org/sioc/ns#content');
        this.resource.maker  = getUrl(this.thing, FOAF.maker);
        this.resource.created = getStringNoLocale(this.thing, DCTERMS.created)

        break;
        default:
        console.log("todo", this.resource.shortTypes)
      }
      //  console.log(this.resource)
    }
  },
  watch: {
    thing(){

      this.updateThing()
    },
  }
}
</script>
