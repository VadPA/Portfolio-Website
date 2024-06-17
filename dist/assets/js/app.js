/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-nav */ \"./src/assets/js/mobile-nav.js\");\n\r\n(0,_mobile_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/mobile-nav.js":
/*!*************************************!*\
  !*** ./src/assets/js/mobile-nav.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction mobileNav() {\n\t// Mobile nav button\n\tconst navBtn = document.querySelector('.mobile-nav-btn');\n\tconst nav = document.querySelector('.mobile-nav');\n\tconst menuIcon = document.querySelector('.nav-icon');\n\n\tnavBtn.onclick = function () {\n\t\tnav.classList.toggle('mobile-nav--open');\n\t\tmenuIcon.classList.toggle('nav-icon--active');\n\t\tdocument.body.classList.toggle('no-scroll');\n\t};\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mobileNav);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobile-nav.js?");

/***/ }),

/***/ "./src/assets/js/pagination.js":
/*!*************************************!*\
  !*** ./src/assets/js/pagination.js ***!
  \*************************************/
/***/ (function() {

eval("const paginationBtn = document.querySelectorAll('.pagination__link');\r\nconst path = document.location.pathname.split('.')[0].replace('/', '').split('-')[1];\r\n\r\npaginationBtn.forEach((el) => {\r\n  el.classList.remove('active');\r\n  if (el.innerHTML === path) {\r\n    el.classList.add('active');\r\n  }\r\n  })\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/pagination.js?");

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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/index.js");
/******/ 	__webpack_require__("./src/assets/js/mobile-nav.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/pagination.js");
/******/ 	
/******/ })()
;