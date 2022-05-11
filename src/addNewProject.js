

const addNewProject = () => {
    
    const newProject = document.querySelector('.addNewProject')
    const taskForm = document.querySelector('.form')
    const projectForm = document.querySelector('.project-name')

    const addProject = () => {

        projectForm.classList.toggle('show')
        console.log('clicked')
    }

    newProject.addEventListener('click', addProject)
}



export {addNewProject}