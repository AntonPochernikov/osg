(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{341:function(e,t,n){var r=n(351),i=n(363),o=n(364),u="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?a:u:c&&c in Object(e)?i(e):o(e)}},342:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},350:function(e,t,n){var r=n(359),i=n(372),o=n(376);e.exports=function(e){return o(e)?r(e):i(e)}},351:function(e,t,n){var r=n(352).Symbol;e.exports=r},352:function(e,t,n){var r=n(353),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},353:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(77))},354:function(e,t){var n=Array.isArray;e.exports=n},355:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},356:function(e,t){var n=9007199254740991;e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},357:function(e,t,n){var r=n(380);e.exports=function(e){var t=e.length;return t?e[r(0,t-1)]:void 0}},359:function(e,t,n){var r=n(360),i=n(361),o=n(354),u=n(365),a=n(367),c=n(368),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=o(e),f=!n&&i(e),s=!n&&!f&&u(e),b=!n&&!f&&!s&&c(e),d=n||f||s||b,h=d?r(e.length,String):[],p=h.length;for(var v in e)!t&&!l.call(e,v)||d&&("length"==v||s&&("offset"==v||"parent"==v)||b&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||a(v,p))||h.push(v);return h}},360:function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},361:function(e,t,n){var r=n(362),i=n(342),o=Object.prototype,u=o.hasOwnProperty,a=o.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return i(e)&&u.call(e,"callee")&&!a.call(e,"callee")};e.exports=c},362:function(e,t,n){var r=n(341),i=n(342),o="[object Arguments]";e.exports=function(e){return i(e)&&r(e)==o}},363:function(e,t,n){var r=n(351),i=Object.prototype,o=i.hasOwnProperty,u=i.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=u.call(e);return r&&(t?e[a]=n:delete e[a]),i}},364:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},365:function(e,t,n){(function(e){var r=n(352),i=n(366),o=t&&!t.nodeType&&t,u=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=u&&u.exports===o?r.Buffer:void 0,c=(a?a.isBuffer:void 0)||i;e.exports=c}).call(this,n(355)(e))},366:function(e,t){e.exports=function(){return!1}},367:function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var i=typeof e;return!!(t=null==t?n:t)&&("number"==i||"symbol"!=i&&r.test(e))&&e>-1&&e%1==0&&e<t}},368:function(e,t,n){var r=n(369),i=n(370),o=n(371),u=o&&o.isTypedArray,a=u?i(u):r;e.exports=a},369:function(e,t,n){var r=n(341),i=n(356),o=n(342),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,e.exports=function(e){return o(e)&&i(e.length)&&!!u[r(e)]}},370:function(e,t){e.exports=function(e){return function(t){return e(t)}}},371:function(e,t,n){(function(e){var r=n(353),i=t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,u=o&&o.exports===i&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||u&&u.binding&&u.binding("util")}catch(e){}}();e.exports=a}).call(this,n(355)(e))},372:function(e,t,n){var r=n(373),i=n(374),o=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return i(e);var t=[];for(var n in Object(e))o.call(e,n)&&"constructor"!=n&&t.push(n);return t}},373:function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},374:function(e,t,n){var r=n(375)(Object.keys,Object);e.exports=r},375:function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},376:function(e,t,n){var r=n(377),i=n(356);e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},377:function(e,t,n){var r=n(341),i=n(378),o="[object AsyncFunction]",u="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";e.exports=function(e){if(!i(e))return!1;var t=r(e);return t==u||t==a||t==o||t==c}},378:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},379:function(e,t,n){var r=n(357),i=n(381),o=n(354);e.exports=function(e){return(o(e)?r:i)(e)}},380:function(e,t){var n=Math.floor,r=Math.random;e.exports=function(e,t){return e+n(r()*(t-e+1))}},381:function(e,t,n){var r=n(357),i=n(382);e.exports=function(e){return r(i(e))}},382:function(e,t,n){var r=n(383),i=n(350);e.exports=function(e){return null==e?[]:r(e,i(e))}},383:function(e,t,n){var r=n(384);e.exports=function(e,t){return r(t,function(t){return e[t]})}},384:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}},393:function(e,t,n){"use strict";n.r(t);var r,i=n(34),o=n(340),u=n(15),a=n(78),c=n(146),l=n(11),f=a.a.board,s=f.cols,b=f.rows,d=Object(o.a)(((r={})[u.a.stopGame]=function(){return Object(c.b)(s,b)},r[u.a.startGame]=function(){return Object(c.b)(s,b)},r[u.a.collideFigure]=function(e,t){var n=t.payload.currentFigure.getCells();return e.map(function(e){return e.map(function(e){return n.find(function(t){return Object(l.d)(t,e)})||e})})},r[u.a.selectCompletedRow]=function(e,t){var n=t.payload.rowIndex,r=e.slice(0,n),i=e.slice(n+1);return[].concat(r,[Object(c.c)(s,n)],i)},r[u.a.removeCompletedRow]=function(e,t){var n=t.payload.rowIndex,r=e.slice(0,n).map(function(e){return e.map(function(e){return Object(l.f)(e)})}),i=e.slice(n+1);return[Object(c.a)(s,0)].concat(r,i)},r),Object(c.b)(s,b)),h=n(350),p=n.n(h),v=n(379),j=n.n(v);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O,m,w,y,z=function(e,t,n){return g({},n,{writable:!1})},x=function(){function e(e,t){void 0===e&&(e=Object(l.a)([0,0])),void 0===t&&(t="down"),this.head=e,this.direction=t}return e.prototype.getCells=function(){return[]},e}();var S,C,P,_,A=(y=w=function(e){var t,n;function r(){for(var t,n,r,i,o,u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n=t,r="type",i=m,o=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),i&&Object.defineProperty(n,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(o):void 0}),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getSize=function(){return r.alignment[this.direction].getSize()},i.getCells=function(){return r.alignment[this.direction].getCells(this.head)},i.rotate=function(){return r.alignment[this.direction].rotate(this.head)},i.setPosition=function(e,t){return new r(Object(l.a)([e,t],"filled"),this.direction)},i.move=function(e,t){var n=Object(l.b)(this.head),i=n[0],o=n[1];return new r(Object(l.a)([i+e,o+t],"filled"),this.direction)},i.moveDown=function(){return this.move(0,1)},i.moveLeft=function(){return this.move(-1,0)},i.moveRight=function(){return this.move(1,0)},r}(x),w.alignment={down:{direction:"down",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new A(e,"right")},getCells:function(e){for(var t=[],n=Object(l.b)(e),r=n[0],i=n[1],o=i;o<i+4;o+=1)t.push(Object(l.a)([r,o],"filled"));return t},getSize:function(){return{height:4,width:1}}},right:{direction:"right",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new A(e,"down")},getCells:function(e){for(var t=[],n=Object(l.b)(e),r=n[0],i=n[1],o=r-2;o<r+2;o+=1)t.push(Object(l.a)([o,i],"filled"));return t},getSize:function(){return{height:1,width:4}}}},m=function(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}((O=y).prototype,"type",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"I"}}),O);var R,H,F,E,k=(_=P=function(e){var t,n;function r(){for(var t,n,r,i,o,u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n=t,r="type",i=C,o=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),i&&Object.defineProperty(n,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(o):void 0}),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getSize=function(){return r.alignment[this.direction].getSize()},i.getCells=function(){return r.alignment[this.direction].getCells(this.head)},i.rotate=function(){return r.alignment[this.direction].rotate(this.head)},i.setPosition=function(e,t){return new r(Object(l.a)([e,t],"filled"),this.direction)},i.move=function(e,t){var n=Object(l.b)(this.head),i=n[0],o=n[1];return new r(Object(l.a)([i+e,o+t],"filled"),this.direction)},i.moveDown=function(){return this.move(0,1)},i.moveLeft=function(){return this.move(-1,0)},i.moveRight=function(){return this.move(1,0)},r}(x),P.alignment={down:{direction:"down",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new k(e,"left")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r+1,i+1],"filled")),t},getSize:function(){return{height:2,width:3}}},left:{direction:"left",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new k(e,"up")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r-1,i+2],"filled")),t.push(Object(l.a)([r,i],"filled")),t},getSize:function(){return{height:3,width:2}}},up:{direction:"up",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new k(e,"right")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r+1,i+1],"filled")),t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r+1,i],"filled")),t},getSize:function(){return{height:2,width:3}}},right:{direction:"right",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new k(e,"down")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r,i+2],"filled")),t.push(Object(l.a)([r-1,i+2],"filled")),t},getSize:function(){return{height:3,width:2}}}},C=function(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}((S=_).prototype,"type",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"J"}}),S);var D,G,L,T,I=(E=F=function(e){var t,n;function r(){for(var t,n,r,i,o,u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n=t,r="type",i=H,o=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),i&&Object.defineProperty(n,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(o):void 0}),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getSize=function(){return r.alignment[this.direction].getSize()},i.getCells=function(){return r.alignment[this.direction].getCells(this.head)},i.rotate=function(){return r.alignment[this.direction].rotate(this.head)},i.setPosition=function(e,t){return new r(Object(l.a)([e,t],"filled"),this.direction)},i.move=function(e,t){var n=Object(l.b)(this.head),i=n[0],o=n[1];return new r(Object(l.a)([i+e,o+t],"filled"),this.direction)},i.moveDown=function(){return this.move(0,1)},i.moveLeft=function(){return this.move(-1,0)},i.moveRight=function(){return this.move(1,0)},r}(x),F.alignment={down:{direction:"down",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new I(e,"left")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r+1,i],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r+1,i+1],"filled")),t},getSize:function(){return{height:2,width:3}}},left:{direction:"left",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new I(e,"up")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r-1,i+2],"filled")),t.push(Object(l.a)([r,i+2],"filled")),t},getSize:function(){return{height:3,width:2}}},up:{direction:"up",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new I(e,"right")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r+1,i],"filled")),t},getSize:function(){return{height:2,width:3}}},right:{direction:"right",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new I(e,"down")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r,i+2],"filled")),t.push(Object(l.a)([r-1,i],"filled")),t},getSize:function(){return{height:3,width:2}}}},H=function(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}((R=E).prototype,"type",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"L"}}),R);var U,B,M,J,N=(T=L=function(e){var t,n;function r(){for(var t,n,r,i,o,u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n=t,r="type",i=G,o=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),i&&Object.defineProperty(n,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(o):void 0}),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getSize=function(){return r.alignment[this.direction].getSize()},i.getCells=function(){return r.alignment[this.direction].getCells(this.head)},i.rotate=function(){return this},i.setPosition=function(e,t){return new r(Object(l.a)([e,t],"filled"),this.direction)},i.move=function(e,t){var n=Object(l.b)(this.head),i=n[0],o=n[1];return new r(Object(l.a)([i+e,o+t],"filled"),this.direction)},i.moveDown=function(){return this.move(0,1)},i.moveLeft=function(){return this.move(-1,0)},i.moveRight=function(){return this.move(1,0)},r}(x),L.alignment={normal:{direction:"normal",startHead:Object(l.a)([5,0],"filled"),getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t},getSize:function(){return{height:2,width:2}}}},G=function(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}((D=T).prototype,"type",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"O"}}),D);var q,V,W,Z,$=(J=M=function(e){var t,n;function r(){for(var t,n,r,i,o,u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n=t,r="type",i=B,o=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),i&&Object.defineProperty(n,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(o):void 0}),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getSize=function(){return r.alignment[this.direction].getSize()},i.getCells=function(){return r.alignment[this.direction].getCells(this.head)},i.rotate=function(){return r.alignment[this.direction].rotate(this.head)},i.setPosition=function(e,t){return new r(Object(l.a)([e,t],"filled"),this.direction)},i.move=function(e,t){var n=Object(l.b)(this.head),i=n[0],o=n[1];return new r(Object(l.a)([i+e,o+t],"filled"),this.direction)},i.moveDown=function(){return this.move(0,1)},i.moveLeft=function(){return this.move(-1,0)},i.moveRight=function(){return this.move(1,0)},r}(x),M.alignment={down:{direction:"down",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new $(e,"left")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r+1,i],"filled")),t},getSize:function(){return{height:2,width:3}}},left:{direction:"left",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new $(e,"down")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r,i+2],"filled")),t},getSize:function(){return{height:3,width:2}}}},B=function(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}((U=J).prototype,"type",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"S"}}),U);var K,Q,X,Y,ee=(Z=W=function(e){var t,n;function r(){for(var t,n,r,i,o,u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n=t,r="type",i=V,o=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),i&&Object.defineProperty(n,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(o):void 0}),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getSize=function(){return r.alignment[this.direction].getSize()},i.getCells=function(){return r.alignment[this.direction].getCells(this.head)},i.rotate=function(){return r.alignment[this.direction].rotate(this.head)},i.setPosition=function(e,t){return new r(Object(l.a)([e,t],"filled"),this.direction)},i.move=function(e,t){var n=Object(l.b)(this.head),i=n[0],o=n[1];return new r(Object(l.a)([i+e,o+t],"filled"),this.direction)},i.moveDown=function(){return this.move(0,1)},i.moveLeft=function(){return this.move(-1,0)},i.moveRight=function(){return this.move(1,0)},r}(x),W.alignment={down:{direction:"down",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new ee(e,"left")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r+1,i+1],"filled")),t},getSize:function(){return{height:2,width:3}}},left:{direction:"left",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new ee(e,"up")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r,i+2],"filled")),t.push(Object(l.a)([r+1,i+1],"filled")),t},getSize:function(){return{height:3,width:2}}},up:{direction:"up",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new ee(e,"right")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r+1,i],"filled")),t},getSize:function(){return{height:2,width:3}}},right:{direction:"right",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new ee(e,"down")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r,i+2],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t},getSize:function(){return{height:3,width:2}}}},V=function(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}((q=Z).prototype,"type",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"T"}}),q);var te,ne=(Y=X=function(e){var t,n;function r(){for(var t,n,r,i,o,u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a))||this,n=t,r="type",i=Q,o=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),i&&Object.defineProperty(n,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(o):void 0}),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getSize=function(){return r.alignment[this.direction].getSize()},i.getCells=function(){return r.alignment[this.direction].getCells(this.head)},i.rotate=function(){return r.alignment[this.direction].rotate(this.head)},i.setPosition=function(e,t){return new r(Object(l.a)([e,t],"filled"),this.direction)},i.move=function(e,t){var n=Object(l.b)(this.head),i=n[0],o=n[1];return new r(Object(l.a)([i+e,o+t],"filled"),this.direction)},i.moveDown=function(){return this.move(0,1)},i.moveLeft=function(){return this.move(-1,0)},i.moveRight=function(){return this.move(1,0)},r}(x),X.alignment={down:{direction:"down",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new ne(e,"left")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r-1,i],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r+1,i+1],"filled")),t},getSize:function(){return{height:2,width:3}}},left:{direction:"left",startHead:Object(l.a)([5,0],"filled"),rotate:function(e){return new ne(e,"down")},getCells:function(e){var t=[],n=Object(l.b)(e),r=n[0],i=n[1];return t.push(Object(l.a)([r,i],"filled")),t.push(Object(l.a)([r-1,i+1],"filled")),t.push(Object(l.a)([r,i+1],"filled")),t.push(Object(l.a)([r-1,i+2],"filled")),t},getSize:function(){return{height:3,width:2}}}},Q=function(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}((K=Y).prototype,"type",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"Z"}}),K),re=function(e){return function(){var t=function(e){return j()(p()(e.alignment))}(e);return new e(e.alignment[t].startHead,t)}},ie=[re(A),re(k),re(I),re(N),re($),re(ee),re(ne)],oe=function(){return j()(ie)()};function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ae,ce,le,fe={current:null,next:null},se=Object(o.a)(((te={})[u.a.setCurrentFigure]=function(e){return ue({},e,{current:e.next||oe()})},te[u.a.setNextFigure]=function(e){return ue({},e,{next:oe()})},te[u.a.collideFigure]=function(e){return ue({},e,{current:null})},te[u.a.moveFigureDown]=function(e){return ue({},e,{current:e.current.moveDown()})},te[u.a.moveFigureLeft]=function(e){return ue({},e,{current:e.current.moveLeft()})},te[u.a.moveFigureRight]=function(e){return ue({},e,{current:e.current.moveRight()})},te[u.a.rotateFigure]=function(e){return ue({},e,{current:e.current.rotate()})},te[u.a.fallFigureDown]=function(e){return ue({},e,{current:e.current.moveDown()})},te[u.a.stopGame]=function(){return fe},te),fe),be=a.a.speed,de=be.min,he=be.max,pe=be.init,ve=a.a.score,je=ve.collision,ge=ve.completedRow,Oe=Object(o.a)(((ae={})[u.a.startGame]=function(){return"started"},ae[u.a.stopGame]=function(){return"initial"},ae[u.a.finishGame]=function(){return"finished"},ae[u.a.pauseGame]=function(){return"paused"},ae[u.a.resumeGame]=function(){return"started"},ae),"initial"),me=Object(o.a)(((ce={})[u.a.increaseGameSpeed]=function(e){return e===he?e:e+1},ce[u.a.decreaseGameSpeed]=function(e){return e===de?e:e-1},ce),pe),we=Object(o.a)(((le={})[u.a.collideFigure]=function(e,t){var n=t.payload;return e+je*n.speed},le[u.a.removeCompletedRow]=function(e,t){var n=t.payload.modificator;return e+ge*n},le[u.a.startGame]=function(){return 0},le[u.a.stopGame]=function(){return 0},le),0);t.default=Object(i.c)({gameState:Oe,board:d,figure:se,speed:me,score:we})}}]);
//# sourceMappingURL=f97a6f22ea898df6a9a8.tetris-reducer.js.map