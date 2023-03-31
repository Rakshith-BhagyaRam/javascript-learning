// Exporting Module
console.log("Exporting Module");
const shippingCost = 10;
export const cart = [];

export const addTocart = function (product, quantity) {
  cart.push({
    product,
    quantity,
  });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 100;
const totalQuantity = 5;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({
    product,
    quantity,
  });
  console.log(`${quantity} ${product}s added to cart`);
}
