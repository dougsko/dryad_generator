parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HUJJ":[function(require,module,exports) {
module.exports={numbers:["000","019","028","037","046","055","064","073","082","091","109","118","127","136","145","154","163","172","181","190","208","217","226","235","244","253","262","271","280","199","307","316","325","334","343","352","361","370","389","398","406","415","424","433","442","451","460","479","488","497","505","514","523","532","541","550","569","578","587","596","604","613","622","631","640","659","668","677","686","695","703","712","721","730","749","758","767","776","785","794","802","811","820","839","848","857","866","875","884","893","901","910","929","938","947","956","965","974","983","992"],words:["accept","affirmative","between","building","cancel","change","confirm","contact","coordinate","danger","evening","failed","frequency","locate","location","meeting","money","month","morning","night","problem","radio","rendezvous","success","today","tomorrow","unable to","week","within","yesterday","red","yellow","blue","green","black","orange","under","shirt","shoes","pants","newspaper","magazine","park bench","tree"]};
},{}],"ogM3":[function(require,module,exports) {
var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var o=new Uint8Array(16);module.exports=function(){return e(o),o}}else{var r=new Array(16);module.exports=function(){for(var e,o=0;o<16;o++)0==(3&o)&&(e=4294967296*Math.random()),r[o]=e>>>((3&o)<<3)&255;return r}}
},{}],"O4sp":[function(require,module,exports) {
for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);function t(o,t){var n=t||0,u=r;return[u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]]].join("")}module.exports=t;
},{}],"acME":[function(require,module,exports) {
var e,r,o=require("./lib/rng"),s=require("./lib/bytesToUuid"),i=0,n=0;function c(c,l,u){var v=l&&u||0,a=l||[],d=(c=c||{}).node||e,t=void 0!==c.clockseq?c.clockseq:r;if(null==d||null==t){var m=o();null==d&&(d=e=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==t&&(t=r=16383&(m[6]<<8|m[7]))}var q=void 0!==c.msecs?c.msecs:(new Date).getTime(),f=void 0!==c.nsecs?c.nsecs:n+1,b=q-i+(f-n)/1e4;if(b<0&&void 0===c.clockseq&&(t=t+1&16383),(b<0||q>i)&&void 0===c.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=q,n=f,r=t;var k=(1e4*(268435455&(q+=122192928e5))+f)%4294967296;a[v++]=k>>>24&255,a[v++]=k>>>16&255,a[v++]=k>>>8&255,a[v++]=255&k;var w=q/4294967296*1e4&268435455;a[v++]=w>>>8&255,a[v++]=255&w,a[v++]=w>>>24&15|16,a[v++]=w>>>16&255,a[v++]=t>>>8|128,a[v++]=255&t;for(var g=0;g<6;++g)a[v+g]=d[g];return l||s(a)}module.exports=c;
},{"./lib/rng":"ogM3","./lib/bytesToUuid":"O4sp"}],"UOdq":[function(require,module,exports) {
var r=require("./lib/rng"),n=require("./lib/bytesToUuid");function e(e,i,u){var a=i&&u||0;"string"==typeof e&&(i="binary"===e?new Array(16):null,e=null);var l=(e=e||{}).random||(e.rng||r)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,i)for(var o=0;o<16;++o)i[a+o]=l[o];return i||n(l)}module.exports=e;
},{"./lib/rng":"ogM3","./lib/bytesToUuid":"O4sp"}],"gV9a":[function(require,module,exports) {
var e=require("./v1"),r=require("./v4"),v=r;v.v1=e,v.v4=r,module.exports=v;
},{"./v1":"acME","./v4":"UOdq"}],"d6sW":[function(require,module,exports) {
"use strict";var e=r(require("./codeBook.json")),t=require("uuid");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}for(var i=new Uint8Array(1),s=Array.from(Array(25)).map(function(e,t){return t+65}),o=s.map(function(e){return String.fromCharCode(e)}),l=[],a=0;a<25;a++){for(var u=[];u.length<25;){window.crypto.getRandomValues(i);var d=i[0],p=o[d%25];u.includes(p)||u.push(p)}l.push(u)}var c=document.getElementById("tableId");c.innerText="Id: "+(0,t.v4)().toString().split("-")[4];for(var C=document.getElementById("dryadTableHeader"),f=C.insertRow(),m=0;m<=10;m++){var b=f.appendChild(document.createElement("th"));b.innerText=0==m?"  ":(m-1).toString()}o.forEach(function(e,t){var n=C.insertRow(),r=n.insertCell(0);r.innerText=e,r.setAttribute("class","first"),(r=n.insertCell(1)).innerText=l[t].join("").substring(0,4),(r=n.insertCell(2)).innerText=l[t].join("").substring(4,7),(r=n.insertCell(3)).innerText=l[t].join("").substring(7,10),(r=n.insertCell(4)).innerText=l[t].join("").substring(10,12),(r=n.insertCell(5)).innerText=l[t].join("").substring(12,14),(r=n.insertCell(6)).innerText=l[t].join("").substring(14,17),(r=n.insertCell(7)).innerText=l[t].join("").substring(17,19),(r=n.insertCell(8)).innerText=l[t].join("").substring(19,21),(r=n.insertCell(9)).innerText=l[t].join("").substring(21,23),(r=n.insertCell(10)).innerText=l[t].join("").substring(23,25)});for(var g=e.words.sort(),T=document.getElementById("codeBookTableBody"),y=0;y<11;y++){var h=T.insertRow(),j=h.insertCell(0),v=j.appendChild(document.createElement("span"));v.setAttribute("class","upperCase"),v.appendChild(document.createTextNode(e.numbers[y]+" "+g[y])),(v=(j=h.insertCell(1)).appendChild(document.createElement("span"))).setAttribute("class","upperCase"),v.appendChild(document.createTextNode(e.numbers[y+11]+" "+g[y+11])),(v=(j=h.insertCell(2)).appendChild(document.createElement("span"))).setAttribute("class","upperCase"),v.appendChild(document.createTextNode(e.numbers[y+22]+" "+g[y+22])),(v=(j=h.insertCell(3)).appendChild(document.createElement("span"))).setAttribute("class","upperCase");var x=" ";x=null==e.words[y+33]?"":e.words[y+33],v.appendChild(document.createTextNode(e.numbers[y+33]+" "+x))}
},{"./codeBook.json":"HUJJ","uuid":"gV9a"}]},{},["d6sW"], null)