class ProjectStore {
  // ADD PROJECTS TO LIBRARY
  static addToLibrary = (newProject) => {
    this.store.push(newProject);
  };

  static deleteFromLibrary = (projectName) => {
    let project = this.store.filter(
      (project) => project.name === projectName
    )[0];

    let index = this.store.findIndex((obj) => obj === project);
    if (index > -1) {
      this.store.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(this.store));
    }
  };

  static findProject = (myId) => {
    return this.store.filter((project) => project.myId === myId);
  };
}

// AN ARRAY TO STORE PROJECTS
ProjectStore.store = JSON.parse(localStorage.getItem("projects")) || [];
ProjectStore.completed = JSON.parse(localStorage.getItem("completed")) || [];

export { ProjectStore };
