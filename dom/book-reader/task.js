"use strict"
const book = document.querySelector(".book");
const fontSize = document.querySelectorAll(".font-size");
let arrayFontSize = Array.from(fontSize);

function giveClass(event) {
    event.preventDefault();
    for(let i=0; i < arrayFontSize.length; i++) {
        arrayFontSize[i].classList.remove("font-size_active");
    }
    let c = arrayFontSize.indexOf(event.target);
    let fontSizeAll = arrayFontSize[c].getAttribute("data-size");
    if(fontSizeAll === "small") {
        arrayFontSize[c].classList.toggle("font-size_active");
        book.className = "book book_fs-small";
    } else if(fontSizeAll === "big") {
        arrayFontSize[c].classList.toggle("font-size_active");
        book.className = "book book_fs-big";
    } else {
        arrayFontSize[c].classList.toggle("font-size_active");
        book.className = "book";
    }
}
for(let b of fontSize) {
    b.addEventListener("click", giveClass);
}