'use strict';

// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//
//
// Filetring using .filter() Method

const deposit = movements.filter(mov => mov > 0);
console.log(deposit);

// filtering using for loop
const depositFor = [];
for (const i of movements) {
  if (i > 0) depositFor.push(i);
}

console.log(depositFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
