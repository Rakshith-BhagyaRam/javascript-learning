"use strict";

/////// sets
// sets are itterable

const Ordersets = new Set([
  "pizza",
  "pizza",
  "pasta",
  "pizza",
  "Risotto",
  "Risotto",
]);
console.log(Ordersets);
console.log(Ordersets.size);
console.log(Ordersets.has("pizza"));
console.log(Ordersets.has("bread"));
Ordersets.add("garlic Bread");
console.log(Ordersets.delete("pizza"));
console.log(Ordersets);
for (const order of Ordersets) {
  console.log(order);
}

const dish = ["pizza", "pizza", "pasta", "pizza", "Risotto", "Risotto"];
const uniqueDish = [...new Set(dish)];
console.log(uniqueDish);
// for (const iterator of ) {

// }
