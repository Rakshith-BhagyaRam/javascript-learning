// Some method
// 
// syntax of .some() method
// array.some((value, index, array) => {})

console.log(account1.movements);

// checks Equality
console.log(account1.movements.includes(-130));

// checks Condition
console.log(account1.movements.some(mov => mov === -130));

const anydeposits = account1.movements.some(mov => mov > 15000);
console.log(anydeposits);


// Every method
// 
// 
// syntax of .every() method
// array.every((value, index, array) => {})

console.log(account1.movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


// separate CallBack

const deposits = mov => mov < 0

console.log(account1.movements.some(deposits)) 
console.log(account1.movements.every(deposits)) 
console.log(account1.movements.filter(deposits)) 
