webpackHotUpdate("main",{

/***/ "./src/Routers.js":
/*!************************!*\
  !*** ./src/Routers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _components_Layout_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout/Base */ \"./src/components/Layout/Base.js\");\n/* harmony import */ var _components_Layout_Basepages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Layout/Basepages */ \"./src/components/Layout/Basepages.js\");\n/* harmony import */ var RoutesMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! RoutesMap */ \"./src/RoutesMap.js\");\n/* harmony import */ var _components_Authentication_Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Authentication/Login/Login */ \"./src/components/Authentication/Login/Login.js\");\n/* harmony import */ var _components_Authentication_Register_Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Authentication/Register/Register */ \"./src/components/Authentication/Register/Register.js\");\n\n\n\n\n\n\n\nvar listofPages = ['/login', '/register'];\n\nvar Routers = function Routers() {\n  if (listofPages.indexOf(location.hash) > -1) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Basepages__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/login\",\n      component: _components_Authentication_Login_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/register\",\n      component: _components_Authentication_Register_Register__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }));\n  } else {\n    var routesExt = Object.keys(RoutesMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).map(function (path, idx) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        key: idx,\n        path: \"/\".concat(path),\n        component: RoutesMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"][path]\n      });\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Base__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      path: location.pathname\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/\",\n      component: RoutesMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dashboard\n    }), routesExt, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      component: RoutesMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error\n    })));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routers);\n\n//# sourceURL=webpack:///./src/Routers.js?");

/***/ })

})