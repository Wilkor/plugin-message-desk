(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[50],{124:function(t,e,i){"use strict";i.r(e),i.d(e,"bds_pagination",(function(){return o}));var s=i(8),o=function(){function t(t){var e=this;Object(s.r)(this,t),this.bdsPaginationChange=Object(s.c)(this,"bdsPaginationChange",7),this.paginationNumbers=[],this.previewPage=function(t){e.value>1&&(t.preventDefault(),e.value=e.value-1,e.bdsPaginationChange.emit(e.value))},this.nextPage=function(t){e.value<e.pages&&(t.preventDefault(),e.value=e.value+1,e.bdsPaginationChange.emit(e.value))},this.firstPage=function(t){e.value>1&&(t.preventDefault(),e.value=e.paginationNumbers[0],e.bdsPaginationChange.emit(e.value))},this.lastPage=function(t){e.value<e.pages&&(t.preventDefault(),e.value=e.pages,e.bdsPaginationChange.emit(e.value))},this.openOptions=function(){e.openSelect=!e.openSelect}}return t.prototype.componentWillLoad=function(){this.countPage()},t.prototype.countPage=function(){if(0===this.paginationNumbers.length){for(var t=1;t<=this.pages;t++)this.paginationNumbers.push(t);this.startedPage&&this.startedPage<this.pages?this.value=this.startedPage:this.value=this.paginationNumbers[0]}},t.prototype.optionSelected=function(t){this.value=t,this.openOptions(),this.bdsPaginationChange.emit(this.value)},t.prototype.render=function(){var t=this;return Object(s.h)(s.H,null,Object(s.h)("div",{class:"actions"},Object(s.h)("bds-button-icon",{onClick:this.firstPage,size:"short",variant:"secondary",icon:"arrow-first"}),Object(s.h)("bds-button-icon",{onClick:this.previewPage,size:"short",variant:"secondary",icon:"arrow-left"}),Object(s.h)("div",{class:"select"},Object(s.h)("div",{class:"border-select"},Object(s.h)("div",{class:{select_input:!0},id:"select",onClick:this.openOptions},Object(s.h)("bds-typo",{variant:"fs-14"},this.value),Object(s.h)("bds-icon",{size:"small",name:this.openSelect?"arrow-up":"arrow-down"}))),this.openSelect?Object(s.h)("bds-paper",{class:{select_options:!0,"select_options--open":this.openSelect}},Object(s.h)("ul",null,this.paginationNumbers.map((function(e,i){return Object(s.h)("li",{onClick:function(){return t.optionSelected(e)},key:i,value:e},Object(s.h)("bds-typo",{variant:"fs-14"},e))})))):""),Object(s.h)("bds-button-icon",{onClick:this.nextPage,size:"short",variant:"secondary",icon:"arrow-right"}),Object(s.h)("bds-button-icon",{onClick:this.lastPage,size:"short",variant:"secondary",icon:"arrow-last"})))},t}();o.style=":host{display:block}:host .actions{display:-ms-flexbox;display:flex;gap:8px}:host .actions .select{display:block;position:relative}:host .actions .border-select{border-radius:8px}:host .actions .border-select:hover{-webkit-box-shadow:rgba(63, 125, 232, 0.4) 0px 0px 0px 2px;box-shadow:rgba(63, 125, 232, 0.4) 0px 0px 0px 2px}:host .actions .select_input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:9px 4px 9px 12px;gap:8px;-ms-flex:1 1 0%;flex:1 1 0%;width:100%;max-width:100%;max-height:100%;background:#ffffff;border-radius:8px;border:1px solid #d2dfe6;-webkit-box-sizing:border-box;box-sizing:border-box}:host .actions .select_input bds-typo{min-width:28px}:host .actions .select_input:hover{border-color:#3f7de8}:host .actions .select_options{position:absolute;width:100%;background-color:#ffffff;border-radius:8px;z-index:2;margin-top:4px;overflow-y:auto;overflow-x:hidden;max-height:250px;transition:transform 0.25s ease 0s, opacity 0.75s ease 0s, visibility 0.75s ease 0s, -webkit-transform 0.25s ease 0s;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scaleY(0);transform:scaleY(0);visibility:hidden;opacity:0}:host .actions .select_options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}:host .actions .select_options ul{padding:0;margin:0}:host .actions .select_options li{list-style-type:none;cursor:pointer;padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .actions .select_options li:hover{color:#3f7de8;background-color:#f3f6fa}"}}]);
//# sourceMappingURL=50.755fd51b.chunk.js.map