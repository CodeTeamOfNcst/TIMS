(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/web/framework/layout/layout.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/web/framework/layout/layout.jsx":
/*!*********************************************!*\
  !*** ./app/web/framework/layout/layout.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Layout = function (_Component) {\n  _inherits(Layout, _Component);\n\n  function Layout() {\n    _classCallCheck(this, Layout);\n\n    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));\n  }\n\n  _createClass(Layout, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"html\",\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"head\",\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"title\",\n            null,\n            this.props.title\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", { charSet: \"utf-8\" }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", { name: \"viewport\", content: \"initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui\" }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", { name: \"keywords\", content: this.props.keywords }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", { name: \"description\", content: this.props.description }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", { rel: \"shortcut icon\", href: \"/favicon.ico\", type: \"image/x-icon\" })\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          \"body\",\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"div\",\n            { id: \"app\" },\n            this.props.children\n          )\n        )\n      );\n    }\n  }]);\n\n  return Layout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar _default = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Layout, \"Layout\", \"C:\\\\Users\\\\ChrisProsise\\\\Desktop\\\\\\u9AD8\\u6821\\u5E08\\u8D44\\u4FE1\\u606F\\u7BA1\\u7406\\u7CFB\\u7EDF\\\\TIMS\\\\app\\\\web\\\\framework\\\\layout\\\\layout.jsx\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\ChrisProsise\\\\Desktop\\\\\\u9AD8\\u6821\\u5E08\\u8D44\\u4FE1\\u606F\\u7BA1\\u7406\\u7CFB\\u7EDF\\\\TIMS\\\\app\\\\web\\\\framework\\\\layout\\\\layout.jsx\");\n}();\n\n;\n\n//# sourceURL=webpack:///./app/web/framework/layout/layout.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ })));