(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0df9a602"],{"0fd9":function(e,t,n){"use strict";var l=n("ade3"),i=n("5530"),a=(n("13d5"),n("caad"),n("2532"),n("99af"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),r=["sm","md","lg","xl"],u=["start","end","center"];function c(e,t){return r.reduce((function(n,l){return n[e+Object(o["A"])(l)]=t(),n}),{})}var d=function(e){return[].concat(u,["baseline","stretch"]).includes(e)},p=c("align",(function(){return{type:String,default:null,validator:d}})),m=function(e){return[].concat(u,["space-between","space-around"]).includes(e)},f=c("justify",(function(){return{type:String,default:null,validator:m}})),b=function(e){return[].concat(u,["space-between","space-around","stretch"]).includes(e)},g=c("alignContent",(function(){return{type:String,default:null,validator:b}})),x={align:Object.keys(p),justify:Object.keys(f),alignContent:Object.keys(g)},h={align:"align",justify:"justify",alignContent:"align-content"};function v(e,t,n){var l=h[e];if(null!=n){if(t){var i=t.replace(e,"");l+="-".concat(i)}return l+="-".concat(n),l.toLowerCase()}}var y=new Map;t["a"]=a["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},p),{},{justify:{type:String,default:null,validator:m}},f),{},{alignContent:{type:String,default:null,validator:b}},g),render:function(e,t){var n=t.props,i=t.data,a=t.children,o="";for(var r in n)o+=String(n[r]);var u=y.get(o);return u||function(){var e,t;for(t in u=[],x)x[t].forEach((function(e){var l=n[e],i=v(t,e,l);i&&u.push(i)}));u.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(l["a"])(e,"align-".concat(n.align),n.align),Object(l["a"])(e,"justify-".concat(n.justify),n.justify),Object(l["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),y.set(o,u)}(),e(n.tag,Object(s["a"])(i,{staticClass:"row",class:u}),a)}})},"1c66":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("div",{staticClass:"text-h4 font-weight-bold"},[e._v(" "+e._s(e._f("camelToSentence")(e.element.type))+" ")]),n("element-setting-input-box",{attrs:{value:e.element["type"],type:"textField",label:"type",disabled:"",dense:"",outlined:"","hide-details":""}}),n("element-setting-input-box",{attrs:{value:e.element["id"],type:"textField",label:"id",disabled:"",dense:"",outlined:"","hide-details":""}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"textField",label:"Group","hide-details":"",dense:"",outlined:""},model:{value:e.element["Group"],callback:function(t){e.$set(e.element,"Group",t)},expression:"element['Group']"}}),n("element-setting-input-box",{attrs:{type:"textField","input-class":"white",label:"text",dense:"",outlined:"","hide-details":""},model:{value:e.element["text"],callback:function(t){e.$set(e.element,"text",t)},expression:"element['text']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"width","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["width"],callback:function(t){e.$set(e.element,"width",t)},expression:"element['width']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"grow",items:[{text:"true",value:1},{text:"false",value:0}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["grow"],callback:function(t){e.$set(e.element,"grow",t)},expression:"element['grow']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"shrink",items:[{text:"true",value:1},{text:"false",value:0}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["shrink"],callback:function(t){e.$set(e.element,"shrink",t)},expression:"element['shrink']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginTop","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginTop"],callback:function(t){e.$set(e.element,"marginTop",t)},expression:"element['marginTop']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginLeft","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginLeft"],callback:function(t){e.$set(e.element,"marginLeft",t)},expression:"element['marginLeft']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginBottom","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginBottom"],callback:function(t){e.$set(e.element,"marginBottom",t)},expression:"element['marginBottom']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginRight","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginRight"],callback:function(t){e.$set(e.element,"marginRight",t)},expression:"element['marginRight']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"size","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["fontSize"],callback:function(t){e.$set(e.element,"fontSize",t)},expression:"element['fontSize']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"color","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["color"],callback:function(t){e.$set(e.element,"color",t)},expression:"element['color']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"backgrounColor","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["backgroundColor"],callback:function(t){e.$set(e.element,"backgroundColor",t)},expression:"element['backgroundColor']"}}),n("element-setting-input-box",{attrs:{items:[{text:"bold",value:"bold"},{text:"regular",value:"normal"},{text:"lighter",value:"lighter"}],type:"select",label:"weight","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["fontWeight"],callback:function(t){e.$set(e.element,"fontWeight",t)},expression:"element['fontWeight']"}}),n("element-setting-input-box",{attrs:{items:[{text:"normal",value:"normal"},{text:"italic",value:"italic"}],type:"select",label:"style","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["fontStyle"],callback:function(t){e.$set(e.element,"fontStyle",t)},expression:"element['fontStyle']"}}),n("element-setting-input-box",{attrs:{items:[{text:"none",value:"none"},{text:"line-through",value:"line-through"},{text:"underline",value:"underline"}],type:"select",label:"decoration","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["textDecoration"],callback:function(t){e.$set(e.element,"textDecoration",t)},expression:"element['textDecoration']"}}),n("element-setting-input-box",{attrs:{items:[{text:"relative",value:"relative"},{text:"absolute",value:"absolute"}],type:"select",label:"position","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["position"],callback:function(t){e.$set(e.element,"position",t)},expression:"element['position']"}}),n("element-setting-input-box",{attrs:{items:[{text:"center",value:"center"},{text:"left",value:"left"},{text:"right",value:"right"},{text:"justify",value:"justify"}],type:"select",label:"align","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["textAlign"],callback:function(t){e.$set(e.element,"textAlign",t)},expression:"element['textAlign']"}}),n("element-setting-input-box",{attrs:{items:[{text:"true",value:"normal"},{text:"false",value:"nowrap"}],type:"select",label:"wrap","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["whiteSpace"],callback:function(t){e.$set(e.element,"whiteSpace",t)},expression:"element['whiteSpace']"}}),n("v-divider",{staticClass:"my-6"}),n("p",{staticClass:"text-h5 font-weight-bold"},[e._v("Padding")]),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingTop","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingTop"],callback:function(t){e.$set(e.element,"paddingTop",t)},expression:"element['paddingTop']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingRight","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingRight"],callback:function(t){e.$set(e.element,"paddingRight",t)},expression:"element['paddingRight']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingBottom","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingBottom"],callback:function(t){e.$set(e.element,"paddingBottom",t)},expression:"element['paddingBottom']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"paddingLeft","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["paddingLeft"],callback:function(t){e.$set(e.element,"paddingLeft",t)},expression:"element['paddingLeft']"}}),n("v-divider",{staticClass:"my-6"}),n("p",{staticClass:"text-h5 font-weight-bold"},[e._v("Offset")]),n("element-setting-input-box",{attrs:{type:"textField",label:"offsetTop","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["top"],callback:function(t){e.$set(e.element,"top",t)},expression:"element['top']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"offsetEnd","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["right"],callback:function(t){e.$set(e.element,"right",t)},expression:"element['right']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"offsetBottom","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["bottom"],callback:function(t){e.$set(e.element,"bottom",t)},expression:"element['bottom']"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"offsetStart","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:e.element["left"],callback:function(t){e.$set(e.element,"left",t)},expression:"element['left']"}})],1)},i=[],a=n("c1b6"),s=n("fd0c"),o={name:"TTextSettingPanel",components:{ElementSettingInputBox:s["a"]},filters:{camelToSentence:a["a"]},props:{element:{type:Object,default:function(){}}}},r=o,u=n("2877"),c=n("6544"),d=n.n(c),p=n("a523"),m=n("ce7e"),f=Object(u["a"])(r,l,i,!1,null,null,null);t["default"]=f.exports;d()(f,{VContainer:p["a"],VDivider:m["a"]})},"4b85":function(e,t,n){},"62ad":function(e,t,n){"use strict";var l=n("ade3"),i=n("5530"),a=(n("13d5"),n("a9e3"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),r=["sm","md","lg","xl"],u=function(){return r.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),c=function(){return r.reduce((function(e,t){return e["offset"+Object(o["A"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return r.reduce((function(e,t){return e["order"+Object(o["A"])(t)]={type:[String,Number],default:null},e}),{})}(),p={col:Object.keys(u),offset:Object.keys(c),order:Object.keys(d)};function m(e,t,n){var l=e;if(null!=n&&!1!==n){if(t){var i=t.replace(e,"");l+="-".concat(i)}return"col"!==e||""!==n&&!0!==n?(l+="-".concat(n),l.toLowerCase()):l.toLowerCase()}}var f=new Map;t["a"]=a["a"].extend({name:"v-col",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},c),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,i=t.data,a=t.children,o=(t.parent,"");for(var r in n)o+=String(n[r]);var u=f.get(o);return u||function(){var e,t;for(t in u=[],p)p[t].forEach((function(e){var l=n[e],i=m(t,e,l);i&&u.push(i)}));var i=u.some((function(e){return e.startsWith("col-")}));u.push((e={col:!i||!n.cols},Object(l["a"])(e,"col-".concat(n.cols),n.cols),Object(l["a"])(e,"offset-".concat(n.offset),n.offset),Object(l["a"])(e,"order-".concat(n.order),n.order),Object(l["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),f.set(o,u)}(),e(n.tag,Object(s["a"])(i,{class:u}),a)}})},a523:function(e,t,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85");var l=n("e8f2"),i=n("d9f7");t["a"]=Object(l["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,l=t.props,a=t.data,s=t.children,o=a.attrs;return o&&(a.attrs={},n=Object.keys(o).filter((function(e){if("slot"===e)return!1;var t=o[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t}))),l.id&&(a.domProps=a.domProps||{},a.domProps.id=l.id),e(l.tag,Object(i["a"])(a,{staticClass:"container",class:Array({"container--fluid":l.fluid}).concat(n||[])}),s)}})},fd0c:function(e,t,n){"use strict";var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[n("label",[e._v(e._s(e.label))])]),n("v-col",{attrs:{cols:"9"}},[n(e.input,e._g(e._b({tag:"component",class:e.inputClass,attrs:{value:e.value}},"component",e.attrs,!1),e.$listeners))],1)],1)},i=[],a=n("5530"),s=n("8654"),o=n("b974"),r={name:"ElementSettingInputBox",components:{VTextField:s["a"],VSelect:o["a"]},props:{label:{type:String,default:""},inputClass:{type:[Object,Array,String],default:""},value:{},type:{type:String,default:"textField"},items:{type:Array,default:function(){return[]}}},computed:{attrs:function(){var e,t={textField:this.$attrs,select:Object(a["a"])(Object(a["a"])({},this.$attrs),{},{items:this.items})};return null!==(e=t[this.type])&&void 0!==e?e:t["textField"]},input:function(){var e,t={textField:"v-text-field",select:"v-select"};return null!==(e=t[this.type])&&void 0!==e?e:t["textField"]}}},u=r,c=n("2877"),d=n("6544"),p=n.n(d),m=n("62ad"),f=n("0fd9"),b=Object(c["a"])(u,l,i,!1,null,null,null);t["a"]=b.exports;p()(b,{VCol:m["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-0df9a602.37ef176a.js.map