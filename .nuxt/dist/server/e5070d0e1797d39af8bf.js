exports.ids=[7],exports.modules={46:function(t,e,n){var map={"./asset 1.jpeg":47,"./asset 10.jpeg":48,"./asset 11.jpeg":49,"./asset 12.jpeg":50,"./asset 13.jpeg":51,"./asset 14.jpeg":52,"./asset 15.jpeg":53,"./asset 2.jpeg":54,"./asset 3.jpeg":55,"./asset 4.jpeg":56,"./asset 5.jpeg":57,"./asset 6.jpeg":58,"./asset 7.jpeg":59,"./asset 8.jpeg":60,"./asset 9.jpeg":61,"./default-image.jpeg":62};function r(t){var e=o(t);return n(e)}function o(t){var e=map[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=46},47:function(t,e,n){t.exports=n.p+"img/3538ff0.jpeg"},48:function(t,e,n){t.exports=n.p+"img/72ad111.jpeg"},49:function(t,e,n){t.exports=n.p+"img/190ef3a.jpeg"},50:function(t,e,n){t.exports=n.p+"img/245ec88.jpeg"},51:function(t,e,n){t.exports=n.p+"img/277b3f0.jpeg"},52:function(t,e,n){t.exports=n.p+"img/9ee4c40.jpeg"},53:function(t,e,n){t.exports=n.p+"img/d54fdea.jpeg"},54:function(t,e,n){t.exports=n.p+"img/49ae63a.jpeg"},55:function(t,e,n){t.exports=n.p+"img/e4731a5.jpeg"},56:function(t,e,n){t.exports=n.p+"img/cfd7e53.jpeg"},57:function(t,e,n){t.exports=n.p+"img/3d4ea82.jpeg"},58:function(t,e,n){t.exports=n.p+"img/6a1ea16.jpeg"},59:function(t,e,n){t.exports=n.p+"img/b0b3bc1.jpeg"},60:function(t,e,n){t.exports=n.p+"img/6d320e5.jpeg"},61:function(t,e,n){t.exports=n.p+"img/bf75a3e.jpeg"},62:function(t,e,n){t.exports=n.p+"img/cfd7e53.jpeg"},64:function(t,e,n){var content=n(73);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("4fde86e6",content,!0,t)}},72:function(t,e,n){"use strict";n.r(e);var r=n(64),o=n.n(r);for(var d in r)"default"!==d&&function(t){n.d(e,t,function(){return r[t]})}(d);e.default=o.a},73:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".card .overlay[data-v-d06054b4]{width:100%;height:100%;position:absolute;top:0;left:0;background:#000;opacity:.1;transition:all .25s;z-index:0}.card a:hover .overlay[data-v-d06054b4]{opacity:.5}.card a[data-v-d06054b4]{cursor:pointer}.card .title[data-v-d06054b4]{max-width:95%;text-transform:capitalize;position:absolute;font-size:2.2rem;color:#fcfdff;font-weight:700;letter-spacing:1px;top:2%;left:5%;z-index:1}@media screen and (max-width:1100px) and (min-width:992px){.card .title[data-v-d06054b4]{font-size:1.67rem}}.card .author[data-v-d06054b4]{position:absolute;bottom:1%;left:5%;padding-right:10px;color:#fcfdff;text-align:center}@media screen and (max-width:1190px) and (min-width:1090px){.card .author[data-v-d06054b4]{font-size:.8rem}}@media screen and (max-width:1090px) and (min-width:992px){.card .author[data-v-d06054b4]{font-size:.71rem}}@media screen and (max-width:815px) and (min-width:767px){.card .author[data-v-d06054b4]{font-size:.8rem}}@media screen and (max-width:420px){.card .author[data-v-d06054b4]{font-size:.7rem}}",""])},87:function(t,e,n){"use strict";n.r(e);var r={computed:{articles(){return this.$store.state.articles}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-around"},t._l(t.articles,function(article){return t._ssrNode('<div class="card text-white bg-transparent border-0 col-10 col-sm-8 col-md-6 col-lg-4 p-4" data-v-d06054b4>',"</div>",[r("nuxt-link",{staticStyle:{position:"relative"},attrs:{to:{path:"/posts/"+article.id,params:{article:article}}}},[r("img",{staticClass:"card-img-top",attrs:{src:n(46)("./"+article.image)}}),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"author"},[t._v(t._s(article.updated_at)+" by "+t._s(article.author))])])],1)}),0)},[],!1,function(t){var e=n(72);e.__inject__&&e.__inject__(t)},"d06054b4","08f86175");e.default=component.exports}};
//# sourceMappingURL=e5070d0e1797d39af8bf.js.map