<template>
  <div class="webid row ">
    <div class="col-lg-5">
        <a v-bind:href="webId" target="_blank">{{ webId }}</a>
      <b-alert class="row" variant="success" show>
        <EditableDiv v-model="profile.name" placeholder="your NAME" @input="update"></EditableDiv>
        <ul>
          <small>
            <li><u>is a</u></li>
            <li  v-if="profile.role">rdf:type</li>
          </small>
        </ul>
        <EditableDiv v-model="profile.role" placeholder="your ROLE" @input="update"></EditableDiv>
        <ul><small>
          <li>at</li>
          <li v-if="profile.organization"><code>@prefix org: {{ org }}. <br>
            org:subOrganizationOf</code></li>
          </small>
        </ul>
        <EditableDiv v-model="profile.organization" placeholder="your ORGANIZATION" @input="update"></EditableDiv>.
      </b-alert>

      <small>
        <b-alert class="row" variant="success" show>
          <ul>
            <li>
              Located at
            </li>
            <li  v-if="profile.locality">
              <code>{{ location }}</code>
            </li>
          </ul>
          <EditableDiv v-model="profile.locality" placeholder="your LOCALITY" @input="update"></EditableDiv>
          <ul>
            <li>in</li>
            <li  v-if="profile.country"><code>{{ org }}<br>
            </code></li>
          </ul>
          <EditableDiv v-model="profile.country" placeholder="your COUNTRY" @input="update"></EditableDiv>.
        </b-alert>
        <!--          (todo see js console BUG #1)-->
      </small>
    </div>
    <div class="col-lg-5">
      <div class="media">
        <a class="pull-left" href="#">
          <img class="media-object dp img-circle" :src="profile.photo" style="width: 100px;height:100px;">
        </a>

      </div>
      <!--  <EditableDiv   v-if="profile.organization" v-model="profile.organization" placeholder="YOUR ORGANIZATION" @input="update">
    </EditableDiv>
    org:hasMember <small><i>(Todo : getmembers())</i></small>-->
  </div>


</div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'PersonView',
  components: {
    'EditableDiv': () => import('@/components/basic/EditableDiv'),
  },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
  },
  data() {
    return {
      location: "<http://schema.org/location>",
      org: "<http://www.w3.org/ns/org#>"
    }
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
    profile(){return this.$store.state.profile.profile},
    profile_url:{
      get: function() { return this.$store.state.profile.storage+"public/salut/profile.ttl"},
      set: function() {}
    }

  },
  methods: {
    update(){
      console.log(this.profile)
      this.$store.dispatch('solid/updateProfile', this.profile)
    },

  },
}
</script>
<style scoped>
.profile{
  text-align: left;
}
.media
{
  /*box-shadow:0px 0px 4px -2px #000;*/
  margin: 20px 0;
  padding:30px;
}
.dp
{
  border:10px solid #eee;
  transition: all 0.2s ease-in-out;
}
.dp:hover
{
  border:2px solid #eee;
  transform:rotate(360deg);
  -ms-transform:rotate(360deg);
  -webkit-transform:rotate(360deg);
  /*-webkit-font-smoothing:antialiased;*/
}
</style>
