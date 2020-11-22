import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webId: null,
    storage: null
  },
  mutations: {
    setWebId(state, webId){
      console.log("mut",webId)
      state.webId = webId
    },
    setStorage(state, storage){
      console.log("mut",storage)
      state.storage = storage
    }
  },
  actions: {
    async  setWebId(context, webId){
      console.log("action",webId)
      context.commit('setWebId',webId)
      let storage = null
      if (webId != null){
        storage =  await solid.data[webId].storage

      }
      context.commit('setStorage', storage)
    }
  },
  modules: {
  }
})
