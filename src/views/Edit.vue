<template>
  <div class="container">
    <h3>EDITION</h3>

    <b-input v-for="f in item.classe.fields" :key="f.predicate"  :ref="f.predicate" :name="f.predicate" :placeholder='f.label'></b-input>

    <b-button @click="add">Créer</b-button>
    
  </div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Edit',
  // components:{
  //   'ViewSelector': () => import('@/components/ViewSelector.vue'),
  // },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
    if(this.$route.query.item != undefined){
      this.item = this.$route.query.item
      this.item.classe = this.CLASSES[this.item.block.type]
      console.log("CLASSE",this.item)
    }
  },
  data: function(){
    return {
      item: {classe: {fields: []}}
    }
  },
  methods: {
    async   add(){
      console.log("add",this.$refs)
      this.item.thing = {}
      for (const ref of Object.values(this.$refs)) {
        let el = ref[0].$el
        console.log(el.name, el.value);
        this.item.thing[el.name] = el.value
      }
      console.log(this.item)
      //    this.tension.displayType = "Tension"
      // console.log("TODO use http://purl.org/vocab/lifecycle/schema#Task")
      // see https://vocab.org/lifecycle/schema#Task & https://noeldemartin.github.io/solid-focus/#
      this.item.thing.types = ["http://purl.org/vocab/lifecycle/schema#Task", "http://www.w3.org/ns/ldp#Resource"]
      this.item.thing.path = this.item.block.path
      let folder =  await this.$createFile(this.item.thing)
      console.log(folder)


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
.color-primary {
  color: #00fac4;
}
</style>
