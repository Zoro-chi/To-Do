/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"navbar\": () => (/* binding */ navbar),\n/* harmony export */   \"newProject\": () => (/* binding */ newProject),\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm),\n/* harmony export */   \"projectName\": () => (/* binding */ projectName)\n/* harmony export */ });\n// SELECTORS\r\nconst newProject = document.querySelector('.addNewProject')\r\nconst projectForm = document.querySelector('.project-name')\r\nconst projectName = document.querySelector('#project-name')\r\nconst button = document.querySelector('.project-button')\r\nconst navbar = document.querySelector('.navbar')\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\nclass Projects{\r\n    constructor(name){\r\n        this.name = name\r\n        this.tasks = []\r\n    }\r\n    addTask(task){\r\n        this.tasks.push(task)\r\n    }\r\n    removeTask(task){\r\n        \r\n    }\r\n}\r\n\r\nclass Tasks{\r\n    constructor(name, description, dateDue, priority){\r\n        this.name = name\r\n        this.description = description\r\n        this.dateDue = dateDue\r\n        this.priority = priority\r\n    }\r\n}\r\n\r\nlet projectLibrary = []\r\n\r\n// DYNAMICALLY CREATES NEW LI'S = TO-DO'S\r\nconst newProjectItem = () =>{\r\n    const createdLi = document.createElement('li')\r\n    createdLi.addEventListener('click', addTask)\r\n    const newItem = document.createElement('div')\r\n    newItem.classList.add('newItemDiv')\r\n    const dltButton = document.createElement('button')\r\n    dltButton.classList.add('dltButton')\r\n    const dltIcon = document.createElement('i')\r\n    dltIcon.innerHTML = '<i class=\"fa-solid fa-trash\"></i>'\r\n    dltIcon.classList.add('dltIcon')\r\n    dltButton.appendChild(dltIcon)\r\n    createdLi.textContent = `${_dom_js__WEBPACK_IMPORTED_MODULE_0__.projectName.value}`\r\n    createdLi.classList.add('createdLi')\r\n    newItem.appendChild(createdLi)\r\n    newItem.appendChild(dltButton)\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.navbar.appendChild(newItem)\r\n    \r\n    const dltProject = (e) =>{\r\n        // REMOVES PROJECT ITEM FROM NAVBAR\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.navbar.removeChild(newItem)\r\n        // REMOVE FROM PROJECT LIBRARY ARRAY\r\n        let nodes = document.querySelectorAll('.newItemDiv')\r\n        nodes = Array.from(nodes)\r\n        let selectedProject = nodes.indexOf(e.target.parentNode)\r\n        projectLibrary.splice(selectedProject, 1)\r\n    }    \r\n    dltButton.addEventListener('click', dltProject)\r\n}\r\n\r\nconst addProject = () => {\r\n    // SHOWS THE INPUT FORM FOR COLLECTION\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.projectForm.classList.toggle('show')\r\n}\r\n_dom_js__WEBPACK_IMPORTED_MODULE_0__.newProject.addEventListener('click', addProject)\r\n\r\nconst registerButton = () => {\r\n    // HIDES INPUT FORM AFTER COLLECTION\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.projectName.classList.remove('show')\r\n    newProjectItem()\r\n    // CREATES A NEW PROJECT OBJECT\r\n    const newProjectObject = new Projects(_dom_js__WEBPACK_IMPORTED_MODULE_0__.projectName.value)\r\n    console.log(newProjectObject)\r\n    // ADDS NEW PROJECT OBJECT TO PROJECT LIBRARY\r\n    projectLibrary.push(newProjectObject)\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.projectName.innerHTML = ''\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.projectForm.classList.toggle('show')\r\n    console.log(projectLibrary)\r\n}\r\n_dom_js__WEBPACK_IMPORTED_MODULE_0__.button.addEventListener('click', registerButton)\r\n\r\nconst addTask = () =>{\r\n    // CREATE DIV-WRAPPER FOR TASK FORM\r\n    const taskFormWrapper = document.createElement('div')\r\n    taskFormWrapper.classList.add('task-form-wrapper')\r\n\r\n    // CREATE FORM DYNAMICALLY TO COLLECT TASK INFO\r\n    const taskForm = document.createElement('form')\r\n    taskForm.classList.add('task-form')\r\n\r\n    // CREATE INPUT FOR TASK NAME\r\n    const taskName = document.createElement('input')\r\n    taskName.classList.add('task-name')\r\n    taskName.setAttribute('placeholder', 'Task name')\r\n    taskName.setAttribute('type', 'text')\r\n    taskName.setAttribute('name', 'task-name')\r\n\r\n    // CREATE TEXTAREA FOR TASK DESCRIPTION\r\n    const taskDescription = document.createElement('textarea')\r\n    taskDescription.classList.add('task-description')\r\n    taskDescription.setAttribute('placeholder', 'Description')\r\n    taskDescription.setAttribute('type', 'text')\r\n    taskDescription.setAttribute('name', 'task-description')\r\n\r\n    // CREATE INPUT FOR TASK DUE DATE\r\n    const dueDate = document.createElement('input')\r\n    dueDate.classList.add('due-date')\r\n    dueDate.setAttribute('type', 'date')\r\n    dueDate.setAttribute('name', 'due-date')\r\n\r\n    // CREATE PRIORITY INPUT\r\n    const priorityDiv = document.createElement('div')\r\n    priorityDiv.classList.add('priority-div')\r\n    const priorityLabel = document.createElement('label')\r\n    priorityLabel.innerText = 'Priority'\r\n    priorityLabel.classList.add('priority-label')\r\n    const prioritySelect = document.createElement('select')\r\n    \r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;