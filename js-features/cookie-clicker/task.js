"use strict"
const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
image.onclick = function() {
if (image.width == 200) {
    image.width = 100;
    } else {image.width = 200;
    }
    clickerCounter.textContent = parseInt(clickerCounter.textContent) + 1;
}

