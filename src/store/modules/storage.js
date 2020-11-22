import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const auth = solid.auth
const fc   = new SolidFileClient(auth)

const state = {
  webId: null,
  storage: null,
  folder: {},
  file: null,
  content: null
}

const mutations = {
  setWebId(state, webId){
    console.log("mut",webId)
    state.webId = webId
  },
  setStorage(state, storage){
    console.log("mut",storage)
    state.storage = storage
  },
  setFolder (state, f) {
    //  console.log("folder",f)
    //  console.log(f.links.meta)
    state.folder = f
  },
  setFile (state, f) {
    state.file = f
  },
  setContent (state, c) {
    state.content = c
  },
}

const actions = {
  async  setWebId(context, webId){
    console.log("action",webId)
    context.commit('setWebId',webId)
    let storage = null
    if (webId != null){
      storage =  await solid.data[webId].storage
      context.commit('setStorage', `${storage}`)
    }else{
      context.commit('setStorage', null)
    }
  },

  async updateFolder (context, url) {
    let folder = await fc.readFolder(url)
    console.log(folder)
    context.commit('setFolder', folder)
    /*  let folder = await fc.readFolder(url,  {links:"include_possible"})
    let acl = ""
    try{
    acl = await fc.readFile(folder.links.acl)
  }catch(e){
  console.log(e)
  acl = null
}
folder.acl = acl*/
//    console.log("update", folder)

},
async updateFile (context, file) {
  console.log("FILE", file)
  context.commit('setFile', file)
  context.commit('setContent', await fc.readFile(file.url))
  /*
  file.content = await fc.readFile(file.url, {links:"include_possible"})
  let acl = ""
  try{
  acl = await fc.readFile(file.links.acl)
}catch(e){
//  console.log(e)
acl = null
}
file.acl = acl*/
},
}

export default {
  namespaced: true,
  state,
  //getters,
  actions,
  mutations
}
