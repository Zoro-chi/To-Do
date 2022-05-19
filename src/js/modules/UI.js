import { Project } from './project.js'
import { ProjectStore } from './projectLibrary.js'

// DOM SELECTORS 
const projectNameDiv = document.querySelector('.project-name')
const addNewProject = document.querySelector('.addNewProject')
const display = document.querySelector('.display')
const registerButton = document.querySelector('.project-button')

class UI{


    // ADD PROJECT TO PROJECT LIST
    static addProject = () =>{
        // SELECT PROJECT FORM INPUT & ADD 'SHOW' CLASS (VISIBILITY)
        projectNameDiv.classList.toggle('show')
    }
    // CREATE NEW PROJECT AND ADD TO PROJECT LIBRARY AND UI
    static createProject = () =>{
        // HIDE INPUT FORM
        projectNameDiv.classList.toggle('show')

        let newProjectName = document.querySelector('#project-name').value
        let nameInput = document.querySelector('#project-name')
        const newProjectObject = new Project(newProjectName)
        ProjectStore.addToLibrary(newProjectObject)
        

        const newProjectDiv = document.createElement('div')
        newProjectDiv.classList.add('newProjectDiv')
        const newProject = document.createElement('li')
        newProject.classList.add('createdLi')
        newProject.innerText = newProjectName
        nameInput.value = ''
        newProjectDiv.appendChild(newProject)

        // CREATE A DELETE PROJECT BUTTON
        const deleteProjectButton = document.createElement('button')
        deleteProjectButton.addEventListener('click', UI.deleteProject)
        deleteProjectButton.classList.add('dltButton')
        const deleteProjectIcon = document.createElement('i')
        deleteProjectIcon.className = 'fa-solid fa-trash'
        deleteProjectButton.appendChild(deleteProjectIcon)
        newProject.append(deleteProjectButton)

        // CREATE ADD TASK TO PROJECT BUTTON
        const addTaskToProject = document.createElement('button')
        addTaskToProject.addEventListener('click', UI.addTask)
        addTaskToProject.classList.add('addTaskButton')
        const addTaskIcon = document.createElement('i')
        addTaskIcon.className = 'fa-solid fa-plus'
        addTaskToProject.appendChild(addTaskIcon)
        newProject.append(addTaskToProject)
        const projectDisplay = document.querySelector('.navbar')
        projectDisplay.appendChild(newProjectDiv)
    }

    // DELETE PROJECT
    static deleteProject = (e) =>{
        e.target.parentElement.remove()
        const el = e.target.parentElement.textContent
        ProjectStore.deleteFromLibrary(el)
    }

        // ADD TASK TO PROJECT
    static addTask = () =>{
        // CREATE A FORM TO COLLECT TASK DETAILS 
        // CREATE FORM DIV
        const formDiv = document.createElement('div')
        formDiv.classList.add('taskFormDiv')

        // CREATE FORM ELEMENT
        const form = document.createElement('form')
        form.classList.add('taskForm')
        formDiv.appendChild(form)

        // CREATE INPUT ELEMENT FOR TASK NAME
        const taskName = document.createElement('input')
        taskName.classList.add('taskName')
        taskName.setAttribute('type', 'text')
        taskName.setAttribute('name', 'taskName')
        taskName.setAttribute('placeholder', 'Task name')
        form.appendChild(taskName)

        // CREATE TEXTAREA ELEMENT FOR TASK DESCRIPTION
        const taskDescription = document.createElement('textarea')
        taskDescription.classList.add('taskDescription')
        taskDescription.setAttribute('rows', '10')
        taskDescription.setAttribute('placeholder', 'Description')
        form.appendChild(taskDescription)

        // CREATE DUE-DATE INPUT
        const dateDiv = document.createElement('div')
        dateDiv.classList.add('dateDiv')
        const dateLabel = document.createElement('label')
        dateLabel.classList.add('dateLabel')
        dateLabel.innerText = 'Due date'
        const date = document.createElement('input')
        date.classList.add('dueDate')
        date.setAttribute('type', 'date')
        dateDiv.appendChild(dateLabel)
        dateDiv.appendChild(date)
        form.appendChild(dateDiv)

        // CREATE ADD BUTTON
        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('buttonDiv')
        const button = document.createElement('button')
        button.className = 'submitTask addTaskButton fa-solid fa-plus'
        button.setAttribute('type', 'button')
        // button.addEventListener('click', )
        buttonDiv.appendChild(button)
        form.appendChild(buttonDiv)
        
        // DISPLAY FORM 
        if(display.childElementCount === 0){
            display.appendChild(formDiv)
        }else {
            console.log('already')
        }
    
    }

}


// EVENT LISTENERS
addNewProject.addEventListener('click', UI.addProject)
registerButton.addEventListener('click', UI.createProject)


export {UI}
