<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="p in projets" :key="'dyn-tab-' + p" :title="'Projet ' + p">
          Projet {{ p }}
          <b-button size="sm" variant="danger" class="float-right" @click="closeProjet(p)">
            Close projet
          </b-button>
        </b-tab>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newProjet" href="#"><b>+</b></b-nav-item>
        </template>

        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            Il n'y a aucun projet ouvert<br>
            Ouvrez un nouveau projet encliquant sur le bouton <b>+</b> juste au dessus.
          </div>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Projets',
  // components:{
  //   'ViewSelector': () => import('@/components/ViewSelector.vue'),
  // },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
  },
  data: function(){
    return {
      projets: [],
      projetCounter: 0
    }
  },
  methods: {
    closeProjet(x) {
      for (let i = 0; i < this.projets.length; i++) {
        if (this.projets[i] === x) {
          this.projets.splice(i, 1)
        }
      }
    },
    newProjet() {
      this.projets.push(this.projetCounter++)
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
