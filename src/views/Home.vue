<template>
  <div class="home">
    <div v-if="invitation != undefined">
      <InvitationView :invitation="invitation" />
      {{ invitation }}
    </div>
    <div v-else-if="url == undefined">
      <img alt="Vue logo" src="../assets/logo.png">
<hr>

      <router-link to="/?invitation=https://spoggy-test7.solidcommunity.net/public/gouvernance/groups/Les_Grapheurs_Fous.ttl">Invitation Grapheurs Fous</router-link> |
      <router-link to="/?invitation=https://spoggy-test7.solidcommunity.net/public/gouvernance/groups/Solid_Users.ttl#this">Invitation Solid Users Group</router-link> |


      <router-link to="/?invitation=Choose the groupe where you want to invite someone or Create a Group">Inviter</router-link>
<hr>
      Login: <Login />
      <Profile />
      Webid: <Webid />
      Storage: <Storage />
      Todo : <Todo />

    </div>

    <div v-else>
      url : {{ url }}
      <b-card-group columns>
        <Generique v-for="thing in things " :key="thing.internal_url" :thing="thing" />
      </b-card-group>
      <b-button v-for="t in tests" :key="t.url" @click="test(t.url)" class="sm">show {{ t.name }}</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { Session } from '@inrupt/solid-client-authn-browser'
import { getSolidDataset,
  saveSolidDatasetAt,
  getThingAll,
  getStringNoLocale,
  getUrlAll
} from "@inrupt/solid-client";

import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";


export default {
  name: 'Home',
  components: {
    'Login': () => import('@/components/Login.vue'),
    'Webid': () => import('@/components/Webid.vue'),
    'Profile': () => import('@/components/Profile.vue'),
    'Todo': () => import('@/components/Todo.vue'),
    'Storage': () => import('@/components/Storage.vue'),
    'Generique': () => import('@/views/Generique.vue'),
    'InvitationView': () => import('@/views/InvitationView.vue'),

  },
  data() {
    return {
      url: undefined,
      invitation: undefined,
      things: [],
      group_things: [],
      tests: [
        {name: "profile", url: 'https://spoggy-test7.solidcommunity.net/profile/card#me'},
        {name: "blog", url: 'https://spoggy-test.solidcommunity.net/public/blog/2020-11-03.ttl'},
        {name: "graphs", url: "https://spoggy.solidcommunity.net/public/Graphs/CollaborativeGraph.ttl"}]
      }
    },
    created(){
      this.update()
      //  this.login()
    },
    methods: {
      update(){
        if (this.$route.query.url != undefined){
          this.url = this.$route.query.hash != undefined ? this.$route.query.url+this.$route.query.hash : this.$route.query.url

          this.updateUrl()
        }else{
          this.url = undefined
        }
        console.log(this.$route.query)
        if (this.$route.query.invitation != undefined){
          this.invitation = this.$route.query.hash != undefined ? this.$route.query.invitation+this.$route.query.hash : this.$route.query.invitation

          console.log(this.invitation)
          //  this.updateInvitation()
        }else{
            this.invitation = undefined
        }
      },
      test(url) {
        console.log(url)
        this.$router.push({ path: '/', query: { url: url } })
      },
      async updateUrl() {
        // 4. Make authenticated requests by passing `session.fetch` to solid-client functions.
        // The user must have logged in as someone with the appropriate access to the specified URL.
        //let session = this.session
        //console.log(session)
        // For example, the user must be someone with Read access to the specified URL.
        const dataset = await getSolidDataset(this.url);
        //console.log(dataset)
        //  console.log(dataset.quads)

        this.things = getThingAll(dataset, this.url);
        //console.log(this.things)

        // For example, the user must be someone with Write access to the specified URL.
        // const savedSolidDataset = await saveSolidDatasetAt(
        //   "https://docs-example.inrupt.net/profile/card",
        //   myChangedDataset, {
        //   fetch: this.session.fetch
        // });
      },
      async login(){
        // 1. Build a session
        this.session = new Session();

        // 2. Check if the page is being loaded after a redirect from the Identity
        // Provider. If it is the case, the login process is complete. The following
        // collects information in the URL where the Identity Provider redirected
        // the user, and updates session.info accordingly.
        // Remember: a session **cannot** be logged in before calling this.
        await this.session.handleIncomingRedirect(window.location.href);

        // 3. Start the Login Process if not already logged in.
        if (!this.session.info.isLoggedIn) {
          // Redirect the user to their identity provider:
          // (This **moves the user away from the current page**.)
          await this.session.login({
            // Specify the URL of the user's OIDC issuer.
            oidcIssuer: 'https://inrupt.net',
            // Specify the URL the system should redirect to after login,
            // e.g. the current page for a single-page app.
            redirectUrl: window.location.href,
          });
        }
      },

    },
    watch: {
      $route(to, from) {
        this.update()
      },
      thing(){
        this.updateUrl()
      }
    }
  }
  </script>
