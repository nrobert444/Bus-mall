import { products } from './product-data.js';
import { checkRandom } from './utils/utils.js';

const newProductArray = checkRandom();
console.log(checkRandom());
const productBox = document.getElementById('product-container');

const imageOne = document.getElementById('image-one');
const imageTwo = document.getElementById('image-two');
const imageThree = document.getElementById('image-three');
const radioOne = document.getElementById('radio-one');
const radioTwo = document.getElementById('radio-two');
const radioThree = document.getElementById('radio-three');
const labelOne = document.getElementById('label-one');
const labelTwo = document.getElementById('label-two');
const labelThree = document.getElementById('label-three');

console.log(newProductArray[0].image);
imageOne.src = newProductArray[0].image;
imageTwo.src = newProductArray[1].image;
imageThree.src = newProductArray[2].image;

radioOne.value = newProductArray[0].id;
radioTwo.value = newProductArray[1].id;
radioThree.value = newProductArray[2].id;

// labelOne.textContent = newProductArray[0].name;
// labelTwo.textContent = newProductArray[1].name;
// labelThree.textContent = newProductArray[2].name;




//let clickCounter;
//let userProductChoice = [];



