(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[2],{

/***/ "11a8":
/***/ (function(module, exports) {

function NamedNode (iri) {
  this.value = iri
}

NamedNode.prototype.equals = function (other) {
  return !!other && other.termType === this.termType && other.value === this.value
}

NamedNode.prototype.termType = 'NamedNode'

module.exports = NamedNode


/***/ }),

/***/ "12c1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".conditional-class button{font:300% Helvetica,sans-serif;color:#333;background-color:pink}.conditional-class p{color:#fff3f5;color:#ff8da1;color:rgba(255,192,203,.5)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "36c5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9658");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_1_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "3cf1":
/***/ (function(module, exports, __webpack_require__) {

var BlankNode = __webpack_require__("47b7")
var DefaultGraph = __webpack_require__("d76c")
var Literal = __webpack_require__("5afa")
var NamedNode = __webpack_require__("11a8")
var Quad = __webpack_require__("e1cc")
var Variable = __webpack_require__("a55c")

function DataFactory () {}

DataFactory.namedNode = function (value) {
  return new NamedNode(value)
}

DataFactory.blankNode = function (value) {
  return new BlankNode(value)
}

DataFactory.literal = function (value, languageOrDatatype) {
  if (typeof languageOrDatatype === 'string') {
    if (languageOrDatatype.indexOf(':') === -1) {
      return new Literal(value, languageOrDatatype)
    }

    return new Literal(value, null, DataFactory.namedNode(languageOrDatatype))
  }

  return new Literal(value, null, languageOrDatatype)
}

DataFactory.defaultGraph = function () {
  return DataFactory.defaultGraphInstance
}

DataFactory.variable = function (value) {
  return new Variable(value)
}

DataFactory.triple = function (subject, predicate, object) {
  return DataFactory.quad(subject, predicate, object)
}

DataFactory.quad = function (subject, predicate, object, graph) {
  return new Quad(subject, predicate, object, graph || DataFactory.defaultGraphInstance)
}

DataFactory.defaultGraphInstance = new DefaultGraph()

module.exports = DataFactory


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

/***/ "47b7":
/***/ (function(module, exports) {

function BlankNode (id) {
  this.value = id || ('b' + (++BlankNode.nextId))
}

BlankNode.prototype.equals = function (other) {
  return !!other && other.termType === this.termType && other.value === this.value
}

BlankNode.prototype.termType = 'BlankNode'

BlankNode.nextId = 0

module.exports = BlankNode


/***/ }),

/***/ "5afa":
/***/ (function(module, exports, __webpack_require__) {

var NamedNode = __webpack_require__("11a8")

function Literal (value, language, datatype) {
  this.value = value
  this.datatype = Literal.stringDatatype
  this.language = ''

  if (language) {
    this.language = language
    this.datatype = Literal.langStringDatatype
  } else if (datatype) {
    this.datatype = datatype
  }
}

Literal.prototype.equals = function (other) {
  return !!other && other.termType === this.termType && other.value === this.value &&
    other.language === this.language && other.datatype.equals(this.datatype)
}

Literal.prototype.termType = 'Literal'
Literal.langStringDatatype = new NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString')
Literal.stringDatatype = new NamedNode('http://www.w3.org/2001/XMLSchema#string')

module.exports = Literal


/***/ }),

/***/ "7acd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61e08aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Profile.vue?vue&type=template&id=0f7658b4&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.styleObject)},[_vm._v(" Profil: "+_vm._s(_vm.profile.types)+" "),_c('ViewSelector',{on:{"viewSelected":_vm.viewSelected,"templateSelected":_vm.templateSelected}}),_c('div',{class:[_vm.dynamicclass]},[_vm._v(" du texte "),_c('button',[_vm._v(" For test ")])]),_c('div',{class:_vm.isActive ? 'conditional-class' : ''},[_vm._v(" ... one two du texte "),_c('button',[_vm._v(" For test ")]),_vm._v(" ["+_vm._s(_vm.isActive)+"] ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Profile.vue?vue&type=template&id=0f7658b4&shadow

// EXTERNAL MODULE: ./src/store/index.js + 2 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./node_modules/@rdfjs/data-model/index.js
var data_model = __webpack_require__("9b92");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Profile.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Profilevue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'Profile',
  components: {
    'ViewSelector': () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "f65a"))
  },

  created() {
    this.profile = this.$store.state.profile.profile;
  },

  data: function () {
    return {
      isActive: false,
      dynamicclass: 'bg-primary',
      styleObject: {
        color: 'blue',
        fontSize: '13px'
      } // profile_types : [
      //   {name: "Organization"},
      //   {name: "Group"},
      //   {name: "Person"},
      //   {name: "Project"},
      //   {name: "Collection"},
      //   {name: "..."}
      // ]

    };
  },
  methods: {
    viewSelected(selected) {
      console.log("YEAH SELECTED !", selected);

      if (selected != "...") {
        let t = {};
        t.name = selected;
        this.changeType(t);
      }
    },

    templateSelected(selected) {
      console.log("template", selected); // this.dynamic = selected

      this.isActive = !this.isActive;
    },

    async changeType(e) {
      //  console.log(e.name)
      //  console.log(this.profile.webId)
      const actor = solid.data[this.profile.webId];
      let css = ["bg-primary", "bg-arctic-water", "bg-lime-zest", "bg-flash-of-orange"];

      switch (e.name) {
        case "Organization":
          this.profile.types = ['http://xmlns.com/foaf/0.1/Organization', 'http://www.w3.org/ns/org#Organization'];
          this.styleObject.color = "red";
          this.dynamicclass = css[1];
          await actor.type.set(Object(data_model["namedNode"])('http://xmlns.com/foaf/0.1/Organization'), Object(data_model["namedNode"])('http://www.w3.org/ns/org#Organization'));
          break;

        case "Group":
          this.profile.types = ['http://xmlns.com/foaf/0.1/Group', 'http://www.w3.org/ns/org#Group'];
          this.styleObject.color = "green";
          this.dynamicclass = css[3];
          await actor.type.set(Object(data_model["namedNode"])('http://xmlns.com/foaf/0.1/Group'), Object(data_model["namedNode"])('http://www.w3.org/ns/org#Group'));
          break;

        case "Person":
          this.profile.types = ['http://schema.org/Person', 'http://xmlns.com/foaf/0.1/Person'];
          this.styleObject.color = "blue";
          this.dynamicclass = css[0];
          await actor.type.set(Object(data_model["namedNode"])('http://xmlns.com/foaf/0.1/Person'), Object(data_model["namedNode"])('http://schema.org/Person'));
          break;

        case "Project":
          this.profile.types = ['http://xmlns.com/foaf/0.1/Project', 'http://usefulinc.com/ns/doap#Project'];
          this.styleObject.color = "grey";
          this.dynamicclass = css[4];
          await actor.type.set(Object(data_model["namedNode"])('http://xmlns.com/foaf/0.1/Project'), Object(data_model["namedNode"])('http://usefulinc.com/ns/doap#Project'));
          break;

        case "Collection":
          this.profile.types = ['https://schema.org/Collection', 'https://www.w3.org/ns/activitystreams#Collection'];
          this.styleObject.color = "purple";
          this.dynamicclass = css[5];
          await actor.type.set(Object(data_model["namedNode"])('https://schema.org/Collection'), Object(data_model["namedNode"])('https://www.w3.org/ns/activitystreams#Collection'));
          break;

        default:
          console.log("Contact the support, No action known for ", e.name);
      } //  this.profile.types = e.classes

    }

  },
  watch: {
    profile() {
      console.log("watch profile", this.profile);
    }

  },
  computed: {
    profile: {
      get: function () {
        return this.$store.state.profile.profile;
      },
      set: function (p) {
        this.$store.commit('profile/SetProfile', p);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Profile.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Profilevue_type_script_lang_js_shadow = (Profilevue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Profile.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("b716")
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__("36c5")
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Profilevue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Profileshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9658":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("12c1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("058cbe02", content, shadowRoot)
};

/***/ }),

/***/ "9b92":
/***/ (function(module, exports, __webpack_require__) {

var DataFactory = __webpack_require__("3cf1")

module.exports = DataFactory


/***/ }),

/***/ "a55c":
/***/ (function(module, exports) {

function Variable (name) {
  this.value = name
}

Variable.prototype.equals = function (other) {
  return !!other && other.termType === this.termType && other.value === this.value
}

Variable.prototype.termType = 'Variable'

module.exports = Variable


/***/ }),

/***/ "b716":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c8c9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "c8c9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e902");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("28825c90", content, shadowRoot)
};

/***/ }),

/***/ "d76c":
/***/ (function(module, exports) {

function DefaultGraph () {
  this.value = ''
}

DefaultGraph.prototype.equals = function (other) {
  return !!other && other.termType === this.termType
}

DefaultGraph.prototype.termType = 'DefaultGraph'

module.exports = DefaultGraph


/***/ }),

/***/ "e1cc":
/***/ (function(module, exports, __webpack_require__) {

var DefaultGraph = __webpack_require__("d76c")

function Quad (subject, predicate, object, graph) {
  this.subject = subject
  this.predicate = predicate
  this.object = object

  if (graph) {
    this.graph = graph
  } else {
    this.graph = new DefaultGraph()
  }
}

Quad.prototype.equals = function (other) {
  // `|| !other.termType` is for backwards-compatibility with old factories without RDF* support.
  return !!other && (other.termType === 'Quad' || !other.termType) &&
    other.subject.equals(this.subject) && other.predicate.equals(this.predicate) &&
    other.object.equals(this.object) && other.graph.equals(this.graph)
}

Quad.prototype.termType = 'Quad'
Quad.prototype.value = ''

module.exports = Quad


/***/ }),

/***/ "e902":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".color-primary{color:#00fac4}.color-arctic-water{color:#00f6fa}.color-lime-zest{color:#d9fa00}.color-flash-of-orange{color:#faaa00}.bg-primary{background-color:#00fac4}.bg-arctic-water{background-color:#00f6fa}.bg-arctic-water button{background-color:#eceef5;border:1px solid #cad4e7;text-decoration:none;border-radius:3px;padding:2px 3px 2px 2px;margin-right:5px}.bg-arctic-water button:hover{border:1px solid #9dacce;text-decoration:none}.bg-lime-zest{background-color:#d9fa00}.bg-flash-of-orange{background-color:#faaa00}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=popock.2.js.map