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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/js/modules/project.js\");\n/* harmony import */ var _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectLibrary.js */ \"./src/js/modules/projectLibrary.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/js/modules/tasks.js\");\n\r\n\r\n\r\n\r\n// DOM SELECTORS\r\nconst projectNameDiv = document.querySelector(\".project-name\");\r\nconst addNewProject = document.querySelector(\".addNewProject\");\r\nconst display = document.querySelector(\".display\");\r\nconst registerButton = document.querySelector(\".project-button\");\r\nconst mainSection = document.querySelector(\".main-section\");\r\nconst navbar = document.querySelector(\".navbar\");\r\nconst filter = document.querySelector(\"#filter\");\r\n\r\nlet newProjectName;\r\nconst completedList = _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.completed;\r\nlet selectedProjectName;\r\n\r\nclass UI {\r\n  // DISPLAY FILTER OPTION\r\n  static filter = () => {\r\n    let selectedFilter = filter.options[filter.selectedIndex].value;\r\n    if (selectedFilter === \"none\") {\r\n      return;\r\n    } else if (selectedFilter === \"completed\") {\r\n      display.innerText = \"\";\r\n      mainSection.firstChild.innerText = \"\";\r\n      // DISPLAY COMPLETED PROJECTS\r\n      console.log(completedList);\r\n      completedList.forEach((task) => {\r\n        // CREATE A CARD FOR EACH TASK\r\n        const projectCard = document.createElement(\"div\");\r\n        projectCard.classList.add(\"projectCard\");\r\n        projectCard.style.backgroundColor = \"lightgreen\";\r\n        const taskName = document.createElement(\"h2\");\r\n        taskName.classList.add(\"projectCardName\");\r\n        const taskDescription = document.createElement(\"p\");\r\n        taskDescription.classList.add(\"projectCardDescription\");\r\n        const dueDate = document.createElement(\"p\");\r\n        dueDate.classList.add(\"projectCardDate\");\r\n\r\n        // SET TASK DETAILS\r\n        taskName.innerText = `Task : ${task.name}`;\r\n        taskDescription.innerText = `Description : ${task.description}`;\r\n        dueDate.innerText = `Due Date : ${task.date}`;\r\n\r\n        projectCard.appendChild(taskName);\r\n        projectCard.appendChild(taskDescription);\r\n        projectCard.appendChild(dueDate);\r\n        display.appendChild(projectCard);\r\n      });\r\n    }\r\n  };\r\n\r\n  // ADD PROJECT TO PROJECT LIST\r\n  static addProject = () => {\r\n    // SELECT PROJECT FORM INPUT & ADD 'SHOW' CLASS (VISIBILITY)\r\n    projectNameDiv.classList.toggle(\"show\");\r\n  };\r\n  // CREATE NEW PROJECT AND ADD TO PROJECT LIBRARY AND UI\r\n  static createProject = () => {\r\n    // HIDE INPUT FORM\r\n    projectNameDiv.classList.toggle(\"show\");\r\n\r\n    newProjectName = document.querySelector(\"#project-name\").value;\r\n    if (newProjectName.length <= 0) {\r\n      UI.showAlert(\"Please enter a project name\", \"err\");\r\n    } else {\r\n      let nameInput = document.querySelector(\"#project-name\");\r\n      const newProjectObject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(newProjectName, newProjectName);\r\n      console.log(newProjectObject);\r\n      _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.addToLibrary(newProjectObject);\r\n\r\n      const newProjectDiv = document.createElement(\"div\");\r\n      newProjectDiv.classList.add(\"newProjectDiv\");\r\n      const newProject = document.createElement(\"li\");\r\n      newProject.classList.add(\"createdLi\");\r\n      const newProjectNameSpan = document.createElement(\"span\");\r\n      newProjectNameSpan.classList.add(\"projectNameSpan\");\r\n      newProjectNameSpan.addEventListener(\"click\", UI.projectShow);\r\n      newProjectNameSpan.innerText = newProjectName;\r\n      nameInput.value = \"\";\r\n      newProject.appendChild(newProjectNameSpan);\r\n      newProjectDiv.appendChild(newProject);\r\n\r\n      // CREATE A DELETE PROJECT BUTTON\r\n      const deleteProjectButton = document.createElement(\"button\");\r\n      deleteProjectButton.addEventListener(\"click\", UI.deleteProject);\r\n      deleteProjectButton.classList.add(\"dltButton\");\r\n      const deleteProjectIcon = document.createElement(\"i\");\r\n      deleteProjectIcon.className = \"fa-solid fa-trash\";\r\n      deleteProjectButton.appendChild(deleteProjectIcon);\r\n      newProject.append(deleteProjectButton);\r\n\r\n      // CREATE ADD TASK TO PROJECT BUTTON\r\n      const addTaskToProject = document.createElement(\"button\");\r\n      addTaskToProject.addEventListener(\"click\", UI.addTask);\r\n      addTaskToProject.classList.add(\"addTaskButton\");\r\n      const addTaskIcon = document.createElement(\"i\");\r\n      addTaskIcon.className = \"fa-solid fa-plus\";\r\n      addTaskToProject.appendChild(addTaskIcon);\r\n      newProject.append(addTaskToProject);\r\n      const projectDisplay = document.querySelector(\".navbar\");\r\n      projectDisplay.appendChild(newProjectDiv);\r\n    }\r\n  };\r\n\r\n  // DELETE PROJECT\r\n  static deleteProject = (e) => {\r\n    e.target.parentElement.remove();\r\n    const el = e.target.parentElement.textContent;\r\n    _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.deleteFromLibrary(el);\r\n    display.innerText = \"\";\r\n    document.querySelector(\".main-section\").firstChild.innerText = \"\";\r\n    UI.showAlert(`Project ${el} deleted from library`, \"success\");\r\n  };\r\n\r\n  // ADD TASK TO PROJECT\r\n  static addTask = (e) => {\r\n    const selectedProject = _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.store.filter(\r\n      (project) => project.name === e.target.parentElement.textContent\r\n    );\r\n    selectedProjectName = selectedProject[0].name;\r\n\r\n    // CLEAR DISPLAY\r\n    display.innerText = \"\";\r\n    // CREATE A FORM TO COLLECT TASK DETAILS\r\n    // CREATE FORM DIV\r\n    const formDiv = document.createElement(\"div\");\r\n    formDiv.classList.add(\"taskFormDiv\");\r\n\r\n    // CREATE FORM ELEMENT\r\n    const form = document.createElement(\"form\");\r\n    form.classList.add(\"taskForm\");\r\n    formDiv.appendChild(form);\r\n\r\n    // CLOSE TASK FORM\r\n    const closeButton = document.createElement(\"button\");\r\n    closeButton.classList.add(\"closeButton\");\r\n    closeButton.innerText = \"X\";\r\n    closeButton.addEventListener(\"click\", () => {\r\n      display.removeChild(formDiv);\r\n    });\r\n    form.appendChild(closeButton);\r\n\r\n    // CREATE INPUT ELEMENT FOR TASK NAME\r\n    const taskName = document.createElement(\"input\");\r\n    taskName.classList.add(\"taskName\");\r\n    taskName.setAttribute(\"type\", \"text\");\r\n    taskName.setAttribute(\"name\", \"taskName\");\r\n    taskName.setAttribute(\"placeholder\", \"Task name\");\r\n    form.appendChild(taskName);\r\n\r\n    // CREATE TEXTAREA ELEMENT FOR TASK DESCRIPTION\r\n    const taskDescription = document.createElement(\"textarea\");\r\n    taskDescription.classList.add(\"taskDescription\");\r\n    taskDescription.setAttribute(\"rows\", \"10\");\r\n    taskDescription.setAttribute(\"placeholder\", \"Description\");\r\n    form.appendChild(taskDescription);\r\n\r\n    // CREATE DUE-DATE INPUT\r\n    const dateDiv = document.createElement(\"div\");\r\n    dateDiv.classList.add(\"dateDiv\");\r\n    const dateLabel = document.createElement(\"label\");\r\n    dateLabel.classList.add(\"dateLabel\");\r\n    dateLabel.innerText = \"Due date\";\r\n    const date = document.createElement(\"input\");\r\n    date.classList.add(\"dueDate\");\r\n    date.setAttribute(\"type\", \"date\");\r\n    dateDiv.appendChild(dateLabel);\r\n    dateDiv.appendChild(date);\r\n    form.appendChild(dateDiv);\r\n\r\n    // CREATE ADD BUTTON\r\n    const buttonDiv = document.createElement(\"div\");\r\n    buttonDiv.classList.add(\"buttonDiv\");\r\n    const button = document.createElement(\"button\");\r\n    button.className = \"submitTask addTaskButton fa-solid fa-plus\";\r\n    button.setAttribute(\"type\", \"button\");\r\n    button.addEventListener(\"click\", UI.createTask);\r\n    buttonDiv.appendChild(button);\r\n    form.appendChild(buttonDiv);\r\n\r\n    // // DISPLAY FORM\r\n    display.appendChild(formDiv);\r\n  };\r\n\r\n  // DISPLAY PROJECT CONTENTS/TASKS WHEN CLICKED\r\n  static projectShow = (e) => {\r\n    mainSection.textContent = \"\";\r\n    mainSection.appendChild(display);\r\n    // CLEAR DISPLAY\r\n    display.innerText = \"\";\r\n    display.style.display = \"flex\";\r\n    display.style.gap = \"1rem\";\r\n    display.style.flexFlow = \"column nowrap\";\r\n    display.style.overflow = \"auto\";\r\n    display.style.width = \"inherit\";\r\n    display.style.alignItems = \"center\";\r\n\r\n    // PROJECT SELECTED THROUGH CLICK EVENT\r\n    const selectedProject = _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.store.filter(\r\n      (project) => project.name === e.target.textContent\r\n    );\r\n    selectedProjectName = selectedProject[0].name;\r\n\r\n    // TASKS ON SELECTED PROJECT\r\n    const tasksArr = selectedProject[0].tasks;\r\n    console.log(tasksArr);\r\n\r\n    // CREATE H2 THAT DISPLAYS SELECTED PROJECT NAME\r\n    const projectNameDisplay = document.createElement(\"h2\");\r\n    projectNameDisplay.classList.add(\"projectNameDisplay\");\r\n    projectNameDisplay.innerHTML = `Tasks for project <span>${selectedProjectName}</span>`;\r\n    mainSection.prepend(projectNameDisplay);\r\n\r\n    // CREATE AND DISPLAY EACH TASK ON SCREEN\r\n    tasksArr.forEach((task) => {\r\n      // CREATE A CARD TO DISPLAY EACH PROJECT TASK\r\n      const projectCard = document.createElement(\"div\");\r\n      projectCard.classList.add(\"projectCard\");\r\n      const taskName = document.createElement(\"h2\");\r\n      taskName.classList.add(\"projectCardName\");\r\n      const taskDescription = document.createElement(\"p\");\r\n      taskDescription.classList.add(\"projectCardDescription\");\r\n      const dueDate = document.createElement(\"p\");\r\n      dueDate.classList.add(\"projectCardDate\");\r\n\r\n      //CREATE INTERFACE FOR PROJECT CARD\r\n      const buttonsDiv = document.createElement(\"div\");\r\n      buttonsDiv.classList.add(\"buttonsDiv\");\r\n      const editButton = document.createElement(\"button\");\r\n      editButton.classList.add(\"editButton\");\r\n      editButton.innerText = \"✍️\";\r\n      editButton.addEventListener(\"click\", () => {\r\n        //\r\n      });\r\n      const checkMark = document.createElement(\"button\");\r\n      checkMark.classList.add(\"completedButton\");\r\n      checkMark.innerText = \"✅\";\r\n      checkMark.addEventListener(\"click\", () => {\r\n        if (\r\n          checkMark.parentElement.parentElement.classList.contains(\"completed\")\r\n        ) {\r\n          checkMark.parentElement.parentElement.classList.remove(\"completed\");\r\n          UI.showAlert(`${task.name} removed from completed list`);\r\n          completedList.splice(completedList.indexOf(task), 1);\r\n          console.log(completedList);\r\n        } else {\r\n          checkMark.parentElement.parentElement.classList.add(\"completed\");\r\n          if (completedList.includes(task)) {\r\n            UI.showAlert(`${task.name} already added to completed list`, \"err\");\r\n            return;\r\n          } else {\r\n            UI.showAlert(`${task.name} added to completed list`);\r\n            completedList.push(task);\r\n          }\r\n        }\r\n      });\r\n      const deleteButton = document.createElement(\"button\");\r\n      deleteButton.innerText = \"🗑️\";\r\n      deleteButton.classList.add(\"trashButton\");\r\n      deleteButton.addEventListener(\"click\", (e) => {\r\n        const taskEl = deleteButton.parentElement.parentElement;\r\n        display.removeChild(taskEl);\r\n        UI.showAlert(\r\n          `${task.name} deleted from ${selectedProject[0].name}`,\r\n          \"succ\"\r\n        );\r\n        selectedProject[0].deleteTask(task.name);\r\n        let taskArr = JSON.parse(localStorage.getItem(\"projects\")).filter(\r\n          (project) => project.name === selectedProject[0].name\r\n        );\r\n        let taskToDelete = taskArr.filter((task) => task.name === task.name);\r\n        localStorage.removeItem(taskToDelete);\r\n        console.log(selectedProject[0].tasks);\r\n      });\r\n\r\n      projectCard.appendChild(taskName);\r\n      projectCard.appendChild(taskDescription);\r\n      projectCard.appendChild(dueDate);\r\n      buttonsDiv.appendChild(editButton);\r\n      buttonsDiv.appendChild(checkMark);\r\n      buttonsDiv.appendChild(deleteButton);\r\n      projectCard.appendChild(buttonsDiv);\r\n\r\n      // SET TASK DETAILS\r\n      taskName.innerText = `Task : ${task.name}`;\r\n      taskDescription.innerText = `Description : ${task.description}`;\r\n      dueDate.innerText = `Due Date : ${task.date}`;\r\n\r\n      display.appendChild(projectCard);\r\n    });\r\n  };\r\n\r\n  // CREATE A TASK\r\n  static createTask = () => {\r\n    // COLLECT TASK INFO\r\n    const taskName = document.querySelector(\".taskName\").value;\r\n    const taskDescription = document.querySelector(\".taskDescription\").value;\r\n    const date = document.querySelector(\".dueDate\").value;\r\n    const myId = selectedProjectName;\r\n\r\n    if (\r\n      taskName.length <= 0 ||\r\n      taskDescription.length <= 0 ||\r\n      date.length <= 0\r\n    ) {\r\n      UI.showAlert(\"Please fill all fields\", \"err\");\r\n    } else {\r\n      // CREATE TASK OBJECT\r\n      const newTaskObject = new _tasks_js__WEBPACK_IMPORTED_MODULE_2__.Tasks(myId, taskName, taskDescription, date);\r\n      console.log(newTaskObject);\r\n\r\n      // ADD TASK TO CORESSPONDING PROJECT\r\n      const myProject = _projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.findProject(myId)[0].tasks;\r\n      myProject.push(newTaskObject);\r\n      localStorage.setItem(\"projects\", JSON.stringify(_projectLibrary_js__WEBPACK_IMPORTED_MODULE_1__.ProjectStore.store));\r\n\r\n      UI.showAlert(\r\n        `Task ${taskName} added to ${selectedProjectName}`,\r\n        \"success\"\r\n      );\r\n\r\n      // REMOVE FORM FROM DISPLAY\r\n      setTimeout(() => {\r\n        display.innerText = \"\";\r\n      }, 2000);\r\n    }\r\n  };\r\n\r\n  // SHOW ALERTS\r\n  static showAlert = (message, status) => {\r\n    // CREATE ALERT DIV\r\n    const alertDiv = document.createElement(\"div\");\r\n    alertDiv.classList.add(\"alertDiv\");\r\n    const alertMsg = document.createTextNode(message);\r\n    // alertMsg.classList.add('alertMsg')\r\n    alertDiv.appendChild(alertMsg);\r\n\r\n    if (status === \"err\") {\r\n      alertDiv.style.backgroundColor = \"#f03f3f\";\r\n      alertDiv.style.color = \"white\";\r\n    } else {\r\n      alertDiv.style.backgroundColor = \"#80e380\";\r\n    }\r\n\r\n    mainSection.insertBefore(alertDiv, display);\r\n\r\n    setTimeout(() => {\r\n      mainSection.removeChild(alertDiv);\r\n    }, 1500);\r\n  };\r\n}\r\n\r\n// EVENT LISTENERS\r\naddNewProject.addEventListener(\"click\", UI.addProject);\r\nregisterButton.addEventListener(\"click\", UI.createProject);\r\nfilter.addEventListener(\"change\", UI.filter);\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/UI.js?");

/***/ }),

/***/ "./src/js/modules/project.js":
/*!***********************************!*\
  !*** ./src/js/modules/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _projectLibrary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectLibrary.js */ \"./src/js/modules/projectLibrary.js\");\n\r\n\r\nclass Project {\r\n  constructor(name, myId) {\r\n    this.name = name;\r\n    this.myId = myId;\r\n    this.tasks = [];\r\n  }\r\n\r\n  setName(name) {\r\n    this.name = name;\r\n  }\r\n\r\n  getName() {\r\n    return this.name;\r\n  }\r\n\r\n  setId(myId) {\r\n    this.myId = myId;\r\n  }\r\n\r\n  getId() {\r\n    return this.myId;\r\n  }\r\n\r\n  setTasks(task) {\r\n    this.tasks.push(task);\r\n  }\r\n\r\n  getTasks() {\r\n    return this.tasks;\r\n  }\r\n\r\n  getTask(taskName) {\r\n    return this.tasks.find((task) => task.getName() === taskName);\r\n  }\r\n\r\n  addTask(newTask) {\r\n    if (this.tasks.find((task) => task.getName() === newTask.name))\r\n      return this.tasks.push(newTask);\r\n  }\r\n\r\n  deleteTask(taskName) {\r\n    let index = this.tasks.indexOf(taskName);\r\n    this.tasks.splice(index, 1);\r\n  }\r\n}\r\nProject.prototype.id = \"\";\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/project.js?");

/***/ }),

/***/ "./src/js/modules/projectLibrary.js":
/*!******************************************!*\
  !*** ./src/js/modules/projectLibrary.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectStore\": () => (/* binding */ ProjectStore)\n/* harmony export */ });\nclass ProjectStore {\r\n  // ADD PROJECTS TO LIBRARY\r\n  static addToLibrary = (newProject) => {\r\n    this.store.push(newProject);\r\n  };\r\n\r\n  static deleteFromLibrary = (projectName) => {\r\n    const index = this.store.indexOf(projectName);\r\n    this.store.splice(index, 1);\r\n    localStorage.removeItem(projectName);\r\n  };\r\n\r\n  static findProject = (myId) => {\r\n    return this.store.filter((project) => project.myId === myId);\r\n  };\r\n}\r\n\r\n// AN ARRAY TO STORE PROJECTS\r\nProjectStore.store = JSON.parse(localStorage.getItem(\"projects\")) || [];\r\nProjectStore.completed = [];\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/projectLibrary.js?");

/***/ }),

/***/ "./src/js/modules/tasks.js":
/*!*********************************!*\
  !*** ./src/js/modules/tasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tasks\": () => (/* binding */ Tasks)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/modules/project.js\");\n\r\n\r\nclass Tasks{\r\n    constructor(myId, name, description, dueDate){\r\n        this.myId = myId\r\n        this.name = name\r\n        this.description = description\r\n        this.date = dueDate\r\n    }\r\n\r\n    setId(myId){\r\n        this.myId = myId\r\n    }\r\n\r\n    getId(){\r\n        return this.myId\r\n    }\r\n\r\n    setName(name){\r\n        this.name = name\r\n    }\r\n\r\n    getName(){\r\n        return this.name\r\n    }\r\n\r\n    setDescription(description){\r\n        this.description = description\r\n    }\r\n\r\n    getDescription(){\r\n        return this.description\r\n    }\r\n\r\n    setDate(dueDate){\r\n        this.date = dueDate\r\n    }\r\n\r\n    getDate(){\r\n        return this.date\r\n    }\r\n\r\n    setPriority(priority){\r\n        this.priority = priority\r\n    }\r\n\r\n    getPriority(){\r\n        return this.priority\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/tasks.js?");

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