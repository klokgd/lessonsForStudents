import { addToCart, cart, removeFromCart } from "./cart";
import { products } from "./product";
import "./card.css"
import "./body.css"

function renderProducts(products) {
    const productList = document.querySelector("#product-list");
    products.forEach((product) => {
        productList.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <h5 class="card-price">${product.price}</h5>
                    <h5 class="card-year">${product.year}</h5>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        `;
    });
}

renderProducts(products);

// function init() {
//     addToCart(products[0]);
//     addToCart(products[1]);
//     addToCart(products[2]);
//     console.log(cart);
// }

// init();
