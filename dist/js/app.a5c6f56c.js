(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fda341e4","chunk-2d0c8e41":"8843ef4e","chunk-2d21d458":"2d2e879c","chunk-69c321ac":"a95d25aa","chunk-6cddbe8a":"72ea2dda","chunk-4511d566":"c2f6e98a","chunk-744a9436":"8faf6d83","chunk-7721e616":"01a8b8bf","chunk-bb31f2b4":"cb70b86c","chunk-dace4852":"10d3e7d8","chunk-f87559cc":"155b6fd0","chunk-2d21ee7d":"561fc284","chunk-2d228c54":"bad456e9","chunk-a38793d8":"70ceee42","chunk-b4bd08ca":"2480c4fd","chunk-2d0b97f3":"23419362","chunk-2d0bd55d":"6e1233a5","chunk-2d0d36d1":"b185c5ca","chunk-2d20f7d5":"b234531b","chunk-2d22d052":"50c690c4","chunk-d07a3fde":"5e7d88c5","chunk-1b27e202":"08d995df","chunk-2f8e309a":"41b1a574"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-dace4852":1,"chunk-f87559cc":1,"chunk-b4bd08ca":1,"chunk-d07a3fde":1,"chunk-2f8e309a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0c8e41":"31d6cfe0","chunk-2d21d458":"31d6cfe0","chunk-69c321ac":"31d6cfe0","chunk-6cddbe8a":"31d6cfe0","chunk-4511d566":"31d6cfe0","chunk-744a9436":"31d6cfe0","chunk-7721e616":"31d6cfe0","chunk-bb31f2b4":"31d6cfe0","chunk-dace4852":"43907408","chunk-f87559cc":"8160c2f3","chunk-2d21ee7d":"31d6cfe0","chunk-2d228c54":"31d6cfe0","chunk-a38793d8":"31d6cfe0","chunk-b4bd08ca":"e2758462","chunk-2d0b97f3":"31d6cfe0","chunk-2d0bd55d":"31d6cfe0","chunk-2d0d36d1":"31d6cfe0","chunk-2d20f7d5":"31d6cfe0","chunk-2d22d052":"31d6cfe0","chunk-d07a3fde":"cbda0d3f","chunk-1b27e202":"31d6cfe0","chunk-2f8e309a":"3ea1acbf"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/p-webid/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;c.push([1,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=(n("96cf"),n("1da1"));r["default"].use(o["a"]);var c=solid.auth,u=new SolidFileClient(c),i={folder:{},file:null,content:null},s={setFolder:function(e,t){e.folder=t},setFile:function(e,t){e.file=t},setContent:function(e,t){e.content=t}},d={updateFolder:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,u.readFolder(t);case 2:r=n.sent,console.log(r),e.commit("setFolder",r);case 5:case"end":return n.stop()}}),n)})))()},updateFile:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("FILE",t),e.commit("setFile",t),n.t0=e,n.next=5,u.readFile(t.url);case 5:n.t1=n.sent,n.t0.commit.call(n.t0,"setContent",n.t1);case 7:case"end":return n.stop()}}),n)})))()}},l={namespaced:!0,state:i,actions:d,mutations:s};n("b0c0"),n("d3b7"),n("ddb0");r["default"].use(o["a"]);var f=solid.auth,p=(new SolidFileClient(f),{profile:{webId:null,types:null}}),h={setProfile:function(e,t){console.log("mut",t),e.profile=t}},b={setWebId:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("action",t),r={},r.webId=t,null==t){n.next=16;break}return n.next=6,solid.data[t].storage;case 6:return o=n.sent,n.next=9,solid.data[t].name;case 9:return a=n.sent,n.next=12,solid.data[t].type.values;case 12:c=n.sent,r.storage="".concat(o),r.name="".concat(a),r.types="".concat(c);case 16:e.commit("setProfile",r);case 17:case"end":return n.stop()}}),n)})))()}},m={namespaced:!0,state:p,actions:b,mutations:h},g=(n("4160"),n("ac1f"),n("8a79"),n("5319"),n("1276"),n("498a"),n("159b"),n("b85c")),v=n("4d8d"),k=n("6dc1"),w=solid.auth,y=new SolidFileClient(w),_=function(){return{workspaces:[],storage:"",currentWorkspace:{}}},x={},j={getUserWorkspaces:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,c,u,i,s,d,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootState.profile.profile.storage+"public/popock/workspaces.ttl",r={},o=[],t.prev=3,t.next=6,Object(v["b"])(n);case 6:r=t.sent,a=r.getAllSubjectsOfType("http://www.w3.org/ns/pim/space#Workspace"),c=Object(g["a"])(a);try{for(c.s();!(u=c.n()).done;)i=u.value,s=i.getLiteral(k["d"].label),d=i.getRef("http://www.w3.org/ns/pim/space#storage"),l=i.getRef("http://www.w3.org/ns/solid/terms#webId"),o.push({name:s,path:d,pod:l,subject:i.asRef().split("#")[1]}),e.commit("updateWorkspaces",o)}catch(f){c.e(f)}finally{c.f()}t.next=14;break;case 12:t.prev=12,t.t0=t["catch"](3);case 14:case"end":return t.stop()}}),t,null,[[3,12]])})))()},addWorkspace:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootState.profile.profile.storage+"public/popock/workspaces.ttl",o=t.name.replace(/\s/g,"_"),t.subject=o,t.path=e.rootState.profile.profile.storage+"public/"+o+"/",a={},n.prev=5,n.next=8,Object(v["b"])(r);case 8:a=n.sent,n.next=16;break;case 11:return n.prev=11,n.t0=n["catch"](5),n.next=15,Object(v["a"])(r);case 15:a=n.sent;case 16:return c=a.addSubject({identifier:o}),c.addRef(k["d"].type,"http://www.w3.org/ns/pim/space#Workspace"),c.addLiteral(k["e"].label,t.name.trim()),c.addRef("http://www.w3.org/ns/pim/space#storage",t.path.trim()),c.addRef("http://www.w3.org/ns/solid/terms#webId",t.pod.trim()),n.next=23,a.save();case 23:console.log(r),e.commit("addWorkspace",t);case 25:case"end":return n.stop()}}),n,null,[[5,11]])})))()},updateWorkspaces:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootState.profile.profile.storage+"public/popock/workspaces.ttl",console.log(r),y.delete(r),n.next=5,Object(v["a"])(r);case 5:return o=n.sent,t.forEach((function(e){var t=e.subject||e.name.replace(/\s/g,"_");e.path=e.path.trim().endsWith("/")?e.path.trim():e.path+"/";var n=o.addSubject({identifier:t});n.addRef(k["d"].type,"http://www.w3.org/ns/pim/space#Workspace"),n.addLiteral(k["e"].label,e.name.trim()),n.addRef("http://www.w3.org/ns/pim/space#storage",e.path.trim()),n.addRef("http://www.w3.org/ns/solid/terms#webId",e.pod.trim())})),n.next=9,o.save();case 9:e.commit("updateWorkspaces",t);case 10:case"end":return n.stop()}}),n)})))()}},S={addWorkspace:function(e,t){e.workspaces.push(t)},updateWorkspaces:function(e,t){e.workspaces=t},setCurrentWorkspace:function(e,t){e.currentWorkspace=t}},O={namespaced:!0,state:_,getters:x,actions:j,mutations:S};r["default"].use(o["a"]);t["a"]=new o["a"].Store({state:{},mutations:{},actions:{},modules:{storage:l,profile:m,workspaces:O}})},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("SolidLoginButton")],1),n("router-view"),n("SolidTrackSession")],1)},a=[],c=(n("d3b7"),{name:"App",components:{SolidLoginButton:function(){return n.e("chunk-bb31f2b4").then(n.bind(null,"e9a1"))},SolidTrackSession:function(){return n.e("chunk-4511d566").then(n.bind(null,"c1a7"))}}}),u=c,i=(n("5c0b"),n("2877")),s=Object(i["a"])(u,o,a,!1,null,null,null),d=s.exports,l=n("4360"),f=n("5f5b"),p=n("b1e0"),h=(n("f9e3"),n("2dd8"),n("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[void 0!=e.invitation?r("div",[r("InvitationView",{attrs:{invitation:e.invitation}}),e._v(" "+e._s(e.invitation)+" ")],1):void 0==e.url?r("div",[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("hr"),r("router-link",{attrs:{to:"/?invitation=https://spoggy-test7.solidcommunity.net/public/gouvernance/groups/Les_Grapheurs_Fous.ttl"}},[e._v("Invitation Grapheurs Fous")]),e._v(" | "),r("router-link",{attrs:{to:"/?invitation=https://spoggy-test7.solidcommunity.net/public/gouvernance/groups/Solid_Users.ttl#this"}},[e._v("Invitation Solid Users Group")]),e._v(" | "),r("router-link",{attrs:{to:"/?invitation=Choose the groupe where you want to invite someone or Create a Group"}},[e._v("Inviter")]),r("hr"),e._v(" Login: "),r("Login"),r("Profile"),e._v(" Webid: "),r("Webid"),e._v(" Storage: "),r("Storage"),e._v(" Todo : "),r("Todo")],1):r("div",[e._v(" url : "+e._s(e.url)+" "),r("b-card-group",{attrs:{columns:""}},e._l(e.things,(function(e){return r("Generique",{key:e.internal_url,attrs:{thing:e}})})),1),e._l(e.tests,(function(t){return r("b-button",{key:t.url,staticClass:"sm",on:{click:function(n){return e.test(t.url)}}},[e._v("show "+e._s(t.name))])}))],2)])},m=[],g=(n("96cf"),n("1da1")),v=n("8522"),k=n("93ef"),w={name:"Home",components:{Login:function(){return n.e("chunk-2d0c8e41").then(n.bind(null,"578a"))},Webid:function(){return n.e("chunk-744a9436").then(n.bind(null,"1290d"))},Profile:function(){return n.e("chunk-f87559cc").then(n.bind(null,"66aa"))},Todo:function(){return n.e("chunk-dace4852").then(n.bind(null,"ebdb"))},Storage:function(){return n.e("chunk-7721e616").then(n.bind(null,"cd91e"))},Generique:function(){return Promise.all([n.e("chunk-2d21d458"),n.e("chunk-69c321ac")]).then(n.bind(null,"11a9"))},InvitationView:function(){return Promise.all([n.e("chunk-2d21d458"),n.e("chunk-6cddbe8a")]).then(n.bind(null,"0a4a"))}},data:function(){return{url:void 0,invitation:void 0,things:[],group_things:[],tests:[{name:"profile",url:"https://spoggy-test7.solidcommunity.net/profile/card#me"},{name:"blog",url:"https://spoggy-test.solidcommunity.net/public/blog/2020-11-03.ttl"},{name:"graphs",url:"https://spoggy.solidcommunity.net/public/Graphs/CollaborativeGraph.ttl"}]}},created:function(){this.update()},methods:{update:function(){void 0!=this.$route.query.url?(this.url=void 0!=this.$route.query.hash?this.$route.query.url+this.$route.query.hash:this.$route.query.url,this.updateUrl()):this.url=void 0,console.log(this.$route.query),void 0!=this.$route.query.invitation?(this.invitation=void 0!=this.$route.query.hash?this.$route.query.invitation+this.$route.query.hash:this.$route.query.invitation,console.log(this.invitation)):this.invitation=void 0},test:function(e){console.log(e),this.$router.push({path:"/",query:{url:e}})},updateUrl:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(k["a"])(e.url);case 2:n=t.sent,e.things=Object(k["c"])(n,e.url);case 4:case"end":return t.stop()}}),t)})))()},login:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.session=new v["Session"],t.next=3,e.session.handleIncomingRedirect(window.location.href);case 3:if(e.session.info.isLoggedIn){t.next=6;break}return t.next=6,e.session.login({oidcIssuer:"https://inrupt.net",redirectUrl:window.location.href});case 6:case"end":return t.stop()}}),t)})))()}},watch:{$route:function(e,t){this.update()},thing:function(){this.updateUrl()}}},y=w,_=Object(i["a"])(y,b,m,!1,null,null,null),x=_.exports;r["default"].use(h["a"]);var j=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=new h["a"]({mode:"history",base:"/p-webid/",routes:j}),O=S;r["default"].use(f["a"]),r["default"].use(p["a"]),r["default"].config.productionTip=!1,new r["default"]({store:l["a"],router:O,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a5c6f56c.js.map