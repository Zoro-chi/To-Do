class ProjectStore {
  // ADD PROJECTS TO LIBRARY
  static addToLibrary = (newProject) => {
    this.store.push(newProject);
  };

  static deleteFromLibrary = (projectName) => {
    // this.store.splice(this.store.indexOf(projectName), 1);
    let project = this.store.filter(
      (project) => project.name === projectName
    )[0];
    console.log(project);
    let index = this.store.findIndex((obj) => obj === project);
    console.log(index);
    if (index > -1) {
      this.store.splice(index, 1);
      console.log(this.store);
      localStorage.setItem("projects", JSON.stringify(this.store));
    }
  };

  static findProject = (myId) => {
    return this.store.filter((project) => project.myId === myId);
  };
}

// AN ARRAY TO STORE PROJECTS
ProjectStore.store = JSON.parse(localStorage.getItem("projects")) || [];
ProjectStore.completed = [];

export { ProjectStore };
