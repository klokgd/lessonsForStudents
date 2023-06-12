let cart = [];

function addToCart(product) {
    cart.push(product);
}

function removeFromCart(product) {
    cart = cart.filter((item) => item.id !== product.id);
}

module.exports = {
    addToCart,
    removeFromCart,
    cart
};
