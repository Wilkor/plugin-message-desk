(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[62],{135:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_tab",(function(){return a}));var i=n(9),o=function(t,e,n,i){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{c(i.next(t))}catch(e){r(e)}}function s(t){try{c(i.throw(t))}catch(e){r(e)}}function c(t){t.done?n(t.value):o(t.value).then(a,s)}c((i=i.apply(t,e||[])).next())}))},r=function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return c([t,e])}}function c(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(s){r=[6,s],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},a=function(){function t(t){Object(i.r)(this,t),this.bdsTabChange=Object(i.c)(this,"bdsTabChange",7),this.active=!1,this.isActive=!1}return t.prototype.handleTabChange=function(t){this.isActive=t.detail==this.group},t.prototype.onClick=function(){return o(this,void 0,void 0,(function(){return r(this,(function(t){return this.bdsTabChange.emit(this.group),[2]}))}))},t.prototype.render=function(){var t,e=this.isActive?"bold":"regular";return Object(i.h)(i.H,{class:(t={"bds-tab":!0},t["bds-tab--selected"]=this.isActive,t),onClick:this.onClick.bind(this)},Object(i.h)("div",{class:"bds-tab__text"},Object(i.h)("bds-typo",{variant:"fs-16",bold:e},this.label)))},t}();a.style=".bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:#8ca0b3;border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:#3f7de8}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:#3f7de8}to{border-bottom:2px solid #3f7de8;color:#3f7de8}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:#3f7de8}to{border-bottom:2px solid #3f7de8;color:#3f7de8}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}"}}]);
//# sourceMappingURL=62.95fc27a1.chunk.js.map