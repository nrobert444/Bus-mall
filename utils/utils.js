import { products } from "../product-data.js";


    export function getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * products.length);

        return products[randomProductIndex];

    };

    export function checkRandom() {
    let randomProduct = getRandomProduct();
    let randomProduct2 = getRandomProduct();
    let randomProduct3 = getRandomProduct();

    while (randomProduct.id === randomProduct2.id) {
        randomProduct2 = getRandomProduct();
    }
    while (randomProduct2.id === randomProduct3.id) {
        randomProduct3 = getRandomProduct();
    }
    while(randomProduct3.id === randomProduct.id) {
        randomProduct = getRandomProduct();
    } 
    return [randomProduct, randomProduct2, randomProduct3];
};

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}


