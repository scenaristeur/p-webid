(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[9],{

/***/ "f65a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"61e08aa4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ViewSelector.vue?vue&type=template&id=dfd5d286&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"view-selector"},[_c('hr'),_c('b-card',{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"title":"Many ways to view the same thing","tag":"article"}},[_c('b-card-text',[_c('b-form-group',{attrs:{"id":"fieldset-1","description":"Select another view","label":"Act as a","label-for":"selector-view"}},[_c('b-form-select',{attrs:{"id":"selector-view","options":_vm.affichage.views},on:{"change":function($event){return _vm.$emit('viewSelected', _vm.affichage.view)}},model:{value:(_vm.affichage.view),callback:function ($$v) {_vm.$set(_vm.affichage, "view", $$v)},expression:"affichage.view"}})],1)],1),_c('b-card-text',[_c('b-form-group',{attrs:{"id":"fieldset-1","description":"Select another template","label":"in the style of","label-for":"selector-template"}},[_c('b-form-select',{attrs:{"id":"selector-template","options":_vm.affichage.templates},on:{"change":function($event){return _vm.$emit('templateSelected', _vm.affichage.template)}},model:{value:(_vm.affichage.template),callback:function ($$v) {_vm.$set(_vm.affichage, "template", $$v)},expression:"affichage.template"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ViewSelector.vue?vue&type=template&id=dfd5d286&

// EXTERNAL MODULE: ./src/store/index.js + 2 modules
var store = __webpack_require__("4360");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ViewSelector.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ViewSelectorvue_type_script_lang_js_ = ({
  store: store["a" /* default */],
  name: 'ViewSelector',

  async created() {
    this.webId = this.$store.state.profile.profile.webId;
  },

  data: function () {
    return {
      affichage: {
        views: ["Person", "Organization", "Group", "Project", "Collection", "..."],
        templates: ["Solid", "FB", "LinkedIn", "Insta", "Tweeter", "..."]
      } //  selected: ""

    };
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
        return this.$store.state.profile.profile.webId;
      },
      set: function () {}
    }
  }
});
// CONCATENATED MODULE: ./src/components/ViewSelector.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ViewSelectorvue_type_script_lang_js_ = (ViewSelectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/ViewSelector.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ViewSelectorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var ViewSelector = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=popock.9.js.map