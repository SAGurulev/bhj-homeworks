"use strict"
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
xhr.addEventListener("readystatechange", getChange);
function getChange(event) {
    if(xhr.readyState===xhr.DONE&&xhr.status===200) {
        let data = JSON.parse(xhr.responseText).data;
        const pollAnswer = document.querySelector(".poll__answers");
        const pollTitle = document.querySelector(".poll__title");
        pollTitle.InnerText = data.title;
        console.log(pollTitle);
        for (let b of data.answers) {
            let btn = `<button class="poll__answer">
            ${b}
          </button>`;
          pollAnswer.insertAdjacentHTML("beforeend", btn);
        }
        const allBtn = document.querySelectorAll(".poll__answer");
        for (let b of allBtn) {
            b.addEventListener("click",()=>alert("Спасибо, ваш голос засчитан!"));
        }
    }
}
