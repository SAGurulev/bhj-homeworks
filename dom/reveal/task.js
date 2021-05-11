"use strict"
const reveal = document.querySelectorAll(".reveal");


let isInViewport = function(reveal) {
    const viewportHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    if ((elementTop < viewportHeight) && (elementTop > 0)) {
        reveal.classList.add("reveal_active");
    } else if ((elementTop > viewportHeight) && (elementTop < 0)){
        reveal.classList.remove("reveal_active");
    }
    return ((elementTop < viewportHeight) && (elementTop > 0)) ? true : false;
}
function getWindow() {
    for(let b of reveal) {
        isInViewport(b);
    }
}

window.onscroll = getWindow;