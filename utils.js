import { products } from "./product-data";

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

        return product[randomProductIndex];

    };

    export function checkRandom() {
    let randomProduct = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();

    while (randomProduct.id === randomProduct2.id) {
        randomProduct2 = products.getRandomProduct();
    }
    while (randomProduct2.id === randomProduct3.id) {
        randomProduct3 = products.getRandomProduct();
    }
    while(randomProduct3.id === randomProduct.id) {
        randomProduct = products.getRandomProduct();
    }
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

