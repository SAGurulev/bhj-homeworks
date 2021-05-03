"use strict"
const allLi = document.querySelectorAll("ul.menu_main > li  > a");
let arrayAllLi = Array.from(allLi);
for(let i=0; i < arrayAllLi.length; i++) {
    if(arrayAllLi[i].nextElementSibling) {
        arrayAllLi[i].onclick = function() {
            arrayAllLi[i].nextElementSibling.classList.toggle("menu_active");
            return false;
        } 
    }
}