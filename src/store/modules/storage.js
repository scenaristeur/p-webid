import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const auth = solid.auth
const fc   = new SolidFileClient(auth)

const state = {
  folder: {},
  file: null,
  content: null
}

const mutations = {
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
