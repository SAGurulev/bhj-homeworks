"use strict"
const cartProducts = document.querySelectorAll(".cart__products");
const productQuantity = document.querySelectorAll(".product__quantity-control");
const productAdd = document.querySelectorAll(".product__add");
for(let b of productQuantity) {
    b.addEventListener("click", changeValue);
}

for(let b of productAdd) {
    b.addEventListener("click", addValue);
}
function changeValue(event) {
    let value = event.target.parentNode.querySelector(".product__quantity-value");
    let count = + value.innerText //innerText меняет содержимое текста
    if(event.target.classList.contains("product__quantity-control_inc")) {
        count++;
        value.innerText = count;
    } else {
        if(count > 1){
            count--;
            value.innerText = count;
        } else {
            value.innerText = 1;
        }
    } 
} 

function addValue(event) {
    const product = event.target.closest(".product");
    const id = product.dataset.id;
    const countProduct = + event.target.parentNode.querySelector(".product__quantity-value").innerText;
    for(let item of cartProduct.children) {
        if(item.dataset.id === id) {
            let productCount = item.querySelector(".cart__product-count");
            let total = +productCount.innerText;
            productCount.innerText = total + countProduct;
            return false;
        }
    }

    const productImg = product.querySelector(".product__image").src;
    const count = product.querySelector(".product__quantity-value").innerText;
    const productCart = `<div class="cart__product" data-id=${id}>
    <img class="cart__product-image" src=${productImg}>
    <div class="cart__product-count">${count}</div>
    </div>`
    cart.insertAdjacentHTML("beforeEnd", productCart); 
}
