'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Rakshith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//
//
//
//Dom Manupulation
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((ele, i) => {
    const type = ele > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${ele}₹</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}₹`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(value => value > 0)
    .reduce((pre, cur) => pre + cur, 0);
  labelSumIn.textContent = `${incomes}₹`;
  const out = movements
    .filter(value => value < 0)
    .reduce((pre, cur) => pre + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}₹`;
  const interest = movements
    .filter(value => value > 0)
    .map(deposit => deposit * 1.2 / 100)
    .filter((value) => value > 1)
    .reduce((cur, pre) => cur + pre, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}₹`;
};
calcDisplaySummary(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
/// SLICE

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log([...arr]);
console.log(...arr);

/// SPLICE

arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr);
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2)); // .splice ( index , deleteCount )
console.log(arr);

/// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse())

///　CONCAT

const letters = arr.concat(arr2)
console.log(letters)


const lett = "rakshith"
console.log([...lett])


/// JOIN 

console.log(letters.join(" - "))
*/

// const num = [1,3,72,5,3]
// // let min=num[0],max=num[0];
// // for(const i of num){
// //   if(max<i)max=i
// //   if(min>i)min=i

// // }console.log(min,max)

// console.log(num)

// /// getting first element
// console.log(num[0])

// /// getting first element by at method
// console.log(num.at(0))

// /// getting last element by length
// console.log(num[num.length-1])

// /// getting last element by slice method
// console.log(...num.slice(-1))
// console.log(num.slice(-1)[0]);

// /// getting last element by at method
// console.log(num.at(-2))

// ////// at method also　works on strings

// console.log("message".at(5))
// console.log("message".at(-1))

/*
//// forEach loop on arrays

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, move] of movements.entries()) {
  move > 0
    ? console.log(`move ${i + 1} : you deposited ${move} ₹`)
    : console.log(`move ${i + 1} : you withdrew ${Math.abs(move)} ₹`);
}

console.log(` `);
console.log(`---------forEach---------- `); /// continue and break doesnot work on forEach loop
movements.forEach((element, index, array) => {
  element > 0
    ? console.log(`move ${index + 1} : you deposited ${element} ₹`)
    : console.log(`move ${index + 1} : you withdrew ${Math.abs(element)} ₹`);
});

//// forEach loop on Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);

currencies.forEach((value, keys, map) => {
  console.log(`${keys}, ${map}`);
});
//// forEach loop on sets
const CurrenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'INR']);
console.log(CurrenciesUnique);
CurrenciesUnique.forEach((value, _, sets) => {
    console.log(`${value}: ${sets}`);
})
 */
