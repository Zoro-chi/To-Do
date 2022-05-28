import { Project } from "./project.js";
import { ProjectStore } from "./projectLibrary.js";
import { Tasks } from "./tasks.js";

// DOM SELECTORS
const projectNameDiv = document.querySelector(".project-name");
const addNewProject = document.querySelector(".addNewProject");
const display = document.querySelector(".display");
const registerButton = document.querySelector(".project-button");
const mainSection = document.querySelector(".main-section");
const navbar = document.querySelector(".navbar");
const filter = document.querySelector("#filter");

let newProjectName;
const completedList = [];

class UI {
  // DISPLAY FILTER OPTION
  static filter = () => {
    let selectedFilter = filter.options[filter.selectedIndex].value;
    if (selectedFilter === "none") {
      console.log("none");
      return;
    } else if (selectedFilter === "completed") {
      display.innerText = "";
      mainSection.firstChild.innerText = "";
      // DISPLAY COMPLETED PROJECTS
      console.log(completedList);
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
      let nameInput = document.querySelector("#project-name");
      const newProjectObject = new Project(newProjectName, newProjectName);
      console.log(newProjectObject);
      ProjectStore.addToLibrary(newProjectObject);

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
    }
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
  static addTask = () => {
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
    let selectedProjectName = selectedProject[0].name;

    // TASKS ON SELECTED PROJECT
    const tasksArr = selectedProject[0].tasks;
    console.log(tasksArr);

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
      const editButton = document.createElement("button");
      editButton.classList.add("editButton");
      editButton.innerText = "✍️";
      editButton.style.backgroundColor = "darkgrey";
      editButton.addEventListener("click", () => {
        //
      });
      const checkMark = document.createElement("button");
      checkMark.innerText = "✅";
      checkMark.style.backgroundColor = "darkgrey";
      checkMark.addEventListener("click", () => {
        if (
          checkMark.parentElement.parentElement.classList.contains("completed")
        ) {
          checkMark.parentElement.parentElement.classList.remove("completed");
          UI.showAlert(`${task.name} removed from completed list`);
          completedList.splice(completedList.indexOf(task), 1);
          console.log(completedList);
        } else {
          checkMark.parentElement.parentElement.classList.add("completed");
          if (completedList.includes(task)) {
            UI.showAlert(`${task.name} already added to completed list`, "err");
            return;
          } else {
            UI.showAlert(`${task.name} added to completed list`);
            completedList.push(task);
          }
          console.log(completedList);
        }
      });
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "🗑️";
      deleteButton.style.backgroundColor = "darkgrey";
      deleteButton.addEventListener("click", (e) => {
        const taskEl = deleteButton.parentElement.parentElement;
        display.removeChild(taskEl);
        UI.showAlert(
          `${task.name} deleted from ${selectedProject[0].name}`,
          "succ"
        );
        selectedProject[0].deleteTask(task.name);
        console.log(selectedProject[0].tasks);
      });

      projectCard.appendChild(taskName);
      projectCard.appendChild(taskDescription);
      projectCard.appendChild(dueDate);
      buttonsDiv.appendChild(editButton);
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
    const myId = newProjectName;

    if (
      taskName.length <= 0 ||
      taskDescription.length <= 0 ||
      date.length <= 0
    ) {
      UI.showAlert("Please fill all fields", "err");
    } else {
      // CREATE TASK OBJECT
      const newTaskObject = new Tasks(myId, taskName, taskDescription, date);
      console.log(newTaskObject);

      // ADD TASK TO CORESSPONDING PROJECT
      const myProject = ProjectStore.findProject(myId)[0].tasks;
      myProject.push(newTaskObject);
      UI.showAlert(`Task ${taskName} added to ${newProjectName}`, "success");

      // REMOVE FORM FROM DISPLAY
      setTimeout(() => {
        display.innerText = "";
      }, 1500);
    }
  };

  // SHOW ALERTS
  static showAlert = (message, status) => {
    // CREATE ALERT DIV
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alertDiv");
    const alertMsg = document.createTextNode(message);
    // alertMsg.classList.add('alertMsg')
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

// EVENT LISTENERS
addNewProject.addEventListener("click", UI.addProject);
registerButton.addEventListener("click", UI.createProject);
filter.addEventListener("change", UI.filter);

export { UI };
