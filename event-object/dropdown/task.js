"use strict"
const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const link = document.querySelectorAll("a");
function getLink(event) {
    dropdownList.classList.toggle("dropdown__list_active");  
}

dropdownValue.addEventListener("click", getLink);

function addClass(event) {
    event.preventDefault();
    dropdownValue.textContent = event.target.textContent;
    getLink(event);
}

 for(let i of link) {
    i.addEventListener("click", addClass);
 }

