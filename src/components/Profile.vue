<template>
  <div v-bind:style="styleObject">
    Profil: {{ profile.types }}
    <ViewSelector v-on:viewSelected="viewSelected" @templateSelected="templateSelected" />

    <PersonView v-if="shortType == 'Person'" />
    <GroupView v-if="shortType == 'Group'" />
    <OrganizationView v-if="shortType == 'Organization'" />
    <ProjectView v-if="shortType == 'Project'" />
    <NewView v-if="shortType == 'NewView'" />

    <div v-bind:class="[dynamicclass]">
      du texte <button > For test </button>
    </div>
    <div v-bind:class="isActive ? 'conditional-class' : ''">
      ... one two
      du texte <button > For test </button>
      [{{ isActive}}]
    </div>
    <!-- <div v-for="p in profile_types" :key="p.name">
    <b-button @click="changeType(p)">{{p.name}}</b-button>
  </div> -->
</div>
</template>

<script>
import store from '@/store'
import { namedNode } from "@rdfjs/data-model";
import { schema, foaf, doap, org } from "rdf-namespaces";
import ConverterMixin from '@/mixins/ConverterMixin'

export default {
  store,
  name: 'Profile',
  mixins: [ConverterMixin],
  components:{
    'ViewSelector': () => import('@/components/ViewSelector.vue'),
    'GroupView': () => import('@/components/views/GroupView.vue'),
    'OrganizationView': () => import('@/components/views/OrganizationView.vue'),
    'PersonView': () => import('@/components/views/PersonView.vue'),
    'ProjectView': () => import('@/components/views/ProjectView.vue'),
    'NewView': () => import('@/components/views/NewView.vue'),
  },
  created(){
    this.profile = this.$store.state.profile.profile
  },
  data: function () {
    return {
      isActive: false,
      dynamicclass : 'bg-primary',
      styleObject: {
        color: 'blue',
        fontSize: '13px'
      },
      shortType : "Person"
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
      this.shortType = selected
      if (selected != "..."){
        let t = {}
        t.name = selected
        this.changeType(t)
      }
    },
    templateSelected(selected){
      console.log("template",selected)
      // this.dynamic = selected
      this.isActive = !this.isActive
    },
    async changeType(e){

      //  console.log(e.name)
      //  console.log(this.profile.webId)
      const actor = solid.data[this.profile.webId];
      let css = ["bg-primary", "bg-arctic-water", "bg-lime-zest", "bg-flash-of-orange"]
      switch (e.name) {
        case "Organization":
        this.profile.types = ['http://xmlns.com/foaf/0.1/Organization', 'http://www.w3.org/ns/org#Organization']
        this.styleObject.color = "red"
        this.dynamicclass = css[1]
        await actor.type.set(namedNode('http://xmlns.com/foaf/0.1/Organization'), namedNode('http://www.w3.org/ns/org#Organization'));
        break;
        case "Group":
        this.profile.types = ['http://xmlns.com/foaf/0.1/Group', 'http://www.w3.org/ns/org#Group']
        this.styleObject.color = "green"
        this.dynamicclass = css[3]
        await actor.type.set(namedNode('http://xmlns.com/foaf/0.1/Group'), namedNode('http://www.w3.org/ns/org#Group'));
        break;
        case "Person":
        this.profile.types = ['http://schema.org/Person', 'http://xmlns.com/foaf/0.1/Person']
        this.styleObject.color = "blue"
        this.dynamicclass = css[0]
        await actor.type.set(namedNode('http://xmlns.com/foaf/0.1/Person'), namedNode('http://schema.org/Person'));
        break;
        case "Project":
        this.profile.types = ['http://xmlns.com/foaf/0.1/Project', 'http://usefulinc.com/ns/doap#Project']
        this.styleObject.color = "grey"
        this.dynamicclass = css[4]
        await actor.type.set(namedNode('http://xmlns.com/foaf/0.1/Project'), namedNode('http://usefulinc.com/ns/doap#Project'));
        break;
        case "Collection":
        this.profile.types = ['https://schema.org/Collection', 'https://www.w3.org/ns/activitystreams#Collection']
        this.styleObject.color = "purple"
        this.dynamicclass = css[5]
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
      console.log("types", this.profile.types)
      this.shortType = this.localname(this.profile.types.split(',')[0])
      console.log(this.shortType)
      let t = {}
      t.name = this.shortType
      this.changeType(t)

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
<!--// <style lang="scss">
//
// .conditional-class {
//   @import 'stylesheet.scss';
//   // color: 'blue';
//   // fontSize: '13px';
// }
//
// </style>-->

<style>
.color-primary {
  color: #00fac4;
}

.color-arctic-water {
  color: #00f6fa;
}

.color-lime-zest {
  color: #d9fa00;
}

.color-flash-of-orange {
  color: #faaa00;
}

.bg-primary {
  background-color: #00fac4;
}

.bg-arctic-water {
  background-color: #00f6fa;

}
/*-----------------------------------------------------------------------------------*/
/*  Buttons
/*-----------------------------------------------------------------------------------*/
.bg-arctic-water button{
  background-color:#ECEEF5;
  border:1px solid #CAD4E7;
  text-decoration:none;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  padding: 2px 3px 2px 2px;
  margin-right:5px;
}
.bg-arctic-water button:hover{
  border:1px solid #9DACCE;
  text-decoration:none;

}

.bg-lime-zest {
  background-color: #d9fa00;
}

.bg-flash-of-orange {
  background-color: #faaa00;
}
</style>
<style lang="scss">

.conditional-class {
  @import '@/templates/rose.scss';
}

</style>
