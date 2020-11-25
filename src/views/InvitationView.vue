<template>
  <div class="container">
    <b-button variant="success">Join `{{ name }}` group</b-button> <b-button variant="outline-success">Create a Group</b-button>
    <b-card-group deck>
      <b-card
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 ">
      <b-card-title>{{ name }}</b-card-title>
      <b-button variant="success">Join</b-button>
      <b-card-text>
        <i>{{ purpose }}</i>
      </b-card-text>
      <b-card-text>
        <b-button :to="'/?invitation='+parent" class="sm" variant="primary">Parent</b-button>
      </b-card-text>
      <small>
        <Date v-if="created" :dateIso="created"/>
        <UserName v-if="maker" :webId="maker" />
        {{ types }}<br>
      </small>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>


    <b-card
    title="Sub Groups"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <b-button href="#" variant="outline-success">Add a subgroup</b-button>
    <b-card-text>
      <b-list-group>
        <b-list-group-item v-for="(g, i) in subgroups" :key="'g_'+i" :to="'/?invitation='+g">{{ g }}</b-list-group-item>
      </b-list-group>
    </b-card-text>

  </b-card>

  <b-card   title="Members"
  img-src="https://picsum.photos/600/300/?image=25"
  img-alt="Image"
  img-top
  tag="article"
  style="max-width: 20rem;"
  class="mb-2"
  >
  <b-card-text>
    <UserName v-for="(m, j) in members" :key="j" :webId="m" />
  </b-card-text>
  <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>

<b-card
title="More"
img-src="https://picsum.photos/600/300/?image=25"
img-alt="Image"
img-top
tag="article"
style="max-width: 20rem;"
class="mb-2">
<b-card-text>
  Activités : []<br>
  Projets: []<br>
  Competences Skills: []<br>
  Redevabilités: []<br>
  Inbox: {{ inbox}}<br>
</b-card-text>
<!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>
</b-card-group>

Invitation : {{ this.invitation }}
<hr>
{{ things }}
<hr>


<a v-bind:href="webId" target="_blank">{{ webId }}</a>
</div>
</template>

<script>
import store from '@/store'
import { getSolidDataset,
  //saveSolidDatasetAt,
  getThingAll,
  getThing,
  getStringNoLocale,
  getUrlAll,
  getUrl
} from "@inrupt/solid-client";

import { FOAF, VCARD, DCTERMS, RDF } from "@inrupt/vocab-common-rdf";

export default {
  store,
  name: 'InvitationView',
  props: ['invitation'],
  components:{
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date'),
  },
  async created(){
    //  this.webId = this.$store.state.profile.profile.webId
    this.updateInvitation()
  },
  data: function(){
    return {
      things: undefined,
      name: undefined,
      purpose: undefined,
      subgroups: undefined,
      members: undefined,
      inbox: undefined,
      parent: undefined,
      created: undefined,
      maker: undefined,
      types: undefined
    }
  },
  methods: {
    async updateInvitation(){
      const dataset = await getSolidDataset(this.invitation);
      this.things = getThingAll(dataset, this.invitation);
      this.thing = this.things[0]
      this.name = getStringNoLocale(this.thing, VCARD.fn);
      this.types = getUrl(this.thing, RDF.type);
      this.purpose = getStringNoLocale(this.thing, 'http://www.w3.org/ns/org#purpose');
      this.subgroups = getUrlAll(this.thing, 'http://www.w3.org/ns/org#hasSubOrganization');
      this.members = getUrlAll(this.thing, VCARD.hasMember);
      this.inbox = getUrl(this.thing, 'http://www.w3.org/ns/ldp#inbox');
      this.parent = getUrl(this.thing, 'http://www.w3.org/ns/org#subOrganizationOf');
      this.created = getStringNoLocale(this.thing, DCTERMS.created);
      this.maker = getUrl(this.thing, FOAF.maker);
    }
  },
  watch:{
    $route(to, from) {
      this.updateInvitation()
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
