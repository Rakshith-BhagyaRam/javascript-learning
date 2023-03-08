'use strict';

//
const euro = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

/// mapping array
const updatedUSD = euro.map(function (arr) {
  return arr * euroToUSD;
});
console.log(euro);
console.log(updatedUSD);

/// mapping array using arrow function
const updatedUSD1 = euro.map(ele => ele * euroToUSD);
console.log(updatedUSD1);

const movementDescription = euro.map(
  (ele, i) =>
    `move ${i + 1} : you ${ele > 0 ? ' deposited' : 'withdrew'} ${Math.abs(
      ele
    )} ₹`
);

console.log(movementDescription);
