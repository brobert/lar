webpackHotUpdate("main",{

/***/ "./src/RoutesMap.js":
/*!**************************!*\
  !*** ./src/RoutesMap.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var components_Elements_Alert_Alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Elements/Alert/Alerts */ \"./src/components/Elements/Alert/Alerts.js\");\n/* harmony import */ var components_Elements_Button_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Elements/Button/Buttons */ \"./src/components/Elements/Button/Buttons.js\");\n/* harmony import */ var components_Elements_Color_Colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Elements/Color/Colors */ \"./src/components/Elements/Color/Colors.js\");\n/* harmony import */ var components_Elements_Dropdown_Dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Elements/Dropdown/Dropdowns */ \"./src/components/Elements/Dropdown/Dropdowns.js\");\n/* harmony import */ var components_Elements_Typographys_Typographys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Elements/Typographys/Typographys */ \"./src/components/Elements/Typographys/Typographys.js\");\n/* harmony import */ var components_Elements_Navs_Navs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Elements/Navs/Navs */ \"./src/components/Elements/Navs/Navs.js\");\n/* harmony import */ var components_Elements_Modal_Modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Elements/Modal/Modals */ \"./src/components/Elements/Modal/Modals.js\");\n/* harmony import */ var components_Fontawesome_Fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Fontawesome/Fontawesome */ \"./src/components/Fontawesome/Fontawesome.js\");\n/* harmony import */ var _components_Elements_Switchs_Switchs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Elements/Switchs/Switchs */ \"./src/components/Elements/Switchs/Switchs.js\");\n/* harmony import */ var _components_Elements_Lists_Lists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Elements/Lists/Lists */ \"./src/components/Elements/Lists/Lists.js\");\n/* harmony import */ var _components_Elements_Ratings_Ratings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Elements/Ratings/Ratings */ \"./src/components/Elements/Ratings/Ratings.js\");\n/* harmony import */ var _components_Elements_Nicescroll_nicescroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Elements/Nicescroll/nicescroll */ \"./src/components/Elements/Nicescroll/nicescroll.js\");\n/* harmony import */ var _components_Elements_Tabs_Tabss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Elements/Tabs/Tabss */ \"./src/components/Elements/Tabs/Tabss.js\");\n/* harmony import */ var _components_Elements_Progress_Progressbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Elements/Progress/Progressbar */ \"./src/components/Elements/Progress/Progressbar.js\");\n/* harmony import */ var _components_Elements_Popover_Tooltips_Popover_Tooltips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Elements/Popover_Tooltips/Popover_Tooltips */ \"./src/components/Elements/Popover_Tooltips/Popover_Tooltips.js\");\n/* harmony import */ var _components_Elements_Datepicker_Datepickers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Elements/Datepicker/Datepickers */ \"./src/components/Elements/Datepicker/Datepickers.js\");\n/* harmony import */ var _components_Maps_Maps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Maps/Maps */ \"./src/components/Maps/Maps.js\");\n/* harmony import */ var _components_Elements_Accordion_Accordions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Elements/Accordion/Accordions */ \"./src/components/Elements/Accordion/Accordions.js\");\n/* harmony import */ var _components_Chart_Chartjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Chart/Chartjs */ \"./src/components/Chart/Chartjs.js\");\n/* harmony import */ var _components_Tables_Datatables_Datatables__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Tables/Datatables/Datatables */ \"./src/components/Tables/Datatables/Datatables.js\");\n/* harmony import */ var _components_Tables_Tables_Tables__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Tables/Tables/Tables */ \"./src/components/Tables/Tables/Tables.js\");\n/* harmony import */ var _components_Forms_Forminput_Forminputs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/Forms/Forminput/Forminputs */ \"./src/components/Forms/Forminput/Forminputs.js\");\n/* harmony import */ var _components_Forms_Formvalidation_Formvalidations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/Forms/Formvalidation/Formvalidations */ \"./src/components/Forms/Formvalidation/Formvalidations.js\");\n/* harmony import */ var _components_Custompage_Error_Errors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/Custompage/Error/Errors */ \"./src/components/Custompage/Error/Errors.js\");\n/* harmony import */ var _components_Forms_Inputgroup_Inputgroups__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/Forms/Inputgroup/Inputgroups */ \"./src/components/Forms/Inputgroup/Inputgroups.js\");\n/* harmony import */ var _components_Calendar_Eventcalendar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/Calendar/Eventcalendar */ \"./src/components/Calendar/Eventcalendar.js\");\n/* harmony import */ var _components_Custompage_Blankpage_Blankpage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/Custompage/Blankpage/Blankpage */ \"./src/components/Custompage/Blankpage/Blankpage.js\");\n/* harmony import */ var _components_Custompage_Faq_Faq__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/Custompage/Faq/Faq */ \"./src/components/Custompage/Faq/Faq.js\");\n/* harmony import */ var _components_Custompage_Contacts_Contacts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/Custompage/Contacts/Contacts */ \"./src/components/Custompage/Contacts/Contacts.js\");\n/* harmony import */ var _components_Custompage_Invoice_Invoice__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/Custompage/Invoice/Invoice */ \"./src/components/Custompage/Invoice/Invoice.js\");\n/* harmony import */ var _components_Widgets_Widgets__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/Widgets/Widgets */ \"./src/components/Widgets/Widgets.js\");\n/* harmony import */ var _components_Chat_Chat__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/Chat/Chat */ \"./src/components/Chat/Chat.js\");\n/* harmony import */ var _components_MailBox_Mailbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/MailBox/Mailbox */ \"./src/components/MailBox/Mailbox.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar mapPath2Components = {\n  'accordion': _components_Elements_Accordion_Accordions__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  'alerts': components_Elements_Alert_Alerts__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'buttons': components_Elements_Button_Buttons__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'chartjs': _components_Chart_Chartjs__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  'colors': components_Elements_Color_Colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'datatable': _components_Tables_Datatables_Datatables__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  'datepicker': _components_Elements_Datepicker_Datepickers__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  'dropdown': components_Elements_Dropdown_Dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'fontawesome': components_Fontawesome_Fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  'form/input': _components_Forms_Forminput_Forminputs__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  'form/validation': _components_Forms_Formvalidation_Formvalidations__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  'lists': _components_Elements_Lists_Lists__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  'maps': _components_Maps_Maps__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  'inputgroup': _components_Forms_Inputgroup_Inputgroups__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  'modal': components_Elements_Modal_Modals__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'navs': components_Elements_Navs_Navs__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'nicescroll': _components_Elements_Nicescroll_nicescroll__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  'popover_tooltips': _components_Elements_Popover_Tooltips_Popover_Tooltips__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  'progess': _components_Elements_Progress_Progressbar__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  'ratings': _components_Elements_Ratings_Ratings__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  'switchs': _components_Elements_Switchs_Switchs__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  'tables': _components_Tables_Tables_Tables__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  'tabs': _components_Elements_Tabs_Tabss__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  'typographys': components_Elements_Typographys_Typographys__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'error': _components_Custompage_Error_Errors__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  'eventcalendar': _components_Calendar_Eventcalendar__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  'blankpage': _components_Custompage_Blankpage_Blankpage__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  'faq': _components_Custompage_Faq_Faq__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n  'contacts': _components_Custompage_Contacts_Contacts__WEBPACK_IMPORTED_MODULE_28__[\"default\"],\n  'invoice': _components_Custompage_Invoice_Invoice__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n  'widget': _components_Widgets_Widgets__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n  'chat': _components_Chat_Chat__WEBPACK_IMPORTED_MODULE_31__[\"default\"],\n  'mailbox': _components_MailBox_Mailbox__WEBPACK_IMPORTED_MODULE_32__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mapPath2Components);\n\n//# sourceURL=webpack:///./src/RoutesMap.js?");

/***/ })

})