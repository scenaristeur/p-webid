(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf960b2"],{"11a8":function(t,e){function r(t){this.value=t}r.prototype.equals=function(t){return!!t&&t.termType===this.termType&&t.value===this.value},r.prototype.termType="NamedNode",t.exports=r},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},"3cf1":function(t,e,r){var n=r("47b7"),o=r("d76c"),a=r("5afa"),i=r("11a8"),c=r("e1cc"),u=r("a55c");function s(){}s.namedNode=function(t){return new i(t)},s.blankNode=function(t){return new n(t)},s.literal=function(t,e){return"string"===typeof e?-1===e.indexOf(":")?new a(t,e):new a(t,null,s.namedNode(e)):new a(t,null,e)},s.defaultGraph=function(){return s.defaultGraphInstance},s.variable=function(t){return new u(t)},s.triple=function(t,e,r){return s.quad(t,e,r)},s.quad=function(t,e,r,n){return new c(t,e,r,n||s.defaultGraphInstance)},s.defaultGraphInstance=new o,t.exports=s},"47b7":function(t,e){function r(t){this.value=t||"b"+ ++r.nextId}r.prototype.equals=function(t){return!!t&&t.termType===this.termType&&t.value===this.value},r.prototype.termType="BlankNode",r.nextId=0,t.exports=r},"5afa":function(t,e,r){var n=r("11a8");function o(t,e,r){this.value=t,this.datatype=o.stringDatatype,this.language="",e?(this.language=e,this.datatype=o.langStringDatatype):r&&(this.datatype=r)}o.prototype.equals=function(t){return!!t&&t.termType===this.termType&&t.value===this.value&&t.language===this.language&&t.datatype.equals(this.datatype)},o.prototype.termType="Literal",o.langStringDatatype=new n("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),o.stringDatatype=new n("http://www.w3.org/2001/XMLSchema#string"),t.exports=o},"66aa":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.styleObject},[t._v(" Profil: "+t._s(t.profile.types)+" "),r("ViewSelector",{on:{viewSelected:t.viewSelected,templateSelected:t.templateSelected}}),t._l(t.profile_types,(function(e){return r("div",{key:e.name},[r("b-button",{on:{click:function(r){return t.changeType(e)}}},[t._v(t._s(e.name))])],1)}))],2)},o=[],a=(r("b0c0"),r("d3b7"),r("96cf"),r("1da1")),i=r("4360"),c=r("9b92"),u={store:i["a"],name:"Profile",components:{ViewSelector:function(){return r.e("chunk-2d22d052").then(r.bind(null,"f65a"))}},created:function(){this.profile=this.$store.state.profile.profile},data:function(){return{styleObject:{color:"blue",fontSize:"13px"},profile_types:[{name:"Organization"},{name:"Group"},{name:"Person"},{name:"Project"},{name:"Collection"},{name:"..."}]}},methods:{viewSelected:function(t){if(console.log("YEAH SELECTED !",t),"..."!=t){var e={};e.name=t,this.changeType(e)}},templateSelected:function(t){console.log("template",t)},changeType:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=solid.data[e.profile.webId],r.t0=t.name,r.next="Organization"===r.t0?4:"Group"===r.t0?9:"Person"===r.t0?14:"Project"===r.t0?19:"Collection"===r.t0?24:29;break;case 4:return e.profile.types=["http://xmlns.com/foaf/0.1/Organization","http://www.w3.org/ns/org#Organization"],e.styleObject.color="red",r.next=8,n.type.set(Object(c["namedNode"])("http://xmlns.com/foaf/0.1/Organization"),Object(c["namedNode"])("http://www.w3.org/ns/org#Organization"));case 8:return r.abrupt("break",30);case 9:return e.profile.types=["http://xmlns.com/foaf/0.1/Group","http://www.w3.org/ns/org#Group"],e.styleObject.color="green",r.next=13,n.type.set(Object(c["namedNode"])("http://xmlns.com/foaf/0.1/Group"),Object(c["namedNode"])("http://www.w3.org/ns/org#Group"));case 13:return r.abrupt("break",30);case 14:return e.profile.types=["http://xmlns.com/foaf/0.1/Person","http://schema.org/Person"],e.styleObject.color="blue",r.next=18,n.type.set(Object(c["namedNode"])("http://xmlns.com/foaf/0.1/Person"),Object(c["namedNode"])("http://schema.org/Person"));case 18:return r.abrupt("break",30);case 19:return e.profile.types=["http://xmlns.com/foaf/0.1/Project","http://usefulinc.com/ns/doap#Project"],e.styleObject.color="grey",r.next=23,n.type.set(Object(c["namedNode"])("http://xmlns.com/foaf/0.1/Project"),Object(c["namedNode"])("http://usefulinc.com/ns/doap#Project"));case 23:return r.abrupt("break",30);case 24:return e.profile.types=["https://schema.org/Collection","https://www.w3.org/ns/activitystreams#Collection"],e.styleObject.color="purple",r.next=28,n.type.set(Object(c["namedNode"])("https://schema.org/Collection"),Object(c["namedNode"])("https://www.w3.org/ns/activitystreams#Collection"));case 28:return r.abrupt("break",30);case 29:console.log("Contact the support, No action known for ",t.name);case 30:case"end":return r.stop()}}),r)})))()}},watch:{profile:function(){console.log("watch profile",this.profile)}},computed:{profile:{get:function(){return this.$store.state.profile.profile},set:function(t){this.$store.commit("profile/SetProfile",t)}}}},s=u,l=r("2877"),p=Object(l["a"])(s,n,o,!1,null,null,null);e["default"]=p.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=E(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var p="suspendedStart",f="suspendedYield",h="executing",y="completed",d={};function m(){}function g(){}function v(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&n.call(x,a)&&(w=x);var j=v.prototype=m.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"===typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(p).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=p;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return S()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=T(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?y:f,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}function T(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=j.constructor=v,v.constructor=g,g.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(j),u(j,c,"Generator"),j[a]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9b92":function(t,e,r){var n=r("3cf1");t.exports=n},a55c:function(t,e){function r(t){this.value=t}r.prototype.equals=function(t){return!!t&&t.termType===this.termType&&t.value===this.value},r.prototype.termType="Variable",t.exports=r},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in a)&&o(a,u,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},d76c:function(t,e){function r(){this.value=""}r.prototype.equals=function(t){return!!t&&t.termType===this.termType},r.prototype.termType="DefaultGraph",t.exports=r},e1cc:function(t,e,r){var n=r("d76c");function o(t,e,r,o){this.subject=t,this.predicate=e,this.object=r,this.graph=o||new n}o.prototype.equals=function(t){return!!t&&("Quad"===t.termType||!t.termType)&&t.subject.equals(this.subject)&&t.predicate.equals(this.predicate)&&t.object.equals(this.object)&&t.graph.equals(this.graph)},o.prototype.termType="Quad",o.prototype.value="",t.exports=o}}]);
//# sourceMappingURL=chunk-0bf960b2.969830ca.js.map