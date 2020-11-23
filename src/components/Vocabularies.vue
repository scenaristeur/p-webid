<template>
  <div class="vocab">
    {{ vocabs }}
  </div>
</template>

<script>
import store from '../store'

export default {
  store,
  name: 'Vocabularies',
  async created(){
    this.webId = this.$store.state.profile.profile.webId
  },
  data: function(){
    return {
      vocabs: [{name:"FOAF", uri:"http://xmlns.com/foaf/0.1/",  namespace:"http://xmlns.com/foaf/0.1/", homepage:"http://xmlns.com/foaf/spec/", lov: "https://lov.linkeddata.es/dataset/lov/vocabs/doap"}]
      //  selected: ""
    }
  },
    // methods: {
  // },
  // watch:{
  //   webId(){
  //     console.log("watch webid", this.webId)
  //   }
  // },
  computed:{
    webId:{
      get: function() { return this.$store.state.profile.profile.webId},
      set: function() {}
    },
  }
}
</script>
