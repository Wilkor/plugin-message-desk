(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[6,73],{109:function(i,t,e){"use strict";e.r(t),e.d(t,"bds_input_chips",(function(){return c}));var n=e(8),s=e(75),r=function(i,t,e,n){function s(i){return i instanceof e?i:new e((function(t){t(i)}))}return new(e||(e=Promise))((function(e,r){function p(i){try{c(n.next(i))}catch(t){r(t)}}function o(i){try{c(n.throw(i))}catch(t){r(t)}}function c(i){i.done?e(i.value):s(i.value).then(p,o)}c((n=n.apply(i,t||[])).next())}))},p=function(i,t){var e,n,s,r,p={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(i){return function(t){return c([i,t])}}function c(r){if(e)throw new TypeError("Generator is already executing.");for(;p;)try{if(e=1,n&&(s=2&r[0]?n.return:r[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,r[1])).done)return s;switch(n=0,s&&(r=[2&r[0],s.value]),r[0]){case 0:case 1:s=r;break;case 4:return p.label++,{value:r[1],done:!1};case 5:p.label++,n=r[1],r=[0];continue;case 7:r=p.ops.pop(),p.trys.pop();continue;default:if(!(s=(s=p.trys).length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){p=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){p.label=r[1];break}if(6===r[0]&&p.label<s[1]){p.label=s[1],s=r;break}if(s&&p.label<s[2]){p.label=s[2],p.ops.push(r);break}s[2]&&p.ops.pop(),p.trys.pop();continue}r=t.call(i,p)}catch(o){r=[6,o],n=0}finally{e=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},o=function(i,t,e){if(e||2===arguments.length)for(var n,s=0,r=t.length;s<r;s++)!n&&s in t||(n||(n=Array.prototype.slice.call(t,0,s)),n[s]=t[s]);return i.concat(n||Array.prototype.slice.call(t))},c=function(){function i(i){var t=this;Object(n.r)(this,i),this.bdsChange=Object(n.c)(this,"bdsChange",7),this.bdsChangeChips=Object(n.c)(this,"bdsChangeChips",7),this.bdsInputChipsFocus=Object(n.c)(this,"bdsInputChipsFocus",7),this.bdsBlur=Object(n.c)(this,"bdsBlur",7),this.bdsInputChipsInput=Object(n.c)(this,"bdsInputChipsInput",7),this.bdsSubmit=Object(n.c)(this,"bdsSubmit",7),this.validationDanger=!1,this.isPressed=!1,this.validationMesage="",this.internalChips=[],this.chips=[],this.type="text",this.label="",this.icon="",this.delimiters=/,|;/,this.errorMessage="",this.danger=!1,this.value="",this.duplicated=!1,this.disableSubmit=!1,this.disabled=!1,this.helperMessage="",this.inputName="",this.placeholder="",this.dataTest=null,this.onClickWrapper=function(){t.onFocus(),t.nativeInput&&t.nativeInput.focus()},this.onFocus=function(){t.bdsInputChipsFocus.emit(),t.isPressed=!0},this.onInput=function(i){var e=i.target;e&&(t.value=e.value||""),t.bdsInputChipsInput.emit(i)},this.keyPressWrapper=function(i){switch(i.key){case"Enter":t.setChip(t.value),t.value="";break;case"Backspace":(null===t.value||t.value.length<=0)&&t.internalChips.length&&(t.removeLastChip(),t.bdsChangeChips.emit({data:t.internalChips}))}}}return i.prototype.valueChanged=function(){if(this.chips)if("string"===typeof this.chips)try{this.internalChips=JSON.parse(this.chips)}catch(i){this.internalChips=[]}else this.internalChips=this.chips;else this.internalChips=[]},i.prototype.internalValueChanged=function(){this.bdsChangeChips.emit({data:this.internalChips,value:this.getLastChip()})},i.prototype.isValid=function(){return r(this,void 0,void 0,(function(){return p(this,(function(i){return[2,this.validateChips()]}))}))},i.prototype.get=function(){return r(this,void 0,void 0,(function(){return p(this,(function(i){return[2,this.internalChips]}))}))},i.prototype.clear=function(){return r(this,void 0,void 0,(function(){return p(this,(function(i){return this.internalChips=[],this.value="",[2]}))}))},i.prototype.add=function(i){return r(this,void 0,void 0,(function(){return p(this,(function(t){return this.setChip(i),[2]}))}))},i.prototype.setFocus=function(){return r(this,void 0,void 0,(function(){return p(this,(function(i){return this.nativeInput.focus(),[2]}))}))},i.prototype.removeFocus=function(){return r(this,void 0,void 0,(function(){return p(this,(function(i){return this.nativeInput.blur(),[2]}))}))},i.prototype.componentWillLoad=function(){this.valueChanged()},i.prototype.validateChips=function(){var i=this;return"email"!==this.type||!this.internalChips.some((function(t){return!i.validateChip(t)}))},i.prototype.handleOnBlur=function(){this.bdsBlur.emit(this.internalChips),this.isPressed=!1},i.prototype.getLastChip=function(){return this.internalChips[this.internalChips.length-1]},i.prototype.verifyAndSubstituteDelimiters=function(i){if(1===i.length&&i[0].match(this.delimiters))return"";var t=i.replace(/;/g,",").replace(/\,+|;+/g,",");return t[0].match(this.delimiters)&&(t=t.substring(1)),t},i.prototype.handleChange=function(i){return r(this,void 0,void 0,(function(){var t,e,n=this;return p(this,(function(s){return t=i.detail.value,this.value=t?t.trim():"",0===t.length?[2]:t.match(this.delimiters)?(e=this.verifyAndSubstituteDelimiters(t))?(e.split(this.delimiters).forEach((function(i){n.setChip(i)})),this.clearInputValues(),[2]):(this.clearInputValues(),[2]):[2]}))}))},i.prototype.clearInputValues=function(i){void 0===i&&(i=""),this.nativeInput.value=i,this.value=i},i.prototype.setChip=function(i){if(!this.duplicated&&this.internalChips.some((function(t){return t.toLowerCase()===i.toLowerCase()})))return;Object(s.w)(i)&&(this.internalChips=o(o([],this.internalChips,!0),[i],!1))},i.prototype.validateChip=function(i){var t=i.trim();return"email"!==this.type||!Object(s.e)(t)},i.prototype.removeLastChip=function(){this.internalChips=this.internalChips.slice(0,this.internalChips.length-1)},i.prototype.removeChip=function(i){var t=i.detail.id;this.internalChips=this.internalChips.filter((function(i,e){return e.toString()!==t}))},i.prototype.renderChips=function(){var i=this;return this.internalChips.length?this.internalChips.map((function(t,e){var s=e.toString();return Object(n.h)("bds-chip-clickable",{id:s,key:s,color:"default",close:!i.disabled,onChipClickableClose:function(t){return i.removeChip(t)}},t)})):[]},i.prototype.renderIcon=function(){return this.icon&&Object(n.h)("div",{class:{input__icon:!0,"input__icon--large":!!this.label}},Object(n.h)("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))},i.prototype.renderLabel=function(){return this.label&&Object(n.h)("label",{class:{input__container__label:!0,"input__container__label--pressed":this.isPressed&&!this.disabled}},Object(n.h)("bds-typo",{variant:"fs-12",bold:"bold"},this.label))},i.prototype.renderMessage=function(){var i=this.danger?"error":"info",t=this.danger?this.errorMessage:this.helperMessage;!t&&this.validationDanger&&(t=this.validationMesage);var e=this.danger||this.validationDanger?"input__message input__message--danger":"input__message";if(t)return Object(n.h)("div",{class:e,part:"input__message"},Object(n.h)("div",{class:"input__message__icon"},Object(n.h)("bds-icon",{size:"x-small",name:i,theme:"solid",color:"inherit"})),Object(n.h)("bds-typo",{variant:"fs-12"},t))},i.prototype.render=function(){var i=this,t=this.isPressed&&!this.disabled;return Object(n.h)(n.H,null,Object(n.h)("div",{class:{element_input:!0},"aria-disabled":this.disabled?"true":null},Object(n.h)("div",{class:{input:!0,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":t},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper,part:"input-container"},this.renderIcon(),Object(n.h)("div",{class:"input__container"},this.renderLabel(),Object(n.h)("div",{class:{input__container__wrapper:!0}},this.internalChips.length>0&&Object(n.h)("span",{class:"inside-input-left"},this.renderChips()),Object(n.h)("input",{ref:function(t){return i.nativeInput=t},class:{input__container__text:!0},name:this.inputName,maxlength:this.maxlength,placeholder:this.placeholder,onInput:this.onInput,onFocus:this.onFocus,onBlur:function(){return i.handleOnBlur()},onChange:function(){return i.handleChange},value:this.value,disabled:this.disabled,"data-test":this.dataTest}))),Object(n.h)("slot",{name:"input-right"})),this.renderMessage()))},Object.defineProperty(i,"watchers",{get:function(){return{chips:["valueChanged"],internalChips:["internalValueChanged"]}},enumerable:!1,configurable:!0}),i}();c.style='.sc-bds-input-chips-h{display:display}.element_input.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input.sc-bds-input-chips input.sc-bds-input-chips{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-moz-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips:-ms-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-ms-input-placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::placeholder{color:#b9cbd3;opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.input.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:#ffffff}.input--state-primary.sc-bds-input-chips{border:1px solid #d2dfe6;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.sc-bds-input-chips:hover{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed.sc-bds-input-chips{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4);box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4)}.input--state-primary.sc-bds-input-chips .input__icon.sc-bds-input-chips{color:#3f7de8;background-color:#e8f2ff}.input--state-primary.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:#8ca0b3}.input--state-primary.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips{color:#3f7de8}.input--state-primary.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:#3f7de8;color:#202c44}.input--state-danger.sc-bds-input-chips{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.sc-bds-input-chips:hover{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed.sc-bds-input-chips{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #ffa5a5;box-shadow:0 0 0 2px #ffa5a5}.input--state-danger.sc-bds-input-chips .input__icon.sc-bds-input-chips{color:#ff4c4c;background-color:#ffa5a5}.input--state-danger.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:#8ca0b3}.input--state-danger.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips{color:#ff4c4c}.input--state-danger.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:#ff4c4c;color:#202c44}.input--state-disabled.sc-bds-input-chips{cursor:not-allowed;border:1px solid #e7edf4;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:#f3f6fa}.input--state-disabled.sc-bds-input-chips:hover{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid #e7edf4;box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed.sc-bds-input-chips{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #e7edf4;box-shadow:0 0 0 2px #e7edf4}.input--state-disabled.sc-bds-input-chips .input__icon.sc-bds-input-chips{color:#b9cbd3;background-color:#f8fbfb}.input--state-disabled.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:#b9cbd3}.input--state-disabled.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips{color:#b9cbd3}.input--state-disabled.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:#b9cbd3;color:#b9cbd3}.input--label.sc-bds-input-chips{padding:7px 4px 8px 12px}.input__icon.sc-bds-input-chips{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large.sc-bds-input-chips{padding:4px}.input__container.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips.sc-bds-input-chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips.sc-bds-input-chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips.sc-bds-input-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text.sc-bds-input-chips{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text.sc-bds-input-chips:focus{outline:0}.input__container__text.sc-bds-input-chips::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text.sc-bds-input-chips:focus{outline:0}.input__container__text[type=checkbox].sc-bds-input-chips,.input__container__text[type=radio].sc-bds-input-chips{width:13px;height:13px}.input__container__text[type=search].sc-bds-input-chips{-webkit-appearance:textfield;-webkit-box-sizing:content-box}.sc-bds-input-chips::-webkit-search-decoration{display:none}.input__container__text[type=reset].sc-bds-input-chips,.input__container__text[type=button].sc-bds-input-chips,.input__container__text[type=submit].sc-bds-input-chips{overflow:visible}.input__container__text.sc-bds-input-chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text.sc-bds-input-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:#8ca0b3;word-break:break-word;height:auto;min-height:20px}.input__message.sc-bds-input-chips bds-typo.sc-bds-input-chips{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon.sc-bds-input-chips{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger.sc-bds-input-chips{color:#ff4c4c}.inside-input-left.sc-bds-input-chips{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:8px}.input-chips__chip.sc-bds-input-chips{margin:2px 4px 2px 0px}.input-chips__chips.sc-bds-input-chips{-ms-flex:1;flex:1}'},75:function(i,t,e){"use strict";e.r(t),e.d(t,"d",(function(){return u})),e.d(t,"e",(function(){return o})),e.d(t,"m",(function(){return d})),e.d(t,"n",(function(){return c})),e.d(t,"w",(function(){return a}));var n=/^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/,s=/\S/,r=/^[0-9]*$/,p=/^((0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20|21)?[0-9]{2})*$/,o=function(i){if(i&&!n.test(i))return!0},c=function(i){if(i&&!r.test(i))return!0},a=function(i){return s.test(i)},u=function(i){return p.test(i)},d=function(i){var t=i;return t=(t=(t=t.replace(/\D+/g,"")).replace(/^(\d{2})(\d)/,"$1/$2")).replace(/^(\d{2}\/\d{2})(\d)/,"$1/$2")}}}]);
//# sourceMappingURL=6.b7e0456b.chunk.js.map