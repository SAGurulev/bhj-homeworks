"use strict"
const signin = document.querySelector(".signin");
signin.classList.add("signin_active");
const btn = document.querySelector(".btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
btn.addEventListener("click", submit);

function submit(event) {
    event.preventDefault();
    const signinForm = document.getElementById("signin__form");
    let formData = new FormData(signinForm);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    xhr.addEventListener("readystatechange", getChange);
    function getChange(event) {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.userId = response.user_id;
                signin.classList.remove("signin_active");
                welcome.classList.add("welcome_active");
                userId.innerText = response.user_id;
            } else {
                alert("Неверный логин или пароль");
            }
        }    
    }
}
function init() {
    if (localStorage.userId) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
    }
}
init();