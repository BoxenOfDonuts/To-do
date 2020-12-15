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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/forms */ \"./src/scripts/forms.js\");\n/* harmony import */ var _scripts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _scripts_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/objects */ \"./src/scripts/objects.js\");\n\n\n\n\nconst displayController = (() => {\n    const _projectItemLayout = (name, count) => {\n        const li = document.createElement('li')\n        li.classList.add('project-li')\n        const div = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.divFactory)('project-item')\n        const projectName = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(name, 'span')\n        const counter = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(count, 'span')\n        counter.classList.add('project-counter')\n\n        div.appendChild(projectName)\n        div.appendChild(counter)\n        li.appendChild(div)\n\n        return li\n    }\n\n    const _todoLayout = (description, dueDate, priority) => {\n        const li = document.createElement('li')\n        li.classList.add('todo-li')\n        const div = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.divFactory)('todo-item')\n        const checkbox = document.createElement('input')\n        checkbox.setAttribute('type', 'checkbox')\n        const desc = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(description, 'div')\n        const date = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(dueDate, 'div')\n        const pri = (0,_scripts_utils__WEBPACK_IMPORTED_MODULE_1__.createText)(priority, 'div')\n\n        div.appendChild(checkbox)\n        div.appendChild(desc)\n        div.appendChild(date)\n        div.appendChild(pri)\n        li.appendChild(div)\n\n        return li\n    }\n\n    const _projectFormEventListeners = () => {\n        const formButtons = document.querySelectorAll('.project-form button')\n        const overlay = document.querySelector('.dialog-overlay')\n        // const inputs = document.querySelectorAll('.form-body > input[type=text')\n\n        // removes event listener after it fires\n        overlay.addEventListener('click', handleProjectForm)\n    \n        formButtons.forEach((button) => {\n            button.addEventListener('click', handleProjectForm)\n        })\n\n\n    }\n\n    const drawProjectForm = () => {\n        const parent = document.querySelector('body')\n        const overlay = document.createElement('div')\n        overlay.classList.add('dialog-overlay')\n        overlay.dataset['overlay'] = true\n\n        parent.insertAdjacentElement('afterbegin', overlay)\n        overlay.appendChild((0,_scripts_forms__WEBPACK_IMPORTED_MODULE_0__.generateProjectForm)())\n\n        _projectFormEventListeners()\n\n    }\n\n    const _clearChildNodesOf = (node) => {\n        while (node.firstElementChild) {\n            node.firstElementChild.remove()\n        }\n    }\n\n    const drawProjects = () => {\n        const parent = document.querySelector('.projects');\n        _clearChildNodesOf(parent);\n        let array = projectController.listProjects()\n        const projects = document.querySelector('.projects')\n        const projectList = document.createElement('ul')\n        let counter = 0\n\n        array.forEach((object) => {\n            console.log(object.getItems().length)\n            const li = _projectItemLayout(\n                object.title(),\n                object.getItems().length\n            )\n            li.dataset['projectKey'] = counter\n            projectList.appendChild(li)\n            counter++\n        })\n\n        projects.appendChild(projectList)\n    }\n\n    const _drawAddActions = (title) => {\n        const parent = document.createElement('li')\n        parent.innerHTML =  `<div class=\"action add-todo\">\n                    <i class=\"las la-plus\"></i>\n                    <p>${title}</p>\n                </div>`\n        return parent;\n    }\n\n    const drawProjectToDos = (key) => {\n        const parent = document.querySelector('.todos-list');\n        _clearChildNodesOf(parent);\n        let array = projectController.listProjectItems(key);\n        const list = document.createElement('ul');\n        list.appendChild(_drawAddActions(\"Add Task\"));\n        let counter = 0;\n        \n        array.forEach((object) => {\n            const li = _todoLayout(\n                object.description(),\n                object.dueDate(),\n                object.priority()\n            )\n            li.dataset['itemKey'] = counter\n            list.appendChild(li)\n            counter++\n        })\n        \n        parent.appendChild(list)\n    }\n\n    const closeForm = () => {\n        const overlay = document.querySelector('.dialog-overlay');\n        // overlay.removeEventListener('click', handleProjectForm);\n        overlay.remove();\n    }\n\n    return { drawProjectForm, drawProjects, drawProjectToDos, closeForm }\n})()\n\nconst projectController = (() => {\n    let projectList = []\n\n    const listProjects = () => projectList\n\n    const addProject = (project) => {\n        projectList.push(project)\n    }\n\n    const removeProject = (project) => {\n        // placeholder, update\n        projectList.slice(0, 1)\n    }\n\n    const listProjectItems = (key) => projectList[key].getItems()\n\n    return { addProject, listProjects, listProjectItems }\n})()\n\nfunction handleClick(e) {\n    displayController.drawProjectForm()\n}\n\nfunction handleProjectForm(e) {\n    e.stopPropagation()\n    const target = e.target.value\n    if (target === 'add') {\n        console.log('add')\n        grabForm()\n    } else {\n        if (e.target.dataset.overlay || target === 'cancel') {\n            cancelForm();\n        }\n    }\n}\n\nfunction cancelForm() {\n    displayController.closeForm()\n}\n\nfunction grabForm() {\n    const name = document.querySelector('.form-body > .name').value;\n    const desc = document.querySelector('.form-body > .desc').value;\n\n    if (!name) {\n        alert(\"Please fill out the name!\")\n        return\n    }\n\n    projectController.addProject((0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)(name, desc));\n    cancelForm();\n    displayController.drawProjects()\n}\n\nconst projects = document.querySelector('.projects');\nprojects.addEventListener('click', e => {\n    const projectItem = e.target.closest('li');\n    if (!projectItem) return;\n    const key = projectItem.dataset.projectKey;\n    console.log(key);\n\n    displayController.drawProjectToDos(key);\n\n})\n\n\n\n// displayController.drawProjectForm();\nconst addProjectButton = document.querySelector('.add-project')\naddProjectButton.addEventListener('click', handleClick)\n\nlet project1 = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)('New Project', 'My Super Cool Project')\nlet x = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)('To Do 1', 'IDK', 'never', '!!!')\nlet y = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)('To Do 2', 'IDK', 'never', '!!!')\nlet z = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.todoItem)('To Do 3', 'IDK', 'never', '!!!')\n\nproject1.addItem(x)\nproject1.addItem(y)\nproject1.addItem(z)\n\nlet project2 = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)('New Project 2', 'My Super Cool Project')\nproject2.addItem(x)\nproject2.addItem(y)\nproject2.addItem(z)\n\nlet project3 = (0,_scripts_objects__WEBPACK_IMPORTED_MODULE_2__.projectItem)('New Project 3', 'My Super Cool Project')\n\nproject3.addItem(x)\n\nproject1.getItems()\nconsole.log(project1.test())\n\nprojectController.addProject(project1)\nprojectController.addProject(project2)\nprojectController.addProject(project3)\n\n// projectController.addProject(project1);\ndisplayController.drawProjects()\n\n// displayController.drawProjectToDos(0)\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/scripts/forms.js":
/*!******************************!*
  !*** ./src/scripts/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateProjectForm\": () => /* binding */ generateProjectForm\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\r\n\r\nconst formElements = (labelContent, placeholder, name, type, classN) => {\r\n    const label = document.createElement('label');\r\n    const input = document.createElement('input');\r\n\r\n    label.setAttribute('for', name);\r\n    label.textContent = labelContent\r\n\r\n    input.type = type;\r\n    input.placeholder = placeholder;\r\n    input.name = name;\r\n    input.classList.add(classN)\r\n    input.autocomplete = \"off\";\r\n    if (name === 'title') {\r\n        input.required = true;\r\n    }\r\n\r\n    return { input, label }\r\n\r\n}\r\n\r\nconst getFormHeader = (title) => {\r\n    const formHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-header');\r\n    formHeader.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createText)(title, 'h1'));\r\n\r\n    return formHeader;\r\n}\r\n\r\nconst getFormFooter = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-footer');\r\n    const cancelButton = document.createElement('button');\r\n    const addButton = document.createElement('button');\r\n\r\n    cancelButton.textContent = 'Cancel';\r\n    cancelButton.classList.add('button', 'cancel');\r\n    cancelButton.type = 'button';\r\n    cancelButton.value = 'cancel';\r\n\r\n    addButton.textContent = 'Add';\r\n    addButton.classList.add('button', 'add');\r\n    addButton.type = 'button';\r\n    addButton.value = 'add';\r\n\r\n\r\n    parent.appendChild(cancelButton);\r\n    parent.appendChild(addButton)\r\n\r\n    return parent;\r\n}\r\n\r\nconst getFormInputs = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-container');\r\n    const wrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form-body')\r\n    const projectName = formElements('Project Name', '', 'title', 'text', 'name');\r\n    const description = formElements('Project Description', '', 'My first project', 'text', 'desc');\r\n\r\n    wrapper.appendChild(projectName.label);\r\n    wrapper.appendChild(projectName.input);\r\n    wrapper.appendChild(description.label);\r\n    wrapper.appendChild(description.input);\r\n\r\n    parent.appendChild(wrapper);\r\n\r\n    return parent;\r\n\r\n}\r\n\r\nconst generateProjectForm = () => {\r\n    const parent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.divFactory)('form', 'project-form');\r\n    const formHeader = getFormHeader('Add a project');\r\n    const body = getFormInputs();\r\n    const footer =  getFormFooter();\r\n\r\n    parent.appendChild(formHeader);\r\n    parent.appendChild(body);\r\n    parent.appendChild(footer)\r\n\r\n\r\n    return parent\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/scripts/forms.js?");

/***/ }),

/***/ "./src/scripts/objects.js":
/*!********************************!*
  !*** ./src/scripts/objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectItem\": () => /* binding */ projectItem,\n/* harmony export */   \"todoItem\": () => /* binding */ todoItem\n/* harmony export */ });\nconst getTitle = (data) => ({\r\n    title: () => data.title,\r\n})\r\n\r\nconst getDescription = (data) => ({\r\n    description: () => data.description,\r\n})\r\n\r\nconst getDueDate = (data) => ({\r\n    dueDate: () => data.dueDate,\r\n})\r\n\r\nconst getPriority = (data) => ({\r\n    priority: () => data.priority,\r\n})\r\n\r\nconst getToDos = (data) => ({\r\n    // getItems: () => {\r\n    //     data.list.forEach(item => {\r\n    //         console.log(item.title())\r\n    //     })\r\n    // }\r\n\r\n    getItems: () => data.list,\r\n})\r\n\r\nconst pushNewItem = (data) => ({\r\n    addItem: (item) => {\r\n        data.list.push(item)\r\n    },\r\n})\r\n\r\nconst getNumberTodos = (data) => ({\r\n    numberOf: () => data.list.length,\r\n    test: () => data.description,\r\n})\r\n\r\nconst todoItem = (title, description, dueDate, priority) => {\r\n    const data = {\r\n        title,\r\n        description,\r\n        dueDate,\r\n        priority,\r\n    }\r\n\r\n    return Object.assign(\r\n        {},\r\n        getTitle(data),\r\n        getDescription(data),\r\n        getDueDate(data),\r\n        getPriority(data)\r\n    )\r\n}\r\n\r\nconst projectItem = (title, description) => {\r\n    let data = {\r\n        title,\r\n        description,\r\n        list: [],\r\n        item: '',\r\n    }\r\n\r\n    return Object.assign(\r\n        {},\r\n        getTitle(data),\r\n        getDescription(data),\r\n        getToDos(data),\r\n        pushNewItem(data),\r\n        getNumberTodos(data)\r\n    )\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/scripts/objects.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"divFactory\": () => /* binding */ divFactory,\n/* harmony export */   \"createText\": () => /* binding */ createText\n/* harmony export */ });\n\r\nconst divFactory = (...classNames) => {\r\n    const div = document.createElement('div')\r\n    if (classNames) {\r\n        classNames.forEach(className => {\r\n            div.classList.add(className)\r\n        });\r\n    }\r\n\r\n    return div\r\n}\r\n\r\nconst createText = (content, type) => {\r\n    const text = document.createElement(type)\r\n    \r\n    if (content || content === 0) {\r\n        text.innerText = content;\r\n    }\r\n    \r\n    return text\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do/./src/scripts/utils.js?");

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