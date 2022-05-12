import {addNewProject, projectLibrary} from "./addNewProject.js"


addNewProject()

const createdLi = document.querySelector('.createdLi')
const taskForm = document.querySelector('.form')

const show = () =>{
    taskForm.classList.toggle('show')
}
createdLi.addEventListener('click', show)