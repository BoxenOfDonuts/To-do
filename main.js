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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    /* border: 0 */\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n}\r\n\r\n#todo-app {\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr;\r\n    grid-template-rows: 1fr;\r\n    height: 100vh;\r\n\r\n}\r\n\r\n.task-tab {\r\n    background-color: lightslategray;\r\n}\r\n\r\n.project-tab {\r\n    background-color: grey;\r\n}\r\n\r\n.form {\r\n    /* display: none; */\r\n    /* need to float / center it on page as well as add \"container to make opacity\" */\r\n    /* position: fixed;\r\n    bottom: 0;\r\n    right: 15px; */\r\n    width: 400px;\r\n    border-radius: 4px;\r\n    /* temporary , delete later */\r\n    margin: 10px;\r\n    text-align: center;\r\n    background-color: white;\r\n    z-index: 9;\r\n\r\n    /* center in screen */\r\n    position: fixed;\r\n    align-self: center;\r\n    left: 50%;\r\n    top: 25%;\r\n    bottom: auto;\r\n    right: auto;\r\n    transform: translate(-50%, -50%);\r\n\r\n  }\r\n\r\n  .form-container {\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .form-body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* border: 3px solid #f1f1f1; */\r\n    text-align: left;\r\n  }\r\n\r\n  .form-container input[type=text] {\r\n        padding: 15px;\r\n        margin: 5px 0 22px 0;\r\n        border: none;\r\n        background: #f1f1f1;\r\n  }\r\n\r\n  .button {\r\n      padding: 6px 12px;\r\n      border: 3px;\r\n      border-radius: 4px;\r\n      margin: 10px 0 10px 10px;\r\n  }\r\n  \r\n  .add {\r\n      background-color: red;\r\n      color: white;\r\n  }\r\n\r\n  .add:disabled {\r\n    background-color: #f4cac6;\r\n  }\r\n\r\n  .form-header {\r\n      /* background-color: grey; */\r\n      padding: 10px;\r\n      border-bottom: 1px solid black;\r\n\r\n  }\r\n\r\n  .form-footer {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      border-top: 1px solid black;\r\n      padding: 5px 20px\r\n\r\n}\r\n\r\n.dialog-overlay {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    /* pointer-events: all; */\r\n}\r\n\r\n.las {\r\n    margin: 0 5px;\r\n}\r\n\r\n.project-actions {\r\n    display: inline-block;\r\n}\r\n\r\n.action {\r\n    display: flex;\r\n    justify-items: center;\r\n}\r\n\r\n.action:hover > p {\r\n    color: red;\r\n}\r\n\r\n.action:hover > .las {\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    color: white;\r\n    width: auto;\r\n    text-align:  center;\r\n}\r\n\r\n.projects {\r\n    padding: 15px;\r\n}\r\n\r\n.todo-list {\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 70%;\r\n    margin: auto;\r\n}\r\n\r\n.todo-li {\r\n    border: 1px solid black;\r\n    width: 100%;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.todo-item > div, input[type='checkbox'] {\r\n    margin: 10px;\r\n    width: 200px;\r\n}\r\n\r\n.todo-form {\r\n    background-color: white;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n}\r\n\r\n.todo-footer > .button {\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.todo-footer {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.todo-container {\r\n    padding: 10px 20px 0;\r\n}\r\n\r\n.todo-container input[type=text] {\r\n    border: none;\r\n    width: 100%;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    outline:none;\r\n} \r\n\r\n.action-li {\r\n    margin: 10px 0 30px\r\n}\r\n\r\nselect, input[type=\"date\"] {\r\n    height: 24px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.project-counter {\r\n    padding-left: 10px;\r\n    font-weight: 200;\r\n    font-size: .85em;\r\n}", "",{"version":3,"sources":["webpack://./src/resources/styles/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;;AAEjB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,iFAAiF;IACjF;;kBAEc;IACd,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;;IAEV,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,gCAAgC;;EAElC;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,gBAAgB;EAClB;;EAEA;QACM,aAAa;QACb,oBAAoB;QACpB,YAAY;QACZ,mBAAmB;EACzB;;EAEA;MACI,iBAAiB;MACjB,WAAW;MACX,kBAAkB;MAClB,wBAAwB;EAC5B;;EAEA;MACI,qBAAqB;MACrB,YAAY;EAChB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;MACI,4BAA4B;MAC5B,aAAa;MACb,8BAA8B;;EAElC;;EAEA;MACI,aAAa;MACb,yBAAyB;MACzB,2BAA2B;MAC3B;;AAEN;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,WAAW;IACX,YAAY;IACZ,MAAM;IACN,QAAQ;IACR,OAAO;IACP,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    /* border: 0 */\r\n}\r\n\r\nli {\r\n    list-style-type: none;\r\n}\r\n\r\n#todo-app {\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr;\r\n    grid-template-rows: 1fr;\r\n    height: 100vh;\r\n\r\n}\r\n\r\n.task-tab {\r\n    background-color: lightslategray;\r\n}\r\n\r\n.project-tab {\r\n    background-color: grey;\r\n}\r\n\r\n.form {\r\n    /* display: none; */\r\n    /* need to float / center it on page as well as add \"container to make opacity\" */\r\n    /* position: fixed;\r\n    bottom: 0;\r\n    right: 15px; */\r\n    width: 400px;\r\n    border-radius: 4px;\r\n    /* temporary , delete later */\r\n    margin: 10px;\r\n    text-align: center;\r\n    background-color: white;\r\n    z-index: 9;\r\n\r\n    /* center in screen */\r\n    position: fixed;\r\n    align-self: center;\r\n    left: 50%;\r\n    top: 25%;\r\n    bottom: auto;\r\n    right: auto;\r\n    transform: translate(-50%, -50%);\r\n\r\n  }\r\n\r\n  .form-container {\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .form-body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* border: 3px solid #f1f1f1; */\r\n    text-align: left;\r\n  }\r\n\r\n  .form-container input[type=text] {\r\n        padding: 15px;\r\n        margin: 5px 0 22px 0;\r\n        border: none;\r\n        background: #f1f1f1;\r\n  }\r\n\r\n  .button {\r\n      padding: 6px 12px;\r\n      border: 3px;\r\n      border-radius: 4px;\r\n      margin: 10px 0 10px 10px;\r\n  }\r\n  \r\n  .add {\r\n      background-color: red;\r\n      color: white;\r\n  }\r\n\r\n  .add:disabled {\r\n    background-color: #f4cac6;\r\n  }\r\n\r\n  .form-header {\r\n      /* background-color: grey; */\r\n      padding: 10px;\r\n      border-bottom: 1px solid black;\r\n\r\n  }\r\n\r\n  .form-footer {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      border-top: 1px solid black;\r\n      padding: 5px 20px\r\n\r\n}\r\n\r\n.dialog-overlay {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    /* pointer-events: all; */\r\n}\r\n\r\n.las {\r\n    margin: 0 5px;\r\n}\r\n\r\n.project-actions {\r\n    display: inline-block;\r\n}\r\n\r\n.action {\r\n    display: flex;\r\n    justify-items: center;\r\n}\r\n\r\n.action:hover > p {\r\n    color: red;\r\n}\r\n\r\n.action:hover > .las {\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    color: white;\r\n    width: auto;\r\n    text-align:  center;\r\n}\r\n\r\n.projects {\r\n    padding: 15px;\r\n}\r\n\r\n.todo-list {\r\n    display: flex;\r\n    justify-content: center;\r\n    max-width: 70%;\r\n    margin: auto;\r\n}\r\n\r\n.todo-li {\r\n    border: 1px solid black;\r\n    width: 100%;\r\n}\r\n\r\n.todo-item {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.todo-item > div, input[type='checkbox'] {\r\n    margin: 10px;\r\n    width: 200px;\r\n}\r\n\r\n.todo-form {\r\n    background-color: white;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n}\r\n\r\n.todo-footer > .button {\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.todo-footer {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.todo-container {\r\n    padding: 10px 20px 0;\r\n}\r\n\r\n.todo-container input[type=text] {\r\n    border: none;\r\n    width: 100%;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    outline:none;\r\n} \r\n\r\n.action-li {\r\n    margin: 10px 0 30px\r\n}\r\n\r\nselect, input[type=\"date\"] {\r\n    height: 24px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.project-counter {\r\n    padding-left: 10px;\r\n    font-weight: 200;\r\n    font-size: .85em;\r\n}"],"sourceRoot":""}]);
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






const displayController = (() => {
    const _projectItemLayout = (name, count) => {
        const li = document.createElement('li')
        li.classList.add('project-li')
        const div = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.divFactory)('project-item')
        const projectName = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(name, 'span')
        const counter = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(count, 'span')
        counter.classList.add('project-counter')

        div.appendChild(projectName)
        div.appendChild(counter)
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
        const pri = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(priority, 'div')

        div.appendChild(checkbox)
        div.appendChild(desc)
        div.appendChild(date)
        div.appendChild(pri)
        li.appendChild(div)

        return li
    }

    const _projectFormEventListeners = () => {
    }

    const _addTaskListener = () => {
        const addButton = document.querySelector('.add-todo');
        addButton.addEventListener('click', handleAddTask)
    }

    const drawProjectForm = () => {
        const parent = document.querySelector('body')
        const overlay = document.createElement('div')
        overlay.classList.add('dialog-overlay')
        overlay.dataset['overlay'] = true

        parent.insertAdjacentElement('afterbegin', overlay)
        overlay.appendChild((0,_scripts_forms__WEBPACK_IMPORTED_MODULE_0__.generateProjectForm)())

        // was in the _projectFormEventListeners
        eventListenerController.addForEach('.project-form button', 'click', handleProjectForm);
        eventListenerController.add('.dialog-overlay', 'click', handleProjectForm)

    }

    const drawTaskForm = () => {
        const parent = document.querySelector('.action-li');
        _clearChildNodesOf(parent);
        parent.append((0,_scripts_forms__WEBPACK_IMPORTED_MODULE_0__.generateTaskForm)());

        eventListenerController.addForEach('.todo-footer button', 'click', handleTaskForm);

    }

    const _clearChildNodesOf = (node) => {
        while (node.firstElementChild) {
            node.firstElementChild.remove()
        }
    }

    const drawProjects = () => {
        const parent = document.querySelector('.projects');
        _clearChildNodesOf(parent);
        let array = projectController.listProjects()
        const projects = document.querySelector('.projects')
        const projectList = document.createElement('ul')
        let counter = 0

        array.forEach((object) => {
            console.log(object.getItems().length)
            const li = _projectItemLayout(
                object.title(),
                object.getItems().length
            )
            li.dataset['projectKey'] = counter
            projectList.appendChild(li)
            counter++
        })

        projects.appendChild(projectList)
    }

    const _drawAddActions = (title) => {
        const parent = document.createElement('li')
        parent.classList.add('action-li');
        parent.innerHTML =  `<div class="action add-todo">
                    <i class="las la-plus"></i>
                    <p>${title}</p>
                </div>`

        return parent;
    }

    const drawProjectToDos = (key) => {
        const parent = document.querySelector('.todo-list');
        parent.dataset['currentProject'] = key;
        _clearChildNodesOf(parent);
        let array = projectController.listProjectItems(key);
        const list = document.createElement('ul');
        list.appendChild(_drawAddActions("Add Task"));
        let counter = 0;
        
        array.forEach((object) => {
            const li = _todoLayout(
                object.description(),
                object.dueDate(),
                object.priority()
            )
            li.dataset['itemKey'] = counter
            list.appendChild(li)
            counter++
        })
        
        parent.appendChild(list)
        _addTaskListener()
    }

    const closeForm = () => {
        const overlay = document.querySelector('.dialog-overlay');
        // overlay.removeEventListener('click', handleProjectForm);
        overlay.remove();
    }

    return { drawProjectForm, drawProjects, drawProjectToDos, closeForm, drawTaskForm }
})();

const projectController = (() => {
    let projectList = []

    const listProjects = () => projectList
    const numberOfProjects = () => projectList.length
    const initialProjectLoad = (savedProjects) => {
        //projectList = [...savedProjects];
        savedProjects.forEach(project => {
            const projectI = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)(project.title, project.description);
            project.unpacked.forEach(task => {
                const todo = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)(task.title, task.description, task.dueDate, task.priority);
                projectI.addItem(todo);
            })
            projectList.push(projectI);
        })
        displayController.drawProjects()
        displayController.drawProjectToDos(0)

    }

    const addProject = (project) => {
        projectList.push(project)
        _save();
    }

    const removeProject = (project) => {
        // placeholder, update
        projectList.slice(0, 1)
        _save();
    }

    const addTaskToProject = (key, todo) => {
        const currentProject = projectList[key];
        currentProject.addItem(todo);
        _save();
    }

    const _unpack = () => {
        let unpacked = projectList.map(project => {
            return project.unpackItems();
        })
        return unpacked;
    }

    const _save = () => {
        storageController.saveToLocalStorage(_unpack());
    }

    const _loadFromStorage = () => {

    }

    const listProjectItems = (key) => projectList[key].getItems()

    return { addProject, listProjects, listProjectItems, addTaskToProject, numberOfProjects, initialProjectLoad }
})();

const storageController = (() => {
    const saveName = 'projects';

    let saveToLocalStorage = (object) => {
        // const object= projectController.listProjects()
        localStorage.setItem(saveName, JSON.stringify(object));
    }
    const removeFromLocalStorage = () => {
        localStorage.removeItem(saveName);
    }
    
    const loadFromLocalStorage = () => {
        const doesExist = localStorage.getItem(saveName)
    
        if (doesExist) {
            projectController.initialProjectLoad(JSON.parse(doesExist));
            
        }
        
    }

    return  { saveToLocalStorage, removeFromLocalStorage, loadFromLocalStorage }
})();

const eventListenerController = (() => {
    const add = (selector, type, func) => {
        const parent = document.querySelector(selector);
        parent.addEventListener(type, func);
    }

    const addForEach = (selector, type, func) => {
        const parent = document.querySelectorAll(selector);
        parent.forEach(child => child.addEventListener(type, func));
    }

    return { add, addForEach }

})();

function handleClick(e) {
    displayController.drawProjectForm()
}

function handleProjectForm(e) {
    e.stopPropagation()
    const target = e.target.value
    if (target === 'add') {
        console.log('add')
        const {name, desc} = grabForm();
        projectController.addProject((0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)(name, desc));
        cancelForm();
        displayController.drawProjects();
        displayController.drawProjectToDos(projectController.numberOfProjects() -1);
    } else {
        if (e.target.dataset.overlay || target === 'cancel') {
            cancelForm();
        }
    }
}

function cancelForm() {
    displayController.closeForm()
}

function grabForm() {
    const name = document.querySelector('.form-body > .name').value;
    const desc = document.querySelector('.form-body > .desc').value;

    if (!name) {
        alert("Please fill out the name!")
        return
    }

    return { name , desc }
}

function handleTaskForm(e) {
    const target = e.target.value;
    const project = document.querySelector('.todo-list').dataset.currentProject

    if (target === 'add') {
        const {title, date, priority} = grabTaskForm();
        console.log( title, date, priority )
        const todo = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)("title", title, date, priority)
        projectController.addTaskToProject(project, todo);
        displayController.drawProjectToDos(project);
        displayController.drawProjects();
    } else {
        displayController.drawProjectToDos(project)
    }
}

function grabTaskForm() {
    const title = document.querySelector('.todo-container > .task').value
    const date = document.querySelector('.form-container > input[type=date]').value
    const priority = document.querySelector('.form-container > select').value

    return {title, date, priority}
}

const projects = document.querySelector('.projects');
projects.addEventListener('click', e => {
    const projectItem = e.target.closest('li');
    if (!projectItem) return;
    const key = projectItem.dataset.projectKey;
    console.log(key);

    displayController.drawProjectToDos(key);

})

function handleAddTask(e) {
    displayController.drawTaskForm()
}



// displayController.drawProjectForm();
const addProjectButton = document.querySelector('.add-project')
addProjectButton.addEventListener('click', handleClick)
storageController.loadFromLocalStorage();

// // old things to fill the stuff with 
// let project1 = projectItem('New Project', 'My Super Cool Project')
// let x = todoItem('To Do 1', 'IDK', 'never', '!!!')
// let y = todoItem('To Do 2', 'IDK', 'never', '!!!')
// let z = todoItem('To Do 3', 'IDK', 'never', '!!!')

// project1.addItem(x)
// project1.addItem(y)
// project1.addItem(z)

// let project2 = projectItem('New Project 2', 'My Super Cool Project')
// project2.addItem(x)
// project2.addItem(y)
// project2.addItem(z)

// let project3 = projectItem('New Project 3', 'My Super Cool Project')

// project3.addItem(x)

// project1.getItems()
// console.log(project1.test())

// projectController.addProject(project1)
// projectController.addProject(project2)
// projectController.addProject(project3)

// // projectController.addProject(project1);
// displayController.drawProjects()

// // displayController.drawProjectToDos(0)


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
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', name);
    label.textContent = labelContent

    input.type = type;
    input.placeholder = placeholder;
    input.name = name;
    input.classList.add(classN)
    input.autocomplete = "off";
    if (name === 'title') {
        input.required = true;
    }

    return { input, label }

}

const getFormHeader = (title) => {
    const formHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-header');
    formHeader.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createText)(title, 'h1'));

    return formHeader;
}

const getFormFooter = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-footer');
    const cancelButton = document.createElement('button');
    const addButton = document.createElement('button');

    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('button', 'cancel');
    cancelButton.type = 'button';
    cancelButton.value = 'cancel';

    addButton.textContent = 'Add';
    addButton.classList.add('button', 'add');
    addButton.type = 'button';
    addButton.value = 'add';


    parent.appendChild(cancelButton);
    parent.appendChild(addButton)

    return parent;
}

const getFormInputs = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-container');
    const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-body')
    const projectName = formElements('Project Name', '', 'title', 'text', 'name');
    const description = formElements('Project Description', '', 'My first project', 'text', 'desc');

    wrapper.appendChild(projectName.label);
    wrapper.appendChild(projectName.input);
    wrapper.appendChild(description.label);
    wrapper.appendChild(description.input);

    parent.appendChild(wrapper);

    return parent;

}

const generateToDoForm = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('todo-container');
    const titleForm = formElements('', 'e.g. wash the car', 'title', 'text', 'task');
    parent.appendChild(titleForm.label);
    parent.appendChild(titleForm.input);

    return parent
}

const generateToDoOptions = () => {
    return `<input type="date" name="due-date">
    <label for="priority"></label>
        <select>
            <option value="0">Normal</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
    </select>`


}

const generateProjectForm = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form', 'project-form');
    const formHeader = getFormHeader('Add a project');
    const body = getFormInputs();
    const footer =  getFormFooter();

    parent.appendChild(formHeader);
    parent.appendChild(body);
    parent.appendChild(footer)


    return parent
}

const generateTaskForm = () => {
    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('todo-form');
    const form = document.createElement('form');
    const tdcontainer = generateToDoForm();
    const options = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-container')
    options.innerHTML = generateToDoOptions();
    const footer = getFormFooter();
    footer.classList.add('todo-footer');

    form.appendChild(tdcontainer)
    form.appendChild(options);
    form.appendChild(footer);

    parent.appendChild(form);

    return parent;
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

const getToDos = (data) => ({
    getItems: () => data.list,
    unpackItems: () => {
        const unpacked = data.list.map(task => {
            const taskObject = {
                title: task.title(),
                description: task.description(),
                dueDate: task.dueDate(),
                priority: task.priority(),
            }
            return taskObject
        })

        const projectItem = {
            title: data.title,
            description: data.description,
            unpacked: unpacked,
            item: data.item,
        }

        return projectItem;
    }
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

    return Object.assign(
        {},
        getTitle(data),
        getDescription(data),
        getDueDate(data),
        getPriority(data)
    )
}

const projectItem = (title, description) => {
    let data = {
        title,
        description,
        list: [],
        item: '',
    }

    return Object.assign(
        {},
        getTitle(data),
        getDescription(data),
        getToDos(data),
        pushNewItem(data),
        getNumberTodos(data)
    )
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
        classNames.forEach(className => {
            div.classList.add(className)
        });
    }

    return div
}

const createText = (content, type) => {
    const text = document.createElement(type)
    
    if (content || content === 0) {
        text.innerText = content;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcz9mZjlhIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2NyaXB0cy9vYmplY3RzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NjcmlwdHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1G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OztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIGJvcmRlcjogMCAqL1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGFiIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gICAgLyogbmVlZCB0byBmbG9hdCAvIGNlbnRlciBpdCBvbiBwYWdlIGFzIHdlbGwgYXMgYWRkIFxcXCJjb250YWluZXIgdG8gbWFrZSBvcGFjaXR5XFxcIiAqL1xcclxcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7ICovXFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAvKiB0ZW1wb3JhcnkgLCBkZWxldGUgbGF0ZXIgKi9cXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcblxcclxcbiAgICAvKiBjZW50ZXIgaW4gc2NyZWVuICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBib3R0b206IGF1dG87XFxyXFxuICAgIHJpZ2h0OiBhdXRvO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxOyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24ge1xcclxcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgICAgIGJvcmRlcjogM3B4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hZGQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkOmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0Y2FjNjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWhlYWRlciB7XFxyXFxuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgKi9cXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWZvb3RlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBwYWRkaW5nOiA1cHggMjBweFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLW92ZXJsYXkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICAvKiBwb2ludGVyLWV2ZW50czogYWxsOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubGFzIHtcXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbjpob3ZlciA+IHAge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uOmhvdmVyID4gLmxhcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gPiBkaXYsIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvb3RlciA+IC5idXR0b24ge1xcclxcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvb3RlciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59IFxcclxcblxcclxcbi5hY3Rpb24tbGkge1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAzMHB4XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvdW50ZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpRkFBaUY7SUFDakY7O2tCQUVjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsVUFBVTs7SUFFVixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDOztFQUVsQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLGdCQUFnQjtFQUNsQjs7RUFFQTtRQUNNLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLG1CQUFtQjtFQUN6Qjs7RUFFQTtNQUNJLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLHFCQUFxQjtNQUNyQixZQUFZO0VBQ2hCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO01BQ0ksNEJBQTRCO01BQzVCLGFBQWE7TUFDYiw4QkFBOEI7O0VBRWxDOztFQUVBO01BQ0ksYUFBYTtNQUNiLHlCQUF5QjtNQUN6QiwyQkFBMkI7TUFDM0I7O0FBRU47O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIGJvcmRlcjogMCAqL1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8tYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGFiIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cXHJcXG4gICAgLyogbmVlZCB0byBmbG9hdCAvIGNlbnRlciBpdCBvbiBwYWdlIGFzIHdlbGwgYXMgYWRkIFxcXCJjb250YWluZXIgdG8gbWFrZSBvcGFjaXR5XFxcIiAqL1xcclxcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7ICovXFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAvKiB0ZW1wb3JhcnkgLCBkZWxldGUgbGF0ZXIgKi9cXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcblxcclxcbiAgICAvKiBjZW50ZXIgaW4gc2NyZWVuICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBib3R0b206IGF1dG87XFxyXFxuICAgIHJpZ2h0OiBhdXRvO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxOyAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMjJweCAwO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b24ge1xcclxcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcclxcbiAgICAgIGJvcmRlcjogM3B4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hZGQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkOmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0Y2FjNjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWhlYWRlciB7XFxyXFxuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgKi9cXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWZvb3RlciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBwYWRkaW5nOiA1cHggMjBweFxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nLW92ZXJsYXkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICAvKiBwb2ludGVyLWV2ZW50czogYWxsOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubGFzIHtcXHJcXG4gICAgbWFyZ2luOiAwIDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbjpob3ZlciA+IHAge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uOmhvdmVyID4gLmxhcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gPiBkaXYsIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvb3RlciA+IC5idXR0b24ge1xcclxcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvb3RlciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59IFxcclxcblxcclxcbi5hY3Rpb24tbGkge1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAzMHB4XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvdW50ZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IGdlbmVyYXRlUHJvamVjdEZvcm0sIGdlbmVyYXRlVGFza0Zvcm0gfSBmcm9tICcuL3NjcmlwdHMvZm9ybXMnXG5pbXBvcnQgeyBkaXZGYWN0b3J5LCBjcmVhdGVUZXh0IH0gZnJvbSAnLi9zY3JpcHRzL3V0aWxzJ1xuaW1wb3J0IHsgcHJvamVjdEl0ZW0sIHRvZG9JdGVtIH0gZnJvbSAnLi9zY3JpcHRzL29iamVjdHMnXG5cbmltcG9ydCAnLi9yZXNvdXJjZXMvc3R5bGVzL2luZGV4LmNzcydcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9wcm9qZWN0SXRlbUxheW91dCA9IChuYW1lLCBjb3VudCkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saScpXG4gICAgICAgIGNvbnN0IGRpdiA9IGRpdkZhY3RvcnkoJ3Byb2plY3QtaXRlbScpXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gY3JlYXRlVGV4dChuYW1lLCAnc3BhbicpXG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBjcmVhdGVUZXh0KGNvdW50LCAnc3BhbicpXG4gICAgICAgIGNvdW50ZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb3VudGVyJylcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb3VudGVyKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgY29uc3QgX3RvZG9MYXlvdXQgPSAoZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpJylcbiAgICAgICAgY29uc3QgZGl2ID0gZGl2RmFjdG9yeSgndG9kby1pdGVtJylcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXG4gICAgICAgIGNvbnN0IGRlc2MgPSBjcmVhdGVUZXh0KGRlc2NyaXB0aW9uLCAnZGl2JylcbiAgICAgICAgY29uc3QgZGF0ZSA9IGNyZWF0ZVRleHQoZHVlRGF0ZSwgJ2RpdicpXG4gICAgICAgIGNvbnN0IHByaSA9IGNyZWF0ZVRleHQocHJpb3JpdHksICdkaXYnKVxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveClcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRlc2MpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkYXRlKVxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocHJpKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgY29uc3QgX3Byb2plY3RGb3JtRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgfVxuXG4gICAgY29uc3QgX2FkZFRhc2tMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZFRhc2spXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1Byb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLW92ZXJsYXknKVxuICAgICAgICBvdmVybGF5LmRhdGFzZXRbJ292ZXJsYXknXSA9IHRydWVcblxuICAgICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgb3ZlcmxheSlcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RGb3JtKCkpXG5cbiAgICAgICAgLy8gd2FzIGluIHRoZSBfcHJvamVjdEZvcm1FdmVudExpc3RlbmVyc1xuICAgICAgICBldmVudExpc3RlbmVyQ29udHJvbGxlci5hZGRGb3JFYWNoKCcucHJvamVjdC1mb3JtIGJ1dHRvbicsICdjbGljaycsIGhhbmRsZVByb2plY3RGb3JtKTtcbiAgICAgICAgZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIuYWRkKCcuZGlhbG9nLW92ZXJsYXknLCAnY2xpY2snLCBoYW5kbGVQcm9qZWN0Rm9ybSlcblxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGlvbi1saScpO1xuICAgICAgICBfY2xlYXJDaGlsZE5vZGVzT2YocGFyZW50KTtcbiAgICAgICAgcGFyZW50LmFwcGVuZChnZW5lcmF0ZVRhc2tGb3JtKCkpO1xuXG4gICAgICAgIGV2ZW50TGlzdGVuZXJDb250cm9sbGVyLmFkZEZvckVhY2goJy50b2RvLWZvb3RlciBidXR0b24nLCAnY2xpY2snLCBoYW5kbGVUYXNrRm9ybSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBfY2xlYXJDaGlsZE5vZGVzT2YgPSAobm9kZSkgPT4ge1xuICAgICAgICB3aGlsZSAobm9kZS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1Byb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICAgICAgX2NsZWFyQ2hpbGROb2Rlc09mKHBhcmVudCk7XG4gICAgICAgIGxldCBhcnJheSA9IHByb2plY3RDb250cm9sbGVyLmxpc3RQcm9qZWN0cygpXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGxldCBjb3VudGVyID0gMFxuXG4gICAgICAgIGFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqZWN0LmdldEl0ZW1zKCkubGVuZ3RoKVxuICAgICAgICAgICAgY29uc3QgbGkgPSBfcHJvamVjdEl0ZW1MYXlvdXQoXG4gICAgICAgICAgICAgICAgb2JqZWN0LnRpdGxlKCksXG4gICAgICAgICAgICAgICAgb2JqZWN0LmdldEl0ZW1zKCkubGVuZ3RoXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBsaS5kYXRhc2V0Wydwcm9qZWN0S2V5J10gPSBjb3VudGVyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9KVxuXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxuICAgIH1cblxuICAgIGNvbnN0IF9kcmF3QWRkQWN0aW9ucyA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3Rpb24tbGknKTtcbiAgICAgICAgcGFyZW50LmlubmVySFRNTCA9ICBgPGRpdiBjbGFzcz1cImFjdGlvbiBhZGQtdG9kb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImxhcyBsYS1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG5cbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UHJvamVjdFRvRG9zID0gKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgICAgIHBhcmVudC5kYXRhc2V0WydjdXJyZW50UHJvamVjdCddID0ga2V5O1xuICAgICAgICBfY2xlYXJDaGlsZE5vZGVzT2YocGFyZW50KTtcbiAgICAgICAgbGV0IGFycmF5ID0gcHJvamVjdENvbnRyb2xsZXIubGlzdFByb2plY3RJdGVtcyhrZXkpO1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChfZHJhd0FkZEFjdGlvbnMoXCJBZGQgVGFza1wiKSk7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgXG4gICAgICAgIGFycmF5LmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBfdG9kb0xheW91dChcbiAgICAgICAgICAgICAgICBvYmplY3QuZGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgICAgICBvYmplY3QuZHVlRGF0ZSgpLFxuICAgICAgICAgICAgICAgIG9iamVjdC5wcmlvcml0eSgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBsaS5kYXRhc2V0WydpdGVtS2V5J10gPSBjb3VudGVyXG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKVxuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobGlzdClcbiAgICAgICAgX2FkZFRhc2tMaXN0ZW5lcigpXG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1vdmVybGF5Jyk7XG4gICAgICAgIC8vIG92ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0Rm9ybSk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZHJhd1Byb2plY3RGb3JtLCBkcmF3UHJvamVjdHMsIGRyYXdQcm9qZWN0VG9Eb3MsIGNsb3NlRm9ybSwgZHJhd1Rhc2tGb3JtIH1cbn0pKCk7XG5cbmNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbXVxuXG4gICAgY29uc3QgbGlzdFByb2plY3RzID0gKCkgPT4gcHJvamVjdExpc3RcbiAgICBjb25zdCBudW1iZXJPZlByb2plY3RzID0gKCkgPT4gcHJvamVjdExpc3QubGVuZ3RoXG4gICAgY29uc3QgaW5pdGlhbFByb2plY3RMb2FkID0gKHNhdmVkUHJvamVjdHMpID0+IHtcbiAgICAgICAgLy9wcm9qZWN0TGlzdCA9IFsuLi5zYXZlZFByb2plY3RzXTtcbiAgICAgICAgc2F2ZWRQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEkgPSBwcm9qZWN0SXRlbShwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHByb2plY3QudW5wYWNrZWQuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gdG9kb0l0ZW0odGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SS5hZGRJdGVtKHRvZG8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdEkpO1xuICAgICAgICB9KVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdHMoKVxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKDApXG5cbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KVxuICAgICAgICBfc2F2ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBwbGFjZWhvbGRlciwgdXBkYXRlXG4gICAgICAgIHByb2plY3RMaXN0LnNsaWNlKDAsIDEpXG4gICAgICAgIF9zYXZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza1RvUHJvamVjdCA9IChrZXksIHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdFtrZXldO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRJdGVtKHRvZG8pO1xuICAgICAgICBfc2F2ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IF91bnBhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB1bnBhY2tlZCA9IHByb2plY3RMaXN0Lm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LnVucGFja0l0ZW1zKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB1bnBhY2tlZDtcbiAgICB9XG5cbiAgICBjb25zdCBfc2F2ZSA9ICgpID0+IHtcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKF91bnBhY2soKSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2xvYWRGcm9tU3RvcmFnZSA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RQcm9qZWN0SXRlbXMgPSAoa2V5KSA9PiBwcm9qZWN0TGlzdFtrZXldLmdldEl0ZW1zKClcblxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIGxpc3RQcm9qZWN0cywgbGlzdFByb2plY3RJdGVtcywgYWRkVGFza1RvUHJvamVjdCwgbnVtYmVyT2ZQcm9qZWN0cywgaW5pdGlhbFByb2plY3RMb2FkIH1cbn0pKCk7XG5cbmNvbnN0IHN0b3JhZ2VDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBzYXZlTmFtZSA9ICdwcm9qZWN0cyc7XG5cbiAgICBsZXQgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKG9iamVjdCkgPT4ge1xuICAgICAgICAvLyBjb25zdCBvYmplY3Q9IHByb2plY3RDb250cm9sbGVyLmxpc3RQcm9qZWN0cygpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNhdmVOYW1lLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZU5hbWUpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsb2FkRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZG9lc0V4aXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2F2ZU5hbWUpXG4gICAgXG4gICAgICAgIGlmIChkb2VzRXhpc3QpIHtcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sbGVyLmluaXRpYWxQcm9qZWN0TG9hZChKU09OLnBhcnNlKGRvZXNFeGlzdCkpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuICB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSwgbG9hZEZyb21Mb2NhbFN0b3JhZ2UgfVxufSkoKTtcblxuY29uc3QgZXZlbnRMaXN0ZW5lckNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFkZCA9IChzZWxlY3RvciwgdHlwZSwgZnVuYykgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkRm9yRWFjaCA9IChzZWxlY3RvciwgdHlwZSwgZnVuYykgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcGFyZW50LmZvckVhY2goY2hpbGQgPT4gY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCBhZGRGb3JFYWNoIH1cblxufSkoKTtcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0Rm9ybSgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RGb3JtKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWVcbiAgICBpZiAodGFyZ2V0ID09PSAnYWRkJykge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkJylcbiAgICAgICAgY29uc3Qge25hbWUsIGRlc2N9ID0gZ3JhYkZvcm0oKTtcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0SXRlbShuYW1lLCBkZXNjKSk7XG4gICAgICAgIGNhbmNlbEZvcm0oKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuZHJhd1Byb2plY3RzKCk7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MocHJvamVjdENvbnRyb2xsZXIubnVtYmVyT2ZQcm9qZWN0cygpIC0xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5vdmVybGF5IHx8IHRhcmdldCA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgIGNhbmNlbEZvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybSgpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5jbG9zZUZvcm0oKVxufVxuXG5mdW5jdGlvbiBncmFiRm9ybSgpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYm9keSA+IC5uYW1lJykudmFsdWU7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJvZHkgPiAuZGVzYycpLnZhbHVlO1xuXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgb3V0IHRoZSBuYW1lIVwiKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4geyBuYW1lICwgZGVzYyB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tGb3JtKGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpLmRhdGFzZXQuY3VycmVudFByb2plY3RcblxuICAgIGlmICh0YXJnZXQgPT09ICdhZGQnKSB7XG4gICAgICAgIGNvbnN0IHt0aXRsZSwgZGF0ZSwgcHJpb3JpdHl9ID0gZ3JhYlRhc2tGb3JtKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkgKVxuICAgICAgICBjb25zdCB0b2RvID0gdG9kb0l0ZW0oXCJ0aXRsZVwiLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmFkZFRhc2tUb1Byb2plY3QocHJvamVjdCwgdG9kbyk7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MocHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdQcm9qZWN0VG9Eb3MocHJvamVjdClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdyYWJUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lciA+IC50YXNrJykudmFsdWVcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyID4gaW5wdXRbdHlwZT1kYXRlXScpLnZhbHVlXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXIgPiBzZWxlY3QnKS52YWx1ZVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgZGF0ZSwgcHJpb3JpdHl9XG59XG5cbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5wcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICBpZiAoIXByb2plY3RJdGVtKSByZXR1cm47XG4gICAgY29uc3Qga2V5ID0gcHJvamVjdEl0ZW0uZGF0YXNldC5wcm9qZWN0S2V5O1xuICAgIGNvbnNvbGUubG9nKGtleSk7XG5cbiAgICBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKGtleSk7XG5cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2soZSkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyLmRyYXdUYXNrRm9ybSgpXG59XG5cblxuXG4vLyBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdEZvcm0oKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKVxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKVxuc3RvcmFnZUNvbnRyb2xsZXIubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcblxuLy8gLy8gb2xkIHRoaW5ncyB0byBmaWxsIHRoZSBzdHVmZiB3aXRoIFxuLy8gbGV0IHByb2plY3QxID0gcHJvamVjdEl0ZW0oJ05ldyBQcm9qZWN0JywgJ015IFN1cGVyIENvb2wgUHJvamVjdCcpXG4vLyBsZXQgeCA9IHRvZG9JdGVtKCdUbyBEbyAxJywgJ0lESycsICduZXZlcicsICchISEnKVxuLy8gbGV0IHkgPSB0b2RvSXRlbSgnVG8gRG8gMicsICdJREsnLCAnbmV2ZXInLCAnISEhJylcbi8vIGxldCB6ID0gdG9kb0l0ZW0oJ1RvIERvIDMnLCAnSURLJywgJ25ldmVyJywgJyEhIScpXG5cbi8vIHByb2plY3QxLmFkZEl0ZW0oeClcbi8vIHByb2plY3QxLmFkZEl0ZW0oeSlcbi8vIHByb2plY3QxLmFkZEl0ZW0oeilcblxuLy8gbGV0IHByb2plY3QyID0gcHJvamVjdEl0ZW0oJ05ldyBQcm9qZWN0IDInLCAnTXkgU3VwZXIgQ29vbCBQcm9qZWN0Jylcbi8vIHByb2plY3QyLmFkZEl0ZW0oeClcbi8vIHByb2plY3QyLmFkZEl0ZW0oeSlcbi8vIHByb2plY3QyLmFkZEl0ZW0oeilcblxuLy8gbGV0IHByb2plY3QzID0gcHJvamVjdEl0ZW0oJ05ldyBQcm9qZWN0IDMnLCAnTXkgU3VwZXIgQ29vbCBQcm9qZWN0JylcblxuLy8gcHJvamVjdDMuYWRkSXRlbSh4KVxuXG4vLyBwcm9qZWN0MS5nZXRJdGVtcygpXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0MS50ZXN0KCkpXG5cbi8vIHByb2plY3RDb250cm9sbGVyLmFkZFByb2plY3QocHJvamVjdDEpXG4vLyBwcm9qZWN0Q29udHJvbGxlci5hZGRQcm9qZWN0KHByb2plY3QyKVxuLy8gcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0MylcblxuLy8gLy8gcHJvamVjdENvbnRyb2xsZXIuYWRkUHJvamVjdChwcm9qZWN0MSk7XG4vLyBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdHMoKVxuXG4vLyAvLyBkaXNwbGF5Q29udHJvbGxlci5kcmF3UHJvamVjdFRvRG9zKDApXG4iLCJpbXBvcnQgeyBmcm9tVW5peFRpbWUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgZGl2RmFjdG9yeSwgY3JlYXRlVGV4dCB9IGZyb20gXCIuL3V0aWxzXCJcclxuXHJcbmNvbnN0IGZvcm1FbGVtZW50cyA9IChsYWJlbENvbnRlbnQsIHBsYWNlaG9sZGVyLCBuYW1lLCB0eXBlLCBjbGFzc04pID0+IHtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIG5hbWUpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbENvbnRlbnRcclxuXHJcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XHJcbiAgICBpbnB1dC5uYW1lID0gbmFtZTtcclxuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NOKVxyXG4gICAgaW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcclxuICAgIGlmIChuYW1lID09PSAndGl0bGUnKSB7XHJcbiAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGlucHV0LCBsYWJlbCB9XHJcblxyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtSGVhZGVyID0gKHRpdGxlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZGl2RmFjdG9yeSgnZm9ybS1oZWFkZXInKTtcclxuICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCh0aXRsZSwgJ2gxJykpO1xyXG5cclxuICAgIHJldHVybiBmb3JtSGVhZGVyO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZGl2RmFjdG9yeSgnZm9ybS1mb290ZXInKTtcclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2NhbmNlbCcpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbEJ1dHRvbi52YWx1ZSA9ICdjYW5jZWwnO1xyXG5cclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdhZGQnKTtcclxuICAgIGFkZEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBhZGRCdXR0b24udmFsdWUgPSAnYWRkJztcclxuXHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZvcm1JbnB1dHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBkaXZGYWN0b3J5KCdmb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRpdkZhY3RvcnkoJ2Zvcm0tYm9keScpXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm1FbGVtZW50cygnUHJvamVjdCBOYW1lJywgJycsICd0aXRsZScsICd0ZXh0JywgJ25hbWUnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybUVsZW1lbnRzKCdQcm9qZWN0IERlc2NyaXB0aW9uJywgJycsICdNeSBmaXJzdCBwcm9qZWN0JywgJ3RleHQnLCAnZGVzYycpO1xyXG5cclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUubGFiZWwpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZS5pbnB1dCk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmxhYmVsKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24uaW5wdXQpO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50O1xyXG5cclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVUb0RvRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGRpdkZhY3RvcnkoJ3RvZG8tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0aXRsZUZvcm0gPSBmb3JtRWxlbWVudHMoJycsICdlLmcuIHdhc2ggdGhlIGNhcicsICd0aXRsZScsICd0ZXh0JywgJ3Rhc2snKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aXRsZUZvcm0ubGFiZWwpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlRm9ybS5pbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudFxyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZVRvRG9PcHRpb25zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPjwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5Ob3JtYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5IaWdoPC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5gXHJcblxyXG5cclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGRpdkZhY3RvcnkoJ2Zvcm0nLCAncHJvamVjdC1mb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZ2V0Rm9ybUhlYWRlcignQWRkIGEgcHJvamVjdCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGdldEZvcm1JbnB1dHMoKTtcclxuICAgIGNvbnN0IGZvb3RlciA9ICBnZXRGb3JtRm9vdGVyKCk7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvb3RlcilcclxuXHJcblxyXG4gICAgcmV0dXJuIHBhcmVudFxyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZVRhc2tGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZGl2RmFjdG9yeSgndG9kby1mb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgdGRjb250YWluZXIgPSBnZW5lcmF0ZVRvRG9Gb3JtKCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0gZGl2RmFjdG9yeSgnZm9ybS1jb250YWluZXInKVxyXG4gICAgb3B0aW9ucy5pbm5lckhUTUwgPSBnZW5lcmF0ZVRvRG9PcHRpb25zKCk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBnZXRGb3JtRm9vdGVyKCk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1mb290ZXInKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRkY29udGFpbmVyKVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChvcHRpb25zKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudDtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVQcm9qZWN0Rm9ybSwgZ2VuZXJhdGVUYXNrRm9ybSB9IiwiY29uc3QgZ2V0VGl0bGUgPSAoZGF0YSkgPT4gKHtcclxuICAgIHRpdGxlOiAoKSA9PiBkYXRhLnRpdGxlLFxyXG59KVxyXG5cclxuY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIGRlc2NyaXB0aW9uOiAoKSA9PiBkYXRhLmRlc2NyaXB0aW9uLFxyXG59KVxyXG5cclxuY29uc3QgZ2V0RHVlRGF0ZSA9IChkYXRhKSA9PiAoe1xyXG4gICAgZHVlRGF0ZTogKCkgPT4gZGF0YS5kdWVEYXRlLFxyXG59KVxyXG5cclxuY29uc3QgZ2V0UHJpb3JpdHkgPSAoZGF0YSkgPT4gKHtcclxuICAgIHByaW9yaXR5OiAoKSA9PiBkYXRhLnByaW9yaXR5LFxyXG59KVxyXG5cclxuY29uc3QgZ2V0VG9Eb3MgPSAoZGF0YSkgPT4gKHtcclxuICAgIGdldEl0ZW1zOiAoKSA9PiBkYXRhLmxpc3QsXHJcbiAgICB1bnBhY2tJdGVtczogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVucGFja2VkID0gZGF0YS5saXN0Lm1hcCh0YXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFza09iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0YXNrLnRpdGxlKCksXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogdGFzay5wcmlvcml0eSgpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrT2JqZWN0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdW5wYWNrZWQ6IHVucGFja2VkLFxyXG4gICAgICAgICAgICBpdGVtOiBkYXRhLml0ZW0sXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdEl0ZW07XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBwdXNoTmV3SXRlbSA9IChkYXRhKSA9PiAoe1xyXG4gICAgYWRkSXRlbTogKGl0ZW0pID0+IHtcclxuICAgICAgICBkYXRhLmxpc3QucHVzaChpdGVtKVxyXG4gICAgfSxcclxufSlcclxuXHJcbmNvbnN0IGdldE51bWJlclRvZG9zID0gKGRhdGEpID0+ICh7XHJcbiAgICBudW1iZXJPZjogKCkgPT4gZGF0YS5saXN0Lmxlbmd0aCxcclxuICAgIHRlc3Q6ICgpID0+IGRhdGEuZGVzY3JpcHRpb24sXHJcbn0pXHJcblxyXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgZ2V0VGl0bGUoZGF0YSksXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24oZGF0YSksXHJcbiAgICAgICAgZ2V0RHVlRGF0ZShkYXRhKSxcclxuICAgICAgICBnZXRQcmlvcml0eShkYXRhKVxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0SXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgIGl0ZW06ICcnLFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIGdldFRpdGxlKGRhdGEpLFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uKGRhdGEpLFxyXG4gICAgICAgIGdldFRvRG9zKGRhdGEpLFxyXG4gICAgICAgIHB1c2hOZXdJdGVtKGRhdGEpLFxyXG4gICAgICAgIGdldE51bWJlclRvZG9zKGRhdGEpXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IHByb2plY3RJdGVtLCB0b2RvSXRlbSB9IiwiXHJcbmNvbnN0IGRpdkZhY3RvcnkgPSAoLi4uY2xhc3NOYW1lcykgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGlmIChjbGFzc05hbWVzKSB7XHJcbiAgICAgICAgY2xhc3NOYW1lcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGl2XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRleHQgPSAoY29udGVudCwgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICAgIFxyXG4gICAgaWYgKGNvbnRlbnQgfHwgY29udGVudCA9PT0gMCkge1xyXG4gICAgICAgIHRleHQuaW5uZXJUZXh0ID0gY29udGVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRleHRcclxufVxyXG5cclxuZXhwb3J0IHsgZGl2RmFjdG9yeSwgY3JlYXRlVGV4dCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==