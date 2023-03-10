//  Flat.method
//
// syntax
// array.flat(depth);

//  it removes all the nested array and convert that into a single array
//

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(3));

// approach 1

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allmovements = accountMovements.flat();
console.log(allmovements);

const total = allmovements.reduce((pre, cur) => pre + cur, 0);
console.log(total);

//
//
// approach 2 using Chaining

const overall = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((pre, cur) => pre + cur);
console.log(overall);


// 
// 
// approach 3 using flatMap
//
// syntax
// array.flatMap((value, index, array) => {})

// it maps and flat the result in the end

const overallFM = accounts
  .flatMap(mov => mov.movements)
  .reduce((pre, cur) => pre + cur);
console.log(overall);