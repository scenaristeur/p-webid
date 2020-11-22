(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[2],{

/***/ "13d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_234b25c4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac23");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_234b25c4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_234b25c4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_234b25c4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_234b25c4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

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

/***/ "9da0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "h3[data-v-234b25c4]{margin:40px 0 0}ul[data-v-234b25c4]{list-style-type:none;padding:0}li[data-v-234b25c4]{display:inline-block;margin:0 10px}a[data-v-234b25c4]{color:#42b983}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a50c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c44bea90-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Todo.vue?vue&type=template&id=234b25c4&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" Todo 89 webid: "+_vm._s(_vm.webId)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Todo.vue?vue&type=template&id=234b25c4&scoped=true&shadow

// EXTERNAL MODULE: ./src/store/index.js
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
        return this.$store.state.webId;
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
  
  var style0 = __webpack_require__("13d5")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Todovue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "234b25c4",
  null
  ,true
)

/* harmony default export */ var Todoshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ac23":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9da0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("298c015c", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=popock.2.js.map