(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={2:0},a={2:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{1:"6e680d71",3:"250b7fb5",4:"c12b35d0",5:"847d88b8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={1:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"8739d2aa",3:"eb349ede",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";n("ed82")},"2f39":function(e,t,n){"use strict";n.r(t);n("7d6e"),n("e54f"),n("985d"),n("31cd");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),i=n("b05d");r["a"].use(i["a"],{config:{dark:!0},lang:o["a"],iconSet:a["a"]});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view",{attrs:{films:e.results}})],1)},u=[],l=n("7421"),s={name:"App",mixins:[l["a"]],data:()=>({results:null}),async created(){this.results=await l["a"].fetchDataCategory("films")}},f=s,p=(n("034f"),n("2877")),d=Object(p["a"])(f,c,u,!1,null,null,null),h=d.exports,m=n("2f62");r["a"].use(m["a"]);var b=()=>{const e=new m["a"].Store({modules:{},strict:!1});return e},v=n("8c4f");n("ddb0");const y=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))},{path:"/films",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"814c"))},{path:"/people",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"814c"))},{path:"/starships",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"814c"))},{path:"/species",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"814c"))},{path:"/planets",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"814c"))},{path:"/vehicles",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"814c"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var g=y;r["a"].use(v["a"]);var w=()=>{const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:g,mode:"hash",base:""});return e},P=async function(){const e="function"===typeof b?await b({Vue:r["a"]}):b,t="function"===typeof w?await w({Vue:r["a"],store:e}):w;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}};async function j(){const{app:e,store:t,router:n}=await P();new r["a"](e)}j()},"31cd":function(e,t,n){},7421:function(e,t,n){"use strict";const r=async function(e){const t=await fetch(`api/${e}`),n=await t.json();return n},o=async function(e,t){const n=await fetch(`api/${e}${t?`/${t}`:""}`),r=await n.json();return r};t["a"]={fetchDataCategory:r,fetchOne:o}},ed82:function(e,t,n){}});