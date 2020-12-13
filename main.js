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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/forms */ \"./src/scripts/forms.js\");\n/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/utils */ \"./src/scripts/utils.js\");\n\r\n\r\n\r\nconst getTitle = (data) => ({\r\n    title: () =>  data.title\r\n})\r\n\r\nconst getDescription = (data) => ({\r\n    description: () =>  data.description\r\n})\r\n\r\nconst getDueDate = (data) => ({\r\n    dueDate: () =>  data.dueDate\r\n})\r\n\r\nconst getPriority = (data) => ({\r\n    priority: () =>  data.priority\r\n})\r\n\r\nconst getToDos = (data) => ({\r\n    // getItems: () => {\r\n    //     data.list.forEach(item => {\r\n    //         console.log(item.title())\r\n    //     })\r\n    // }\r\n\r\n    getItems: () => data.list\r\n})\r\n\r\nconst pushNewItem = (data) => ({\r\n    addItem: (item) => {\r\n        data.list.push(item)\r\n    }\r\n})\r\n\r\nconst getNumberTodos = (data) => ({\r\n    numberOf: () => data.list.length,\r\n    test: () => data.description\r\n    \r\n})\r\n\r\n\r\nconst todoItem = (title, description, dueDate, priority) => {\r\n    const data = {\r\n        title,\r\n        description,\r\n        dueDate,\r\n        priority,\r\n    }\r\n\r\n    return Object.assign({},\r\n        getTitle(data),\r\n        getDescription(data),\r\n        getDueDate(data),\r\n        getPriority(data)\r\n    )\r\n}\r\n\r\nconst projectItem = (title, description) => {\r\n    let data = {\r\n        title,\r\n        description,\r\n        list: [],\r\n        item: '',\r\n    }\r\n\r\n    return Object.assign({},\r\n        getTitle(data),\r\n        getDescription(data),\r\n        getToDos(data),\r\n        pushNewItem(data),\r\n        getNumberTodos(data),\r\n    )\r\n}\r\n\r\nconst displayController = (() => {\r\n\r\n    const _projectItemLayout = (name, count) => {\r\n        const li = document.createElement('li');\r\n        li.classList.add('project-li');\r\n        const div = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.divFactory)('project-item');\r\n        const projectName = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(name, 'span');\r\n        const counter = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(count, 'span');\r\n        counter.classList.add('project-counter');\r\n\r\n        div.appendChild(projectName);\r\n        div.appendChild(counter);\r\n        li.appendChild(div);\r\n\r\n        return li;\r\n    }\r\n\r\n    const _todoLayout = (description, dueDate, priority) => {\r\n        const li = document.createElement('li');\r\n        li.classList.add('todo-li');\r\n        const div = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.divFactory)('todo-item');\r\n        const checkbox = document.createElement('input');\r\n        checkbox.setAttribute('type', 'checkbox');\r\n        const desc = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(description, 'div');\r\n        const date = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(dueDate, 'div');\r\n        const pri = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(priority, 'div');\r\n\r\n        div.appendChild(checkbox);\r\n        div.appendChild(desc)\r\n        div.appendChild(date);\r\n        div.appendChild(pri);\r\n        li.appendChild(div);\r\n\r\n        return li;\r\n\r\n    }\r\n    \r\n    const drawProjectForm = () => {\r\n        const parent = document.querySelector('body');\r\n        const overlay = document.createElement('div');\r\n        overlay.classList.add('dialog-overlay');\r\n        overlay.dataset['overlay'] = true;\r\n\r\n        parent.insertAdjacentElement('afterbegin', overlay);\r\n        overlay.appendChild((0,_scripts_forms__WEBPACK_IMPORTED_MODULE_0__.generateProjectForm)());\r\n    }\r\n\r\n    const drawProjects = () => {\r\n        let array = projectController.listProjects();\r\n        const projects = document.querySelector('.projects')\r\n        const projectList = document.createElement('ul');\r\n        let counter = 0;\r\n\r\n        array.forEach(object => {\r\n            const li = _projectItemLayout(object.title(), object.getItems().length)\r\n            li.dataset['projectKey'] = counter;\r\n            projectList.appendChild(li);\r\n            counter++;\r\n        })\r\n\r\n        projects.appendChild(projectList);\r\n    }\r\n\r\n    const drawProjectToDos = (key) => {\r\n        let array = projectController.listProjectItems(key);\r\n        console.log(array)\r\n        const parent = document.querySelector('.todos-list');\r\n        const list = document.createElement('ul');\r\n        let counter = 0;\r\n        \r\n        array.forEach(object => {\r\n            const li = _todoLayout(object.description(), object.dueDate(), object.priority())\r\n            li.dataset['itemKey'] = counter;\r\n            list.appendChild(li);\r\n            counter++\r\n        })\r\n\r\n        parent.appendChild(list);\r\n\r\n    }\r\n\r\n    const closeForm = () => {\r\n        const overlay = document.querySelector('.dialog-overlay');\r\n        overlay.remove();\r\n    }\r\n\r\n    return { drawProjectForm, drawProjects, drawProjectToDos, closeForm }\r\n})();\r\n\r\n\r\nconst projectController = (() => {\r\n    let projectList = [];\r\n\r\n    const listProjects = () => projectList\r\n\r\n    const addProject = (project) => {\r\n        projectList.push(project)\r\n    }\r\n\r\n    const removeProject = (project) => {\r\n        // placeholder, update \r\n        projectList.slice(0,1);\r\n    }\r\n\r\n    const listProjectItems = (key) => projectList[key].getItems();\r\n\r\n    return {addProject, listProjects, listProjectItems}\r\n\r\n})();\r\n\r\nfunction handleClick(e) {\r\n    displayController.drawProjectForm();\r\n    const formButtons = document.querySelectorAll('.project-form button');\r\n    const overlay = document.querySelector('.dialog-overlay')\r\n    overlay.addEventListener('click', cancelForm);\r\n\r\n    formButtons.forEach(button => button.addEventListener('click', handleProjectForm));\r\n}\r\n\r\nfunction handleProjectForm(e) {\r\n    console.log(e)\r\n    const target =  e.target.value;\r\n    if (target === 'add') {\r\n        console.log('add')\r\n    } else {\r\n        console.log('nope')\r\n    }\r\n}\r\n\r\nfunction cancelForm(e) {\r\n    console.log(e.target);\r\n    if (!e.target.dataset.overlay) return;\r\n    displayController.closeForm();\r\n    // window.removeEventListener('click', cancelForm);\r\n}\r\n\r\n\r\n// displayController.drawProjectForm();\r\nconst addProjectButton = document.querySelector('.add-project');\r\naddProjectButton.addEventListener('click', handleClick);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet project1 = projectItem('New Project', 'My Super Cool Project');\r\nlet x = todoItem('To Do 1', 'IDK', 'never', '!!!');\r\nlet y = todoItem('To Do 2', 'IDK', 'never', '!!!');\r\nlet z = todoItem('To Do 3', 'IDK', 'never', '!!!');\r\n\r\nproject1.addItem(x)\r\nproject1.addItem(y)\r\nproject1.addItem(z)\r\n\r\nlet project2 = projectItem('New Project 2', 'My Super Cool Project');\r\nproject2.addItem(x)\r\nproject2.addItem(y)\r\nproject2.addItem(z)\r\n\r\nlet project3 = projectItem('New Project 3', 'My Super Cool Project');\r\n\r\nproject3.addItem(x)\r\nproject3.addItem(y)\r\nproject3.addItem(z)\r\n\r\n\r\nproject1.getItems()\r\nconsole.log(project1.test())\r\n\r\n\r\nprojectController.addProject(project1);\r\nprojectController.addProject(project2);\r\nprojectController.addProject(project3);\r\n\r\n// projectController.addProject(project1);\r\ndisplayController.drawProjects();\r\n\r\ndisplayController.drawProjectToDos(0);\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/scripts/forms.js":
/*!******************************!*
  !*** ./src/scripts/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateProjectForm\": () => /* binding */ generateProjectForm\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\r\n\r\nconst formElements = (labelContent, placeholder, name, type) => {\r\n    const label = document.createElement('label');\r\n    const input = document.createElement('input');\r\n\r\n    label.setAttribute('for', name);\r\n    label.textContent = labelContent\r\n\r\n    input.type = type;\r\n    input.placeholder = placeholder;\r\n    input.name = name;\r\n\r\n    return { input, label }\r\n\r\n}\r\n\r\nconst getFormHeader = (title) => {\r\n    const formHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-header');\r\n    formHeader.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createText)(title, 'h1'));\r\n\r\n    return formHeader;\r\n}\r\n\r\nconst getFormFooter = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-footer');\r\n    const cancelButton = document.createElement('button');\r\n    const addButton = document.createElement('button');\r\n\r\n    cancelButton.textContent = 'Cancel';\r\n    cancelButton.classList.add('button', 'cancel');\r\n    cancelButton.type = 'button';\r\n    cancelButton.value = 'cancel';\r\n\r\n    addButton.textContent = 'Add';\r\n    addButton.classList.add('button', 'add');\r\n    addButton.type = 'button';\r\n    addButton.value = 'add';\r\n\r\n\r\n    parent.appendChild(cancelButton);\r\n    parent.appendChild(addButton)\r\n\r\n    return parent;\r\n}\r\n\r\nconst getFormInputs = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-container');\r\n    const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-body')\r\n    const projectName = formElements('Project Name', '', 'title', 'text');\r\n    const description = formElements('Project Description', '', 'My first project', 'text');\r\n\r\n    wrapper.appendChild(projectName.label);\r\n    wrapper.appendChild(projectName.input);\r\n    wrapper.appendChild(description.label);\r\n    wrapper.appendChild(description.input);\r\n\r\n    parent.appendChild(wrapper);\r\n\r\n    return parent;\r\n\r\n}\r\n\r\nconst generateProjectForm = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form', 'project-form');\r\n    const formHeader = getFormHeader('Add a project');\r\n    const body = getFormInputs();\r\n    const footer =  getFormFooter();\r\n\r\n    parent.appendChild(formHeader);\r\n    parent.appendChild(body);\r\n    parent.appendChild(footer)\r\n\r\n\r\n    return parent\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/scripts/forms.js?");

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