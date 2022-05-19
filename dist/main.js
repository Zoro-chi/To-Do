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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/js/modules/UI.js\");\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/UI.js":
/*!******************************!*\
  !*** ./src/js/modules/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/js/modules/project.js\");\n/* harmony import */ var _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectLibrary.js */ \"./src/js/modules/projectLibrary.js\");\n\r\n\r\n\r\n// DOM SELECTORS \r\nconst projectNameDiv = document.querySelector('.project-name')\r\nconst addNewProject = document.querySelector('.addNewProject')\r\nconst display = document.querySelector('.display')\r\nconst registerButton = document.querySelector('.project-button')\r\n\r\nclass UI{\r\n\r\n\r\n    // ADD PROJECT TO PROJECT LIST\r\n    static addProject = () =>{\r\n        // SELECT PROJECT FORM INPUT & ADD 'SHOW' CLASS (VISIBILITY)\r\n        projectNameDiv.classList.toggle('show')\r\n    }\r\n    // CREATE NEW PROJECT AND ADD TO PROJECT LIBRARY AND UI\r\n    static createProject = () =>{\r\n        // HIDE INPUT FORM\r\n        projectNameDiv.classList.toggle('show')\r\n\r\n        let newProjectName = document.querySelector('#project-name').value\r\n        let nameInput = document.querySelector('#project-name')\r\n        const newProjectObject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(newProjectName)\r\n        _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.addToLibrary(newProjectObject)\r\n        \r\n\r\n        const newProjectDiv = document.createElement('div')\r\n        newProjectDiv.classList.add('newProjectDiv')\r\n        const newProject = document.createElement('li')\r\n        newProject.classList.add('createdLi')\r\n        newProject.innerText = newProjectName\r\n        nameInput.value = ''\r\n        newProjectDiv.appendChild(newProject)\r\n\r\n        // CREATE A DELETE PROJECT BUTTON\r\n        const deleteProjectButton = document.createElement('button')\r\n        deleteProjectButton.addEventListener('click', UI.deleteProject)\r\n        deleteProjectButton.classList.add('dltButton')\r\n        const deleteProjectIcon = document.createElement('i')\r\n            \r\n        newProject.append(deleteProjectButton)\r\n\r\n        // CREATE ADD TASK TO PROJECT BUTTON\r\n        const addTaskToProject = document.createElement('button')\r\n        addTaskToProject.addEventListener('click', UI.addTask)\r\n        addTaskToProject.classList.add('addTaskButton')\r\n        const addTaskIcon = document.createElement('i')\r\n\r\n        newProject.append(addTaskToProject)\r\n        const projectDisplay = document.querySelector('.navbar')\r\n        projectDisplay.appendChild(newProjectDiv)\r\n    }\r\n\r\n    // DELETE PROJECT\r\n    static deleteProject = (e) =>{\r\n        e.target.parentElement.remove()\r\n        const el = e.target.parentElement.textContent\r\n        _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.deleteFromLibrary(el)\r\n    }\r\n\r\n        // ADD TASK TO PROJECT\r\n    static addTask = () =>{\r\n        // CREATE A FORM TO COLLECT TASK DETAILS \r\n        // CREATE FORM DIV\r\n        const formDiv = document.createElement('div')\r\n        formDiv.classList.add('taskFormDiv')\r\n\r\n        // CREATE FORM ELEMENT\r\n        const form = document.createElement('form')\r\n        form.classList.add('taskForm')\r\n        formDiv.appendChild(form)\r\n\r\n        // CREATE INPUT ELEMENT FOR TASK NAME\r\n        const taskName = document.createElement('input')\r\n        taskName.setAttribute('type', 'text')\r\n        taskName.setAttribute('name', 'taskName')\r\n        taskName.setAttribute('placeholder', 'Task name')\r\n        form.appendChild(taskName)\r\n\r\n    }\r\n}\r\n\r\n\r\n// EVENT LISTENERS\r\naddNewProject.addEventListener('click', UI.addProject)\r\nregisterButton.addEventListener('click', UI.createProject)\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/UI.js?");

/***/ }),

/***/ "./src/js/modules/project.js":
/*!***********************************!*\
  !*** ./src/js/modules/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n\r\n\r\nclass Project{\r\n    constructor(name){\r\n        this.name = name\r\n        this.tasks = []\r\n    }\r\n\r\n    setName(name){\r\n        this.name = name\r\n    }\r\n\r\n    getName(){\r\n        return this.name\r\n    }\r\n\r\n    setTasks(tasks){\r\n        this.tasks = tasks\r\n    }\r\n\r\n    getTasks(){\r\n        return this.tasks\r\n    }\r\n\r\n    getTask(taskName){\r\n        return this.tasks.find( task => task.getName() === taskName)\r\n    }\r\n\r\n    addTask(newTask){\r\n        if (this.tasks.find( task => task.getName() === newTask.name))\r\n        return this.tasks.push(newTask)\r\n    }\r\n\r\n    deleteTask(taskName){\r\n        this.tasks.filter( task => task.name !== taskName)\r\n    }\r\n    \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/project.js?");

/***/ }),

/***/ "./src/js/modules/projectLibrary.js":
/*!******************************************!*\
  !*** ./src/js/modules/projectLibrary.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectStore\": () => (/* binding */ ProjectStore)\n/* harmony export */ });\n\r\nclass ProjectStore{\r\n\r\n    // ADD PROJECTS TO LIBRARY\r\n    static addToLibrary = (newProject) => {\r\n        this.store.push(newProject)\r\n    }\r\n\r\n    static deleteFromLibrary = (projectName) => {\r\n        const index = this.store.indexOf(projectName)\r\n        this.store.splice(index, 1)\r\n    }\r\n\r\n}\r\n\r\n// AN ARRAY TO STORE PROJECTS\r\nProjectStore.store = []\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/projectLibrary.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;