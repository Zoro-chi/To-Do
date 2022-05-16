import { Projects, Tasks, projectLibrary } from "./index.js"
// SELECTORS
const newProject = document.querySelector('.addNewProject')
const projectForm = document.querySelector('.project-name')
const projectName = document.querySelector('#project-name')
const button = document.querySelector('.project-button')
const navbar = document.querySelector('.navbar')
const display = document.querySelector('.display')
let nodes = document.querySelectorAll('.newItemDiv')

const newProjectItem = () =>{
    // DYNAMICALLY CREATES NEW LI'S = TO-DO'S
    const createdLi = document.createElement('li')
    createdLi.addEventListener('click', addTask)
    const newItem = document.createElement('div')
    newItem.classList.add('newItemDiv')
    const dltButton = document.createElement('button')
    dltButton.classList.add('dltButton')
    const dltIcon = document.createElement('i')
    dltIcon.innerHTML = '<i class="fa-solid fa-trash"></i>'
    dltIcon.classList.add('dltIcon')
    const addTaskButton = document.createElement('button')
    addTaskButton.classList.add('addTaskButton')
    const addTaskIcon = document.createElement('i')
    addTaskIcon.innerHTML = '<i class="fa-solid fa-plus"></i>'
    addTaskIcon.classList.add('addTaskIcon')
    addTaskButton.appendChild(addTaskIcon)
    dltButton.appendChild(dltIcon)
    createdLi.textContent = `${projectName.value}`
    createdLi.classList.add('createdLi')
    newItem.appendChild(createdLi)
    newItem.appendChild(dltButton)
    newItem.appendChild(addTaskButton)
    navbar.appendChild(newItem)

    dltButton.addEventListener('click', dltProject)
    addTaskButton.addEventListener('click', addTask)
    // addTaskButton.addEventListener('click', moveTaskToProjectObj)
}

const dltProject = (e) =>{
    // REMOVES PROJECT ITEM FROM NAVBAR
    navbar.removeChild(e.target.parentNode)
    // REMOVE FROM PROJECT LIBRARY ARRAY
    let nodesArr = Array.from(nodes)
    console.log(nodesArr)
    let selectedProject = nodesArr.indexOf(e.target.parentNode)
    projectLibrary.splice(selectedProject, 1)
}    


const registerButton = () => {
    // HIDES INPUT FORM AFTER COLLECTION
    projectName.classList.remove('show')
    newProjectItem()
    // CREATES A NEW PROJECT OBJECT
    const newProjectObject = new Projects(projectName.value)
    console.log(newProjectObject)
    // ADDS NEW PROJECT OBJECT TO PROJECT LIBRARY
    projectLibrary.push(newProjectObject)
    projectName.innerHTML = ''
    projectForm.classList.toggle('show')
}

const addTask = () =>{
    // CREATE FORM DYNAMICALLY TO COLLECT TASK INFO
    const taskForm = document.createElement('form')
    taskForm.classList.add('task-form')

    // CREATE INPUT FOR TASK NAME
    const taskName = document.createElement('input')
    taskName.classList.add('task-name')
    taskName.setAttribute('placeholder', 'Task name')
    taskName.setAttribute('type', 'text')
    taskName.setAttribute('name', 'task-name')
    taskForm.appendChild(taskName)

    // CREATE TEXTAREA FOR TASK DESCRIPTION
    const taskDescription = document.createElement('textarea')
    taskDescription.classList.add('task-description')
    taskDescription.setAttribute('placeholder', 'Description')
    taskDescription.setAttribute('type', 'text')
    taskDescription.setAttribute('name', 'task-description')
    taskDescription.setAttribute('rows', '10')
    taskForm.appendChild(taskDescription)

    // CREATE INPUT FOR TASK DUE DATE
    const dueDate = document.createElement('input')
    dueDate.classList.add('due-date')
    dueDate.setAttribute('type', 'date')
    dueDate.setAttribute('name', 'due-date')
    taskForm.appendChild(dueDate)

    // CREATE PRIORITY INPUT
    const priorityDiv = document.createElement('div')
    priorityDiv.classList.add('priority-div')
    const priorityLabel = document.createElement('label')
    priorityLabel.innerText = 'Priority'
    priorityLabel.classList.add('priority-label')
    const prioritySelect = document.createElement('select')
    prioritySelect.classList.add('priority-select')
    const optionHigh = document.createElement('option')
    optionHigh.classList.add('high')
    prioritySelect.appendChild(optionHigh)
    const optionMedium = document.createElement('option')
    optionMedium.classList.add('medium')
    prioritySelect.appendChild(optionMedium)
    const optionLow = document.createElement('option')
    optionLow.classList.add('low')
    prioritySelect.appendChild(optionLow)
    priorityDiv.appendChild(priorityLabel)
    priorityDiv.appendChild(prioritySelect)
    taskForm.appendChild(priorityDiv)

    // CREATE AN ADD BUTTON
    const addTaskDiv = document.createElement('div')
    addTaskDiv.classList.add('add-task-div')
    const addTaskImage = document.createElement('img')
    addTaskImage.src = '../src/images/addIcon.png'
    addTaskImage.classList.add('add-task-image')
    addTaskDiv.appendChild(addTaskImage)
    taskForm.appendChild(addTaskDiv)

    // APPEND FORM DIV TO DOM
    display.appendChild(taskForm)
}






export {newProject, projectForm, button, projectName,
        newProjectItem, registerButton, addTask, nodes,
        dltProject}



