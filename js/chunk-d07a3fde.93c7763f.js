(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d07a3fde"],{1040:function(e,t,o){"use strict";o("aa60")},aa60:function(e,t,o){},bec7:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"webid row "},[o("div",{staticClass:"col-lg-5"},[o("a",{attrs:{href:e.webId,target:"_blank"}},[e._v(e._s(e.webId))]),o("b-alert",{staticClass:"row",attrs:{variant:"success",show:""}},[o("EditableDiv",{attrs:{placeholder:"your NAME"},on:{input:e.update},model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}}),o("ul",[o("small",[o("li",[o("u",[e._v("is a")])]),e.profile.role?o("li",[e._v("rdf:type")]):e._e()])]),o("EditableDiv",{attrs:{placeholder:"your ROLE"},on:{input:e.update},model:{value:e.profile.role,callback:function(t){e.$set(e.profile,"role",t)},expression:"profile.role"}}),o("ul",[o("small",[o("li",[e._v("at")]),e.profile.organization?o("li",[o("code",[e._v("@prefix org: "+e._s(e.org)+". "),o("br"),e._v(" org:subOrganizationOf")])]):e._e()])]),o("EditableDiv",{attrs:{placeholder:"your ORGANIZATION"},on:{input:e.update},model:{value:e.profile.organization,callback:function(t){e.$set(e.profile,"organization",t)},expression:"profile.organization"}}),e._v(". ")],1),o("small",[o("b-alert",{staticClass:"row",attrs:{variant:"success",show:""}},[o("ul",[o("li",[e._v(" Located at ")]),e.profile.locality?o("li",[o("code",[e._v(e._s(e.location))])]):e._e()]),o("EditableDiv",{attrs:{placeholder:"your LOCALITY"},on:{input:e.update},model:{value:e.profile.locality,callback:function(t){e.$set(e.profile,"locality",t)},expression:"profile.locality"}}),o("ul",[o("li",[e._v("in")]),e.profile.country?o("li",[o("code",[e._v(e._s(e.org)),o("br")])]):e._e()]),o("EditableDiv",{attrs:{placeholder:"your COUNTRY"},on:{input:e.update},model:{value:e.profile.country,callback:function(t){e.$set(e.profile,"country",t)},expression:"profile.country"}}),e._v(". ")],1)],1)],1),o("div",{staticClass:"col-lg-5"},[o("div",{staticClass:"media"},[o("a",{staticClass:"pull-left",attrs:{href:"#"}},[o("img",{staticClass:"media-object dp img-circle",staticStyle:{width:"100px",height:"100px"},attrs:{src:e.profile.photo}})])])])])},l=[],a=(o("d3b7"),o("96cf"),o("1da1")),r=o("4360"),n={store:r["a"],name:"PersonView",components:{EditableDiv:function(){return o.e("chunk-2f8e309a").then(o.bind(null,"aa68"))}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.webId=e.$store.state.profile.profile.webId;case 1:case"end":return t.stop()}}),t)})))()},data:function(){return{location:"<http://schema.org/location>",org:"<http://www.w3.org/ns/org#>"}},watch:{webId:function(){console.log("watch webid",this.webId)}},computed:{webId:{get:function(){return this.$store.state.profile.profile.webId},set:function(){}},profile:function(){return this.$store.state.profile.profile},profile_url:{get:function(){return this.$store.state.profile.storage+"public/salut/profile.ttl"},set:function(){}}},methods:{update:function(){console.log(this.profile),this.$store.dispatch("solid/updateProfile",this.profile)}}},s=n,c=(o("1040"),o("2877")),u=Object(c["a"])(s,i,l,!1,null,"7f28a726",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-d07a3fde.93c7763f.js.map