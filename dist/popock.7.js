(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[7],{

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

/***/ "8326":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61e08aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Vocabularies.vue?vue&type=template&id=f2457008&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vocab"},[_vm._v(" "+_vm._s(_vm.vocabs)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Vocabularies.vue?vue&type=template&id=f2457008&shadow

// EXTERNAL MODULE: ./src/store/index.js + 2 modules
var store = __webpack_require__("4360");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Vocabularies.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//

/* harmony default export */ var Vocabulariesvue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'Vocabularies',

  async created() {
    this.webId = this.$store.state.profile.profile.webId;
  },

  data: function () {
    return {
      vocabs: [{
        name: "FOAF",
        uri: "http://xmlns.com/foaf/0.1/",
        namespace: "http://xmlns.com/foaf/0.1/",
        homepage: "http://xmlns.com/foaf/spec/",
        lov: "https://lov.linkeddata.es/dataset/lov/vocabs/doap"
      }] //  selected: ""

    };
  },
  // methods: {
  // },
  // watch:{
  //   webId(){
  //     console.log("watch webid", this.webId)
  //   }
  // },
  computed: {
    webId: {
      get: function () {
        return this.$store.state.profile.profile.webId;
      },
      set: function () {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/Vocabularies.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Vocabulariesvue_type_script_lang_js_shadow = (Vocabulariesvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Vocabularies.vue?shadow





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Vocabulariesvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Vocabulariesshadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=popock.7.js.map