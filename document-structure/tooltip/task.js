"use strict"
const hasTooltip = document.querySelectorAll(".has-tooltip");
const hint = document.querySelector(".tooltip");

for(let i=0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener("click", getHint);
}
hint.addEventListener("click", ()=> tooltip.classList.toggle("tooltip_active"));

function getHint(event) {
    event.preventDefault();
    let tooltip = document.querySelector(".tooltip_active");
    if(tooltip) {
        tooltip.classList.toggle("tooltip_active");
    }
    hint.innerText = event.target.title; 
    hint.classList.toggle("tooltip_active");
    hint.style.top = event.target.getBoundingClientRect().top + 30 + "px";
    hint.style.left = event.target.getBoundingClientRect().left + 20 + "px"; // getBoundingClientRect - получение координат, ссылки.
}