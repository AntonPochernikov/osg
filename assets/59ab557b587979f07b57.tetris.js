(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{100:function(e,t,r){var a=r(58);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},n=r(15)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(58,function(){var t=r(58);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)}),e.hot.dispose(function(){n()})},101:function(e,t,r){var a=r(59);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},n=r(15)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(59,function(){var t=r(59);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)}),e.hot.dispose(function(){n()})},102:function(e,t,r){var a=r(60);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},n=r(15)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(60,function(){var t=r(60);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)}),e.hot.dispose(function(){n()})},106:function(e,t,r){"use strict";r.r(t);var a=r(26),o=r(5),n=r(1),i=r.n(n),s=r(0),l=r.n(s),c=r(28),d=r(7),p=r(70),u=r.n(p),m=(r(97),function(e){var t=e.board,r=e.gameState;return i.a.createElement("div",{className:"game-board-container"},i.a.createElement("table",{className:"game-board"},i.a.createElement("tbody",{className:"game-board__body"},t.map(function(e,t){return i.a.createElement("tr",{className:"game-board__row",key:t},e.map(function(e,t){var r=u()("game-board__cell","game-board__cell--"+e);return i.a.createElement("td",{className:r,key:t})}))}))),"paused"===r&&i.a.createElement("div",{className:"game-board-container__paused-overlay"}))});m.defaultProps={board:[],gameState:"initial"},m.propTypes={board:l.a.arrayOf(l.a.array).isRequired,gameState:l.a.oneOf(["initial","started","paused","finished"]).isRequired};var g=m,f=Object(a.b)(function(e){return{board:d.a.getBoardCells(e),gameState:e.tetris.gameState}},o.a)(g),b=(r(98),function(e){var t=e.board;return i.a.createElement("div",{className:"tetris-game-stats__next-figure"},i.a.createElement("table",{className:"next-figure-board"},t.length>0&&i.a.createElement("caption",{className:"next-figure-board__caption"},"Next Figure"),i.a.createElement("tbody",{className:"next-figure-board__body"},t.map(function(e,t){return i.a.createElement("tr",{className:"next-figure-board__row",key:t},e.map(function(e,t){var r=u()("next-figure-board__cell","next-figure-board__cell--"+e);return i.a.createElement("td",{className:r,key:t})}))}))))}),_=r(17),x=(r(99),_.a.speed),v=x.min,h=x.max,k=function(e){var t=e.speed,r=e.score,a=e.canAdjustSpeed,o=e.incSpeed,s=e.decSpeed,l=Object(n.useCallback)(function(){s()},[s]),c=Object(n.useCallback)(function(){o()},[o]);return i.a.createElement("div",{className:"tetris-game-stats__settings"},i.a.createElement("div",{className:"tetris-game-stats__speed"},a&&i.a.createElement("button",{className:"tetris-game-stats__speed-btn tetris-game-stats__speed-btn--dec",onClick:l,disabled:t===v}),i.a.createElement("p",{className:"tetris-game-stats__speed-value"},"Speed: ",t),a&&i.a.createElement("button",{className:"tetris-game-stats__speed-btn tetris-game-stats__speed-btn--inc",onClick:c,disabled:t===h})),i.a.createElement("div",{className:"tetris-game-stats__score"},i.a.createElement("p",{className:"tetris-game-stats__score-value"},"Score: ",r)))};r(100);var w=function(e){var t=e.score,r=e.speed,a=e.gameState,o=e.canAdjustSpeed,s=e.nextFigurePreview,l=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["score","speed","gameState","canAdjustSpeed","nextFigurePreview"]),c={initial:{title:"Start New Game",action:l.startGame},started:{title:"Stop Game",action:l.stopGame},paused:{title:"Stop Game",action:l.stopGame},finished:{title:"Start New Game",action:l.startGame}},d=Object(n.useCallback)(function(e){e.target.blur(),c[a].action()},[a]);return i.a.createElement("div",{className:"tetris-game-stats"},i.a.createElement("h2",{className:"tetris-game-stats__title"},"Game Stats"),i.a.createElement(b,{board:s}),i.a.createElement(k,{speed:r,score:t,incSpeed:l.increaseGameSpeed,decSpeed:l.decreaseGameSpeed,canAdjustSpeed:o}),i.a.createElement("button",{className:"tetris-game-stats__game-button",onClick:d},c[a].title))};w.propTypes={gameState:l.a.oneOf(["initial","started","paused","finished"]).isRequired,speed:l.a.number.isRequired,score:l.a.number.isRequired,nextFigurePreview:l.a.array.isRequired,canAdjustSpeed:l.a.bool.isRequired},w.defaultProps={gameState:"initial",speed:1,score:0,nextFigurePreview:[],canAdjustSpeed:!0};var y=w,E=Object(a.b)(function(e){return{gameState:e.tetris.gameState,speed:e.tetris.speed,score:e.tetris.score,nextFigurePreview:d.a.getNextFigurePreview(e),canAdjustSpeed:d.a.canAdjustSpeed(e)}},o.a)(y),S=(r(101),function(){return i.a.createElement("div",{className:"tetris-game-info"},i.a.createElement("h2",{className:"tetris-game-info__title"},"Game info"),i.a.createElement("div",{className:"tetris-game-info__paragraph"},i.a.createElement("span",null,"Use"),i.a.createElement("div",{className:"tetris-game-info__arrows","aria-label":"keyboard arrows"},i.a.createElement("kbd",{className:"tetris-game-info__arrow tetris-game-info__arrow--top"}),i.a.createElement("div",{className:"tetris-game-info__arrows-bottom-layout"},i.a.createElement("kbd",{className:"tetris-game-info__arrow tetris-game-info__arrow--left"}),i.a.createElement("kbd",{className:"tetris-game-info__arrow tetris-game-info__arrow--down"}),i.a.createElement("kbd",{className:"tetris-game-info__arrow tetris-game-info__arrow--right"}))),i.a.createElement("span",null,"to move figure")),i.a.createElement("div",{className:"tetris-game-info__paragraph"},i.a.createElement("span",{className:"tetris-game-info__phrase"},"Press"),i.a.createElement("kbd",{className:"tetris-game-info__key"},"[Space]"),i.a.createElement("span",{className:"tetris-game-info__phrase"},"to rotate figure")),i.a.createElement("div",{className:"tetris-game-info__paragraph"},i.a.createElement("span",{className:"tetris-game-info__phrase"},"Press"),i.a.createElement("kbd",{className:"tetris-game-info__key tetris-game-info__key--pause"},"[Shift]"),i.a.createElement("span",{className:"tetris-game-info__phrase"},"to pause/unpause game")))});r(102);var N=function(e){var t=e.gameState,r=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["gameState"]),a=function(e){if("started"===t||"paused"===t)switch(e.keyCode){case 16:if("started"===t){r.pauseGame();break}"paused"===t&&r.resumeGame();break;case 37:"started"===t&&r.tryFigureLeft();break;case 39:"started"===t&&r.tryFigureRight();break;case 40:"started"===t&&r.tryFigureDown();break;case 32:"started"===t&&r.tryRotateFigure()}};return Object(n.useEffect)(function(){return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}),i.a.createElement("div",{className:"main-container"},i.a.createElement(c.a,{title:"Tetris",canHome:!0}),i.a.createElement("main",{className:"game-body"},i.a.createElement(S,null),i.a.createElement(f,null),i.a.createElement(E,null)))};N.propTypes={gameState:l.a.oneOf(["initial","started","paused","finished"]).isRequired},N.defaultProps={gamesState:"initial"};var j=N;t.default=Object(a.b)(function(e){return{gameState:e.tetris.gameState}},o.a)(j)},55:function(e,t,r){(e.exports=r(14)(!1)).push([e.i,'.game-board-container{position:relative}.game-board-container__paused-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.2);border-radius:2px;-webkit-animation:fade-in .2s ease;animation:fade-in .2s ease}.game-board{border:none;border-radius:2px}.game-board__cell{position:relative;width:22px;height:22px;box-sizing:border-box;border:2px solid var(--color-inactive);border-radius:2px}.game-board__cell--filled{border:2px solid var(--color-neutral--dark)}.game-board__cell--filled:before{content:"";position:absolute;top:4px;left:4px;display:block;width:10px;height:10px;box-sizing:border-box;background-color:var(--color-yellow);border-radius:2px}.game-board__cell--indeterminate{border:2px solid var(--color-inactive)}.game-board__cell--indeterminate:before{content:"";position:absolute;top:4px;left:4px;display:block;width:10px;height:10px;box-sizing:border-box;background-color:var(--color-neutral);border-radius:2px;-webkit-animation:cell-blick .2s;animation:cell-blick .2s}@-webkit-keyframes cell-blick{0%{background-color:var(--color-neutral)}33%{background-color:var(--color-neutral--light)}66%{background-color:var(--color-neutral)}to{background-color:var(--color-neutral--light)}}@keyframes cell-blick{0%{background-color:var(--color-neutral)}33%{background-color:var(--color-neutral--light)}66%{background-color:var(--color-neutral)}to{background-color:var(--color-neutral--light)}}',""])},56:function(e,t,r){(e.exports=r(14)(!1)).push([e.i,'.next-figure-board{border:none;border-radius:2px}.next-figure-board__cell{position:relative;width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-radius:2px}.next-figure-board__cell--filled{border:2px solid var(--color-neutral--dark)}.next-figure-board__cell--filled:before{content:"";position:absolute;top:3px;left:3px;display:block;width:8px;height:8px;box-sizing:border-box;background-color:var(--color-yellow);border-radius:2px}',""])},57:function(e,t,r){(e.exports=r(14)(!1)).push([e.i,'.tetris-game-stats__settings{margin-bottom:40px}.tetris-game-stats__score,.tetris-game-stats__speed{display:flex;align-items:center;justify-content:space-around;margin-bottom:20px}.tetris-game-stats__score-value,.tetris-game-stats__speed-value{padding:0;margin:0;color:var(--color-neutral);line-height:26px;text-align:center}.tetris-game-stats__speed-btn{position:relative;display:block;width:26px;height:26px;box-sizing:border-box;margin:0 6px;background-color:var(--color-neutral);border:none;border:2px solid var(--color-neutral--lighten);border-radius:50%;cursor:pointer}.tetris-game-stats__speed-btn:hover{background-color:var(--color-neutral--dark)}.tetris-game-stats__speed-btn:focus{outline:none;border:2px solid var(--color-orange);box-shadow:0 0 5px -1px var(--color-neutral--darkest)}.tetris-game-stats__speed-btn:active{border-color:var(--color-neutral);background-color:var(--color-neutral--dark)}.tetris-game-stats__speed-btn--inc:before{content:"";position:absolute;top:6px;left:10px;display:block;width:2px;height:10px;background-color:var(--color-orange--lighten)}.tetris-game-stats__speed-btn--dec:after,.tetris-game-stats__speed-btn--inc:after{content:"";position:absolute;top:10px;left:6px;display:block;width:10px;height:2px;background-color:var(--color-orange--light)}.tetris-game-stats__speed-btn[disabled]{opacity:.6;cursor:default}.tetris-game-stats__speed-btn[disabled]:hover{background-color:var(--color-neutral)}',""])},58:function(e,t,r){(e.exports=r(14)(!1)).push([e.i,'.tetris-game-stats{display:flex;flex-direction:column;align-items:center;width:200px}.tetris-game-stats__title{padding:0;margin:0 0 40px;color:var(--color-neutral--dark)}.tetris-game-stats__next-figure{height:160px;margin-bottom:40px}.tetris-game-stats__game-button{flex-shrink:0;margin-bottom:40px;padding:10px 30px;color:var(--color-yellow--light);font-weight:700;text-transform:uppercase;background-color:var(--color-neutral);border:none;border-radius:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:color .1s ease,background-color .1s ease}.tetris-game-stats__game-button:hover{color:var(--color-success);background-color:var(--color-neutral--dark)}.tetris-game-stats__game-button:active{color:var(--color-success--darken);background-color:var(--color-main--darkest)}.tetris-game-stats__game-button:focus{outline:none;text-decoration:underline}.tetris-game-stats__paused-sign{flex-shrink:0;position:relative;display:block;width:44px;height:44px;font-size:0;background-color:var(--color-yellow--light);border:4px solid var(--color-neutral--light);border-radius:50%}.tetris-game-stats__paused-sign:after,.tetris-game-stats__paused-sign:before{content:"";position:absolute;top:20%;left:28%;display:block;width:12%;height:60%;background-color:var(--color-neutral--light)}.tetris-game-stats__paused-sign:after{left:60%}',""])},59:function(e,t,r){(e.exports=r(14)(!1)).push([e.i,'.tetris-game-info{display:flex;flex-direction:column;align-items:center;width:200px}.tetris-game-info__title{margin:0 0 40px;padding:0;color:var(--color-neutral--dark)}.tetris-game-info__paragraph{display:flex;flex-direction:column;align-items:center;flex-shrink:0;margin:0 0 40px;color:var(--color-neutral);text-align:center}.tetris-game-info__arrows{display:flex;flex-direction:column;align-items:center;margin:5px 0}.tetris-game-info__arrows-bottom-layout{display:flex}.tetris-game-info__arrow{position:relative;width:28px;height:28px;margin:1px;box-sizing:border-box;border:2px solid var(--color-neutral--light);border-radius:6px;background-color:var(--color-yellow--lighten)}.tetris-game-info__arrow:before{position:absolute;content:"";top:6px;left:6px;display:block;width:12px;height:12px;box-sizing:border-box;border:3px solid var(--color-neutral--light);border-radius:3px}.tetris-game-info__arrow--top:before{top:9px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-right-color:transparent;border-bottom-color:transparent}.tetris-game-info__arrow--left:before{top:6px;left:8px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);border-right-color:transparent;border-bottom-color:transparent}.tetris-game-info__arrow--down:before{top:5px;left:6px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-left-color:transparent;border-top-color:transparent}.tetris-game-info__arrow--right:before{top:6px;left:4px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-left-color:transparent;border-bottom-color:transparent}.tetris-game-info__key{max-width:140px;padding:5px 30px;margin:5px 0;color:var(--color-neutral--light);font-weight:700;border:2px solid var(--color-neutral--light);border-radius:6px;background-color:var(--color-yellow--lighten);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tetris-game-info__phrase{max-width:140px}',""])},60:function(e,t,r){(e.exports=r(14)(!1)).push([e.i,".game-body{display:flex;justify-content:space-between;align-items:flex-start;width:var(--width-content);height:100%;margin:0 auto;box-sizing:border-box;padding:40px 0 20px}",""])},70:function(e,t,r){var a;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===n)for(var s in a)r.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},97:function(e,t,r){var a=r(55);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},n=r(15)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(55,function(){var t=r(55);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)}),e.hot.dispose(function(){n()})},98:function(e,t,r){var a=r(56);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},n=r(15)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(56,function(){var t=r(56);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)}),e.hot.dispose(function(){n()})},99:function(e,t,r){var a=r(57);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},n=r(15)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(57,function(){var t=r(57);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)}),e.hot.dispose(function(){n()})}}]);
//# sourceMappingURL=59ab557b587979f07b57.tetris.js.map