'use strict';

console.log(23 === 23.0);

console.log(0.1 + 0.2);
console.log(1 / 10);
console.log(0.1 / 0.2);
console.log(10 / 3);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23'); //anything precedes with + js assumes that as a number
console.log(+'rbr'); // in this case it notice that as NaN ( not a number)

// Parsing
console.log(Number.parseInt('30.45x45'));
console.log(Number.parseFloat('30.54x45'));

// its a global function that can call without Number object
console.log(parseFloat('30.54x45'));
// but Number provides the name space

// NaN   (not a number)
console.log(Number.isNaN(20));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(20));

// creating dates

const now = new Date();
console.log(now);
console.log(new Date('Mar 13 2023 11:23:41'));
console.log(new Date('jan 12 2020'));
console.log(account1.movementsDates[0]);
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(0))

console.log(new Date(3*24*60*60*1000)) // 3days forward

const future = new Date(2024, 10, 30, 15, 10, 21,100);
//                 Date(year,month,date,hour,min,sec, milliseconds)

console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString())
console.log(future.getTime())
console.log(new Date('2024-11-30T09:40:21.100Z'));

console.log(Date.now()) // gives Time Stamp

// set Methods
console.log(future);
console.log(future.setFullYear(2040));
console.log(future.setMonth(5));
console.log(future.setDate(29));
// console.log(future.setDay());
console.log(future.setHours(10));
console.log(future.setMinutes(10));
console.log(future.setSeconds(50));
// console.log(future.setMilliseconds());
// console.log(future.toISOString())



console.log(new Date(2224557650100));