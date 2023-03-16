////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// setTimeout

// syntax
// setTimeout(() => {}, timeout);

// arguments and parameters are optional

// setTimeout((arguments) => {}, timeout, parameters);

const ingredients = ['Olives', 'Spinach'];
timeout = 4000;
const preparationOfPizza = setTimeout(
  (ing1, ing2) => {
    console.log(`here is your Pizza🍕 with ${ing1} and ${ing2}`);
  },
  timeout,
  ...ingredients
);
console.log('waiting....');

// clearTimeout

if (ingredients.includes('Spinach')) {
  clearTimeout(preparationOfPizza);
  setTimeout(() => {
    console.log('pizza inclues Spinach');
  }, timeout);
}

// setTimeout((par) => {
//     console.log(`${par} Happy New Year 🎉`)
// }, 6000,"🥳");
// setTimeout(() => {
//     console.log("1")
// }, 5000);
// setTimeout(() => {
//     console.log("2")
// }, 4000);
// setTimeout(() => {
//     console.log("3")
// }, 3000);
// setTimeout(() => {
//     console.log("4")
// }, 2000);
// setTimeout(() => {
//     console.log("5")
// }, 1000);

////////////////////////////////////////////////////////////////////////////////////
// setInterval

// syntax

// setInterval(() => {}, interval);

// setInterval(() => {
//   const now = new Date();
//   const hour = now.getHours();
//   const min = now.getMinutes();
//   const sec = now.getSeconds();

// //   console.log(now);
//   console.log(`${hour} : ${min} : ${sec}`);
// }, 1000);


setInterval(() => {
  const now = new Date();
//   console.log(now);
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
