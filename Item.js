class Item {
    constructor(name, category, price, quantity) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
}


var phone = new Item("Samsung", "Electronics", 1000, 2);
var Beatles = new Item("The Beatles", "Music", 10, 1);

console.log(phone);
console.log(Beatles);