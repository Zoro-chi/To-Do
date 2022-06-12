import { Project } from "./project.js";
import { ProjectStore } from "./projectLibrary.js";
import { Tasks } from "./tasks.js";
import { isWithinInterval, add, sub, toDate, format } from "date-fns";

// DOM SELECTORS
const projectNameDiv = document.querySelector(".project-name");
const addNewProject = document.querySelector(".addNewProject");
const display = document.querySelector(".display");
const registerButton = document.querySelector(".project-button");
const mainSection = document.querySelector(".main-section");
const navbar = document.querySelector(".navbar");
const filter = document.querySelector("#filter");

let newProjectName;
const completedList = ProjectStore.completed;
let selectedProjectName;

class UI {
  // DISPLAY SAVED PROJECTS ON LOAD
  static loadSavedProjects = () => {
    const savedProjects = ProjectStore.store;
    document.addEventListener("DOMContentLoaded", () => {
      savedProjects.forEach((project) => {
        let nameInput = document.querySelector("#project-name");
        const newProjectDiv = document.createElement("div");
        newProjectDiv.classList.add("newProjectDiv");
        const newProject = document.createElement("li");
        newProject.classList.add("createdLi");
        const newProjectNameSpan = document.createElement("span");
        newProjectNameSpan.classList.add("projectNameSpan");
        newProjectNameSpan.addEventListener("click", UI.projectShow);
        newProjectNameSpan.innerText = project.name;
        nameInput.value = "";
        newProject.appendChild(newProjectNameSpan);
        newProjectDiv.appendChild(newProject);

        // CREATE A DELETE PROJECT BUTTON
        const deleteProjectButton = document.createElement("button");
        deleteProjectButton.addEventListener("click", UI.deleteProject);
        deleteProjectButton.classList.add("dltButton");
        const deleteProjectIcon = document.createElement("i");
        deleteProjectIcon.className = "fa-solid fa-trash";
        deleteProjectButton.appendChild(deleteProjectIcon);
        newProject.append(deleteProjectButton);

        // CREATE ADD TASK TO PROJECT BUTTON
        const addTaskToProject = document.createElement("button");
        addTaskToProject.addEventListener("click", UI.addTask);
        addTaskToProject.classList.add("addTaskButton");
        const addTaskIcon = document.createElement("i");
        addTaskIcon.className = "fa-solid fa-plus";
        addTaskToProject.appendChild(addTaskIcon);
        newProject.append(addTaskToProject);
        const projectDisplay = document.querySelector(".navbar");
        projectDisplay.appendChild(newProjectDiv);
      });
    });
  };

  // DISPLAY FILTER OPTION
  static filter = () => {
    let selectedFilter = filter.options[filter.selectedIndex].value;
    if (selectedFilter === "none") {
      return;
    } else if (selectedFilter === "completed") {
      const deleteDiv = document.createElement("div");
      const deleteAll = document.createElement("button");
      deleteAll.classList.add("deleteAllCompleted");
      deleteAll.innerText = "Delete all";
      deleteDiv.addEventListener("click", () => {
        completedList.forEach((task) => {
          let id = task.myId;
          let project = ProjectStore.store.find(
            (project) => project.name === id
          );
          let index = project.tasks.findIndex((tsk) => tsk.name === task.name);
          console.log(project.tasks.splice(index, 1));
        });
        localStorage.setItem("projects", JSON.stringify(ProjectStore.store));
        completedList.splice(0, completedList.length);
        localStorage.setItem("completed", JSON.stringify(completedList));
        display.textContent = "";
      });

      mainSection.firstChild.innerText = "";
      display.innerText = "";
      display.style.display = "flex";
      display.style.flexFlow = "column";
      display.style.gap = "1rem";
      // DISPLAY COMPLETED PROJECTS
      completedList.forEach((task) => {
        // CREATE A CARD FOR EACH TASK
        const projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        projectCard.style.backgroundColor = "lightgreen";
        const taskName = document.createElement("h2");
        taskName.classList.add("projectCardName");
        const taskDescription = document.createElement("p");
        taskDescription.classList.add("projectCardDescription");
        const dueDate = document.createElement("p");
        dueDate.classList.add("projectCardDate");

        // SET TASK DETAILS
        taskName.innerText = `Task : ${task.name}`;
        taskDescription.innerText = `Description : ${task.description}`;
        dueDate.innerText = `Due Date : ${task.date}`;

        projectCard.appendChild(taskName);
        projectCard.appendChild(taskDescription);
        projectCard.appendChild(dueDate);
        deleteDiv.appendChild(deleteAll);
        display.prepend(deleteDiv);
        display.appendChild(projectCard);
      });
    } else if (selectedFilter === "all") {
      mainSection.firstChild.innerText = "";
      display.innerText = "";
      display.style.display = "flex";
      display.style.flexFlow = "column";
      display.style.gap = "1rem";

      let tasks = [];
      ProjectStore.store.forEach((proj) => tasks.push(proj.tasks));
      tasks = tasks.flat();

      tasks.forEach((task) => {
        // CREATE A CARD FOR EACH TASK
        const projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        const taskName = document.createElement("h2");
        taskName.classList.add("projectCardName");
        const taskDescription = document.createElement("p");
        taskDescription.classList.add("projectCardDescription");
        const dueDate = document.createElement("p");
        dueDate.classList.add("projectCardDate");

        // SET TASK DETAILS
        taskName.innerText = `Task : ${task.name}`;
        taskDescription.innerText = `Description : ${task.description}`;
        dueDate.innerText = `Due Date : ${task.date}`;

        projectCard.appendChild(taskName);
        projectCard.appendChild(taskDescription);
        projectCard.appendChild(dueDate);
        display.appendChild(projectCard);
      });
    } else if (selectedFilter === "today") {
      mainSection.firstChild.innerText = "";
      display.innerText = "";
      display.style.display = "flex";
      display.style.flexFlow = "column";
      display.style.gap = "1rem";

      //FORMAT DATE AND CHECK FOR TODAY'S TASKS
      let todayDate = format(new Date(), "yyyy/MM/dd");
      let todayArr = [];
      let tasks = [];
      ProjectStore.store.forEach((proj) => tasks.push(proj.tasks));
      tasks = tasks.flat();
      tasks.forEach((task) => {
        task.date = format(new Date(task.date), "yyyy/MM/dd");

        if (task.date === todayDate) {
          todayArr.push(task);
        }
      });
      todayArr.forEach((task) => {
        // CREATE A CARD FOR EACH TASK
        const projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        projectCard.style.backgroundColor = "firebrick";
        const taskName = document.createElement("h2");
        taskName.classList.add("projectCardName");
        const taskDescription = document.createElement("p");
        taskDescription.classList.add("projectCardDescription");
        const dueDate = document.createElement("p");
        dueDate.classList.add("projectCardDate");

        // SET TASK DETAILS
        taskName.innerText = `Task : ${task.name}`;
        taskDescription.innerText = `Description : ${task.description}`;
        dueDate.innerText = `Due Date : ${task.date}`;

        projectCard.appendChild(taskName);
        projectCard.appendChild(taskDescription);
        projectCard.appendChild(dueDate);
        display.appendChild(projectCard);
      });
    } else if (selectedFilter === "thisWeek") {
      mainSection.firstChild.innerText = "";
      display.innerText = "";
      display.style.display = "flex";
      display.style.flexFlow = "column";
      display.style.gap = "1rem";

      let thisWeek = [];
      let tasks = [];
      const startWeek = toDate(sub(new Date(), { days: 1 }));
      const endWeek = toDate(add(new Date(startWeek), { days: 7 }));

      console.log(startWeek);
      console.log(endWeek);

      ProjectStore.store.forEach((proj) => tasks.push(proj.tasks));
      tasks = tasks.flat();
      tasks.forEach((task) => {
        task.date = new Date(task.date.split("-").join(",")).toDateString();
        if (
          isWithinInterval(toDate(new Date(task.date)), {
            start: startWeek,
            end: endWeek,
          })
        ) {
          thisWeek.push(task);
        }
      });
      thisWeek.forEach((task) => {
        // CREATE A CARD FOR EACH TASK
        const projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        projectCard.style.backgroundColor = "navajowhite";
        const taskName = document.createElement("h2");
        taskName.classList.add("projectCardName");
        const taskDescription = document.createElement("p");
        taskDescription.classList.add("projectCardDescription");
        const dueDate = document.createElement("p");
        dueDate.classList.add("projectCardDate");

        // SET TASK DETAILS
        taskName.innerText = `Task : ${task.name}`;
        taskDescription.innerText = `Description : ${task.description}`;
        dueDate.innerText = `Due Date : ${task.date}`;

        projectCard.appendChild(taskName);
        projectCard.appendChild(taskDescription);
        projectCard.appendChild(dueDate);
        display.appendChild(projectCard);
      });
    }
  };

  // ADD PROJECT TO PROJECT LIST
  static addProject = () => {
    // SELECT PROJECT FORM INPUT & ADD 'SHOW' CLASS (VISIBILITY)
    projectNameDiv.classList.toggle("show");
  };
  // CREATE NEW PROJECT AND ADD TO PROJECT LIBRARY AND UI
  static createProject = () => {
    // HIDE INPUT FORM
    projectNameDiv.classList.toggle("show");

    newProjectName = document.querySelector("#project-name").value;
    if (newProjectName.length <= 0) {
      UI.showAlert("Please enter a project name", "err");
    } else {
      let newProjectObject = new Project(newProjectName, newProjectName);
      ProjectStore.addToLibrary(newProjectObject);
      UI.createLi();
    }
  };

  // CREATE EACH PROJECT LI ELEMENT
  static createLi = () => {
    let nameInput = document.querySelector("#project-name");
    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("newProjectDiv");
    const newProject = document.createElement("li");
    newProject.classList.add("createdLi");
    const newProjectNameSpan = document.createElement("span");
    newProjectNameSpan.classList.add("projectNameSpan");
    newProjectNameSpan.addEventListener("click", UI.projectShow);
    newProjectNameSpan.innerText = newProjectName;
    nameInput.value = "";
    newProject.appendChild(newProjectNameSpan);
    newProjectDiv.appendChild(newProject);

    // CREATE A DELETE PROJECT BUTTON
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.addEventListener("click", UI.deleteProject);
    deleteProjectButton.classList.add("dltButton");
    const deleteProjectIcon = document.createElement("i");
    deleteProjectIcon.className = "fa-solid fa-trash";
    deleteProjectButton.appendChild(deleteProjectIcon);
    newProject.append(deleteProjectButton);

    // CREATE ADD TASK TO PROJECT BUTTON
    const addTaskToProject = document.createElement("button");
    addTaskToProject.addEventListener("click", UI.addTask);
    addTaskToProject.classList.add("addTaskButton");
    const addTaskIcon = document.createElement("i");
    addTaskIcon.className = "fa-solid fa-plus";
    addTaskToProject.appendChild(addTaskIcon);
    newProject.append(addTaskToProject);
    const projectDisplay = document.querySelector(".navbar");
    projectDisplay.appendChild(newProjectDiv);
  };

  // DELETE PROJECT
  static deleteProject = (e) => {
    e.target.parentElement.remove();
    const el = e.target.parentElement.textContent;
    ProjectStore.deleteFromLibrary(el);
    display.innerText = "";
    document.querySelector(".main-section").firstChild.innerText = "";
    UI.showAlert(`Project ${el} deleted from library`, "success");
  };

  // ADD TASK TO PROJECT
  static addTask = (e) => {
    const selectedProject = ProjectStore.store.filter(
      (project) => project.name === e.target.parentElement.textContent
    );
    selectedProjectName = selectedProject[0].name;

    // CLEAR DISPLAY
    display.innerText = "";
    // CREATE A FORM TO COLLECT TASK DETAILS
    // CREATE FORM DIV
    const formDiv = document.createElement("div");
    formDiv.classList.add("taskFormDiv");

    // CREATE FORM ELEMENT
    const form = document.createElement("form");
    form.classList.add("taskForm");
    formDiv.appendChild(form);

    // CLOSE TASK FORM
    const closeButton = document.createElement("button");
    closeButton.classList.add("closeButton");
    closeButton.innerText = "X";
    closeButton.addEventListener("click", () => {
      display.removeChild(formDiv);
    });
    form.appendChild(closeButton);

    // CREATE INPUT ELEMENT FOR TASK NAME
    const taskName = document.createElement("input");
    taskName.classList.add("taskName");
    taskName.setAttribute("type", "text");
    taskName.setAttribute("name", "taskName");
    taskName.setAttribute("placeholder", "Task name");
    form.appendChild(taskName);

    // CREATE TEXTAREA ELEMENT FOR TASK DESCRIPTION
    const taskDescription = document.createElement("textarea");
    taskDescription.classList.add("taskDescription");
    taskDescription.setAttribute("rows", "10");
    taskDescription.setAttribute("placeholder", "Description");
    form.appendChild(taskDescription);

    // CREATE DUE-DATE INPUT
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("dateDiv");
    const dateLabel = document.createElement("label");
    dateLabel.classList.add("dateLabel");
    dateLabel.innerText = "Due date";
    const date = document.createElement("input");
    date.classList.add("dueDate");
    date.setAttribute("type", "date");
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(date);
    form.appendChild(dateDiv);

    // CREATE ADD BUTTON
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttonDiv");
    const button = document.createElement("button");
    button.className = "submitTask addTaskButton fa-solid fa-plus";
    button.setAttribute("type", "button");
    button.addEventListener("click", UI.createTask);
    buttonDiv.appendChild(button);
    form.appendChild(buttonDiv);

    // // DISPLAY FORM
    display.appendChild(formDiv);
  };

  // DISPLAY PROJECT CONTENTS/TASKS WHEN CLICKED
  static projectShow = (e) => {
    mainSection.textContent = "";
    mainSection.appendChild(display);
    // CLEAR DISPLAY
    display.innerText = "";
    display.style.display = "flex";
    display.style.gap = "1rem";
    display.style.flexFlow = "column nowrap";
    display.style.overflow = "auto";
    display.style.width = "inherit";
    display.style.alignItems = "center";

    // PROJECT SELECTED THROUGH CLICK EVENT
    const selectedProject = ProjectStore.store.filter(
      (project) => project.name === e.target.textContent
    );
    selectedProjectName = selectedProject[0].name;

    // TASKS ON SELECTED PROJECT
    const tasksArr = selectedProject[0].tasks;

    // CREATE H2 THAT DISPLAYS SELECTED PROJECT NAME
    const projectNameDisplay = document.createElement("h2");
    projectNameDisplay.classList.add("projectNameDisplay");
    projectNameDisplay.innerHTML = `Tasks for project <span>${selectedProjectName}</span>`;
    mainSection.prepend(projectNameDisplay);

    // CREATE AND DISPLAY EACH TASK ON SCREEN
    tasksArr.forEach((task) => {
      // CREATE A CARD TO DISPLAY EACH PROJECT TASK
      const projectCard = document.createElement("div");
      projectCard.classList.add("projectCard");
      const taskName = document.createElement("h2");
      taskName.classList.add("projectCardName");
      const taskDescription = document.createElement("p");
      taskDescription.classList.add("projectCardDescription");
      const dueDate = document.createElement("p");
      dueDate.classList.add("projectCardDate");

      //CREATE INTERFACE FOR PROJECT CARD
      const buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("buttonsDiv");
      const checkMark = document.createElement("button");
      checkMark.classList.add("completedButton");
      checkMark.innerText = "✅";
      checkMark.addEventListener("click", () => {
        // CHECK IF TASK HAS COMPLETED CLASS || ADD COMPLETED CLASS TO TASK
        if (task.completed !== "true") {
          task.completed = "true";
          projectCard.style.backgroundColor = "lightgreen";
          UI.showAlert(`${task.name} added to completed list`);
          completedList.push(task);
          localStorage.setItem("completed", JSON.stringify(completedList));
          localStorage.setItem("projects", JSON.stringify(ProjectStore.store));
        } else {
          task.completed = "false";
          projectCard.style.backgroundColor = "antiquewhite";
          UI.showAlert(`${task.name} removed from completed list`);
          completedList.splice(completedList.indexOf(task), 1);
          localStorage.setItem("completed", JSON.stringify(completedList));
          localStorage.setItem("projects", JSON.stringify(ProjectStore.store));
        }
      });
      if (task.completed === "true") {
        projectCard.style.backgroundColor = "lightgreen";
      }

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "🗑️";
      deleteButton.classList.add("trashButton");
      deleteButton.addEventListener("click", (e) => {
        const taskEl = deleteButton.parentElement.parentElement;
        display.removeChild(taskEl);
        UI.showAlert(
          `${task.name} deleted from ${selectedProject[0].name}`,
          "succ"
        );
        let project = ProjectStore.store.find(
          (proj) => proj.myId === task.myId
        );
        let index = project.tasks.findIndex((obj) => obj.name === task.name);
        if (index > -1) {
          project.tasks.splice(index, 1);
          localStorage.setItem("projects", JSON.stringify(ProjectStore.store));
        }
      });

      projectCard.appendChild(taskName);
      projectCard.appendChild(taskDescription);
      projectCard.appendChild(dueDate);
      buttonsDiv.appendChild(checkMark);
      buttonsDiv.appendChild(deleteButton);
      projectCard.appendChild(buttonsDiv);

      // SET TASK DETAILS
      taskName.innerText = `Task : ${task.name}`;
      taskDescription.innerText = `Description : ${task.description}`;
      dueDate.innerText = `Due Date : ${task.date}`;

      display.appendChild(projectCard);
    });
  };

  // CREATE A TASK
  static createTask = () => {
    // COLLECT TASK INFO
    const taskName = document.querySelector(".taskName").value;
    const taskDescription = document.querySelector(".taskDescription").value;
    const date = document.querySelector(".dueDate").value;
    const myId = selectedProjectName;

    if (
      taskName.length <= 0 ||
      taskDescription.length <= 0 ||
      date.length <= 0
    ) {
      UI.showAlert("Please fill all fields", "err");
    } else {
      // CREATE TASK OBJECT
      const newTaskObject = new Tasks(myId, taskName, taskDescription, date);

      // ADD TASK TO CORESSPONDING PROJECT
      const myProject = ProjectStore.findProject(myId)[0].tasks;
      myProject.push(newTaskObject);
      localStorage.setItem("projects", JSON.stringify(ProjectStore.store));

      UI.showAlert(
        `Task ${taskName} added to ${selectedProjectName}`,
        "success"
      );

      // REMOVE FORM FROM DISPLAY
      setTimeout(() => {
        display.innerText = "";
      }, 2000);
    }
  };

  // SHOW ALERTS
  static showAlert = (message, status) => {
    // CREATE ALERT DIV
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alertDiv");
    const alertMsg = document.createTextNode(message);
    alertDiv.appendChild(alertMsg);

    if (status === "err") {
      alertDiv.style.backgroundColor = "#f03f3f";
      alertDiv.style.color = "white";
    } else {
      alertDiv.style.backgroundColor = "#80e380";
    }

    mainSection.insertBefore(alertDiv, display);

    setTimeout(() => {
      mainSection.removeChild(alertDiv);
    }, 1500);
  };
}

UI.loadSavedProjects();

// EVENT LISTENERS
addNewProject.addEventListener("click", UI.addProject);
registerButton.addEventListener("click", UI.createProject);
filter.addEventListener("change", UI.filter);

export { UI };
