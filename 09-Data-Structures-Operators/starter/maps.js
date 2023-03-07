"use strict";

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

/////////////////****************************** Maps *******************/

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "55,99");
rest.set("name", "Classico Italiano");
rest.set(1, 55);
// rest.set(1, "55,99");
console.log(rest);

// it also get rid of duplicate vales similar to sets

// it allows us to chain set methods
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("closed", 22)
  .set(true, "we are open :D")
  .set(false, "sorry we are closed :(");

// we use get method to read data from Maps

console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get("open"));

const time = 22;
console.log(rest.get(time > rest.get("open") && time < rest.get("closed")));

// .has method --> it returns boolean value
// and specifies accually that key is present or not
console.log(rest.has(false));

// .size property --> to get the size of the MAP

console.log(rest.size);

// .delete ----> it hepls to delete
rest.delete("closed");
console.log(rest.get("closed"));

// .clear() --> it deletes all keys in map
// rest.clear();
console.log(rest);
console.log(rest.size);

// we can use arrays or oblects as map keys
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));
rest.set(document.querySelector(`h1`), "heading");

rest.set(`a`, `b`);
rest.set(`a`, `c`); // it is updated to b -> c

console.log(rest);
console.log(rest.size);

//////////////////////////////////////////////////////////////////////////////////

const question = new Map([
  ["Question", "What is the best programing language"],
  [1, "C"],
  [2, "C++"],
  [3, "java"],
  [4, "JavaScript"],
  ["correct", 4],
  [true, "correct 🎉"],
  [false, "try again"],
]);
console.log(question);

// converting objects into maps

console.log(Object.entries(openingHours));
const hours = new Map(Object.entries(openingHours));
console.log(hours);

////////////////////////////////////////////////////// maps itiration

// quiz app
console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key} is ${value}`);
}

// const answer = Number(prompt("your answer"));
// console.log(answer);
// //tutorial soln
// console.log(question.get(question.get("correct") === answer));
// // my soln
// answer == question.get("correct") ? console.log(question.get(true)) : console.log(question.get(false));

console.log(question);
console.log(...question);
console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
