(function(e){function t(t){for(var r,o,a=t[0],u=t[1],s=t[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},i=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"835be223","chunk-2d0c8e41":"551ca7bc","chunk-2d21d458":"2d2e879c","chunk-68a4abc1":"7404b8b0","chunk-731e5652":"8f90c876","chunk-4511d566":"20d9411c","chunk-744a9436":"02081b06","chunk-7721e616":"62aa42cb","chunk-bb31f2b4":"6850804a","chunk-cf60aba4":"90609a62","chunk-dace4852":"36a77dec","chunk-2d0b2e88":"ed72e609","chunk-2d21de10":"9790ce20","chunk-2d21ee7d":"35e8f707","chunk-2d228c54":"5cbd058e","chunk-748f4d22":"0f99111b","chunk-b4bd08ca":"40da5544","chunk-2d0b97f3":"3073eb5b","chunk-2d0bd55d":"3d9a63ab","chunk-2d0d36d1":"787ebf1e","chunk-2d20f7d5":"af1eb431","chunk-2d22d052":"cf409018","chunk-d07a3fde":"f45748be","chunk-34c8f764":"f4086989","chunk-435f9678":"58d1bef6","chunk-dca0f01e":"64ebaa91","chunk-615326fc":"bdc49577","chunk-2f8e309a":"233bab0c","chunk-aa876e0e":"2053b926"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-cf60aba4":1,"chunk-dace4852":1,"chunk-748f4d22":1,"chunk-b4bd08ca":1,"chunk-d07a3fde":1,"chunk-435f9678":1,"chunk-dca0f01e":1,"chunk-2f8e309a":1,"chunk-aa876e0e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0c8e41":"31d6cfe0","chunk-2d21d458":"31d6cfe0","chunk-68a4abc1":"31d6cfe0","chunk-731e5652":"31d6cfe0","chunk-4511d566":"31d6cfe0","chunk-744a9436":"31d6cfe0","chunk-7721e616":"31d6cfe0","chunk-bb31f2b4":"31d6cfe0","chunk-cf60aba4":"8160c2f3","chunk-dace4852":"43907408","chunk-2d0b2e88":"31d6cfe0","chunk-2d21de10":"31d6cfe0","chunk-2d21ee7d":"31d6cfe0","chunk-2d228c54":"31d6cfe0","chunk-748f4d22":"91627df4","chunk-b4bd08ca":"e2758462","chunk-2d0b97f3":"31d6cfe0","chunk-2d0bd55d":"31d6cfe0","chunk-2d0d36d1":"31d6cfe0","chunk-2d20f7d5":"31d6cfe0","chunk-2d22d052":"31d6cfe0","chunk-d07a3fde":"cbda0d3f","chunk-34c8f764":"31d6cfe0","chunk-435f9678":"744bc759","chunk-dca0f01e":"736d1035","chunk-615326fc":"31d6cfe0","chunk-2f8e309a":"3ea1acbf","chunk-aa876e0e":"0383dced"}[e]+".css",c=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){s=d[a],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/p-webid/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([1,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t,n){e.exports=n("56d7")},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),c=(n("96cf"),n("1da1"));r["default"].use(o["a"]);var i=solid.auth,a=new SolidFileClient(i),u={folder:{},file:null,content:null},s={setFolder:function(e,t){e.folder=t},setFile:function(e,t){e.file=t},setContent:function(e,t){e.content=t}},l={updateFolder:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,a.readFolder(t);case 2:r=n.sent,console.log(r),e.commit("setFolder",r);case 5:case"end":return n.stop()}}),n)})))()},updateFile:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("FILE",t),e.commit("setFile",t),n.t0=e,n.next=5,a.readFile(t.url);case 5:n.t1=n.sent,n.t0.commit.call(n.t0,"setContent",n.t1);case 7:case"end":return n.stop()}}),n)})))()}},d={namespaced:!0,state:u,actions:l,mutations:s};n("b0c0"),n("d3b7"),n("ddb0");r["default"].use(o["a"]);var f=solid.auth,p=(new SolidFileClient(f),{profile:{webId:null,types:null}}),h={setProfile:function(e,t){console.log("mut",t),e.profile=t}},b={setWebId:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("action",t),r={},r.webId=t,null==t){n.next=16;break}return n.next=6,solid.data[t].storage;case 6:return o=n.sent,n.next=9,solid.data[t].name;case 9:return c=n.sent,n.next=12,solid.data[t].type.values;case 12:i=n.sent,r.storage="".concat(o),r.name="".concat(c),r.types="".concat(i);case 16:e.commit("setProfile",r);case 17:case"end":return n.stop()}}),n)})))()}},m={namespaced:!0,state:p,actions:b,mutations:h},v=function(){return{channel:null,users:{"https://spoggy-test3.solidcommunity.net/profile/card#me":{pic:"boo"}},root:"",fileUrl:"",messages:[]}},g={},k={},w={setChannel:function(e,t){console.log(t),e.channel=t},setUser:function(e,t){console.log("User",t);var n=t.webId,r=t.pic;e.users[n]=r},setFileUrl:function(e,t){e.fileUrl=t},setRoot:function(e,t){console.log(t),e.root=t},setMessages:function(e,t){e.messages=t}},y={namespaced:!0,state:v,getters:g,actions:k,mutations:w},_=(n("4160"),n("ac1f"),n("8a79"),n("5319"),n("1276"),n("498a"),n("159b"),n("b85c")),x=n("4d8d"),O=n("6dc1"),j=solid.auth,S=new SolidFileClient(j),R=function(){return{workspaces:[],storage:"",currentWorkspace:{}}},L={},I={getUserWorkspaces:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,o,c,i,a,u,s,l,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootState.profile.profile.storage+"public/popock/workspaces.ttl",r={},o=[],t.prev=3,t.next=6,Object(x["b"])(n);case 6:r=t.sent,c=r.getAllSubjectsOfType("http://www.w3.org/ns/pim/space#Workspace"),i=Object(_["a"])(c);try{for(i.s();!(a=i.n()).done;)u=a.value,s=u.getLiteral(O["d"].label),l=u.getRef("http://www.w3.org/ns/pim/space#storage"),d=u.getRef("http://www.w3.org/ns/solid/terms#webId"),o.push({name:s,path:l,pod:d,subject:u.asRef().split("#")[1]}),e.commit("updateWorkspaces",o)}catch(f){i.e(f)}finally{i.f()}t.next=14;break;case 12:t.prev=12,t.t0=t["catch"](3);case 14:case"end":return t.stop()}}),t,null,[[3,12]])})))()},addWorkspace:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootState.profile.profile.storage+"public/popock/workspaces.ttl",o=t.name.replace(/\s/g,"_"),t.subject=o,t.path=e.rootState.profile.profile.storage+"public/"+o+"/",c={},n.prev=5,n.next=8,Object(x["b"])(r);case 8:c=n.sent,n.next=16;break;case 11:return n.prev=11,n.t0=n["catch"](5),n.next=15,Object(x["a"])(r);case 15:c=n.sent;case 16:return i=c.addSubject({identifier:o}),i.addRef(O["d"].type,"http://www.w3.org/ns/pim/space#Workspace"),i.addLiteral(O["e"].label,t.name.trim()),i.addRef("http://www.w3.org/ns/pim/space#storage",t.path.trim()),i.addRef("http://www.w3.org/ns/solid/terms#webId",t.pod.trim()),n.next=23,c.save();case 23:console.log(r),e.commit("addWorkspace",t);case 25:case"end":return n.stop()}}),n,null,[[5,11]])})))()},updateWorkspaces:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootState.profile.profile.storage+"public/popock/workspaces.ttl",console.log(r),S.delete(r),n.next=5,Object(x["a"])(r);case 5:return o=n.sent,t.forEach((function(e){var t=e.subject||e.name.replace(/\s/g,"_");e.path=e.path.trim().endsWith("/")?e.path.trim():e.path+"/";var n=o.addSubject({identifier:t});n.addRef(O["d"].type,"http://www.w3.org/ns/pim/space#Workspace"),n.addLiteral(O["e"].label,e.name.trim()),n.addRef("http://www.w3.org/ns/pim/space#storage",e.path.trim()),n.addRef("http://www.w3.org/ns/solid/terms#webId",e.pod.trim())})),n.next=9,o.save();case 9:e.commit("updateWorkspaces",t);case 10:case"end":return n.stop()}}),n)})))()}},T={addWorkspace:function(e,t){e.workspaces.push(t)},updateWorkspaces:function(e,t){e.workspaces=t},setCurrentWorkspace:function(e,t){e.currentWorkspace=t}},$={namespaced:!0,state:R,getters:L,actions:I,mutations:T};r["default"].use(o["a"]);t["a"]=new o["a"].Store({state:{},mutations:{},actions:{},modules:{storage:d,profile:m,workspaces:$,chat:y}})},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("SolidLoginButton")],1),n("router-view"),n("SolidTrackSession")],1)},c=[],i=(n("d3b7"),{name:"App",components:{SolidLoginButton:function(){return n.e("chunk-bb31f2b4").then(n.bind(null,"e9a1"))},SolidTrackSession:function(){return n.e("chunk-4511d566").then(n.bind(null,"c1a7"))}}}),a=i,u=(n("5c0b"),n("2877")),s=Object(u["a"])(a,o,c,!1,null,null,null),l=s.exports,d=n("4360"),f=n("5f5b"),p=n("b1e0"),h=(n("4de4"),n("5530")),b={cutoff:50},m={install:function(e,t){e.VERSION="v0.0.1";var n=Object(h["a"])(Object(h["a"])({},b),t);e.mixin({}),e.prototype.$italicHTML=function(e){return"<i>"+e+"</i>"},e.prototype.$boldHTML=function(e){return"<b>"+e+"</b>"},e.filter("preview",(function(e){return e?e.substring(0,n.cutoff)+"...":""})),e.directive("focus",{inserted:function(e){e.focus()}})}},v=(n("baa5"),{cutoff:50}),g={install:function(e,t){e.VERSION="v0.0.1";var n=Object(h["a"])(Object(h["a"])({},v),t);e.mixin({}),e.prototype.$italicHTML=function(e){return"<i>"+e+"</i>"},e.prototype.$boldHTML=function(e){return"<b>"+e+"</b>"},e.filter("preview",(function(e){return e?e.substring(0,n.cutoff)+"...":""})),e.filter("localname",(function(e){if(!e)return"";var t=e;return void 0!=e&&(t=-1!=e.lastIndexOf("#")?e.substr(e.lastIndexOf("#")).substr(1):e.substr(e.lastIndexOf("/")).substr(1),t=0==t.length?e:t),t})),e.directive("focus",{inserted:function(e){e.focus()}})}},k={cutoff:50},w={install:function(e,t){e.VERSION="v0.0.1";var n=Object(h["a"])(Object(h["a"])({},k),t);e.mixin({created:function(){}}),e.prototype.$italicHTML=function(e){return"<i>"+e+"</i>"},e.prototype.$boldHTML=function(e){return"<b>"+e+"</b>"},e.filter("preview",(function(e){return e?e.substring(0,n.cutoff)+"...":""})),e.directive("focus",{inserted:function(e){e.focus()}})}},y=(n("f9e3"),n("2dd8"),n("8c4f")),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[void 0!=e.invitation?r("div",[r("InvitationView",{attrs:{invitation:e.invitation}}),e._v(" "+e._s(e.invitation)+" ")],1):void 0==e.url?r("div",[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("hr"),r("router-link",{attrs:{to:"/?invitation=https://spoggy-test7.solidcommunity.net/public/gouvernance/groups/Les_Grapheurs_Fous.ttl"}},[e._v("Invitation Grapheurs Fous")]),e._v(" | "),r("router-link",{attrs:{to:"/?invitation=https://spoggy-test7.solidcommunity.net/public/gouvernance/groups/Solid_Users.ttl#this"}},[e._v("Invitation Solid Users Group")]),e._v(" | "),r("router-link",{attrs:{to:"/?invitation=https://spoggy-test7.solidcommunity.net/public/gouvernance/groups/Assembl%C3%A9e_Virtuelle.ttl#this"}},[e._v("Invitation Assemblée Virtuelle")]),e._v(" | "),r("router-link",{attrs:{to:"/?invitation=Choose the groupe where you want to invite someone or Create a Group"}},[e._v("Inviter")]),r("hr"),e._v(" Login: "),r("Login"),r("Profile"),e._v(" Webid: "),r("Webid"),e._v(" Storage: "),r("Storage"),e._v(" Todo : "),r("Todo")],1):r("div",[e._v(" url : "+e._s(e.url)+" "),r("b-card-group",{attrs:{columns:""}},e._l(e.things,(function(e){return r("Generique",{key:e.internal_url,attrs:{thing:e}})})),1),e._l(e.tests,(function(t){return r("b-button",{key:t.url,staticClass:"sm",on:{click:function(n){return e.test(t.url)}}},[e._v("show "+e._s(t.name))])}))],2),e._v(" ADD AWESOME-VUJS KANBAN "),r("div",{domProps:{innerHTML:e._s(e.$italicHTML("test plugin"))}}),r("div",{domProps:{innerHTML:e._s(e.$boldHTML("test plugin"))}}),e._v(" "+e._s(e._f("preview")("blallnnklalnlknz rikjlmkfdqs eimik"))+" "),r("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text",placeholder:"Directive from plugin..."}})])},x=[],O=(n("96cf"),n("1da1")),j=n("8522"),S=n("93ef"),R={name:"Home",components:{Login:function(){return n.e("chunk-2d0c8e41").then(n.bind(null,"578a"))},Webid:function(){return n.e("chunk-744a9436").then(n.bind(null,"1290d"))},Profile:function(){return n.e("chunk-cf60aba4").then(n.bind(null,"66aa"))},Todo:function(){return n.e("chunk-dace4852").then(n.bind(null,"ebdb"))},Storage:function(){return n.e("chunk-7721e616").then(n.bind(null,"cd91e"))},Generique:function(){return Promise.all([n.e("chunk-2d21d458"),n.e("chunk-731e5652")]).then(n.bind(null,"11a9"))},InvitationView:function(){return Promise.all([n.e("chunk-2d21d458"),n.e("chunk-68a4abc1")]).then(n.bind(null,"0a4a"))}},data:function(){return{url:void 0,invitation:void 0,things:[],group_things:[],tests:[{name:"profile",url:"https://spoggy-test7.solidcommunity.net/profile/card#me"},{name:"blog",url:"https://spoggy-test.solidcommunity.net/public/blog/2020-11-03.ttl"},{name:"graphs",url:"https://spoggy.solidcommunity.net/public/Graphs/CollaborativeGraph.ttl"}]}},created:function(){this.update()},methods:{update:function(){void 0!=this.$route.query.url?(this.url=void 0!=this.$route.query.hash?this.$route.query.url+this.$route.query.hash:this.$route.query.url,this.updateUrl()):this.url=void 0,console.log(this.$route.query),void 0!=this.$route.query.invitation?(this.invitation=void 0!=this.$route.query.hash?this.$route.query.invitation+this.$route.query.hash:this.$route.query.invitation,console.log(this.invitation)):this.invitation=void 0},test:function(e){console.log(e),this.$router.push({path:"/",query:{url:e}})},updateUrl:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(S["a"])(e.url);case 2:n=t.sent,e.things=Object(S["c"])(n,e.url);case 4:case"end":return t.stop()}}),t)})))()},login:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.session=new j["Session"],t.next=3,e.session.handleIncomingRedirect(window.location.href);case 3:if(e.session.info.isLoggedIn){t.next=6;break}return t.next=6,e.session.login({oidcIssuer:"https://inrupt.net",redirectUrl:window.location.href});case 6:case"end":return t.stop()}}),t)})))()}},watch:{$route:function(e,t){this.update()},thing:function(){this.updateUrl()}}},L=R,I=Object(u["a"])(L,_,x,!1,null,null,null),T=I.exports;r["default"].use(y["a"]);var $=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new y["a"]({mode:"history",base:"/p-webid/",routes:$}),W=C;r["default"].use(f["a"]),r["default"].use(p["a"]),r["default"].use(m,{cutoff:100}),r["default"].use(g,{cutoff:100}),r["default"].use(w,{cutoff:100}),r["default"].config.productionTip=!1,new r["default"]({store:d["a"],router:W,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.4c70571c.js.map