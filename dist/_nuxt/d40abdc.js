(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{311:function(e,r,t){"use strict";t.r(r);var o=t(5),n=(t(13),{data:function(){return{form:{email:"",password:""},error:{},isLoading:!1,isSubmitted:!1}},methods:{submitForm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e,r.next=3,e.$fire.auth.signInWithEmailAndPassword(e.form.email,e.form.password).then((function(e){e.user;t.error={},$nuxt.$router.push("/")})).catch((function(e){t.error=e}));case 3:case"end":return r.stop()}}),r)})))()}}}),l=t(16),component=Object(l.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"space-y-5"},[t("div",{staticClass:"form-element"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"bg-white bg-opacity-50 p-3 w-full border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{type:"email",name:"your-email",required:"",placeholder:"Email Address"},domProps:{value:e.form.email},on:{input:function(r){r.target.composing||e.$set(e.form,"email",r.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-element"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"bg-white bg-opacity-50 p-3 w-full border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{type:"password",name:"your-email",required:"",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(r){r.target.composing||e.$set(e.form,"password",r.target.value)}}})]),e._v(" "),t("div",{staticClass:"form-element"},[e.isLoading?t("button",{staticClass:"transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",attrs:{type:"button",disabled:""}},[e._m(0)]):t("button",{staticClass:"transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",on:{click:e.submitForm}},[e._m(1)])]),e._v(" "),t("client-only",[e.$nuxt.$fire.auth.currentUser?t("div",[e._v("\n    "+e._s(e.$store.state.user)+"\n  ")]):e._e()]),e._v(" "),e.error.code?t("div",{staticClass:"mt-12 w-full md:w-3/4 border border-red-200 text-sm p-2 bg-red-100 rounded"},[e._v(e._s(e.error))]):e._e()],1)}),[function(){var e=this.$createElement,r=this._self._c||e;return r("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[r("div",{staticClass:"rounded-full animate-spin ease duration-300 w-5 h-5 border-2 border-l-0 border-gray-700 relative"},[r("div",{staticClass:"absolute rounded-full w-full h-full border-3 inset-0"})])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[t("span",{staticClass:"block"},[e._v("Login")])])}],!1,null,"3cf92c67",null);r.default=component.exports}}]);