(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ee4e328"],{"6ebd":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:""},scopedSlots:e._u([{key:"tabs-end",fn:function(){return[r("b-nav-item",{attrs:{role:"presentation",href:"#"},on:{click:function(t){return t.preventDefault(),e.newItem(t)}}},[r("b",[e._v("+")])])]},proxy:!0},{key:"empty",fn:function(){return[r("div",{staticClass:"text-center text-muted"},[e._v(" Il n'y a aucun "+e._s(e.block.type)+" ouvert"),r("br"),e._v(" Ouvrez un nouveau "+e._s(e.block.type)+" en cliquant sur le bouton "),r("b",[e._v("+")]),e._v(" juste au dessus. ")])]},proxy:!0}])},[e._l(e.items,(function(t){return r("b-tab",{key:"dyn-tab-"+t.id,attrs:{title:t.name}},[e._v(" "+e._s(t.name)+" "),r("b-button",{staticClass:"float-right",attrs:{size:"sm",variant:"danger"},on:{click:function(r){return e.closeItem(t)}}},[e._v(" Close "+e._s(e.block.type)+" ")])],1)})),e._l(e.folder.folders,(function(t){return r("b-button",{key:t.url},[e._v(e._s(t.name))])})),r("b-list-group",e._l(e.folder.files.slice().reverse(),(function(t){return r("b-list-group-item",{key:t.url},[e._v(e._s(t.name))])})),1)],2)],1)],1)},o=[],s=(r("a434"),r("96cf"),r("1da1")),i=r("4360"),u={store:i["a"],name:"List",props:["url","block"],created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.update();case 1:case"end":return t.stop()}}),t)})))()},data:function(){return{items:[],itemCounter:0,folder:{folders:[],files:[]}}},methods:{closeItem:function(e){for(var t=0;t<this.items.length;t++)this.items[t]===e&&this.items.splice(t,1)},newItem:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={id:e.itemCounter,name:e.block.type+"#_"+e.itemCounter,block:e.block},t.next=3,e.$add(r);case 3:r=t.sent,console.log(r),e.items.push(r),e.itemCounter++,e.$router.push({path:"/edit",query:{item:r}});case 8:case"end":return t.stop()}}),t)})))()},update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.webId=e.$store.state.profile.profile.webId,e.block.url=e.url,t.next=4,e.$getStorage(e.url);case 4:return e.block.storage=t.sent,e.block.path=e.block.storage+e.block.type+"/",t.next=8,e.$update(e.block);case 8:e.folder=t.sent;case 9:case"end":return t.stop()}}),t)})))()}},watch:{webId:function(){console.log("watch webid",this.webId)},url:function(){this.update()},block:function(){this.update()}},computed:{webId:{get:function(){return this.$store.state.profile.profile.webId},set:function(){}}}},a=u,c=r("2877"),l=Object(c["a"])(a,n,o,!1,null,null,null);t["default"]=l.exports},a434:function(e,t,r){"use strict";var n=r("23e7"),o=r("23cb"),s=r("a691"),i=r("50c4"),u=r("7b0b"),a=r("65f0"),c=r("8418"),l=r("1dde"),f=r("ae40"),d=l("splice"),b=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,m=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!b},{splice:function(e,t){var r,n,l,f,d,b,w=u(this),k=i(w.length),g=o(e,k),_=arguments.length;if(0===_?r=n=0:1===_?(r=0,n=k-g):(r=_-2,n=m(p(s(t),0),k-g)),k+r-n>h)throw TypeError(v);for(l=a(w,n),f=0;f<n;f++)d=g+f,d in w&&c(l,f,w[d]);if(l.length=n,r<n){for(f=g;f<k-n;f++)d=f+n,b=f+r,d in w?w[b]=w[d]:delete w[b];for(f=k;f>k-n+r;f--)delete w[f-1]}else if(r>n)for(f=k-n;f>g;f--)d=f+n-1,b=f+r-1,d in w?w[b]=w[d]:delete w[b];for(f=0;f<r;f++)w[f+g]=arguments[f+2];return w.length=k-n+r,l}})}}]);
//# sourceMappingURL=chunk-5ee4e328.11328dab.js.map