(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[3],{

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

/***/ "f2ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c44bea90-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Login.vue?vue&type=template&id=12025a30&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[(_vm.webId == null)?_c('button',{on:{"click":_vm.login}},[_vm._v("Login")]):_c('button',{on:{"click":_vm.logout}},[_vm._v("Logout")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Login.vue?vue&type=template&id=12025a30&shadow

// EXTERNAL MODULE: ./src/store/index.js
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
        return this.$store.state.webId;
      },
      set: function (value) {
        this.$store.dispatch('setWebId', value);
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