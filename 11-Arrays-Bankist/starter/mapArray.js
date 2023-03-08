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
  owner: 'Rakshith Bhagya Ram',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


//
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
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

// Computing UserNames using Maps

const createUsername = function(accs) {
  accs.forEach(function(user){
    user.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(value => value.slice(0, 1))
      .join('');
  });
};

createUsername(accounts);
console.log(accounts)

