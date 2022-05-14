import {newProject, projectForm, projectName, button, navbar} from './dom.js'

class Projects{
    constructor(name){
        this.name = name
        this.tasks = []
    }
    addTask(task){
        this.tasks.push(task)
    }
    removeTask(task){
        
    }
}

class Tasks{
    constructor(name, description, dateDue, priority){
        this.name = name
        this.description = description
        this.dateDue = dateDue
        this.priority = priority
    }
}

let projectLibrary = []

// DYNAMICALLY CREATES NEW LI'S = TO-DO'S
const newProjectItem = () =>{
    const createdLi = document.createElement('li')
    createdLi.addEventListener('click', addTask)
    const newItem = document.createElement('div')
    newItem.classList.add('newItemDiv')
    const dltButton = document.createElement('button')
    dltButton.classList.add('dltButton')
    const dltIcon = document.createElement('i')
    dltIcon.innerHTML = '<i class="fa-solid fa-trash"></i>'
    dltIcon.classList.add('dltIcon')
    dltButton.appendChild(dltIcon)
    createdLi.textContent = `${projectName.value}`
    createdLi.classList.add('createdLi')
    newItem.appendChild(createdLi)
    newItem.appendChild(dltButton)
    navbar.appendChild(newItem)
    
    const dltProject = (e) =>{
        // REMOVES PROJECT ITEM FROM NAVBAR
        navbar.removeChild(newItem)
        // REMOVE FROM PROJECT LIBRARY ARRAY
        let nodes = document.querySelectorAll('.newItemDiv')
        nodes = Array.from(nodes)
        let selectedProject = nodes.indexOf(e.target.parentNode)
        projectLibrary.splice(selectedProject, 1)
    }    
    dltButton.addEventListener('click', dltProject)
}

const addProject = () => {
    // SHOWS THE INPUT FORM FOR COLLECTION
    projectForm.classList.toggle('show')
}
newProject.addEventListener('click', addProject)

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
    console.log(projectLibrary)
}
button.addEventListener('click', registerButton)

const addTask = () =>{
    // CREATE DIV-WRAPPER FOR TASK FORM
    const taskFormWrapper = document.createElement('div')
    taskFormWrapper.classList.add('task-form-wrapper')

    // CREATE FORM DYNAMICALLY TO COLLECT TASK INFO
    const taskForm = document.createElement('form')
    taskForm.classList.add('task-form')

    // CREATE INPUT FOR TASK NAME
    const taskName = document.createElement('input')
    taskName.classList.add('task-name')
    taskName.setAttribute('placeholder', 'Task name')
    taskName.setAttribute('type', 'text')
    taskName.setAttribute('name', 'task-name')

    // CREATE TEXTAREA FOR TASK DESCRIPTION
    const taskDescription = document.createElement('textarea')
    taskDescription.classList.add('task-description')
    taskDescription.setAttribute('placeholder', 'Description')
    taskDescription.setAttribute('type', 'text')
    taskDescription.setAttribute('name', 'task-description')

    // CREATE INPUT FOR TASK DUE DATE
    const dueDate = document.createElement('input')
    dueDate.classList.add('due-date')
    dueDate.setAttribute('type', 'date')
    dueDate.setAttribute('name', 'due-date')

    // CREATE PRIORITY INPUT
    const priorityDiv = document.createElement('div')
    priorityDiv.classList.add('priority-div')
    const priorityLabel = document.createElement('label')
    priorityLabel.innerText = 'Priority'
    priorityLabel.classList.add('priority-label')
    const prioritySelect = document.createElement('select')
    

}

