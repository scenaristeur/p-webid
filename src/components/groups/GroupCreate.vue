<template>
  <div v-if="profile.webId != null" class="group-create container">
    <b-form-group>
      <b-form-input id="name" size="lg" class="m-3" v-model="group.name" placeholder="Nom du groupe"></b-form-input>
      <b-form-textarea id="purpose"  size="lg" class="m-3" v-model="group.purpose" placeholder="Raison d'être"></b-form-textarea>
      <b-form-input id="parent"  size="lg" class="m-3" v-model="group.super" placeholder="Super groupe"></b-form-input>

      <div>
        <b-form-select v-model="confident" :options="options_confident"  size="lg" class="m-3"></b-form-select>
        <div class="mt-3">Selected: <strong>{{ confident }}</strong></div>
      </div>

      <b-form-input id="url"  size="lg" class="m-3" v-model="group.path" placeholder="Chemin"></b-form-input>
    </b-form-group>
    <b-button @click="add" variant="primary">Créer</b-button>


  </div>
</template>

<script>

export default {
  name: 'GroupCreate',
  data() {
    return {
      confident:"public",
      group:{},
          options_confident: [
        { value: 'public', text: 'Public. Tout le monde peut voir qui est dans le groupe et ce qui est publié' },
        { value: 'private', text: 'Privé. Seuls les membres peuvent voir qui est dans le groupe et ce qui est publié' }]
      }
    },
    created(){
      this.group.url = this.$route.params.url != undefined ? this.$route.params.url : null
      this.group.super = this.$route.params.super != undefined ? this.$route.params.super : null
      this.profile = this.$store.state.profile.profile
      this.update()
    },
    watch: {
      '$route' (to) {
        this.group.url = to.params.url != undefined ? to.params.url : null
        this.update()
      },
      profile(){
        console.log("profile", this.profile)
        this.update()
      },
      confident(){
        this.group.confident = this.confident
        this.update()
      }
    },
    methods:{
      update(){
        this.group.path = this.profile.storage+this.confident+"/groups/"
        console.log(this.group)
      },
      add(){
        this.group.maker = this.profile.webId
        this.$groupCreate(this.group)
      }
    },
    computed:{
      profile: {
        get: function() { return this.$store.state.profile.profile},
        set: function() {}
      },
    },
  }
  </script>
