(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac4719b8"],{8702:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("element-setting-input-box",{attrs:{value:t.element["type"],type:"textField",label:"type",disabled:"",dense:"",outlined:"","hide-details":""}}),n("element-setting-input-box",{attrs:{value:t.element["id"],type:"textField",label:"id",disabled:"",dense:"",outlined:"","hide-details":""}}),n("binding-key-input-box",{key:t.element.id,attrs:{element:t.element,"binding-data":t.bindingData}}),n("element-setting-input-box",{attrs:{disabled:!t.element["bindingKey"],"input-class":{white:t.element["bindingKey"]},items:[!0,!1],type:"select",label:"defaultValue","hide-details":"",dense:"",outlined:""},model:{value:t.bindingData[t.element["bindingKey"]],callback:function(e){t.$set(t.bindingData,t.element["bindingKey"],e)},expression:"bindingData[element['bindingKey']]"}}),n("element-setting-input-box",{attrs:{type:"textField",label:"label","input-class":"white",dense:"",outlined:"","hide-details":""},model:{value:t.element["label"],callback:function(e){t.$set(t.element,"label",e)},expression:"element['label']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"grow",items:[{text:"true",value:1},{text:"false",value:0}],"hide-details":"",dense:"",outlined:""},model:{value:t.element["grow"],callback:function(e){t.$set(t.element,"grow",e)},expression:"element['grow']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"shrink",items:[{text:"true",value:1},{text:"false",value:0}],"hide-details":"",dense:"",outlined:""},model:{value:t.element["shrink"],callback:function(e){t.$set(t.element,"shrink",e)},expression:"element['shrink']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginTop","hide-details":"",dense:"",outlined:""},model:{value:t.element["marginTop"],callback:function(e){t.$set(t.element,"marginTop",e)},expression:"element['marginTop']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginLeft","hide-details":"",dense:"",outlined:""},model:{value:t.element["marginLeft"],callback:function(e){t.$set(t.element,"marginLeft",e)},expression:"element['marginLeft']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginBottom","hide-details":"",dense:"",outlined:""},model:{value:t.element["marginBottom"],callback:function(e){t.$set(t.element,"marginBottom",e)},expression:"element['marginBottom']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginRight","hide-details":"",dense:"",outlined:""},model:{value:t.element["marginRight"],callback:function(e){t.$set(t.element,"marginRight",e)},expression:"element['marginRight']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"disabled",type:"select",items:[{text:"true",value:!0},{text:"false",value:!1},{text:"conditions",value:"conditions"}],"hide-details":"",dense:"",outlined:""},model:{value:t.element["disabled"],callback:function(e){t.$set(t.element,"disabled",e)},expression:"element['disabled']"}}),"conditions"===t.element["disabled"]?n("disabled-conditions-setting-box",{attrs:{conditions:t.element["disabledConditions"]},on:{"reset-conditions":t.resetConditions}}):t._e()],1)},s=[],o=n("fd0c"),a=n("a6f7"),l=n("9a20"),r={name:"TCheckBoxSettingPanel",components:{ElementSettingInputBox:o["a"],BindingKeyInputBox:a["a"]},mixins:[l["a"]],props:{element:{type:[Object,null],default:null},bindingData:{type:[Object,null],default:null}}},d=r,u=n("2877"),c=n("6544"),h=n.n(c),p=n("a523"),m=Object(u["a"])(d,i,s,!1,null,null,null);e["default"]=m.exports;h()(m,{VContainer:p["a"]})},"9a20":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{offset:"3",cols:"9"}},[n("disabled-conditions-setting",{attrs:{conditions:t.innerConditions,"group-index":t.groupIndex}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-layout",{attrs:{"justify-end":""}},[n("v-chip-group",[n("v-chip",{attrs:{label:"",color:"primary",small:""},on:{click:t.addNotCondition}},[t._v("not")]),n("v-chip",{attrs:{label:"",color:"primary",small:""},on:{click:t.addOrCondition}},[t._v("or")]),n("v-chip",{attrs:{label:"",color:"primary",small:""},on:{click:t.addAddCondition}},[t._v("and")]),n("v-chip",{attrs:{label:"",color:"primary",small:""},on:{click:t.addCondition}},[t._v("condition")]),n("v-chip",{attrs:{label:"",color:"primary",small:""},on:{click:t.addGroup}},[t._v("group-start")]),n("v-chip",{attrs:{label:"",color:"primary",small:""},on:{click:t.jumpOutGroup}},[t._v("group-end")]),n("v-chip",{attrs:{label:"",color:"error",small:""},on:{click:t.resetConditions}},[t._v("reset")])],1)],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.conditions?n("v-layout",{attrs:{column:""}},[t._l(t.conditions.operands,(function(e,i){return n("div",{key:i},[t.operatorsGroups[i]?t._l(t.operatorsGroups[i].nots,(function(e,i){return n("span",{key:i},[n("v-chip",{staticClass:"my-1",attrs:{color:"primary",small:"",label:""}},[t._v(t._s(e))])],1)})):t._e(),n("v-layout",{attrs:{column:""}},["is"in e?n("v-layout",{attrs:{"align-center":""}},[n("span",{staticClass:"mr-2"},[t._v("when")]),n("v-combobox",{staticClass:"white",staticStyle:{width:"250px"},attrs:{items:Object.keys(t.bindingData),dense:"",outlined:"","hide-details":""},model:{value:e.when,callback:function(n){t.$set(e,"when",n)},expression:"operand.when"}}),n("span",{staticClass:"mx-2"},[t._v("is")]),n("v-text-field",{staticClass:"white",staticStyle:{width:"250px"},attrs:{dense:"",outlined:"","hide-details":""},model:{value:e.is,callback:function(n){t.$set(e,"is",n)},expression:"operand.is"}})],1):n("disabled-conditions-setting",{staticClass:"pl-12",attrs:{conditions:e,"group-index":t.groupIndex}})],1),t.operatorsGroups[i]&&t.operatorsGroups[i].others[0]?n("v-chip",{staticClass:"my-1",attrs:{color:"primary",small:"",label:""}},[t._v(t._s(t.operatorsGroups[i].others[0]))]):t._e()],2)})),t.operatorsGroups.length>t.conditions.operands.length?n("v-layout",t._l(t.operatorsGroups[t.operatorsGroups.length-1].nots,(function(e,i){return n("span",{key:i},[n("v-chip",{staticClass:"my-1",attrs:{color:"primary",small:"",label:""}},[t._v(t._s(e))])],1)})),0):t._e(),t.groupIndex===t.conditions?n("v-icon",{staticClass:"mr-auto",staticStyle:{right:"24px"},attrs:{color:"primary"}},[t._v("mdi-arrow-right-bold")]):t._e()],2):t._e()},a=[],l={name:"DisabledConditionsSetting",components:{DisabledConditionsSetting:I},props:{conditions:{type:[Object,Array],default:function(){}},groupIndex:{type:Object,default:function(){}}},computed:{bindingData:function(){return this.$store.state.bindingData}},data:function(){return{operatorsGroups:[]}},watch:{conditions:{handler:function(t){if(t){this.operatorsGroups=[];var e=t.operators&&this.deepCopy(t.operators);while(e.length){var n=e.shift(),i={nots:[],others:[]};while("not"===n)i.nots.push(n),n=e.shift();n&&i.others.push(n),this.operatorsGroups.push(i)}}},deep:!0,immediate:!0}},methods:{deepCopy:function(t){return JSON.parse(JSON.stringify(t))}}},r=l,d=n("2877"),u=n("6544"),c=n.n(u),h=n("cc20"),p=n("5530"),m=(n("d3b7"),n("25f0"),n("7db0"),n("8a79"),n("fb6a"),n("b0c0"),n("caad"),n("2532"),n("a434"),n("2bfd"),n("b974")),g=n("c6a6"),b=n("80d2"),f=g["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return m["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=g["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var n=this,i=m["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(i.componentOptions.listeners=Object(p["a"])(Object(p["a"])({},i.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),i},onChipInput:function(t){m["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&g["a"].options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[b["u"].home,b["u"].end].includes(e)||m["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===b["u"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===b["u"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();g["a"].options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(g["a"].options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){var e;m["a"].options.methods.setValue.call(this,null!=(e=t)?e:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){if(this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var n=this.internalValue.slice();n.splice(e,1),this.setValue(n)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var n=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(t.preventDefault(),m["a"].options.methods.selectItem.call(this,n))}}}}),x=n("132d"),v=n("a722"),y=n("8654"),C=Object(d["a"])(r,o,a,!1,null,null,null),I=C.exports;c()(C,{VChip:h["a"],VCombobox:f,VIcon:x["a"],VLayout:v["a"],VTextField:y["a"]});var S={name:"DisabledConditionsSettingBox",props:{conditions:{type:Object,default:function(){}}},components:{DisabledConditionsSetting:I},data:function(){return{innerConditions:{},groupIndex:{},groupStack:[]}},watch:{conditions:{handler:function(t){this.innerConditions||(this.innerConditions={operators:[],operands:[]}),this.innerConditions=t,this.groupIndex=this.innerConditions},immediate:!0}},methods:{addNotCondition:function(){this.groupIndex.operators.push("not")},addOrCondition:function(){this.groupIndex.operators.push("or")},addAddCondition:function(){this.groupIndex.operators.push("and")},addCondition:function(){this.groupIndex.operands.push({when:"",is:""})},addGroup:function(){var t={operators:[],operands:[]};this.groupIndex.operands.push(t),this.groupStack.push(this.groupIndex),this.groupIndex=t},jumpOutGroup:function(){this.groupStack.length&&(this.groupIndex=this.groupStack.pop())},resetConditions:function(){this.$emit("reset-conditions")}}},w=S,k=n("ef9a"),D=n("62ad"),_=n("0fd9"),V=Object(d["a"])(w,i,s,!1,null,null,null),O=V.exports;c()(V,{VChip:h["a"],VChipGroup:k["a"],VCol:D["a"],VLayout:v["a"],VRow:_["a"]});e["a"]={components:{DisabledConditionsSettingBox:O},props:{element:{type:Object,default:function(){}}},watch:{"element.disabled":{handler:function(t){"conditions"!==t||"disabledConditions"in this.element||this.resetConditions()}},immediate:!0},methods:{resetConditions:function(){var t={operators:[],operands:[]};this.$set(this.element,"disabledConditions",t)}}}}}]);
//# sourceMappingURL=chunk-ac4719b8.a76f09c3.js.map