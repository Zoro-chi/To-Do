const newProject = document.querySelector('.addNewProject')
const projectForm = document.querySelector('.project-name')
const projectName = document.querySelector('#project-name')
const button = document.querySelector('.project-button')
const navbar = document.querySelector('.navbar')

const newProjectItem = () =>{
    const newItem = document.createElement('li')
    const dltIcon = document.createElement('img')
    dltIcon.src = "../src/images/addIcon.png" 
    dltIcon.classList.add('dltIcon')
    newItem.textContent = `${projectName.value}`
    newItem.classList.add('createdLi')
    newItem.append(dltIcon)
    navbar.appendChild(newItem)
    
    const dltProject = () =>{
        navbar.removeChild(newItem)
    }
    dltIcon.addEventListener('click', dltProject)
}

class Projects{
    constructor(name){
        this.name = name
    }
}

const projectLibrary = []

const addNewProject = () => {
    const addProject = () => {
        projectForm.classList.toggle('show')
    }
    newProject.addEventListener('click', addProject)

    const registerButton = () => {
        newProjectItem()
        const newProjectObject = new Projects(projectName.value)
        projectLibrary.push(newProjectObject)
        projectName.textContent = ''
        projectForm.classList.toggle('show')
        
    }
    button.addEventListener('click', registerButton)
}



export {addNewProject, projectLibrary,}