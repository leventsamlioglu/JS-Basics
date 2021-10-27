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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(contentId, fallbackText) {\n    _classCallCheck(this, Modal);\n\n    this.fallbackText = fallbackText;\n    this.contentTemplateEl = document.getElementById(contentId);\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n\n  _createClass(Modal, [{\n    key: \"show\",\n    value: function show() {\n      if ('content' in document.createElement('template')) {\n        var modalElements = document.importNode(this.modalTemplateEl.content, true);\n        var modalElement = modalElements.querySelector('.modal');\n        var backdropElement = modalElements.querySelector('.backdrop');\n        var contentElement = document.importNode(this.contentTemplateEl.content, true);\n        modalElement.appendChild(contentElement);\n        document.body.insertAdjacentElement('afterbegin', modalElement);\n        document.body.insertAdjacentElement('afterbegin', backdropElement);\n      } else {\n        // fallback code\n        alert(this.fallbackText);\n      }\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {}\n  }]);\n\n  return Modal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTW9kYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcGxhY2UvLi9zcmMvVUkvTW9kYWwuanM/MjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50SWQsIGZhbGxiYWNrVGV4dCkge1xuICAgIHRoaXMuZmFsbGJhY2tUZXh0ID0gZmFsbGJhY2tUZXh0O1xuICAgIHRoaXMuY29udGVudFRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICAgIHRoaXMubW9kYWxUZW1wbGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXRlbXBsYXRlJyk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICgnY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSkge1xuICAgICAgY29uc3QgbW9kYWxFbGVtZW50cyA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgICAgIHRoaXMubW9kYWxUZW1wbGF0ZUVsLmNvbnRlbnQsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSBtb2RhbEVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbGVtZW50ID0gbW9kYWxFbGVtZW50cy5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcbiAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGVFbC5jb250ZW50LFxuICAgICAgICB0cnVlXG4gICAgICApO1xuXG4gICAgICBtb2RhbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIG1vZGFsRWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGJhY2tkcm9wRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZhbGxiYWNrIGNvZGVcbiAgICAgIGFsZXJ0KHRoaXMuZmFsbGJhY2tUZXh0KTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge31cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UI/Modal.js\n");

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