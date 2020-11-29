<template>
  <div class="container">
    Cockpit (spoggy-group)



    <div>
      <b-tabs content-class="mt-3" fill>
        <b-tab v-for="b in blocks" :key="b.name">
          <template #title>
            <!-- <b-spinner type="grow" small></b-spinner> I'm <i>custom</i>-->
            {{b.name}}
            <b-dropdown id="dropdown-1" variant="outilne-primary" class="m-md-2">
              <b-dropdown-item @click="add(b)">Ajouter</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>

          </template>
          <div class="scroll">      
            <div v-if="b.type=='Wiki'">
              <Wiki :url="url"/>
            </div>
            <div v-else v-html="b.description"> </div>
            <b>{{b.name}}</b> for {{ url }}.<br>
          </div>
        </b-tab>
      </b-tabs>
    </div>

    <Projets />
    <!--
    <div>
    <b-card no-body>
    <b-card-header header-tag="nav">
    <b-nav card-header tabs justified>
    <b-nav-item v-for="b in blocks" :key="b.name" :block="b">{{b.name}}</b-nav-item>
    <b-nav-item-dropdown
    :id="b.name"
    :text="b.name"
    toggle-class="nav-link-custom"
    @click="paneChange()"
    right
    v-for="b in blocks" :key="b.name" :block="b">
    <b-dropdown-item>One</b-dropdown-item>
    <b-dropdown-item>Two</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item>Three</b-dropdown-item>
  </b-nav-item-dropdown>
</b-nav>
</b-card-header>

<b-card-body class="text-center">
<b-card-title>Card Title</b-card-title>

<b-card-text>
With supporting text below as a natural lead-in to additional content.
</b-card-text>

<b-button variant="primary">Go somewhere</b-button>
</b-card-body>
</b-card>
</div>

<b-card-group deck>
<Generique v-for="b in blocks" :key="'g_'+b.name" :block="b" />
</b-card-group>-->
<a v-bind:href="webId" target="_blank">{{ webId }}</a>
</div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Cockpit',
  components:{
    //  'Generique': () => import('@/components/gouvernance/Generique.vue'),
    'Projets': () => import('@/components/gouvernance/Projets.vue'),
    'Wiki': () => import('@/components/gouvernance/Wiki.vue'),

  },
  props:['url'],
  async created(){
    this.webId = this.$store.state.profile.profile.webId
  },
  data: function(){
    return {
      blocks: [{type: "Action", name: "Mes prochaines actions"},
      {type: "Checklist", name: "CheckList", description: "Ce dont on a besoin pour terminer une action ou un projet. <br>   [[ voir spoggy-group pour l'ajout , checkbox]]"},
      {type: "Indicateur", name: "Indicateurs"},
      {type: "Reunion", name: "Réunions"},
      {type: "Wiki", name: "Wiki", description: "La fonctionnalité de création d'article sera bientôt opérationnelle. En attendant, vous pouvez utiliser <a href='https://scenaristeur.github.io/solid-vue-panes/post' target='_blank'>Popock post</a> et notamment l'outil Dokieli" }

    ],
  }
},
methods: {
  paneChange(p){
    console.log(p)
  },
  add(b){
    console.log("block", b)
  }
},
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
<style>
.scroll {
  overflow-y: scroll;
  min-width: 200px;
  height: 200px;
}
</style>
