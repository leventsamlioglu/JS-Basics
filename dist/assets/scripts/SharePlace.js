/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PlaceFinder = /*#__PURE__*/function () {\n  function PlaceFinder() {\n    _classCallCheck(this, PlaceFinder);\n\n    var addressForm = document.querySelector(\"form\");\n    var locateUserBtn = document.getElementById(\"locate-btn\");\n    locateUserBtn.addEventListener(\"click\", this.locateUserHandler);\n    addressForm.addEventListener(\"submit\", this.findAddressHandler);\n  }\n\n  _createClass(PlaceFinder, [{\n    key: \"locateUserHandler\",\n    value: function locateUserHandler() {\n      if (!navigator.geolocation) {\n        alert(\"Location feature is not available in your browser - please use a more modern browser or manually enter an address.\");\n        return;\n      }\n\n      navigator.geolocation.getCurrentPosition(function (successResult) {\n        var coordinates = {\n          lat: successResult.coords.latitude,\n          lng: successResult.coords.longitude\n        };\n        console.log(coordinates);\n      }, function (error) {\n        alert(\"Could not locate you unfortunately. Please enter an address manually!\");\n      });\n    }\n  }, {\n    key: \"findAddressHandler\",\n    value: function findAddressHandler() {}\n  }]);\n\n  return PlaceFinder;\n}();\n\nvar placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwibmFtZXMiOlsiUGxhY2VGaW5kZXIiLCJhZGRyZXNzRm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvY2F0ZVVzZXJCdG4iLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGVVc2VySGFuZGxlciIsImZpbmRBZGRyZXNzSGFuZGxlciIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiYWxlcnQiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdWNjZXNzUmVzdWx0IiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInBsYWNlRmluZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsVztBQUNKLHlCQUFjO0FBQUE7O0FBQ1osUUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7QUFDQSxRQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixZQUF4QixDQUF0QjtBQUVBRCxJQUFBQSxhQUFhLENBQUNFLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUtDLGlCQUE3QztBQUNBTixJQUFBQSxXQUFXLENBQUNLLGdCQUFaLENBQTZCLFFBQTdCLEVBQXVDLEtBQUtFLGtCQUE1QztBQUNEOzs7O1dBRUQsNkJBQW9CO0FBQ2xCLFVBQUksQ0FBQ0MsU0FBUyxDQUFDQyxXQUFmLEVBQTRCO0FBQzFCQyxRQUFBQSxLQUFLLENBQ0gsb0hBREcsQ0FBTDtBQUdBO0FBQ0Q7O0FBQ0RGLE1BQUFBLFNBQVMsQ0FBQ0MsV0FBVixDQUFzQkUsa0JBQXRCLENBQ0UsVUFBQ0MsYUFBRCxFQUFtQjtBQUNqQixZQUFNQyxXQUFXLEdBQUc7QUFDbEJDLFVBQUFBLEdBQUcsRUFBRUYsYUFBYSxDQUFDRyxNQUFkLENBQXFCQyxRQURSO0FBRWxCQyxVQUFBQSxHQUFHLEVBQUVMLGFBQWEsQ0FBQ0csTUFBZCxDQUFxQkc7QUFGUixTQUFwQjtBQUlBQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsV0FBWjtBQUNELE9BUEgsRUFRRSxVQUFDUSxLQUFELEVBQVc7QUFDVFgsUUFBQUEsS0FBSyxDQUNILHVFQURHLENBQUw7QUFHRCxPQVpIO0FBY0Q7OztXQUVELDhCQUFxQixDQUFFOzs7Ozs7QUFHekIsSUFBTVksV0FBVyxHQUFHLElBQUl2QixXQUFKLEVBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxhY2VGaW5kZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBhZGRyZXNzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGxvY2F0ZVVzZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0ZS1idG5cIik7XG5cbiAgICBsb2NhdGVVc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmxvY2F0ZVVzZXJIYW5kbGVyKTtcbiAgICBhZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuZmluZEFkZHJlc3NIYW5kbGVyKTtcbiAgfVxuXG4gIGxvY2F0ZVVzZXJIYW5kbGVyKCkge1xuICAgIGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgXCJMb2NhdGlvbiBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyIC0gcGxlYXNlIHVzZSBhIG1vcmUgbW9kZXJuIGJyb3dzZXIgb3IgbWFudWFsbHkgZW50ZXIgYW4gYWRkcmVzcy5cIlxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgIChzdWNjZXNzUmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgIGxhdDogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgXCJDb3VsZCBub3QgbG9jYXRlIHlvdSB1bmZvcnR1bmF0ZWx5LiBQbGVhc2UgZW50ZXIgYW4gYWRkcmVzcyBtYW51YWxseSFcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmaW5kQWRkcmVzc0hhbmRsZXIoKSB7fVxufVxuXG5jb25zdCBwbGFjZUZpbmRlciA9IG5ldyBQbGFjZUZpbmRlcigpO1xuIl0sImZpbGUiOiIuL3NyYy9TaGFyZVBsYWNlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/SharePlace.js"]();
/******/ 	
/******/ })()
;