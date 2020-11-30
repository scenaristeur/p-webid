<template>
  <span>
    <!-- <b-button title="add friend" size="sm" variant="outline-info" :to="'/?add_group='+webId">
      <b-icon-person-plus></b-icon-person-plus>
    </b-button> -->
    <router-link :to="'/?url='+webId" class="text-info">{{ name }}</router-link>
  </span>
</template>

<script>

export default {
  name: 'UserNameLite',
  props:['webId'],
  data() {
    return {
    name:""
    }
  },
  created(){
  this.name = this.webId.split('/').slice(2,3)[0]
  },
  watch: {
    async webId (webId) {
      this.name = webId.split('/').slice(2,3)[0]
    }
}
}
</script>
