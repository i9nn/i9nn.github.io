/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/scripts/index.tsx ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
var title = document.getElementById("card");
var container = document.getElementById("card-cont");
var circle = document.getElementById("circle");
var limit = 270;
function calculateRotation(x, y, el) {
    var box = el.getBoundingClientRect();
    var calcX = -(y - box.y - (box.height / 2)) / limit;
    var calcY = (x - box.x - (box.width / 2)) / limit;
    return "perspective(150px) " + "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
}
function transformElement(el, xyEl) {
    el.style.transform = calculateRotation.apply(null, xyEl);
    el.style.transitionDuration = "0.1s";
}
container.onmousemove = function (e) {
    var xy = [e.clientX, e.clientY];
    var position = xy.concat([container]);
    window.requestAnimationFrame(function () {
        transformElement(title, position);
        var box = title.getBoundingClientRect();
        circle.style.top = e.clientY - box.y - circle.offsetHeight / 2 + "px";
        circle.style.left = e.clientX - box.x - circle.offsetWidth / 2 + "px";
        circle.style.transitionDuration = "0.05s";
    });
};
container.onmouseenter = function () {
    circle.style.opacity = "1";
    circle.style.transitionDuration = "0.5s";
};
container.onmouseleave = function () {
    window.requestAnimationFrame(function () {
        title.style.transform = "perspective(150px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
        title.style.transitionDuration = "0.5s";
        circle.style.transitionDuration = "0.5s";
        circle.style.opacity = "0";
    });
};

})();

/******/ })()
;
//# sourceMappingURL=main.js.map