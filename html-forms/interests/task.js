"use strict"
const interestsActive = document.querySelectorAll(".interests_active");

for (let i=0; i < interestsActive.length; i++){
    let menu = interestsActive.item(i);
    let parentMenu = menu.closest(".interest");
    let checked1 = parentMenu.firstElementChild.firstElementChild;
    //console.log(menu, parentMenu, checked1);
    function change() {
        let list = menu.children;
        for (let g=0; g < list.length; g++) {
            let listItem = list.item(g);
            let a = listItem.firstElementChild.firstElementChild;
            a.checked = checked1.checked;
        }
    }
    checked1.addEventListener("change", change);
}