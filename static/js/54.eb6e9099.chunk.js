(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[54],{128:function(e,i,t){"use strict";t.r(i),t.d(i,"bds_radio",(function(){return a}));var r=t(8),o=0,a=function(){function e(e){var i=this;Object(r.r)(this,e),this.bdsChange=Object(r.c)(this,"bdsChange",7),this.bdsClickChange=Object(r.c)(this,"bdsClickChange",7),this.checked=!1,this.disabled=!1,this.dataTest=null,this.onClick=function(e){i.checked=!i.checked,i.bdsClickChange.emit({checked:i.checked}),e.stopPropagation()},this.refNativeInput=function(e){i.nativeInput=e}}return e.prototype.checkedChanged=function(e){this.bdsChange.emit({checked:e})},e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},e.prototype.getValue=function(){return Promise.resolve(this.nativeInput.checked)},e.prototype.connectedCallback=function(){this.radioId=this.refer||"bds-radio-".concat(o++)},e.prototype.handleClickKey=function(e){"Enter"!==e.key&&" "!==e.key||this.disabled||(this.onClick(e),e.preventDefault(),this.bdsClickChange.emit({checked:this.checked}))},e.prototype.render=function(){return Object(r.h)(r.H,null,Object(r.h)("label",{class:"radio",htmlFor:this.radioId},Object(r.h)("input",{class:"radio__input",type:"radio",ref:this.refNativeInput,id:this.radioId,onClick:this.onClick,disabled:this.disabled,checked:this.checked,value:this.value,name:this.name,"data-test":this.dataTest}),Object(r.h)("div",{class:"radio__circle"},this.disabled?"":Object(r.h)("div",{class:"focus",tabindex:"0",onKeyDown:this.handleClickKey.bind(this)}),this.disabled?"":Object(r.h)("div",{class:"hover"}),Object(r.h)("div",{class:"radio__circle__pointer"})),this.label&&Object(r.h)("bds-typo",{class:"radio__text",variant:"fs-14",bold:this.checked?"bold":"regular",tag:"span"},this.label),Object(r.h)("slot",null)))},Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"]}},enumerable:!1,configurable:!0}),e}();a.style=":host{display:-ms-flexbox;display:flex}.radio{display:-ms-flexbox;display:flex;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}.radio [type=radio]{display:none}.radio [type=radio]:focus{outline:0}.radio__circle{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px;-ms-flex-negative:0;flex-shrink:0;border:2px solid #505f79;padding:4px;border-radius:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;position:relative}.radio__circle__pointer{-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;border-radius:100%;background:transparent;height:10px;width:10px}.radio__circle .hover{width:0;height:0;opacity:0}.radio__circle:hover{border-color:#6e7b91}.radio__circle:hover .hover{display:-ms-flexbox;display:flex;background-color:#202c44;position:absolute;width:40px;height:40px;opacity:0.1;border-radius:24px;-webkit-transition:width 0.65s, height 0.65s;transition:width 0.65s, height 0.65s}.radio__circle .focus:focus-visible{display:-ms-flexbox;display:flex;position:absolute;border:2px solid #c226fb;border-radius:4px;padding:4px;width:100%;height:100%;outline:none}.radio__text{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;padding-left:8px;color:#202c44}.radio__input[type=radio]:checked~.radio__circle{background:transparent;border-color:#202c44}.radio__input[type=radio]:checked~.radio__circle .radio__circle__pointer{background-color:#3f7de8}.radio__input[type=radio]:checked~.radio__circle:hover{border-color:#202c44}.radio__input[type=radio]:checked~.radio__circle:hover .radio__circle__pointer{background-color:#125ad5}.radio__input[type=radio]:disabled~.radio__circle{border-color:#6e7b91;background-color:#d2dfe6}.radio__input[type=radio]:disabled~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:hover~.radio__circle{border-color:#6e7b91;background-color:#d2dfe6}.radio__input[type=radio]:disabled:hover~.radio__circle .radio__circle__pointer{background-color:transparent}.radio__input[type=radio]:disabled:checked~.radio__circle{border-color:#6e7b91;background-color:#d2dfe6}.radio__input[type=radio]:disabled:checked~.radio__circle .radio__circle__pointer{background-color:#505f79}.radio__input[type=radio]:disabled:checked:hover~.radio__circle{border-color:#6e7b91;background-color:#d2dfe6}.radio__input[type=radio]:disabled:checked:hover~.radio__circle .radio__circle__pointer{background-color:#505f79}.radio__input[type=radio]:disabled~.radio__text{color:#505f79;cursor:not-allowed}.radio__input[type=radio]:disabled~.radio__circle{cursor:not-allowed}"}}]);
//# sourceMappingURL=54.eb6e9099.chunk.js.map