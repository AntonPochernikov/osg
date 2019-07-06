(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{71:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var c=n.apply(null,r);c&&e.push(c)}else if("object"===s)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var r=a(36),n=a(8),s=a(1),c=a.n(s),i=a(37),m=a(14),o=a(71),l=a.n(o),u=(a(74),function(e){var t=e.board,a=e.gameState;return c.a.createElement("div",{className:"game-board-container"},c.a.createElement("table",{className:"game-board"},c.a.createElement("tbody",{className:"game-board__body"},t.map(function(e,t){return c.a.createElement("tr",{className:"game-board__row",key:t},e.map(function(e,t){var a=l()("game-board__cell","game-board__cell--".concat(e));return c.a.createElement("td",{className:a,key:t})}))}))),"paused"===a&&c.a.createElement("div",{className:"game-board-container__paused-overlay"}))});u.defaultProps={board:[],gameState:"initial"};var d=u,g=Object(r.b)(function(e){return{board:m.a.getBoardCells(e),gameState:e.tetris.gameState}},n.a)(d),p=a(18);a(75);var f=function(e){var t=e.board;return c.a.createElement("div",{className:"tetris-game-stats__next-figure"},c.a.createElement("table",{className:"next-figure-board"},t.length>0&&c.a.createElement("caption",{className:"next-figure-board__caption"},"Next Figure"),c.a.createElement("tbody",{className:"next-figure-board__body"},t.map(function(e,t){return c.a.createElement("tr",{className:"next-figure-board__row",key:t},e.map(function(e,t){var a=l()("next-figure-board__cell","next-figure-board__cell--".concat(e));return c.a.createElement("td",{className:a,key:t})}))}))))},_=a(28),b=(a(76),_.a.speed),E=b.min,v=b.max,N=function(e){var t=e.speed,a=e.score,r=e.canAdjustSpeed,n=e.incSpeed,i=e.decSpeed,m=Object(s.useCallback)(function(){i()},[i]),o=Object(s.useCallback)(function(){n()},[n]);return c.a.createElement("div",{className:"tetris-game-stats__settings"},c.a.createElement("div",{className:"tetris-game-stats__speed"},r&&c.a.createElement("button",{className:"tetris-game-stats__speed-btn tetris-game-stats__speed-btn--dec",onClick:m,disabled:t===E}),c.a.createElement("p",{className:"tetris-game-stats__speed-value"},"Speed: ",t),r&&c.a.createElement("button",{className:"tetris-game-stats__speed-btn tetris-game-stats__speed-btn--inc",onClick:o,disabled:t===v})),c.a.createElement("div",{className:"tetris-game-stats__score"},c.a.createElement("p",{className:"tetris-game-stats__score-value"},"Score: ",a)))},S=(a(77),function(e){var t=e.score,a=e.speed,r=e.gameState,n=e.canAdjustSpeed,i=e.nextFigurePreview,m=function(e,t){if(null==e)return{};var a,r,n=Object(p.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(e,["score","speed","gameState","canAdjustSpeed","nextFigurePreview"]),o={initial:{title:"Start New Game",action:m.startGame},started:{title:"Stop Game",action:m.stopGame},paused:{title:"Stop Game",action:m.stopGame},finished:{title:"Start New Game",action:m.startGame}},l=Object(s.useCallback)(function(e){e.target.blur(),o[r].action()},[r,o]);return c.a.createElement("div",{className:"tetris-game-stats"},c.a.createElement("h2",{className:"tetris-game-stats__title"},"Game Stats"),c.a.createElement(f,{board:i}),c.a.createElement(N,{speed:a,score:t,incSpeed:m.increaseGameSpeed,decSpeed:m.decreaseGameSpeed,canAdjustSpeed:n}),c.a.createElement("button",{className:"tetris-game-stats__game-button",onClick:l},o[r].title))});S.defaultProps={gameState:"initial",speed:1,score:0,nextFigurePreview:[],canAdjustSpeed:!0};var w=S,y=Object(r.b)(function(e){return{gameState:e.tetris.gameState,speed:e.tetris.speed,score:e.tetris.score,nextFigurePreview:m.a.getNextFigurePreview(e),canAdjustSpeed:m.a.canAdjustSpeed(e)}},n.a)(w),k=(a(78),function(){return c.a.createElement("div",{className:"tetris-game-info"},c.a.createElement("h2",{className:"tetris-game-info__title"},"Game info"),c.a.createElement("div",{className:"tetris-game-info__paragraph"},c.a.createElement("span",null,"Use"),c.a.createElement("div",{className:"tetris-game-info__arrows","aria-label":"keyboard arrows"},c.a.createElement("kbd",{className:"tetris-game-info__arrow tetris-game-info__arrow--top"}),c.a.createElement("div",{className:"tetris-game-info__arrows-bottom-layout"},c.a.createElement("kbd",{className:"tetris-game-info__arrow tetris-game-info__arrow--left"}),c.a.createElement("kbd",{className:"tetris-game-info__arrow tetris-game-info__arrow--down"}),c.a.createElement("kbd",{className:"tetris-game-info__arrow tetris-game-info__arrow--right"}))),c.a.createElement("span",null,"to move figure")),c.a.createElement("div",{className:"tetris-game-info__paragraph"},c.a.createElement("span",{className:"tetris-game-info__phrase"},"Press"),c.a.createElement("kbd",{className:"tetris-game-info__key"},"[Space]"),c.a.createElement("span",{className:"tetris-game-info__phrase"},"to rotate figure")),c.a.createElement("div",{className:"tetris-game-info__paragraph"},c.a.createElement("span",{className:"tetris-game-info__phrase"},"Press"),c.a.createElement("kbd",{className:"tetris-game-info__key tetris-game-info__key--pause"},"[Shift]"),c.a.createElement("span",{className:"tetris-game-info__phrase"},"to pause/unpause game")))}),h=(a(79),function(e){var t=e.gameState,a=e.pauseGame,r=e.resumeGame,n=e.tryFigureLeft,m=e.tryFigureRight,o=e.tryFigureDown,l=e.tryRotateFigure,u=Object(s.useRef)(t);return u.current=t,Object(s.useEffect)(function(){var e=function(e){if("started"===u.current||"paused"===u.current)switch(e.keyCode){case 16:if("started"===u.current){a();break}"paused"===u.current&&r();break;case 37:"started"===u.current&&n();break;case 39:"started"===u.current&&m();break;case 40:"started"===u.current&&o();break;case 32:"started"===u.current&&l()}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),Object(s.useEffect)(function(){return function(){"started"===u.current&&a()}},[a]),c.a.createElement("div",{className:"main-container"},c.a.createElement(i.a,{title:"Tetris",canHome:!0}),c.a.createElement("main",{className:"game-body"},c.a.createElement(k,null),c.a.createElement(g,null),c.a.createElement(y,null)))});h.defaultProps={gamesState:"initial"};var j=h;t.default=Object(r.b)(function(e){return{gameState:e.tetris.gameState}},n.a)(j)}}]);
//# sourceMappingURL=tetris.c1372697.chunk.js.map