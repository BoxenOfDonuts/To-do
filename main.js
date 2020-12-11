/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/forms */ \"./src/scripts/forms.js\");\n\r\n\r\nconst getTitle = (data) => ({\r\n    title: () =>  data.title\r\n})\r\n\r\nconst getDescription = (data) => ({\r\n    description: () =>  data.description\r\n})\r\n\r\nconst getDueDate = (data) => ({\r\n    dueDate: () =>  data.dueDate\r\n})\r\n\r\nconst getPriority = (data) => ({\r\n    priority: () =>  data.priority\r\n})\r\n\r\nconst todoItem = (title, description, dueDate, priority) => {\r\n    const data = {\r\n        title,\r\n        description,\r\n        dueDate,\r\n        priority,\r\n    }\r\n\r\n    return Object.assign({},\r\n        getTitle(data),\r\n        getDescription(data),\r\n        getDueDate(data),\r\n        getPriority(data)\r\n    )\r\n}\r\n\r\nconst projectItem = (title, description) => {\r\n    const data = {\r\n        title,\r\n        description,\r\n    }\r\n\r\n    return Object.assign({},\r\n        getTitle(data),\r\n        getDescription(data),\r\n    )\r\n}\r\n\r\nconst displayController = (() => {\r\n    \r\n    const drawProjectForm = () => {\r\n        const parent = document.querySelector('body');\r\n        const overlay = document.createElement('div');\r\n        overlay.classList.add('dialog-overlay');\r\n\r\n        parent.insertAdjacentElement('afterbegin', overlay);\r\n        \r\n        overlay.appendChild((0,_scripts_forms__WEBPACK_IMPORTED_MODULE_0__.generateProjectForm)());\r\n\r\n\r\n    }\r\n\r\n    return { drawProjectForm }\r\n})();\r\n\r\n\r\nlet tab = document.querySelector('.task-tab');\r\n\r\ndisplayController.drawProjectForm();\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/scripts/forms.js":
/*!******************************!*
  !*** ./src/scripts/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateProjectForm\": () => /* binding */ generateProjectForm\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\r\n\r\nconst formElements = (labelContent, placeholder, name, type) => {\r\n    const label = document.createElement('label');\r\n    const input = document.createElement('input');\r\n\r\n    label.setAttribute('for', name);\r\n    label.textContent = labelContent\r\n\r\n    input.type = type;\r\n    input.placeholder = placeholder;\r\n    input.name = name;\r\n\r\n    return { input, label }\r\n\r\n}\r\n\r\nconst getFormHeader = (title) => {\r\n    const formHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-header');\r\n    formHeader.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createText)(title, 'h1'));\r\n\r\n    return formHeader;\r\n}\r\n\r\nconst getFormFooter = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-footer');\r\n    const cancelButton = document.createElement('button');\r\n    const addButton = document.createElement('button');\r\n\r\n    cancelButton.textContent = 'Cancel';\r\n    cancelButton.classList.add('button', 'cancel');\r\n    cancelButton.type = 'button';\r\n\r\n    addButton.textContent = 'Add';\r\n    addButton.classList.add('button', 'add');\r\n    addButton.type = 'button';\r\n\r\n\r\n    parent.appendChild(cancelButton);\r\n    parent.appendChild(addButton)\r\n\r\n    return parent;\r\n}\r\n\r\nconst getFormInputs = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-container');\r\n    const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-body')\r\n    const projectName = formElements('Project Name', '', 'title', 'text');\r\n    const description = formElements('Project Description', '', 'My first project', 'text');\r\n\r\n    wrapper.appendChild(projectName.label);\r\n    wrapper.appendChild(projectName.input);\r\n    wrapper.appendChild(description.label);\r\n    wrapper.appendChild(description.input);\r\n\r\n    parent.appendChild(wrapper);\r\n\r\n    return parent;\r\n\r\n}\r\n\r\nconst generateProjectForm = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form', 'project-form');\r\n    const formHeader = getFormHeader('Add a project');\r\n    const body = getFormInputs();\r\n    const footer =  getFormFooter();\r\n\r\n    parent.appendChild(formHeader);\r\n    parent.appendChild(body);\r\n    parent.appendChild(footer)\r\n\r\n\r\n    return parent\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/scripts/forms.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"divFactory\": () => /* binding */ divFactory,\n/* harmony export */   \"createText\": () => /* binding */ createText\n/* harmony export */ });\n\r\nconst divFactory = (...classNames) => {\r\n    const div = document.createElement('div')\r\n    if (classNames) {\r\n        classNames.forEach(className => {\r\n            div.classList.add(className)\r\n        });\r\n    }\r\n\r\n    return div\r\n}\r\n\r\nconst createText = (content, type) => {\r\n    const text = document.createElement(type)\r\n    \r\n    if (content) {\r\n        text.innerText = content;\r\n    }\r\n\r\n    return text\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/scripts/utils.js?");

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
/******/ 			// no module.id needed
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