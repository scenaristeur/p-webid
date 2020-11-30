<template>
  <div class="group-header">
    <b-alert show>Groupe géré par <UserNameLite :webId="group.maker" /></b-alert>

    <div class="container">
      <div>
        <b-card
        tag="article"
        class="mb-2"
        >
        <b-card-title>{{ group.name }}</b-card-title>
        <b-card-header class="mb-2">Groupe Public ·

          <b-button size="sm" variant="primary" @click="show_sub">
            {{ group.subgroups.length }} sous-groupes
          </b-button>
          <b-button size="sm" variant="primary"  @click="show_membres">
            {{group.members.length}} membres
          </b-button>

          <b-button size="sm" variant="primary" @click="inviter">
            + Inviter
          </b-button>
          <Inbox v-if="group.members.includes(webId)" :inbox="group.inbox" />
          <b-button size="sm"  v-if="group.parent != undefined == group.parent != group.url"
           :to="'/?invitation='+group.parent" class="sm" variant="outline-success">Super Group ({{group.parent | localname }})</b-button>

        </b-card-header>
        <b-card-text>
          {{ group.purpose }}
        </b-card-text>

        [[Domaines]], [[ REdevabilités]]

      </b-card>
    </div>

  </div>
</div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'GroupeHeader',
  props: ['group'],
  components:{
    'UserNameLite': () => import('@/components/basic/UserNameLite'),
    'Inbox': () => import('@/components/inbox/Inbox'),

  },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
  },
  // data: function(){
  //   return {
  //     //  selected: ""
  //   }
  // },
  methods: {
    inviter(){
      console.log("inviter, TODO")
    },
    show_membres(){
      console.log("show_membres, TODO")
    },
    show_sub(){
      console.log("show_sub, TODO")
    },
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
