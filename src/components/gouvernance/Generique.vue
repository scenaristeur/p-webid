<template>
  <div class="webid">

    <b-card no-body style="max-width: 18vw;"   class="mb-2">
      <b-card-header>{{ block.name }}</b-card-header>
      <b-list-group flush>
        <b-list-group-item href="#">Cras justo odio</b-list-group-item>
        <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
      </b-list-group>

      <b-card-body>
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
        consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
        mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
      </b-card-body>
    </b-card>
    <!-- <div>
    style="max-width: 25vw;"
    class="mb-2"
    <b-card
    tag="article"

    header-tag="header"
    footer="Card Footer"
    footer-tag="footer"
    >
    <b-card-header>{{ block.name }}</b-card-header>
    <b-card-text>
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </b-card-text>

  <b-button href="#" variant="primary">Go somewhere</b-button>
</b-card>
</div> -->
<a v-bind:href="webId" target="_blank">{{ webId }}</a>
</div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Generique',
  props: ['block'],
  // components:{
  //   'ViewSelector': () => import('@/components/ViewSelector.vue'),
  // },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
  },
  // data: function(){
  //   return {
  //     //  selected: ""
  //   }
  // },
  // methods: {
  // },
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
