// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

import cloneDeep from "lodash-es";
// import cloneDeep from "lodash";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 4 },
    { product: "mango", quantity: 51 },
  ],
  user: { loggedin: true },
};

const stateClone = Object.assign({}, state); //　creating a copy by creating a empty object and merging the state object
console.log(stateClone); // change the vales of the object

const stateCloneDeep = cloneDeep(state); // doesnot change the vales of the object

state.user.loggedin = false;
console.log(stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = "hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const rakshith = new Person("Rakshith");
console.log("Rakshith" ?? null);
Promise.resolve("TEST").then(x=> console.log(x))

console.log(state.cart.find((el) => el.quantity >= 2));


