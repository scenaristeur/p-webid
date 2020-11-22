import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webId:"must change this webId"
  },
  mutations: {
    setWebId(state, webId){
      state.webId = webId
    }
  },
  actions: {
  },
  modules: {
  }
})
