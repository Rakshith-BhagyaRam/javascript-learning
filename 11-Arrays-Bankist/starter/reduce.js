// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//
//
console.log(movements);

// reduce Function
//
// syntax:-
// array.reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue)

const balance = movements.reduce(function (acc,cur) {
   return acc+cur;
},0);


const balance2 = movements.reduce((accumeator, current) => 
  accumeator + current,200
);


console.log(balance, balance2);


// maximum value using reduce 

const maximum = movements.reduce( (acc,cur) => acc > cur ? acc : cur) 
console.log(maximum)

const minimum = movements.reduce((acc, cur) => acc < cur ? acc : cur);
console.log(minimum);