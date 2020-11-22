(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[2],{

/***/ "1fa4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("76b4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("1a9f3239", content, shadowRoot)
};

/***/ }),

/***/ "37dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_5379f1fe_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1fa4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_5379f1fe_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_5379f1fe_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_5379f1fe_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_5379f1fe_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

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

/***/ "76b4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "h3[data-v-5379f1fe]{margin:40px 0 0}ul[data-v-5379f1fe]{list-style-type:none;padding:0}li[data-v-5379f1fe]{display:inline-block;margin:0 10px}a[data-v-5379f1fe]{color:#42b983}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a50c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"787e6bf4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Todo.vue?vue&type=template&id=5379f1fe&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" Todo 89 webid: "+_vm._s(_vm.webId)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Todo.vue?vue&type=template&id=5379f1fe&scoped=true&shadow

// EXTERNAL MODULE: ./src/store/index.js + 2 modules
var store = __webpack_require__("4360");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Todo.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//

/* harmony default export */ var Todovue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'Todo',
  props: {
    msg: String
  },

  async created() {//console.log(fc)
  },

  methods: {},
  watch: {
    async webId() {
      console.log("watch webid", this.webId);
    }

  },
  computed: {
    webId: {
      get: function () {
        return this.$store.state.solid.webId;
      },
      set: function () {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/Todo.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Todovue_type_script_lang_js_shadow = (Todovue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Todo.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("37dd")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Todovue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5379f1fe",
  null
  ,true
)

/* harmony default export */ var Todoshadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=popock.2.js.map