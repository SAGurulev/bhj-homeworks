"use strict"
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
xhr.addEventListener("readystatechange", getChange);
function getChange(event) {
    if(xhr.readyState===xhr.DONE&&xhr.status===200) {
        let data = JSON.parse(xhr.responseText).response.Valute;
        const loader = document.getElementById("loader");
        loader.classList.remove("loader_active");
        for (let b in data) {
            let item = `<div class="item__code">
            ${data[b].CharCode}
        </div>
        <div class="item__value">
        ${data[b].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>`
        const listItems = document.getElementById("items");
            listItems.insertAdjacentHTML("beforeend", item);
        }
    }
}