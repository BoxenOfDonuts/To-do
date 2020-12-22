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

    const modifyTask = (key, todo, itemKey) => {
        const currentProject = projectList[key]
        currentProject.modifyItem(todo, itemKey)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcz9mZjlhIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2NyaXB0cy9vYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1G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LFlBQVksWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSw2QkFBNkIsa0JBQWtCLG1CQUFt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QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWlDOzs7Ozs7O1VDckJqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiBib3JkZXI6IDAgKi9cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLW1haW4tY29sb3I6ICNkYjRjM2Y7XFxyXFxuICAgIC0taG92ZXI6ICNkOGQ4ZDg7XFxyXFxuICAgIC0tYWRkLWRpc2FibGVkOiAjZjRjYWM2O1xcclxcbiAgICAtLW1lZGl1bS1wcmlvcml0eTogb3JhbmdlO1xcclxcbiAgICAtLWhpZ2gtcHJpb3JpdHk6ICM5OTAwMDA7XFxyXFxuICAgIC0taW5wdXQtY29sb3I6ICAjZjFmMWYxO1xcclxcbiAgICAtLXBsYWluLXJlZDogcmVkO1xcclxcbiAgICAtLW92ZXJsYXktY29sb3I6ICByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby1hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC41ZnIgNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGFzay10YWIgPiBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGFiIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXIgPiBoMSwgLnRhc2stdGFiPiBoMXtcXHJcXG4gICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gICAgLyogbmVlZCB0byBmbG9hdCAvIGNlbnRlciBpdCBvbiBwYWdlIGFzIHdlbGwgYXMgYWRkIFxcXCJjb250YWluZXIgdG8gbWFrZSBvcGFjaXR5XFxcIiAqL1xcclxcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7ICovXFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAvKiB0ZW1wb3JhcnkgLCBkZWxldGUgbGF0ZXIgKi9cXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcblxcclxcbiAgICAvKiBjZW50ZXIgaW4gc2NyZWVuICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBib3R0b206IGF1dG87XFxyXFxuICAgIHJpZ2h0OiBhdXRvO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxOyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDp2YXIoLS1pbnB1dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gICAgICBib3JkZXI6IDNweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWRkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGFpbi1yZWQpO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQ6ZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFkZC1kaXNhYmxlZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1oZWFkZXIge1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tZm9vdGVyIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kaWFsb2ctb3ZlcmxheSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tb3ZlcmxheS1jb2xvcik7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGx1cyB7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNC41cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb246aG92ZXIgPiBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBsYWluLXJlZCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbjpob3ZlciA+IC5wbHVzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxhaW4tcmVkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCA+IHVsIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggYXV0byAxNTBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtID4gZGl2LCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICAvKiB3aWR0aDogMjAwcHg7ICovXFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgICB3aWR0aDogMS41ZW07XFxyXFxuICAgIGhlaWdodDogMS41ZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb290ZXIgPiAuYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb290ZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOm5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG5zZWxlY3QsIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb3VudGVyIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBmb250LXNpemU6IC44NWVtO1xcclxcbiAgICBncmlkLWFyZWE6ICdjb3VudCc7XFxyXFxufVxcclxcblxcclxcbi8qIC5kZWxldGVkLXNjYWxlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLW91dDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZWQge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4udG9kby1pdGVtID4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB+IGRpdiB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWlubWF4KDIzcHgsIGF1dG8pO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtID4gLmxhLXRyYXNoIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGxhaW4tcmVkKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtOmhvdmVyID4gLmxhLXRyYXNoIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWxpIHtcXHJcXG4gICAgd2lkdGg6IDc3N3B4O1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAzcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtIHtcXHJcXG4gICAgY29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2gge1xcclxcbiAgICBjb2xvcjogIzk5MDAwMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc291cmNlcy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUZBQWlGO0lBQ2pGOztrQkFFYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFVBQVU7O0lBRVYscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQzs7RUFFbEM7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixnQkFBZ0I7RUFDbEI7O0VBRUE7UUFDTSxhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLFlBQVk7UUFDWiw2QkFBNkI7RUFDbkM7O0VBRUE7TUFDSSxpQkFBaUI7TUFDakIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQix3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSxrQ0FBa0M7TUFDbEMsWUFBWTtFQUNoQjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtNQUNJLGFBQWE7TUFDYiw4QkFBOEI7O0VBRWxDOztFQUVBO01BQ0ksYUFBYTtNQUNiLHlCQUF5QjtNQUN6QiwyQkFBMkI7TUFDM0I7O0FBRU47O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTs7QUFFSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFFSDtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIGJvcmRlcjogMCAqL1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogI2RiNGMzZjtcXHJcXG4gICAgLS1ob3ZlcjogI2Q4ZDhkODtcXHJcXG4gICAgLS1hZGQtZGlzYWJsZWQ6ICNmNGNhYzY7XFxyXFxuICAgIC0tbWVkaXVtLXByaW9yaXR5OiBvcmFuZ2U7XFxyXFxuICAgIC0taGlnaC1wcmlvcml0eTogIzk5MDAwMDtcXHJcXG4gICAgLS1pbnB1dC1jb2xvcjogICNmMWYxZjE7XFxyXFxuICAgIC0tcGxhaW4tcmVkOiByZWQ7XFxyXFxuICAgIC0tb3ZlcmxheS1jb2xvcjogIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWFwcCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjVmciA0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50YXNrLXRhYiA+IGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxyXFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlciA+IGgxLCAudGFzay10YWI+IGgxe1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcclxcbiAgICAvKiBuZWVkIHRvIGZsb2F0IC8gY2VudGVyIGl0IG9uIHBhZ2UgYXMgd2VsbCBhcyBhZGQgXFxcImNvbnRhaW5lciB0byBtYWtlIG9wYWNpdHlcXFwiICovXFxyXFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMTVweDsgKi9cXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIC8qIHRlbXBvcmFyeSAsIGRlbGV0ZSBsYXRlciAqL1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDk7XFxyXFxuXFxyXFxuICAgIC8qIGNlbnRlciBpbiBzY3JlZW4gKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGJvdHRvbTogYXV0bztcXHJcXG4gICAgcmlnaHQ6IGF1dG87XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7ICovXFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWlucHV0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24ge1xcclxcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgICAgIGJvcmRlcjogM3B4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hZGQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWluLXJlZCk7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZDpkaXNhYmxlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYWRkLWRpc2FibGVkKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWhlYWRlciB7XFxyXFxuICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybS1mb290ZXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgcGFkZGluZzogNXB4IDIwcHhcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZy1vdmVybGF5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1vdmVybGF5LWNvbG9yKTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5wbHVzIHtcXHJcXG4gICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgcGFkZGluZzogMCA0LjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbjpob3ZlciA+IHAge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGxhaW4tcmVkKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uOmhvdmVyID4gLnBsdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGFpbi1yZWQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgcGFkZGluZzogMTVweCAwIDE1cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDcwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGkge1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0ID4gdWwge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2tcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBhdXRvIDE1MHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gPiBkaXYsIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIC8qIHdpZHRoOiAyMDBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICAgIHdpZHRoOiAxLjVlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvb3RlciA+IC5idXR0b24ge1xcclxcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvb3RlciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59IFxcclxcblxcclxcbnNlbGVjdCwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvdW50ZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxyXFxuICAgIGdyaWQtYXJlYTogJ2NvdW50JztcXHJcXG59XFxyXFxuXFxyXFxuLyogLmRlbGV0ZWQtc2NhbGUge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlZCB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxufSAqL1xcclxcblxcclxcbi50b2RvLWl0ZW0gPiBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIH4gZGl2IHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW5tYXgoMjNweCwgYXV0byk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0gPiAubGEtdHJhc2gge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wbGFpbi1yZWQpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIgPiAubGEtdHJhc2gge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tbGkge1xcclxcbiAgICB3aWR0aDogNzc3cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDNweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMjBweDtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0ge1xcclxcbiAgICBjb2xvcjogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaCB7XFxyXFxuICAgIGNvbG9yOiAjOTkwMDAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0Rm9ybSwgZ2VuZXJhdGVUYXNrRm9ybSB9IGZyb20gJy4vc2NyaXB0cy9mb3JtcydcbmltcG9ydCB7IGRpdkZhY3RvcnksIGNyZWF0ZVRleHQgfSBmcm9tICcuL3NjcmlwdHMvdXRpbHMnXG5pbXBvcnQgeyBwcm9qZWN0SXRlbSwgdG9kb0l0ZW0gfSBmcm9tICcuL3NjcmlwdHMvb2JqZWN0cydcbmltcG9ydCAnLi9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcydcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9wcm9qZWN0SXRlbUxheW91dCA9IChuYW1lLCBjb3VudCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgY29uc3QgZGl2ID0gZGl2RmFjdG9yeSgncHJvamVjdC1pdGVtJylcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVUZXh0KG5hbWUsICdzcGFuJylcbiAgICAgICAgY29uc3QgY291bnRlciA9IGNyZWF0ZVRleHQoY291bnQsICdzcGFuJylcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRpdkZhY3RvcnkoJ3RleHQnKVxuICAgICAgICBidXR0b24udmFsdWUgPSBrZXlcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xhcycsICdsYS10cmFzaCcpXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGknKVxuICAgICAgICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY291bnRlcicpXG5cbiAgICAgICAgdGV4dERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICAgICAgdGV4dERpdi5hcHBlbmRDaGlsZChjb3VudGVyKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dERpdilcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICAgIHJldHVybiBsaVxuICAgIH1cblxuICAgIGNvbnN0IF90b2RvTGF5b3V0ID0gKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndG9kby1saScpXG4gICAgICAgIGNvbnN0IGRpdiA9IGRpdkZhY3RvcnkoJ3RvZG8taXRlbScpXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgICAgICBjb25zdCBkZXNjID0gY3JlYXRlVGV4dChkZXNjcmlwdGlvbiwgJ2RpdicpXG4gICAgICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVUZXh0KGR1ZURhdGUsICdkaXYnKVxuICAgICAgICBjb25zdCBwcmkgPSBjcmVhdGVUZXh0KF9yZXBlYXRQcmlvcml0eShwcmlvcml0eSksICdkaXYnKVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q2xhc3MgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddXG4gICAgICAgIHByaS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5Q2xhc3NbcHJpb3JpdHldKVxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlc2MpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkYXRlKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJpKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgY29uc3QgX3JlcGVhdFByaW9yaXR5ID0gKG51bSkgPT4ge1xuICAgICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuICchJy5yZXBlYXQobnVtKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGNvbnN0IF9jbGVhckNoaWxkTm9kZXNPZiA9IChub2RlKSA9PiB7XG4gICAgICAgIHdoaWxlIChub2RlLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICBub2RlLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBfc2V0QWN0aXZlUHJvamVjdCA9IChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpJylcbiAgICAgICAgY29uc3QgbmV3QWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgbGlbZGF0YS1wcm9qZWN0LWtleT0nJHtrZXl9J11gXG4gICAgICAgIClcbiAgICAgICAgcHJvamVjdHNJdGVtcy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG5ld0FjdGl2ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICBjb25zdCBfZHJhd0FkZEFjdGlvbnMgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aW9uLWxpJylcbiAgICAgICAgcGFyZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWN0aW9uIGFkZC10b2RvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGx1c1wiPis8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcblxuICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgY29uc3QgX3VwZGF0ZVRhc2tIZWFkZXIgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10YWIgPiBoMScpXG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBwcm9qZWN0XG4gICAgfVxuXG4gICAgY29uc3QgX2FkZFRhc2tMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJylcbiAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkVGFzaylcbiAgICB9XG5cbiAgICBjb25zdCBfY3VycmVudFRhc2tWYWx1ZXMgPSAoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKS5kYXRhc2V0XG4gICAgICAgICAgICAuY3VycmVudFByb2plY3RcbiAgICAgICAgY29uc3QgdGFza09iamVjdCA9IHByb2plY3RDb250cm9sbGVyXG4gICAgICAgICAgICAubGlzdFByb2plY3RJdGVtcyhwYXJlbnRLZXkpXG4gICAgICAgICAgICBba2V5XS51bnBhY2tJdGVtcygpXG5cbiAgICAgICAgcmV0dXJuIHRhc2tPYmplY3RcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctb3ZlcmxheScpXG4gICAgICAgIG92ZXJsYXkuZGF0YXNldC5vdmVybGF5ID0gdHJ1ZVxuXG4gICAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBvdmVybGF5KVxuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdEZvcm0oKSlcblxuICAgICAgICAvLyB3YXMgaW4gdGhlIF9wcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzXG4gICAgICAgIGV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZEZvckVhY2goXG4gICAgICAgICAgICAnLnByb2plY3QtZm9ybSBidXR0b24nLFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIGhhbmRsZVByb2plY3RGb3JtXG4gICAgICAgIClcbiAgICAgICAgZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkKFxuICAgICAgICAgICAgJy5kaWFsb2ctb3ZlcmxheScsXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgaGFuZGxlUHJvamVjdEZvcm1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdUYXNrRm9ybSA9IChpbnN0aWdhdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGluc3RpZ2F0b3JcbiAgICAgICAgY29uc3QgeyBpdGVtS2V5IH0gPSBwYXJlbnQuZGF0YXNldFxuICAgICAgICAvLyBjb25zdCB0YXNrT2JqZWN0ID0gX2N1cnJlbnRUYXNrVmFsdWVzKGl0ZW1LZXkpXG5cbiAgICAgICAgX2NsZWFyQ2hpbGROb2Rlc09mKHBhcmVudClcbiAgICAgICAgcGFyZW50LmFwcGVuZChnZW5lcmF0ZVRhc2tGb3JtKCkpXG5cbiAgICAgICAgaWYgKGluc3RpZ2F0b3IuZGF0YXNldC5pdGVtS2V5KSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrT2JqZWN0ID0gX2N1cnJlbnRUYXNrVmFsdWVzKGl0ZW1LZXkpXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLmFkZCcpXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lciA+IC50YXNrJylcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcuZm9ybS1jb250YWluZXIgPiBpbnB1dFt0eXBlPWRhdGVdJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXIgPiBzZWxlY3QnKVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9qc3JlZi9kb21fb2JqX3NlbGVjdC5hc3BcbiAgICAgICAgICAgIHRpdGxlLnZhbHVlID0gdGFza09iamVjdC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgZGF0ZS52YWx1ZSA9IHRhc2tPYmplY3QuZHVlRGF0ZVxuICAgICAgICAgICAgcHJpb3JpdHkuc2VsZWN0ZWRJbmRleCA9IHRhc2tPYmplY3QucHJpb3JpdHlcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDaGFuZ2UnXG4gICAgICAgIH1cblxuICAgICAgICBldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGRGb3JFYWNoKFxuICAgICAgICAgICAgJy50b2RvLWZvb3RlciBidXR0b24nLFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIGhhbmRsZVRhc2tGb3JtXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgICAgIF9jbGVhckNoaWxkTm9kZXNPZihwYXJlbnQpXG4gICAgICAgIGNvbnN0IGFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIubGlzdFByb2plY3RzKClcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICAgIGFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBfcHJvamVjdEl0ZW1MYXlvdXQoXG4gICAgICAgICAgICAgICAgb2JqZWN0LnRpdGxlKCksXG4gICAgICAgICAgICAgICAgb2JqZWN0LmdldEl0ZW1zKCkubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGNvdW50ZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGxpLmRhdGFzZXQucHJvamVjdEtleSA9IGNvdW50ZXJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICAgICAgY291bnRlciArPSAxXG4gICAgICAgIH0pXG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdQcm9qZWN0VG9Eb3MgPSAoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKVxuICAgICAgICBwYXJlbnQuZGF0YXNldC5jdXJyZW50UHJvamVjdCA9IGtleVxuICAgICAgICBfY2xlYXJDaGlsZE5vZGVzT2YocGFyZW50KVxuICAgICAgICBpZiAoa2V5ID09PSBmYWxzZSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIubGlzdFByb2plY3RJdGVtcyhrZXkpXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoX2RyYXdBZGRBY3Rpb25zKCdBZGQgVGFzaycpKVxuICAgICAgICBsZXQgY291bnRlciA9IDBcblxuICAgICAgICBhcnJheS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gX3RvZG9MYXlvdXQoXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRlc2NyaXB0aW9uKCksXG4gICAgICAgICAgICAgICAgb2JqZWN0LmR1ZURhdGUoKSxcbiAgICAgICAgICAgICAgICBvYmplY3QucHJpb3JpdHkoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGkuZGF0YXNldC5pdGVtS2V5ID0gY291bnRlclxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gMVxuICAgICAgICB9KVxuXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChsaXN0KVxuICAgICAgICBfdXBkYXRlVGFza0hlYWRlcihwcm9qZWN0Q29udHJvbGxlci5wcm9qZWN0VGl0bGUoa2V5KSlcbiAgICAgICAgX3NldEFjdGl2ZVByb2plY3Qoa2V5KVxuICAgICAgICBfYWRkVGFza0xpc3RlbmVyKClcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLW92ZXJsYXknKVxuICAgICAgICBvdmVybGF5LnJlbW92ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1Byb2plY3RGb3JtLFxuICAgICAgICBkcmF3UHJvamVjdHMsXG4gICAgICAgIGRyYXdQcm9qZWN0VG9Eb3MsXG4gICAgICAgIGNsb3NlRm9ybSxcbiAgICAgICAgZHJhd1Rhc2tGb3JtLFxuICAgIH1cbn0pKClcblxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW11cblxuICAgIGNvbnN0IF91bnBhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVucGFja2VkID0gcHJvamVjdExpc3QubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LnVucGFja1Byb2plY3RzKCkpXG4gICAgICAgIHJldHVybiB1bnBhY2tlZFxuICAgIH1cblxuICAgIGNvbnN0IF9zYXZlID0gKCkgPT4ge1xuICAgICAgICBzdG9yYWdlQ29udHJvbGxlci5zYXZlVG9Mb2NhbFN0b3JhZ2UoX3VucGFjaygpKVxuICAgIH1cblxuICAgIGNvbnN0IF9sb2FkRnJvbVN0b3JhZ2UgPSAoKSA9PiB7fVxuXG4gICAgY29uc3QgbGlzdFByb2plY3RJdGVtcyA9IChrZXkpID0+IHByb2plY3RMaXN0W2tleV0uZ2V0SXRlbXMoKVxuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gKGtleSkgPT4gcHJvamVjdExpc3Rba2V5XS50aXRsZSgpXG5cbiAgICBjb25zdCBsaXN0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0TGlzdFxuXG4gICAgY29uc3QgbnVtYmVyT2ZQcm9qZWN0cyA9ICgpID0+IHByb2plY3RMaXN0Lmxlbmd0aFxuXG4gICAgY29uc3Qgd2VsY29tZVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdlbGNvbWUgPSBwcm9qZWN0SXRlbSgnV2VsY29tZSEnLCAnJylcbiAgICAgICAgY29uc3Qgd2VsY29tZVRhc2sgPSB0b2RvSXRlbShcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ1lvdXIgRmlyc3QgVGFzayEgQ2xpY2sgdGhlIGNoZWNrYm94IHRvIGNvbXBsZXRlIG1lJyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgMlxuICAgICAgICApXG5cbiAgICAgICAgd2VsY29tZS5hZGRJdGVtKHdlbGNvbWVUYXNrKVxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHdlbGNvbWUpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MoMClcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsUHJvamVjdExvYWQgPSAoc2F2ZWRQcm9qZWN0cykgPT4ge1xuICAgICAgICAvLyBwcm9qZWN0TGlzdCA9IFsuLi5zYXZlZFByb2plY3RzXTtcbiAgICAgICAgc2F2ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SSA9IHByb2plY3RJdGVtKHByb2plY3QudGl0bGUsIHByb2plY3QuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBwcm9qZWN0LnVucGFja2VkLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdG9kb0l0ZW0oXG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBwcm9qZWN0SS5hZGRJdGVtKHRvZG8pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0SSlcbiAgICAgICAgfSlcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcygwKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpXG4gICAgICAgIF9zYXZlKClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBkZWZhdWx0RHJhdyA9IGtleSAtIDEgPD0gMCA/IDAgOiBrZXkgLSAxXG4gICAgICAgIHByb2plY3RMaXN0LnNwbGljZShrZXksIDEpXG4gICAgICAgIF9zYXZlKClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKClcbiAgICAgICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcyhkZWZhdWx0RHJhdylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RUb0RvcyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAoa2V5LCBlKSA9PiB7XG4gICAgICAgIC8vIGlmIHRoZXkgdW5jaGVjayBpdCBiZWZvcmUgaXQgZGVsdGVzLCBzdG9wIVxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHJldHVyblxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0JykuZGF0YXNldFxuICAgICAgICAgICAgLmN1cnJlbnRQcm9qZWN0XG4gICAgICAgIHByb2plY3RMaXN0W3Byb2plY3RJZF0uZ2V0SXRlbXMoKS5zcGxpY2Uoa2V5LCAxKVxuICAgICAgICBfc2F2ZSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MocHJvamVjdElkKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAoa2V5LCB0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3Rba2V5XVxuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRJdGVtKHRvZG8pXG4gICAgICAgIF9zYXZlKClcbiAgICB9XG5cbiAgICBjb25zdCBtb2RpZnlUYXNrID0gKGtleSwgdG9kbywgaXRlbUtleSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0W2tleV1cbiAgICAgICAgY3VycmVudFByb2plY3QubW9kaWZ5SXRlbSh0b2RvLCBpdGVtS2V5KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGxpc3RQcm9qZWN0cyxcbiAgICAgICAgbGlzdFByb2plY3RJdGVtcyxcbiAgICAgICAgYWRkVGFza1RvUHJvamVjdCxcbiAgICAgICAgbnVtYmVyT2ZQcm9qZWN0cyxcbiAgICAgICAgaW5pdGlhbFByb2plY3RMb2FkLFxuICAgICAgICByZW1vdmVQcm9qZWN0LFxuICAgICAgICByZW1vdmVUYXNrLFxuICAgICAgICBwcm9qZWN0VGl0bGUsXG4gICAgICAgIHdlbGNvbWVQcm9qZWN0LFxuICAgICAgICBtb2RpZnlUYXNrLFxuICAgIH1cbn0pKClcblxuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVOYW1lID0gJ3Byb2plY3RzJ1xuXG4gICAgY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKG9iamVjdCkgPT4ge1xuICAgICAgICAvLyBjb25zdCBvYmplY3Q9IHByb2plY3RDb250cm9sbGVyLmxpc3RQcm9qZWN0cygpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNhdmVOYW1lLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKVxuICAgIH1cbiAgICBjb25zdCByZW1vdmVGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzYXZlTmFtZSlcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZG9lc0V4aXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2F2ZU5hbWUpXG5cbiAgICAgICAgaWYgKGRvZXNFeGlzdCkge1xuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuaW5pdGlhbFByb2plY3RMb2FkKEpTT04ucGFyc2UoZG9lc0V4aXN0KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sbGVyLndlbGNvbWVQcm9qZWN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSwgbG9hZEZyb21Mb2NhbFN0b3JhZ2UgfVxufSkoKVxuXG5jb25zdCBldmVudExpc3RlbmVyQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkID0gKHNlbGVjdG9yLCB0eXBlLCBmdW5jKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmMpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkRm9yRWFjaCA9IChzZWxlY3RvciwgdHlwZSwgZnVuYykgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgICBwYXJlbnQuZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCBhZGRGb3JFYWNoIH1cbn0pKClcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0Rm9ybSgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RGb3JtKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWVcbiAgICBpZiAodGFyZ2V0ID09PSAnYWRkJykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIGRlc2MgfSA9IGdyYWJGb3JtKClcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0SXRlbShuYW1lLCBkZXNjKSlcbiAgICAgICAgY2FuY2VsRm9ybSgpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MoXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5udW1iZXJPZlByb2plY3RzKCkgLSAxXG4gICAgICAgIClcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmRhdGFzZXQub3ZlcmxheSB8fCB0YXJnZXQgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgIGNhbmNlbEZvcm0oKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybSgpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5jbG9zZUZvcm0oKVxufVxuXG5mdW5jdGlvbiBncmFiRm9ybSgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYm9keSA+IC5uYW1lJykudmFsdWVcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYm9keSA+IC5kZXNjJykudmFsdWVcblxuICAgIGlmICghbmFtZSkge1xuICAgICAgICBhbGVydCgnUGxlYXNlIGZpbGwgb3V0IHRoZSBuYW1lIScpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWUsIGRlc2MgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrRm9ybShlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWVcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpLmRhdGFzZXQuY3VycmVudFByb2plY3RcbiAgICBjb25zdCB7IGl0ZW1LZXkgfSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuZGF0YXNldFxuXG4gICAgaWYgKHRhcmdldCA9PT0gJ2FkZCcgJiYgaXRlbUtleSkge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBkYXRlLCBwcmlvcml0eSB9ID0gZ3JhYlRhc2tGb3JtKClcbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9JdGVtKCd0aXRsZScsIHRpdGxlLCBkYXRlLCBwcmlvcml0eSlcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIubW9kaWZ5VGFzayhwcm9qZWN0LCB0b2RvLCBpdGVtS2V5KVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKHByb2plY3QpXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdhZGQnKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5IH0gPSBncmFiVGFza0Zvcm0oKVxuICAgICAgICBjb25zdCB0b2RvID0gdG9kb0l0ZW0oJ3RpdGxlJywgdGl0bGUsIGRhdGUsIHByaW9yaXR5KVxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5hZGRUYXNrVG9Qcm9qZWN0KHByb2plY3QsIHRvZG8pXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MocHJvamVjdClcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKHByb2plY3QpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBncmFiVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXIgPiAudGFzaycpLnZhbHVlXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lciA+IGlucHV0W3R5cGU9ZGF0ZV0nKVxuICAgICAgICAudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lciA+IHNlbGVjdCcpLnZhbHVlXG5cbiAgICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgICBjb25zdCB0YWcgPSBlLnRhcmdldC50YWdOYW1lXG4gICAgaWYgKHRhZyAhPT0gJ0knKSByZXR1cm5cbiAgICBjb25zdCBjb25maXJtQWN0aW9uID0gY29uZmlybSgnQXJlIHlvdSBTdXJlPycpXG4gICAgaWYgKGNvbmZpcm1BY3Rpb24pIHtcbiAgICAgICAgY29uc3Qga2V5ID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5yZW1vdmVQcm9qZWN0KGtleSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3QoZSkge1xuICAgIGNvbnN0IGxpID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKVxuICAgIGlmICghbGkgfHwgZS50YXJnZXQudGFnTmFtZSA9PT0gJ0knKSByZXR1cm5cbiAgICBjb25zdCBrZXkgPSBsaS5kYXRhc2V0LnByb2plY3RLZXlcbiAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKGtleSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hlY2tzKGUpIHtcbiAgICBjb25zdCBsaSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJylcbiAgICBpZiAoIWxpIHx8ICFlLnRhcmdldC5jaGVja2VkKSByZXR1cm5cbiAgICBjb25zdCBrZXkgPSBsaS5kYXRhc2V0Lml0ZW1LZXlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5yZW1vdmVUYXNrKGtleSwgZSlcbiAgICB9LCAyMDAwKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrKCkge1xuICAgIGNvbnN0IGluc3RpZ2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLWxpJylcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpXG4gICAgaWYgKGZvcm0gIT09IG51bGwpIHJldHVyblxuICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdUYXNrRm9ybShpbnN0aWdhdG9yKVxufVxuXG5mdW5jdGlvbiBlZGl0VGFza3MoZSkge1xuICAgIGNvbnN0IGxpID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbiAgICBpZiAoIWxpIHx8IGUudGFyZ2V0Lm5vZGVOYW1lICE9PSAnRElWJyB8fCBmb3JtICE9PSBudWxsKSByZXR1cm5cbiAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3VGFza0Zvcm0obGkpXG59XG5cbmV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZCgnLnByb2plY3RzJywgJ2NsaWNrJywgZGVsZXRlUHJvamVjdClcbmV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZCgnLnByb2plY3RzJywgJ2NsaWNrJywgY2hhbmdlUHJvamVjdClcbmV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZCgnLnRhc2stdGFiJywgJ2NoYW5nZScsIGhhbmRsZUNoZWNrcylcbmV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZCgnLnRhc2stdGFiJywgJ3RyYW5zaXRpb25lZCcsIGhhbmRsZUNoZWNrcylcbmV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZCgnLnRhc2stdGFiJywgJ2NsaWNrJywgZWRpdFRhc2tzKVxuZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkKCcuYWRkLXByb2plY3QnLCAnY2xpY2snLCBoYW5kbGVDbGljaylcblxuc3RvcmFnZUNvbnRyb2xsZXIubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKVxuIiwiaW1wb3J0IHsgZGl2RmFjdG9yeSwgY3JlYXRlVGV4dCB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IGZvcm1FbGVtZW50cyA9IChsYWJlbENvbnRlbnQsIHBsYWNlaG9sZGVyLCBuYW1lLCB0eXBlLCBjbGFzc04pID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcblxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgbmFtZSlcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsQ29udGVudFxuXG4gICAgaW5wdXQudHlwZSA9IHR5cGVcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgaW5wdXQubmFtZSA9IG5hbWVcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzTilcbiAgICBpbnB1dC5hdXRvY29tcGxldGUgPSAnb2ZmJ1xuICAgIGlmIChuYW1lID09PSAndGl0bGUnKSB7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiB7IGlucHV0LCBsYWJlbCB9XG59XG5cbmNvbnN0IGdldEZvcm1IZWFkZXIgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZGl2RmFjdG9yeSgnZm9ybS1oZWFkZXInKVxuICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCh0aXRsZSwgJ2gxJykpXG5cbiAgICByZXR1cm4gZm9ybUhlYWRlclxufVxuXG5jb25zdCBnZXRGb3JtRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRpdkZhY3RvcnkoJ2Zvcm0tZm9vdGVyJylcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnY2FuY2VsJylcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgY2FuY2VsQnV0dG9uLnZhbHVlID0gJ2NhbmNlbCdcblxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdhZGQnKVxuICAgIGFkZEJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICBhZGRCdXR0b24udmFsdWUgPSAnYWRkJ1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuXG4gICAgcmV0dXJuIHBhcmVudFxufVxuXG5jb25zdCBnZXRGb3JtSW5wdXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGRpdkZhY3RvcnkoJ2Zvcm0tY29udGFpbmVyJylcbiAgICBjb25zdCB3cmFwcGVyID0gZGl2RmFjdG9yeSgnZm9ybS1ib2R5JylcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm1FbGVtZW50cyhcbiAgICAgICAgJ1Byb2plY3QgTmFtZScsXG4gICAgICAgICcnLFxuICAgICAgICAndGl0bGUnLFxuICAgICAgICAndGV4dCcsXG4gICAgICAgICduYW1lJ1xuICAgIClcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1FbGVtZW50cyhcbiAgICAgICAgJ1Byb2plY3QgRGVzY3JpcHRpb24nLFxuICAgICAgICAnJyxcbiAgICAgICAgJ015IGZpcnN0IHByb2plY3QnLFxuICAgICAgICAndGV4dCcsXG4gICAgICAgICdkZXNjJ1xuICAgIClcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUubGFiZWwpXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZS5pbnB1dClcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmxhYmVsKVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24uaW5wdXQpXG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcilcblxuICAgIHJldHVybiBwYXJlbnRcbn1cblxuY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkaXZGYWN0b3J5KCd0b2RvLWNvbnRhaW5lcicpXG4gICAgY29uc3QgdGl0bGVGb3JtID0gZm9ybUVsZW1lbnRzKFxuICAgICAgICAnJyxcbiAgICAgICAgJ2UuZy4gd2FzaCB0aGUgY2FyJyxcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ3RleHQnLFxuICAgICAgICAndGFzaydcbiAgICApXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlRm9ybS5sYWJlbClcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGl0bGVGb3JtLmlucHV0KVxuXG4gICAgcmV0dXJuIHBhcmVudFxufVxuXG5jb25zdCBnZW5lcmF0ZVRvRG9PcHRpb25zID0gKCkgPT4gYDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiPlxuICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPk5vcm1hbDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+SGlnaDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PmBcblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkaXZGYWN0b3J5KCdmb3JtJywgJ3Byb2plY3QtZm9ybScpXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGdldEZvcm1IZWFkZXIoJ0FkZCBhIHByb2plY3QnKVxuICAgIGNvbnN0IGJvZHkgPSBnZXRGb3JtSW5wdXRzKClcbiAgICBjb25zdCBmb290ZXIgPSBnZXRGb3JtRm9vdGVyKClcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChib2R5KVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb290ZXIpXG5cbiAgICByZXR1cm4gcGFyZW50XG59XG5cbmNvbnN0IGdlbmVyYXRlVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZGl2RmFjdG9yeSgndG9kby1mb3JtJylcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgdGRjb250YWluZXIgPSBnZW5lcmF0ZVRvRG9Gb3JtKClcbiAgICBjb25zdCBvcHRpb25zID0gZGl2RmFjdG9yeSgnZm9ybS1jb250YWluZXInKVxuICAgIG9wdGlvbnMuaW5uZXJIVE1MID0gZ2VuZXJhdGVUb0RvT3B0aW9ucygpXG4gICAgY29uc3QgZm9vdGVyID0gZ2V0Rm9ybUZvb3RlcigpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9vdGVyJylcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGRjb250YWluZXIpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChvcHRpb25zKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9vdGVyKVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgcmV0dXJuIHBhcmVudFxufVxuXG5leHBvcnQgeyBnZW5lcmF0ZVByb2plY3RGb3JtLCBnZW5lcmF0ZVRhc2tGb3JtIH1cbiIsImNvbnN0IGdldFRpdGxlID0gKGRhdGEpID0+ICh7XG4gICAgdGl0bGU6ICgpID0+IGRhdGEudGl0bGUsXG59KVxuXG5jb25zdCBnZXREZXNjcmlwdGlvbiA9IChkYXRhKSA9PiAoe1xuICAgIGRlc2NyaXB0aW9uOiAoKSA9PiBkYXRhLmRlc2NyaXB0aW9uLFxufSlcblxuY29uc3QgZ2V0RHVlRGF0ZSA9IChkYXRhKSA9PiAoe1xuICAgIGR1ZURhdGU6ICgpID0+IGRhdGEuZHVlRGF0ZSxcbn0pXG5cbmNvbnN0IGdldFByaW9yaXR5ID0gKGRhdGEpID0+ICh7XG4gICAgcHJpb3JpdHk6ICgpID0+IGRhdGEucHJpb3JpdHksXG59KVxuXG5jb25zdCB1bnBhY2tUYXNrID0gKGRhdGEpID0+ICh7XG4gICAgdW5wYWNrSXRlbXM6ICgpID0+ICh7XG4gICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogZGF0YS5wcmlvcml0eSxcbiAgICB9KSxcbn0pXG5cbmNvbnN0IGdldFRvRG9zID0gKGRhdGEpID0+ICh7XG4gICAgZ2V0SXRlbXM6ICgpID0+IGRhdGEubGlzdCxcbiAgICB1bnBhY2tQcm9qZWN0czogKCkgPT4ge1xuICAgICAgICBjb25zdCB1bnBhY2tlZCA9IGRhdGEubGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUoKSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbigpLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSgpLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5KCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFza09iamVjdFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrID0ge1xuICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVucGFja2VkLFxuICAgICAgICAgICAgaXRlbTogZGF0YS5pdGVtLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RUYXNrXG4gICAgfSxcbn0pXG5cbmNvbnN0IG1hbmFnZUl0ZW1zID0gKGRhdGEpID0+ICh7XG4gICAgYWRkSXRlbTogKGl0ZW0pID0+IHtcbiAgICAgICAgZGF0YS5saXN0LnB1c2goaXRlbSlcbiAgICB9LFxuICAgIG1vZGlmeUl0ZW06IChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgZGF0YS5saXN0LnNwbGljZShrZXksIDEsIGl0ZW0pXG4gICAgfSxcbn0pXG5cbmNvbnN0IGdldE51bWJlclRvZG9zID0gKGRhdGEpID0+ICh7XG4gICAgbnVtYmVyT2Y6ICgpID0+IGRhdGEubGlzdC5sZW5ndGgsXG4gICAgdGVzdDogKCkgPT4gZGF0YS5kZXNjcmlwdGlvbixcbn0pXG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmdldFRpdGxlKGRhdGEpLFxuICAgICAgICAuLi5nZXREZXNjcmlwdGlvbihkYXRhKSxcbiAgICAgICAgLi4uZ2V0RHVlRGF0ZShkYXRhKSxcbiAgICAgICAgLi4uZ2V0UHJpb3JpdHkoZGF0YSksXG4gICAgICAgIC4uLnVucGFja1Rhc2soZGF0YSksXG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0SXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICBpdGVtOiAnJyxcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5nZXRUaXRsZShkYXRhKSxcbiAgICAgICAgLi4uZ2V0RGVzY3JpcHRpb24oZGF0YSksXG4gICAgICAgIC4uLmdldFRvRG9zKGRhdGEpLFxuICAgICAgICAuLi5tYW5hZ2VJdGVtcyhkYXRhKSxcbiAgICAgICAgLi4uZ2V0TnVtYmVyVG9kb3MoZGF0YSksXG4gICAgfVxufVxuXG5leHBvcnQgeyBwcm9qZWN0SXRlbSwgdG9kb0l0ZW0gfVxuIiwiY29uc3QgZGl2RmFjdG9yeSA9ICguLi5jbGFzc05hbWVzKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpZiAoY2xhc3NOYW1lcykge1xuICAgICAgICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkaXZcbn1cblxuY29uc3QgY3JlYXRlVGV4dCA9IChjb250ZW50LCB0eXBlKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcblxuICAgIGlmIChjb250ZW50IHx8IGNvbnRlbnQgPT09IDApIHtcbiAgICAgICAgdGV4dC5pbm5lclRleHQgPSBjb250ZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHRcbn1cblxuZXhwb3J0IHsgZGl2RmFjdG9yeSwgY3JlYXRlVGV4dCB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9