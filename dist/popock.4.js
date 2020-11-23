(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[4],{

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/modules/storage.js


external_Vue_default.a.use(vuex_esm["a" /* default */]);
const auth = solid.auth;
const fc = new SolidFileClient(auth);
const state = {
  folder: {},
  file: null,
  content: null
};
const mutations = {
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
const actions = {
  async updateFolder(context, url) {
    let folder = await fc.readFolder(url);
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
    context.commit('setContent', await fc.readFile(file.url));
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
  state,
  //getters,
  actions,
  mutations
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./src/store/modules/profile.js



external_Vue_default.a.use(vuex_esm["a" /* default */]);
const profile_auth = solid.auth;
const profile_fc = new SolidFileClient(profile_auth);
const profile_state = {
  profile: {
    webId: null,
    types: null
  }
};
const profile_mutations = {
  setProfile(state, profile) {
    console.log("mut", profile);
    state.profile = profile;
  }

};
const profile_actions = {
  async setWebId(context, webId) {
    console.log("action", webId);
    let profile = {};
    profile.webId = webId;

    if (webId != null) {
      let storage = await solid.data[webId].storage;
      let name = await solid.data[webId].name;
      let types = await solid.data[webId].type.values;
      profile.storage = `${storage}`;
      profile.name = `${name}`;
      profile.types = `${types}`;
    }

    context.commit('setProfile', profile);
  }

};
/* harmony default export */ var profile = ({
  namespaced: true,
  state: profile_state,
  //getters,
  actions: profile_actions,
  mutations: profile_mutations
});
// CONCATENATED MODULE: ./src/store/index.js

 //import solid from './modules/solid'


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
    storage: storage,
    profile: profile
    /*websocket, parle, chat, crud, inbox, groups, agora, gouvernance, workspaces, semapps, migration*/

  }
}));

/***/ }),

/***/ "f2ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38b803c4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Login.vue?vue&type=template&id=3468ee9e&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[(_vm.webId == null)?_c('b-button',{attrs:{"variant":"success"},on:{"click":_vm.login}},[_vm._v("Login")]):_c('b-button',{attrs:{"variant":"danger"},on:{"click":_vm.logout}},[_vm._v("Logout")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Login.vue?vue&type=template&id=3468ee9e&shadow

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
    this.webId = this.$store.state.profile.profile.webId;
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
        return this.$store.state.profile.profile.webId;
      },
      set: function (value) {
        this.$store.dispatch('profile/setWebId', value);
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
//# sourceMappingURL=popock.4.js.map