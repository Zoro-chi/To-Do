
class ProjectStore{

    // ADD PROJECTS TO LIBRARY
    static addToLibrary = (newProject) => {
        this.store.push(newProject)
    }

    static deleteFromLibrary = (projectName) => {
        const index = this.store.indexOf(projectName)
        this.store.splice(index, 1)
    }

}

// AN ARRAY TO STORE PROJECTS
ProjectStore.store = []


export {ProjectStore}