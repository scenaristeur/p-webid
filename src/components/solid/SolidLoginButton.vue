<!-- <i18n src="@/common/locales.json"></i18n> -->
<template>
  <div class="solid-login">
    <!-- <b-button variant="success" v-if="webId == null" @click="login">{{ $t('login') }}</b-button>
    <b-button variant="danger" v-else @click="logout">{{ $t('logout') }}</b-button> -->
    <b-button variant="success" v-if="webId == null" @click="login">Login</b-button>
    <b-button variant="outline-warning" size="sm" v-else @click="logout">Logout</b-button>
  </div>
</template>

<script>
const auth = solid.auth
//import auth from 'solid-auth-client';
import LoginMixin from '@/mixins/LoginMixin'
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'SolidLogin',
  mixins: [LoginMixin/*, profileMixin*/],
  computed:{
    webId() {
      return this.$store.state.profile.profile.webId
    }
  },
  methods: {
    login(){
      console.log("login", this.webId)
      this.popupLogin()
    },
    async logout(){
      await  auth.logout()
    },

  }
}
</script>
