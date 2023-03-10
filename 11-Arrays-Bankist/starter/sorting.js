'use strict';
//
//
//   Sort method..
//
// syntax :
// array.sort((a, b) => {})
//

// Sorting Strings
const owners = ['Jhonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); /// sort method mutates the original array

// Sorting Numbers
console.log(movements);

// return > , A , B (keep order)
// return < , B , A (switch order)

//Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

// movements.sort((a, b) => b - a);

//Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

// movements.sort((a, b) => b - a);



