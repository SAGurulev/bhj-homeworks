"use strict"
const editor = document.getElementById("editor");
editor.addEventListener("input", save);
function save(event) {
    localStorage.text = editor.value;
    console.log(localStorage);
}
window.addEventListener("load", getLoad);
function getLoad(event) {
    editor.value = localStorage.getItem('text');
}