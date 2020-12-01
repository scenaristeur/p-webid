<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="i in items" :key="'dyn-tab-' + i.id" :title="i.name">
        {{ i.name }}
          <b-button size="sm" variant="danger" class="float-right" @click="closeItem(i)">
            Close {{ block.type }}
          </b-button>
        </b-tab>

        <b-button v-for="fo in folder.folders" :key="fo.url">{{fo.name}}</b-button>

        <b-list-group>
  <b-list-group-item v-for="fi in folder.files.slice().reverse()" :key="fi.url">{{fi.name}}</b-list-group-item>
</b-list-group>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template #tabs-end>
          <b-nav-item role="presentation" @click.prevent="newItem" href="#"><b>+</b></b-nav-item>
        </template>

        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            Il n'y a aucun {{ block.type }} ouvert<br>
            Ouvrez un nouveau {{ block.type }} en cliquant sur le bouton <b>+</b> juste au dessus.
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
  name: 'List',
  props: ['url', 'block'],
  // components:{
  //   'ViewSelector': () => import('@/components/ViewSelector.vue'),
  // },
  async created(){

this.update()
  },
  data: function(){
    return {
      items: [],
      itemCounter: 0,
      folder: {folders: [], files:[]}
    }
  },
  methods: {
    closeItem(x) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] === x) {
          this.items.splice(i, 1)
        }
      }
    },
    async newItem() {
      let item = {id: this.itemCounter, name: this.block.type+"#_"+this.itemCounter, block: this.block}
      item = await this.$add(item)
      console.log(item)
      this.items.push(item)
      this.itemCounter++
      this.$router.push({path:'/edit', query: {item: item}})
    },
    async update(){
    //  console.log("BLOCK",this.block)
      this.webId = this.$store.state.profile.profile.webId
      this.block.url = this.url
      this.block.storage = await this.$getStorage(this.url)
      this.block.path = this.block.storage+this.block.type+"/"
      this.folder = await this.$update(this.block)
    //  console.log(this.folder)
    }

  },
  watch:{
    webId(){
      console.log("watch webid", this.webId)
    },
    url(){
      this.update()
    },
    block(){
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
