import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const auth = solid.auth
const fc   = new SolidFileClient(auth)

const state = {
  webId: null,
}
const mutations= {
  setWebId(state, webId){
    console.log("mut",webId)
    state.webId = webId
  },
}

const actions = {
  async setWebId(context, webId){
    console.log("action",webId)
    context.commit('setWebId',webId)
    let storage = null
    if (webId != null){
      storage =  await solid.data[webId].storage
      context.commit('storage/setStorage', `${storage}`, { root: true })
    }else{
      context.commit('storage/setStorage', null, { root: true })

    }
  },
}

export default {
  namespaced: true,
  state,
  //getters,
  actions,
  mutations
}
