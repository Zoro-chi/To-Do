import { Project } from "./project";

class Tasks {
  constructor(myId, name, description, dueDate) {
    this.myId = myId;
    this.name = name;
    this.description = description;
    this.date = dueDate;
    this.completed = false;
  }

  setId(myId) {
    this.myId = myId;
  }

  getId() {
    return this.myId;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setDate(dueDate) {
    this.date = dueDate;
  }

  getDate() {
    return this.date;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }
}

export { Tasks };
