(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08899c0e"],{"0fd9":function(e,t,n){"use strict";var l=n("ade3"),a=n("5530"),i=(n("13d5"),n("caad"),n("2532"),n("99af"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),r=["sm","md","lg","xl"],d=["start","end","center"];function u(e,t){return r.reduce((function(n,l){return n[e+Object(o["A"])(l)]=t(),n}),{})}var c=function(e){return[].concat(d,["baseline","stretch"]).includes(e)},p=u("align",(function(){return{type:String,default:null,validator:c}})),m=function(e){return[].concat(d,["space-between","space-around"]).includes(e)},f=u("justify",(function(){return{type:String,default:null,validator:m}})),b=function(e){return[].concat(d,["space-between","space-around","stretch"]).includes(e)},g=u("alignContent",(function(){return{type:String,default:null,validator:b}})),v={align:Object.keys(p),justify:Object.keys(f),alignContent:Object.keys(g)},x={align:"align",justify:"justify",alignContent:"align-content"};function h(e,t,n){var l=x[e];if(null!=n){if(t){var a=t.replace(e,"");l+="-".concat(a)}return l+="-".concat(n),l.toLowerCase()}}var y=new Map;t["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c}},p),{},{justify:{type:String,default:null,validator:m}},f),{},{alignContent:{type:String,default:null,validator:b}},g),render:function(e,t){var n=t.props,a=t.data,i=t.children,o="";for(var r in n)o+=String(n[r]);var d=y.get(o);return d||function(){var e,t;for(t in d=[],v)v[t].forEach((function(e){var l=n[e],a=h(t,e,l);a&&d.push(a)}));d.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(l["a"])(e,"align-".concat(n.align),n.align),Object(l["a"])(e,"justify-".concat(n.justify),n.justify),Object(l["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),y.set(o,d)}(),e(n.tag,Object(s["a"])(a,{staticClass:"row",class:d}),i)}})},"4b85":function(e,t,n){},"62ad":function(e,t,n){"use strict";var l=n("ade3"),a=n("5530"),i=(n("13d5"),n("a9e3"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),r=["sm","md","lg","xl"],d=function(){return r.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return r.reduce((function(e,t){return e["offset"+Object(o["A"])(t)]={type:[String,Number],default:null},e}),{})}(),c=function(){return r.reduce((function(e,t){return e["order"+Object(o["A"])(t)]={type:[String,Number],default:null},e}),{})}(),p={col:Object.keys(d),offset:Object.keys(u),order:Object.keys(c)};function m(e,t,n){var l=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");l+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(l+="-".concat(n),l.toLowerCase()):l.toLowerCase()}}var f=new Map;t["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},d),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},c),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,a=t.data,i=t.children,o=(t.parent,"");for(var r in n)o+=String(n[r]);var d=f.get(o);return d||function(){var e,t;for(t in d=[],p)p[t].forEach((function(e){var l=n[e],a=m(t,e,l);a&&d.push(a)}));var a=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!a||!n.cols},Object(l["a"])(e,"col-".concat(n.cols),n.cols),Object(l["a"])(e,"offset-".concat(n.offset),n.offset),Object(l["a"])(e,"order-".concat(n.order),n.order),Object(l["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),f.set(o,d)}(),e(n.tag,Object(s["a"])(a,{class:d}),i)}})},a523:function(e,t,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85");var l=n("e8f2"),a=n("d9f7");t["a"]=Object(l["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,l=t.props,i=t.data,s=t.children,o=i.attrs;return o&&(i.attrs={},n=Object.keys(o).filter((function(e){if("slot"===e)return!1;var t=o[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}))),l.id&&(i.domProps=i.domProps||{},i.domProps.id=l.id),e(l.tag,Object(a["a"])(i,{staticClass:"container",class:Array({"container--fluid":l.fluid}).concat(n||[])}),s)}})},d19d:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("element-setting-input-box",{attrs:{value:e.element["type"],type:"textField",label:"type",disabled:"",dense:"",outlined:"","hide-details":""}}),n("element-setting-input-box",{attrs:{value:e.element["id"],type:"textField",label:"id",disabled:"",dense:"",outlined:"","hide-details":""}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"layout",items:[{text:"horizontal",value:""},{text:"vertical",value:"column"}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["layout"],callback:function(t){e.$set(e.element,"layout",t)},expression:"element['layout']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"grow",items:[{text:"true",value:1},{text:"false",value:0}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["flexGrow"],callback:function(t){e.$set(e.element,"flexGrow",t)},expression:"element['flexGrow']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"shrink",items:[{text:"true",value:1},{text:"false",value:0}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["flexShrink"],callback:function(t){e.$set(e.element,"flexShrink",t)},expression:"element['flexShrink']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"textField",label:"basis","hide-details":"",dense:"",outlined:""},model:{value:e.element["flexBasis"],callback:function(t){e.$set(e.element,"flexBasis",t)},expression:"element['flexBasis']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"borderWidth","hide-details":"",dense:"",outlined:""},model:{value:e.element["borderWidth"],callback:function(t){e.$set(e.element,"borderWidth",t)},expression:"element['borderWidth']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"borderStyle",items:["none","dotted","dashed","solid"],"hide-details":"",dense:"",outlined:""},model:{value:e.element["borderStyle"],callback:function(t){e.$set(e.element,"borderStyle",t)},expression:"element['borderStyle']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"borderColor","hide-details":"",dense:"",outlined:""},model:{value:e.element["borderColor"],callback:function(t){e.$set(e.element,"borderColor",t)},expression:"element['borderColor']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"fillHeight",items:[{text:"true",value:!0},{text:"false",value:!1}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["fillHeight"],callback:function(t){e.$set(e.element,"fillHeight",t)},expression:"element['fillHeight']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"alignItems",items:[{text:"start",value:"align-start"},{text:"center",value:"align-center"},{text:"end",value:"align-end"},{text:"baseline",value:"align-baseline"},{text:"stretch",value:""}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["alignItems"],callback:function(t){e.$set(e.element,"alignItems",t)},expression:"element['alignItems']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"wrap",items:[{text:"true",value:!0},{text:"false",value:!1}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["wrap"],callback:function(t){e.$set(e.element,"wrap",t)},expression:"element['wrap']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"justifyContent",items:[{text:"start",value:"justify-start"},{text:"end",value:"justify-end"},{text:"center",value:"justify-center"},{text:"space between",value:"justify-space-between"},{text:"space around",value:"justify-space-around"}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["justifyContent"],callback:function(t){e.$set(e.element,"justifyContent",t)},expression:"element['justifyContent']"}}),n("v-divider",{staticClass:"my-6"}),n("p",{staticClass:"text-h5 font-weight-bold"},[e._v("Margin")]),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginAll","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginAll"],callback:function(t){e.$set(e.element,"marginAll",t)},expression:"element['marginAll']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginTop","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginTop"],callback:function(t){e.$set(e.element,"marginTop",t)},expression:"element['marginTop']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginLeft","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginLeft"],callback:function(t){e.$set(e.element,"marginLeft",t)},expression:"element['marginLeft']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginBottom","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginBottom"],callback:function(t){e.$set(e.element,"marginBottom",t)},expression:"element['marginBottom']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginRight","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginRight"],callback:function(t){e.$set(e.element,"marginRight",t)},expression:"element['marginRight']"}}),n("v-divider",{staticClass:"my-6"}),n("p",{staticClass:"text-h5 font-weight-bold"},[e._v("Padding")]),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingAll","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingAll"],callback:function(t){e.$set(e.element,"paddingAll",t)},expression:"element['paddingAll']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingTop","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingTop"],callback:function(t){e.$set(e.element,"paddingTop",t)},expression:"element['paddingTop']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingRight","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingRight"],callback:function(t){e.$set(e.element,"paddingRight",t)},expression:"element['paddingRight']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingBottom","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingBottom"],callback:function(t){e.$set(e.element,"paddingBottom",t)},expression:"element['paddingBottom']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingLeft","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingLeft"],callback:function(t){e.$set(e.element,"paddingLeft",t)},expression:"element['paddingLeft']"}})],1)},a=[],i=n("fd0c"),s={name:"TBoxSettingPanel",components:{ElementSettingInputBox:i["a"]},props:{element:{type:Object,default:function(){}}}},o=s,r=n("2877"),d=n("6544"),u=n.n(d),c=n("a523"),p=n("ce7e"),m=Object(r["a"])(o,l,a,!1,null,null,null);t["default"]=m.exports;u()(m,{VContainer:c["a"],VDivider:p["a"]})},fd0c:function(e,t,n){"use strict";var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[n("label",[e._v(e._s(e.label))])]),n("v-col",{attrs:{cols:"9"}},[n(e.input,e._g(e._b({tag:"component",class:e.inputClass,attrs:{value:e.value}},"component",e.attrs,!1),e.$listeners))],1)],1)},a=[],i=n("5530"),s=n("8654"),o=n("b974"),r={name:"ElementSettingInputBox",components:{VTextField:s["a"],VSelect:o["a"]},props:{label:{type:String,default:""},inputClass:{type:[Object,Array,String],default:""},value:{},type:{type:String,default:"textField"},items:{type:Array,default:function(){return[]}}},computed:{attrs:function(){var e,t={textField:this.$attrs,select:Object(i["a"])(Object(i["a"])({},this.$attrs),{},{items:this.items})};return null!==(e=t[this.type])&&void 0!==e?e:t["textField"]},input:function(){var e,t={textField:"v-text-field",select:"v-select"};return null!==(e=t[this.type])&&void 0!==e?e:t["textField"]}}},d=r,u=n("2877"),c=n("6544"),p=n.n(c),m=n("62ad"),f=n("0fd9"),b=Object(u["a"])(d,l,a,!1,null,null,null);t["a"]=b.exports;p()(b,{VCol:m["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-08899c0e.7ccc212a.js.map