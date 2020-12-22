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
            const button = document.querySelector('.button.add')
            const title = document.querySelector('.todo-container > .task')
            const date = document.querySelector(
                '.form-container > input[type=date]'
            )
            const priority = document.querySelector('.form-container > select')
            // https://www.w3schools.com/jsref/dom_obj_select.asp
            title.value = taskObject.description
            date.value = taskObject.dueDate
            priority.selectedIndex = taskObject.priority
            button.textContent = 'Change'
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
        displayController.drawProjects()
        displayController.drawProjectToDos(projectId)
        _save()
    }

    const addTaskToProject = (key, todo) => {
        const currentProject = projectList[key]
        currentProject.addItem(todo)
        _save()
    }

    const modifyTask = (key, todo, itemKey) => {
        const currentProject = projectList[key]
        currentProject.modifyItem(todo, itemKey)
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
        modifyTask,
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

function handleClick() {
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
    const { itemKey } = e.target.closest('li').dataset

    if (target === 'add' && itemKey) {
        const { title, date, priority } = grabTaskForm()
        const todo = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)('title', title, date, priority)
        projectController.modifyTask(project, todo, itemKey)
        displayController.drawProjectToDos(project)
        displayController.drawProjects()
    } else if (target === 'add') {
        const { title, date, priority } = grabTaskForm()
        const todo = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)('title', title, date, priority)
        projectController.addTaskToProject(project, todo)
        displayController.drawProjectToDos(project)
        displayController.drawProjects()
    } else {
        displayController.drawProjectToDos(project)
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
    const confirmAction = window.confirm('Are you Sure?')
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
    }, 2000)
}

function handleAddTask() {
    const instigator = document.querySelector('.action-li')
    const form = document.querySelector('.todo-form')
    if (form !== null) return
    displayController.drawTaskForm(instigator)
}

function editTasks(e) {
    const li = e.target.closest('li')
    const form = document.querySelector('.todo-form')
    if (!li || e.target.nodeName !== 'DIV' || form !== null) return
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

const generateTaskForm = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('todo-form')
    const form = document.createElement('form')
    const tdcontainer = generateToDoForm()
    const options = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-container')
    options.innerHTML = generateToDoOptions()
    const footer = getFormFooter()
    footer.classList.add('todo-footer')

    form.appendChild(tdcontainer)
    form.appendChild(options)
    form.appendChild(footer)
    parent.appendChild(form)

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

const manageItems = (data) => ({
    addItem: (item) => {
        data.list.push(item)
    },
    modifyItem: (item, key) => {
        data.list.splice(key, 1, item)
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
        ...manageItems(data),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcz9mZjlhIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2NyaXB0cy9vYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1G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LFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSw2QkFBNkIsa0JBQWtCLG1CQUFt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QUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakdoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFaUM7Ozs7Ozs7VUNyQmpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIGJvcmRlcjogMCAqL1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogI2RiNGMzZjtcXHJcXG4gICAgLS1ob3ZlcjogI2Q4ZDhkODtcXHJcXG4gICAgLS1hZGQtZGlzYWJsZWQ6ICNmNGNhYzY7XFxyXFxuICAgIC0tbWVkaXVtLXByaW9yaXR5OiBvcmFuZ2U7XFxyXFxuICAgIC0taGlnaC1wcmlvcml0eTogIzk5MDAwMDtcXHJcXG4gICAgLS1pbnB1dC1jb2xvcjogICNmMWYxZjE7XFxyXFxuICAgIC0tcGxhaW4tcmVkOiByZWQ7XFxyXFxuICAgIC0tb3ZlcmxheS1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWFwcCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjVmciA0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50YXNrLXRhYiA+IGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlciA+IGgxLCAudGFzay10YWI+IGgxe1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbiAgICAvKiBuZWVkIHRvIGZsb2F0IC8gY2VudGVyIGl0IG9uIHBhZ2UgYXMgd2VsbCBhcyBhZGQgXFxcImNvbnRhaW5lciB0byBtYWtlIG9wYWNpdHlcXFwiICovXFxyXFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMTVweDsgKi9cXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIC8qIHRlbXBvcmFyeSAsIGRlbGV0ZSBsYXRlciAqL1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDk7XFxyXFxuXFxyXFxuICAgIC8qIGNlbnRlciBpbiBzY3JlZW4gKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGJvdHRvbTogYXV0bztcXHJcXG4gICAgcmlnaHQ6IGF1dG87XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7ICovXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWlucHV0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24ge1xcclxcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgICAgIGJvcmRlcjogM3B4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hZGQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWluLXJlZCk7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZDpkaXNhYmxlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYWRkLWRpc2FibGVkKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWhlYWRlciB7XFxyXFxuICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1mb290ZXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgcGFkZGluZzogNXB4IDIwcHhcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1vdmVybGF5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1vdmVybGF5LWNvbG9yKTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5wbHVzIHtcXHJcXG4gICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgcGFkZGluZzogMCA0LjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbjpob3ZlciA+IHAge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGxhaW4tcmVkKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uOmhvdmVyID4gLnBsdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGFpbi1yZWQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAwIDE1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGkge1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0ID4gdWwge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2tcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBhdXRvIDE1MHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gPiBkaXYsIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIC8qIHdpZHRoOiAyMDBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICAgIHdpZHRoOiAxLjVlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvb3RlciA+IC5idXR0b24ge1xcclxcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvb3RlciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59IFxcclxcblxcclxcbnNlbGVjdCwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvdW50ZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxyXFxuICAgIGdyaWQtYXJlYTogJ2NvdW50JztcXHJcXG59XFxyXFxuXFxyXFxuLyogLmRlbGV0ZWQtc2NhbGUge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlZCB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxufSAqL1xcclxcblxcclxcbi50b2RvLWl0ZW0gPiBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIH4gZGl2IHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW5tYXgoMjNweCwgYXV0byk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0gPiAubGEtdHJhc2gge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wbGFpbi1yZWQpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIgPiAubGEtdHJhc2gge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tbGkge1xcclxcbiAgICB3aWR0aDogNzc3cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDNweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMjBweDtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0ge1xcclxcbiAgICBjb2xvcjogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaCB7XFxyXFxuICAgIGNvbG9yOiAjOTkwMDAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzb3VyY2VzL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpRkFBaUY7SUFDakY7O2tCQUVjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsVUFBVTs7SUFFVixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDOztFQUVsQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLGdCQUFnQjtFQUNsQjs7RUFFQTtRQUNNLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLDZCQUE2QjtFQUNuQzs7RUFFQTtNQUNJLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLGtDQUFrQztNQUNsQyxZQUFZO0VBQ2hCOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUVBO01BQ0ksYUFBYTtNQUNiLDhCQUE4Qjs7RUFFbEM7O0VBRUE7TUFDSSxhQUFhO01BQ2IseUJBQXlCO01BQ3pCLDJCQUEyQjtNQUMzQjs7QUFFTjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJOztBQUVKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7OztHQVFHOztBQUVIO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogYm9yZGVyOiAwICovXFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1tYWluLWNvbG9yOiAjZGI0YzNmO1xcclxcbiAgICAtLWhvdmVyOiAjZDhkOGQ4O1xcclxcbiAgICAtLWFkZC1kaXNhYmxlZDogI2Y0Y2FjNjtcXHJcXG4gICAgLS1tZWRpdW0tcHJpb3JpdHk6IG9yYW5nZTtcXHJcXG4gICAgLS1oaWdoLXByaW9yaXR5OiAjOTkwMDAwO1xcclxcbiAgICAtLWlucHV0LWNvbG9yOiAgI2YxZjFmMTtcXHJcXG4gICAgLS1wbGFpbi1yZWQ6IHJlZDtcXHJcXG4gICAgLS1vdmVybGF5LWNvbG9yOiAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNWZyIDRmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGFiID4gaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS80O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyID4gaDEsIC50YXNrLXRhYj4gaDF7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxyXFxuICAgIC8qIG5lZWQgdG8gZmxvYXQgLyBjZW50ZXIgaXQgb24gcGFnZSBhcyB3ZWxsIGFzIGFkZCBcXFwiY29udGFpbmVyIHRvIG1ha2Ugb3BhY2l0eVxcXCIgKi9cXHJcXG4gICAgLyogcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAxNXB4OyAqL1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgLyogdGVtcG9yYXJ5ICwgZGVsZXRlIGxhdGVyICovXFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG5cXHJcXG4gICAgLyogY2VudGVyIGluIHNjcmVlbiAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbiAgICByaWdodDogYXV0bztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTsgKi9cXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAwIDIycHggMDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6dmFyKC0taW5wdXQtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbiB7XFxyXFxuICAgICAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICAgICAgYm9yZGVyOiAzcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFkZCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxhaW4tcmVkKTtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkOmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hZGQtZGlzYWJsZWQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0taGVhZGVyIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWZvb3RlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBwYWRkaW5nOiA1cHggMjBweFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLW92ZXJsYXkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW92ZXJsYXktY29sb3IpO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsdXMge1xcclxcbiAgICBtYXJnaW46IDAgMnB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDQuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1hY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uOmhvdmVyID4gcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wbGFpbi1yZWQpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb246aG92ZXIgPiAucGx1cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWluLXJlZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saSB7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgPiB1bCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFja1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IGF1dG8gMTUwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSA+IGRpdiwgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgLyogd2lkdGg6IDIwMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gICAgd2lkdGg6IDEuNWVtO1xcclxcbiAgICBoZWlnaHQ6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb3JtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9vdGVyID4gLmJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9vdGVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTpub25lO1xcclxcbn0gXFxyXFxuXFxyXFxuc2VsZWN0LCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY291bnRlciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgZm9udC1zaXplOiAuODVlbTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAnY291bnQnO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuZGVsZXRlZC1zY2FsZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVkIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnRvZG8taXRlbSA+IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiBkaXYge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgyM3B4LCBhdXRvKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSA+IC5sYS10cmFzaCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBsYWluLXJlZCk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciA+IC5sYS10cmFzaCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1saSB7XFxyXFxuICAgIHdpZHRoOiA3NzdweDtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4IDAgM3B4O1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bSB7XFxyXFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5oaWdoIHtcXHJcXG4gICAgY29sb3I6ICM5OTAwMDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3RGb3JtLCBnZW5lcmF0ZVRhc2tGb3JtIH0gZnJvbSAnLi9zY3JpcHRzL2Zvcm1zJ1xuaW1wb3J0IHsgZGl2RmFjdG9yeSwgY3JlYXRlVGV4dCB9IGZyb20gJy4vc2NyaXB0cy91dGlscydcbmltcG9ydCB7IHByb2plY3RJdGVtLCB0b2RvSXRlbSB9IGZyb20gJy4vc2NyaXB0cy9vYmplY3RzJ1xuaW1wb3J0ICcuL3Jlc291cmNlcy9zdHlsZXMvaW5kZXguY3NzJ1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgX3Byb2plY3RJdGVtTGF5b3V0ID0gKG5hbWUsIGNvdW50LCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgICAgICBjb25zdCBkaXYgPSBkaXZGYWN0b3J5KCdwcm9qZWN0LWl0ZW0nKVxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNyZWF0ZVRleHQobmFtZSwgJ3NwYW4nKVxuICAgICAgICBjb25zdCBjb3VudGVyID0gY3JlYXRlVGV4dChjb3VudCwgJ3NwYW4nKVxuICAgICAgICBjb25zdCB0ZXh0RGl2ID0gZGl2RmFjdG9yeSgndGV4dCcpXG4gICAgICAgIGJ1dHRvbi52YWx1ZSA9IGtleVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbGFzJywgJ2xhLXRyYXNoJylcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saScpXG4gICAgICAgIGNvdW50ZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb3VudGVyJylcblxuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGNvdW50ZXIpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgY29uc3QgX3RvZG9MYXlvdXQgPSAoZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpJylcbiAgICAgICAgY29uc3QgZGl2ID0gZGl2RmFjdG9yeSgndG9kby1pdGVtJylcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgICAgIGNvbnN0IGRlc2MgPSBjcmVhdGVUZXh0KGRlc2NyaXB0aW9uLCAnZGl2JylcbiAgICAgICAgY29uc3QgZGF0ZSA9IGNyZWF0ZVRleHQoZHVlRGF0ZSwgJ2RpdicpXG4gICAgICAgIGNvbnN0IHByaSA9IGNyZWF0ZVRleHQoX3JlcGVhdFByaW9yaXR5KHByaW9yaXR5KSwgJ2RpdicpXG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlDbGFzcyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ11cbiAgICAgICAgcHJpLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDbGFzc1twcmlvcml0eV0pXG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzYylcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRhdGUpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcmkpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdilcblxuICAgICAgICByZXR1cm4gbGlcbiAgICB9XG5cbiAgICBjb25zdCBfcmVwZWF0UHJpb3JpdHkgPSAobnVtKSA9PiB7XG4gICAgICAgIGlmIChudW0gPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyEnLnJlcGVhdChudW0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgY29uc3QgX2NsZWFyQ2hpbGROb2Rlc09mID0gKG5vZGUpID0+IHtcbiAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IF9zZXRBY3RpdmVQcm9qZWN0ID0gKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGknKVxuICAgICAgICBjb25zdCBuZXdBY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBsaVtkYXRhLXByb2plY3Qta2V5PScke2tleX0nXWBcbiAgICAgICAgKVxuICAgICAgICBwcm9qZWN0c0l0ZW1zLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbmV3QWN0aXZlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGNvbnN0IF9kcmF3QWRkQWN0aW9ucyA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3Rpb24tbGknKVxuICAgICAgICBwYXJlbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJhY3Rpb24gYWRkLXRvZG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwbHVzXCI+KzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHt0aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuXG4gICAgICAgIHJldHVybiBwYXJlbnRcbiAgICB9XG5cbiAgICBjb25zdCBfdXBkYXRlVGFza0hlYWRlciA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRhYiA+IGgxJylcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IHByb2plY3RcbiAgICB9XG5cbiAgICBjb25zdCBfYWRkVGFza0xpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKVxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRUYXNrKVxuICAgIH1cblxuICAgIGNvbnN0IF9jdXJyZW50VGFza1ZhbHVlcyA9IChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50S2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpLmRhdGFzZXRcbiAgICAgICAgICAgIC5jdXJyZW50UHJvamVjdFxuICAgICAgICBjb25zdCB0YXNrT2JqZWN0ID0gcHJvamVjdENvbnRyb2xsZXJcbiAgICAgICAgICAgIC5saXN0UHJvamVjdEl0ZW1zKHBhcmVudEtleSlcbiAgICAgICAgICAgIFtrZXldLnVucGFja0l0ZW1zKClcblxuICAgICAgICByZXR1cm4gdGFza09iamVjdFxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1vdmVybGF5JylcbiAgICAgICAgb3ZlcmxheS5kYXRhc2V0Lm92ZXJsYXkgPSB0cnVlXG5cbiAgICAgICAgcGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIG92ZXJsYXkpXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0Rm9ybSgpKVxuXG4gICAgICAgIC8vIHdhcyBpbiB0aGUgX3Byb2plY3RGb3JtRXZlbnRMaXN0ZW5lcnNcbiAgICAgICAgZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkRm9yRWFjaChcbiAgICAgICAgICAgICcucHJvamVjdC1mb3JtIGJ1dHRvbicsXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlUHJvamVjdEZvcm1cbiAgICAgICAgKVxuICAgICAgICBldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGQoXG4gICAgICAgICAgICAnLmRpYWxvZy1vdmVybGF5JyxcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBoYW5kbGVQcm9qZWN0Rm9ybVxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1Rhc2tGb3JtID0gKGluc3RpZ2F0b3IpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gaW5zdGlnYXRvclxuICAgICAgICBjb25zdCB7IGl0ZW1LZXkgfSA9IHBhcmVudC5kYXRhc2V0XG4gICAgICAgIC8vIGNvbnN0IHRhc2tPYmplY3QgPSBfY3VycmVudFRhc2tWYWx1ZXMoaXRlbUtleSlcblxuICAgICAgICBfY2xlYXJDaGlsZE5vZGVzT2YocGFyZW50KVxuICAgICAgICBwYXJlbnQuYXBwZW5kKGdlbmVyYXRlVGFza0Zvcm0oKSlcblxuICAgICAgICBpZiAoaW5zdGlnYXRvci5kYXRhc2V0Lml0ZW1LZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSBfY3VycmVudFRhc2tWYWx1ZXMoaXRlbUtleSlcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24uYWRkJylcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyID4gLnRhc2snKVxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy5mb3JtLWNvbnRhaW5lciA+IGlucHV0W3R5cGU9ZGF0ZV0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lciA+IHNlbGVjdCcpXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2pzcmVmL2RvbV9vYmpfc2VsZWN0LmFzcFxuICAgICAgICAgICAgdGl0bGUudmFsdWUgPSB0YXNrT2JqZWN0LmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBkYXRlLnZhbHVlID0gdGFza09iamVjdC5kdWVEYXRlXG4gICAgICAgICAgICBwcmlvcml0eS5zZWxlY3RlZEluZGV4ID0gdGFza09iamVjdC5wcmlvcml0eVxuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NoYW5nZSdcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZEZvckVhY2goXG4gICAgICAgICAgICAnLnRvZG8tZm9vdGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlVGFza0Zvcm1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgX2NsZWFyQ2hpbGROb2Rlc09mKHBhcmVudClcbiAgICAgICAgY29uc3QgYXJyYXkgPSBwcm9qZWN0Q29udHJvbGxlci5saXN0UHJvamVjdHMoKVxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwXG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IF9wcm9qZWN0SXRlbUxheW91dChcbiAgICAgICAgICAgICAgICBvYmplY3QudGl0bGUoKSxcbiAgICAgICAgICAgICAgICBvYmplY3QuZ2V0SXRlbXMoKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGkuZGF0YXNldC5wcm9qZWN0S2V5ID0gY291bnRlclxuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgICAgICBjb3VudGVyICs9IDFcbiAgICAgICAgfSlcblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1Byb2plY3RUb0RvcyA9IChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpXG4gICAgICAgIHBhcmVudC5kYXRhc2V0LmN1cnJlbnRQcm9qZWN0ID0ga2V5XG4gICAgICAgIF9jbGVhckNoaWxkTm9kZXNPZihwYXJlbnQpXG4gICAgICAgIGlmIChrZXkgPT09IGZhbHNlKSByZXR1cm5cbiAgICAgICAgY29uc3QgYXJyYXkgPSBwcm9qZWN0Q29udHJvbGxlci5saXN0UHJvamVjdEl0ZW1zKGtleSlcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChfZHJhd0FkZEFjdGlvbnMoJ0FkZCBUYXNrJykpXG4gICAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICAgIGFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBfdG9kb0xheW91dChcbiAgICAgICAgICAgICAgICBvYmplY3QuZGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgICAgICBvYmplY3QuZHVlRGF0ZSgpLFxuICAgICAgICAgICAgICAgIG9iamVjdC5wcmlvcml0eSgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBsaS5kYXRhc2V0Lml0ZW1LZXkgPSBjb3VudGVyXG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICAgICAgY291bnRlciArPSAxXG4gICAgICAgIH0pXG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGxpc3QpXG4gICAgICAgIF91cGRhdGVUYXNrSGVhZGVyKHByb2plY3RDb250cm9sbGVyLnByb2plY3RUaXRsZShrZXkpKVxuICAgICAgICBfc2V0QWN0aXZlUHJvamVjdChrZXkpXG4gICAgICAgIF9hZGRUYXNrTGlzdGVuZXIoKVxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctb3ZlcmxheScpXG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkcmF3UHJvamVjdEZvcm0sXG4gICAgICAgIGRyYXdQcm9qZWN0cyxcbiAgICAgICAgZHJhd1Byb2plY3RUb0RvcyxcbiAgICAgICAgY2xvc2VGb3JtLFxuICAgICAgICBkcmF3VGFza0Zvcm0sXG4gICAgfVxufSkoKVxuXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXVxuXG4gICAgY29uc3QgX3VucGFjayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdW5wYWNrZWQgPSBwcm9qZWN0TGlzdC5tYXAoKHByb2plY3QpID0+IHByb2plY3QudW5wYWNrUHJvamVjdHMoKSlcbiAgICAgICAgcmV0dXJuIHVucGFja2VkXG4gICAgfVxuXG4gICAgY29uc3QgX3NhdmUgPSAoKSA9PiB7XG4gICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnNhdmVUb0xvY2FsU3RvcmFnZShfdW5wYWNrKCkpXG4gICAgfVxuXG4gICAgY29uc3QgbGlzdFByb2plY3RJdGVtcyA9IChrZXkpID0+IHByb2plY3RMaXN0W2tleV0uZ2V0SXRlbXMoKVxuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gKGtleSkgPT4gcHJvamVjdExpc3Rba2V5XS50aXRsZSgpXG5cbiAgICBjb25zdCBsaXN0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0TGlzdFxuXG4gICAgY29uc3QgbnVtYmVyT2ZQcm9qZWN0cyA9ICgpID0+IHByb2plY3RMaXN0Lmxlbmd0aFxuXG4gICAgY29uc3Qgd2VsY29tZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWUgPSBwcm9qZWN0SXRlbSgnV2VsY29tZSEnLCAnJylcbiAgICAgICAgY29uc3Qgd2VsY29tZVRhc2sgPSB0b2RvSXRlbShcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ1lvdXIgRmlyc3QgVGFzayEgQ2xpY2sgdGhlIGNoZWNrYm94IHRvIGNvbXBsZXRlIG1lJyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgMlxuICAgICAgICApXG5cbiAgICAgICAgd2VsY29tZS5hZGRJdGVtKHdlbGNvbWVUYXNrKVxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHdlbGNvbWUpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MoMClcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsUHJvamVjdExvYWQgPSAoc2F2ZWRQcm9qZWN0cykgPT4ge1xuICAgICAgICAvLyBwcm9qZWN0TGlzdCA9IFsuLi5zYXZlZFByb2plY3RzXTtcbiAgICAgICAgc2F2ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SSA9IHByb2plY3RJdGVtKHByb2plY3QudGl0bGUsIHByb2plY3QuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBwcm9qZWN0LnVucGFja2VkLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdG9kb0l0ZW0oXG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBwcm9qZWN0SS5hZGRJdGVtKHRvZG8pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0SSlcbiAgICAgICAgfSlcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcygwKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpXG4gICAgICAgIF9zYXZlKClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBkZWZhdWx0RHJhdyA9IGtleSAtIDEgPD0gMCA/IDAgOiBrZXkgLSAxXG4gICAgICAgIHByb2plY3RMaXN0LnNwbGljZShrZXksIDEpXG4gICAgICAgIF9zYXZlKClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKClcbiAgICAgICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcyhkZWZhdWx0RHJhdylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoa2V5LCBlKSA9PiB7XG4gICAgICAgIC8vIGlmIHRoZXkgdW5jaGVjayBpdCBiZWZvcmUgaXQgZGVsdGVzLCBzdG9wIVxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHJldHVyblxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0JykuZGF0YXNldFxuICAgICAgICAgICAgLmN1cnJlbnRQcm9qZWN0XG4gICAgICAgIHByb2plY3RMaXN0W3Byb2plY3RJZF0uZ2V0SXRlbXMoKS5zcGxpY2Uoa2V5LCAxKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdHMoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKHByb2plY3RJZClcbiAgICAgICAgX3NhdmUoKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAoa2V5LCB0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3Rba2V5XVxuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRJdGVtKHRvZG8pXG4gICAgICAgIF9zYXZlKClcbiAgICB9XG5cbiAgICBjb25zdCBtb2RpZnlUYXNrID0gKGtleSwgdG9kbywgaXRlbUtleSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0W2tleV1cbiAgICAgICAgY3VycmVudFByb2plY3QubW9kaWZ5SXRlbSh0b2RvLCBpdGVtS2V5KVxuICAgICAgICBfc2F2ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgbGlzdFByb2plY3RzLFxuICAgICAgICBsaXN0UHJvamVjdEl0ZW1zLFxuICAgICAgICBhZGRUYXNrVG9Qcm9qZWN0LFxuICAgICAgICBudW1iZXJPZlByb2plY3RzLFxuICAgICAgICBpbml0aWFsUHJvamVjdExvYWQsXG4gICAgICAgIHJlbW92ZVByb2plY3QsXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIHByb2plY3RUaXRsZSxcbiAgICAgICAgd2VsY29tZVByb2plY3QsXG4gICAgICAgIG1vZGlmeVRhc2ssXG4gICAgfVxufSkoKVxuXG5jb25zdCBzdG9yYWdlQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZU5hbWUgPSAncHJvamVjdHMnXG5cbiAgICBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSAob2JqZWN0KSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IG9iamVjdD0gcHJvamVjdENvbnRyb2xsZXIubGlzdFByb2plY3RzKClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2F2ZU5hbWUsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpXG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHNhdmVOYW1lKVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkb2VzRXhpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzYXZlTmFtZSlcblxuICAgICAgICBpZiAoZG9lc0V4aXN0KSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5pbml0aWFsUHJvamVjdExvYWQoSlNPTi5wYXJzZShkb2VzRXhpc3QpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIud2VsY29tZVByb2plY3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2F2ZVRvTG9jYWxTdG9yYWdlLCByZW1vdmVGcm9tTG9jYWxTdG9yYWdlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSB9XG59KSgpXG5cbmNvbnN0IGV2ZW50TGlzdGVuZXJDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGQgPSAoc2VsZWN0b3IsIHR5cGUsIGZ1bmMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYylcbiAgICB9XG5cbiAgICBjb25zdCBhZGRGb3JFYWNoID0gKHNlbGVjdG9yLCB0eXBlLCBmdW5jKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICAgIHBhcmVudC5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGQsIGFkZEZvckVhY2ggfVxufSkoKVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdEZvcm0oKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Rm9ybShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgaWYgKHRhcmdldCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBkZXNjIH0gPSBncmFiRm9ybSgpXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QocHJvamVjdEl0ZW0obmFtZSwgZGVzYykpXG4gICAgICAgIGNhbmNlbEZvcm0oKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdHMoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKFxuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIubnVtYmVyT2ZQcm9qZWN0cygpIC0gMVxuICAgICAgICApXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0Lm92ZXJsYXkgfHwgdGFyZ2V0ID09PSAnY2FuY2VsJykge1xuICAgICAgICBjYW5jZWxGb3JtKClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEZvcm0oKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY2xvc2VGb3JtKClcbn1cblxuZnVuY3Rpb24gZ3JhYkZvcm0oKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJvZHkgPiAubmFtZScpLnZhbHVlXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJvZHkgPiAuZGVzYycpLnZhbHVlXG5cbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIG91dCB0aGUgbmFtZSEnKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4geyBuYW1lLCBkZXNjIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFza0Zvcm0oZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKS5kYXRhc2V0LmN1cnJlbnRQcm9qZWN0XG4gICAgY29uc3QgeyBpdGVtS2V5IH0gPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpLmRhdGFzZXRcblxuICAgIGlmICh0YXJnZXQgPT09ICdhZGQnICYmIGl0ZW1LZXkpIHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkgfSA9IGdyYWJUYXNrRm9ybSgpXG4gICAgICAgIGNvbnN0IHRvZG8gPSB0b2RvSXRlbSgndGl0bGUnLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLm1vZGlmeVRhc2socHJvamVjdCwgdG9kbywgaXRlbUtleSlcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0Rvcyhwcm9qZWN0KVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdHMoKVxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnYWRkJykge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBkYXRlLCBwcmlvcml0eSB9ID0gZ3JhYlRhc2tGb3JtKClcbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9JdGVtKCd0aXRsZScsIHRpdGxlLCBkYXRlLCBwcmlvcml0eSlcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuYWRkVGFza1RvUHJvamVjdChwcm9qZWN0LCB0b2RvKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKHByb2plY3QpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0Rvcyhwcm9qZWN0KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ3JhYlRhc2tGb3JtKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyID4gLnRhc2snKS52YWx1ZVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXIgPiBpbnB1dFt0eXBlPWRhdGVdJylcbiAgICAgICAgLnZhbHVlXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXIgPiBzZWxlY3QnKS52YWx1ZVxuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5IH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gICAgY29uc3QgdGFnID0gZS50YXJnZXQudGFnTmFtZVxuICAgIGlmICh0YWcgIT09ICdJJykgcmV0dXJuXG4gICAgY29uc3QgY29uZmlybUFjdGlvbiA9IHdpbmRvdy5jb25maXJtKCdBcmUgeW91IFN1cmU/JylcbiAgICBpZiAoY29uZmlybUFjdGlvbikge1xuICAgICAgICBjb25zdCBrZXkgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLnJlbW92ZVByb2plY3Qoa2V5KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdChlKSB7XG4gICAgY29uc3QgbGkgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpXG4gICAgaWYgKCFsaSB8fCBlLnRhcmdldC50YWdOYW1lID09PSAnSScpIHJldHVyblxuICAgIGNvbnN0IGtleSA9IGxpLmRhdGFzZXQucHJvamVjdEtleVxuICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3Moa2V5KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGVja3MoZSkge1xuICAgIGNvbnN0IGxpID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKVxuICAgIGlmICghbGkgfHwgIWUudGFyZ2V0LmNoZWNrZWQpIHJldHVyblxuICAgIGNvbnN0IGtleSA9IGxpLmRhdGFzZXQuaXRlbUtleVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLnJlbW92ZVRhc2soa2V5LCBlKVxuICAgIH0sIDIwMDApXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soKSB7XG4gICAgY29uc3QgaW5zdGlnYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24tbGknKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbiAgICBpZiAoZm9ybSAhPT0gbnVsbCkgcmV0dXJuXG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Rhc2tGb3JtKGluc3RpZ2F0b3IpXG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrcyhlKSB7XG4gICAgY29uc3QgbGkgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKVxuICAgIGlmICghbGkgfHwgZS50YXJnZXQubm9kZU5hbWUgIT09ICdESVYnIHx8IGZvcm0gIT09IG51bGwpIHJldHVyblxuICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdUYXNrRm9ybShsaSlcbn1cblxuZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkKCcucHJvamVjdHMnLCAnY2xpY2snLCBkZWxldGVQcm9qZWN0KVxuZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkKCcucHJvamVjdHMnLCAnY2xpY2snLCBjaGFuZ2VQcm9qZWN0KVxuZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkKCcudGFzay10YWInLCAnY2hhbmdlJywgaGFuZGxlQ2hlY2tzKVxuZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkKCcudGFzay10YWInLCAndHJhbnNpdGlvbmVkJywgaGFuZGxlQ2hlY2tzKVxuZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkKCcudGFzay10YWInLCAnY2xpY2snLCBlZGl0VGFza3MpXG5ldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGQoJy5hZGQtcHJvamVjdCcsICdjbGljaycsIGhhbmRsZUNsaWNrKVxuXG5zdG9yYWdlQ29udHJvbGxlci5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpXG4iLCJpbXBvcnQgeyBkaXZGYWN0b3J5LCBjcmVhdGVUZXh0IH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgZm9ybUVsZW1lbnRzID0gKGxhYmVsQ29udGVudCwgcGxhY2Vob2xkZXIsIG5hbWUsIHR5cGUsIGNsYXNzTikgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBuYW1lKVxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxDb250ZW50XG5cbiAgICBpbnB1dC50eXBlID0gdHlwZVxuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICBpbnB1dC5uYW1lID0gbmFtZVxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOKVxuICAgIGlucHV0LmF1dG9jb21wbGV0ZSA9ICdvZmYnXG4gICAgaWYgKG5hbWUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5wdXQsIGxhYmVsIH1cbn1cblxuY29uc3QgZ2V0Rm9ybUhlYWRlciA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkaXZGYWN0b3J5KCdmb3JtLWhlYWRlcicpXG4gICAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KHRpdGxlLCAnaDEnKSlcblxuICAgIHJldHVybiBmb3JtSGVhZGVyXG59XG5cbmNvbnN0IGdldEZvcm1Gb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZGl2RmFjdG9yeSgnZm9ybS1mb290ZXInKVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdjYW5jZWwnKVxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICBjYW5jZWxCdXR0b24udmFsdWUgPSAnY2FuY2VsJ1xuXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCdcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2FkZCcpXG4gICAgYWRkQnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgIGFkZEJ1dHRvbi52YWx1ZSA9ICdhZGQnXG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG5cbiAgICByZXR1cm4gcGFyZW50XG59XG5cbmNvbnN0IGdldEZvcm1JbnB1dHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZGl2RmFjdG9yeSgnZm9ybS1jb250YWluZXInKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBkaXZGYWN0b3J5KCdmb3JtLWJvZHknKVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZm9ybUVsZW1lbnRzKFxuICAgICAgICAnUHJvamVjdCBOYW1lJyxcbiAgICAgICAgJycsXG4gICAgICAgICd0aXRsZScsXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ25hbWUnXG4gICAgKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybUVsZW1lbnRzKFxuICAgICAgICAnUHJvamVjdCBEZXNjcmlwdGlvbicsXG4gICAgICAgICcnLFxuICAgICAgICAnTXkgZmlyc3QgcHJvamVjdCcsXG4gICAgICAgICd0ZXh0JyxcbiAgICAgICAgJ2Rlc2MnXG4gICAgKVxuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZS5sYWJlbClcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lLmlucHV0KVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24ubGFiZWwpXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5pbnB1dClcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKVxuXG4gICAgcmV0dXJuIHBhcmVudFxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9Gb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRpdkZhY3RvcnkoJ3RvZG8tY29udGFpbmVyJylcbiAgICBjb25zdCB0aXRsZUZvcm0gPSBmb3JtRWxlbWVudHMoXG4gICAgICAgICcnLFxuICAgICAgICAnZS5nLiB3YXNoIHRoZSBjYXInLFxuICAgICAgICAndGl0bGUnLFxuICAgICAgICAndGV4dCcsXG4gICAgICAgICd0YXNrJ1xuICAgIClcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGl0bGVGb3JtLmxhYmVsKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aXRsZUZvcm0uaW5wdXQpXG5cbiAgICByZXR1cm4gcGFyZW50XG59XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb09wdGlvbnMgPSAoKSA9PiBgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCI+XG4gICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+Tm9ybWFsPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5IaWdoPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+YFxuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRpdkZhY3RvcnkoJ2Zvcm0nLCAncHJvamVjdC1mb3JtJylcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZ2V0Rm9ybUhlYWRlcignQWRkIGEgcHJvamVjdCcpXG4gICAgY29uc3QgYm9keSA9IGdldEZvcm1JbnB1dHMoKVxuICAgIGNvbnN0IGZvb3RlciA9IGdldEZvcm1Gb290ZXIoKVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJvZHkpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3RlcilcblxuICAgIHJldHVybiBwYXJlbnRcbn1cblxuY29uc3QgZ2VuZXJhdGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkaXZGYWN0b3J5KCd0b2RvLWZvcm0nKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCB0ZGNvbnRhaW5lciA9IGdlbmVyYXRlVG9Eb0Zvcm0oKVxuICAgIGNvbnN0IG9wdGlvbnMgPSBkaXZGYWN0b3J5KCdmb3JtLWNvbnRhaW5lcicpXG4gICAgb3B0aW9ucy5pbm5lckhUTUwgPSBnZW5lcmF0ZVRvRG9PcHRpb25zKClcbiAgICBjb25zdCBmb290ZXIgPSBnZXRGb3JtRm9vdGVyKClcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1mb290ZXInKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZGNvbnRhaW5lcilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG9wdGlvbnMpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb290ZXIpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICByZXR1cm4gcGFyZW50XG59XG5cbmV4cG9ydCB7IGdlbmVyYXRlUHJvamVjdEZvcm0sIGdlbmVyYXRlVGFza0Zvcm0gfVxuIiwiY29uc3QgZ2V0VGl0bGUgPSAoZGF0YSkgPT4gKHtcbiAgICB0aXRsZTogKCkgPT4gZGF0YS50aXRsZSxcbn0pXG5cbmNvbnN0IGdldERlc2NyaXB0aW9uID0gKGRhdGEpID0+ICh7XG4gICAgZGVzY3JpcHRpb246ICgpID0+IGRhdGEuZGVzY3JpcHRpb24sXG59KVxuXG5jb25zdCBnZXREdWVEYXRlID0gKGRhdGEpID0+ICh7XG4gICAgZHVlRGF0ZTogKCkgPT4gZGF0YS5kdWVEYXRlLFxufSlcblxuY29uc3QgZ2V0UHJpb3JpdHkgPSAoZGF0YSkgPT4gKHtcbiAgICBwcmlvcml0eTogKCkgPT4gZGF0YS5wcmlvcml0eSxcbn0pXG5cbmNvbnN0IHVucGFja1Rhc2sgPSAoZGF0YSkgPT4gKHtcbiAgICB1bnBhY2tJdGVtczogKCkgPT4gKHtcbiAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkYXRhLmR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBkYXRhLnByaW9yaXR5LFxuICAgIH0pLFxufSlcblxuY29uc3QgZ2V0VG9Eb3MgPSAoZGF0YSkgPT4gKHtcbiAgICBnZXRJdGVtczogKCkgPT4gZGF0YS5saXN0LFxuICAgIHVucGFja1Byb2plY3RzOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVucGFja2VkID0gZGF0YS5saXN0Lm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza09iamVjdCA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGFzay50aXRsZSgpLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uKCksXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlKCksXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IHRhc2sucHJpb3JpdHkoKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrT2JqZWN0XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2sgPSB7XG4gICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdW5wYWNrZWQsXG4gICAgICAgICAgICBpdGVtOiBkYXRhLml0ZW0sXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvamVjdFRhc2tcbiAgICB9LFxufSlcblxuY29uc3QgbWFuYWdlSXRlbXMgPSAoZGF0YSkgPT4gKHtcbiAgICBhZGRJdGVtOiAoaXRlbSkgPT4ge1xuICAgICAgICBkYXRhLmxpc3QucHVzaChpdGVtKVxuICAgIH0sXG4gICAgbW9kaWZ5SXRlbTogKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICBkYXRhLmxpc3Quc3BsaWNlKGtleSwgMSwgaXRlbSlcbiAgICB9LFxufSlcblxuY29uc3QgZ2V0TnVtYmVyVG9kb3MgPSAoZGF0YSkgPT4gKHtcbiAgICBudW1iZXJPZjogKCkgPT4gZGF0YS5saXN0Lmxlbmd0aCxcbiAgICB0ZXN0OiAoKSA9PiBkYXRhLmRlc2NyaXB0aW9uLFxufSlcblxuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZ2V0VGl0bGUoZGF0YSksXG4gICAgICAgIC4uLmdldERlc2NyaXB0aW9uKGRhdGEpLFxuICAgICAgICAuLi5nZXREdWVEYXRlKGRhdGEpLFxuICAgICAgICAuLi5nZXRQcmlvcml0eShkYXRhKSxcbiAgICAgICAgLi4udW5wYWNrVGFzayhkYXRhKSxcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RJdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgbGlzdDogW10sXG4gICAgICAgIGl0ZW06ICcnLFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmdldFRpdGxlKGRhdGEpLFxuICAgICAgICAuLi5nZXREZXNjcmlwdGlvbihkYXRhKSxcbiAgICAgICAgLi4uZ2V0VG9Eb3MoZGF0YSksXG4gICAgICAgIC4uLm1hbmFnZUl0ZW1zKGRhdGEpLFxuICAgICAgICAuLi5nZXROdW1iZXJUb2RvcyhkYXRhKSxcbiAgICB9XG59XG5cbmV4cG9ydCB7IHByb2plY3RJdGVtLCB0b2RvSXRlbSB9XG4iLCJjb25zdCBkaXZGYWN0b3J5ID0gKC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGlmIChjbGFzc05hbWVzKSB7XG4gICAgICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdlxufVxuXG5jb25zdCBjcmVhdGVUZXh0ID0gKGNvbnRlbnQsIHR5cGUpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuXG4gICAgaWYgKGNvbnRlbnQgfHwgY29udGVudCA9PT0gMCkge1xuICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IGNvbnRlbnRcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dFxufVxuXG5leHBvcnQgeyBkaXZGYWN0b3J5LCBjcmVhdGVUZXh0IH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=