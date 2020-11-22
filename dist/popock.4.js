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
    webId: null
  },
  mutations: {
    setWebId: function setWebId(state, webId) {
      console.log(webId);
      state.webId = webId;
    }
  },
  actions: {},
  modules: {}
}));

/***/ }),

/***/ "e246":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c44bea90-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Webid.vue?vue&type=template&id=dfa9828c&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"webid"},[_vm._v(" webId: "+_vm._s(_vm.webId)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Webid.vue?vue&type=template&id=dfa9828c&shadow

// EXTERNAL MODULE: ./src/store/index.js
var store = __webpack_require__("4360");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Webid.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//

/* harmony default export */ var Webidvue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'Webid',

  created() {
    this.webId = this.$store.state.webId;
  },

  methods: {},
  watch: {
    webId() {
      console.log("watch webid", this.webId);
    }

  },
  computed: {
    webId: {
      get: function () {
        return this.$store.state.webId;
      },
      set: function () {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/Webid.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Webidvue_type_script_lang_js_shadow = (Webidvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Webid.vue?shadow





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Webidvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Webidshadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=popock.4.js.map