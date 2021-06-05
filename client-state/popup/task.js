"use strict"
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
modal.classList.add("modal_active");

modalClose.addEventListener("click", cosedModal);
function cosedModal(event) {
    event.preventDefault();
    document.cookie = 'closed=true';
    modal.classList.remove("modal_active");

}

window.addEventListener("load", readedCookie);
const cooks = (name) => {
    const value = ";" + document.cookie;
    let parts = value.split(";" + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}
console.log(document.cookie);
function readedCookie(event) {
    (!cooks('closed')) ? modal.classList.add("modal_active"): modal.classList.remove("modal_active");
}
