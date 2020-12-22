/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/resources/styles/index.css":
/*!******************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./src/resources/styles/index.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    /* border: 0 */\r\n}\r\n\r\n:root {\r\n    --main-color: #db4c3f;\r\n    --hover: #d8d8d8;\r\n    --add-disabled: #f4cac6;\r\n    --medium-priority: orange;\r\n    --high-priority: #990000;\r\n    --input-color:  #f1f1f1;\r\n    --plain-red: red;\r\n    --overlay-color:  rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n}\r\n\r\n#todo-app {\r\n    display: grid;\r\n    grid-template-columns: .5fr 4fr;\r\n    grid-template-rows: auto 1fr;\r\n    height: 100vh;\r\n\r\n}\r\n\r\n.task-tab > h1 {\r\n    text-align: center;\r\n}\r\n\r\n.project-tab {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.header {\r\n    grid-column: 1/4;\r\n    background-color:var(--main-color);\r\n    color: white;\r\n    /* text-align: center; */\r\n    padding: 5px 5px 5px 20px;\r\n}\r\n\r\n.project-header > h1, .task-tab> h1{\r\n    padding: 5px 15px 5px 20px;\r\n}\r\n\r\n.form {\r\n    /* display: none; */\r\n    /* need to float / center it on page as well as add \"container to make opacity\" */\r\n    /* position: fixed;\r\n    bottom: 0;\r\n    right: 15px; */\r\n    width: 400px;\r\n    border-radius: 4px;\r\n    /* temporary , delete later */\r\n    margin: 10px;\r\n    text-align: center;\r\n    background-color: white;\r\n    z-index: 9;\r\n\r\n    /* center in screen */\r\n    position: fixed;\r\n    align-self: center;\r\n    left: 50%;\r\n    top: 25%;\r\n    bottom: auto;\r\n    right: auto;\r\n    transform: translate(-50%, -50%);\r\n\r\n  }\r\n\r\n  .form-container {\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .form-body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* border: 3px solid #f1f1f1; */\r\n    text-align: left;\r\n  }\r\n\r\n  .form-container input[type=text] {\r\n        padding: 15px;\r\n        margin: 5px 0 22px 0;\r\n        border: none;\r\n        background:var(--input-color);\r\n  }\r\n\r\n  .button {\r\n      padding: 6px 12px;\r\n      border: 3px;\r\n      border-radius: 4px;\r\n      margin: 10px 0 10px 10px;\r\n  }\r\n  \r\n  .add {\r\n      background-color: var(--plain-red);\r\n      color: white;\r\n  }\r\n\r\n  .add:disabled {\r\n    background-color:var(--add-disabled);\r\n  }\r\n\r\n  .form-header {\r\n      padding: 10px;\r\n      border-bottom: 1px solid black;\r\n\r\n  }\r\n\r\n  .form-footer {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      border-top: 1px solid black;\r\n      padding: 5px 20px\r\n\r\n}\r\n\r\n.dialog-overlay {\r\n    background-color:var(--overlay-color);\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.plus {\r\n    margin: 0 2px;\r\n    padding: 0 4.5px;\r\n}\r\n\r\n.project-actions {\r\n    display: inline-block;\r\n}\r\n\r\n.action {\r\n    display: flex;\r\n    justify-items: center;\r\n}\r\n\r\n.action:hover > p {\r\n    color: var(--plain-red);\r\n    text-align: center;\r\n}\r\n\r\n.action:hover > .plus {\r\n    background-color: var(--plain-red);\r\n    border-radius: 50%;\r\n    color: white;\r\n}\r\n\r\n.projects {\r\n    padding: 15px 0 15px 20px;\r\n}\r\n\r\n.todo-list {\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 70%;\r\n    margin: auto;\r\n    padding-top: 10px;\r\n}\r\n\r\n.todo-li {\r\n    border-top: 1px solid black;\r\n    width: 100%;\r\n}\r\n\r\n.todo-list > ul {\r\n    border-bottom: 1px solid black\r\n\r\n}\r\n\r\n.todo-item {\r\n    display: grid;\r\n    grid-template-columns: 40px auto 150px 30px;\r\n}\r\n\r\n.todo-item > div, input[type='checkbox'] {\r\n    margin: 10px;\r\n    /* width: 200px; */\r\n}\r\n\r\ninput[type='checkbox'] {\r\n    width: 1.5em;\r\n    height: 1.5em;\r\n}\r\n\r\n.todo-form {\r\n    background-color: white;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n}\r\n\r\n.todo-footer > .button {\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.todo-footer {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.todo-container {\r\n    padding: 10px 20px 0;\r\n}\r\n\r\n.todo-container input[type=text] {\r\n    border: none;\r\n    width: 100%;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    outline:none;\r\n} \r\n\r\nselect, input[type=\"date\"] {\r\n    height: 24px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.project-counter {\r\n    padding-left: 10px;\r\n    font-weight: 200;\r\n    font-size: .85em;\r\n    grid-area: 'count';\r\n}\r\n\r\n/* .deleted-scale {\r\n    transition: transform .3s ease-out;\r\n    transform: scale(1.02);\r\n}\r\n\r\n.deleted {\r\n    transition: transform .2s ease-out;\r\n    transform: scale(0);\r\n} */\r\n\r\n.todo-item > input[type=checkbox]:checked ~ div {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.project-item {\r\n    display: grid;\r\n    grid-template-columns: 1fr minmax(23px, auto);\r\n}\r\n\r\n.project-item > .la-trash {\r\n    display: none;\r\n    float: right;\r\n    color: var(--plain-red);\r\n    box-sizing: border-box;\r\n    text-align: end;\r\n\r\n}\r\n\r\n.project-item:hover > .la-trash {\r\n    display: inline-block;\r\n}\r\n\r\n.project-item:hover {\r\n    background-color: var(--hover);\r\n    margin-left: -20px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.active {\r\n    font-weight: bold;\r\n}\r\n\r\n.action-li {\r\n    width: 777px;\r\n    padding: 0 20px 0 3px;\r\n    margin: 10px 0 20px;\r\n    box-sizing: content-box;\r\n}\r\n\r\n.medium {\r\n    color: orange;\r\n}\r\n\r\n.high {\r\n    color: #990000;\r\n}", "",{"version":3,"sources":["webpack://./src/resources/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    /* border: 0 */\r\n}\r\n\r\n:root {\r\n    --main-color: #db4c3f;\r\n    --hover: #d8d8d8;\r\n    --add-disabled: #f4cac6;\r\n    --medium-priority: orange;\r\n    --high-priority: #990000;\r\n    --input-color:  #f1f1f1;\r\n    --plain-red: red;\r\n    --overlay-color:  rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n}\r\n\r\n#todo-app {\r\n    display: grid;\r\n    grid-template-columns: .5fr 4fr;\r\n    grid-template-rows: auto 1fr;\r\n    height: 100vh;\r\n\r\n}\r\n\r\n.task-tab > h1 {\r\n    text-align: center;\r\n}\r\n\r\n.project-tab {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.header {\r\n    grid-column: 1/4;\r\n    background-color:var(--main-color);\r\n    color: white;\r\n    /* text-align: center; */\r\n    padding: 5px 5px 5px 20px;\r\n}\r\n\r\n.project-header > h1, .task-tab> h1{\r\n    padding: 5px 15px 5px 20px;\r\n}\r\n\r\n.form {\r\n    /* display: none; */\r\n    /* need to float / center it on page as well as add \"container to make opacity\" */\r\n    /* position: fixed;\r\n    bottom: 0;\r\n    right: 15px; */\r\n    width: 400px;\r\n    border-radius: 4px;\r\n    /* temporary , delete later */\r\n    margin: 10px;\r\n    text-align: center;\r\n    background-color: white;\r\n    z-index: 9;\r\n\r\n    /* center in screen */\r\n    position: fixed;\r\n    align-self: center;\r\n    left: 50%;\r\n    top: 25%;\r\n    bottom: auto;\r\n    right: auto;\r\n    transform: translate(-50%, -50%);\r\n\r\n  }\r\n\r\n  .form-container {\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .form-body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* border: 3px solid #f1f1f1; */\r\n    text-align: left;\r\n  }\r\n\r\n  .form-container input[type=text] {\r\n        padding: 15px;\r\n        margin: 5px 0 22px 0;\r\n        border: none;\r\n        background:var(--input-color);\r\n  }\r\n\r\n  .button {\r\n      padding: 6px 12px;\r\n      border: 3px;\r\n      border-radius: 4px;\r\n      margin: 10px 0 10px 10px;\r\n  }\r\n  \r\n  .add {\r\n      background-color: var(--plain-red);\r\n      color: white;\r\n  }\r\n\r\n  .add:disabled {\r\n    background-color:var(--add-disabled);\r\n  }\r\n\r\n  .form-header {\r\n      padding: 10px;\r\n      border-bottom: 1px solid black;\r\n\r\n  }\r\n\r\n  .form-footer {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      border-top: 1px solid black;\r\n      padding: 5px 20px\r\n\r\n}\r\n\r\n.dialog-overlay {\r\n    background-color:var(--overlay-color);\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.plus {\r\n    margin: 0 2px;\r\n    padding: 0 4.5px;\r\n}\r\n\r\n.project-actions {\r\n    display: inline-block;\r\n}\r\n\r\n.action {\r\n    display: flex;\r\n    justify-items: center;\r\n}\r\n\r\n.action:hover > p {\r\n    color: var(--plain-red);\r\n    text-align: center;\r\n}\r\n\r\n.action:hover > .plus {\r\n    background-color: var(--plain-red);\r\n    border-radius: 50%;\r\n    color: white;\r\n}\r\n\r\n.projects {\r\n    padding: 15px 0 15px 20px;\r\n}\r\n\r\n.todo-list {\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 70%;\r\n    margin: auto;\r\n    padding-top: 10px;\r\n}\r\n\r\n.todo-li {\r\n    border-top: 1px solid black;\r\n    width: 100%;\r\n}\r\n\r\n.todo-list > ul {\r\n    border-bottom: 1px solid black\r\n\r\n}\r\n\r\n.todo-item {\r\n    display: grid;\r\n    grid-template-columns: 40px auto 150px 30px;\r\n}\r\n\r\n.todo-item > div, input[type='checkbox'] {\r\n    margin: 10px;\r\n    /* width: 200px; */\r\n}\r\n\r\ninput[type='checkbox'] {\r\n    width: 1.5em;\r\n    height: 1.5em;\r\n}\r\n\r\n.todo-form {\r\n    background-color: white;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n}\r\n\r\n.todo-footer > .button {\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.todo-footer {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.todo-container {\r\n    padding: 10px 20px 0;\r\n}\r\n\r\n.todo-container input[type=text] {\r\n    border: none;\r\n    width: 100%;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    outline:none;\r\n} \r\n\r\nselect, input[type=\"date\"] {\r\n    height: 24px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.project-counter {\r\n    padding-left: 10px;\r\n    font-weight: 200;\r\n    font-size: .85em;\r\n    grid-area: 'count';\r\n}\r\n\r\n/* .deleted-scale {\r\n    transition: transform .3s ease-out;\r\n    transform: scale(1.02);\r\n}\r\n\r\n.deleted {\r\n    transition: transform .2s ease-out;\r\n    transform: scale(0);\r\n} */\r\n\r\n.todo-item > input[type=checkbox]:checked ~ div {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.project-item {\r\n    display: grid;\r\n    grid-template-columns: 1fr minmax(23px, auto);\r\n}\r\n\r\n.project-item > .la-trash {\r\n    display: none;\r\n    float: right;\r\n    color: var(--plain-red);\r\n    box-sizing: border-box;\r\n    text-align: end;\r\n\r\n}\r\n\r\n.project-item:hover > .la-trash {\r\n    display: inline-block;\r\n}\r\n\r\n.project-item:hover {\r\n    background-color: var(--hover);\r\n    margin-left: -20px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.active {\r\n    font-weight: bold;\r\n}\r\n\r\n.action-li {\r\n    width: 777px;\r\n    padding: 0 20px 0 3px;\r\n    margin: 10px 0 20px;\r\n    box-sizing: content-box;\r\n}\r\n\r\n.medium {\r\n    color: orange;\r\n}\r\n\r\n.high {\r\n    color: #990000;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/resources/styles/index.css":
/*!****************************************!*
  !*** ./src/resources/styles/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/resources/styles/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/forms */ "./src/scripts/forms.js");
/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/utils */ "./src/scripts/utils.js");
/* harmony import */ var _scripts_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/objects */ "./src/scripts/objects.js");
/* harmony import */ var _resources_styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/styles/index.css */ "./src/resources/styles/index.css");
/* eslint-disable no-use-before-define */





const displayController = (() => {
    const _projectItemLayout = (name, count, key) => {
        const li = document.createElement('li')
        const button = document.createElement('i')
        const div = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.divFactory)('project-item')
        const projectName = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(name, 'span')
        const counter = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(count, 'span')
        const textDiv = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.divFactory)('text')
        button.value = key
        button.classList.add('las', 'la-trash')
        li.classList.add('project-li')
        counter.classList.add('project-counter')

        textDiv.appendChild(projectName)
        textDiv.appendChild(counter)
        div.appendChild(textDiv)
        div.appendChild(button)
        li.appendChild(div)

        return li
    }

    const _todoLayout = (description, dueDate, priority) => {
        const li = document.createElement('li')
        li.classList.add('todo-li')
        const div = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.divFactory)('todo-item')
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const desc = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(description, 'div')
        const date = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(dueDate, 'div')
        const pri = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(_repeatPriority(priority), 'div')

        const priorityClass = ['low', 'medium', 'high']
        pri.classList.add(priorityClass[priority])

        div.appendChild(checkbox)
        div.appendChild(desc)
        div.appendChild(date)
        div.appendChild(pri)
        li.appendChild(div)

        return li
    }

    const _repeatPriority = (num) => {
        if (num > 0) {
            return '!'.repeat(num)
        }
        return ''
    }

    const _clearChildNodesOf = (node) => {
        while (node.firstElementChild) {
            node.firstElementChild.remove()
        }
    }

    const _setActiveProject = (key) => {
        const projectsItems = document.querySelectorAll('.project-li')
        const newActiveProject = document.querySelector(
            `li[data-project-key='${key}']`
        )
        projectsItems.forEach((project) => {
            if (project.classList.contains('active')) {
                project.classList.remove('active')
            }
        })

        newActiveProject.classList.add('active')
    }

    const _drawAddActions = (title) => {
        const parent = document.createElement('li')
        parent.classList.add('action-li')
        parent.innerHTML = `<div class="action add-todo">
                    <p class="plus">+</p>
                    <p>${title}</p>
                </div>`

        return parent
    }

    const _updateTaskHeader = (project) => {
        const header = document.querySelector('.task-tab > h1')
        header.innerHTML = project
    }

    const _projectFormEventListeners = () => {}

    const _addTaskListener = () => {
        const addButton = document.querySelector('.add-todo')
        addButton.addEventListener('click', handleAddTask)
    }

    const _currentTaskValues = (key) => {
        const parentKey = document.querySelector('.todo-list').dataset
            .currentProject
        const taskObject = projectController
            .listProjectItems(parentKey)
            [key].unpackItems()

        return taskObject
    }

    const drawProjectForm = () => {
        const parent = document.querySelector('body')
        const overlay = document.createElement('div')
        overlay.classList.add('dialog-overlay')
        overlay.dataset.overlay = true

        parent.insertAdjacentElement('afterbegin', overlay)
        overlay.appendChild((0,_scripts_forms__WEBPACK_IMPORTED_MODULE_0__.generateProjectForm)())

        // was in the _projectFormEventListeners
        eventListenerController.addForEach(
            '.project-form button',
            'click',
            handleProjectForm
        )
        eventListenerController.add(
            '.dialog-overlay',
            'click',
            handleProjectForm
        )
    }

    const drawTaskForm = (instigator) => {
        const parent = instigator
        const { itemKey } = parent.dataset
        // const taskObject = _currentTaskValues(itemKey)

        _clearChildNodesOf(parent)
        parent.append((0,_scripts_forms__WEBPACK_IMPORTED_MODULE_0__.generateTaskForm)())

        if (instigator.dataset.itemKey) {
            const taskObject = _currentTaskValues(itemKey)
            const title = document.querySelector('.todo-container > .task')
            const date = document.querySelector(
                '.form-container > input[type=date]'
            )
            const priority = document.querySelector('.form-container > select')
            // https://www.w3schools.com/jsref/dom_obj_select.asp
            title.value = taskObject.description
            date.value = taskObject.dueDate
            priority.selectedIndex = taskObject.priority
        }

        eventListenerController.addForEach(
            '.todo-footer button',
            'click',
            handleTaskForm
        )
    }

    const drawProjects = () => {
        const parent = document.querySelector('.projects')
        _clearChildNodesOf(parent)
        const array = projectController.listProjects()
        const projectList = document.createElement('ul')
        let counter = 0

        array.forEach((object) => {
            const li = _projectItemLayout(
                object.title(),
                object.getItems().length,
                counter
            )
            li.dataset.projectKey = counter
            projectList.appendChild(li)
            counter += 1
        })

        parent.appendChild(projectList)
    }

    const drawProjectToDos = (key) => {
        const parent = document.querySelector('.todo-list')
        parent.dataset.currentProject = key
        _clearChildNodesOf(parent)
        if (key === false) return
        const array = projectController.listProjectItems(key)
        const list = document.createElement('ul')
        list.appendChild(_drawAddActions('Add Task'))
        let counter = 0

        array.forEach((object) => {
            const li = _todoLayout(
                object.description(),
                object.dueDate(),
                object.priority()
            )
            li.dataset.itemKey = counter
            list.appendChild(li)
            counter += 1
        })

        parent.appendChild(list)
        _updateTaskHeader(projectController.projectTitle(key))
        _setActiveProject(key)
        _addTaskListener()
    }

    const closeForm = () => {
        const overlay = document.querySelector('.dialog-overlay')
        overlay.remove()
    }

    return {
        drawProjectForm,
        drawProjects,
        drawProjectToDos,
        closeForm,
        drawTaskForm,
    }
})()

const projectController = (() => {
    const projectList = []

    const _unpack = () => {
        const unpacked = projectList.map((project) => project.unpackProjects())
        return unpacked
    }

    const _save = () => {
        storageController.saveToLocalStorage(_unpack())
    }

    const _loadFromStorage = () => {}

    const listProjectItems = (key) => projectList[key].getItems()

    const projectTitle = (key) => projectList[key].title()

    const listProjects = () => projectList

    const numberOfProjects = () => projectList.length

    const welcomeProject = () => {
        const welcome = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)('Welcome!', '')
        const welcomeTask = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)(
            '',
            'Your First Task! Click the checkbox to complete me',
            '',
            2
        )

        welcome.addItem(welcomeTask)
        projectList.push(welcome)
        displayController.drawProjects()
        displayController.drawProjectToDos(0)
    }

    const initialProjectLoad = (savedProjects) => {
        // projectList = [...savedProjects];
        savedProjects.forEach((project) => {
            const projectI = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)(project.title, project.description)
            project.unpacked.forEach((task) => {
                const todo = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)(
                    task.title,
                    task.description,
                    task.dueDate,
                    task.priority
                )
                projectI.addItem(todo)
            })
            projectList.push(projectI)
        })
        displayController.drawProjects()
        displayController.drawProjectToDos(0)
    }

    const addProject = (project) => {
        projectList.push(project)
        _save()
    }

    const removeProject = (key) => {
        const defaultDraw = key - 1 <= 0 ? 0 : key - 1
        projectList.splice(key, 1)
        _save()
        displayController.drawProjects()
        if (projectList.length !== 0) {
            displayController.drawProjectToDos(defaultDraw)
        } else {
            storageController.removeFromLocalStorage()
            displayController.drawProjectToDos(false)
        }
    }

    const removeTask = (key, e) => {
        // if they uncheck it before it deltes, stop!
        if (!e.target.checked) return
        const projectId = document.querySelector('.todo-list').dataset
            .currentProject
        projectList[projectId].getItems().splice(key, 1)
        _save()
        displayController.drawProjects()
        displayController.drawProjectToDos(projectId)
    }

    const addTaskToProject = (key, todo) => {
        const currentProject = projectList[key]
        currentProject.addItem(todo)
        _save()
    }

    return {
        addProject,
        listProjects,
        listProjectItems,
        addTaskToProject,
        numberOfProjects,
        initialProjectLoad,
        removeProject,
        removeTask,
        projectTitle,
        welcomeProject,
    }
})()

const storageController = (() => {
    const saveName = 'projects'

    const saveToLocalStorage = (object) => {
        // const object= projectController.listProjects()
        localStorage.setItem(saveName, JSON.stringify(object))
    }
    const removeFromLocalStorage = () => {
        localStorage.removeItem(saveName)
    }

    const loadFromLocalStorage = () => {
        const doesExist = localStorage.getItem(saveName)

        if (doesExist) {
            projectController.initialProjectLoad(JSON.parse(doesExist))
        } else {
            projectController.welcomeProject()
        }
    }

    return { saveToLocalStorage, removeFromLocalStorage, loadFromLocalStorage }
})()

const eventListenerController = (() => {
    const add = (selector, type, func) => {
        const parent = document.querySelector(selector)
        parent.addEventListener(type, func)
    }

    const addForEach = (selector, type, func) => {
        const parent = document.querySelectorAll(selector)
        parent.forEach((child) => child.addEventListener(type, func))
    }

    return { add, addForEach }
})()

function handleClick(e) {
    displayController.drawProjectForm()
}

function handleProjectForm(e) {
    e.stopPropagation()
    const target = e.target.value
    if (target === 'add') {
        const { name, desc } = grabForm()
        projectController.addProject((0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)(name, desc))
        cancelForm()
        displayController.drawProjects()
        displayController.drawProjectToDos(
            projectController.numberOfProjects() - 1
        )
    } else if (e.target.dataset.overlay || target === 'cancel') {
        cancelForm()
    }
}

function cancelForm() {
    displayController.closeForm()
}

function grabForm() {
    const name = document.querySelector('.form-body > .name').value
    const desc = document.querySelector('.form-body > .desc').value

    if (!name) {
        alert('Please fill out the name!')
        return
    }

    return { name, desc }
}

function handleTaskForm(e) {
    const target = e.target.value
    const project = document.querySelector('.todo-list').dataset.currentProject

    if (target !== 'add') {
        displayController.drawProjectToDos(project)
    } else if (target === 'add') {
        const { title, date, priority } = grabTaskForm()
        const todo = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)('title', title, date, priority)
        projectController.addTaskToProject(project, todo)
        displayController.drawProjectToDos(project)
        displayController.drawProjects()
    } else {
        console.log(
            'switch these two maybe, but one updates and one adds? or add if statement above'
        )
    }
}

function grabTaskForm() {
    const title = document.querySelector('.todo-container > .task').value
    const date = document.querySelector('.form-container > input[type=date]')
        .value
    const priority = document.querySelector('.form-container > select').value

    return { title, date, priority }
}

function deleteProject(e) {
    const tag = e.target.tagName
    if (tag !== 'I') return
    const confirmAction = confirm('Are you Sure?')
    if (confirmAction) {
        const key = Number(e.target.value)
        projectController.removeProject(key)
    }
}

function changeProject(e) {
    const li = e.target.closest('li')
    if (!li || e.target.tagName === 'I') return
    const key = li.dataset.projectKey
    displayController.drawProjectToDos(key)
}

function handleChecks(e) {
    const li = e.target.closest('li')
    if (!li || !e.target.checked) return
    const key = li.dataset.itemKey

    setTimeout(() => {
        projectController.removeTask(key, e)
    }, 3000)
}

function handleAddTask() {
    const instigator = document.querySelector('.action-li')
    displayController.drawTaskForm(instigator)
}

function editTasks(e) {
    const li = e.target.closest('li')
    if (!li || e.target.nodeName !== 'DIV') return
    displayController.drawTaskForm(li)
}

eventListenerController.add('.projects', 'click', deleteProject)
eventListenerController.add('.projects', 'click', changeProject)
eventListenerController.add('.task-tab', 'change', handleChecks)
eventListenerController.add('.task-tab', 'transitioned', handleChecks)
eventListenerController.add('.task-tab', 'click', editTasks)
eventListenerController.add('.add-project', 'click', handleClick)

storageController.loadFromLocalStorage()


/***/ }),

/***/ "./src/scripts/forms.js":
/*!******************************!*
  !*** ./src/scripts/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateProjectForm": () => /* binding */ generateProjectForm,
/* harmony export */   "generateTaskForm": () => /* binding */ generateTaskForm
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");


const formElements = (labelContent, placeholder, name, type, classN) => {
    const label = document.createElement('label')
    const input = document.createElement('input')

    label.setAttribute('for', name)
    label.textContent = labelContent

    input.type = type
    input.placeholder = placeholder
    input.name = name
    input.classList.add(classN)
    input.autocomplete = 'off'
    if (name === 'title') {
        input.required = true
    }

    return { input, label }
}

const getFormHeader = (title) => {
    const formHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-header')
    formHeader.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createText)(title, 'h1'))

    return formHeader
}

const getFormFooter = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-footer')
    const cancelButton = document.createElement('button')
    const addButton = document.createElement('button')

    cancelButton.textContent = 'Cancel'
    cancelButton.classList.add('button', 'cancel')
    cancelButton.type = 'button'
    cancelButton.value = 'cancel'

    addButton.textContent = 'Add'
    addButton.classList.add('button', 'add')
    addButton.type = 'button'
    addButton.value = 'add'

    parent.appendChild(cancelButton)
    parent.appendChild(addButton)

    return parent
}

const getFormInputs = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-container')
    const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-body')
    const projectName = formElements(
        'Project Name',
        '',
        'title',
        'text',
        'name'
    )
    const description = formElements(
        'Project Description',
        '',
        'My first project',
        'text',
        'desc'
    )

    wrapper.appendChild(projectName.label)
    wrapper.appendChild(projectName.input)
    wrapper.appendChild(description.label)
    wrapper.appendChild(description.input)

    parent.appendChild(wrapper)

    return parent
}

const generateToDoForm = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('todo-container')
    const titleForm = formElements(
        '',
        'e.g. wash the car',
        'title',
        'text',
        'task'
    )
    parent.appendChild(titleForm.label)
    parent.appendChild(titleForm.input)

    return parent
}

const generateToDoOptions = () => `<input type="date" name="due-date">
    <label for="priority"></label>
        <select>
            <option value="0">Normal</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
    </select>`

const generateProjectForm = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form', 'project-form')
    const formHeader = getFormHeader('Add a project')
    const body = getFormInputs()
    const footer = getFormFooter()

    parent.appendChild(formHeader)
    parent.appendChild(body)
    parent.appendChild(footer)

    return parent
}

const generateTaskForm = (editingTaks) => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('todo-form')
    const form = document.createElement('form')
    const tdcontainer = generateToDoForm()
    const options = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-container')
    options.innerHTML = generateToDoOptions()
    const footer = getFormFooter()
    footer.classList.add('todo-footer')

    if (editingTaks) {
        console.log('do something')
    } else {
        form.appendChild(tdcontainer)
        form.appendChild(options)
        form.appendChild(footer)

        parent.appendChild(form)
    }

    return parent
}




/***/ }),

/***/ "./src/scripts/objects.js":
/*!********************************!*
  !*** ./src/scripts/objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectItem": () => /* binding */ projectItem,
/* harmony export */   "todoItem": () => /* binding */ todoItem
/* harmony export */ });
const getTitle = (data) => ({
    title: () => data.title,
})

const getDescription = (data) => ({
    description: () => data.description,
})

const getDueDate = (data) => ({
    dueDate: () => data.dueDate,
})

const getPriority = (data) => ({
    priority: () => data.priority,
})

const unpackTask = (data) => ({
    unpackItems: () => ({
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
    }),
})

const getToDos = (data) => ({
    getItems: () => data.list,
    unpackProjects: () => {
        const unpacked = data.list.map((task) => {
            const taskObject = {
                title: task.title(),
                description: task.description(),
                dueDate: task.dueDate(),
                priority: task.priority(),
            }
            return taskObject
        })

        const projectTask = {
            title: data.title,
            description: data.description,
            unpacked,
            item: data.item,
        }

        return projectTask
    },
})

const pushNewItem = (data) => ({
    addItem: (item) => {
        data.list.push(item)
    },
})

const getNumberTodos = (data) => ({
    numberOf: () => data.list.length,
    test: () => data.description,
})

const todoItem = (title, description, dueDate, priority) => {
    const data = {
        title,
        description,
        dueDate,
        priority,
    }

    return {
        ...getTitle(data),
        ...getDescription(data),
        ...getDueDate(data),
        ...getPriority(data),
        ...unpackTask(data),
    }
}

const projectItem = (title, description) => {
    const data = {
        title,
        description,
        list: [],
        item: '',
    }

    return {
        ...getTitle(data),
        ...getDescription(data),
        ...getToDos(data),
        ...pushNewItem(data),
        ...getNumberTodos(data),
    }
}




/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "divFactory": () => /* binding */ divFactory,
/* harmony export */   "createText": () => /* binding */ createText
/* harmony export */ });
const divFactory = (...classNames) => {
    const div = document.createElement('div')
    if (classNames) {
        classNames.forEach((className) => {
            div.classList.add(className)
        })
    }

    return div
}

const createText = (content, type) => {
    const text = document.createElement(type)

    if (content || content === 0) {
        text.innerText = content
    }

    return text
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcz9mZjlhIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2NyaXB0cy9vYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxrQkFBa0IsbUJBQW1CLCtCQUErQiw0QkFBNEIsZUFBZSw4QkFBOEIseUJBQXlCLGdDQUFnQyxrQ0FBa0MsaUNBQWlDLGdDQUFnQyx5QkFBeUIsNkNBQTZDLEtBQUssWUFBWSw4QkFBOEIsS0FBSyxtQkFBbUIsc0JBQXNCLHdDQUF3QyxxQ0FBcUMsc0JBQXNCLFNBQVMsd0JBQXdCLDJCQUEyQixLQUFLLHNCQUFzQixrQ0FBa0MsS0FBSyxpQkFBaUIseUJBQXlCLDJDQUEyQyxxQkFBcUIsOEJBQThCLHFDQUFxQyxLQUFLLDRDQUE0QyxtQ0FBbUMsS0FBSyxlQUFlLHlCQUF5QiwwSEFBMEgsa0JBQWtCLG9CQUFvQix3QkFBd0IsMkJBQTJCLDJEQUEyRCwyQkFBMkIsZ0NBQWdDLG1CQUFtQiwwREFBMEQsMkJBQTJCLGtCQUFrQixpQkFBaUIscUJBQXFCLG9CQUFvQix5Q0FBeUMsV0FBVywyQkFBMkIsMkJBQTJCLE9BQU8sc0JBQXNCLHNCQUFzQiwrQkFBK0IscUNBQXFDLDRCQUE0QixPQUFPLDRDQUE0QywwQkFBMEIsaUNBQWlDLHlCQUF5QiwwQ0FBMEMsT0FBTyxtQkFBbUIsNEJBQTRCLHNCQUFzQiw2QkFBNkIsbUNBQW1DLE9BQU8sa0JBQWtCLDZDQUE2Qyx1QkFBdUIsT0FBTyx5QkFBeUIsNkNBQTZDLE9BQU8sd0JBQXdCLHdCQUF3Qix5Q0FBeUMsV0FBVyx3QkFBd0Isd0JBQXdCLG9DQUFvQyxzQ0FBc0Msb0NBQW9DLHlCQUF5Qiw4Q0FBOEMsd0JBQXdCLG9CQUFvQixxQkFBcUIsZUFBZSxpQkFBaUIsZ0JBQWdCLGtCQUFrQixLQUFLLGVBQWUsc0JBQXNCLHlCQUF5QixLQUFLLDBCQUEwQiw4QkFBOEIsS0FBSyxpQkFBaUIsc0JBQXNCLDhCQUE4QixLQUFLLDJCQUEyQixnQ0FBZ0MsMkJBQTJCLEtBQUssK0JBQStCLDJDQUEyQywyQkFBMkIscUJBQXFCLEtBQUssbUJBQW1CLGtDQUFrQyxLQUFLLG9CQUFvQixzQkFBc0IsZ0NBQWdDLHVCQUF1QixxQkFBcUIsMEJBQTBCLEtBQUssa0JBQWtCLG9DQUFvQyxvQkFBb0IsS0FBSyx5QkFBeUIsK0NBQStDLG9CQUFvQixzQkFBc0Isb0RBQW9ELEtBQUssa0RBQWtELHFCQUFxQix3QkFBd0IsUUFBUSxnQ0FBZ0MscUJBQXFCLHNCQUFzQixLQUFLLG9CQUFvQixnQ0FBZ0MsK0JBQStCLDJCQUEyQixLQUFLLGdDQUFnQywyQkFBMkIsS0FBSyxzQkFBc0Isb0NBQW9DLEtBQUsseUJBQXlCLDZCQUE2QixLQUFLLDBDQUEwQyxxQkFBcUIsb0JBQW9CLEtBQUssZ0NBQWdDLHFCQUFxQixLQUFLLHVDQUF1QyxxQkFBcUIsMkJBQTJCLEtBQUssMEJBQTBCLDJCQUEyQix5QkFBeUIseUJBQXlCLDJCQUEyQixLQUFLLDJCQUEyQiwyQ0FBMkMsK0JBQStCLEtBQUssa0JBQWtCLDJDQUEyQyw0QkFBNEIsS0FBSyw0REFBNEQsc0NBQXNDLEtBQUssdUJBQXVCLHNCQUFzQixzREFBc0QsS0FBSyxtQ0FBbUMsc0JBQXNCLHFCQUFxQixnQ0FBZ0MsK0JBQStCLHdCQUF3QixTQUFTLHlDQUF5Qyw4QkFBOEIsS0FBSyw2QkFBNkIsdUNBQXVDLDJCQUEyQiwyQkFBMkIsS0FBSyxpQkFBaUIsMEJBQTBCLEtBQUssb0JBQW9CLHFCQUFxQiw4QkFBOEIsNEJBQTRCLGdDQUFnQyxLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxlQUFlLHVCQUF1QixLQUFLLE9BQU8saUdBQWlHLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSw2QkFBNkIsa0JBQWtCLG1CQUFt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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekI7O0FBRUE7QUFDQSxzQkFBc0IsZ0VBQWdCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsNkRBQVc7QUFDbkMsNEJBQTRCLDBEQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkRBQVc7QUFDeEM7QUFDQSw2QkFBNkIsMERBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLHFDQUFxQyw2REFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLHdCQUF3QjtBQUN2QyxxQkFBcUIsMERBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFkZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0EsdUJBQXVCLGtEQUFVO0FBQ2pDLDJCQUEyQixrREFBVTs7QUFFckM7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrREFBVTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrREFBVTtBQUM3QixvQkFBb0Isa0RBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtEQUFVO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrREFBVTtBQUM3QjtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFVO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkloRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVpQzs7Ozs7OztVQ3JCakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogYm9yZGVyOiAwICovXFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1tYWluLWNvbG9yOiAjZGI0YzNmO1xcclxcbiAgICAtLWhvdmVyOiAjZDhkOGQ4O1xcclxcbiAgICAtLWFkZC1kaXNhYmxlZDogI2Y0Y2FjNjtcXHJcXG4gICAgLS1tZWRpdW0tcHJpb3JpdHk6IG9yYW5nZTtcXHJcXG4gICAgLS1oaWdoLXByaW9yaXR5OiAjOTkwMDAwO1xcclxcbiAgICAtLWlucHV0LWNvbG9yOiAgI2YxZjFmMTtcXHJcXG4gICAgLS1wbGFpbi1yZWQ6IHJlZDtcXHJcXG4gICAgLS1vdmVybGF5LWNvbG9yOiAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNWZyIDRmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGFiID4gaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS80O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyID4gaDEsIC50YXNrLXRhYj4gaDF7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxyXFxuICAgIC8qIG5lZWQgdG8gZmxvYXQgLyBjZW50ZXIgaXQgb24gcGFnZSBhcyB3ZWxsIGFzIGFkZCBcXFwiY29udGFpbmVyIHRvIG1ha2Ugb3BhY2l0eVxcXCIgKi9cXHJcXG4gICAgLyogcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAxNXB4OyAqL1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgLyogdGVtcG9yYXJ5ICwgZGVsZXRlIGxhdGVyICovXFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG5cXHJcXG4gICAgLyogY2VudGVyIGluIHNjcmVlbiAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbiAgICByaWdodDogYXV0bztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAwIDIycHggMDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6dmFyKC0taW5wdXQtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbiB7XFxyXFxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICAgICAgYm9yZGVyOiAzcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFkZCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxhaW4tcmVkKTtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkOmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZGQtZGlzYWJsZWQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0taGVhZGVyIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWZvb3RlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBwYWRkaW5nOiA1cHggMjBweFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLW92ZXJsYXkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW92ZXJsYXktY29sb3IpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsdXMge1xcclxcbiAgICBtYXJnaW46IDAgMnB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDQuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1hY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uOmhvdmVyID4gcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wbGFpbi1yZWQpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb246aG92ZXIgPiAucGx1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWluLXJlZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saSB7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgPiB1bCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFja1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IGF1dG8gMTUwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSA+IGRpdiwgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgLyogd2lkdGg6IDIwMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gICAgd2lkdGg6IDEuNWVtO1xcclxcbiAgICBoZWlnaHQ6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb3JtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9vdGVyID4gLmJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9vdGVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTpub25lO1xcclxcbn0gXFxyXFxuXFxyXFxuc2VsZWN0LCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY291bnRlciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgZm9udC1zaXplOiAuODVlbTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAnY291bnQnO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuZGVsZXRlZC1zY2FsZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVkIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnRvZG8taXRlbSA+IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiBkaXYge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgyM3B4LCBhdXRvKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSA+IC5sYS10cmFzaCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBsYWluLXJlZCk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciA+IC5sYS10cmFzaCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1saSB7XFxyXFxuICAgIHdpZHRoOiA3NzdweDtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4IDAgM3B4O1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bSB7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5oaWdoIHtcXHJcXG4gICAgY29sb3I6ICM5OTAwMDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlGQUFpRjtJQUNqRjs7a0JBRWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVOztJQUVWLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7O0VBRWxDOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0VBQ2xCOztFQUVBO1FBQ00sYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osNkJBQTZCO0VBQ25DOztFQUVBO01BQ0ksaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsd0JBQXdCO0VBQzVCOztFQUVBO01BQ0ksa0NBQWtDO01BQ2xDLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7TUFDSSxhQUFhO01BQ2IsOEJBQThCOztFQUVsQzs7RUFFQTtNQUNJLGFBQWE7TUFDYix5QkFBeUI7TUFDekIsMkJBQTJCO01BQzNCOztBQUVOOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0k7O0FBRUo7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiBib3JkZXI6IDAgKi9cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLW1haW4tY29sb3I6ICNkYjRjM2Y7XFxyXFxuICAgIC0taG92ZXI6ICNkOGQ4ZDg7XFxyXFxuICAgIC0tYWRkLWRpc2FibGVkOiAjZjRjYWM2O1xcclxcbiAgICAtLW1lZGl1bS1wcmlvcml0eTogb3JhbmdlO1xcclxcbiAgICAtLWhpZ2gtcHJpb3JpdHk6ICM5OTAwMDA7XFxyXFxuICAgIC0taW5wdXQtY29sb3I6ICAjZjFmMWYxO1xcclxcbiAgICAtLXBsYWluLXJlZDogcmVkO1xcclxcbiAgICAtLW92ZXJsYXktY29sb3I6ICByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC41ZnIgNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGFzay10YWIgPiBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFiIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXIgPiBoMSwgLnRhc2stdGFiPiBoMXtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gICAgLyogbmVlZCB0byBmbG9hdCAvIGNlbnRlciBpdCBvbiBwYWdlIGFzIHdlbGwgYXMgYWRkIFxcXCJjb250YWluZXIgdG8gbWFrZSBvcGFjaXR5XFxcIiAqL1xcclxcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7ICovXFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAvKiB0ZW1wb3JhcnkgLCBkZWxldGUgbGF0ZXIgKi9cXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcblxcclxcbiAgICAvKiBjZW50ZXIgaW4gc2NyZWVuICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBib3R0b206IGF1dG87XFxyXFxuICAgIHJpZ2h0OiBhdXRvO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxOyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1pbnB1dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gICAgICBib3JkZXI6IDNweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWRkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGFpbi1yZWQpO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQ6ZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkZC1kaXNhYmxlZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1oZWFkZXIge1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tZm9vdGVyIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctb3ZlcmxheSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tb3ZlcmxheS1jb2xvcik7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGx1cyB7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNC41cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb246aG92ZXIgPiBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBsYWluLXJlZCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbjpob3ZlciA+IC5wbHVzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxhaW4tcmVkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCA+IHVsIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggYXV0byAxNTBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtID4gZGl2LCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICAvKiB3aWR0aDogMjAwcHg7ICovXFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgICB3aWR0aDogMS41ZW07XFxyXFxuICAgIGhlaWdodDogMS41ZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb290ZXIgPiAuYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb290ZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOm5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG5zZWxlY3QsIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb3VudGVyIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBmb250LXNpemU6IC44NWVtO1xcclxcbiAgICBncmlkLWFyZWE6ICdjb3VudCc7XFxyXFxufVxcclxcblxcclxcbi8qIC5kZWxldGVkLXNjYWxlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLW91dDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZWQge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4udG9kby1pdGVtID4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB+IGRpdiB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWlubWF4KDIzcHgsIGF1dG8pO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtID4gLmxhLXRyYXNoIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGxhaW4tcmVkKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtOmhvdmVyID4gLmxhLXRyYXNoIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWxpIHtcXHJcXG4gICAgd2lkdGg6IDc3N3B4O1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAzcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtIHtcXHJcXG4gICAgY29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2gge1xcclxcbiAgICBjb2xvcjogIzk5MDAwMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCB7IGdlbmVyYXRlUHJvamVjdEZvcm0sIGdlbmVyYXRlVGFza0Zvcm0gfSBmcm9tICcuL3NjcmlwdHMvZm9ybXMnXG5pbXBvcnQgeyBkaXZGYWN0b3J5LCBjcmVhdGVUZXh0IH0gZnJvbSAnLi9zY3JpcHRzL3V0aWxzJ1xuaW1wb3J0IHsgcHJvamVjdEl0ZW0sIHRvZG9JdGVtIH0gZnJvbSAnLi9zY3JpcHRzL29iamVjdHMnXG5pbXBvcnQgJy4vcmVzb3VyY2VzL3N0eWxlcy9pbmRleC5jc3MnXG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBfcHJvamVjdEl0ZW1MYXlvdXQgPSAobmFtZSwgY291bnQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICAgIGNvbnN0IGRpdiA9IGRpdkZhY3RvcnkoJ3Byb2plY3QtaXRlbScpXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gY3JlYXRlVGV4dChuYW1lLCAnc3BhbicpXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBjcmVhdGVUZXh0KGNvdW50LCAnc3BhbicpXG4gICAgICAgIGNvbnN0IHRleHREaXYgPSBkaXZGYWN0b3J5KCd0ZXh0JylcbiAgICAgICAgYnV0dG9uLnZhbHVlID0ga2V5XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdsYXMnLCAnbGEtdHJhc2gnKVxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpJylcbiAgICAgICAgY291bnRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvdW50ZXInKVxuXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoY291bnRlcilcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHREaXYpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdilcblxuICAgICAgICByZXR1cm4gbGlcbiAgICB9XG5cbiAgICBjb25zdCBfdG9kb0xheW91dCA9IChkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGknKVxuICAgICAgICBjb25zdCBkaXYgPSBkaXZGYWN0b3J5KCd0b2RvLWl0ZW0nKVxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICAgICAgY29uc3QgZGVzYyA9IGNyZWF0ZVRleHQoZGVzY3JpcHRpb24sICdkaXYnKVxuICAgICAgICBjb25zdCBkYXRlID0gY3JlYXRlVGV4dChkdWVEYXRlLCAnZGl2JylcbiAgICAgICAgY29uc3QgcHJpID0gY3JlYXRlVGV4dChfcmVwZWF0UHJpb3JpdHkocHJpb3JpdHkpLCAnZGl2JylcblxuICAgICAgICBjb25zdCBwcmlvcml0eUNsYXNzID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXVxuICAgICAgICBwcmkuY2xhc3NMaXN0LmFkZChwcmlvcml0eUNsYXNzW3ByaW9yaXR5XSlcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByaSlcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICAgIHJldHVybiBsaVxuICAgIH1cblxuICAgIGNvbnN0IF9yZXBlYXRQcmlvcml0eSA9IChudW0pID0+IHtcbiAgICAgICAgaWYgKG51bSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnIScucmVwZWF0KG51bSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBjb25zdCBfY2xlYXJDaGlsZE5vZGVzT2YgPSAobm9kZSkgPT4ge1xuICAgICAgICB3aGlsZSAobm9kZS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgX3NldEFjdGl2ZVByb2plY3QgPSAoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1saScpXG4gICAgICAgIGNvbnN0IG5ld0FjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYGxpW2RhdGEtcHJvamVjdC1rZXk9JyR7a2V5fSddYFxuICAgICAgICApXG4gICAgICAgIHByb2plY3RzSXRlbXMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBuZXdBY3RpdmVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgY29uc3QgX2RyYXdBZGRBY3Rpb25zID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGlvbi1saScpXG4gICAgICAgIHBhcmVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFjdGlvbiBhZGQtdG9kb1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBsdXNcIj4rPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgcmV0dXJuIHBhcmVudFxuICAgIH1cblxuICAgIGNvbnN0IF91cGRhdGVUYXNrSGVhZGVyID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGFiID4gaDEnKVxuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gcHJvamVjdFxuICAgIH1cblxuICAgIGNvbnN0IF9wcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge31cblxuICAgIGNvbnN0IF9hZGRUYXNrTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpXG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZFRhc2spXG4gICAgfVxuXG4gICAgY29uc3QgX2N1cnJlbnRUYXNrVmFsdWVzID0gKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0JykuZGF0YXNldFxuICAgICAgICAgICAgLmN1cnJlbnRQcm9qZWN0XG4gICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSBwcm9qZWN0Q29udHJvbGxlclxuICAgICAgICAgICAgLmxpc3RQcm9qZWN0SXRlbXMocGFyZW50S2V5KVxuICAgICAgICAgICAgW2tleV0udW5wYWNrSXRlbXMoKVxuXG4gICAgICAgIHJldHVybiB0YXNrT2JqZWN0XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1Byb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW92ZXJsYXknKVxuICAgICAgICBvdmVybGF5LmRhdGFzZXQub3ZlcmxheSA9IHRydWVcblxuICAgICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgb3ZlcmxheSlcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RGb3JtKCkpXG5cbiAgICAgICAgLy8gd2FzIGluIHRoZSBfcHJvamVjdEZvcm1FdmVudExpc3RlbmVyc1xuICAgICAgICBldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGRGb3JFYWNoKFxuICAgICAgICAgICAgJy5wcm9qZWN0LWZvcm0gYnV0dG9uJyxcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBoYW5kbGVQcm9qZWN0Rm9ybVxuICAgICAgICApXG4gICAgICAgIGV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZChcbiAgICAgICAgICAgICcuZGlhbG9nLW92ZXJsYXknLFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIGhhbmRsZVByb2plY3RGb3JtXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3VGFza0Zvcm0gPSAoaW5zdGlnYXRvcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBpbnN0aWdhdG9yXG4gICAgICAgIGNvbnN0IHsgaXRlbUtleSB9ID0gcGFyZW50LmRhdGFzZXRcbiAgICAgICAgLy8gY29uc3QgdGFza09iamVjdCA9IF9jdXJyZW50VGFza1ZhbHVlcyhpdGVtS2V5KVxuXG4gICAgICAgIF9jbGVhckNoaWxkTm9kZXNPZihwYXJlbnQpXG4gICAgICAgIHBhcmVudC5hcHBlbmQoZ2VuZXJhdGVUYXNrRm9ybSgpKVxuXG4gICAgICAgIGlmIChpbnN0aWdhdG9yLmRhdGFzZXQuaXRlbUtleSkge1xuICAgICAgICAgICAgY29uc3QgdGFza09iamVjdCA9IF9jdXJyZW50VGFza1ZhbHVlcyhpdGVtS2V5KVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXIgPiAudGFzaycpXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnLmZvcm0tY29udGFpbmVyID4gaW5wdXRbdHlwZT1kYXRlXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyID4gc2VsZWN0JylcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vanNyZWYvZG9tX29ial9zZWxlY3QuYXNwXG4gICAgICAgICAgICB0aXRsZS52YWx1ZSA9IHRhc2tPYmplY3QuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGRhdGUudmFsdWUgPSB0YXNrT2JqZWN0LmR1ZURhdGVcbiAgICAgICAgICAgIHByaW9yaXR5LnNlbGVjdGVkSW5kZXggPSB0YXNrT2JqZWN0LnByaW9yaXR5XG4gICAgICAgIH1cblxuICAgICAgICBldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGRGb3JFYWNoKFxuICAgICAgICAgICAgJy50b2RvLWZvb3RlciBidXR0b24nLFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIGhhbmRsZVRhc2tGb3JtXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgICAgIF9jbGVhckNoaWxkTm9kZXNPZihwYXJlbnQpXG4gICAgICAgIGNvbnN0IGFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIubGlzdFByb2plY3RzKClcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICAgIGFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBfcHJvamVjdEl0ZW1MYXlvdXQoXG4gICAgICAgICAgICAgICAgb2JqZWN0LnRpdGxlKCksXG4gICAgICAgICAgICAgICAgb2JqZWN0LmdldEl0ZW1zKCkubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGNvdW50ZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGxpLmRhdGFzZXQucHJvamVjdEtleSA9IGNvdW50ZXJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICAgICAgY291bnRlciArPSAxXG4gICAgICAgIH0pXG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdQcm9qZWN0VG9Eb3MgPSAoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKVxuICAgICAgICBwYXJlbnQuZGF0YXNldC5jdXJyZW50UHJvamVjdCA9IGtleVxuICAgICAgICBfY2xlYXJDaGlsZE5vZGVzT2YocGFyZW50KVxuICAgICAgICBpZiAoa2V5ID09PSBmYWxzZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIubGlzdFByb2plY3RJdGVtcyhrZXkpXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoX2RyYXdBZGRBY3Rpb25zKCdBZGQgVGFzaycpKVxuICAgICAgICBsZXQgY291bnRlciA9IDBcblxuICAgICAgICBhcnJheS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gX3RvZG9MYXlvdXQoXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRlc2NyaXB0aW9uKCksXG4gICAgICAgICAgICAgICAgb2JqZWN0LmR1ZURhdGUoKSxcbiAgICAgICAgICAgICAgICBvYmplY3QucHJpb3JpdHkoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGkuZGF0YXNldC5pdGVtS2V5ID0gY291bnRlclxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gMVxuICAgICAgICB9KVxuXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChsaXN0KVxuICAgICAgICBfdXBkYXRlVGFza0hlYWRlcihwcm9qZWN0Q29udHJvbGxlci5wcm9qZWN0VGl0bGUoa2V5KSlcbiAgICAgICAgX3NldEFjdGl2ZVByb2plY3Qoa2V5KVxuICAgICAgICBfYWRkVGFza0xpc3RlbmVyKClcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLW92ZXJsYXknKVxuICAgICAgICBvdmVybGF5LnJlbW92ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1Byb2plY3RGb3JtLFxuICAgICAgICBkcmF3UHJvamVjdHMsXG4gICAgICAgIGRyYXdQcm9qZWN0VG9Eb3MsXG4gICAgICAgIGNsb3NlRm9ybSxcbiAgICAgICAgZHJhd1Rhc2tGb3JtLFxuICAgIH1cbn0pKClcblxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW11cblxuICAgIGNvbnN0IF91bnBhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVucGFja2VkID0gcHJvamVjdExpc3QubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LnVucGFja1Byb2plY3RzKCkpXG4gICAgICAgIHJldHVybiB1bnBhY2tlZFxuICAgIH1cblxuICAgIGNvbnN0IF9zYXZlID0gKCkgPT4ge1xuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoX3VucGFjaygpKVxuICAgIH1cblxuICAgIGNvbnN0IF9sb2FkRnJvbVN0b3JhZ2UgPSAoKSA9PiB7fVxuXG4gICAgY29uc3QgbGlzdFByb2plY3RJdGVtcyA9IChrZXkpID0+IHByb2plY3RMaXN0W2tleV0uZ2V0SXRlbXMoKVxuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gKGtleSkgPT4gcHJvamVjdExpc3Rba2V5XS50aXRsZSgpXG5cbiAgICBjb25zdCBsaXN0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0TGlzdFxuXG4gICAgY29uc3QgbnVtYmVyT2ZQcm9qZWN0cyA9ICgpID0+IHByb2plY3RMaXN0Lmxlbmd0aFxuXG4gICAgY29uc3Qgd2VsY29tZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWUgPSBwcm9qZWN0SXRlbSgnV2VsY29tZSEnLCAnJylcbiAgICAgICAgY29uc3Qgd2VsY29tZVRhc2sgPSB0b2RvSXRlbShcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ1lvdXIgRmlyc3QgVGFzayEgQ2xpY2sgdGhlIGNoZWNrYm94IHRvIGNvbXBsZXRlIG1lJyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgMlxuICAgICAgICApXG5cbiAgICAgICAgd2VsY29tZS5hZGRJdGVtKHdlbGNvbWVUYXNrKVxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHdlbGNvbWUpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MoMClcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsUHJvamVjdExvYWQgPSAoc2F2ZWRQcm9qZWN0cykgPT4ge1xuICAgICAgICAvLyBwcm9qZWN0TGlzdCA9IFsuLi5zYXZlZFByb2plY3RzXTtcbiAgICAgICAgc2F2ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SSA9IHByb2plY3RJdGVtKHByb2plY3QudGl0bGUsIHByb2plY3QuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBwcm9qZWN0LnVucGFja2VkLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdG9kb0l0ZW0oXG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBwcm9qZWN0SS5hZGRJdGVtKHRvZG8pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0SSlcbiAgICAgICAgfSlcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcygwKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpXG4gICAgICAgIF9zYXZlKClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBkZWZhdWx0RHJhdyA9IGtleSAtIDEgPD0gMCA/IDAgOiBrZXkgLSAxXG4gICAgICAgIHByb2plY3RMaXN0LnNwbGljZShrZXksIDEpXG4gICAgICAgIF9zYXZlKClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKClcbiAgICAgICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcyhkZWZhdWx0RHJhdylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoa2V5LCBlKSA9PiB7XG4gICAgICAgIC8vIGlmIHRoZXkgdW5jaGVjayBpdCBiZWZvcmUgaXQgZGVsdGVzLCBzdG9wIVxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHJldHVyblxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0JykuZGF0YXNldFxuICAgICAgICAgICAgLmN1cnJlbnRQcm9qZWN0XG4gICAgICAgIHByb2plY3RMaXN0W3Byb2plY3RJZF0uZ2V0SXRlbXMoKS5zcGxpY2Uoa2V5LCAxKVxuICAgICAgICBfc2F2ZSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MocHJvamVjdElkKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAoa2V5LCB0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3Rba2V5XVxuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRJdGVtKHRvZG8pXG4gICAgICAgIF9zYXZlKClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBsaXN0UHJvamVjdHMsXG4gICAgICAgIGxpc3RQcm9qZWN0SXRlbXMsXG4gICAgICAgIGFkZFRhc2tUb1Byb2plY3QsXG4gICAgICAgIG51bWJlck9mUHJvamVjdHMsXG4gICAgICAgIGluaXRpYWxQcm9qZWN0TG9hZCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgcHJvamVjdFRpdGxlLFxuICAgICAgICB3ZWxjb21lUHJvamVjdCxcbiAgICB9XG59KSgpXG5cbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBzYXZlTmFtZSA9ICdwcm9qZWN0cydcblxuICAgIGNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9IChvYmplY3QpID0+IHtcbiAgICAgICAgLy8gY29uc3Qgb2JqZWN0PSBwcm9qZWN0Q29udHJvbGxlci5saXN0UHJvamVjdHMoKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYXZlTmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSlcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZU5hbWUpXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZEZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvZXNFeGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNhdmVOYW1lKVxuXG4gICAgICAgIGlmIChkb2VzRXhpc3QpIHtcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sbGVyLmluaXRpYWxQcm9qZWN0TG9hZChKU09OLnBhcnNlKGRvZXNFeGlzdCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci53ZWxjb21lUHJvamVjdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UsIGxvYWRGcm9tTG9jYWxTdG9yYWdlIH1cbn0pKClcblxuY29uc3QgZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZCA9IChzZWxlY3RvciwgdHlwZSwgZnVuYykgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZEZvckVhY2ggPSAoc2VsZWN0b3IsIHR5cGUsIGZ1bmMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgcGFyZW50LmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpKVxuICAgIH1cblxuICAgIHJldHVybiB7IGFkZCwgYWRkRm9yRWFjaCB9XG59KSgpXG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdEZvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Rm9ybShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgaWYgKHRhcmdldCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBkZXNjIH0gPSBncmFiRm9ybSgpXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QocHJvamVjdEl0ZW0obmFtZSwgZGVzYykpXG4gICAgICAgIGNhbmNlbEZvcm0oKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdHMoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKFxuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIubnVtYmVyT2ZQcm9qZWN0cygpIC0gMVxuICAgICAgICApXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0Lm92ZXJsYXkgfHwgdGFyZ2V0ID09PSAnY2FuY2VsJykge1xuICAgICAgICBjYW5jZWxGb3JtKClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEZvcm0oKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY2xvc2VGb3JtKClcbn1cblxuZnVuY3Rpb24gZ3JhYkZvcm0oKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJvZHkgPiAubmFtZScpLnZhbHVlXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJvZHkgPiAuZGVzYycpLnZhbHVlXG5cbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIG91dCB0aGUgbmFtZSEnKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4geyBuYW1lLCBkZXNjIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0Zvcm0oZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKS5kYXRhc2V0LmN1cnJlbnRQcm9qZWN0XG5cbiAgICBpZiAodGFyZ2V0ICE9PSAnYWRkJykge1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKHByb2plY3QpXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdhZGQnKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5IH0gPSBncmFiVGFza0Zvcm0oKVxuICAgICAgICBjb25zdCB0b2RvID0gdG9kb0l0ZW0oJ3RpdGxlJywgdGl0bGUsIGRhdGUsIHByaW9yaXR5KVxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QsIHRvZG8pXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MocHJvamVjdClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdzd2l0Y2ggdGhlc2UgdHdvIG1heWJlLCBidXQgb25lIHVwZGF0ZXMgYW5kIG9uZSBhZGRzPyBvciBhZGQgaWYgc3RhdGVtZW50IGFib3ZlJ1xuICAgICAgICApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBncmFiVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXIgPiAudGFzaycpLnZhbHVlXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lciA+IGlucHV0W3R5cGU9ZGF0ZV0nKVxuICAgICAgICAudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lciA+IHNlbGVjdCcpLnZhbHVlXG5cbiAgICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgICBjb25zdCB0YWcgPSBlLnRhcmdldC50YWdOYW1lXG4gICAgaWYgKHRhZyAhPT0gJ0knKSByZXR1cm5cbiAgICBjb25zdCBjb25maXJtQWN0aW9uID0gY29uZmlybSgnQXJlIHlvdSBTdXJlPycpXG4gICAgaWYgKGNvbmZpcm1BY3Rpb24pIHtcbiAgICAgICAgY29uc3Qga2V5ID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5yZW1vdmVQcm9qZWN0KGtleSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3QoZSkge1xuICAgIGNvbnN0IGxpID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKVxuICAgIGlmICghbGkgfHwgZS50YXJnZXQudGFnTmFtZSA9PT0gJ0knKSByZXR1cm5cbiAgICBjb25zdCBrZXkgPSBsaS5kYXRhc2V0LnByb2plY3RLZXlcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKGtleSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hlY2tzKGUpIHtcbiAgICBjb25zdCBsaSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJylcbiAgICBpZiAoIWxpIHx8ICFlLnRhcmdldC5jaGVja2VkKSByZXR1cm5cbiAgICBjb25zdCBrZXkgPSBsaS5kYXRhc2V0Lml0ZW1LZXlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5yZW1vdmVUYXNrKGtleSwgZSlcbiAgICB9LCAzMDAwKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrKCkge1xuICAgIGNvbnN0IGluc3RpZ2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLWxpJylcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3VGFza0Zvcm0oaW5zdGlnYXRvcilcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tzKGUpIHtcbiAgICBjb25zdCBsaSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJylcbiAgICBpZiAoIWxpIHx8IGUudGFyZ2V0Lm5vZGVOYW1lICE9PSAnRElWJykgcmV0dXJuXG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Rhc2tGb3JtKGxpKVxufVxuXG5ldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGQoJy5wcm9qZWN0cycsICdjbGljaycsIGRlbGV0ZVByb2plY3QpXG5ldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGQoJy5wcm9qZWN0cycsICdjbGljaycsIGNoYW5nZVByb2plY3QpXG5ldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGQoJy50YXNrLXRhYicsICdjaGFuZ2UnLCBoYW5kbGVDaGVja3MpXG5ldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGQoJy50YXNrLXRhYicsICd0cmFuc2l0aW9uZWQnLCBoYW5kbGVDaGVja3MpXG5ldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGQoJy50YXNrLXRhYicsICdjbGljaycsIGVkaXRUYXNrcylcbmV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZCgnLmFkZC1wcm9qZWN0JywgJ2NsaWNrJywgaGFuZGxlQ2xpY2spXG5cbnN0b3JhZ2VDb250cm9sbGVyLmxvYWRGcm9tTG9jYWxTdG9yYWdlKClcbiIsImltcG9ydCB7IGRpdkZhY3RvcnksIGNyZWF0ZVRleHQgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCBmb3JtRWxlbWVudHMgPSAobGFiZWxDb250ZW50LCBwbGFjZWhvbGRlciwgbmFtZSwgdHlwZSwgY2xhc3NOKSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIG5hbWUpXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbENvbnRlbnRcblxuICAgIGlucHV0LnR5cGUgPSB0eXBlXG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgIGlucHV0Lm5hbWUgPSBuYW1lXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc04pXG4gICAgaW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZidcbiAgICBpZiAobmFtZSA9PT0gJ3RpdGxlJykge1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbnB1dCwgbGFiZWwgfVxufVxuXG5jb25zdCBnZXRGb3JtSGVhZGVyID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRpdkZhY3RvcnkoJ2Zvcm0taGVhZGVyJylcbiAgICBmb3JtSGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQodGl0bGUsICdoMScpKVxuXG4gICAgcmV0dXJuIGZvcm1IZWFkZXJcbn1cblxuY29uc3QgZ2V0Rm9ybUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkaXZGYWN0b3J5KCdmb3JtLWZvb3RlcicpXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2NhbmNlbCcpXG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9ICdjYW5jZWwnXG5cbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkJ1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnYWRkJylcbiAgICBhZGRCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgYWRkQnV0dG9uLnZhbHVlID0gJ2FkZCdcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcblxuICAgIHJldHVybiBwYXJlbnRcbn1cblxuY29uc3QgZ2V0Rm9ybUlucHV0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkaXZGYWN0b3J5KCdmb3JtLWNvbnRhaW5lcicpXG4gICAgY29uc3Qgd3JhcHBlciA9IGRpdkZhY3RvcnkoJ2Zvcm0tYm9keScpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBmb3JtRWxlbWVudHMoXG4gICAgICAgICdQcm9qZWN0IE5hbWUnLFxuICAgICAgICAnJyxcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAnbmFtZSdcbiAgICApXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRWxlbWVudHMoXG4gICAgICAgICdQcm9qZWN0IERlc2NyaXB0aW9uJyxcbiAgICAgICAgJycsXG4gICAgICAgICdNeSBmaXJzdCBwcm9qZWN0JyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAnZGVzYydcbiAgICApXG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lLmxhYmVsKVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUuaW5wdXQpXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5sYWJlbClcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmlucHV0KVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpXG5cbiAgICByZXR1cm4gcGFyZW50XG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZGl2RmFjdG9yeSgndG9kby1jb250YWluZXInKVxuICAgIGNvbnN0IHRpdGxlRm9ybSA9IGZvcm1FbGVtZW50cyhcbiAgICAgICAgJycsXG4gICAgICAgICdlLmcuIHdhc2ggdGhlIGNhcicsXG4gICAgICAgICd0aXRsZScsXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ3Rhc2snXG4gICAgKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aXRsZUZvcm0ubGFiZWwpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlRm9ybS5pbnB1dClcblxuICAgIHJldHVybiBwYXJlbnRcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvT3B0aW9ucyA9ICgpID0+IGA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIj5cbiAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj48L2xhYmVsPlxuICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5Ob3JtYWw8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkhpZ2g8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5gXG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZGl2RmFjdG9yeSgnZm9ybScsICdwcm9qZWN0LWZvcm0nKVxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBnZXRGb3JtSGVhZGVyKCdBZGQgYSBwcm9qZWN0JylcbiAgICBjb25zdCBib2R5ID0gZ2V0Rm9ybUlucHV0cygpXG4gICAgY29uc3QgZm9vdGVyID0gZ2V0Rm9ybUZvb3RlcigpXG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcilcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYm9keSlcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG4gICAgcmV0dXJuIHBhcmVudFxufVxuXG5jb25zdCBnZW5lcmF0ZVRhc2tGb3JtID0gKGVkaXRpbmdUYWtzKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZGl2RmFjdG9yeSgndG9kby1mb3JtJylcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgdGRjb250YWluZXIgPSBnZW5lcmF0ZVRvRG9Gb3JtKClcbiAgICBjb25zdCBvcHRpb25zID0gZGl2RmFjdG9yeSgnZm9ybS1jb250YWluZXInKVxuICAgIG9wdGlvbnMuaW5uZXJIVE1MID0gZ2VuZXJhdGVUb0RvT3B0aW9ucygpXG4gICAgY29uc3QgZm9vdGVyID0gZ2V0Rm9ybUZvb3RlcigpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9vdGVyJylcblxuICAgIGlmIChlZGl0aW5nVGFrcykge1xuICAgICAgICBjb25zb2xlLmxvZygnZG8gc29tZXRoaW5nJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRkY29udGFpbmVyKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG9wdGlvbnMpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVQcm9qZWN0Rm9ybSwgZ2VuZXJhdGVUYXNrRm9ybSB9XG4iLCJjb25zdCBnZXRUaXRsZSA9IChkYXRhKSA9PiAoe1xuICAgIHRpdGxlOiAoKSA9PiBkYXRhLnRpdGxlLFxufSlcblxuY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoZGF0YSkgPT4gKHtcbiAgICBkZXNjcmlwdGlvbjogKCkgPT4gZGF0YS5kZXNjcmlwdGlvbixcbn0pXG5cbmNvbnN0IGdldER1ZURhdGUgPSAoZGF0YSkgPT4gKHtcbiAgICBkdWVEYXRlOiAoKSA9PiBkYXRhLmR1ZURhdGUsXG59KVxuXG5jb25zdCBnZXRQcmlvcml0eSA9IChkYXRhKSA9PiAoe1xuICAgIHByaW9yaXR5OiAoKSA9PiBkYXRhLnByaW9yaXR5LFxufSlcblxuY29uc3QgdW5wYWNrVGFzayA9IChkYXRhKSA9PiAoe1xuICAgIHVucGFja0l0ZW1zOiAoKSA9PiAoe1xuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGRhdGEuZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IGRhdGEucHJpb3JpdHksXG4gICAgfSksXG59KVxuXG5jb25zdCBnZXRUb0RvcyA9IChkYXRhKSA9PiAoe1xuICAgIGdldEl0ZW1zOiAoKSA9PiBkYXRhLmxpc3QsXG4gICAgdW5wYWNrUHJvamVjdHM6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdW5wYWNrZWQgPSBkYXRhLmxpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0YXNrLnRpdGxlKCksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiB0YXNrLmR1ZURhdGUoKSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogdGFzay5wcmlvcml0eSgpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhc2tPYmplY3RcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGFzayA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1bnBhY2tlZCxcbiAgICAgICAgICAgIGl0ZW06IGRhdGEuaXRlbSxcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9qZWN0VGFza1xuICAgIH0sXG59KVxuXG5jb25zdCBwdXNoTmV3SXRlbSA9IChkYXRhKSA9PiAoe1xuICAgIGFkZEl0ZW06IChpdGVtKSA9PiB7XG4gICAgICAgIGRhdGEubGlzdC5wdXNoKGl0ZW0pXG4gICAgfSxcbn0pXG5cbmNvbnN0IGdldE51bWJlclRvZG9zID0gKGRhdGEpID0+ICh7XG4gICAgbnVtYmVyT2Y6ICgpID0+IGRhdGEubGlzdC5sZW5ndGgsXG4gICAgdGVzdDogKCkgPT4gZGF0YS5kZXNjcmlwdGlvbixcbn0pXG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmdldFRpdGxlKGRhdGEpLFxuICAgICAgICAuLi5nZXREZXNjcmlwdGlvbihkYXRhKSxcbiAgICAgICAgLi4uZ2V0RHVlRGF0ZShkYXRhKSxcbiAgICAgICAgLi4uZ2V0UHJpb3JpdHkoZGF0YSksXG4gICAgICAgIC4uLnVucGFja1Rhc2soZGF0YSksXG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0SXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICBpdGVtOiAnJyxcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5nZXRUaXRsZShkYXRhKSxcbiAgICAgICAgLi4uZ2V0RGVzY3JpcHRpb24oZGF0YSksXG4gICAgICAgIC4uLmdldFRvRG9zKGRhdGEpLFxuICAgICAgICAuLi5wdXNoTmV3SXRlbShkYXRhKSxcbiAgICAgICAgLi4uZ2V0TnVtYmVyVG9kb3MoZGF0YSksXG4gICAgfVxufVxuXG5leHBvcnQgeyBwcm9qZWN0SXRlbSwgdG9kb0l0ZW0gfVxuIiwiY29uc3QgZGl2RmFjdG9yeSA9ICguLi5jbGFzc05hbWVzKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpZiAoY2xhc3NOYW1lcykge1xuICAgICAgICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlVGV4dCA9IChjb250ZW50LCB0eXBlKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcblxuICAgIGlmIChjb250ZW50IHx8IGNvbnRlbnQgPT09IDApIHtcbiAgICAgICAgdGV4dC5pbm5lclRleHQgPSBjb250ZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRcbn1cblxuZXhwb3J0IHsgZGl2RmFjdG9yeSwgY3JlYXRlVGV4dCB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9