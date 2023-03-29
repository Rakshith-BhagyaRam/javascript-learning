//Export 
        // --> mainly used in nodeJS * imp object*

export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product}(s) added to cart (Shipping cost is ${shippingCost})`
  );
};

// Import
const {addTocart}= require("./shoppingCart.js")