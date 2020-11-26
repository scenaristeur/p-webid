<template>
  <div class="webid">
  {{ name }}
  </div>
</template>

<script>
import store from '@/store'
import { getSolidDataset,
  //saveSolidDatasetAt,
  getThingAll,
  //getThing,
  getStringNoLocale,
     } from "@inrupt/solid-client";

  import { VCARD } from "@inrupt/vocab-common-rdf";

export default {
  store,
  props: ['item'],
  name: 'Item',

  async created(){
    this.webId = this.$store.state.profile.profile.webId
    const dataset = await getSolidDataset(this.item);
    this.things = getThingAll(dataset, this.item);
    this.thing = this.things[0]
    this.name = getStringNoLocale(this.thing, VCARD.fn);
  },
  data: function(){
    return {
       name: ""
    }
  },
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
