import { ProjectStore } from "./projectLibrary.js";

class Project {
  constructor(name, myId) {
    this.name = name;
    this.myId = myId;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setId(myId) {
    this.myId = myId;
  }

  getId() {
    return this.myId;
  }

  setTasks(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  }

  addTask(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name))
      return this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    let index = this.tasks.indexOf(taskName);
    this.tasks.splice(index, 1);
  }
}
Project.prototype.id = "";

export { Project };
