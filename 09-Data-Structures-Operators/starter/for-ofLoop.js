'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received !! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPaste: function (ing1, ing2, ing3) {
    console.log(
      `here is your pasta with ingrediants ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },
};









//// for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
 for (const item of menu) {
  console.log(item);
 }

 for (const item of menu.entries()) {
   console.log(item);
}

 for (const item of menu.entries()) {
   console.log(`${item[0] + 1}: ${item[1]} `);
 }

 console.log("--------------=======---------");

for (const [i, el] of menu.entries()) {
   console.log(`${i + 1}: ${el} `);
 }

 console.log([...menu.entries()]);

