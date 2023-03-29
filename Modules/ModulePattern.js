const ShoppingCart2 = (function () {
  const cart = [];
  const totalQuantity = 23;
  const totalPrice = 237;
  const shippingCost = 10;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product}(s) added to cart (Shipping cost is ${shippingCost})`);
  };

  const ordered = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    cart,
    totalPrice,
    totalQuantity,
    addToCart,
  };
})();
ShoppingCart2.addToCart('mango',5)
ShoppingCart2.addToCart('pizza',3)

console.log(ShoppingCart2) 