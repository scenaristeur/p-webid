(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24997c3a"],{"11a9":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"generique"},[r("div",[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-title",[t._v(t._s(t.resource.titre))]),t.resource.content?r("b-card-text",[t._v(" "+t._s(t.resource.content)+" ")]):t._e(),r("b-card-text",[t._v("[[ predicats list ]]")]),r("b-button",{staticClass:"sm",attrs:{to:"/?url="+t.thing.internal_url,variant:"primary"}},[t._v("More")]),r("b-card-footer",[r("small",[t.resource.created?r("Date",{attrs:{dateIso:t.resource.created}}):t._e(),t.resource.maker?r("UserName",{attrs:{webId:t.resource.maker}}):t._e(),t._v(" "+t._s(t.resource.shortTypes)),r("br"),r("a",{attrs:{href:t.thing.internal_url,target:"_blank"}},[t._v("url")])],1)])],1)],1)])},s=[],i=(r("4de4"),r("caad"),r("d81d"),r("d3b7"),r("2532"),r("93ef")),a=r("d11f"),c=r("54b6"),o={name:"Generique",props:["thing"],mixins:[c["a"]],components:{UserName:function(){return r.e("chunk-2d21ee7d").then(r.bind(null,"d80c"))},Date:function(){return r.e("chunk-2d228c54").then(r.bind(null,"db33"))}},data:function(){return{resource:{}}},created:function(){this.updateThing()},methods:{updateThing:function(){this.resource={},this.resource.titre=Object(i["b"])(this.thing,a["d"].label)||Object(i["b"])(this.thing,a["e"].fn),this.resource.types=Object(i["e"])(this.thing,a["c"].type),this.populateFromTypes()},populateFromTypes:function(){var t=this;switch(this.resource.shortTypes=this.resource.types.map((function(e){return t.localname(e)})).filter(this.onlyUnique),!0){case this.resource.shortTypes.includes("Article"):this.resource.content=Object(i["b"])(this.thing,"http://rdfs.org/sioc/ns#content"),this.resource.maker=Object(i["d"])(this.thing,a["b"].maker),this.resource.created=Object(i["b"])(this.thing,a["a"].created);break;default:console.log("todo",this.resource.shortTypes)}}},watch:{thing:function(){this.updateThing()}}},u=o,d=r("2877"),h=Object(d["a"])(u,n,s,!1,null,null,null);e["default"]=h.exports},2532:function(t,e,r){"use strict";var n=r("23e7"),s=r("5a34"),i=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(i(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"54b6":function(t,e,r){"use strict";r("c975"),r("baa5");e["a"]={methods:{localname:function(t){var e=t;return void 0!=t&&(e=-1!=t.lastIndexOf("#")?t.substr(t.lastIndexOf("#")).substr(1):t.substr(t.lastIndexOf("/")).substr(1),e=0==e.length?t:e),e},onlyUnique:function(t,e,r){return r.indexOf(t)===e}}}},c975:function(t,e,r){"use strict";var n=r("23e7"),s=r("4d64").indexOf,i=r("a640"),a=r("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),d=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:o||!u||!d},{indexOf:function(t){return o?c.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,r){"use strict";var n=r("23e7"),s=r("4d64").includes,i=r("44d2"),a=r("ae40"),c=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d81d:function(t,e,r){"use strict";var n=r("23e7"),s=r("b727").map,i=r("1dde"),a=r("ae40"),c=i("map"),o=a("map");n({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-24997c3a.8520c8fe.js.map