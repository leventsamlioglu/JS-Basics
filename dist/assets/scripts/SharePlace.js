/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PlaceFinder = /*#__PURE__*/function () {\n  function PlaceFinder() {\n    _classCallCheck(this, PlaceFinder);\n\n    var addressForm = document.querySelector(\"form\");\n    var locateUserBtn = document.getElementById(\"locate-btn\");\n    locateUserBtn.addEventListener(\"click\", this.locateUserHandler);\n    addressForm.addEventListener(\"submit\", this.findAddressHandler);\n  }\n\n  _createClass(PlaceFinder, [{\n    key: \"locateUserHandler\",\n    value: function locateUserHandler() {\n      if (!navigator.geolocation) {\n        alert(\"Location feature is not available in your browser - please use a more modern browser or manually enter an address.\");\n        return;\n      }\n\n      var modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal(\"loading-modal-content\", \"Loading location - please wait!\");\n      modal.show();\n      navigator.geolocation.getCurrentPosition(function (successResult) {\n        modal.hide();\n        var coordinates = {\n          lat: successResult.coords.latitude,\n          lng: successResult.coords.longitude\n        };\n        console.log(coordinates);\n      }, function (error) {\n        modal.hide();\n        alert(\"Could not locate you unfortunately. Please enter an address manually!\");\n      });\n    }\n  }, {\n    key: \"findAddressHandler\",\n    value: function findAddressHandler() {}\n  }]);\n\n  return PlaceFinder;\n}();\n\nvar placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBOzs7QUFFQTs7Ozs7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9VSS9Nb2RhbFwiO1xuXG5jbGFzcyBQbGFjZUZpbmRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGFkZHJlc3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgY29uc3QgbG9jYXRlVXNlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRlLWJ0blwiKTtcblxuICAgIGxvY2F0ZVVzZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubG9jYXRlVXNlckhhbmRsZXIpO1xuICAgIGFkZHJlc3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5maW5kQWRkcmVzc0hhbmRsZXIpO1xuICB9XG5cbiAgbG9jYXRlVXNlckhhbmRsZXIoKSB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBcIkxvY2F0aW9uIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIgLSBwbGVhc2UgdXNlIGEgbW9yZSBtb2Rlcm4gYnJvd3NlciBvciBtYW51YWxseSBlbnRlciBhbiBhZGRyZXNzLlwiXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbChcbiAgICAgIFwibG9hZGluZy1tb2RhbC1jb250ZW50XCIsXG4gICAgICBcIkxvYWRpbmcgbG9jYXRpb24gLSBwbGVhc2Ugd2FpdCFcIlxuICAgICk7XG4gICAgbW9kYWwuc2hvdygpO1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAoc3VjY2Vzc1Jlc3VsdCkgPT4ge1xuICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgIGxhdDogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgbW9kYWwuaGlkZSgpO1xuICAgICAgICBhbGVydChcbiAgICAgICAgICBcIkNvdWxkIG5vdCBsb2NhdGUgeW91IHVuZm9ydHVuYXRlbHkuIFBsZWFzZSBlbnRlciBhbiBhZGRyZXNzIG1hbnVhbGx5IVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZpbmRBZGRyZXNzSGFuZGxlcigpIHt9XG59XG5cbmNvbnN0IHBsYWNlRmluZGVyID0gbmV3IFBsYWNlRmluZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(contentId, fallbackText) {\n    _classCallCheck(this, Modal);\n\n    this.fallbackText = fallbackText;\n    this.contentTemplateEl = document.getElementById(contentId); // <template id=\"loading-modal-content\">\n    //   #document-fragment\n    //   <div class=\"modal__content centered\">\n    //     <div class=\"lds-dual-ring\"></div>\n    //   </div>\n    // </template>\n\n    this.modalTemplateEl = document.getElementById(\"modal-template\"); // <template id=\"modal-template\">\n    //   #document-fragment\n    //   <div class=\"backdrop\"></div>\n    //   <div class=\"modal\"></div>\n    // </template>\n  }\n\n  _createClass(Modal, [{\n    key: \"show\",\n    value: function show() {\n      if (\"content\" in document.createElement(\"template\")) {\n        var modalElements = document.importNode(this.modalTemplateEl.content, true // #document-fragment\n        // <div class=\"backdrop\"></div>\n        // <div class=\"modal\"></div>\n        // modalElements = #document-fragment\n        );\n        var modalElement = modalElements.querySelector(\".modal\"); // <div class=\"modal\">\n        //   <div class=\"modal__content centered\">\n        //     <div class=\"lds-dual-ring\"></div>\n        //   </div>\n        // </div>\n\n        var backdropElement = modalElements.querySelector(\".backdrop\"); //  <div class=\"backdrop\"></div>\n\n        var contentElement = document.importNode(this.contentTemplateEl.content, true); // this.contentTemplateEl.content =\n        // #document-fragment\n        // <div class=\"modal__content centered\">\n        //   <div class=\"lds-dual-ring\"></div>\n        // </div>\n        // contentElement =\n        // #document-fragment\n\n        modalElement.appendChild(contentElement);\n        document.body.insertAdjacentElement(\"afterbegin\", modalElement);\n        document.body.insertAdjacentElement(\"afterbegin\", backdropElement);\n      } else {\n        // fallback code\n        alert(this.fallbackText);\n      }\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {}\n  }]);\n\n  return Modal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTW9kYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaEJBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBUEE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3REE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBsYWNlLy4vc3JjL1VJL01vZGFsLmpzPzI3MDIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IoY29udGVudElkLCBmYWxsYmFja1RleHQpIHtcbiAgICB0aGlzLmZhbGxiYWNrVGV4dCA9IGZhbGxiYWNrVGV4dDtcbiAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudElkKTtcbiAgICAvLyA8dGVtcGxhdGUgaWQ9XCJsb2FkaW5nLW1vZGFsLWNvbnRlbnRcIj5cbiAgICAvLyAgICNkb2N1bWVudC1mcmFnbWVudFxuICAgIC8vICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250ZW50IGNlbnRlcmVkXCI+XG4gICAgLy8gICAgIDxkaXYgY2xhc3M9XCJsZHMtZHVhbC1yaW5nXCI+PC9kaXY+XG4gICAgLy8gICA8L2Rpdj5cbiAgICAvLyA8L3RlbXBsYXRlPlxuICAgIHRoaXMubW9kYWxUZW1wbGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10ZW1wbGF0ZVwiKTtcbiAgICAvLyA8dGVtcGxhdGUgaWQ9XCJtb2RhbC10ZW1wbGF0ZVwiPlxuICAgIC8vICAgI2RvY3VtZW50LWZyYWdtZW50XG4gICAgLy8gICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj5cbiAgICAvLyAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPjwvZGl2PlxuICAgIC8vIDwvdGVtcGxhdGU+XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmIChcImNvbnRlbnRcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIikpIHtcbiAgICAgIGNvbnN0IG1vZGFsRWxlbWVudHMgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxuICAgICAgICB0aGlzLm1vZGFsVGVtcGxhdGVFbC5jb250ZW50LFxuICAgICAgICB0cnVlXG4gICAgICAgIC8vICNkb2N1bWVudC1mcmFnbWVudFxuICAgICAgICAvLyA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj5cbiAgICAgICAgLy8gPGRpdiBjbGFzcz1cIm1vZGFsXCI+PC9kaXY+XG5cbiAgICAgICAgLy8gbW9kYWxFbGVtZW50cyA9ICNkb2N1bWVudC1mcmFnbWVudFxuICAgICAgKTtcblxuICAgICAgY29uc3QgbW9kYWxFbGVtZW50ID0gbW9kYWxFbGVtZW50cy5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgICAgLy8gPGRpdiBjbGFzcz1cIm1vZGFsXCI+XG4gICAgICAvLyAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGVudCBjZW50ZXJlZFwiPlxuICAgICAgLy8gICAgIDxkaXYgY2xhc3M9XCJsZHMtZHVhbC1yaW5nXCI+PC9kaXY+XG4gICAgICAvLyAgIDwvZGl2PlxuICAgICAgLy8gPC9kaXY+XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wRWxlbWVudCA9IG1vZGFsRWxlbWVudHMucXVlcnlTZWxlY3RvcihcIi5iYWNrZHJvcFwiKTtcbiAgICAgIC8vICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj5cblxuICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxuICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsLmNvbnRlbnQsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICAvLyB0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsLmNvbnRlbnQgPVxuICAgICAgLy8gI2RvY3VtZW50LWZyYWdtZW50XG4gICAgICAvLyA8ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRlbnQgY2VudGVyZWRcIj5cbiAgICAgIC8vICAgPGRpdiBjbGFzcz1cImxkcy1kdWFsLXJpbmdcIj48L2Rpdj5cbiAgICAgIC8vIDwvZGl2PlxuXG4gICAgICAvLyBjb250ZW50RWxlbWVudCA9XG4gICAgICAvLyAjZG9jdW1lbnQtZnJhZ21lbnRcblxuICAgICAgbW9kYWxFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRFbGVtZW50KTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIG1vZGFsRWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgYmFja2Ryb3BFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmFsbGJhY2sgY29kZVxuICAgICAgYWxlcnQodGhpcy5mYWxsYmFja1RleHQpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/UI/Modal.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/SharePlace.js");
/******/ 	
/******/ })()
;