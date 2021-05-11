"use strict"
const rotatorCase = document.querySelectorAll(".rotator__case");
let arrayRotatorCase = Array.from(rotatorCase);
let searchIndex = arrayRotatorCase.findIndex(function(item){
    return item.classList.contains("rotator__case_active")
});
    // let speed = arrayRotatorCase[searchIndex].getAttribute("data-speed");
function getNumber(searchIndex){
    arrayRotatorCase[searchIndex].classList.toggle("rotator__case_active");
    let color = arrayRotatorCase[searchIndex].getAttribute("data-color");
    arrayRotatorCase[searchIndex].style.color = color;
}
function rotator() {
    // speed = arrayRotatorCase[searchIndex].getAttribute("data-speed");
    // console.log(speed);
    // setTimeout(getNumber(searchIndex), speed);
    getNumber(searchIndex)
    if (searchIndex === (arrayRotatorCase.length - 1)) {
        searchIndex = 0;
} else {
    searchIndex++;
}
    getNumber(searchIndex);
}

setInterval(rotator, 1000);

