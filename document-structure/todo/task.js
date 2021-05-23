"use strict"
const tasksInput = document.querySelector(".tasks__input");
const tasksAdd = document.querySelector(".tasks__add");

var tasksList = document.querySelector(".tasks__list");

tasksList.addEventListener("click", event => {
    if (event.target.classList.contains("task__remove")) {
        tasksList.removeChild(event.target.parentElement)
    }
});
tasksAdd.addEventListener("click", addClass);
function addClass(event){
    event.preventDefault();
    let targets = tasksInput.value;
    if(targets.trim() !== "") {
      tasksList.innerHTML += `<div class="task">
      <div class="task__title">
        ${targets}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;
    }
    tasksInput.value = "";
}