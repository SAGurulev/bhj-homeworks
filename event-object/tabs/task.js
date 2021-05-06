"use strict"
const tab = document.querySelectorAll(".tab");
let arrayTab = Array.from(tab);
const tabContent = document.querySelectorAll(".tab__content");
let arrayTabContent = Array.from(tabContent);

let searchIndex = arrayTab.findIndex(function(item){
    return item.classList.contains("tab_active");
});
console.log(searchIndex);

function changeClass(searchIndex) {
    arrayTab[searchIndex].classList.toggle("tab_active");
    arrayTabContent[searchIndex].classList.toggle("tab__content_active");
}

function getClick(event) {
    changeClass(searchIndex);
    searchIndex = arrayTab.indexOf(event.target);
    changeClass(searchIndex);
}

for(let i=0; i < arrayTab.length; i++) {
    arrayTab[i].addEventListener("click", getClick);
}