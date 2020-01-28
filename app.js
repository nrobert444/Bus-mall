import { productArray } from './product-data.js';
let clickCounter;
let userProductChoice;

newProductArray = productArray.slice();

function getRandomproduct() {
    const randomProductIndex = Math.floor(Math.random() * newProductArray.length);

    return newProductArray[randomProductIndex];
}