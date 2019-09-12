webpackHotUpdate("main",{

/***/ "./src/components/Layout/Sitebar.js":
/*!******************************************!*\
  !*** ./src/components/Layout/Sitebar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollbar */ \"./node_modules/react-scrollbar/dist/scrollArea.js\");\n/* harmony import */ var react_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./src/components/Layout/Header.js\");\n/* harmony import */ var RoutesTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! RoutesTree */ \"./src/RoutesTree.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Sitebar =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Sitebar, _Component);\n\n  function Sitebar(props) {\n    var _this;\n\n    _classCallCheck(this, Sitebar);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sitebar).call(this, props));\n    _this.dashboard = _this.dashboard.bind(_assertThisInitialized(_this));\n    _this.elements = _this.elements.bind(_assertThisInitialized(_this));\n    _this.calendarmenu = _this.calendarmenu.bind(_assertThisInitialized(_this));\n    _this.form = _this.form.bind(_assertThisInitialized(_this));\n    _this.sidebarnav = _this.sidebarnav.bind(_assertThisInitialized(_this));\n    _this.table = _this.table.bind(_assertThisInitialized(_this));\n    _this.custompage = _this.custompage.bind(_assertThisInitialized(_this));\n    _this.authentication = _this.authentication.bind(_assertThisInitialized(_this));\n    _this.multilevel = _this.multilevel.bind(_assertThisInitialized(_this));\n    _this.auth = _this.auth.bind(_assertThisInitialized(_this));\n    _this.login = _this.login.bind(_assertThisInitialized(_this));\n    _this.invoice = _this.invoice.bind(_assertThisInitialized(_this));\n    _this.error = _this.error.bind(_assertThisInitialized(_this));\n    _this.state = {\n      dashboard: false,\n      elements: false,\n      calendarmenu: false,\n      form: false,\n      sidebarnav: false,\n      table: false,\n      custompage: false,\n      authentication: false,\n      multilevel: false,\n      auth: false,\n      login: false,\n      invoice: false,\n      error: false,\n      plussignele: false,\n      plussignform: false,\n      plussigndata: false,\n      plussigncustome: false,\n      plussignauthentic: false,\n      plussignmulti: false,\n      plussignauth: false,\n      plussignlogin: false,\n      plussigninvo: false,\n      plussignerror: false\n    };\n    return _this;\n  }\n\n  _createClass(Sitebar, [{\n    key: \"dashboard\",\n    value: function dashboard() {\n      this.setState({\n        dashboard: !this.state.dashboard\n      });\n    }\n  }, {\n    key: \"elements\",\n    value: function elements() {\n      this.setState({\n        elements: !this.state.elements,\n        plussignele: !this.state.plussignele\n      });\n    }\n  }, {\n    key: \"calendarmenu\",\n    value: function calendarmenu() {\n      this.setState({\n        calendarmenu: !this.state.calendarmenu\n      });\n    }\n  }, {\n    key: \"sidebarnav\",\n    value: function sidebarnav() {\n      this.setState({\n        sidebarnav: !this.state.sidebarnav\n      });\n    }\n  }, {\n    key: \"form\",\n    value: function form() {\n      this.setState({\n        form: !this.state.form,\n        plussignform: !this.state.plussignform\n      });\n    }\n  }, {\n    key: \"table\",\n    value: function table() {\n      this.setState({\n        table: !this.state.table,\n        plussigndata: !this.state.plussigndata\n      });\n    }\n  }, {\n    key: \"custompage\",\n    value: function custompage() {\n      this.setState({\n        custompage: !this.state.custompage,\n        plussigncustome: !this.state.plussigncustome\n      });\n    }\n  }, {\n    key: \"authentication\",\n    value: function authentication() {\n      this.setState({\n        authentication: !this.state.authentication,\n        plussignauthentic: !this.state.plussignauthentic\n      });\n    }\n  }, {\n    key: \"multilevel\",\n    value: function multilevel() {\n      this.setState({\n        multilevel: !this.state.multilevel,\n        plussignmulti: !this.state.plussignmulti\n      });\n    }\n  }, {\n    key: \"auth\",\n    value: function auth() {\n      this.setState({\n        auth: !this.state.auth,\n        plussignauth: !this.state.plussignauth\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login() {\n      this.setState({\n        login: !this.state.login,\n        plussignlogin: !this.state.plussignlogin\n      });\n    }\n  }, {\n    key: \"invoice\",\n    value: function invoice() {\n      this.setState({\n        invoice: !this.state.invoice,\n        plussigninvo: !this.state.plussigninvo\n      });\n    }\n  }, {\n    key: \"error\",\n    value: function error() {\n      this.setState({\n        error: !this.state.error,\n        plussignerror: !this.state.plussignerror\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var menuExt = RoutesTree__WEBPACK_IMPORTED_MODULE_5__[\"default\"].map(function (menuItem) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: menuItem.id\n        }, menuItem.id);\n      });\n      return (// <!-- Left Sidebar start-->\n        //  <Collapse isOpen={this.props.toggerbutton}>\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"side-menu-fixed\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          speed: 0.6,\n          style: {\n            overflow: 'hidden'\n          },\n          className: \"scrollbar side-menu-bg\",\n          contentClassName: \"saidbar\",\n          horizontal: false\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"saidbar\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          className: \"nav navbar-nav side-menu\",\n          id: \"sidebarnav\"\n        }, menuExt, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"active\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-home\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Dashboard\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"mt-10 mb-10 text-muted pl-4 font-medium menu-title\"\n        }, \"Components \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.elements,\n          \"aria-expanded\": this.state.plussignele ? \"true\" : \"false\",\n          className: this.state.plussignele ? \"link\" : \" link collapsed\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-left\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-palette\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Elements\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.elements\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          id: \"elements\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/accordion\"\n        }, \"Accordions\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/alerts\"\n        }, \"Alerts\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/buttons\"\n        }, \"Button\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/colors\"\n        }, \"Colorpicker\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/dropdown\"\n        }, \"Dropdown\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/lists\"\n        }, \"Lists\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/navs\"\n        }, \"Nav\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/modal\"\n        }, \"Modal\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/nicescroll\"\n        }, \"Nicescroll\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/ratings\"\n        }, \"Ratings\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/datepicker\"\n        }, \"Date picker\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/tabs\"\n        }, \"Tabs\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/typographys\"\n        }, \"Typography\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/popover_tooltips\"\n        }, \"Popover tooltips\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/progess\"\n        }, \"Progress\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/switchs\"\n        }, \"Switch\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./chat\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-comments\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Chat \"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./mailbox\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-email\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Mail box\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"badge badge-pill badge-warning float-right mt-1\"\n        }, \"HOT\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./eventcalendar\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-calendar\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Events Calendar\"), \" \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/chartjs\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-pie-chart\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Charts\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./fontawesome\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-home\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Font Awesome\"), \" \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"mt-10 mb-10 text-muted pl-4 font-medium menu-title\"\n        }, \"Widgets, Forms & Tables \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/widget\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-blackboard\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Widgets\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"badge badge-pill badge-danger float-right mt-1\"\n        }, \"24\"), \" \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.form,\n          \"aria-expanded\": this.state.plussignform ? \"true\" : \"false\",\n          className: this.state.plussignform ? \"link\" : \" link collapsed\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-left\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-files\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Form & Editor\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.form\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          id: \"Form\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/form/input\"\n        }, \"Form input\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/form/validation\"\n        }, \"form validation\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/inputgroup\"\n        }, \"input group\"), \" \")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.table,\n          \"aria-expanded\": this.state.plussigndata ? \"true\" : \"false\",\n          className: this.state.plussigndata ? \"link\" : \" link collapsed\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-left\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-layout-tab-window\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"data table\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.table\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          id: \"table\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/datatable\"\n        }, \"Data html table\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/tables\"\n        }, \"Data table\"), \" \")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          className: \"mt-10 mb-10 text-muted pl-4 font-medium menu-title\"\n        }, \"More Pages\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.custompage,\n          \"aria-expanded\": this.state.plussigncustome ? \"true\" : \"false\",\n          className: this.state.plussigncustome ? \"link\" : \" link collapsed\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-left\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-file\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Custom pages\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.custompage\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          id: \"custom-page\",\n          \"data-parent\": \"#sidebarnav\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./contacts\"\n        }, \"Contact\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./invoice\"\n        }, \"Invoice\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./blankpage\"\n        }, \"Blank Page\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./error\"\n        }, \"Error\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"./faq\"\n        }, \"faqs\"), \" \")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.authentication,\n          \"aria-expanded\": this.state.plussignauthentic ? \"true\" : \"false\",\n          className: this.state.plussignauthentic ? \"link\" : \" link collapsed\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-left\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-id-badge\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Authentication\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.authentication\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          id: \"authentication\",\n          \"data-parent\": \"#sidebarnav\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/login\"\n        }, \"login\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/register\"\n        }, \"register\"), \" \")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/maps\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-location-pin\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"maps\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"badge badge-pill badge-success float-right mt-1\"\n        }, \"02\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.multilevel,\n          \"aria-expanded\": this.state.plussignmulti ? \"true\" : \"false\",\n          className: this.state.plussignmulti ? \"link\" : \"link collapsed\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-left\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-layers\"\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"right-nav-text\"\n        }, \"Multi level Menu\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.multilevel\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.auth,\n          \"aria-expanded\": this.state.plussignauth ? \"true\" : \"false\",\n          className: this.state.plussignauth ? \"link\" : \" link collapsed\"\n        }, \"Level item 1\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.auth\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.login,\n          \"aria-expanded\": this.state.plussignlogin ? \"true\" : \"false\",\n          className: this.state.plussignlogin ? \"link\" : \" link collapsed\"\n        }, \"Level item 1.1\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.login\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.invoice,\n          \"aria-expanded\": this.state.plussigninvo ? \"true\" : \"false\",\n          className: this.state.plussigninvo ? \"link\" : \" link collapsed\"\n        }, \"level item 1.1.1\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.invoice\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/\"\n        }, \"level item 1.1.1.1\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/\"\n        }, \"level item 1.1.1.2\"), \" \")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/\"\n        }, \"level item 1.2\"), \" \"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          onClick: this.error,\n          \"aria-expanded\": this.state.plussignerror ? \"true\" : \"false\",\n          className: this.state.plussignerror ? \"link\" : \" link collapsed\"\n        }, \"level item 2\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"pull-right\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"ti-plus\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"clearfix\"\n        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__[\"Collapse\"], {\n          isOpen: this.state.error\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/\"\n        }, \"level item 2.1\"), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n          to: \"/\"\n        }, \"level item 2.2\"), \" \"))))))))))) // </Collapse>\n\n      );\n    }\n  }]);\n\n  return Sitebar;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sitebar);\n\n//# sourceURL=webpack:///./src/components/Layout/Sitebar.js?");

/***/ })

})