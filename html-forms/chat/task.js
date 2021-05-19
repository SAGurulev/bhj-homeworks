"use strict"
const chatWidget = document.querySelector(".chat-widget");
const chatWidgetInput = document.getElementById("chat-widget__input");
const messages = document.querySelector( '.chat-widget__messages' );

let arrayString = ["Привет, я ушел", "Завтра в школу", "Хватит писать сюда", "Мне нравится с тобой общаться", "Мне надо идти"]
let minutes = new Date().getMinutes();
let hours = new Date().getHours();

chatWidget.addEventListener("click", getClass);
chatWidgetInput.addEventListener("change", getAnswer2);

function getClass(event){
    chatWidget.classList.add("chat-widget_active");
}

function getAnswer(answer) {
    const random = Math.floor(Math.random() * (answer.length));
    return messages.innerHTML += `
    <div class="message">
      <div class="message__time">${hours}:${minutes}</div>
      <div class="message__text">
        ${answer[random]}
      </div>
    </div>
  `;
}
function getAnswer2(event) {
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${hours}:${minutes}</div>
      <div class="message__text">
        ${event.target.value}
      </div>
    </div>
    `;
    event.target.value = "";
  getAnswer(arrayString);
}
