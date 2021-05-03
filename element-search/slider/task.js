"use strict"
const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const sliderItem = document.querySelectorAll(".slider__item");

let arraySliderItem = Array.from(sliderItem);

let searchIndex = arraySliderItem.findIndex(function(item){
    return item.classList.contains("slider__item_active");
});

console.log(searchIndex);

arrowPrev.onclick = function() {
    arraySliderItem[searchIndex].classList.toggle("slider__item_active");
    if(searchIndex == 0) {
        searchIndex = arraySliderItem.length - 1;
    } else {
        searchIndex-= 1;
    }
    console.log(searchIndex);
    arraySliderItem[searchIndex].classList.toggle("slider__item_active");
}

arrowNext.onclick = function() {
    arraySliderItem[searchIndex].classList.toggle("slider__item_active");
    if(searchIndex == (arraySliderItem.length - 1)) {
        searchIndex = 0;
    } else {
        searchIndex+= 1;
    }
    arraySliderItem[searchIndex].classList.toggle("slider__item_active");
}