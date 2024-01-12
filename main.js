const products = [
    {
        id: 1,
        name: "Tea 1",
        description: "text...",
        priceMoney: 0,
        quantity: 1,
        price: 20.03,
        priceDisplay: "20,03",
        img: "img/img1.png",
        added: false,
    },
    {
        id: 2,
        name: "Tea O long",
        description: "text...",
        quantity: 1,
        price: 20.03,
        priceDisplay: "20,03",
        img: "img/img2.png",
        added: false,
    },
    {
        id: 3,
        name: "Soda Plus",
        description: "text...",
        quantity: 1,
        price: 20.03,
        priceDisplay: "20,03",
        img: "img/img3.png",
        added: false,
    },
    {
        id: 4,
        name: "Water",
        description: "text...",
        quantity: 1,
        price: 20.03,
        priceDisplay: "20,03",
        img: "img/img4.png",
        added: false,
    },
];

const productContainer = document.querySelector(".list-product");
const cartContainer = document.querySelector(".poss");
let searchVal = document.querySelector(".search-input");
console.log(searchVal);
function renderProductList(products) {
    console.log(products);
    productContainer.innerHTML = "";
    let productInnerHTML = "";
    products.forEach((product) => {
        const item = `<div class="item">
        <div class="img">
            <img src=${product.img} alt="" />
        </div>
        <div class="content">
            <div class="title">${product.name}</div>
            <div class="des">
                ${product.description}
            </div>
            <div class="price">$ <span>${product.priceDisplay}</span></div>
            <div class="plus-minus">
                <div class="plus" onclick="onPlus(${product.id})"><i class="fa-solid fa-plus"></i></div>
                <span>${product.quantity}</span>
                <div class="minus" onclick="onMinus(${product.id})"><i class="fa-solid fa-minus"></i></div>
            </div>
            <button class="add" onclick="addCart(${product.id})">Add to cart</button>
            <button class="remove"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`;
        productInnerHTML += item;
    });

    productContainer.innerHTML = productInnerHTML;
}
function renderListCart(products) {
    const carts = products.filter((item) => item.added == true);
    cartContainer.innerHTML = "";
    let cartInnerHTML = "";
    carts.forEach((cart) => {
        const item = `<div class="item">        
        <div class="img">
            <img src=${cart.img} alt="" />
        </div>
        <div class="content">
            <div class="title">${cart.name}</div>
            <div class="des">
                ${cart.description}
            </div>
            <div class="price">$ <span>${cart.priceDisplay}</span></div>
            <div class="plus-minus">
                <div class="plus" onclick="onPlus(${cart.id})"><i class="fa-solid fa-plus"></i></div>
                <span>${cart.quantity}</span>
                <div class="minus" onclick="onMinus(${cart.id})"><i class="fa-solid fa-minus"></i></div>
            </div>
            <button class="add" onclick="addCart(${cart.id})">Add to cart</button>
            <button class="remove" onclick="removeFromCart(${cart.id})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`;
        cartInnerHTML += item;
    });
    cartContainer.innerHTML = cartInnerHTML;
}

function onPlus(id) {
    // const index = products.findIndex((item) => item.id === id);
    // products[index].quantity++;
    // products[index].priceDisplay = products[index].quantity * products[index].price;

    const item = products.find((item) => item.id === id);
    // console.log(item);
    item.quantity++;
    item.priceDisplay = item.quantity * item.price;
    updateTotal();
    renderProductList(products);
    renderListCart(products);
}

function onMinus(id) {
    // xét điều kiện product.quantity > 1
    const item = products.find((item) => item.id === id);
    // console.log(item);
    if (item.quantity > 1) {
        item.quantity--;
        item.priceDisplay = item.quantity * item.price;
        updateTotal();
    }
    // console.log(product);
    renderProductList(products);
    renderListCart(products);
}

function addCart(id) {
    const product = products.find((item) => item.id === id);
    console.log(product);
    if (product && !product.added) {
        product.added = true;
        updateTotal();

        renderProductList(products);
        renderListCart(products);
    }
}

function updateTotal() {
    totalQuantity = 0;
    totalPrice = 0;
    products.forEach((product) => {
        if (product.added) {
            totalQuantity += product.quantity;
            totalPrice += product.quantity * product.price;
            console.log(totalQuantity);
        }
    });
    document.querySelector(".quantity span").innerHTML = totalQuantity;
    document.querySelector(".total-price span").innerHTML = totalPrice;
}

function removeFromCart(id) {
    const product = products.find((item) => item.id === id);
    console.log(product);
    if (product && product.added) {
        product.added = false;
        updateTotal();
    }
    renderListCart(products);
}
function search() {
    console.log("1");
    let searchValue = searchVal.value;
    const filterProducts = products.filter((product) => {
        const title = product.name.toLowerCase();
        let value = (searchValue || "").toLowerCase();
        return title.includes(value);
    });
    renderProductList(filterProducts);
}
function init() {
    renderProductList(products);
}

init();
