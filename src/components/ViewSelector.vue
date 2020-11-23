<template>
  <div class="webid">
    View: {{ affichage.view }}
    <div>
      <b-form-group
      id="fieldset-1"
      description="Select another view"
      label="Change View"
      label-for="selector">
      <b-form-select id="selector" v-model="affichage.view"
      :options="affichage.views"
      v-on:change="$emit('selected', affichage.view)"
      ></b-form-select>
    </b-form-group>
    <div class="mt-3">Selected: <br><small>{{ affichage.view }}</small></div>
  </div>
  <hr>
  Template: {{ affichage.template}}
</div>
</template>

<script>
import store from '../store'

export default {
  store,
  name: 'ViewSelector',
  async created(){
    this.webId = this.$store.state.profile.profile.webId
  },
  data: function(){
    return {
      affichage: {views:["Person", "Organization", "Group", "Project", "Collection","..." ],
      templates:["FB", "LinkedIn", "Insta", "Tweeter", "..."]},
    //  selected: ""
    }
  },
  methods: {
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
