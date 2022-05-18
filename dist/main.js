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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/js/modules/project.js\");\n\r\n\r\n// DOM SELECTORS \r\nconst projectNameDiv = document.querySelector('.project-name')\r\nconst addNewProject = document.querySelector('.addNewProject')\r\nconst display = document.querySelector('.display')\r\n\r\nclass UI{\r\n\r\n\r\n    // ADD PROJECT TO PROJECT LIST\r\n    static addProject = () =>{\r\n        // SELECT PROJECT FORM INPUT & ADD 'SHOW' CLASS (VISIBILITY)\r\n        projectNameDiv.classList.toggle('show')\r\n\r\n        // CREATE NEW PROJECT AND ADD TO PROJECT LIBRARY AND UI\r\n        const createProject = () =>{\r\n            // HIDE INPUT FORM\r\n            projectNameDiv.classList.toggle('show')\r\n\r\n            const newProjectName = document.querySelector('#project-name').value\r\n            const newProjectObject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(newProjectName)\r\n            _project_js__WEBPACK_IMPORTED_MODULE_0__.projectLibrary.push(newProjectObject)\r\n            console.log(newProjectName)\r\n            console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectLibrary)\r\n\r\n            const newProject = document.createElement('li')\r\n            newProject.classList.add('createdLi')\r\n            newProject.innerText = newProjectName\r\n\r\n            // ADD A \"ADD TASK BUTTON\" AND \"DELETE PROJECT BUTTON\"\r\n            newProject.innerHTML = `${newProjectName} \r\n            <button class='addTaskButton'> <i class='fa-solid fa-plus add-task-image'></i> </button> \r\n            <button class='dltButton'> <i class='fa-solid fa-trash dltIcon'></i> </button> `\r\n            document.querySelector('.addTaskButton').addEventListener('click', () =>{\r\n                const taskFormDiv = document.createElement('div')\r\n                taskFormDiv.classList.add('task-form-div')\r\n                taskFormDiv.innerHTML = `\r\n                <form class='task-form'>\r\n                    <div class='task-name'>\r\n                        <label for='task-name'> Name </label>\r\n                        <input id='task-name' type='text' placeholder='Name'>\r\n                    </div>\r\n\r\n                    <div class='task-description'>\r\n                        <label for='task-description'> Description </label>\r\n                        <input id='task-name' type='textarea' placeholder='Description' rows=10>\r\n                    </div>\r\n\r\n                    <div class='due-date'>\r\n                        <label for='due-date'> Due date </label>\r\n                        <input id-'due-date' type='date'>\r\n                    </div>\r\n\r\n                    <div class='task-form-buttons'>\r\n                    <button class='addTask'> <i class='fa-solid fa-plus add-task-image'></i> </button>\r\n                    <button class='dltButton'> <i class='fa-solid fa-trash dltIcon'></i> </button>\r\n                    </div>\r\n                </form>\r\n                `\r\n                display.appendChild(taskFormDiv)\r\n            })\r\n            document.querySelector('.dltButton').addEventListener('click', dltProject)\r\n\r\n            const projectDisplay = document.querySelector('.navbar')\r\n            projectDisplay.appendChild(newProject)\r\n        }\r\n        document.querySelector('.project-button').addEventListener('click', createProject)\r\n\r\n    }\r\n}\r\n\r\n\r\n// EVENT LISTENERS\r\naddNewProject.addEventListener('click', UI.addProject)\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/UI.js?");

/***/ }),

/***/ "./src/js/modules/project.js":
/*!***********************************!*\
  !*** ./src/js/modules/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"projectLibrary\": () => (/* binding */ projectLibrary)\n/* harmony export */ });\n\r\n\r\nclass Project{\r\n    constructor(name){\r\n        this.name = name\r\n        this.tasks = []\r\n    }\r\n\r\n    setName(name){\r\n        this.name = name\r\n    }\r\n\r\n    getName(){\r\n        return this.name\r\n    }\r\n\r\n    setTasks(tasks){\r\n        this.tasks = tasks\r\n    }\r\n\r\n    getTasks(){\r\n        return this.tasks\r\n    }\r\n\r\n    getTask(taskName){\r\n        return this.tasks.find( task => task.getName() === taskName)\r\n    }\r\n\r\n    addTask(newTask){\r\n        if (this.tasks.find( task => task.getName() === newTask.name))\r\n        return this.tasks.push(newTask)\r\n    }\r\n\r\n    deleteTask(taskName){\r\n        this.tasks.filter( task => task.name !== taskName)\r\n    }\r\n}\r\n\r\nconst projectLibrary =[]\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/project.js?");

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