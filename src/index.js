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

let projectLibrary = []

// Dynamically created li's = new ToDo project
const newProjectItem = () =>{
    const createdLi = document.createElement('li')
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
    
    const dltProject = () =>{
        // REMOVES PROJECT ITEM FROM NAVBAR
        navbar.removeChild(newItem)
        // let indexOfItem = 
    }
    dltButton.addEventListener('click', dltProject)
    return {newItem}
}

const addProject = () => {
    projectForm.classList.toggle('show')
}
newProject.addEventListener('click', addProject)

const registerButton = () => {
    projectName.classList.remove('show')
    newProjectItem()
    const newProjectObject = new Projects(projectName.value)
    projectLibrary.push(newProjectObject)
    projectName.innerHTML = ''
    projectForm.classList.toggle('show')
    console.log(projectLibrary)
}
button.addEventListener('click', registerButton)




