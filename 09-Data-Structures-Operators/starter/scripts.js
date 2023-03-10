"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
console.log(openingHours);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received !! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your pasta with ingrediants ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },
};

/*

///////////////destructing objects //////////////////
restaurant.orderDelivery({
  time: '19:46',
  address: ' viajayanagara 3rd stage , sangam circle',
  mainIndex: 1,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restoName, openingHours: hours, categories: tags } = restaurant;
console.log(restoName, tags, hours);

// default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating variables
let a = 111;
let b = 106;

const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;





////////////////////////////////////// destructing arrays \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y] = arr;
console.log(x, y);
console.log(a, b, c);


let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary);
[secondary, main] = [main, secondary];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// receive 2 return values from a function;
const [starterMenu, mainMenu] = restaurant.order(2, 0);
console.log(starterMenu, ',', mainMenu);
const nestedArray = [1, 4, [3, 2]];
// const [i, , j] = nestedArray
const [i, l, [j, k]] = nestedArray;
console.log(i, l, j, k);

// let A = 0;
// let B = 1;
// let fib = 0;
// const number = prompt('enter the range');
// for (let i = 0; fib < number; i++) {
  //   console.log(fib);
  //   A = B;
  //   B = fib;
  //   fib = A + B;
  // }
  
  
  //////////////////////////////////////// spread operator \\\\\\\\\\\\\\\
  const arrc = [7, 8, 9, 5, 3, 2];
  const badNewArray = [1, 2, arrc[0], arrc[1], arrc[2]];
  const newArr = [1, 2, ...arrc];
  console.log(badNewArray);
  console.log(newArr);
  console.log(...arrc);
  console.log(...newArr);
  
  const newMenu = [...restaurant.mainMenu, 'gnochhi'];
  console.log(newMenu);
  console.log(...newMenu);
  
  //
  //
  // codeing challenge
  //
  
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  console.log(menu);
  
  //
  // Itterables
  
  const Pname = 'Rakshith';
  console.log([...Pname, '', 'B', 'R']);
  
  const naame = [];
  const nam = 'rakshith';
  for (let i = 0; i < nam.length; i++) {
    naame.unshift(Pname[i]);
  }
console.log(naame);
// example of spread operator

// const ingrediants = [
  //   prompt("let's make pasta provide ingrediant 1"),
  //   prompt('ingrediant 2'),
  //   prompt('ingrediant 3'),
  // ];
  
  // restaurant.orderPaste(...ingrediants);
  // restaurant.orderPaste(ingrediants[0], ingrediants[1], ingrediants[2]);
  
  const resto = {founded: 2001, ...restaurant , founder: "Rakshith"}
  resto.name = "Rakshith's paradise"
  console.log(resto)
  console.log(restaurant)
  
  console.log(o, c);
  
  ***************************** Rest patterns and Parameters ****************************
  
  /////////////////////////// destructuring \\\\\\\\\\\\\\\\\\\\\\\\\

  // SPREAD, because it is on left hand side of the assignment operator

  const arr = [1, 2, ...[3, 4, 1, 2, 5]];
console.log(arr);

// REST, operator because it is on right hand side of the assignment operator

const [a, b, ...d] = [1, 2, 3, 4, 1, 2, 5];
console.log(a, b, d);

const [pizza, , risatto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risatto, others);

//objects

const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(sat, weekdays);

////////////////////////////// Functions \\\\\\\\\\\\\\\\\\\\\\\\

// since it has only one argument it display only one parameter
// there fore we use spread (...) operator that logs all parameters

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3, 4, 'a', 'r', 2);
add(8, 9, 4, 3, 0);
const x = [1, 4, 3, 2];
add(...x);

restaurant.orderPizza('chicken', 'mushrooms', 'onions', 'spinach');




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////


const resto1 = {
  name: 'capri',
  Guests: 20,
};


const resto2 = {
  name: 'la Piazza',
  owner: 'Hombre',
};

