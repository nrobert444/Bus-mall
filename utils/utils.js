import { products } from "../product-data.js";

    export function getProducts() {
        return products;
    };

    export function getProductById(someId) {
        let productMatch;

        products.forEach((product) => {
            if (someId === products.id) {
                productMatch = product;
            }
        });

        return ProductMatch;
    }

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

    export function findById (id, arr) {
        let match = null
        arr.forEach((item) => {
          if (id === item.id) {
            match = item
          }
        })
        return match
      }



    //   export function getproduct() {
    //     const getProductsFromLocal = localStorage.getItem('CART');
    //     let shopCart;
    //     if (createCart) {
    //         shopCart = JSON.parse(createCart);
    //     } else {
    //         shopCart =[];
    //     }
    //     return shopCart;
    // };
    
    //     const newCart = JSON.stringify(shoppingCart);
    //     localStorage.setItem('CART', newCart);

