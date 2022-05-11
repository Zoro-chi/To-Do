const newProject = document.querySelector('.addNewProject')
const taskForm = document.querySelector('.form')
const projectForm = document.querySelector('.project-name')
const projectName = document.querySelector('#project-name')
const button = document.querySelector('.project-button')
const navbar = document.querySelector('.navbar')

const newProjectItem = () =>{
    let newItem = document.createElement('li')
    newItem.textContent = projectName.value
    newItem.classList.add('createdLi')
    navbar.appendChild(newItem)
}


const addNewProject = () => {

    const addProject = () => {
        projectForm.classList.toggle('show')
    }
    newProject.addEventListener('click', addProject)

    const registerButton = () => {
        newProjectItem()
        projectName.textContent = ''
        
    }
    button.addEventListener('click', registerButton)
}



export {addNewProject}