(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-615326fc"],{"13be":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"webid"},[n("b-badge",[e._v(e._s(e.type))]),n("b-badge",{attrs:{variant:"light"}},[n("UserName",{attrs:{webId:e.actor}})],1),"Offer"==e.type?n("span",[n("b-badge",{attrs:{variant:"success"}},[e._v("accept")]),n("b-badge",{attrs:{variant:"danger"}},[e._v("reject")])],1):e._e(),n("br"),e._v(" "+e._s(e.summary)+" ")],1)},a=[],s=(n("d3b7"),n("96cf"),n("1da1")),c=n("4360"),i=n("4d8d"),u=n("6dc1"),o=n("54b6"),d={store:c["a"],name:"InboxSummaryLine",props:["url"],mixins:[o["a"]],components:{UserName:function(){return n.e("chunk-2d21ee7d").then(n.bind(null,"d80c"))}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.webId=e.$store.state.profile.profile.webId,e.update();case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{summary:"",type:"",actor:"",object:""}},methods:{update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["b"])(e.url);case 2:n=t.sent,r=n.getSubject(e.url+"#it"),e.summary=r.getString("https://www.w3.org/ns/activitystreams#summary"),e.actor=r.getRef("https://www.w3.org/ns/activitystreams#actor"),e.object=r.getRef("https://www.w3.org/ns/activitystreams#object"),e.type=e.localname(r.getRef(u["d"].type));case 8:case"end":return t.stop()}}),t)})))()}},watch:{webId:function(){console.log("watch webid",this.webId)}},computed:{webId:{get:function(){return this.$store.state.profile.profile.webId},set:function(){}}}},f=d,b=n("2877"),l=Object(b["a"])(f,r,a,!1,null,null,null);t["default"]=l.exports},"54b6":function(e,t,n){"use strict";n("c975"),n("baa5");t["a"]={methods:{localname:function(e){var t=e;return void 0!=e&&(t=-1!=e.lastIndexOf("#")?e.substr(e.lastIndexOf("#")).substr(1):e.substr(e.lastIndexOf("/")).substr(1),t=0==t.length?e:t),t},onlyUnique:function(e,t,n){return n.indexOf(e)===t}}}},c975:function(e,t,n){"use strict";var r=n("23e7"),a=n("4d64").indexOf,s=n("a640"),c=n("ae40"),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0,o=s("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!o||!d},{indexOf:function(e){return u?i.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-615326fc.bdc49577.js.map