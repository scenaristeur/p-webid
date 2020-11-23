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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38b803c4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Profile.vue?vue&type=template&id=040aebe3&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"webid"},[_vm._v(" Profil: "+_vm._s(_vm.profile.types)+" "),_vm._l((_vm.profile_types),function(p){return _c('div',{key:p.name},[_c('b-button',{on:{"click":function($event){return _vm.changeType(p)}}},[_vm._v(_vm._s(p.name))])],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Profile.vue?vue&type=template&id=040aebe3&shadow

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



/* harmony default export */ var Profilevue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'Profile',

  created() {
    this.profile = this.$store.state.profile.profile;
  },

  data: function () {
    return {
      profile_types: [{
        name: "Organization"
      }, {
        name: "Group"
      }, {
        name: "Person"
      }, {
        name: "Project"
      }]
    };
  },
  methods: {
    async changeType(e) {
      console.log(e.name);
      console.log(this.profile.webId);
      const actor = solid.data[this.profile.webId];

      switch (e.name) {
        case "Organization":
          await actor.type.set(Object(data_model["namedNode"])('http://xmlns.com/foaf/0.1/Organization'), Object(data_model["namedNode"])('http://www.w3.org/ns/org#Organization'));
          this.profile.types = ['http://xmlns.com/foaf/0.1/Organization', 'http://www.w3.org/ns/org#Organization'];
          break;

        case "Group":
          await actor.type.set(Object(data_model["namedNode"])('http://xmlns.com/foaf/0.1/Group'), Object(data_model["namedNode"])('http://www.w3.org/ns/org#Group'));
          this.profile.types = ['http://xmlns.com/foaf/0.1/Group', 'http://www.w3.org/ns/org#Group'];
          break;

        case "Person":
          await actor.type.set(Object(data_model["namedNode"])('http://xmlns.com/foaf/0.1/Person'), Object(data_model["namedNode"])('http://schema.org/Person'));
          this.profile.types = ['http://xmlns.com/foaf/0.1/Person', 'http://schema.org/Person'];
          break;

        case "Project":
          await actor.type.set(Object(data_model["namedNode"])('http://xmlns.com/foaf/0.1/Project'), Object(data_model["namedNode"])('http://usefulinc.com/ns/doap#Project'));
          this.profile.types = ['http://xmlns.com/foaf/0.1/Project', 'http://usefulinc.com/ns/doap#Project'];
          break;

        default:
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





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Profilevue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Profileshadow = __webpack_exports__["default"] = (component.exports);

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


/***/ })

}]);
//# sourceMappingURL=popock.2.js.map