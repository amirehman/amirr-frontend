(window.webpackJsonp=window.webpackJsonp||[]).push([[40,18,19],{288:function(t,e,r){"use strict";r.r(e);var n={},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex items-center justify-center w-full bg-gray-200 text-2xl h-72"},[t._v("\n    Loading...\n")])}),[],!1,null,"3d0c97d3",null);e.default=component.exports},290:function(t,e,r){"use strict";r.r(e);var n={props:["project","index","projectTypeSlug","isProjectTypes"]},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nuxt-link",{staticClass:"block relative",attrs:{to:t.projectTypeSlug+"/"+t.project.slug}},[t.project.projectExtra.projectVideoLink?r("span",{staticClass:"absolute bottom-3 right-3 text-gray-800 opacity-25"},[r("svg",{staticClass:"h-10 w-10",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}}),t._v(" "),r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])]):t._e(),t._v(" "),t.project.featuredImage?[r("img",{staticClass:"w-full",attrs:{srcset:t.project.featuredImage.node.srcSet,alt:"image",height:"500",width:"500"}})]:[r("UtilsLoadingBox")]],2),t._v(" "),r("div",{staticClass:"info p-3 space-y-1 md:space-y-0"},[r("nuxt-link",{staticClass:"not-active text-semibold text-2xl md:text-lg flex items-center justify-between",attrs:{to:t.projectTypeSlug+"/"+t.project.slug}},[r("span",[t._v(t._s(t.project.title)+" ")]),t._v(" "),r("span",{staticClass:"hidden text-sm font-semibold uppercase text-green-500 border bg-green-50 border-green-500 rounded px-2"},[t._v("Paid")])]),t._v(" "),r("div",{staticClass:"text-gray-500 lg:text-gray-700 flex items-center justify-between text-base lg:text-sm"},[r("span",{staticClass:"block md:inline mt-1 md:mt-0"},[t._l(t.project.categories.nodes,(function(e,b){return[r("nuxt-link",{key:b,staticClass:"not-active capitalize hover:text-yellow-500",attrs:{to:"/categories/"+e}},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),t.project.categories.nodes.length!=b+1?[t._v(", ")]:t._e()]}))],2),t._v(" "),t.isProjectTypes?r("span",{staticClass:"block md:inline mt-1 md:mt-0"},[t._l(t.project.projectTypes.nodes,(function(e,i){return[r("nuxt-link",{key:i,staticClass:"not-active capitalize hover:text-yellow-500",attrs:{to:"/categories/"+e}},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),t.project.projectTypes.nodes.length!=i+1?[t._v(", ")]:t._e()]}))],2):t._e()])],1)],1)}),[],!1,null,"00238dba",null);e.default=component.exports;installComponents(component,{UtilsLoadingBox:r(288).default})},334:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(13),r(12),r(17),r(18),{computed:{isItems:function(){return 0!=this.projectType.projects.nodes.length}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$gqlQueries,n=t.redirect,e.next=3,Promise.all([r.getProjectsByType("tutorials")]);case 3:return(o=e.sent)[0]||n("/"),e.abrupt("return",{projectType:o[0]});case 6:case"end":return e.stop()}}),e)})))()}}),c=r(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),t.isItems?r("section",{staticClass:"my-24 latest"},[t._m(1),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"},t._l(t.projects,(function(e,i){return r("div",{key:i,staticClass:"card border rounded-xl overflow-hidden"},[r("ProjectsProjectCard",{attrs:{project:e,index:i,"project-type-slug":t.projectType.slug}})],1)})),0)]):r("div",{staticClass:"h-64 flex items-center justify-center"},[r("span",{staticClass:"text-3xl text-gray-500 tracking-wider font-light uppercase"},[t._v("Coming soon...")])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"my-16 jumbotron bg-green-50 h-48 rounded-2xl"},[r("div",{staticClass:"h-full flex items-center justify-center"},[r("h1",{staticClass:"px-5 text-center text-2xl md:text-3xl md:tracking-wide md:leading-10 font-light capitalize text-gray-800"},[r("span",{staticClass:"lg:block text-center"},[t._v("Free themes, templates, and UI tools to help you ")]),t._v(" "),r("span",{staticClass:"lg:block text-center"},[t._v("start your next project!")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-header mb-10"},[r("span",{staticClass:"capitalize text-xl tracking-wide font-medium select-none text-gray-800"},[t._v("Tutorials")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProjectsProjectCard:r(290).default})}}]);