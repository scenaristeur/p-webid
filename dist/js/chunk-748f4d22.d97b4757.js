(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-748f4d22"],{"6ca7":function(t,n,e){},de01:function(t,n,e){"use strict";e("6ca7")},f3b0:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t._v(" Cockpit (spoggy-group) "),e("div",[e("b-tabs",{attrs:{"content-class":"m-1",fill:""}},t._l(t.blocks,(function(n){return e("b-tab",{key:n.name,scopedSlots:t._u([{key:"title",fn:function(){return[void 0!=n.icon?e("b-icon",{attrs:{icon:n.icon}}):e("div",[t._v(t._s(n.name))]),e("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",variant:"outilne-primary"}},[e("b-dropdown-item",{on:{click:function(e){return t.add(n)}}},[t._v("Ajouter")]),e("b-dropdown-item",[t._v("Second Action")]),e("b-dropdown-item",[t._v("Third Action")]),e("b-dropdown-divider"),e("b-dropdown-item",{attrs:{active:""}},[t._v("Active action")]),e("b-dropdown-item",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0}],null,!0)},[e("div",{staticClass:"scroll"},["Wiki"==n.type?e("div",[e("Wiki",{attrs:{url:t.url}})],1):t._e(),"Chat"==n.type?e("div",[e("ChatList",{attrs:{url:t.url}})],1):e("div",{domProps:{innerHTML:t._s(n.description)}}),e("b",[t._v(t._s(n.name))]),t._v(" for "+t._s(t.url)+"."),e("br")])])})),1)],1),e("Projets")],1)},o=[],r=(e("d3b7"),e("96cf"),e("1da1")),c=e("4360"),a={store:c["a"],name:"Cockpit",components:{Projets:function(){return e.e("chunk-34c8f764").then(e.bind(null,"dc60"))},Wiki:function(){return e.e("chunk-435f9678").then(e.bind(null,"773d"))},ChatList:function(){return e.e("chunk-dca0f01e").then(e.bind(null,"cbc6"))}},props:["url"],created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.webId=t.$store.state.profile.profile.webId;case 1:case"end":return n.stop()}}),n)})))()},data:function(){return{blocks:[{type:"Tension",name:"Tensions",icon:"lightning"},{type:"Action",name:"Mes prochaines actions",icon:"file-play"},{type:"Checklist",name:"CheckList",icon:"list-check",description:"Ce dont on a besoin pour terminer une action ou un projet. <br>   [[ voir spoggy-group pour l'ajout , checkbox]]"},{type:"Indicateur",name:"Indicateurs",icon:"file-earmark-bar-graph"},{type:"Reunion",name:"Réunions",icon:"calendar3"},{type:"Wiki",name:"Wiki",icon:"receipt",description:"La fonctionnalité de création d'article sera bientôt opérationnelle. En attendant, vous pouvez utiliser <a href='https://scenaristeur.github.io/solid-vue-panes/post' target='_blank'>Popock post</a> et notamment l'outil Dokieli"},{type:"Chat",name:"Chat",icon:"chat"},{type:"Celebration",name:"Celebration",icon:"trophy"}]}},methods:{paneChange:function(t){console.log(t)},add:function(t){console.log("block",t)}},watch:{webId:function(){console.log("watch webid",this.webId)}},computed:{webId:{get:function(){return this.$store.state.profile.profile.webId},set:function(){}}}},s=a,u=(e("de01"),e("2877")),d=Object(u["a"])(s,i,o,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-748f4d22.d97b4757.js.map