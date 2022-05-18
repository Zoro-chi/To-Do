import {Project, projectLibrary} from './project.js'

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

        const newProjectName = document.querySelector('#project-name').value
        const newProjectObject = new Project(newProjectName)
        projectLibrary.push(newProjectObject)
        console.log(newProjectName)
        console.log(projectLibrary)

        const newProjectDiv = document.createElement('div')
        newProjectDiv.classList.add('newProjectDiv')
        const newProject = document.createElement('li')
        newProject.classList.add('createdLi')
        newProject.innerText = newProjectName
        newProjectDiv.appendChild(newProject)
        const deleteProjectButton = document.createElement('button')
        deleteProjectButton.classList.add('dltButton')
        const deleteProjectIcon = document.createElement('i')
            
        newProject.append(deleteProjectButton)
        const addTaskToProject = document.createElement('button')
        addTaskToProject.classList.add('addTasm')
        newProject.append(addTaskToProject)


        const projectDisplay = document.querySelector('.navbar')
        projectDisplay.appendChild(newProjectDiv)
    }
    
}


// EVENT LISTENERS
addNewProject.addEventListener('click', UI.addProject)
registerButton.addEventListener('click', UI.createProject)



export {UI}
