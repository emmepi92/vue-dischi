(function(t){function e(e){for(var r,l,u=e[0],o=e[1],c=e[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},i=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1c8a":function(t,e,n){},2328:function(t,e,n){"use strict";n("1c8a")},2504:function(t,e,n){"use strict";n("71b1")},2720:function(t,e,n){"use strict";n("647e")},"42c9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",{attrs:{albums:t.albums,filteredAlbums:t.filteredAlbums}})],1)},i=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fluid-container"},[r("img",{attrs:{src:n("93df"),alt:""}})])}],o={name:"Header"},c=o,s=(n("2504"),n("2877")),f=Object(s["a"])(c,l,u,!1,null,"20190dfc",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-fluid"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("Select",{on:{filter:t.filterAlbum}})],1),0===t.albums.length?n("div",{staticClass:"wait"},[n("h1",[t._v("...caricamento in corso...")])]):t._l(t.filteredAlbums,(function(t,e){return n("Album",{key:e,staticClass:"custom-col",attrs:{poster:t.poster,title:t.title,author:t.author,year:t.year,gener:t.genre}})}))],2)])])},b=[],v=(n("4de4"),n("caad"),n("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album-container"},[n("div",{staticClass:"album-content"},[n("img",{attrs:{src:t.poster,alt:""}}),n("h4",[t._v(t._s(t.title))]),n("div",{staticClass:"info"},[t._v(t._s(t.author))]),n("div",{staticClass:"info"},[t._v(t._s(t.year))])])])}),m=[],h={name:"Album",props:{poster:String,title:String,author:String,year:String}},_=h,g=(n("2328"),Object(s["a"])(_,v,m,!1,null,"9d22eb1a",null)),y=g.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{attrs:{for:"gener"}},[t._v("Scegli un genere ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.inputGener,expression:"inputGener"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.inputGener=e.target.multiple?n:n[0]},function(e){return t.$emit("filter",t.inputGener)}]}},[n("option",{attrs:{value:""}},[t._v("Tutti")]),n("option",{attrs:{value:"Pop"}},[t._v("Pop")]),n("option",{attrs:{value:"Rock"}},[t._v("Rock")]),n("option",{attrs:{value:"Metal"}},[t._v("Metal")]),n("option",{attrs:{value:"Jazz"}},[t._v("Jazz")])])])},O=[],j={name:"Select",data:function(){return{inputGener:""}}},w=j,x=(n("abcc"),Object(s["a"])(w,A,O,!1,null,"3b9ac817",null)),S=x.exports,C={name:"Main",components:{Album:y,Select:S},props:{albums:Array,filteredAlbums:Array},data:function(){return{attualFilter:""}},created:function(){this.filteredAlbums(this.attualFilter)},methods:{filterAlbum:function(t){this.attualFilter=t,this.filteredAlbums=this.albums.filter((function(e){return e.genre.includes(t)}))}}},M=C,P=(n("2720"),Object(s["a"])(M,d,b,!1,null,"38601d04",null)),$=P.exports,k=n("bc3a"),E=n.n(k),G={name:"App",components:{Header:p,Main:$},created:function(){var t=this;E.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.albums=e.data.response,t.filteredAlbums=e.data.response}))},data:function(){return{albums:[],filteredAlbums:[]}}},z=G,J=(n("5c0b"),Object(s["a"])(z,a,i,!1,null,null,null)),T=J.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"647e":function(t,e,n){},"71b1":function(t,e,n){},"93df":function(t,e,n){t.exports=n.p+"img/spotify-logo.c24917d4.png"},"9c0c":function(t,e,n){},abcc:function(t,e,n){"use strict";n("42c9")}});
//# sourceMappingURL=app.082e19df.js.map