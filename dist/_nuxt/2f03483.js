(window.webpackJsonp=window.webpackJsonp||[]).push([[29,17],{303:function(t,e,r){"use strict";r.r(e);var l={props:["data","title","isShowPlaylist"]},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data.playlists&&t.data.playlists.nodes.length>0?r("div",{on:{click:function(e){return t.$router.push({path:"/learn-with-aamir/"+t.data.playlists.nodes[0].slug+"/"+t.data.slug})}}},[r("div",{staticClass:"image h-50 bg-gray-200 cursor-pointer"},[t.data.featuredImage?[r("img",{staticClass:"h-full object-cover w-full",attrs:{srcset:t.data.featuredImage.node.srcSet,alt:"image",height:"auto",width:"auto"}})]:t._e()],2),t._v(" "),r("div",{staticClass:"p-3"},[r("nuxt-link",{staticClass:"text-gray-800",attrs:{to:"/learn-with-aamir/"+t.data.playlists.nodes[0].slug+"/"+t.data.slug}},[t._v(t._s(t.title))]),t._v(" "),t.data.playlists?r("div",{staticClass:"text-sm text-gray-600 flex items-center justify-between"},[t.isShowPlaylist?t._l(t.data.playlists.nodes,(function(e){return r("span",{key:e.id},[t._v("\n          "+t._s(e.name)+"\n        ")])})):t._e(),t._v(" "),r("span",[t._v(" "+t._s(t.$moment(t.data.date).fromNow())+" ")])],2):t._e()],1)]):t._e()}),[],!1,null,"4cc5b608",null);e.default=component.exports},321:function(t,e,r){t.exports=r.p+"img/folder.ecc3352.svg"},341:function(t,e,r){"use strict";r.r(e);var l=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("img",{staticClass:"w-20 fill-current opacity-50",attrs:{src:r(321),alt:"404"}}),t._v(" "),l("span",{staticClass:"block text-sm text-gray-500 text-center font-medium tracking-wider"},[t._v("No videos")])])}],n=r(4),o=(r(12),r(11),r(16),r(17),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,l,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$gqlQueries,l=t.params,n=t.redirect,e.next=3,Promise.all([r.getPlaylist(l.playlist)]);case 3:return(o=e.sent)[0]||n("/404"),e.abrupt("return",{videos:o[0].projects.nodes});case 6:case"end":return e.stop()}}),e)})))()}}),c=r(15),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"my-16"},[r("div",{staticClass:"mb-10 flex items-center justify-between"},[0!=t.videos.length&&0!=t.videos[0].playlists.nodes.length?r("div",[r("h1",{staticClass:"text-2xl"},[t._v(t._s(t.videos[0].playlists.nodes[0].name))])]):t._e(),t._v(" "),r("div",{staticClass:"filter hidden"},[t._v("\n            Filter\n          ")])]),t._v(" "),r("div",{staticClass:"content-wrapper"},[t.videos.length>0?r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10"},t._l(t.videos,(function(data){return r("div",{key:data.id,staticClass:"border border-gray-200 rounded-lg overflow-hidden"},[r("ProjectsLearnWithAmirProjectBox",{attrs:{data:data,title:data.title,"is-show-playlist":!1}})],1)})),0):r("div",{staticClass:"h-48 flex items-center justify-center select-none"},[t._m(0)])])])])}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectsLearnWithAmirProjectBox:r(303).default})}}]);