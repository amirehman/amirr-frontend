(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{310:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(13),{data:function(){return{form:{email:""},error:{},success:null,isLoading:!1,isSubmitted:!1}},methods:{submitForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,e.$fire.auth.sendPasswordResetEmail(e.form.email).then((function(){r.success="Reset link sent to "+r.form.email})).catch((function(e){r.error=e}));case 3:case"end":return t.stop()}}),t)})))()}}}),l=r(16),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"space-y-5"},[r("div",{staticClass:"form-element"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"bg-white bg-opacity-50 p-3 w-full border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{type:"email",name:"your-email",required:"",placeholder:"Email Address"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-element"},[e.isLoading?r("button",{staticClass:"transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",attrs:{type:"button",disabled:""}},[e._m(0)]):r("button",{staticClass:"transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",on:{click:e.submitForm}},[e._m(1)])]),e._v(" "),r("client-only",[e.$nuxt.$fire.auth.currentUser?r("div",[e._v("\n    "+e._s(e.$store.state.user)+"\n  ")]):e._e()]),e._v(" "),e.error.code?r("div",{staticClass:"mt-12 w-full md:w-3/4 border border-red-200 text-sm p-2 bg-red-100 rounded"},[e._v(e._s(e.error))]):e._e(),e._v(" "),e.success?r("div",{staticClass:"mt-12 w-full md:w-3/4 border border-green-200 text-sm p-2 bg-green-100 rounded "},[e._v(e._s(e.success))]):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[t("div",{staticClass:"rounded-full animate-spin ease duration-300 w-5 h-5 border-2 border-l-0 border-gray-700 relative"},[t("div",{staticClass:"absolute rounded-full w-full h-full border-3 inset-0"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[r("span",{staticClass:"block"},[e._v("Send Request")])])}],!1,null,"2526fcd5",null);t.default=component.exports}}]);