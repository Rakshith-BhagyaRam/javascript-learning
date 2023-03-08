


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
