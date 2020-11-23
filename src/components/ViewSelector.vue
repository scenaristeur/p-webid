<template>
  <div class="view-selector">


    <hr>
    <b-card
    title="Many manners to view the same thing"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    >
    <b-card-text>
      <b-form-group
      id="fieldset-1"
      description="Select another view"
      label="Act as a"
      label-for="selector-view">
      <b-form-select id="selector-view" v-model="affichage.view"
      :options="affichage.views"
      v-on:change="$emit('viewSelected', affichage.view)"
      ></b-form-select>
    </b-form-group>
  </b-card-text>

  <b-card-text>
    <b-form-group
    id="fieldset-1"
    description="Select another template"
    label="in the style of"
    label-for="selector-template">
    <b-form-select id="selector-template" v-model="affichage.template"
    :options="affichage.templates"
    v-on:change="$emit('templateSelected', affichage.template)"
    ></b-form-select>
  </b-form-group>
</b-card-text>

<!-- <b-button href="#" variant="primary">Done</b-button> -->
</b-card>

<!-- View: {{ affichage.view }}
<div>

<div class="mt-3">Selected: <br><small>{{ affichage.view }}</small></div>
</div>
<hr>
Template: {{ affichage.template}} -->




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
      affichage: {
        views:["Person", "Organization", "Group", "Project", "Collection","..." ],
        templates:["Solid","FB", "LinkedIn", "Insta", "Tweeter", "..."]
      },
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
