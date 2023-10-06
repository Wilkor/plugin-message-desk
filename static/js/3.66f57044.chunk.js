/*! For license information please see 3.66f57044.chunk.js.LICENSE.txt */
(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[3],{41:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return K}));var n=function(t,e,r){if(r||2===arguments.length)for(var n,c=0,o=e.length;c<o;c++)!n&&c in e||(n||(n=Array.prototype.slice.call(e,0,c)),n[c]=e[c]);return t.concat(n||Array.prototype.slice.call(e))},c="-shadowcsshost",o="-shadowcssslotted",s="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",i=new RegExp("(-shadowcsshost"+a,"gim"),u=new RegExp("(-shadowcsscontext"+a,"gim"),l=new RegExp("(-shadowcssslotted"+a,"gim"),p="-shadowcsshost-no-combinator",f=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,v=/::slotted/gim,m=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S=/(^.*?[^\\])??((:+)(.*)|$)/,O="%BLOCK%",W=function(t,e){var r=j(t),n=0;return r.escapedString.replace(_,(function(){for(var t=[],c=0;c<arguments.length;c++)t[c]=arguments[c];var o=t[2],s="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(s=r.blocks[n++],a=a.substring(O.length+1),i="{");var u={selector:o,content:s},l=e(u);return"".concat(t[1]).concat(l.selector).concat(t[3]).concat(i).concat(l.content).concat(a)}))},j=function(t){for(var e=t.split(b),r=[],n=[],c=0,o=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&c--,c>0?o.push(a):(o.length>0&&(n.push(o.join("")),r.push(O),o=[]),r.push(a)),"{"===a&&c++}return o.length>0&&(n.push(o.join("")),r.push(O)),{escapedString:r.join(""),blocks:n}},k=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),c=[],o=0;o<n.length;o++){var s=n[o].trim();if(!s)break;c.push(r(p,s,t[3]))}return c.join(",")}return p+t[3]}))},E=function(t,e,r){return t+e.replace(c,"")+r},R=function(t,e,r){return e.indexOf(c)>-1?E(t,e,r):t+e+r+", "+e+" "+t+r},y=function(t,e){var r=function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e);return!r.test(t)},C=function(t,e){return t.replace(S,(function(t,r,n,c,o){return void 0===r&&(r=""),void 0===c&&(c=""),void 0===o&&(o=""),r+e+c+o}))},L=function(t,e,r){e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}));for(var n,c="."+e,o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(p)>-1)n=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n=".".concat(r);return t.replace(f,(function(t,e){return C(e,n)})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var o=t.replace(g,"");o.length>0&&(n=C(o,c))}return n},s=function(t){var e=[],r=0;t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var c="__ph-".concat(r,"__");return e.push(n),r++,c}));var n=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,c){var o="__ph-".concat(r,"__");return e.push(c),r++,n+o}));return{content:n,placeholders:e}}(t),a="",i=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=s.content).indexOf(p)>-1);null!==(n=u.exec(t));){var h=n[1],d=t.slice(i,n.index).trim(),v=(l=l||d.indexOf(p)>-1)?o(d):d;a+="".concat(v," ").concat(h," "),i=u.lastIndex}var m=t.substring(i);return a+=(l=l||m.indexOf(p)>-1)?o(m):m,function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))}(s.placeholders,a)},T=function t(e,r,n,c,o){return W(e,(function(e){var o=e.selector,s=e.content;return"@"!==e.selector[0]?o=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():y(t,e)?L(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,c):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=t(e.content,r,n,c)),{selector:o.replace(/\s{2,}/g," ").trim(),content:s}}))},B=function(t,e,r,n,a){var f=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(l,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var c=t[2].trim(),o=t[3],s=r+c+o,a="",i=t[4]-1;i>=0;i--){var u=t[5][i];if("}"===u||","===u)break;a=u+a}var l=a+s,f="".concat(a.trimRight()).concat(s.trim());if(l.trim()!==f.trim()){var h="".concat(f,", ").concat(l);n.push({orgSelector:l,updatedSelector:h})}return s}return p+t[3]})),{selectors:n,cssText:t}}(t=function(t){return k(t,u,R)}(t=function(t){return k(t,i,E)}(t=function(t){return t.replace(m,s).replace(d,c).replace(v,o)}(t))),n);return t=function(t){return h.reduce((function(t,e){return t.replace(e," ")}),t)}(t=f.cssText),e&&(t=T(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(r))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:f.selectors}},K=function(t,e,r){var c=e+"-h",o=e+"-s",s=function(t){return t.match(w)||[]}(t);t=function(t){return t.replace(x,"")}(t);var a=[];if(r){var i=function(t){var e="/*!@___".concat(a.length,"___*/"),r="/*!@".concat(t.selector,"*/");return a.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=W(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,i),t):t}))}var u=B(t,e,c,o);return t=n([u.cssText],s,!0).join("\n"),r&&a.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=3.66f57044.chunk.js.map