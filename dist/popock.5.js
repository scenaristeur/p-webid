(window["popock_jsonp"] = window["popock_jsonp"] || []).push([[5],{

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

/***/ "8ff7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38b803c4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Storage.vue?vue&type=template&id=7c65c941&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"webid"},[_c('div',{staticClass:"explorer"},[_c('b-input-group',{staticClass:"mt-3"},[_c('b-input-group-prepend',[_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.E-explorer",modifiers:{"E-explorer":true}}],attrs:{"variant":"info"}},[_c('b-icon-folder2-open')],1)],1),_c('b-form-input',{model:{value:(_vm.folder.url),callback:function ($$v) {_vm.$set(_vm.folder, "url", $$v)},expression:"folder.url"}})],1),_c('b-modal',{attrs:{"id":"E-explorer","hide-footer":""},scopedSlots:_vm._u([{key:"modal-title",fn:function(){return [_c('b-button-toolbar',{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[_c('b-button-group',{staticClass:"mx-1"},[_c('b-button',{attrs:{"title":"New Folder","variant":"info"},on:{"click":_vm.init_folder}},[_c('b-icon-folder-plus')],1),_c('b-button',{attrs:{"title":"Upload Files","variant":"info"},on:{"click":function($event){return _vm.$refs.fileInput.$el.childNodes[0].click()}}},[_c('b-icon-files')],1),_c('b-button',{attrs:{"title":"Upload Folder","variant":"info"},on:{"click":function($event){return _vm.$refs.folderInput.$el.childNodes[0].click()}}},[_c('b-icon-folder-symlink')],1)],1)],1)]},proxy:true}])},[_c('b-list-group',[(_vm.folder.parent != 'https://')?_c('b-list-group-item',{staticClass:"item",attrs:{"href":"#","variant":"info"},on:{"click":function($event){return _vm.updateFolder(_vm.folder.parent)}}},[_c('b-button',{staticClass:"m-0 p-0",attrs:{"variant":"info","size":"sm"}},[_c('b-icon-arrow-up')],1),_vm._v(" "+_vm._s(_vm.folder.url)+" ")],1):_c('b-list-group-item',{staticClass:"item",attrs:{"href":"#","variant":"info"}},[_vm._v(" "+_vm._s(_vm.storage)+" ")]),_c('div',[_c('b-form-file',{ref:"fileInput",staticStyle:{"display":"none"},attrs:{"placeholder":"upload files","drop-placeholder":"Drop file here...","multiple":""},model:{value:(_vm.files),callback:function ($$v) {_vm.files=$$v},expression:"files"}}),_c('b-form-file',{ref:"folderInput",staticStyle:{"display":"none"},attrs:{"placeholder":"Upload directory","drop-placeholder":"Upoload directory","directory":"","multiple":""},model:{value:(_vm.files),callback:function ($$v) {_vm.files=$$v},expression:"files"}})],1)],1),_c('b-list-group',{staticClass:"scroll"},[_vm._l((_vm.folder.folders),function(fo){return _c('b-list-group-item',{key:fo.name,staticClass:"item list-group-item d-flex justify-content-between p-1",attrs:{"href":"#"},on:{"click":function($event){return _vm.selected(fo)},"contextmenu":function($event){$event.preventDefault();return _vm.right(fo)}}},[_c('p',{staticClass:"p-0 m-0 flex-grow-1"},[_c('b-button',{staticClass:"unstyled-button",attrs:{"variant":"outline-warning"}},[_c('b-icon-folder-fill')],1),_vm._v(" "+_vm._s(fo.name))],1),_c('b-button',{attrs:{"size":"sm mr-2","variant":"outline-primary"}},[_c('b-icon-alt',{attrs:{"variant":"primary"},on:{"click":function($event){$event.stopPropagation();return _vm.init_move(fo)}}})],1),_c('b-button',{attrs:{"size":"sm","variant":"outline-danger"}},[_c('b-icon-trash',{attrs:{"variant":"danger"},on:{"click":function($event){$event.stopPropagation();return _vm.init_trash(fo)}}})],1)],1)}),_vm._l((_vm.folder.files),function(fi){return _c('b-list-group-item',{key:fi.name,staticClass:"item list-group-item d-flex justify-content-between",attrs:{"href":"#"},on:{"click":function($event){return _vm.selected(fi)},"contextmenu":function($event){$event.preventDefault();return _vm.right(fi)}}},[_c('p',{staticClass:"p-0 m-0 flex-grow-1"},[_c('b-icon-file-text'),_vm._v(" "+_vm._s(fi.name))],1),_c('b-button',{attrs:{"size":"sm mr-2","variant":"outline-primary","disabled":""}},[_c('b-icon-download')],1),_c('b-button',{attrs:{"size":"sm mr-2","variant":"outline-primary"}},[_c('b-icon-alt',{attrs:{"variant":"primary"},on:{"click":function($event){$event.stopPropagation();return _vm.init_move(fi)}}})],1),_c('b-button',{attrs:{"size":"sm","variant":"outline-danger"}},[_c('b-icon-trash',{attrs:{"variant":"danger"},on:{"click":function($event){$event.stopPropagation();return _vm.init_trash(fi)}}})],1)],1)})],2)],1),_c('b-modal',{attrs:{"id":"E-context-menu","title":_vm.contextTitle}},[_c('b-list-group',[_c('b-input-group',{attrs:{"prepend":"Rename"}},[_c('b-form-input',{model:{value:(_vm.newName),callback:function ($$v) {_vm.newName=$$v},expression:"newName"}})],1)],1)],1),_c('b-modal',{attrs:{"id":"E-confirm-trash","title":"Trash"},on:{"ok":_vm.trash}},[_vm._v(" Are you sure you want to delete "),_c('b-icon-trash',{attrs:{"variant":"danger"}}),_c('b',[_vm._v(_vm._s(_vm.currentItem.name))]),_vm._v(" ("+_vm._s(_vm.currentItem.type)+") "),_c('b-icon-trash',{attrs:{"variant":"danger"}}),_vm._v(" and all its content ? "),_c('br'),_c('small',[_vm._v(" "+_vm._s(_vm.currentItem.url)+" ")])],1),_c('b-modal',{attrs:{"id":"E-move","title":"Are you sure you want to move or rename"},on:{"ok":_vm.move}},[_vm._v(" name : "+_vm._s(_vm.currentItem.name)+" "),_c('br'),_c('small',[_vm._v(" "+_vm._s(_vm.currentItem.url)+" ")]),_c('b-input-group',{attrs:{"size":"sm","prepend":"New location"}},[_c('b-form-input',{model:{value:(_vm.new_location),callback:function ($$v) {_vm.new_location=$$v},expression:"new_location"}})],1)],1),_c('b-modal',{attrs:{"id":"E-folder-modal","title":"New Folder"},on:{"ok":_vm.createFolder}},[_c('b-input-group',{attrs:{"size":"sm","prepend":"New Folder"}},[_c('b-form-input',{model:{value:(_vm.new_folder),callback:function ($$v) {_vm.new_folder=$$v},expression:"new_folder"}})],1)],1)],1),_c('fieldset',[_vm._v(" storage: "+_vm._s(_vm.storage)),_c('br'),_vm._v(" folder: "+_vm._s(_vm.folder)+" ")]),_vm._v(" BASIC | NETWORK | DATA ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Storage.vue?vue&type=template&id=7c65c941&shadow

// EXTERNAL MODULE: ./src/store/index.js + 2 modules
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

const auth = solid.auth;
const fc = new SolidFileClient(auth);
/* harmony default export */ var Storagevue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'Storage',

  created() {
    this.storage = this.$store.state.profile.storage; //  this.$route.query.path != undefined ? this.updateFolder(this.$route.query.path) : ""
  },

  data: function () {
    return {
      //  folder: {},
      contextTitle: "",
      currentItem: {},
      newName: "",
      //  deleteMessage: "",
      new_location: "",
      new_folder: "",
      files: []
    };
  },
  methods: {
    selected(item) {
      item.type == "folder" ? this.$store.dispatch('storage/updateFolder', item.url) : this.$store.dispatch('storage/updateFile', item);
    },

    init_folder() {
      this.$bvModal.show("E-folder-modal");
    },

    async createFolder() {
      console.log(this.new_folder);

      if (this.new_folder.length > 0) {
        //  this.new_folder =  ! this.new_folder.endsWith("/") ? this.new_folder+"/" : this.new_folder
        let f = this.folder.url + this.new_folder;
        console.log(f);

        if (!(await fc.itemExists(f))) {
          await fc.createFolder(f); // only create if it doesn't already exist
        } else {
          alert(f + " already exists");
        }

        this.updateFolder(this.folder.url);
      } else {
        alert("folder name can not be empty");
      }
    },

    right(item) {
      console.log("right", item);
      this.contextTitle = item.name;
      this.newName = item.name;
      this.$bvModal.show("E-context-menu");
      this.currentItem = item;
    },

    init_trash(item) {
      console.log(item);
      this.$bvModal.show("E-confirm-trash");
      this.currentItem = item;
    },

    init_move(item) {
      console.log(item);
      this.$bvModal.show("E-move");
      this.currentItem = item;
      this.new_location = item.url;
    },

    async move() {
      console.log("Move", this.currentItem.type, this.currentItem.url, "to", this.new_location);

      try {
        this.currentItem.type == "folder" ? await fc.move(this.currentItem.url, this.new_location) : await fc.move(this.currentItem.url, this.new_location);
        this.updateFolder(this.folder.url);
      } catch (e) {
        this.makeToast("Error", e, "danger");
      }
    },

    async trash() {
      console.log("Trash", this.currentItem.type, this.currentItem.url);

      if (this.currentItem.type != "folder") {
        await deleteFile(this.currentItem.url);
        console.log("File deleted !");
        this.makeToast("success !", "File deleted !", "success");
      } else {
        await fc.deleteFolder(this.currentItem.url);
      }

      this.updateFolder(this.folder.url);
    },

    updateFolder(folder) {
      this.$store.dispatch('storage/updateFolder', folder);
    }

  },
  watch: {
    async storage() {
      console.log("watch storage", this.storage);

      if (this.storage != null) {
        this.folder = await fc.readFolder(this.storage);
        console.log(this.folder);
      } else {
        this.folder = null;
      }
    },

    async files(files) {
      console.log(files);
      let folder = this.folder.url;
      console.log(folder);
      await files.forEach(async function (f, i) {
        console.log(f, i);
        let uri = f.webkitRelativePath.length > 0 ? folder + f.webkitRelativePath : folder + f.name;
        console.log(uri, f, f.type);
        await fc.createFile(uri, f, f.type);
      });
      this.updateFolder(this.folder.url);
    }

  },
  computed: {
    storage: {
      get: function () {
        return this.$store.state.profile.storage;
      },
      set: function () {}
    },
    webId: {
      get: function () {
        return this.$store.state.profile.profile.webId;
      },
      set: function () {}
    },
    folder: {
      get: function () {
        return this.$store.state.storage.folder;
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
//# sourceMappingURL=popock.5.js.map