class Product {
    constructor(id, name, price, year) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

const products = [
    new Product(1, 'Laptop', 1000, 2021),
    new Product(2, 'Mouse', 100, 2021),
    new Product(3, 'Keyboard', 200, 2021)
]

module.exports = { products }
