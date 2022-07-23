/*! For license information please see 9771-a7ee0d8b8d1fb3b9e93f.chunk.js.LICENSE.txt */
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9771],{79761:function(e,t,r){function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}r.d(t,{ZP:function(){return Y}});var s=0;function c(e){return"__private_"+s+++"_"+e}var u=c("internalProcessors"),l=c("customProcessors"),d=c("globalInstance"),f=function(){function e(){Object.defineProperty(this,u,{writable:!0,value:new Array(p)}),Object.defineProperty(this,l,{writable:!0,value:new Array})}var t,r,o,s=e.prototype;return s.processOptions=function(e){for(var t,r=e,o=n(a(this,l)[l]);!(t=o()).done;){r=(0,t.value)(r)}for(var i,s=n(a(this,u)[u]);!(i=s()).done;){r=(0,i.value)(r)}return r},s.registerProcessor=function(e){a(this,l)[l].push(e)},s.clearProcessors=function(){a(this,l)[l]=[]},e.processOptions=function(e,t){var r=e;return t&&t.optionsProcessor&&(r=t.optionsProcessor.processOptions(r)),a(this,d)[d].processOptions(r)},t=e,o=[{key:"globalInstance",get:function(){return a(e,d)[d]}}],(r=null)&&i(t.prototype,r),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){var t=Object.assign({},e);return t.maxAgeYears&&t.maxAgeYears>0?(t.maxAge=31557600*t.maxAgeYears,delete t.maxAgeYears):t.maxAgeDays&&t.maxAgeDays>0?(t.maxAge=86400*t.maxAgeDays,delete t.maxAgeDays):t.maxAgeHours&&t.maxAgeHours>0?(t.maxAge=3600*t.maxAgeHours,delete t.maxAgeHours):t.maxAgeMinutes&&t.maxAgeMinutes>0&&(t.maxAge=60*t.maxAgeMinutes,delete t.maxAgeMinutes),t}Object.defineProperty(f,d,{writable:!0,value:new f});var h=f,m=r(70750),v=r.n(m);var _=function(e){return"string"==typeof e?new(v())(e):e||("undefined"!=typeof document?new(v())(document.cookie):new(v()))};function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var b=0;function w(e){return"__private_"+b+++"_"+e}var x=w("cookieProvider"),j=function(){function e(e,t,r){this.name=void 0,this.options=void 0,Object.defineProperty(this,x,{writable:!0,value:void 0}),this.name=e,y(this,x)[x]=_(r),this.options=h.processOptions(t||{},y(this,x)[x])}var t,r,n;return e.prototype.remove=function(){y(this,x)[x].remove(this.name,this.options)},t=e,(r=[{key:"value",get:function(){return y(this,x)[x].get(this.name)},set:function(e){y(this,x)[x].set(this.name,e,this.options)}}])&&g(t.prototype,r),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var O=0;function P(e){return"__private_"+O+++"_"+e}var N=P("cookieProvider"),L=P("values"),k=P("writeCookie"),A=P("serializedValues"),T=P("readCookie");function C(){var e=S(this,A)[A]();S(this,N)[N].set(this.name,e,this.options)}function I(){return Array.from(S(this,L)[L],(function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(r)})).join("&")}function M(){var e=S(this,N)[N].get(this.name,{doNotParse:!0});if(!e)return new Map;if(!e.includes("="))return new Map;var t,r,n=new Map;return e.split("&").forEach((function(e){var o=e.split("=");t=o[0],r=o[1],n.set(decodeURIComponent(t),decodeURIComponent(r))})),n}var G=function(){function e(e,t,r){Object.defineProperty(this,T,{value:M}),Object.defineProperty(this,A,{value:I}),Object.defineProperty(this,k,{value:C}),this.name=void 0,this.options=void 0,Object.defineProperty(this,N,{writable:!0,value:void 0}),Object.defineProperty(this,L,{writable:!0,value:new Map}),this.name=e,S(this,N)[N]=_(r),this.options=Object.assign({},h.processOptions(t||{},S(this,N)[N]),{encode:function(e){return e}}),S(this,L)[L]=S(this,T)[T]()}var t,r,n,o=e.prototype;return o.getValue=function(e){return S(this,L)[L].get(e)},o.setValue=function(e,t){null==t?S(this,L)[L].delete(e):S(this,L)[L].set(e,t),0===S(this,L)[L].size?this.remove():S(this,k)[k]()},o.clearValues=function(){S(this,L)[L].clear(),S(this,k)[k]()},o.remove=function(){S(this,L)[L].clear(),S(this,N)[N].remove(this.name,this.options)},t=e,(r=[{key:"keys",get:function(){return S(this,L)[L].keys()}}])&&E(t.prototype,r),n&&E(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D={serialize:function(e){return e?e.toString():e},deserialize:function(e){return e}},R={serialize:function(e){return e.toString()},deserialize:function(e){return Number.parseFloat(e)}},V={serialize:function(e){return null==e?e:e?"1":"0"},deserialize:function(e){return"1"===e}};function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var F=function(){function e(){}var t,r,n;return e.define=function(e){if("values"in e){var t=function(e){for(var t={},r=0,n=Object.entries(e);r<n.length;r++){var o=n[r],i=o[0],a=o[1];t[i]="string"==typeof a?{storeAs:a}:a}return t}(e.values);return function(e){for(var t=0,r=Object.entries(e);t<r.length;t++){var n=r[t],o=n[0];if(!n[1].storeAs)throw"storeAs value required for cookie value '"+o+"'"}}(t),{cookieName:e.name,find:function(r){for(var n=new G(e.name,e.options,_(r)),o=function(){var e=a[i],t=e[0],r=e[1],o=function(e){switch(e){case"number":return R;case"boolean":return V;case void 0:case"string":return D;default:if("string"==typeof e)throw"Type '"+e+"' is not currently supported. You can add your own serializer by specifying an object with a serialize and deserialize method.";return e}}(r.type);Object.defineProperty(n,t,{get:function(){var e=this.getValue(r.storeAs);return null==e?e:o.deserialize(e)},set:function(e){var t=null==e?null:o.serialize(e);this.setValue(r.storeAs,t)}})},i=0,a=Object.entries(t);i<a.length;i++)o();return n}}}return{cookieName:e.name,find:function(t){return new j(e.name,e.options,_(t))}}},e.registerOptionsProcessor=function(e){h.globalInstance.registerProcessor(e)},t=e,n=[{key:"globalOptionsProcessor",get:function(){return h.globalInstance}}],(r=null)&&z(t.prototype,r),n&&z(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();h.globalInstance.registerProcessor((function(e){return Object.assign({path:"/",secure:!0},e)}));var Y=F},44585:function(e,t,r){r.d(t,{V:function(){return Me}});var n=r(84481),o=r.n(n),i=r(80702),a=r(54130),s=r(85492),c="SET_SELECTED",u="SET_ASSETS",l="SET_TOTAL_RESULTS",d="SET_CURRENT_PAGE",f="SET_TOTAL_PAGES",p="SET_LOADING",h="SET_SHOW_CAPTIONS",m="SET_STANDARD_SNIPPET",v="SET_LEGACY_SNIPPET",_=function(e,t){switch(t.type){case c:return Object.assign({},e,{selected:t.selected});case u:return Object.assign({},e,{assets:t.assets});case l:return Object.assign({},e,{totalResults:t.totalResults});case d:return Object.assign({},e,{currentPage:t.currentPage});case f:return Object.assign({},e,{totalPages:t.totalPages});case p:return Object.assign({},e,{loading:t.loading});case h:return Object.assign({},e,{showCaptions:t.showCaptions});case m:return Object.assign({},e,{standardSnippet:t.standardSnippet});case v:return Object.assign({},e,{legacySnippet:t.legacySnippet})}},g=r(56309),y=r.n(g);function b(){b=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=w(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function d(){}function f(){}function p(){}var h={};s(h,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(S([])));v&&v!==t&&r.call(v,o)&&(h=v);var _=p.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){function n(o,i,a,s){var c=u(e[o],e,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,s(_,"constructor",p),s(p,"constructor",f),f.displayName=s(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,a,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},g(y.prototype),s(y.prototype,i,(function(){return this})),e.AsyncIterator=y,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new y(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(_),s(_,a,"Generator"),s(_,o,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function w(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){w(i,n,o,a,s,"next",e)}function s(e){w(i,n,o,a,s,"throw",e)}a(void 0)}))}}function j(e,t,r){return E.apply(this,arguments)}function E(){return(E=x(b().mark((function e(t,r,n){var o,i;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o="",t&&0!==t.length?("mostpopular",o="/search/embed/assets?phrase="+t+"&family="+["creative","editorial"].join(",")+"&sort=mostpopular&embeddable=true&page="+r+"&pagesize=40"):o="/search/embed/more-like-this/"+n,e.next=5,y().get(o,{headers:{Accept:"application/json"}});case 5:return i=e.sent,e.abrupt("return",{numResults:i.data.total_number_of_results,assets:i.data.assets});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{numResults:0,assets:[]});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function S(e,t,r,n,o){return O.apply(this,arguments)}function O(){return(O=x(b().mark((function e(t,r,n,o,i){var a,s;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=16;break}return e.prev=1,a="https://embed.gettyimages.com/preview/"+t,a+="?visitor="+r,a+="&caller="+n,a+="&uni="+o,a+="&caption="+i,e.next=9,y().get(a,{headers:{Accept:"application/json"}});case 9:return s=e.sent,e.abrupt("return",{jsSnippet:s.data.jsSnippet,iframeSnippet:s.data.iframeSnippet});case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",{jsSnippet:"",iframeSnippet:""});case 16:return e.abrupt("return",{jsSnippet:"",iframeSnippet:""});case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var P=r(85893);function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=b(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function d(){}function f(){}function p(){}var h={};s(h,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(E([])));v&&v!==t&&r.call(v,o)&&(h=v);var _=p.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){function n(o,i,a,s){var c=u(e[o],e,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,s(_,"constructor",p),s(p,"constructor",f),f.displayName=s(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,a,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},g(y.prototype),s(y.prototype,i,(function(){return this})),e.AsyncIterator=y,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new y(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(_),s(_,a,"Generator"),s(_,o,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function L(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){L(i,n,o,a,s,"next",e)}function s(e){L(i,n,o,a,s,"throw",e)}a(void 0)}))}}var A=(0,n.createContext)(),T=function(e){var t=e.asset,r=e.visitorId,o=e.children,i=t.id,a=t.imageUrls.image170,s=(0,n.useReducer)(_,{selected:[],assets:[],totalResults:0,currentPage:1,totalPages:0,loading:!1,showCaptions:!0,standardSnippet:"",legacySnippet:""}),g=s[0],y=s[1],b=function(e){return y({type:c,selected:e})},w=function(e){return y({type:u,assets:e})},x=function(e){return y({type:l,totalResults:e})},E=function(e){return y({type:d,currentPage:e})},O=function(e){return y({type:f,totalPages:e})},L=function(e){return y({type:p,loading:e})},T=function(){var e=k(N().mark((function e(){var t,n;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.selected.map((function(e){return e.id})).join(","),"getty-adp",!0,e.next=5,S(t,r,"getty-adp",true,g.showCaptions);case 5:n=e.sent,i=n.jsSnippet,y({type:m,standardSnippet:i}),o=n.iframeSnippet,y({type:v,legacySnippet:o});case 8:case"end":return e.stop()}var o,i}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=k(N().mark((function e(t,r){var n,o;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=null),void 0===r&&(r=1),L(!0),w([]),x(0),E(1),O(0),e.next=9,j(t,r,i);case 9:n=e.sent,o=[].concat(n.assets),w(o),x(n.numResults),E(r),O(Math.ceil(n.numResults/40)),L(!1);case 16:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){T()}),[g.selected,g.showCaptions]),(0,n.useEffect)((function(){b([{id:i,delivery_urls:{comp:a}}]),C()}),[]),(0,P.jsx)(A.Provider,{value:Object.assign({},g,{setShowCaptions:function(e){return y({type:h,showCaptions:e})},performImageSearch:C,addToSelected:function(e){if(g.selected.length<5)b([].concat(g.selected,[e]));else{var t=[].concat(g.selected);t.pop(),t=[].concat(t,[e]),b(t)}},removeFromSelected:function(e){if(e<g.selected.length&&g.selected.length>1){var t=[].concat(g.selected);t.splice(e,1),b(t)}},swapSelectedPositions:function(e,t){var r=[].concat(g.selected),n=r[e];r[e]=r[t],r[t]=n,b(r)}}),children:o})},C=function(){return(0,n.useContext)(A)},I="EmbedSnippets-module__container___U7iXW",M="EmbedSnippets-module__dropdown___BbVhZ",G="EmbedSnippets-module__code___RlFgV",D="EmbedSnippets-module__input___K16fS",R=function(){var e=(0,a.T_)(),t=C(),r=(0,n.useState)("standardSnippet"),o=r[0],i=r[1],s=(0,n.useState)(t.standardSnippet),c=s[0],u=s[1];(0,n.useEffect)((function(){u("standardSnippet"===o?t.standardSnippet:t.legacySnippet)}),[t.standardSnippet]);return(0,P.jsxs)("div",{className:I,children:[(0,P.jsxs)("select",{className:M+" dropdown-field",value:o,onChange:function(e){var r;r=e.target.value,u("standardSnippet"===r?t.standardSnippet:t.legacySnippet),i(r)},children:[(0,P.jsx)("option",{value:"standardSnippet",children:e("standard_code")}),(0,P.jsx)("option",{value:"legacySnippet",children:e("legacy_code")})]}),(0,P.jsx)("div",{className:G,children:(0,P.jsx)("input",{className:D,type:"text",readOnly:!0,value:c})})]})},V=["styles"];function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}var F=function(e){e.styles;var t=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,V);return o().createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:"18.796",height:"18.927",viewBox:"0 0 18.796 18.927"},t),o().createElement("path",{d:"M18.796 16.904l-4.378-4.378a7.892 7.892 0 001.467-4.583C15.885 3.563 12.322 0 7.943 0 3.563 0 0 3.563 0 7.943c0 4.38 3.563 7.943 7.943 7.943a7.89 7.89 0 004.583-1.467l4.378 4.377 1.892-1.892zM7.943 13.209a5.272 5.272 0 01-5.267-5.266 5.272 5.272 0 015.267-5.267 5.272 5.272 0 015.266 5.267 5.272 5.272 0 01-5.266 5.266z"}))},Y=["styles"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},H.apply(this,arguments)}var U=function(e){e.styles;var t=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,Y);return o().createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:"18.5",height:"18.5",viewBox:"0 0 19 32"},t),o().createElement("path",{d:"M16.44 0l2.118 2.107-13.89 13.96 13.885 13.814L16.444 32 .442 16.079z"}))},B="EmbedSearch-module__embedSearch___FF71X",K="EmbedSearch-module__searchBox___qE9nM",q="EmbedSearch-module__searchLabel___n3_QT",X="EmbedSearch-module__searchArea___xNoMx",J="EmbedSearch-module__searchButton___C1PdF",Q="EmbedSearch-module__searchInput___AsKjv",W="EmbedSearch-module__searchMosaic___fm_Kg",Z="EmbedSearch-module__mosaicImages___RhfhT",$="EmbedSearch-module__mosiacImage___dTeCe",ee="EmbedSearch-module__image___dJbcu",te="EmbedSearch-module__addedImage___s4SOM",re="EmbedSearch-module__addButton___qI_jq",ne="EmbedSearch-module__hideButton___lGASY",oe="EmbedSearch-module__mosaicBottom___QzwPv",ie="EmbedSearch-module__text___dtdbS",ae="EmbedSearch-module__leftArrow___KM1Rn",se="EmbedSearch-module__rightArrow___dY7TP",ce=function(){var e=(0,a.T_)(),t=C(),r=(0,n.useState)(""),o=r[0],i=r[1],s=function(e){i(e.target.value)},c=function(e){"Enter"===e.key&&t.performImageSearch(o,1)},u=function(e,r){return function(e){return!t.selected.some((function(t){return e.id===t.id}))}(e)?(0,P.jsxs)("div",{className:$,children:[(0,P.jsx)("img",{className:ee,src:e.delivery_urls.comp}),(0,P.jsx)("button",{className:re,onClick:function(){return function(e){t.addToSelected(e)}(e)},children:"Add"})]},r):(0,P.jsxs)("div",{className:$,children:[(0,P.jsx)("img",{className:te,src:e.delivery_urls.comp}),(0,P.jsx)("section",{className:ne,children:"Add"})]},r)};return(0,P.jsxs)("div",{className:B,children:[(0,P.jsxs)("div",{className:K,children:[(0,P.jsx)("div",{className:q,children:e("add_items_to_slideshow")}),(0,P.jsxs)("div",{className:X,children:[(0,P.jsx)("button",{className:J,children:(0,P.jsx)(F,{})}),(0,P.jsx)("input",{className:Q,value:o,onChange:s,onKeyDown:c})]})]}),(0,P.jsxs)("div",{className:W,children:[(0,P.jsx)("div",{className:Z,children:t.assets.length>0&&t.assets.map((function(e,t){return u(e,t)}))}),0===t.assets.length&&!t.loading&&(0,P.jsx)("div",{children:"Your search did not return any result."}),(0,P.jsxs)("section",{className:oe,children:[t.currentPage>1&&(0,P.jsx)("a",{href:"#embed-search-results",onClick:function(){t.performImageSearch(o,t.currentPage-1)},children:(0,P.jsx)(U,{className:ae})}),(0,P.jsxs)("span",{className:ie,children:["Page ",(0,P.jsx)("span",{children:t.currentPage})," of ",(0,P.jsx)("span",{children:t.totalPages})]}),t.currentPage<t.totalPages&&(0,P.jsx)("a",{href:"#embed-search-results",onClick:function(){t.performImageSearch(o,t.currentPage+1)},children:(0,P.jsx)(U,{className:se})})]})]})]})},ue="EmbedPreview-module__previewStrip____8wVu",le="EmbedPreview-module__emptyPreview___XuHpH",de="EmbedPreview-module__fullPreview___LwJlY",fe="EmbedPreview-module__hoverPreview___VHNo1",pe="EmbedPreview-module__draggedPreview___Wx9G3",he="EmbedPreview-module__previewImage___NecbI",me="EmbedPreview-module__closeIcon___EXKcz",ve="EmbedPreview-module__previewActions___TYWvS",_e="EmbedPreview-module__label___PrinK",ge="EmbedPreview-module__container___DH_UG",ye=function(){var e=C();return(0,P.jsx)("div",{className:ge,children:(0,P.jsx)(i.j1,{trusted:!0,children:e.legacySnippet})})},be=["styles"];function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},we.apply(this,arguments)}var xe=function(e){e.styles;var t=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,be);return o().createElement("svg",we({width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t),o().createElement("defs",null,o().createElement("path",{d:"M12.785.21L7.007 5.986 1.231.21A.71.71 0 00.227 1.212l5.78 5.78-5.78 5.78a.71.71 0 00.31 1.206.706.706 0 00.694-.203l5.778-5.78 5.78 5.78c.28.258.715.252.985-.019a.706.706 0 00.017-.985l-5.777-5.78 5.777-5.779A.71.71 0 0013.29 0a.71.71 0 00-.504.21z",id:"a"})),o().createElement("use",{xlinkHref:"#a",fillRule:"evenodd"}))},je=function(){var e=C(),t=(0,n.useState)(null),r=t[0],o=t[1],i=(0,n.useState)(null),a=i[0],s=i[1],c=function(){return e.selected.length>1},u=function(e){return r===e?pe:a===e?fe:de},l=function(t){return function(t){return!!e.selected[t]}(t)?(0,P.jsxs)("div",{className:u(t),onDragStart:function(){return function(e){o(e)}(t)},onDragEnd:function(){return o(null),void s(null)},onDragOver:function(e){return function(e,t){e.preventDefault(),s(t)}(e,t)},onDrop:function(){return function(t){r!=t&&t<e.selected.length&&(e.swapSelectedPositions(r,t),o(null),s(null))}(t)},children:[(0,P.jsx)("img",{className:he,draggable:e.selected.length>1,src:e.selected[t].delivery_urls.comp}),(0,P.jsx)(xe,{className:me,onClick:function(){return function(t){c()&&e.removeFromSelected(t)}(t)}})]},t):(0,P.jsx)("div",{className:le,draggable:!1},t)};return(0,P.jsx)("div",{className:ue,children:Array.from(Array(5)).map((function(e,t){return l(t)}))})},Ee=r(94184),Se=r.n(Ee),Oe=r(73114),Pe=function(){var e=(0,a.T_)(),t=C(),r=(0,Oe.Fg)().checkbox||{};return(0,P.jsxs)("div",{className:ve,children:[(0,P.jsx)("input",{className:Se()(r.checkboxInput),type:"checkbox",checked:t.showCaptions,onChange:function(){t.setShowCaptions(!t.showCaptions)}}),(0,P.jsx)("label",{className:_e,children:e("show_captions")})]})},Ne=function(){return(0,P.jsxs)("div",{children:[(0,P.jsx)(ye,{}),(0,P.jsx)(je,{}),(0,P.jsx)(Pe,{})]})},Le="EmbedModal-module__component___mHsRF",ke="EmbedModal-module__items___lRr0e",Ae="EmbedModal-module__header___VbCkV",Te="EmbedModal-module__headerBtn___lkbg4",Ce="EmbedModal-module__headerTitle___SE6vc",Ie="EmbedModal-module__footer___Os0kF",Me=function(e){var t=e.asset,r=e.visitorId,n=(0,a.T_)();return(0,P.jsx)(s.Modal,{modalClassName:Le,headerClassName:Ae,footerClassName:Ie,header:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("h1",{className:Ce,children:n("embed_modal_title")}),(0,P.jsx)("a",{href:"/resources/embed",className:"btn btn--hollow "+Te,children:n("learn_more_caps")})]}),footer:(0,P.jsx)(i.j1,{children:n("consent_to_getty",{links:[{href:"/company/terms",target:"_blank"}]})}),children:function(){return(0,P.jsxs)(T,{asset:t,visitorId:r,children:[(0,P.jsx)(R,{}),(0,P.jsxs)("div",{className:ke,children:[(0,P.jsx)(Ne,{}),(0,P.jsx)(ce,{})]})]})}})}},3382:function(e,t,r){r.d(t,{lq:function(){return f},Tg:function(){return h}});var n=r(84481),o=r.n(n),i={tooltip:"Tooltip-module__tooltip___bqzxX",left:"Tooltip-module__left___MfXaY","left-top":"Tooltip-module__left-top___sinIA","left-bottom":"Tooltip-module__left-bottom___NX2Lc",right:"Tooltip-module__right___iPLWf","right-top":"Tooltip-module__right-top___RjGsC","right-bottom":"Tooltip-module__right-bottom___iuGMN",top:"Tooltip-module__top___cTqJz","top-left":"Tooltip-module__top-left___UHxjQ","top-right":"Tooltip-module__top-right___ZQNep",bottom:"Tooltip-module__bottom___GqVN0","bottom-left":"Tooltip-module__bottom-left___ALGYY","bottom-right":"Tooltip-module__bottom-right___QndeS"},a=r(85893),s=function(e){var t=e.children,r=e.className,o=e.placement,s=e.name,c=e.trackViewed;return(0,n.useEffect)((function(){c()}),[]),(0,a.jsx)("div",{className:[i.tooltip,i[o],r].join(" "),role:"tooltip",id:s,children:t})};s.defaultProps={className:"",name:"info",placement:"left",trackViewed:function(){return null}};var c=["styles"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}var l=function(e){e.styles;var t=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,c);return o().createElement("svg",u({width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),o().createElement("path",{d:"M8 1.053L7.474.526 6.947 0 4 2.947 1.053 0 .526.526 0 1.053 2.947 4 0 6.947l.526.527.527.526L4 5.053 6.947 8l.527-.526L8 6.947 5.053 4 8 1.053z",fill:"#080808"}))},d="DismissibleTooltip-module__dismiss___qHfLU",f=function(e){var t=e.children,r=e.localStorageKey,o=e.isTooltipVisible,i=e.trackViewed,c=e.trackDismissed,u=e.className,f=e.placement,p=e.name,h=(0,n.useState)(!1),m=h[0],v=h[1];return(0,n.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem(r));!o||null!==e&&!1!==e.dismissed?v(!1):v(!0)}),[o]),m&&(0,a.jsxs)(s,{placement:f,name:p,className:u,trackViewed:i,children:[t,(0,a.jsx)("button",{className:d,type:"button",onClick:function(){var e;e={timestamp:new Date,dismissed:!0},window.localStorage.setItem(r,JSON.stringify(e)),v(!1),c()},"aria-label":"close",children:(0,a.jsx)(l,{})})]})};f.defaultProps={isTooltipVisible:!0,placement:"left",className:"",name:"info",trackViewed:function(){return null},trackDismissed:function(){return null}};var p="HoverableTooltip-module__trigger___xHKE7",h=function(e){var t=e.children,r=e.className,o=e.name,i=e.placement,c=e.trackViewed,u=e.trigger,l=(0,n.useState)(!1),d=l[0],f=l[1],h=(0,n.useState)(!1),m=h[0],v=h[1];return(0,a.jsxs)("div",{"data-testid":"hoverableTooltip",children:[(0,a.jsx)("div",{"data-testid":"hoverTrigger",className:p,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:u}),(d||m)&&(0,a.jsx)("div",{onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},children:(0,a.jsx)(s,{placement:i,name:o,className:r,trackViewed:c,children:t})})]})};h.defaultProps={className:"",name:"info",placement:"top",trackViewed:function(){return null}}}}]);
//# sourceMappingURL=9771-a7ee0d8b8d1fb3b9e93f.chunk.js.map