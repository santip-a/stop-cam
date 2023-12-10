/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";document.querySelector(".map");var t=document.querySelector(".parking"),e=document.querySelector(".transport"),r=document.querySelector(".roadside"),n=document.querySelector(".red"),o=document.querySelector(".pedestrian"),i=document.querySelector(".railway"),a=document.querySelector(".another");function c(t,e){return e.classList.remove("nav__batton_active"),e.removeAttribute("disabled"),t.classList.add("nav__batton_active"),t.setAttribute("disabled",""),t}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function p(){}function d(){}function v(){}var y={};c(y,o,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(_([])));w&&w!==e&&r.call(w,o)&&(y=w);var g=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==u(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=v,c(g,"constructor",v),c(v,"constructor",d),d.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))}}function h(t,e){return p.apply(this,arguments)}function p(){return(p=l(s().mark((function t(e,r){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new ymaps.Placemark([55.16,37.14],{hintContent:"Содержимое всплывающей подсказки",balloonContent:"Содержимое балуна"}),t.next=3,e.geoObjects.add(n);case 3:return t.next=5,e.geoObjects.remove(r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}document.querySelector(".selesct"),ymaps.ready((function(){var u=new ymaps.Map("map",{center:[55.752497,37.620896],zoom:11,controls:[]},{autoFitToViewport:"always",suppressMapOpenBlock:!0}),f=n,p=new ymaps.Placemark([55.76,37.64],{hintContent:"Содержимое всплывающей подсказки",balloonContent:"Содержимое балуна"});u.geoObjects.add(p),t.addEventListener("click",function(){var e=l(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f=c(t,f);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.addEventListener("click",function(){var t=l(s().mark((function t(r){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f=c(e,f),t.next=3,h(u,p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.addEventListener("click",function(){var t=l(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f=c(r,f),t.next=3,h(u,p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.addEventListener("click",function(){var t=l(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f=c(n,f),t.next=3,h(u,p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o.addEventListener("click",function(){var t=l(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f=c(o,f),t.next=3,h(u,p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.addEventListener("click",function(){var t=l(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f=c(i,f),t.next=3,h(u,p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a.addEventListener("click",function(){var t=l(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f=c(a,f),t.next=3,h(u,p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))})();