'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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


************************ Short-circuting *************************

// logical operators 

//Use any datatype and return any datatype && they can do short-circuting

//And
console.log('-------OR--------');
console.log(3 || 'rakshith');
console.log(0 || 'rakshith');
console.log(true || '0');
console.log(true || 0);
console.log(0 || true);
console.log(undefined || null);
console.log(null || undefined || '' || false);

//and
console.log('--------AND--------');
console.log(3 && 'rakshith');
console.log(0 && 'rakshith');
console.log(true && '0');
console.log('0' && true);
console.log(true && 0);
console.log(0 && true);
console.log(undefined && null);
console.log(null && undefined);

// Nullish coalescing operator (??)

restaurant.a = 0;
const Guests = restaurant.a || 10;
console.log(Guests);
const Guest = restaurant.a ?? 10;
console.log(Guest);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////


const resto1 = {
  name: 'capri',
  // Guests: 20,
  Guests: 20,
};


const resto2 = {
  name: 'la Piazza',
  owner: 'Hombre',
};

//////////////////////// logical operators \\\\\\\\\\\\\\\\\\\\

// OR Assignment operator

console.log('------------------------------------');

// resto1.Guests = resto1.Guests || 10;
// resto2.Guests = resto2.Guests || 10;

// resto1.Guests ||= 10;
// resto2.Guests ||= 10;

// Nullish assignment operator (null or undefined )

console.log('------------------------------------');

// resto2.Guests = resto2.Guests ?? 10;
// resto1.Guests = resto1.Guests ?? 10;

// resto1.Guests ??= 10;
// resto2.Guests ??= 10;

// AND Assignment operator

// resto1.owner = resto1.owner && '<Anomimos>';
// resto2.owner = resto2.owner && '<Anomimos>';

resto1.owner &&= '<Anomimos>';
resto2.owner &&= '<Anomimos>';

console.log(resto1);
console.log(resto2);


*/

/////////////////////////// CODEING CHALLENGE #1 \\\\\\\\\\\\\\\\\\\\\\\\

/*

Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!

Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
  players)
  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
  new array ('players1Final') containing all the original team1 players plus 
  'Thiago', 'Coutinho' and 'Perisic'
  5. Based on the game.odds object, create one variable for each odd (called 
    'team1', 'draw' and 'team2')
    6. Write a function ('printGoals') that receives an arbitrary number of player 
    names (not an array) and prints each of them to the console, along with the 
    number of goals that were scored in total (number of player names passed in)
    7. The team with the lower odd is more likely to win. Print to the console which 
    team is more likely to win, without using an if/else statement or the ternary 
    operator.
    Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
    Then, call the function again with players from game.scored
    GOOD LUCK �
    
    // provided Data

    const game = {
      team1: 'Bayern Munich',
      team2: 'Borrussia Dortmund',
      players: [
        [
          'Neuer',
          'Pavard',
          'Martinez',
          'Alaba',
          'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};


************************* Solutions ****************************


//1.
// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1,players2);

const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

//3.
const allplayers = [...players1, ...players2];
console.log(allplayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.

// approach 1
// const { team1 } = game.odds;
// const draw = game.odds.x;
// const { team2 } = game.odds;

// approach 2
// const {team1,x:draw,team2}=game.odds

//approach 3
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...name) {
  console.log(`${name.length} goals were scored by`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

*/


//// for-of Loop
const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
for (const item of menu) {
  console.log(item)
}











