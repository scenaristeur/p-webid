(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[3],{

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/modules/solid.js


external_Vue_default.a.use(vuex_esm["a" /* default */]);
const auth = solid.auth;
const fc = new SolidFileClient(auth);
const state = {
  webId: null
};
const mutations = {
  setWebId(state, webId) {
    console.log("mut", webId);
    state.webId = webId;
  }

};
const actions = {
  async setWebId(context, webId) {
    console.log("action", webId);
    context.commit('setWebId', webId);
    let storage = null;

    if (webId != null) {
      storage = await solid.data[webId].storage;
      context.commit('storage/setStorage', `${storage}`, {
        root: true
      });
    } else {
      context.commit('storage/setStorage', null, {
        root: true
      });
    }
  }

};
/* harmony default export */ var modules_solid = ({
  namespaced: true,
  state,
  //getters,
  actions,
  mutations
});
// CONCATENATED MODULE: ./src/store/modules/storage.js


external_Vue_default.a.use(vuex_esm["a" /* default */]);
const storage_auth = solid.auth;
const storage_fc = new SolidFileClient(storage_auth);
const storage_state = {
  webId: null,
  storage: null,
  folder: {},
  file: null,
  content: null
};
const storage_mutations = {
  setWebId(state, webId) {
    console.log("mut", webId);
    state.webId = webId;
  },

  setStorage(state, storage) {
    console.log("mut", storage);
    state.storage = storage;
  },

  setFolder(state, f) {
    //  console.log("folder",f)
    //  console.log(f.links.meta)
    state.folder = f;
  },

  setFile(state, f) {
    state.file = f;
  },

  setContent(state, c) {
    state.content = c;
  }

};
const storage_actions = {
  async setWebId(context, webId) {
    console.log("action", webId);
    context.commit('setWebId', webId);
    let storage = null;

    if (webId != null) {
      storage = await solid.data[webId].storage;
      context.commit('setStorage', `${storage}`);
    } else {
      context.commit('setStorage', null);
    }
  },

  async updateFolder(context, url) {
    let folder = await storage_fc.readFolder(url);
    console.log(folder);
    context.commit('setFolder', folder);
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

  async updateFile(context, file) {
    console.log("FILE", file);
    context.commit('setFile', file);
    context.commit('setContent', await storage_fc.readFile(file.url));
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
  }

};
/* harmony default export */ var storage = ({
  namespaced: true,
  state: storage_state,
  //getters,
  actions: storage_actions,
  mutations: storage_mutations
});
// CONCATENATED MODULE: ./src/store/index.js



 // import parle from './modules/parle'
// import chat from './modules/chat'
// import websocket from './modules/websocket'
// import crud from './modules/crud'
// import inbox from './modules/inbox'
// import groups from './modules/groups'
// import agora from './modules/agora'
// import gouvernance from './modules/gouvernance'
// import workspaces from './modules/workspaces'
// import semapps from './modules/semapps'
// import migration from './modules/migration'

external_Vue_default.a.use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = __webpack_exports__["a"] = (new vuex_esm["a" /* default */].Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    solid: modules_solid,
    storage: storage
    /*websocket, parle, chat, crud, inbox, groups, agora, gouvernance, workspaces, semapps, migration*/

  }
}));

/***/ }),

/***/ "f2ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"787e6bf4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Login.vue?vue&type=template&id=7b199419&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[(_vm.webId == null)?_c('b-button',{attrs:{"variant":"success"},on:{"click":_vm.login}},[_vm._v("Login")]):_c('b-button',{attrs:{"variant":"danger"},on:{"click":_vm.logout}},[_vm._v("Logout")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Login.vue?vue&type=template&id=7b199419&shadow

// EXTERNAL MODULE: ./src/store/index.js + 2 modules
var store = __webpack_require__("4360");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Login.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//

const auth = solid.auth;
const popUri = 'https://solidcommunity.net/common/popup.html';
/* harmony default export */ var Loginvue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'Login',

  created() {
    this.webId = this.$store.state.webId;
    solid.auth.trackSession(session => {
      if (!session) this.webId = null;else this.webId = session.webId;
    });
  },

  methods: {
    async login() {
      let session = await auth.currentSession();

      if (!session) {
        session = await auth.popupLogin({
          popupUri: popUri
        });
      }

      console.log(`Logged in as ${session.webId}.`);
    },

    logout() {
      auth.logout();
    }

  },
  watch: {
    webId() {
      console.log("watch webid", this.webId);
    }

  },
  computed: {
    webId: {
      get: function () {
        return this.$store.state.solid.webId;
      },
      set: function (value) {
        this.$store.dispatch('solid/setWebId', value);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Login.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Loginvue_type_script_lang_js_shadow = (Loginvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Login.vue?shadow





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Loginshadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=popock.3.js.map