/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-immer */ \"use-immer\");\n/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lato-font/css/lato-font.min.css */ \"./node_modules/lato-font/css/lato-font.min.css\");\n/* harmony import */ var lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/vusa/Portfolio/Rental-Property-App/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.baseURL) = process.env.BACKENDURL || \"http://localhost:1337/\";\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: storageItem,\n    1: setStorageItem\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const isLoggedIn = localStorage.getItem(\"loggedIn\");\n    setStorageItem(isLoggedIn);\n  }, []);\n  const initialState = {\n    loggedIn: storageItem,\n    isSearchOpen: false,\n    isChatOpen: false,\n    unreadChatCount: 0,\n    serverStateID: null\n  };\n\n  function ourReducer(draft, action) {\n    switch (action.type) {\n      case \"login\":\n        draft.loggedIn = true;\n        localStorage.setItem(\"loggedIn\", draft.loggedIn);\n        draft.user = action.data;\n        localStorage.setItem(\"user\", draft.user);\n        draft.token = action.token;\n        localStorage.setItem(\"token\", draft.token);\n        draft.userID = action.userID;\n        localStorage.setItem(\"userID\", draft.userID);\n        return;\n\n      case \"logout\":\n        draft.loggedIn = false;\n        localStorage.removeItem(\"loggedIn\");\n        return;\n\n      case \"serverStateID\":\n        draft.serverStateID = action.serverStateID;\n        return;\n\n      case \"tenantPreferencesID\":\n        draft.tenantPreferencesID = action.tenantPreferencesID;\n        return;\n\n      case \"savePageState\":\n        const response = axios__WEBPACK_IMPORTED_MODULE_3___default().put(\"onboarding-states/\" + action.userID, {\n          data: {\n            user: action.userID,\n            route: action.route\n          },\n          headers: {\n            Authorization: \"Bearer \" + action.token\n          }\n        }).then(response => {}).catch(error => {\n          console.log(\"An error occurred:\", error.response);\n        });\n        return;\n    }\n  }\n\n  const [state, dispatch] = (0,use_immer__WEBPACK_IMPORTED_MODULE_2__.useImmerReducer)(ourReducer, initialState);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW50LWJhcmtlci8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJuYW1lcyI6WyJheGlvcyIsInByb2Nlc3MiLCJlbnYiLCJCQUNLRU5EVVJMIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yYWdlSXRlbSIsInNldFN0b3JhZ2VJdGVtIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxTdGF0ZSIsImxvZ2dlZEluIiwiaXNTZWFyY2hPcGVuIiwiaXNDaGF0T3BlbiIsInVucmVhZENoYXRDb3VudCIsInNlcnZlclN0YXRlSUQiLCJvdXJSZWR1Y2VyIiwiZHJhZnQiLCJhY3Rpb24iLCJ0eXBlIiwic2V0SXRlbSIsInVzZXIiLCJkYXRhIiwidG9rZW4iLCJ1c2VySUQiLCJyZW1vdmVJdGVtIiwidGVuYW50UHJlZmVyZW5jZXNJRCIsInJlc3BvbnNlIiwicm91dGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VJbW1lclJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQUEsK0RBQUEsR0FBeUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaLElBQTBCLHdCQUFuRDs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFDQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBbkI7QUFDQUwsa0JBQWMsQ0FBQ0csVUFBRCxDQUFkO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFFBQU1HLFlBQVksR0FBRztBQUNuQkMsWUFBUSxFQUFFUixXQURTO0FBRW5CUyxnQkFBWSxFQUFFLEtBRks7QUFHbkJDLGNBQVUsRUFBRSxLQUhPO0FBSW5CQyxtQkFBZSxFQUFFLENBSkU7QUFLbkJDLGlCQUFhLEVBQUU7QUFMSSxHQUFyQjs7QUFRQSxXQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUM7QUFDakMsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsV0FBSyxPQUFMO0FBQ0VGLGFBQUssQ0FBQ04sUUFBTixHQUFpQixJQUFqQjtBQUNBSCxvQkFBWSxDQUFDWSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDSCxLQUFLLENBQUNOLFFBQXZDO0FBQ0FNLGFBQUssQ0FBQ0ksSUFBTixHQUFhSCxNQUFNLENBQUNJLElBQXBCO0FBQ0FkLG9CQUFZLENBQUNZLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJILEtBQUssQ0FBQ0ksSUFBbkM7QUFDQUosYUFBSyxDQUFDTSxLQUFOLEdBQWNMLE1BQU0sQ0FBQ0ssS0FBckI7QUFDQWYsb0JBQVksQ0FBQ1ksT0FBYixDQUFxQixPQUFyQixFQUE4QkgsS0FBSyxDQUFDTSxLQUFwQztBQUNBTixhQUFLLENBQUNPLE1BQU4sR0FBZU4sTUFBTSxDQUFDTSxNQUF0QjtBQUNBaEIsb0JBQVksQ0FBQ1ksT0FBYixDQUFxQixRQUFyQixFQUErQkgsS0FBSyxDQUFDTyxNQUFyQztBQUNBOztBQUNGLFdBQUssUUFBTDtBQUNFUCxhQUFLLENBQUNOLFFBQU4sR0FBaUIsS0FBakI7QUFDQUgsb0JBQVksQ0FBQ2lCLFVBQWIsQ0FBd0IsVUFBeEI7QUFDQTs7QUFDRixXQUFLLGVBQUw7QUFDRVIsYUFBSyxDQUFDRixhQUFOLEdBQXNCRyxNQUFNLENBQUNILGFBQTdCO0FBQ0E7O0FBQ0YsV0FBSyxxQkFBTDtBQUNFRSxhQUFLLENBQUNTLG1CQUFOLEdBQTRCUixNQUFNLENBQUNRLG1CQUFuQztBQUNBOztBQUNGLFdBQUssZUFBTDtBQUNFLGNBQU1DLFFBQVEsR0FBRy9CLGdEQUFBLENBQ1YsdUJBQXVCc0IsTUFBTSxDQUFDTSxNQURwQixFQUM0QjtBQUN6Q0YsY0FBSSxFQUFFO0FBQ0pELGdCQUFJLEVBQUVILE1BQU0sQ0FBQ00sTUFEVDtBQUVKSSxpQkFBSyxFQUFFVixNQUFNLENBQUNVO0FBRlYsV0FEbUM7QUFNekNDLGlCQUFPLEVBQUU7QUFDUEMseUJBQWEsRUFBRSxZQUFZWixNQUFNLENBQUNLO0FBRDNCO0FBTmdDLFNBRDVCLEVBV2RRLElBWGMsQ0FXUkosUUFBRCxJQUFjLENBQUUsQ0FYUCxFQVlkSyxLQVpjLENBWVBDLEtBQUQsSUFBVztBQUNoQkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixLQUFLLENBQUNOLFFBQXhDO0FBQ0QsU0FkYyxDQUFqQjtBQWVBO0FBckNKO0FBdUNEOztBQUNELFFBQU0sQ0FBQ1MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQywwREFBZSxDQUFDdEIsVUFBRCxFQUFhTixZQUFiLENBQXpDO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlUixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtEOztBQUVELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJbW1lclJlZHVjZXIgfSBmcm9tIFwidXNlLWltbWVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwibGF0by1mb250L2Nzcy9sYXRvLWZvbnQubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uY3NzXCI7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5CQUNLRU5EVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3N0b3JhZ2VJdGVtLCBzZXRTdG9yYWdlSXRlbV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dnZWRJblwiKTtcbiAgICBzZXRTdG9yYWdlSXRlbShpc0xvZ2dlZEluKTtcbiAgfSwgW10pO1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbG9nZ2VkSW46IHN0b3JhZ2VJdGVtLFxuICAgIGlzU2VhcmNoT3BlbjogZmFsc2UsXG4gICAgaXNDaGF0T3BlbjogZmFsc2UsXG4gICAgdW5yZWFkQ2hhdENvdW50OiAwLFxuICAgIHNlcnZlclN0YXRlSUQ6IG51bGwsXG4gIH07XG5cbiAgZnVuY3Rpb24gb3VyUmVkdWNlcihkcmFmdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcImxvZ2luXCI6XG4gICAgICAgIGRyYWZ0LmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dnZWRJblwiLCBkcmFmdC5sb2dnZWRJbik7XG4gICAgICAgIGRyYWZ0LnVzZXIgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIGRyYWZ0LnVzZXIpO1xuICAgICAgICBkcmFmdC50b2tlbiA9IGFjdGlvbi50b2tlbjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkcmFmdC50b2tlbik7XG4gICAgICAgIGRyYWZ0LnVzZXJJRCA9IGFjdGlvbi51c2VySUQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcklEXCIsIGRyYWZ0LnVzZXJJRCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJsb2dvdXRcIjpcbiAgICAgICAgZHJhZnQubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2dnZWRJblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInNlcnZlclN0YXRlSURcIjpcbiAgICAgICAgZHJhZnQuc2VydmVyU3RhdGVJRCA9IGFjdGlvbi5zZXJ2ZXJTdGF0ZUlEO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwidGVuYW50UHJlZmVyZW5jZXNJRFwiOlxuICAgICAgICBkcmFmdC50ZW5hbnRQcmVmZXJlbmNlc0lEID0gYWN0aW9uLnRlbmFudFByZWZlcmVuY2VzSUQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJzYXZlUGFnZVN0YXRlXCI6XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3NcbiAgICAgICAgICAucHV0KFwib25ib2FyZGluZy1zdGF0ZXMvXCIgKyBhY3Rpb24udXNlcklELCB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi51c2VySUQsXG4gICAgICAgICAgICAgIHJvdXRlOiBhY3Rpb24ucm91dGUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgYWN0aW9uLnRva2VuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge30pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY2N1cnJlZDpcIiwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlSW1tZXJSZWR1Y2VyKG91clJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/lato-font/css/lato-font.min.css":
/*!******************************************************!*\
  !*** ./node_modules/lato-font/css/lato-font.min.css ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "use-immer":
/*!****************************!*\
  !*** external "use-immer" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("use-immer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();