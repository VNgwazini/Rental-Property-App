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

/***/ "./pages/DispatchContext.js":
/*!**********************************!*\
  !*** ./pages/DispatchContext.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ __webpack_exports__[\"default\"] = (DispatchContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW50LWJhcmtlci8uL3BhZ2VzL0Rpc3BhdGNoQ29udGV4dC5qcz8zNmNlIl0sIm5hbWVzIjpbIkRpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsTUFBTUEsZUFBZSxnQkFBR0Msb0RBQWEsRUFBckM7QUFFQSwrREFBZUQsZUFBZiIsImZpbGUiOiIuL3BhZ2VzL0Rpc3BhdGNoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwYXRjaENvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DispatchContext.js\n");

/***/ }),

/***/ "./pages/StateContext.js":
/*!*******************************!*\
  !*** ./pages/StateContext.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ __webpack_exports__[\"default\"] = (StateContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW50LWJhcmtlci8uL3BhZ2VzL1N0YXRlQ29udGV4dC5qcz84ZDNkIl0sIm5hbWVzIjpbIlN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsTUFBTUEsWUFBWSxnQkFBR0Msb0RBQWEsRUFBbEM7QUFFQSwrREFBZUQsWUFBZiIsImZpbGUiOiIuL3BhZ2VzL1N0YXRlQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZUNvbnRleHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/StateContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-immer */ \"use-immer\");\n/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_immer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lato-font/css/lato-font.min.css */ \"./node_modules/lato-font/css/lato-font.min.css\");\n/* harmony import */ var lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lato_font_css_lato_font_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _StateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StateContext */ \"./pages/StateContext.js\");\n/* harmony import */ var _DispatchContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DispatchContext */ \"./pages/DispatchContext.js\");\nvar _jsxFileName = \"/home/vusa/Portfolio/Rental-Property-App/pages/_app.js\";\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = process.env.BACKENDURL || \"http://localhost:1337/\";\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: storageItem,\n    1: setStorageItem\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const isLoggedIn = localStorage.getItem(\"loggedIn\");\n    setStorageItem(isLoggedIn);\n  }, []);\n  const initialState = {\n    loggedIn: storageItem,\n    isSearchOpen: false,\n    isChatOpen: false,\n    unreadChatCount: 0,\n    serverStateID: null\n  };\n\n  function ourReducer(draft, action) {\n    switch (action.type) {\n      case \"login\":\n        draft.loggedIn = true;\n        localStorage.setItem(\"loggedIn\", draft.loggedIn);\n        draft.user = action.data;\n        localStorage.setItem(\"user\", draft.user);\n        draft.token = action.token;\n        localStorage.setItem(\"token\", draft.token);\n        draft.userID = action.userID;\n        localStorage.setItem(\"userID\", draft.userID);\n        return;\n\n      case \"logout\":\n        draft.loggedIn = false;\n        localStorage.removeItem(\"loggedIn\");\n        return;\n\n      case \"serverStateID\":\n        draft.serverStateID = action.serverStateID;\n        return;\n\n      case \"tenantPreferencesID\":\n        draft.tenantPreferencesID = action.tenantPreferencesID;\n        return;\n\n      case \"savePageState\":\n        const response = axios__WEBPACK_IMPORTED_MODULE_2___default().put(\"onboarding-states/\" + action.userID, {\n          data: {\n            user: action.userID,\n            route: action.route\n          },\n          headers: {\n            Authorization: \"Bearer \" + action.token\n          }\n        }).then(response => {}).catch(error => {\n          console.log(\"An error occurred:\", error.response);\n        });\n        return;\n    }\n  }\n\n  const [state, dispatch] = (0,use_immer__WEBPACK_IMPORTED_MODULE_1__.useImmerReducer)(ourReducer, initialState);\n  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_StateContext__WEBPACK_IMPORTED_MODULE_6__.default.Provider, {\n    value: state,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }, __jsx(_DispatchContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {\n    value: dispatch,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW50LWJhcmtlci8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJuYW1lcyI6WyJheGlvcyIsInByb2Nlc3MiLCJlbnYiLCJCQUNLRU5EVVJMIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yYWdlSXRlbSIsInNldFN0b3JhZ2VJdGVtIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxTdGF0ZSIsImxvZ2dlZEluIiwiaXNTZWFyY2hPcGVuIiwiaXNDaGF0T3BlbiIsInVucmVhZENoYXRDb3VudCIsInNlcnZlclN0YXRlSUQiLCJvdXJSZWR1Y2VyIiwiZHJhZnQiLCJhY3Rpb24iLCJ0eXBlIiwic2V0SXRlbSIsInVzZXIiLCJkYXRhIiwidG9rZW4iLCJ1c2VySUQiLCJyZW1vdmVJdGVtIiwidGVuYW50UHJlZmVyZW5jZXNJRCIsInJlc3BvbnNlIiwicm91dGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VJbW1lclJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBQSwrREFBQSxHQUF5QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQVosSUFBMEIsd0JBQW5EOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUNBQyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFuQjtBQUNBTCxrQkFBYyxDQUFDRyxVQUFELENBQWQ7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsUUFBTUcsWUFBWSxHQUFHO0FBQ25CQyxZQUFRLEVBQUVSLFdBRFM7QUFFbkJTLGdCQUFZLEVBQUUsS0FGSztBQUduQkMsY0FBVSxFQUFFLEtBSE87QUFJbkJDLG1CQUFlLEVBQUUsQ0FKRTtBQUtuQkMsaUJBQWEsRUFBRTtBQUxJLEdBQXJCOztBQVFBLFdBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQztBQUNqQyxZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxXQUFLLE9BQUw7QUFDRUYsYUFBSyxDQUFDTixRQUFOLEdBQWlCLElBQWpCO0FBQ0FILG9CQUFZLENBQUNZLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNILEtBQUssQ0FBQ04sUUFBdkM7QUFDQU0sYUFBSyxDQUFDSSxJQUFOLEdBQWFILE1BQU0sQ0FBQ0ksSUFBcEI7QUFDQWQsb0JBQVksQ0FBQ1ksT0FBYixDQUFxQixNQUFyQixFQUE2QkgsS0FBSyxDQUFDSSxJQUFuQztBQUNBSixhQUFLLENBQUNNLEtBQU4sR0FBY0wsTUFBTSxDQUFDSyxLQUFyQjtBQUNBZixvQkFBWSxDQUFDWSxPQUFiLENBQXFCLE9BQXJCLEVBQThCSCxLQUFLLENBQUNNLEtBQXBDO0FBQ0FOLGFBQUssQ0FBQ08sTUFBTixHQUFlTixNQUFNLENBQUNNLE1BQXRCO0FBQ0FoQixvQkFBWSxDQUFDWSxPQUFiLENBQXFCLFFBQXJCLEVBQStCSCxLQUFLLENBQUNPLE1BQXJDO0FBQ0E7O0FBQ0YsV0FBSyxRQUFMO0FBQ0VQLGFBQUssQ0FBQ04sUUFBTixHQUFpQixLQUFqQjtBQUNBSCxvQkFBWSxDQUFDaUIsVUFBYixDQUF3QixVQUF4QjtBQUNBOztBQUNGLFdBQUssZUFBTDtBQUNFUixhQUFLLENBQUNGLGFBQU4sR0FBc0JHLE1BQU0sQ0FBQ0gsYUFBN0I7QUFDQTs7QUFDRixXQUFLLHFCQUFMO0FBQ0VFLGFBQUssQ0FBQ1MsbUJBQU4sR0FBNEJSLE1BQU0sQ0FBQ1EsbUJBQW5DO0FBQ0E7O0FBQ0YsV0FBSyxlQUFMO0FBQ0UsY0FBTUMsUUFBUSxHQUFHL0IsZ0RBQUEsQ0FDVix1QkFBdUJzQixNQUFNLENBQUNNLE1BRHBCLEVBQzRCO0FBQ3pDRixjQUFJLEVBQUU7QUFDSkQsZ0JBQUksRUFBRUgsTUFBTSxDQUFDTSxNQURUO0FBRUpJLGlCQUFLLEVBQUVWLE1BQU0sQ0FBQ1U7QUFGVixXQURtQztBQU16Q0MsaUJBQU8sRUFBRTtBQUNQQyx5QkFBYSxFQUFFLFlBQVlaLE1BQU0sQ0FBQ0s7QUFEM0I7QUFOZ0MsU0FENUIsRUFXZFEsSUFYYyxDQVdSSixRQUFELElBQWMsQ0FBRSxDQVhQLEVBWWRLLEtBWmMsQ0FZUEMsS0FBRCxJQUFXO0FBQ2hCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NGLEtBQUssQ0FBQ04sUUFBeEM7QUFDRCxTQWRjLENBQWpCO0FBZUE7QUFyQ0o7QUF1Q0Q7O0FBQ0QsUUFBTSxDQUFDUyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDBEQUFlLENBQUN0QixVQUFELEVBQWFOLFlBQWIsQ0FBekM7QUFFQSxTQUNFLHFFQUNFLE1BQUMsMkRBQUQ7QUFBdUIsU0FBSyxFQUFFMEIsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBMEIsU0FBSyxFQUFFQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVuQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLENBREYsQ0FERjtBQVNEOztBQUVELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJbW1lclJlZHVjZXIgfSBmcm9tIFwidXNlLWltbWVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IFwibGF0by1mb250L2Nzcy9sYXRvLWZvbnQubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uY3NzXCI7XG5cbmltcG9ydCBTdGF0ZUNvbnRleHQgZnJvbSBcIi4vU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgRGlzcGF0Y2hDb250ZXh0IGZyb20gXCIuL0Rpc3BhdGNoQ29udGV4dFwiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuQkFDS0VORFVSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9cIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtzdG9yYWdlSXRlbSwgc2V0U3RvcmFnZUl0ZW1dID0gdXNlU3RhdGUoXCJcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9nZ2VkSW5cIik7XG4gICAgc2V0U3RvcmFnZUl0ZW0oaXNMb2dnZWRJbik7XG4gIH0sIFtdKTtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGxvZ2dlZEluOiBzdG9yYWdlSXRlbSxcbiAgICBpc1NlYXJjaE9wZW46IGZhbHNlLFxuICAgIGlzQ2hhdE9wZW46IGZhbHNlLFxuICAgIHVucmVhZENoYXRDb3VudDogMCxcbiAgICBzZXJ2ZXJTdGF0ZUlEOiBudWxsLFxuICB9O1xuXG4gIGZ1bmN0aW9uIG91clJlZHVjZXIoZHJhZnQsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICBkcmFmdC5sb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9nZ2VkSW5cIiwgZHJhZnQubG9nZ2VkSW4pO1xuICAgICAgICBkcmFmdC51c2VyID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBkcmFmdC51c2VyKTtcbiAgICAgICAgZHJhZnQudG9rZW4gPSBhY3Rpb24udG9rZW47XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgZHJhZnQudG9rZW4pO1xuICAgICAgICBkcmFmdC51c2VySUQgPSBhY3Rpb24udXNlcklEO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJRFwiLCBkcmFmdC51c2VySUQpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwibG9nb3V0XCI6XG4gICAgICAgIGRyYWZ0LmxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9nZ2VkSW5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJzZXJ2ZXJTdGF0ZUlEXCI6XG4gICAgICAgIGRyYWZ0LnNlcnZlclN0YXRlSUQgPSBhY3Rpb24uc2VydmVyU3RhdGVJRDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInRlbmFudFByZWZlcmVuY2VzSURcIjpcbiAgICAgICAgZHJhZnQudGVuYW50UHJlZmVyZW5jZXNJRCA9IGFjdGlvbi50ZW5hbnRQcmVmZXJlbmNlc0lEO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwic2F2ZVBhZ2VTdGF0ZVwiOlxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zXG4gICAgICAgICAgLnB1dChcIm9uYm9hcmRpbmctc3RhdGVzL1wiICsgYWN0aW9uLnVzZXJJRCwge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24udXNlcklELFxuICAgICAgICAgICAgICByb3V0ZTogYWN0aW9uLnJvdXRlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGFjdGlvbi50b2tlbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHt9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3Igb2NjdXJyZWQ6XCIsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUltbWVyUmVkdWNlcihvdXJSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgICAgPERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9EaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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