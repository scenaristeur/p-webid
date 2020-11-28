<template>
  <div class="container">
    <div v-if="!members.includes(webId)">
      <b-button variant="success"  @click="join">Ask to join `{{ name }}` group</b-button>
      <b-button variant="success"  @click="accept">Accept invitation</b-button>
      <b-button variant="success"  @click="reject">Reject invitation</b-button>
    </div>

    <b-button variant="outline-success" @click="newGroup">Create a Group</b-button>


    <!-- <div v-if="webId != null">
    <GroupsToolbar :path="invitation"/>
    <GroupCreate v-on:created="initGroups" />
  </div>

  <div v-else>
  <SolidLoginButton />
</div> -->
<!-- <GroupsToolbar :path="invitation"/> -->
<GroupCreate v-on:created="initGroups" />

<b-card-group column>
  <b-card
  img-src="https://picsum.photos/600/300/?image=25"
  img-alt="Image"
  img-top
  tag="article"
  style="max-width: 40rem;min-width: 20rem;"
  class="mb-2 ">
  <b-card-title>{{ name }}</b-card-title>
  <!-- <InboxWidget v-if="members != undefined && members.includes(webId)" :inbox="inbox" /> -->



  <b-card-text>
    <i>{{ purpose }}</i>
  </b-card-text>
  <small>
    <Date v-if="created" :dateIso="created"/>
    <UserName v-if="maker" :webId="maker" />
    {{ types }}<br>
  </small>
  <b-button  v-if="!members.includes(webId)" variant="success" @click="join">Ask to join</b-button>


  <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>



<b-card
title="Sub Groups"
tag="article"
style="max-width: 40rem;min-width: 20rem;"
class="mb-2">
<b-button v-if="invitation != parent" :to="'/?invitation='+parent" class="sm" variant="outline-success">Super Group ({{parent | localname}})</b-button>
<b-button href="#" variant="outline-success">Add a subgroup</b-button>
<b-card-text>
  <b-list-group>
    <b-list-group-item v-for="(g, i) in subgroups" :key="'g_'+i" :to="'/?invitation='+g">

      <Item :item="g" />
    </b-list-group-item>
  </b-list-group>
</b-card-text>

</b-card>

<b-collapse id="collapse-members" class="mt-2">
  <!-- <b-card> -->
  <b-card   title="Members"
  tag="article"
  style="max-width: 40rem;min-width: 20rem;"
  class="mb-2"
  >
  <div v-if="members.includes(webId)">
    <b-button variant="success"  @click="invite">Invite</b-button>
  </div>
  <b-card-text>
    <UserName v-for="(m, j) in members" :key="j" :webId="m" />
  </b-card-text>
  <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>
<!-- <p class="card-text">Collapse contents Here</p>
<b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
<b-collapse id="collapse-1-inner" class="mt-2">
<b-card>Hello!</b-card>
</b-collapse> -->
<!-- </b-card> -->
</b-collapse>






<div>
  <b-button v-b-toggle.collapse-members variant="primary"><b-icon icon="people"></b-icon> {{ members.length}}</b-button>
  <Inbox v-if="members.includes(webId)" :inbox="inbox" />

</div>


<Cockpit :url="invitation"/>


<b-card
title="Domaines"
tag="article"
style="max-width: 40rem;min-width: 20rem;"
class="mb-2">
<b-button href="#" variant="outline-success">Add a domain</b-button>
<b-card-text>
  <b-list-group>
    <b-list-group-item v-for="(d, i) in domains" :key="'d_'+i" :to="'/?url'+d">{{ d }}</b-list-group-item>
  </b-list-group>
</b-card-text>

</b-card>

<b-card
title="More"
img-src="https://picsum.photos/600/300/?image=25"
img-alt="Image"
img-top
tag="article"
style="max-width: 40rem;min-width: 20rem;"
class="mb-2">
<b-card-text>
  Activités : []<br>
  Projets: []<br>
  Competences Skills: []<br>
  Redevabilités: []
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
  getUrl } from "@inrupt/solid-client";

  import { FOAF, VCARD, DCTERMS, RDF } from "@inrupt/vocab-common-rdf";
  import GroupMixin from '@/mixins/GroupMixin.js'

  export default {
    store,
    name: 'InvitationView',
    props: ['invitation'],
    mixins: [GroupMixin],
    components:{
      'UserName': () => import('@/components/basic/UserName'),
      'Date': () => import('@/components/basic/Date'),
      //  'GroupsToolbar': () => import('@/components/groups/GroupsToolbar'),
      'GroupCreate': () => import('@/components/groups/GroupCreate'),
      //  'InboxWidget': () => import('@/components/inbox/InboxWidget'),
      'Inbox': () => import('@/components/inbox/Inbox'),
      'Item': () => import('@/components/basic/Item'),
      'Cockpit': () => import('@/components/gouvernance/Cockpit.vue'),


    },
    async created(){
      this.$store.state.profile
      this.webId = this.$store.state.profile.profile.webId
      this.updateInvitation()
    },
    data: function(){
      return {
        things: undefined,
        name: undefined,
        purpose: undefined,
        subgroups: undefined,
        domains: [],
        members: [],
        inbox: undefined,
        parent: undefined,
        created: undefined,
        maker: undefined,
        types: undefined
      }
    },
    methods: {
      newGroup(){
        this.$bvModal.show("new-group-modal")
      },
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

      },
      async getName(s){
        const s_dataset = await getSolidDataset(s);
        let things = getThingAll(s_dataset, );
        let thing = things[0]
        let name = getStringNoLocale(thing, VCARD.fn);
        let sg = {url:s, name: name}
        console.log(sg)
        return sg
      },
      async  initGroups(url = this.url){
        console.log(url)
        if (this.storage != null && this.storage.length > 0){
          console.log("init groups : ",url)
          this.folder = await fc.readFolder(url)
          console.log("Folder : ", this.folder)
        }
      },
    },
    watch:{
      $route(to, from) {
        this.updateInvitation()
      },
      webId(){
        console.log("watch webid", this.webId)
        this.workspace = {}
        this.workspace.pod = this.webId
        this.workspace.name = 'gouvernance'
        this.workspace.path = this.$store.state.profile.profile.storage+"public/gouvernace/"
        console.log("WORKSPACE", this.workspace)
        this.$store.commit('workspaces/setCurrentWorkspace', this.workspace)
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
