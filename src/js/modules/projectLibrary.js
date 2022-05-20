
class ProjectStore{

    // ADD PROJECTS TO LIBRARY
    static addToLibrary = (newProject) => {
        this.store.push(newProject)
    }

    static deleteFromLibrary = (projectName) => {
        const index = this.store.indexOf(projectName)
        this.store.splice(index, 1)
    }

    static findProject = (myId) =>{
        return this.store.filter( project => project.myId === myId )
    }

}

// AN ARRAY TO STORE PROJECTS
ProjectStore.store = []


export {ProjectStore}