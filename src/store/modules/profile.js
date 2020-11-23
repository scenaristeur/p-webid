import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const auth = solid.auth
const fc   = new SolidFileClient(auth)

const state = {
  profile: {webId: null, types: null}
}
const mutations= {
  setProfile(state, profile){
    console.log("mut",profile)
    state.profile = profile
  },
}

const actions = {
  async setWebId(context, webId){
    console.log("action",webId)
    let profile = {}
    profile.webId = webId
    if (webId != null){
      let storage =  await solid.data[webId].storage
      let name =  await solid.data[webId].name
      let types =  await solid.data[webId].type.values
      profile.storage = `${storage}`
      profile.name = `${name}`
      profile.types = `${types}`
    }
     context.commit('setProfile',profile)
  },
}

export default {
  namespaced: true,
  state,
  //getters,
  actions,
  mutations
}
