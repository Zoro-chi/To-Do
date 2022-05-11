
const addNewProject = () => {
    
    const newProject = document.querySelector(".addNewProject")

    class Project{
        constructor(title, descricption, dueDate, priority){
            this.title = title
            this.descricption = descricption
            this.dueDate = dueDate
            this.priority = priority
            }
        }


    const addProject = () => {
        
    }

    newProject.addEventListener("click", addProject)
}



export {addNewProject}