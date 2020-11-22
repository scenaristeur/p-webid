import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    webId: null
  },
  mutations: {
    setWebId(state, webId){
      console.log(webId)
      state.webId = webId
    }
  },
  actions: {
  },
  modules: {
  }
})
