module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./node_modules/lato-font/css/lato-font.min.css":
/*!******************************************************!*\
  !*** ./node_modules/lato-font/css/lato-font.min.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9sYXRvLWZvbnQvY3NzL2xhdG8tZm9udC5taW4uY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/lato-font/css/lato-font.min.css\n");

/***/ }),

/***/ "./pages/DispatchContext.js":
/*!**********************************!*\
  !*** ./pages/DispatchContext.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (DispatchContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9EaXNwYXRjaENvbnRleHQuanM/MzZjZSJdLCJuYW1lcyI6WyJEaXNwYXRjaENvbnRleHQiLCJjcmVhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLGVBQWUsR0FBR0MsMkRBQWEsRUFBckM7QUFFZUQsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9EaXNwYXRjaENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGF0Y2hDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DispatchContext.js\n");

/***/ }),

/***/ "./pages/StateContext.js":
/*!*******************************!*\
  !*** ./pages/StateContext.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StateContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (StateContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9TdGF0ZUNvbnRleHQuanM/OGQzZCJdLCJuYW1lcyI6WyJTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsMkRBQWEsRUFBbEM7QUFFZUQsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9TdGF0ZUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/StateContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-immer */ \"use-immer\");\n/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lato-font/css/lato-font.min.css */ \"./node_modules/lato-font/css/lato-font.min.css\");\n/* harmony import */ var lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StateContext */ \"./pages/StateContext.js\");\n/* harmony import */ var _DispatchContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DispatchContext */ \"./pages/DispatchContext.js\");\nvar _jsxFileName = \"/Users/vusa/Portfolio/Rental-Property-App/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = process.env.BACKENDURL || \"http://localhost:1337/\";\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: storageItem,\n    1: setStorageItem\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const isLoggedIn = localStorage.getItem(\"loggedIn\");\n    setStorageItem(isLoggedIn);\n  }, []);\n  const initialState = {\n    loggedIn: storageItem,\n    isSearchOpen: false,\n    isChatOpen: false,\n    unreadChatCount: 0,\n    serverStateID: null\n  };\n\n  function ourReducer(draft, action) {\n    switch (action.type) {\n      case \"login\":\n        draft.loggedIn = true;\n        localStorage.setItem(\"loggedIn\", draft.loggedIn);\n        draft.user = action.data;\n        localStorage.setItem(\"user\", draft.user);\n        draft.token = action.token;\n        localStorage.setItem(\"token\", draft.token);\n        draft.userID = action.userID;\n        localStorage.setItem(\"userID\", draft.userID);\n        return;\n\n      case \"logout\":\n        draft.loggedIn = false;\n        localStorage.removeItem(\"loggedIn\");\n        return;\n\n      case \"serverStateID\":\n        draft.serverStateID = action.serverStateID;\n        return;\n\n      case \"tenantPreferencesID\":\n        draft.tenantPreferencesID = action.tenantPreferencesID;\n        return;\n\n      case \"savePageState\":\n        const response = axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(\"onboarding-states/\" + action.userID, {\n          data: {\n            user: action.userID,\n            route: action.route\n          },\n          headers: {\n            Authorization: \"Bearer \" + action.token\n          }\n        }).then(response => {}).catch(error => {\n          console.log(\"An error occurred:\", error.response);\n        });\n        return;\n    }\n  }\n\n  const [state, dispatch] = Object(use_immer__WEBPACK_IMPORTED_MODULE_1__[\"useImmerReducer\"])(ourReducer, initialState);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_StateContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Provider, {\n    value: state,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(_DispatchContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Provider, {\n    value: dispatch,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiQkFDS0VORFVSTCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmFnZUl0ZW0iLCJzZXRTdG9yYWdlSXRlbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaXNMb2dnZWRJbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsU3RhdGUiLCJsb2dnZWRJbiIsImlzU2VhcmNoT3BlbiIsImlzQ2hhdE9wZW4iLCJ1bnJlYWRDaGF0Q291bnQiLCJzZXJ2ZXJTdGF0ZUlEIiwib3VyUmVkdWNlciIsImRyYWZ0IiwiYWN0aW9uIiwidHlwZSIsInNldEl0ZW0iLCJ1c2VyIiwiZGF0YSIsInRva2VuIiwidXNlcklEIiwicmVtb3ZlSXRlbSIsInRlbmFudFByZWZlcmVuY2VzSUQiLCJyZXNwb25zZSIsInB1dCIsInJvdXRlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlSW1tZXJSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBWixJQUEwQix3QkFBbkQ7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFVBQVUsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQW5CO0FBQ0FMLGtCQUFjLENBQUNHLFVBQUQsQ0FBZDtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFJQSxRQUFNRyxZQUFZLEdBQUc7QUFDbkJDLFlBQVEsRUFBRVIsV0FEUztBQUVuQlMsZ0JBQVksRUFBRSxLQUZLO0FBR25CQyxjQUFVLEVBQUUsS0FITztBQUluQkMsbUJBQWUsRUFBRSxDQUpFO0FBS25CQyxpQkFBYSxFQUFFO0FBTEksR0FBckI7O0FBUUEsV0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkJDLE1BQTNCLEVBQW1DO0FBQ2pDLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFdBQUssT0FBTDtBQUNFRixhQUFLLENBQUNOLFFBQU4sR0FBaUIsSUFBakI7QUFDQUgsb0JBQVksQ0FBQ1ksT0FBYixDQUFxQixVQUFyQixFQUFpQ0gsS0FBSyxDQUFDTixRQUF2QztBQUNBTSxhQUFLLENBQUNJLElBQU4sR0FBYUgsTUFBTSxDQUFDSSxJQUFwQjtBQUNBZCxvQkFBWSxDQUFDWSxPQUFiLENBQXFCLE1BQXJCLEVBQTZCSCxLQUFLLENBQUNJLElBQW5DO0FBQ0FKLGFBQUssQ0FBQ00sS0FBTixHQUFjTCxNQUFNLENBQUNLLEtBQXJCO0FBQ0FmLG9CQUFZLENBQUNZLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJILEtBQUssQ0FBQ00sS0FBcEM7QUFDQU4sYUFBSyxDQUFDTyxNQUFOLEdBQWVOLE1BQU0sQ0FBQ00sTUFBdEI7QUFDQWhCLG9CQUFZLENBQUNZLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JILEtBQUssQ0FBQ08sTUFBckM7QUFDQTs7QUFDRixXQUFLLFFBQUw7QUFDRVAsYUFBSyxDQUFDTixRQUFOLEdBQWlCLEtBQWpCO0FBQ0FILG9CQUFZLENBQUNpQixVQUFiLENBQXdCLFVBQXhCO0FBQ0E7O0FBQ0YsV0FBSyxlQUFMO0FBQ0VSLGFBQUssQ0FBQ0YsYUFBTixHQUFzQkcsTUFBTSxDQUFDSCxhQUE3QjtBQUNBOztBQUNGLFdBQUsscUJBQUw7QUFDRUUsYUFBSyxDQUFDUyxtQkFBTixHQUE0QlIsTUFBTSxDQUFDUSxtQkFBbkM7QUFDQTs7QUFDRixXQUFLLGVBQUw7QUFDRSxjQUFNQyxRQUFRLEdBQUdqQyw0Q0FBSyxDQUNuQmtDLEdBRGMsQ0FDVix1QkFBdUJWLE1BQU0sQ0FBQ00sTUFEcEIsRUFDNEI7QUFDekNGLGNBQUksRUFBRTtBQUNKRCxnQkFBSSxFQUFFSCxNQUFNLENBQUNNLE1BRFQ7QUFFSkssaUJBQUssRUFBRVgsTUFBTSxDQUFDVztBQUZWLFdBRG1DO0FBTXpDQyxpQkFBTyxFQUFFO0FBQ1BDLHlCQUFhLEVBQUUsWUFBWWIsTUFBTSxDQUFDSztBQUQzQjtBQU5nQyxTQUQ1QixFQVdkUyxJQVhjLENBV1JMLFFBQUQsSUFBYyxDQUFFLENBWFAsRUFZZE0sS0FaYyxDQVlQQyxLQUFELElBQVc7QUFDaEJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0YsS0FBSyxDQUFDUCxRQUF4QztBQUNELFNBZGMsQ0FBakI7QUFlQTtBQXJDSjtBQXVDRDs7QUFDRCxRQUFNLENBQUNVLEtBQUQsRUFBUUMsUUFBUixJQUFvQkMsaUVBQWUsQ0FBQ3ZCLFVBQUQsRUFBYU4sWUFBYixDQUF6QztBQUVBLFNBQ0UsbUVBQ0UsTUFBQyxxREFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFMkIsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQsQ0FBaUIsUUFBakI7QUFBMEIsU0FBSyxFQUFFQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVwQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBREYsQ0FERjtBQVNEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW1tZXJSZWR1Y2VyIH0gZnJvbSBcInVzZS1pbW1lclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcImxhdG8tZm9udC9jc3MvbGF0by1mb250Lm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuXG5pbXBvcnQgU3RhdGVDb250ZXh0IGZyb20gXCIuL1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IERpc3BhdGNoQ29udGV4dCBmcm9tIFwiLi9EaXNwYXRjaENvbnRleHRcIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52LkJBQ0tFTkRVUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbc3RvcmFnZUl0ZW0sIHNldFN0b3JhZ2VJdGVtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2dlZEluXCIpO1xuICAgIHNldFN0b3JhZ2VJdGVtKGlzTG9nZ2VkSW4pO1xuICB9LCBbXSk7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBsb2dnZWRJbjogc3RvcmFnZUl0ZW0sXG4gICAgaXNTZWFyY2hPcGVuOiBmYWxzZSxcbiAgICBpc0NoYXRPcGVuOiBmYWxzZSxcbiAgICB1bnJlYWRDaGF0Q291bnQ6IDAsXG4gICAgc2VydmVyU3RhdGVJRDogbnVsbCxcbiAgfTtcblxuICBmdW5jdGlvbiBvdXJSZWR1Y2VyKGRyYWZ0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwibG9naW5cIjpcbiAgICAgICAgZHJhZnQubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2dlZEluXCIsIGRyYWZ0LmxvZ2dlZEluKTtcbiAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgZHJhZnQudXNlcik7XG4gICAgICAgIGRyYWZ0LnRva2VuID0gYWN0aW9uLnRva2VuO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGRyYWZ0LnRva2VuKTtcbiAgICAgICAgZHJhZnQudXNlcklEID0gYWN0aW9uLnVzZXJJRDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySURcIiwgZHJhZnQudXNlcklEKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcImxvZ291dFwiOlxuICAgICAgICBkcmFmdC5sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ2dlZEluXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwic2VydmVyU3RhdGVJRFwiOlxuICAgICAgICBkcmFmdC5zZXJ2ZXJTdGF0ZUlEID0gYWN0aW9uLnNlcnZlclN0YXRlSUQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJ0ZW5hbnRQcmVmZXJlbmNlc0lEXCI6XG4gICAgICAgIGRyYWZ0LnRlbmFudFByZWZlcmVuY2VzSUQgPSBhY3Rpb24udGVuYW50UHJlZmVyZW5jZXNJRDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInNhdmVQYWdlU3RhdGVcIjpcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvc1xuICAgICAgICAgIC5wdXQoXCJvbmJvYXJkaW5nLXN0YXRlcy9cIiArIGFjdGlvbi51c2VySUQsIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJJRCxcbiAgICAgICAgICAgICAgcm91dGU6IGFjdGlvbi5yb3V0ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBhY3Rpb24udG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7fSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VycmVkOlwiLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VJbW1lclJlZHVjZXIob3VyUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgIDxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9tYWluLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/main.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "use-immer":
/*!****************************!*\
  !*** external "use-immer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-immer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2UtaW1tZXJcIj9lNjUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVzZS1pbW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVzZS1pbW1lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///use-immer\n");

/***/ })

/******/ });