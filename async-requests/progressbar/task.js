"use strict"
const progress = document.getElementById("progress");
const send = document.getElementById("send");
send.addEventListener("click", submit);
function submit(event) {
    event.preventDefault();
    const forms = document.getElementById("form");
    let formData = new FormData(forms);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.onprogress = event => progress.value = event.loaded / 1000000;
    xhr.send(formData);
}
