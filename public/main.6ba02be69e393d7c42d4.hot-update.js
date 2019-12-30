webpackHotUpdate("main",{

/***/ "./src/components/Layout/MenuItem.js":
/*!*******************************************!*\
  !*** ./src/components/Layout/MenuItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollbar */ \"./node_modules/react-scrollbar/dist/scrollArea.js\");\n/* harmony import */ var react_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar MenuItem =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MenuItem, _Component);\n\n  function MenuItem() {\n    _classCallCheck(this, MenuItem);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).apply(this, arguments));\n  }\n\n  _createClass(MenuItem, [{\n    key: \"isActive\",\n    value: function isActive(id) {\n      var pathId = location.pathname || 'home';\n      return !!pathId.match(\"^/\".concat(this.props.id));\n    }\n  }, {\n    key: \"toggleMenu\",\n    value: function toggleMenu() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.info('MenuItem::isActive: ', location.pathname, this.props);\n      var content;\n      var icon;\n      var text = this.props.id;\n\n      if (!!this.props.icon) {\n        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-home\"\n        });\n        text = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, this.props.id);\n      }\n\n      if (!!this.props.link) {\n        content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: this.props.link\n        }, icon, text);\n      } else if (!!this.props.children) {\n        content = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.toggleMenu,\n          \"aria-expanded\": this.isActive(this.props.id) ? \"true\" : \"false\",\n          className: this.isActive(this.props.id) ? \"link\" : \" link collapsed\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-left\"\n        }, icon, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        }))];\n      } else {\n        content = this.props.id;\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: this.props.id,\n        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({\n          active: this.isActive(this.props.id)\n        })\n      }, content);\n    }\n  }]);\n\n  return MenuItem;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuItem);\n\n//# sourceURL=webpack:///./src/components/Layout/MenuItem.js?");

/***/ })

})