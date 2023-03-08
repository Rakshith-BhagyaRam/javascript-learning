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
