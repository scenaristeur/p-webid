<template>
  <div class="webid">
    Wiki {{ url }}
    <br>
    <p>
      La fonctionnalité de création d'article sera bientôt opérationnelle.<br>
      En attendant, vous pouvez utiliser <a href="https://scenaristeur.github.io/solid-vue-panes/post" target="_blank">Popock post</a>
      et notamment l'outil Dokieli</p>

      <!-- derniers articles / dokieli ?
      <a v-bind:href="webId" target="_blank">{{ webId }}</a> -->
    </div>
  </template>

  <script>
  import store from '@/store'
  import { namedNode } from '@rdfjs/data-model'
  import GroupMixin from '@/mixins/GroupMixin.js'

  export default {
    store,
    name: 'Wiki',
    props: ['url'],
    mixins: [GroupMixin],
    // components:{
    //   'ViewSelector': () => import('@/components/ViewSelector.vue'),
    // },
    async created(){
      this.webId = this.$store.state.profile.profile.webId
      this.update()
    },
    // data: function(){
    //   return {
    //     //  selected: ""
    //   }
    // },
    methods: {
      async update(){
        console.log(this.url)
        let storage = await this.getStorage(this.url)
        this.storage = `${storage}`+'wiki/'
        console.log(this.storage)
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
