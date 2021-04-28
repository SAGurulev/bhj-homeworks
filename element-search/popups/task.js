"use strict"

const modalMain = document.getElementById("modal_main");
const modalSucces = document.getElementById("modal_success");

modalMain.classList.add("modal_active");

const btn = document.getElementsByClassName("show-success");
let btnClosed = btn.item(0);
btnClosed.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSucces.classList.add("modal_active");
}

const closeModal = document.getElementsByClassName("modal__close_times");
let arraysClosed = Array.from(closeModal);
// console.log(arraysClosed);
for(let i = 0; i < arraysClosed.length; i++) {
    let closed = arraysClosed[i];
    closed.onclick =  function() {
        this.parentElement.parentElement.classList.remove("modal_active");
    }    
}
// let closed = closeModal.item(2);
// closed.onclick =  function() {
//     this.parentElement.parentElement.classList.remove("modal_active");
// }



