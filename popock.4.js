(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[4],{

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2f62");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Store({
  state: {
    webId: null,
    storage: null
  },
  mutations: {
    setWebId(state, webId) {
      console.log("mut", webId);
      state.webId = webId;
    },

    setStorage(state, storage) {
      console.log("mut", storage);
      state.storage = storage;
    }

  },
  actions: {
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
    }

  },
  modules: {}
}));

/***/ }),

/***/ "8ff7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c44bea90-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Storage.vue?vue&type=template&id=03a789b6&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"webid"},[_c('fieldset',[_vm._v(" storage: "+_vm._s(_vm.storage)),_c('br'),_vm._v(" folder: "+_vm._s(_vm.folder)+" ")]),_vm._v(" BASIC | NETWORK | DATA ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Storage.vue?vue&type=template&id=03a789b6&shadow

// EXTERNAL MODULE: ./src/store/index.js
var store = __webpack_require__("4360");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Storage.vue?vue&type=script&lang=js&shadow
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

const auth = solid.auth;
const fc = new SolidFileClient(auth);
/* harmony default export */ var Storagevue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'Storage',

  created() {
    this.storage = this.$store.state.storage;
  },

  data: function () {
    return {
      folder: null
    };
  },
  methods: {},
  watch: {
    async storage() {
      console.log("watch storage", this.storage);

      if (this.storage != null) {
        this.folder = await fc.readFolder(this.storage);
        console.log(this.folder);
      } else {
        this.folder = null;
      }
    }

  },
  computed: {
    storage: {
      get: function () {
        return this.$store.state.storage;
      },
      set: function () {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/Storage.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Storagevue_type_script_lang_js_shadow = (Storagevue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Storage.vue?shadow





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Storagevue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Storageshadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=popock.4.js.map