class ProjectStore {
  // ADD PROJECTS TO LIBRARY
  static addToLibrary = (newProject) => {
    this.store.push(newProject);
  };

  static deleteFromLibrary = (projectName) => {
    const index = this.store.indexOf(projectName);
    this.store.splice(index, 1);
    localStorage.removeItem(projectName);
  };

  static findProject = (myId) => {
    return this.store.filter((project) => project.myId === myId);
  };
}

// AN ARRAY TO STORE PROJECTS
ProjectStore.store = JSON.parse(localStorage.getItem("projects")) || [];
ProjectStore.completed = [];

export { ProjectStore };
