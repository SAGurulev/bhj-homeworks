"use strict"
const hasTooltip = document.querySelectorAll(".has-tooltip");
const hint = document.querySelector(".tooltip");

for (let i=0; i < hasTooltip.length; i++) {
    hasTooltip[i].addEventListener("click", getHint);
}

function getHint(event) {
    event.preventDefault();
    let activ = event.target;
    let hintTexts = activ.getAttribute('title');
    hintTexts === hint.innerText ? hint.classList.toggle("tooltip_active") : hint.classList.add("tooltip_active");
    hint.innerText = hintTexts;
    hint.style.top = event.target.getBoundingClientRect().top + 30 + "px";
    hint.style.left = event.target.getBoundingClientRect().left + 20 + "px"; // getBoundingClientRect - получение координат, ссылки.
}