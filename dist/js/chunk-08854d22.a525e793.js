(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08854d22"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),l=n("5530"),i=(n("13d5"),n("caad"),n("2532"),n("99af"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),r=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],s=["start","end","center"];function u(t,e){return c.reduce((function(n,a){return n[t+Object(o["A"])(a)]=e(),n}),{})}var d=function(t){return[].concat(s,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(s,["space-between","space-around"]).includes(t)},b=u("justify",(function(){return{type:String,default:null,validator:p}})),g=function(t){return[].concat(s,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:g}})),v={align:Object.keys(f),justify:Object.keys(b),alignContent:Object.keys(m)},y={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,n){var a=y[t];if(null!=n){if(e){var l=e.replace(t,"");a+="-".concat(l)}return a+="-".concat(n),a.toLowerCase()}}var j=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(l["a"])(Object(l["a"])(Object(l["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},b),{},{alignContent:{type:String,default:null,validator:g}},m),render:function(t,e){var n=e.props,l=e.data,i=e.children,o="";for(var c in n)o+=String(n[c]);var s=j.get(o);return s||function(){var t,e;for(e in s=[],v)v[e].forEach((function(t){var a=n[t],l=h(e,t,a);l&&s.push(l)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),j.set(o,s)}(),t(n.tag,Object(r["a"])(l,{staticClass:"row",class:s}),i)}})},"4b85":function(t,e,n){},"62ad":function(t,e,n){"use strict";var a=n("ade3"),l=n("5530"),i=(n("13d5"),n("a9e3"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),r=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],s=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(o["A"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(o["A"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(s),offset:Object.keys(u),order:Object.keys(d)};function p(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var l=e.replace(t,"");a+="-".concat(l)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var b=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,l=e.data,i=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var s=b.get(o);return s||function(){var t,e;for(e in s=[],f)f[e].forEach((function(t){var a=n[t],l=p(e,t,a);l&&s.push(l)}));var l=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!l||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),b.set(o,s)}(),t(n.tag,Object(r["a"])(l,{class:s}),i)}})},a523:function(t,e,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85");var a=n("e8f2"),l=n("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,i=e.data,r=e.children,o=i.attrs;return o&&(i.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(l["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),r)}})},d61a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("element-setting-input-box",{attrs:{value:t.element["type"],type:"textField",label:"type","hide-details":"",dense:"",outlined:"",disabled:""}}),n("element-setting-input-box",{attrs:{value:t.element["id"],type:"textField",label:"id",disabled:"",dense:"",outlined:"","hide-details":""}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"textField",label:"color","hide-details":"",dense:"",outlined:""},model:{value:t.element["color"],callback:function(e){t.$set(t.element,"color",e)},expression:"element['color']"}}),n("v-divider",{staticClass:"my-6"}),n("v-row",{staticClass:"align-center"},[n("span",{staticClass:"text-h5 font-weight-bold"},[t._v("Margin")])]),n("element-setting-input-box",{attrs:{"input-class":"white",type:"textField",label:"marginTop","hide-details":"",dense:"",outlined:""},model:{value:t.element["marginTop"],callback:function(e){t.$set(t.element,"marginTop",e)},expression:"element['marginTop']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"textField",label:"marginRight","hide-details":"",dense:"",outlined:""},model:{value:t.element["marginRight"],callback:function(e){t.$set(t.element,"marginRight",e)},expression:"element['marginRight']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"textField",label:"marginBottom","hide-details":"",dense:"",outlined:""},model:{value:t.element["marginBottom"],callback:function(e){t.$set(t.element,"marginBottom",e)},expression:"element['marginBottom']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"textField",label:"marginLeft","hide-details":"",dense:"",outlined:""},model:{value:t.element["marginLeft"],callback:function(e){t.$set(t.element,"marginLeft",e)},expression:"element['marginLeft']"}})],1)},l=[],i=n("fd0c"),r={name:"TBoxSettingPanel",components:{ElementSettingInputBox:i["a"]},props:{element:{type:Object,default:function(){}}}},o=r,c=n("2877"),s=n("6544"),u=n.n(s),d=n("a523"),f=n("ce7e"),p=n("0fd9"),b=Object(c["a"])(o,a,l,!1,null,null,null);e["default"]=b.exports;u()(b,{VContainer:d["a"],VDivider:f["a"],VRow:p["a"]})},fd0c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[n("label",[t._v(t._s(t.label))])]),n("v-col",{attrs:{cols:"9"}},[n(t.input,t._g(t._b({tag:"component",class:t.inputClass,attrs:{value:t.value}},"component",t.attrs,!1),t.$listeners))],1)],1)},l=[],i=n("5530"),r=n("8654"),o=n("b974"),c={name:"ElementSettingInputBox",components:{VTextField:r["a"],VSelect:o["a"]},props:{label:{type:String,default:""},inputClass:{type:[Object,Array,String],default:""},value:{},type:{type:String,default:"textField"},items:{type:Array,default:function(){return[]}}},computed:{attrs:function(){var t,e={textField:this.$attrs,select:Object(i["a"])(Object(i["a"])({},this.$attrs),{},{items:this.items})};return null!==(t=e[this.type])&&void 0!==t?t:e["textField"]},input:function(){var t,e={textField:"v-text-field",select:"v-select"};return null!==(t=e[this.type])&&void 0!==t?t:e["textField"]}}},s=c,u=n("2877"),d=n("6544"),f=n.n(d),p=n("62ad"),b=n("0fd9"),g=Object(u["a"])(s,a,l,!1,null,null,null);e["a"]=g.exports;f()(g,{VCol:p["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-08854d22.a525e793.js.map