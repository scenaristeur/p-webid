(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[3],{

/***/ "3fbb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_62482530_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e85f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_62482530_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_62482530_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_62482530_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_62482530_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// CONCATENATED MODULE: ./src/store/modules/storage.js




external_Vue_default.a.use(vuex_esm["a" /* default */]);
var auth = solid.auth;
var fc = new SolidFileClient(auth);
var state = {
  folder: {},
  file: null,
  content: null
};
var mutations = {
  setFolder: function setFolder(state, f) {
    //  console.log("folder",f)
    //  console.log(f.links.meta)
    state.folder = f;
  },
  setFile: function setFile(state, f) {
    state.file = f;
  },
  setContent: function setContent(state, c) {
    state.content = c;
  }
};
var actions = {
  updateFolder: function updateFolder(context, url) {
    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var folder;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fc.readFolder(url);

            case 2:
              folder = _context.sent;
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

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  updateFile: function updateFile(context, file) {
    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("FILE", file);
              context.commit('setFile', file);
              _context2.t0 = context;
              _context2.next = 5;
              return fc.readFile(file.url);

            case 5:
              _context2.t1 = _context2.sent;

              _context2.t0.commit.call(_context2.t0, 'setContent', _context2.t1);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var storage = ({
  namespaced: true,
  state: state,
  //getters,
  actions: actions,
  mutations: mutations
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./src/store/modules/profile.js







external_Vue_default.a.use(vuex_esm["a" /* default */]);
var profile_auth = solid.auth;
var profile_fc = new SolidFileClient(profile_auth);
var profile_state = {
  profile: {
    webId: null,
    types: null
  }
};
var profile_mutations = {
  setProfile: function setProfile(state, profile) {
    console.log("mut", profile);
    state.profile = profile;
  }
};
var profile_actions = {
  setWebId: function setWebId(context, webId) {
    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var profile, storage, name, types;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("action", webId);
              profile = {};
              profile.webId = webId;

              if (!(webId != null)) {
                _context.next = 16;
                break;
              }

              _context.next = 6;
              return solid.data[webId].storage;

            case 6:
              storage = _context.sent;
              _context.next = 9;
              return solid.data[webId].name;

            case 9:
              name = _context.sent;
              _context.next = 12;
              return solid.data[webId].type.values;

            case 12:
              types = _context.sent;
              profile.storage = "".concat(storage);
              profile.name = "".concat(name);
              profile.types = "".concat(types);

            case 16:
              context.commit('setProfile', profile);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
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

/***/ "605f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "h3[data-v-62482530]{margin:40px 0 0}ul[data-v-62482530]{list-style-type:none;padding:0}li[data-v-62482530]{display:inline-block;margin:0 10px}a[data-v-62482530]{color:#42b983}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a50c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61e08aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Todo.vue?vue&type=template&id=62482530&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" Todo 89 webid: "+_vm._s(_vm.webId)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Todo.vue?vue&type=template&id=62482530&scoped=true&shadow

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
        return this.$store.state.profile.profile.webId;
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
  
  var style0 = __webpack_require__("3fbb")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Todovue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62482530",
  null
  ,true
)

/* harmony default export */ var Todoshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e85f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("605f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("25c0bf62", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=popock.3.js.map