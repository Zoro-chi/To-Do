

class Tasks{
    constructor(name, description, dueDate, priority){
        this.name = name
        this.description = description
        this.date = dueDate
        this.priority = priority
    }

    setName(name){
        this.name = name
    }

    getName(){
        return this.name
    }

    setDescription(description){
        this.description = description
    }

    getDescription(){
        return this.description
    }

    setDate(dueDate){
        this.date = dueDate
    }

    getDate(){
        return this.date
    }

    setPriority(priority){
        this.priority = priority
    }

    getPriority(){
        return this.priority
    }
}