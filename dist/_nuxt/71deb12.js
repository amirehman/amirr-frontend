(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6],{297:function(e,t,r){"use strict";function o(){}e.exports=o,o.maxLength=4096,o.parse=function(e){var t=o.maxLength;if("string"!=typeof e)throw new TypeError("str must be a string");if(e.length>t)throw new RangeError("str is too large (CookieParser.maxLength="+t+")");var r=new o;if(arguments.length>1){var n=arguments[1];if("object"==typeof n&&null!==n&&"function"==typeof n.decode)return r.slowParse(e,n.decode)}return r.parse(e)},o.prototype.decode=function(e){try{return decodeURIComponent(e)}catch(t){return e}},o.prototype.extract=function(e,t,r){return t===r+1?"":e.slice(this.trimForward(e,t),this.trimBackward(e,r)+1)},o.prototype.trimForward=function(e,i){for(var t=e.charCodeAt(i);this.isWhiteSpace(t);)t=e.charCodeAt(++i);return i},o.prototype.trimBackward=function(e,i){for(var t=e.charCodeAt(i);this.isWhiteSpace(t);)t=e.charCodeAt(--i);return i},o.prototype.isWhiteSpace=function(e){return e<=32},o.prototype.parse=function(e){var t={},r=0,o=0,n=0,c=0,l=!1,d=!1,i=0,f=e.length;e:for(;i<f;++i){var m=e.charCodeAt(i);if(m>127)return this.slowParse(e,this.decode);if(61===m){o=i-1;var h=i+1;for(m=e.charCodeAt(h);32===m;)h++,m=e.charCodeAt(h);for(34===m&&(h++,d=!0),n=h;h<f;++h)if(37===(m=e.charCodeAt(h)))l=!0;else if(59===m||44===m){if(d)(c=this.trimBackward(e,h-1)-1)<n&&(n=c);else c=h-1;var w=this.extract(e,r,o),v=this.extract(e,n,c);for(t[w]=l?this.decode(v):v,i=h;h<f;++h)if(32!==e.charCodeAt(h)){i=h-1;break}o=r=i+1,d=!1,l=!1;continue e}if(d)(c=this.trimBackward(e,h-1)-1)<n&&(n=c);else c=h-1;w=this.extract(e,r,o),v=this.extract(e,n,c);t[w]=l?this.decode(v):v,i=h}else 59!==m&&44!==m||(r=i+1)}return t},o.serialize=function(e,t,r){var o=[e+"="+((r=r||{}).encode||encodeURIComponent)(t)];return r.maxAge&&o.push("Max-Age="+r.maxAge),r.domain&&o.push("Domain="+r.domain),r.path&&o.push("Path="+r.path),r.expires&&o.push("Expires="+r.expires.toUTCString()),r.httpOnly&&o.push("HttpOnly"),r.secure&&o.push("Secure"),o.join("; ")},o.prototype.slowParse=function(e,t){var r={};return e.split(/[;,] */).forEach((function(e){var o=e.indexOf("=");if(!(o<0)){var n=e.substr(0,o).trim(),c=e.substr(++o,e.length).trim();if('"'==c[0]&&(c=c.slice(1,-1)),null==r[n])try{r[n]=t(c)}catch(e){r[n]=c}}})),r}},298:function(e,t,r){"use strict";function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidCharacterError";"undefined"!=typeof window&&window.atob&&window.atob.bind(window);function n(e){this.message=e}n.prototype=new Error,n.prototype.name="InvalidTokenError";r(297)},302:function(e,t,r){e.exports=r.p+"img/fingerprints.5f41380.svg"},315:function(e,t,r){"use strict";r.r(t);var o=r(4),n=(r(12),{data:function(){return{form:{email:"",password:"",confirm_password:""},error:{},isLoading:!1,isSubmitted:!1}},methods:{checkPassword:function(){this.form.password!==this.form.confirm_password?(this.error.code="auth/invalid-email",this.error.message="Password mismatch"):this.error={}},submitForm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,e.$fire.auth.createUserWithEmailAndPassword(e.form.email,e.form.password).then((function(e){e.user;r.error={},$nuxt.$router.push("/")})).catch((function(e){r.error=e}));case 3:case"end":return t.stop()}}),t)})))()}}}),c=r(15),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"space-y-5"},[r("div",{staticClass:"form-element"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"bg-white bg-opacity-50 p-3 w-full border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{type:"email",required:"",placeholder:"Email Address"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-element"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"bg-white bg-opacity-50 p-3 w-full border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{type:"password",required:"",placeholder:"Password"},domProps:{value:e.form.password},on:{input:[function(t){t.target.composing||e.$set(e.form,"password",t.target.value)},e.checkPassword]}})]),e._v(" "),r("div",{staticClass:"form-element"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.confirm_password,expression:"form.confirm_password"}],staticClass:"bg-white bg-opacity-50 p-3 w-full border border-gray-300 rounded focus:outline-none active:outline-none focus:border-yellow-300 focus:ring-transparent w-full md:w-3/4",attrs:{type:"password",required:"",placeholder:"Confirm Password"},domProps:{value:e.form.confirm_password},on:{input:[function(t){t.target.composing||e.$set(e.form,"confirm_password",t.target.value)},e.checkPassword]}})]),e._v(" "),r("div",{staticClass:"form-element"},[e.isLoading?r("button",{staticClass:"transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",attrs:{type:"button",disabled:""}},[e._m(0)]):r("button",{staticClass:"transition-all duration-100 focus:outline-none active:outline-none group flex items-center h-full",on:{click:e.submitForm}},[e._m(1)])]),e._v(" "),r("client-only",[e.$nuxt.$fire.auth.currentUser?r("div",[e._v("\n    "+e._s(e.$store.state.user)+"\n  ")]):e._e()]),e._v(" "),e.error.code?r("div",{staticClass:"mt-12 w-full md:w-3/4 border border-red-200 text-sm p-2 bg-red-100 rounded"},[e._v(e._s(e.error.message))]):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[t("div",{staticClass:"rounded-full animate-spin ease duration-300 w-5 h-5 border-2 border-l-0 border-gray-700 relative"},[t("div",{staticClass:"absolute rounded-full w-full h-full border-3 inset-0"})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"group-foucs:ring group-foucs:ring-green-200 px-4 py-2 bg-yellow-200 transition-all rounded block mr-3 hover:bg-yellow-300 flex items-center space-x-2"},[r("span",{staticClass:"block"},[e._v("Signup")])])}],!1,null,"019fa2ea",null);t.default=component.exports},339:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"absolute inset-0 flex justify-center lg:justify-end select-none"},[t("img",{staticClass:"select-none w-3/4 object-cover lg:object-contain opacity-20",attrs:{src:r(302),alt:"mention"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-16"},[r("h1",{staticClass:"text-2xl md:tracking-wide md:leading-10 font-normal capitalize text-gray-700"},[r("span",{staticClass:"lg:block "},[e._v("Create Account")])])])}],n=(r(298),{asyncData:function(e){e.req;var t=e.redirect;e.app.$fire.auth.currentUser&&t("/profile")}}),c=r(15),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"flex flex-wrap relative h-screen"},[e._m(0),e._v(" "),r("div",{staticClass:"relative z-1 w-full lg:w-1/2"},[e._m(1),e._v(" "),r("div",{staticClass:"my-5 text-gray-700 space-y-3"},[r("FormsSignup")],1)])])])}),o,!1,null,"ebea5e10",null);t.default=component.exports;installComponents(component,{FormsSignup:r(315).default})}}]);