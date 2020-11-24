<template>
  <div class="home">
    <div v-if="url == undefined">
      <img alt="Vue logo" src="../assets/logo.png">
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
  },
  data() {
    return {
      url: undefined,
      things: [],
      tests: [
        {name: "profile", url: 'https://spoggy-test7.solidcommunity.net/profile/card#me'},
        {name: "blog", url: 'https://spoggy-test.solidcommunity.net/public/blog/2020-11-03.ttl'},
        {name: "graphs", url: "https://spoggy.solidcommunity.net/public/Graphs/CollaborativeGraph.ttl"}]
      }
    },
    created(){
      this.$route.query.url != undefined ? this.updateUrl(this.$route.query.url) : ""
      //  this.login()
    },
    methods: {
      test(url) {
        console.log(url)
        this.$router.push({ path: '/', query: { url: url } })
      },
      updateUrl(url){
        console.log("URL",url)
        this.url = url
        this.fetch();
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
      async fetch() {
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
      }

    },
    watch: {
      $route(to, from) {
        // react to route changes...
        console.log(to)
        to.query.url != undefined ? this.updateUrl(to.query.url) : ""
      },
      thing(){

        this.fetch()

      }
    }
  }
  </script>
