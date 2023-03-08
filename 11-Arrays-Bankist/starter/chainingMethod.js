'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//　PIPELINE
const euroToUSD = movements
  .filter(value => value > 0)
  .map(value => value * 1.1)
  .reduce((pre, cur) => pre + cur, 0);
console.log(euroToUSD, '$');
