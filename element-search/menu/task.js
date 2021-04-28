"use strict"
let link = document.querySelectorAll(".menu__link");
for(let i=0; i < link.length; i++) {
    link[i].onclick = function(event) {
        event.preventDefault();
    }
}


const allLi = document.querySelectorAll("ul.menu_main > li");
let arrayAllLi = Array.from(allLi);
for(let i=0; i < arrayAllLi.length; i++) {
    let b = arrayAllLi[i];

    b.onclick = function() {
        let menuSub = document.querySelector(".menu_sub");
        
        console.log(menuSub)
        if (menuSub.className === "menu_sub menu_active") {
            menuSub.classList.remove("menu_active");
        } else {
        menuSub.classList.add("menu_active");
        }
    }
}
