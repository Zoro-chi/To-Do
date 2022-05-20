import { Project } from './project.js'
import { ProjectStore } from './projectLibrary.js'
import { Tasks } from './tasks.js'

// DOM SELECTORS 
const projectNameDiv = document.querySelector('.project-name')
const addNewProject = document.querySelector('.addNewProject')
const display = document.querySelector('.display')
const registerButton = document.querySelector('.project-button')
const mainSection = document.querySelector('.main-section')

let newProjectName;

class UI {


    // ADD PROJECT TO PROJECT LIST
    static addProject = () =>{
        // SELECT PROJECT FORM INPUT & ADD 'SHOW' CLASS (VISIBILITY)
        projectNameDiv.classList.toggle('show')
    }
    // CREATE NEW PROJECT AND ADD TO PROJECT LIBRARY AND UI
    static createProject = () =>{
        // HIDE INPUT FORM
        projectNameDiv.classList.toggle('show')

        newProjectName = document.querySelector('#project-name').value
        let nameInput = document.querySelector('#project-name')
        const newProjectObject = new Project(newProjectName, newProjectName)
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
        UI.showAlert(`Project ${newProjectName} deleted from library`, "success")
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

        // CLOSE TASK FORM
        const closeButton = document.createElement('button')
        closeButton.classList.add('closeButton')
        closeButton.innerText = 'X'
        closeButton.addEventListener('click', () => {
            display.removeChild(formDiv)
        })
        form.appendChild(closeButton)

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
        button.addEventListener('click', UI.createTask)
        buttonDiv.appendChild(button)
        form.appendChild(buttonDiv)
        
        // DISPLAY FORM 
        if(display.childElementCount === 0){
            display.appendChild(formDiv)
            
        }
    }

    // CREATE A TASK
    static createTask = () =>{
        // COLLECT TASK INFO
        const taskName = document.querySelector('.taskName').value
        const taskDescription = document.querySelector('.taskDescription').value
        const date = document.querySelector('.dueDate').value
        const myId = newProjectName

        // CREATE TASK OBJECT
        const newTaskObject = new Tasks(myId, taskName, taskDescription, date)
        console.log(newTaskObject)

        // ADD TASK TO CORESSPONDING PROJECT
        const myProject = ProjectStore.findProject(myId)[0].tasks
        myProject.push(newTaskObject)
        UI.showAlert(`Task ${taskName} added to ${newProjectName}`, 'success')
    }

    // SHOW ALERTS
    static showAlert = (message, status) => {
        // CREATE ALERT DIV
        const alertDiv = document.createElement('div')
        alertDiv.classList.add('alertDiv')
        const alertMsg = document.createTextNode(message)
        // alertMsg.classList.add('alertMsg')
        alertDiv.appendChild(alertMsg)

        if(status === "err"){
            alertDiv.style.backgroundColor = '#f03f3f'
        }else {
            alertDiv.style.backgroundColor = '#80e380'
        }

        mainSection.insertBefore(alertDiv, display)

        setTimeout(()=>{
            mainSection.removeChild(alertDiv)
        },3000)
    }


}


// EVENT LISTENERS
addNewProject.addEventListener('click', UI.addProject)
registerButton.addEventListener('click', UI.createProject)


export {UI}
