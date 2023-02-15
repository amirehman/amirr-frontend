(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{307:function(e,t,o){"use strict";o.r(t);o(12);var n=o(148),r=o.n(n),l={data:function(){return{input:null,form:{name:null,email:null,subject:"submit website/component",message:null},message:"Thank you for your message. It has been sent.",errors:[],isLoading:!1,isSubmitted:!1}},computed:{captcha:function(){return r.a.cloneDeep(this.$store.state.captcha.captcha)}},mounted:function(){this.$store.commit("captcha/generateCaptcha")},methods:{checkCaptcha:function(){this.$store.dispatch("captcha/checkCaptcha",this.input)},formSubmit:function(e){var t=this;this.isLoading=!0;var o=e.target,n=o.action,r=o.method,body=new FormData(o);fetch(n,{method:r,body:body}).then((function(e){return e.json()})).then((function(e){t.isLoading=!1,t.isSubmitted=!0,t.form=[],t.message=e.message})).catch((function(e){t.isLoading=!1}))}}},c=o(16),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.isSubmitted?o("div",{staticClass:"flex items-center justify-center w-full h-full text-gray-700 relative"},[o("span",{staticClass:"absolute top-1 right-1 rotate-10 block cursor-pointer hover:text-black",on:{click:function(t){e.isSubmitted=!e.isSubmitted}}},[o("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),e._v(" "),o("p",{staticClass:"inline-block bg-green-50 border border-green-100 rounded px-3 py-1"},[e._v(e._s(e.message))])]):o("form",{staticClass:"space-y-6",attrs:{action:"https://manage.amirr.net/wp-json/contact-form-7/v1/contact-forms/104/feedback",method:"post"},on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[o("div",{staticClass:"form-element"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"p-3 w-full bg-white bg-opacity-50 border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{type:"text",name:"your-name",required:"",placeholder:"What’s your name?"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-element"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"p-3 w-full bg-white bg-opacity-50 border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{type:"email",name:"your-email",required:"",placeholder:"What’s your email address?"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-element"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.form.subject,expression:"form.subject"}],staticClass:"p-3 form-select bg-white bg-opacity-50 border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-auto",attrs:{name:"your-subject",id:"yourReason"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"subject",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"submit website/component"}},[e._v("Submit Website/Component")]),e._v(" "),o("option",{attrs:{value:"hire"}},[e._v("Hire")]),e._v(" "),o("option",{attrs:{value:"Suggestion"}},[e._v("Suggestion")]),e._v(" "),o("option",{attrs:{value:"other"}},[e._v("Other")])])]),e._v(" "),o("div",{staticClass:"form-element"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"p-3 w-full bg-white bg-opacity-50 border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{name:"your-message",rows:"10",required:"",placeholder:"Feel free to type as much or as little as you like."},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-element"},[e.captcha&&!e.captcha.status?o("div",[o("span",{staticClass:"select-none transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",attrs:{type:"submit"}},[o("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded-xl block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[o("span",{staticClass:"block"},[e._v("\n            "+e._s(e.captcha.num1)+"\n            "+e._s(e.captcha.opreator)+"\n            "+e._s(e.captcha.num2)+"\n          ")]),e._v(" "),o("span",[e._v("\n            =\n          ")]),e._v(" "),o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],staticClass:"w-10 rounded-full bg-yellow-50 text-center focus:outline-none",attrs:{type:"text",placeholder:"?"},domProps:{value:e.input},on:{input:[function(t){t.target.composing||(e.input=t.target.value)},e.checkCaptcha]}})])])])]):o("div",[e.isLoading?o("button",{staticClass:"transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",attrs:{type:"button",disabled:""}},[e._m(0)]):o("button",{staticClass:"transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",attrs:{type:"submit"}},[e._m(1)])]),e._v(" "),e.captcha?o("div",{staticClass:"select-none my-3",class:[e.captcha.success?"text-green-500":"text-gray-600",e.captcha.error?"text-red-500":"text-gray-600"]},[e._v(e._s(e.captcha.message))]):e._e()])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[t("div",{staticClass:"rounded-full animate-spin ease duration-300 w-5 h-5 border-2 border-l-0 border-gray-700 relative"},[t("div",{staticClass:"absolute rounded-full w-full h-full border-3 inset-0"})])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[o("span",{staticClass:"block"},[e._v("Submit")])])}],!1,null,null,null);t.default=component.exports}}]);