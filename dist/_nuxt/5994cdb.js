(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{296:function(t,r,e){"use strict";function o(){}t.exports=o,o.maxLength=4096,o.parse=function(t){var r=o.maxLength;if("string"!=typeof t)throw new TypeError("str must be a string");if(t.length>r)throw new RangeError("str is too large (CookieParser.maxLength="+r+")");var e=new o;if(arguments.length>1){var n=arguments[1];if("object"==typeof n&&null!==n&&"function"==typeof n.decode)return e.slowParse(t,n.decode)}return e.parse(t)},o.prototype.decode=function(t){try{return decodeURIComponent(t)}catch(r){return t}},o.prototype.extract=function(t,r,e){return r===e+1?"":t.slice(this.trimForward(t,r),this.trimBackward(t,e)+1)},o.prototype.trimForward=function(t,i){for(var r=t.charCodeAt(i);this.isWhiteSpace(r);)r=t.charCodeAt(++i);return i},o.prototype.trimBackward=function(t,i){for(var r=t.charCodeAt(i);this.isWhiteSpace(r);)r=t.charCodeAt(--i);return i},o.prototype.isWhiteSpace=function(t){return t<=32},o.prototype.parse=function(t){var r={},e=0,o=0,n=0,c=0,h=!1,f=!1,i=0,d=t.length;t:for(;i<d;++i){var l=t.charCodeAt(i);if(l>127)return this.slowParse(t,this.decode);if(61===l){o=i-1;var w=i+1;for(l=t.charCodeAt(w);32===l;)w++,l=t.charCodeAt(w);for(34===l&&(w++,f=!0),n=w;w<d;++w)if(37===(l=t.charCodeAt(w)))h=!0;else if(59===l||44===l){if(f)(c=this.trimBackward(t,w-1)-1)<n&&(n=c);else c=w-1;var m=this.extract(t,e,o),v=this.extract(t,n,c);for(r[m]=h?this.decode(v):v,i=w;w<d;++w)if(32!==t.charCodeAt(w)){i=w-1;break}o=e=i+1,f=!1,h=!1;continue t}if(f)(c=this.trimBackward(t,w-1)-1)<n&&(n=c);else c=w-1;m=this.extract(t,e,o),v=this.extract(t,n,c);r[m]=h?this.decode(v):v,i=w}else 59!==l&&44!==l||(e=i+1)}return r},o.serialize=function(t,r,e){var o=[t+"="+((e=e||{}).encode||encodeURIComponent)(r)];return e.maxAge&&o.push("Max-Age="+e.maxAge),e.domain&&o.push("Domain="+e.domain),e.path&&o.push("Path="+e.path),e.expires&&o.push("Expires="+e.expires.toUTCString()),e.httpOnly&&o.push("HttpOnly"),e.secure&&o.push("Secure"),o.join("; ")},o.prototype.slowParse=function(t,r){var e={};return t.split(/[;,] */).forEach((function(t){var o=t.indexOf("=");if(!(o<0)){var n=t.substr(0,o).trim(),c=t.substr(++o,t.length).trim();if('"'==c[0]&&(c=c.slice(1,-1)),null==e[n])try{e[n]=r(c)}catch(t){e[n]=c}}})),e}},297:function(t,r,e){"use strict";function o(t){this.message=t}o.prototype=new Error,o.prototype.name="InvalidCharacterError";"undefined"!=typeof window&&window.atob&&window.atob.bind(window);function n(t){this.message=t}n.prototype=new Error,n.prototype.name="InvalidTokenError";e(296)},331:function(t,r,e){"use strict";e.r(r);e(297);var o={asyncData:function(t){t.req;var r=t.redirect;t.app.$fire.auth.currentUser||r("/auth/signin")},methods:{logout:function(){this.$fire.auth.signOut()}}},n=e(15),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("button",{staticClass:"my-10 p-3 border",on:{click:t.logout}},[t._v("  Logout ")]),t._v(" "),e("pre",[t._v("        "+t._s(t.$nuxt.$fire.auth.currentUser)+"\n  ")])])}),[],!1,null,null,null);r.default=component.exports}}]);