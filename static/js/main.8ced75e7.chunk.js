(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{14:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getBoard",function(){return b}),n.d(r,"getCurrentFigure",function(){return l}),n.d(r,"getNextFigure",function(){return O}),n.d(r,"getSpeed",function(){return E}),n.d(r,"getGameState",function(){return d}),n.d(r,"getBoardCells",function(){return j}),n.d(r,"getNextFigurePreview",function(){return R}),n.d(r,"getCompletedRows",function(){return T}),n.d(r,"getFallInterval",function(){return g}),n.d(r,"isGameStarted",function(){return v}),n.d(r,"canAdjustSpeed",function(){return x}),n.d(r,"canFigureMoveDown",function(){return S}),n.d(r,"canFigureMoveLeft",function(){return h}),n.d(r,"canFigureMoveRight",function(){return I}),n.d(r,"canFigureRotate",function(){return w});var c=n(11),a=n(41),u=n(16),i=n(40),o=n(7),s=function e(t,n){return n>1?function(e,t){return function(){return t(e.apply(void 0,arguments))}}(t,e(t,n-1)):t},f=n(28),b=function(e){return e.tetris.board},l=function(e){return e.tetris.figure.current},O=function(e){return e.tetris.figure.next},E=function(e){return e.tetris.speed},d=function(e){return e.tetris.gameState},j=Object(u.a)(b,l,function(e,t){if(t){var n=t.getCells();return e.map(function(e){return e.map(function(e){var t=n.find(function(t){return Object(o.d)(t,e)});return t?Object(o.c)(t):Object(o.c)(e)})})}return e.map(function(e){return e.map(function(e){return Object(o.c)(e)})})}),R=Object(u.a)(O,function(e){if(!e)return[];var t=e.getSize(),n=t.height,r=t.width+2,c=n+2,a=Object(i.b)(r,c),u=e.setPosition(Math.floor(r/2),1).getCells();return a.map(function(e){return e.map(function(e){var t=u.find(function(t){return Object(o.d)(t,e)});return t?Object(o.c)(t):Object(o.c)(e)})})}),T=Object(u.a)(b,function(e){return e.reduce(function(e,t,n){return t.every(function(e){return Object(o.e)(e)})?[].concat(Object(a.a)(e),[n]):e},[])}),p=f.a.speed.modificator,m=f.a.interval,g=Object(u.a)(E,function(e){return s(function(e){return p*e},e-1)(m)}),v=Object(u.a)(d,function(e){return"started"===e}),x=Object(u.a)(d,function(e){return"initial"===e||"finished"===e}),S=Object(u.a)(b,l,function(e,t){return t&&t.getCells().every(function(t){var n=Object(o.b)(t),r=Object(c.a)(n,2),a=r[0],u=r[1];return u!==e.length-1&&!Object(o.e)(e[u+1][a])})}),h=Object(u.a)(b,l,function(e,t){return t&&t.getCells().every(function(t){var n=Object(o.b)(t),r=Object(c.a)(n,2),a=r[0],u=r[1];return 0!==a&&!Object(o.e)(e[u][a-1])})}),I=Object(u.a)(b,l,function(e,t){return t&&t.getCells().every(function(t){var n=Object(o.b)(t),r=Object(c.a)(n,2),a=r[0],u=r[1];return a!==e[u].length-1&&!Object(o.e)(e[u][a+1])})}),w=Object(u.a)(b,l,function(e,t){return t&&t.rotate().getCells().every(function(t){var n=Object(o.b)(t),r=Object(c.a)(n,2),a=r[0],u=r[1];return!(u<0||u>e.length-1)&&(!(a<0||a>e[u].length-1)&&!Object(o.e)(e[u][a]))})});n.d(t,"a",function(){return r})},28:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={speed:{min:1,init:4,max:10,modificator:.7},interval:1e3,score:{collision:1,completedRow:5},board:{cols:10,rows:20}}},37:function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(26),u=(n(58),function(e){var t=e.title,n=e.canHome;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-content"},c.a.createElement("h1",{className:"main-logo"},t),n&&c.a.createElement(a.b,{to:"/home",className:"header__nav-link header__nav-link--home"},"Home")))});u.defaultProps={title:"",canHome:!1},t.a=u},40:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return u});var r=n(7),c=function(e,t){for(var n=[],c=0;c<e;c+=1)n.push(Object(r.a)([c,t],"empty"));return n},a=function(e,t){for(var n=[],c=0;c<e;c+=1)n.push(Object(r.a)([c,t],"indeterminate"));return n},u=function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(c(e,r));return n}},45:function(e,t,n){e.exports=n(61)},50:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(23),u=n.n(a),i=(n(50),n(36)),o=n(39),s=n(17),f=n(44),b=n(62),l=Object(b.a)({},{name:"Mystery Stranger"}),O=n(5),E=n.n(O),d=n(2),j=n(8),R=E.a.mark(m),T=E.a.mark(g),p=function(){return null};function m(e,t){var n;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(d.b)(p,e,t);case 3:return n=r.sent,r.next=6,Object(d.f)(j.b.loginSuccess(n));case 6:return r.next=8,Object(d.b)(p,{token:n});case 8:return r.abrupt("return",n);case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(d.f)(j.b.loginFailure(r.t0));case 15:return r.abrupt("return",r.t0);case 16:return r.prev=16,r.next=19,Object(d.d)();case 19:if(!r.sent){r.next=21;break}Object(d.f)(j.b.loginCancel());case 21:return r.finish(16);case 22:case"end":return r.stop()}},R,null,[[0,11,16,22]])}function g(){var e,t,n,r,c;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(d.i)("USER/LOGIN/REQUEST");case 3:return e=a.sent,t=e.user,n=e.password,a.next=8,Object(d.e)(m,t,n);case 8:return r=a.sent,a.next=11,Object(d.i)(["USER/LOGOUT","USER/LOGIN/FAILURE"]);case 11:if(c=a.sent,"USER/LOGOUT"!==c.type){a.next=16;break}return a.next=16,Object(d.c)(r);case 16:return a.next=18,Object(d.b)(p,"token");case 18:a.next=0;break;case 20:case"end":return a.stop()}},T)}var v=n(14),x=function(e){return new Promise(function(t){setTimeout(t,e)})},S=E.a.mark(A),h=E.a.mark(C),I=E.a.mark(y),w=E.a.mark(L),F=E.a.mark(N),G=E.a.mark(D),U=E.a.mark(P),k=E.a.mark(_),M=E.a.mark(H);function A(e){var t;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.f)(j.a.selectCompletedRow({rowIndex:e}));case 2:return n.next=4,Object(d.g)({pause:Object(d.i)("TETRIS/GAME/PAUSE"),delay:Object(d.b)(x,200)});case 4:if(t=n.sent,!t.pause){n.next=9;break}return n.next=9,Object(d.i)("TETRIS/GAME/RESUME");case 9:case"end":return n.stop()}},S)}function C(e,t){var n,r;return E.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.h)(v.a.getSpeed);case 2:return n=c.sent,c.next=5,Object(d.f)(j.a.removeCompletedRow({rowIndex:e,modificator:t*n}));case 5:return c.next=7,Object(d.g)({pause:Object(d.i)("TETRIS/GAME/PAUSE"),delay:Object(d.b)(x,100)});case 7:if(r=c.sent,!r.pause){c.next=12;break}return c.next=12,Object(d.i)("TETRIS/GAME/RESUME");case 12:case"end":return c.stop()}},h)}function y(e){var t;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=0;case 1:if(!(t<e.length)){n.next=9;break}return n.next=4,Object(d.b)(A,e[t]);case 4:return n.next=6,Object(d.b)(C,e[t],e.length);case 6:t+=1,n.next=1;break;case 9:case"end":return n.stop()}},I)}function L(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.h)(v.a.canFigureMoveLeft);case 2:if(!e.sent){e.next=5;break}return e.next=5,Object(d.f)(j.a.moveFigureLeft());case 5:case"end":return e.stop()}},w)}function N(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.h)(v.a.canFigureMoveRight);case 2:if(!e.sent){e.next=5;break}return e.next=5,Object(d.f)(j.a.moveFigureRight());case 5:case"end":return e.stop()}},F)}function D(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.h)(v.a.canFigureRotate);case 2:if(!e.sent){e.next=5;break}return e.next=5,Object(d.f)(j.a.rotateFigure());case 5:case"end":return e.stop()}},G)}function P(){var e,t,n,r;return E.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.j)("TETRIS/FIGURE/TRY/LEFT",L);case 2:return c.next=4,Object(d.j)("TETRIS/FIGURE/TRY/RIGHT",N);case 4:return c.next=6,Object(d.j)("TETRIS/FIGURE/TRY/ROTATE",D);case 6:return c.prev=7,c.next=10,Object(d.h)(v.a.getFallInterval);case 10:return e=c.sent,c.next=13,Object(d.g)({delay:Object(d.b)(x,e),pause:Object(d.i)("TETRIS/GAME/PAUSE"),moveDown:Object(d.i)("TETRIS/FIGURE/TRY/DOWN")});case 13:if(t=c.sent,!t.pause){c.next=18;break}return c.next=18,Object(d.i)("TETRIS/GAME/RESUME");case 18:return c.next=20,Object(d.h)(v.a.canFigureMoveDown);case 20:if(c.sent){c.next=29;break}return c.next=23,Object(d.h)(v.a.getCurrentFigure);case 23:return n=c.sent,c.next=26,Object(d.h)(v.a.getSpeed);case 26:return r=c.sent,c.next=29,Object(d.f)(j.a.collideFigure({currentFigure:n,speed:r}));case 29:return c.next=31,Object(d.f)(j.a.fallFigureDown());case 31:c.next=38;break;case 33:return c.prev=33,c.t0=c.catch(7),console.log(c.t0),c.next=38,Object(d.f)(j.a.finishGame());case 38:c.next=6;break;case 40:case"end":return c.stop()}},U,null,[[7,33]])}function _(){var e;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(d.f)(j.a.setCurrentFigure());case 3:return t.next=5,Object(d.f)(j.a.setNextFigure());case 5:return t.next=7,Object(d.h)(v.a.canFigureMoveDown);case 7:if(t.sent){t.next=10;break}return t.next=10,Object(d.f)(j.a.finishGame());case 10:return t.next=12,Object(d.g)({fall:Object(d.b)(P),collision:Object(d.i)("TETRIS/FIGURE/COLLIDE")});case 12:return t.next=14,Object(d.h)(v.a.getCompletedRows);case 14:return e=t.sent,t.next=17,Object(d.b)(y,e);case 17:t.next=0;break;case 19:case"end":return t.stop()}},k)}function H(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(d.i)("TETRIS/GAME/START");case 3:return e.next=5,Object(d.g)({figures:Object(d.b)(_),stop:Object(d.i)("TETRIS/GAME/STOP"),finish:Object(d.i)("TETRIS/GAME/FINISH")});case 5:e.next=0;break;case 7:case"end":return e.stop()}},M)}var W=E.a.mark(Y);function Y(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)([g(),H()]);case 2:case"end":return e.stop()}},W)}var V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,B=Object(f.a)(),z={user:l},J=function(e){return Object(s.c)(Object(o.a)({},z,e))},X=Object(s.e)(J(),V(Object(s.a)(B)));X.asyncReducers={},X.inject=function(e,t){X.asyncReducers[e]=t,X.replaceReducer(J(X.asyncReducers))},B.run(Y);var Q=X,q=(n(56),n(19)),$=n(26),K=(n(57),n(37)),Z=(n(60),function(){return c.a.createElement("div",{className:"progress-bar-container"},c.a.createElement("div",{className:"progress-bar"},c.a.createElement("div",{className:"progress-bar__indicator"})))}),ee=function(){return[c.a.createElement(K.a,{key:"header",title:"Loading..."}),c.a.createElement(Z,{key:"progress"})]},te=n(11),ne=n(33),re=c.a.lazy(Object(ne.a)(E.a.mark(function e(){var t,r,c,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([n.e(6),n.e(4)]).then(n.bind(null,82)),n.e(3).then(n.bind(null,83)),x(1e3)]);case 2:return t=e.sent,r=Object(te.a)(t,2),c=r[0].default,a=r[1],Q.inject("tetris",c),e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}))),ce=c.a.lazy(Object(ne.a)(E.a.mark(function e(){var t,r,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0).then(n.bind(null,81)),x(1e3)]);case 2:return t=e.sent,r=Object(te.a)(t,1),c=r[0],e.abrupt("return",c);case 6:case"end":return e.stop()}},e)}))),ae=function(){return c.a.createElement(q.a,{to:"/home"})},ue=function(){return c.a.createElement(re,null)},ie=function(){return c.a.createElement(ce,null)},oe=function(){return c.a.createElement($.a,{basename:"/osg"},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(ee,null)},c.a.createElement(q.d,null,c.a.createElement(q.b,{path:"/tetris",render:ue}),c.a.createElement(q.b,{path:"/home",render:ie}),c.a.createElement(q.b,{render:ae}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(function(){return c.a.createElement(i.a,{store:Q},c.a.createElement(oe,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return b}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return O}),n.d(t,"f",function(){return E});var r=n(11),c=function(e){if(!function(e){return"object"===typeof e&&e.isCell}(e)){var t="object"===typeof e?JSON.stringify(e,null,2):String(e);throw new Error("Argument must be cell, but it was '".concat(t,"'"))}},a=function(e){return c(e),e.coordinates},u=function(e){return a(e)[0]},i=function(e){return a(e)[1]},o=function(e){return c(e),e.state},s=function(e){return c(e),e.color},f=function(e){return c(e),e.content},b=function(e){var t=Object(r.a)(e,2);return{coordinates:[t[0],t[1]],state:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"empty",color:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"black",content:arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,isCell:!0}},l=function(e){return"filled"===o(e)},O=function(e,t){!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){c(e)})}(e,t);var n=a(e),u=Object(r.a)(n,2),i=u[0],o=u[1],s=a(t),f=Object(r.a)(s,2),b=f[0],l=f[1];return i===b&&o===l},E=function(e){return c(e),b([u(e),i(e)+1],o(e),s(e),f(e))}},8:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"startGame",function(){return u}),n.d(r,"stopGame",function(){return i}),n.d(r,"pauseGame",function(){return o}),n.d(r,"resumeGame",function(){return s}),n.d(r,"finishGame",function(){return f}),n.d(r,"increaseGameSpeed",function(){return b}),n.d(r,"decreaseGameSpeed",function(){return l}),n.d(r,"selectCompletedRow",function(){return O}),n.d(r,"removeCompletedRow",function(){return E}),n.d(r,"setCurrentFigure",function(){return d}),n.d(r,"setNextFigure",function(){return j}),n.d(r,"fallFigureDown",function(){return R}),n.d(r,"collideFigure",function(){return T}),n.d(r,"tryFigureDown",function(){return p}),n.d(r,"moveFigureDown",function(){return m}),n.d(r,"tryFigureLeft",function(){return g}),n.d(r,"moveFigureLeft",function(){return v}),n.d(r,"tryFigureRight",function(){return x}),n.d(r,"moveFigureRight",function(){return S}),n.d(r,"tryRotateFigure",function(){return h}),n.d(r,"rotateFigure",function(){return I});var c={};n.r(c),n.d(c,"loginRequest",function(){return w}),n.d(c,"loginSuccess",function(){return F}),n.d(c,"loginFailure",function(){return G}),n.d(c,"loginCancel",function(){return U}),n.d(c,"logout",function(){return k});var a=n(63),u=Object(a.a)("TETRIS/GAME/START"),i=Object(a.a)("TETRIS/GAME/STOP"),o=Object(a.a)("TETRIS/GAME/PAUSE"),s=Object(a.a)("TETRIS/GAME/RESUME"),f=Object(a.a)("TETRIS/GAME/FINISH"),b=Object(a.a)("TETRIS/GAME/SPEED/INCREASE"),l=Object(a.a)("TETRIS/GAME/SPEED/DECREASE"),O=Object(a.a)("TETRIS/ROW/COMPLETED/SELECT"),E=Object(a.a)("TETRIS/ROW/COMPLETED/REMOVE"),d=Object(a.a)("TETRIS/FIGURE/CURRENT/SET"),j=Object(a.a)("TETRIS/FIGURE/NEXT/SET"),R=Object(a.a)("TETRIS/FIGURE/FALL/DOWN"),T=Object(a.a)("TETRIS/FIGURE/COLLIDE"),p=Object(a.a)("TETRIS/FIGURE/TRY/DOWN"),m=Object(a.a)("TETRIS/FIGURE/MOVE/DOWN"),g=Object(a.a)("TETRIS/FIGURE/TRY/LEFT"),v=Object(a.a)("TETRIS/FIGURE/MOVE/LEFT"),x=Object(a.a)("TETRIS/FIGURE/TRY/RIGHT"),S=Object(a.a)("TETRIS/FIGURE/MOVE/RIGHT"),h=Object(a.a)("TETRIS/FIGURE/TRY/ROTATE"),I=Object(a.a)("TETRIS/FIGURE/ROTATE"),w=Object(a.a)("USER/LOGIN/REQUEST"),F=Object(a.a)("USER/LOGIN/SUCCESS"),G=Object(a.a)("USER/LOGIN/FAILURE"),U=Object(a.a)("USER/LOGIN/CANCEL"),k=Object(a.a)("USER/LOGOUT");n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c})}},[[45,2,5]]]);
//# sourceMappingURL=main.8ced75e7.chunk.js.map