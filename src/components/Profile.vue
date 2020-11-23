<template>
  <div v-bind:style="styleObject">
    Profil: {{ profile.types }}
    <ViewSelector v-on:viewSelected="viewSelected" @templateSelected="templateSelected" />

    <!-- <div v-for="p in profile_types" :key="p.name">
      <b-button @click="changeType(p)">{{p.name}}</b-button>
    </div> -->
  </div>
</template>

<script>
import store from '../store'
import { namedNode } from "@rdfjs/data-model";
import { schema, foaf, doap, org } from "rdf-namespaces";

export default {
  store,
  name: 'Profile',
  components:{
    'ViewSelector': () => import('@/components/ViewSelector.vue'),
  },
  created(){
    this.profile = this.$store.state.profile.profile
  },
  data: function () {
    return {
      styleObject: {
        color: 'blue',
        fontSize: '13px'
      },
      // profile_types : [
      //   {name: "Organization"},
      //   {name: "Group"},
      //   {name: "Person"},
      //   {name: "Project"},
      //   {name: "Collection"},
      //   {name: "..."}
      // ]
    }
  },
  methods: {
    viewSelected(selected) {
      console.log("YEAH SELECTED !", selected)
      if (selected != "..."){
        let t = {}
        t.name = selected
        this.changeType(t)
      }
    },
    templateSelected(selected){
      console.log("template",selected)
    },
    async changeType(e){
      //  console.log(e.name)
      //  console.log(this.profile.webId)
      const actor = solid.data[this.profile.webId];
      switch (e.name) {
        case "Organization":
        this.profile.types = ['http://xmlns.com/foaf/0.1/Organization', 'http://www.w3.org/ns/org#Organization']
        this.styleObject.color = "red"
        await actor.type.set(namedNode('http://xmlns.com/foaf/0.1/Organization'), namedNode('http://www.w3.org/ns/org#Organization'));
        break;
        case "Group":
        this.profile.types = ['http://xmlns.com/foaf/0.1/Group', 'http://www.w3.org/ns/org#Group']
        this.styleObject.color = "green"
        await actor.type.set(namedNode('http://xmlns.com/foaf/0.1/Group'), namedNode('http://www.w3.org/ns/org#Group'));
        break;
        case "Person":
        this.profile.types = ['http://schema.org/Person', 'http://xmlns.com/foaf/0.1/Person']
        this.styleObject.color = "blue"
        await actor.type.set(namedNode('http://xmlns.com/foaf/0.1/Person'), namedNode('http://schema.org/Person'));
        break;
        case "Project":
        this.profile.types = ['http://xmlns.com/foaf/0.1/Project', 'http://usefulinc.com/ns/doap#Project']
        this.styleObject.color = "grey"
        await actor.type.set(namedNode('http://xmlns.com/foaf/0.1/Project'), namedNode('http://usefulinc.com/ns/doap#Project'));
        break;
        case "Collection":
        this.profile.types = ['https://schema.org/Collection', 'https://www.w3.org/ns/activitystreams#Collection']
        this.styleObject.color = "purple"
        await actor.type.set(namedNode('https://schema.org/Collection'), namedNode('https://www.w3.org/ns/activitystreams#Collection'));
        break;

        default:
        console.log("Contact the support, No action known for ",e.name)

      }

      //  this.profile.types = e.classes
    }
  },
  watch:{
    profile(){
      console.log("watch profile", this.profile)
    }
  },
  computed:{
    profile:{
      get: function() { return this.$store.state.profile.profile},
      set: function(p) {this.$store.commit('profile/SetProfile', p)}
    },
  }
}
</script>
