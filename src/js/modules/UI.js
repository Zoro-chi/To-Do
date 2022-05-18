import {Project, projectLibrary} from './project.js'

// DOM SELECTORS 
const projectNameDiv = document.querySelector('.project-name')
const addNewProject = document.querySelector('.addNewProject')
const display = document.querySelector('.display')

class UI{


    // ADD PROJECT TO PROJECT LIST
    static addProject = () =>{
        // SELECT PROJECT FORM INPUT & ADD 'SHOW' CLASS (VISIBILITY)
        projectNameDiv.classList.toggle('show')

        // CREATE NEW PROJECT AND ADD TO PROJECT LIBRARY AND UI
        const createProject = () =>{
            // HIDE INPUT FORM
            projectNameDiv.classList.toggle('show')

            const newProjectName = document.querySelector('#project-name').value
            const newProjectObject = new Project(newProjectName)
            projectLibrary.push(newProjectObject)
            console.log(newProjectName)
            console.log(projectLibrary)

            const newProject = document.createElement('li')
            newProject.classList.add('createdLi')
            newProject.innerText = newProjectName

            // ADD A "ADD TASK BUTTON" AND "DELETE PROJECT BUTTON"
            newProject.innerHTML = `${newProjectName} 
            <button class='addTaskButton'> <i class='fa-solid fa-plus add-task-image'></i> </button> 
            <button class='dltButton'> <i class='fa-solid fa-trash dltIcon'></i> </button> `
            document.querySelector('.addTaskButton').addEventListener('click', () =>{
                const taskFormDiv = document.createElement('div')
                taskFormDiv.classList.add('task-form-div')
                taskFormDiv.innerHTML = `
                <form class='task-form'>
                    <div class='task-name'>
                        <label for='task-name'> Name </label>
                        <input id='task-name' type='text' placeholder='Name'>
                    </div>

                    <div class='task-description'>
                        <label for='task-description'> Description </label>
                        <input id='task-name' type='textarea' placeholder='Description' rows=10>
                    </div>

                    <div class='due-date'>
                        <label for='due-date'> Due date </label>
                        <input id-'due-date' type='date'>
                    </div>

                    <div class='task-form-buttons'>
                    <button class='addTask'> <i class='fa-solid fa-plus add-task-image'></i> </button>
                    <button class='dltButton'> <i class='fa-solid fa-trash dltIcon'></i> </button>
                    </div>
                </form>
                `
                display.appendChild(taskFormDiv)
            })
            document.querySelector('.dltButton').addEventListener('click', dltProject)

            const projectDisplay = document.querySelector('.navbar')
            projectDisplay.appendChild(newProject)
        }
        document.querySelector('.project-button').addEventListener('click', createProject)

    }
}


// EVENT LISTENERS
addNewProject.addEventListener('click', UI.addProject)

export {UI}
