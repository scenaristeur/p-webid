(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4744fb4a"],{"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var l=n[c],s=l&&l.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(u){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(C){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=F(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={};function v(){}function b(){}function g(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==r&&n.call(x,i)&&(y=x);var _=g.prototype=v.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function F(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return R()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=I(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=u(t,e,r);if("normal"===l.type){if(n=r.done?h:d,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}function I(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return b.prototype=_.constructor=g,g.constructor=b,b.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(_),l(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),a=Object.defineProperty,c={},l=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var r=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:l,f=i(e,1)?e[1]:void 0;return c[t]=!!r&&!o((function(){if(s&&!n)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:l}):t[1]=1,r.call(t,u,f)}))}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,l="name";n&&!(l in i)&&o(i,l,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),l=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,u=4==t,f=6==t,d=5==t||f;return function(p,h,m,v){for(var b,g,y=i(p),w=o(y),x=n(h,m,3),_=a(w.length),k=0,E=v||c,F=e?E(p,_):r?E(p,0):void 0;_>k;k++)if((d||k in w)&&(b=w[k],g=x(b,k,y),t))if(e)F[k]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return k;case 2:l.call(F,b)}else if(u)return!1;return f?-1:s||u?u:F}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},cd91:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"webid"},[r("div",{staticClass:"explorer"},[r("b-input-group",{staticClass:"mt-3"},[r("b-input-group-prepend",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.E-explorer",modifiers:{"E-explorer":!0}}],attrs:{variant:"info"}},[r("b-icon-folder2-open")],1)],1),r("b-form-input",{model:{value:t.folder.url,callback:function(e){t.$set(t.folder,"url",e)},expression:"folder.url"}})],1),r("b-modal",{attrs:{id:"E-explorer","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[r("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[r("b-button-group",{staticClass:"mx-1"},[r("b-button",{attrs:{title:"New Folder",variant:"info"},on:{click:t.init_folder}},[r("b-icon-folder-plus")],1),r("b-button",{attrs:{title:"Upload Files",variant:"info"},on:{click:function(e){return t.$refs.fileInput.$el.childNodes[0].click()}}},[r("b-icon-files")],1),r("b-button",{attrs:{title:"Upload Folder",variant:"info"},on:{click:function(e){return t.$refs.folderInput.$el.childNodes[0].click()}}},[r("b-icon-folder-symlink")],1)],1)],1)]},proxy:!0}])},[r("b-list-group",["https://"!=t.folder.parent?r("b-list-group-item",{staticClass:"item",attrs:{href:"#",variant:"info"},on:{click:function(e){return t.updateFolder(t.folder.parent)}}},[r("b-button",{staticClass:"m-0 p-0",attrs:{variant:"info",size:"sm"}},[r("b-icon-arrow-up")],1),t._v(" "+t._s(t.folder.url)+" ")],1):r("b-list-group-item",{staticClass:"item",attrs:{href:"#",variant:"info"}},[t._v(" "+t._s(t.storage)+" ")]),r("div",[r("b-form-file",{ref:"fileInput",staticStyle:{display:"none"},attrs:{placeholder:"upload files","drop-placeholder":"Drop file here...",multiple:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}),r("b-form-file",{ref:"folderInput",staticStyle:{display:"none"},attrs:{placeholder:"Upload directory","drop-placeholder":"Upoload directory",directory:"",multiple:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)],1),r("b-list-group",{staticClass:"scroll"},[t._l(t.folder.folders,(function(e){return r("b-list-group-item",{key:e.name,staticClass:"item list-group-item d-flex justify-content-between p-1",attrs:{href:"#"},on:{click:function(r){return t.selected(e)},contextmenu:function(r){return r.preventDefault(),t.right(e)}}},[r("p",{staticClass:"p-0 m-0 flex-grow-1"},[r("b-button",{staticClass:"unstyled-button",attrs:{variant:"outline-warning"}},[r("b-icon-folder-fill")],1),t._v(" "+t._s(e.name))],1),r("b-button",{attrs:{size:"sm mr-2",variant:"outline-primary"}},[r("b-icon-alt",{attrs:{variant:"primary"},on:{click:function(r){return r.stopPropagation(),t.init_move(e)}}})],1),r("b-button",{attrs:{size:"sm",variant:"outline-danger"}},[r("b-icon-trash",{attrs:{variant:"danger"},on:{click:function(r){return r.stopPropagation(),t.init_trash(e)}}})],1)],1)})),t._l(t.folder.files,(function(e){return r("b-list-group-item",{key:e.name,staticClass:"item list-group-item d-flex justify-content-between",attrs:{href:"#"},on:{click:function(r){return t.selected(e)},contextmenu:function(r){return r.preventDefault(),t.right(e)}}},[r("p",{staticClass:"p-0 m-0 flex-grow-1"},[r("b-icon-file-text"),t._v(" "+t._s(e.name))],1),r("b-button",{attrs:{size:"sm mr-2",variant:"outline-primary",disabled:""}},[r("b-icon-download")],1),r("b-button",{attrs:{size:"sm mr-2",variant:"outline-primary"}},[r("b-icon-alt",{attrs:{variant:"primary"},on:{click:function(r){return r.stopPropagation(),t.init_move(e)}}})],1),r("b-button",{attrs:{size:"sm",variant:"outline-danger"}},[r("b-icon-trash",{attrs:{variant:"danger"},on:{click:function(r){return r.stopPropagation(),t.init_trash(e)}}})],1)],1)}))],2)],1),r("b-modal",{attrs:{id:"E-context-menu",title:t.contextTitle}},[r("b-list-group",[r("b-input-group",{attrs:{prepend:"Rename"}},[r("b-form-input",{model:{value:t.newName,callback:function(e){t.newName=e},expression:"newName"}})],1)],1)],1),r("b-modal",{attrs:{id:"E-confirm-trash",title:"Trash"},on:{ok:t.trash}},[t._v(" Are you sure you want to delete "),r("b-icon-trash",{attrs:{variant:"danger"}}),r("b",[t._v(t._s(t.currentItem.name))]),t._v(" ("+t._s(t.currentItem.type)+") "),r("b-icon-trash",{attrs:{variant:"danger"}}),t._v(" and all its content ? "),r("br"),r("small",[t._v(" "+t._s(t.currentItem.url)+" ")])],1),r("b-modal",{attrs:{id:"E-move",title:"Are you sure you want to move or rename"},on:{ok:t.move}},[t._v(" name : "+t._s(t.currentItem.name)+" "),r("br"),r("small",[t._v(" "+t._s(t.currentItem.url)+" ")]),r("b-input-group",{attrs:{size:"sm",prepend:"New location"}},[r("b-form-input",{model:{value:t.new_location,callback:function(e){t.new_location=e},expression:"new_location"}})],1)],1),r("b-modal",{attrs:{id:"E-folder-modal",title:"New Folder"},on:{ok:t.createFolder}},[r("b-input-group",{attrs:{size:"sm",prepend:"New Folder"}},[r("b-form-input",{model:{value:t.new_folder,callback:function(e){t.new_folder=e},expression:"new_folder"}})],1)],1)],1),r("fieldset",[t._v(" storage: "+t._s(t.storage)),r("br"),t._v(" folder: "+t._s(t.folder)+" ")]),t._v(" BASIC | NETWORK | DATA ")])},o=[],i=(r("4160"),r("b0c0"),r("159b"),r("96cf"),r("1da1")),a=r("4360"),c=solid.auth,l=new SolidFileClient(c),s={store:a["a"],name:"Storage",created:function(){this.storage=this.$store.state.profile.storage},data:function(){return{contextTitle:"",currentItem:{},newName:"",new_location:"",new_folder:"",files:[]}},methods:{selected:function(t){"folder"==t.type?this.$store.dispatch("storage/updateFolder",t.url):this.$store.dispatch("storage/updateFile",t)},init_folder:function(){this.$bvModal.show("E-folder-modal")},createFolder:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t.new_folder),!(t.new_folder.length>0)){e.next=15;break}return r=t.folder.url+t.new_folder,console.log(r),e.next=6,l.itemExists(r);case 6:if(e.sent){e.next=11;break}return e.next=9,l.createFolder(r);case 9:e.next=12;break;case 11:alert(r+" already exists");case 12:t.updateFolder(t.folder.url),e.next=16;break;case 15:alert("folder name can not be empty");case 16:case"end":return e.stop()}}),e)})))()},right:function(t){console.log("right",t),this.contextTitle=t.name,this.newName=t.name,this.$bvModal.show("E-context-menu"),this.currentItem=t},init_trash:function(t){console.log(t),this.$bvModal.show("E-confirm-trash"),this.currentItem=t},init_move:function(t){console.log(t),this.$bvModal.show("E-move"),this.currentItem=t,this.new_location=t.url},move:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("Move",t.currentItem.type,t.currentItem.url,"to",t.new_location),e.prev=1,"folder"!=t.currentItem.type){e.next=7;break}return e.next=5,l.move(t.currentItem.url,t.new_location);case 5:e.next=9;break;case 7:return e.next=9,l.move(t.currentItem.url,t.new_location);case 9:t.updateFolder(t.folder.url),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](1),t.makeToast("Error",e.t0,"danger");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},trash:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("Trash",t.currentItem.type,t.currentItem.url),"folder"==t.currentItem.type){e.next=8;break}return e.next=4,deleteFile(t.currentItem.url);case 4:console.log("File deleted !"),t.makeToast("success !","File deleted !","success"),e.next=10;break;case 8:return e.next=10,l.deleteFolder(t.currentItem.url);case 10:t.updateFolder(t.folder.url);case 11:case"end":return e.stop()}}),e)})))()},updateFolder:function(t){this.$store.dispatch("storage/updateFolder",t)}},watch:{storage:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("watch storage",t.storage),null==t.storage){e.next=8;break}return e.next=4,l.readFolder(t.storage);case 4:t.folder=e.sent,console.log(t.folder),e.next=9;break;case 8:t.folder=null;case 9:case"end":return e.stop()}}),e)})))()},files:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(t),n=e.folder.url,console.log(n),r.next=5,t.forEach(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e,r),o=e.webkitRelativePath.length>0?n+e.webkitRelativePath:n+e.name,console.log(o,e,e.type),t.next=5,l.createFile(o,e,e.type);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 5:e.updateFolder(e.folder.url);case 6:case"end":return r.stop()}}),r)})))()}},computed:{storage:{get:function(){return this.$store.state.profile.storage},set:function(){}},webId:{get:function(){return this.$store.state.profile.profile.webId},set:function(){}},folder:{get:function(){return this.$store.state.storage.folder},set:function(){}}}},u=s,f=r("2877"),d=Object(f["a"])(u,n,o,!1,null,null,null);e["default"]=d.exports},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-4744fb4a.5f7bb274.js.map