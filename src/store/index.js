import Vue from 'vue'
import Vuex from 'vuex'
//import solid from './modules/solid'
import storage from './modules/storage'
import profile from './modules/profile'
// import parle from './modules/parle'
// import chat from './modules/chat'
// import websocket from './modules/websocket'
// import crud from './modules/crud'
// import inbox from './modules/inbox'
// import groups from './modules/groups'
// import agora from './modules/agora'
// import gouvernance from './modules/gouvernance'
import workspaces from './modules/workspaces'
// import semapps from './modules/semapps'
// import migration from './modules/migration'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { storage, profile, workspaces /*websocket, parle, chat, crud, inbox, groups, agora, gouvernance, workspaces, semapps, migration*/}
})
