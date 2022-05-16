import {newProject, projectForm, button, projectName, 
        newProjectItem, registerButton, addTask, nodes,
        dltProject} from './dom.js'


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

const addProject = () => {
    // SHOWS THE INPUT FORM FOR COLLECTION
    projectForm.classList.toggle('show')
}

// Event Listeners
newProject.addEventListener('click', addProject)
button.addEventListener('click', registerButton)



export {Projects, Tasks, projectLibrary}