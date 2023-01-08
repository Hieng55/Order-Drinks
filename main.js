let item = document.querySelectorAll(".item");
for (let i = 0; i < item.length; i++) {
    let quantity = 1;
    let quantitySpan = item[i].querySelector(".plus-minus span");
    let priceSpan = item[i].querySelector(".price span");
    let plus = item[i].querySelector(".plus");
    let minus = item[i].querySelector(".minus");
    console.log(plus);
    plus.addEventListener("click", function () {
        quantity++;
        quantitySpan.innerHTML = quantity;
        priceSpan.innerHTML = parseFloat(price) * quantity;
    });
    minus.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantitySpan.innerHTML = quantity;
            priceSpan.innerHTML = parseFloat(price) * quantity;
        }
    });
}
let add = document.querySelector(".add");
let img = item[i].querySelector(".img");
add.addEventListener("click", function () {
    let name = document.querySelector(".title-1");
    let cart = document.querySelector(".listCart");
    let remove = document.querySelector("remove");
    img.src = img;
    cart.classList.add("active");
});
