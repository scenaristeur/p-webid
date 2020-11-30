<template>
  <div class="webid">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">Solid Groups</b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="webId != null">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-button variant="light">
                <b-icon-plus></b-icon-plus>
              </b-button>
            </template>
            <h3>Créer</h3>
            <b-dropdown-item to="/groupe_create">Groupe</b-dropdown-item>
            <!-- <b-dropdown-item to="/tension_create">Tension</b-dropdown-item> -->
            <!-- <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
          </b-nav-item-dropdown>
          <SolidLoginButton v-else />
        </b-navbar-nav>


        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <SolidLoginButton v-if="webId != null" />


          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'NavBar',
  components:{
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
  },
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
<style>
.color-primary {
  color: #00fac4;
}
</style>
