(function(t){function e(e){for(var r,o,u=e[0],i=e[1],s=e[2],f=0,p=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"348d":function(t,e,n){},"44c4":function(t,e,n){"use strict";n("760e")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",{attrs:{albums:t.albums}})],1)},c=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fluid-container"},[r("img",{attrs:{src:n("93df"),alt:""}}),t._v(" Header ")])}],i={name:"Header"},s=i,l=(n("ce9f"),n("2877")),f=Object(l["a"])(s,o,u,!1,null,"6efeb0ef",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-fluid"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.albums,(function(t,e){return n("Album",{key:e,staticClass:"col-6 col-md-3 ",attrs:{album:t}})})),1)])])},b=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-container"},[n("div",{staticClass:"album-content"},[n("img",{attrs:{src:t.album.poster,alt:""}}),n("h2",[t._v(t._s(t.album.title))]),n("div",{staticClass:"info"},[t._v(t._s(t.album.author))]),n("div",{staticClass:"info"},[t._v(t._s(t.album.year))])])])},v=[],h={name:"Album",props:["album"]},_=h,y=(n("44c4"),Object(l["a"])(_,m,v,!1,null,"c6ff52ec",null)),g=y.exports,O={name:"Main",components:{Album:g},props:{albums:Array}},j=O,w=(n("e907"),Object(l["a"])(j,d,b,!1,null,"1521d6f0",null)),x=w.exports,C=n("bc3a"),M=n.n(C),P={name:"App",components:{Header:p,Main:x},created:function(){var t=this;M.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.albums=e.data.response}))},data:function(){return{albums:[]}}},$=P,A=(n("5c0b"),Object(l["a"])($,a,c,!1,null,null,null)),E=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"760e":function(t,e,n){},"93df":function(t,e,n){t.exports=n.p+"img/spotify-logo.c24917d4.png"},"9c0c":function(t,e,n){},ce9f:function(t,e,n){"use strict";n("348d")},e007:function(t,e,n){},e907:function(t,e,n){"use strict";n("e007")}});
//# sourceMappingURL=app.9b1c721a.js.map