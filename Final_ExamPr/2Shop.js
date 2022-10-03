"use strict";
/*eslint-disable */

function Item(id, name, price, discount, freeShiping = false) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = (discount / 100) * this.price;
    this.freeShiping = freeShiping;
    this.getPrice = function () {
        return this.price - this.discount;
    };
}

function getCheckOut(cart) {
    let total = 0;
    for (let item of cart) {
        if (item.freeShiping == false) {
            total += item.getPrice() + 3;
        } else {
            total += item.getPrice();
        }
    }
    return total;
}

function getItemsPricedOver100(cart) {
    return cart.filter(item => item.price > 100);
}

function findCheapestItem(cart) {
    let cheapItem = cart[0];
    for (let item of cart) {
        if (item.getPrice() < cheapItem.getPrice()) {
            cheapItem = item;
        }
    }
    return {name: cheapItem.name, price: cheapItem.getPrice()};
}

const item1 = new Item(1, 'cell phone', 500, 10);
const item2 = new Item(2, 'book', 50, 0, true);
const item3 = new Item(3, 'table', 500, 1);
const item4 = new Item(4, 'adapter', 40, 2, true);

let shoppingCart = [item1, item2, item3, item4];

// console.log(getCheckOut(shoppingCart));
console.log(findCheapestItem(shoppingCart))
// console.log(getItemsPricedOver100(shoppingCart));
