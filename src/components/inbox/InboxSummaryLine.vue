<template>
  <div class="webid">
    <b-badge>{{type}}</b-badge>
    <b-badge variant="light"><UserName :webId="actor" /></b-badge>
    <span v-if="type == 'Offer'">
      <b-badge variant="success">accept</b-badge>
      <b-badge variant="danger">reject</b-badge>
    </span>
    <br>
    {{ summary }}
    <!-- <b-badge variant="dark">{{object}}</b-badge> -->

  </div>
</template>

<script>
import store from '@/store'
import { fetchDocument } from 'tripledoc';
import { rdf } from 'rdf-namespaces'
import ConverterMixin from '@/mixins/ConverterMixin.js'


export default {
  store,
  name: 'InboxSummaryLine',
  props: ['url'],
  mixins: [ConverterMixin],
  components:{
    'UserName': () => import('@/components/basic/UserName'),
  },
  async created(){
    this.webId = this.$store.state.profile.profile.webId
    this.update()
  },
  data: function(){
    return {
      summary: "",
      type: "",
      actor: "",
      object: ""
    }
  },
  methods: {
    async update(){
      // const dataset = await getSolidDataset(this.url);
      // this.thing = getThing(dataset, this.url+"#it");
      // console.log(this.thing)
      // this.summary = getStringNoLocale(this.thing, AS.summary);
      // console.log(this.summary)
      const messageDoc = await fetchDocument(this.url);
      let  subject = messageDoc.getSubject(this.url+"#it");
      this.summary = subject.getString('https://www.w3.org/ns/activitystreams#summary')
      this.actor = subject.getRef('https://www.w3.org/ns/activitystreams#actor')
      this.object = subject.getRef('https://www.w3.org/ns/activitystreams#object')
      this.type = this.localname(subject.getRef(rdf.type))
      // this.sender =   subject.getRef(schema.sender)
      // this.label =   subject.getString(rdfs.label)
      // this.dateSent =  subject.getLiteral(schema.dateSent)
      // this.text =  subject.getString(schema.text)
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
  }
}
</script>
