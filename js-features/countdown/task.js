"use strict"
//Задача 1
const getTimer = function() {
    const output = document.getElementById("timer");
    output.textContent = parseInt(output.textContent) - 30;
    let currentTime  = output.textContent;
    if (currentTime  <= 0) {
    window.alert("Вы победили в конкурсе!");
    window.clearInterval(timer);
    }
}
let timer = window.setInterval(getTimer, 1000);

