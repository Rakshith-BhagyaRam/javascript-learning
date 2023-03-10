/*
//////// coading Challenge #1
// arrays <---------- .slice(), .splice() and forEach loop


Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. CreateanarraywithbothJulia's(corrected)andKate'sdata
3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
4. Runthefunctionforbothtestdatasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉 GOOD LUCK 😀


///////////////////// ---> solution <--- ///////////////

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

// checkAge(dogsKate);

function checkDogs(dogsJulia, dogsKate) {
  let dogsJuliaCorrected = dogsJulia;
  dogsJuliaCorrected = dogsJuliaCorrected.splice(1, 2);
  const ages = [...dogsJuliaCorrected, ...dogsKate];
  console.log(ages);
  ages.forEach((age, i) => {
    // const adult = age >= 3 ? `adult` : 'puppy';
    // console.log(`Dog number ${i + 1} is an ${adult}`);
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult , and its ${age} years old`);
    } else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
}
checkDogs(dogsJulia, dogsKate);
console.log('----------2---------');
checkDogs(dogsJulia2, dogsKate2);
*/

/*


// 
// 
// 
//////// coading Challenge #2
//
// arrays <----------   .map() .reduce() .filter()
// 




Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculatethedogageinhumanyearsusingthefollowingformula:ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)
3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉)
4. Runthefunctionforbothtestdatasets
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
GOOD LUCK 😀



///////////////////// ---> solution <--- ///////////////

const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

// const ages = calAvgHumanAge = ages =>
//   ages.map(value => (value <= 2 ? 2 * value : 16 + value * 4));

const calAvgHumanAge = function (ages) {
  const humanAges = ages.map(value =>
    value <= 2 ? 2 * value : 16 + value * 4
    );
    console.log(humanAges);
    const adult = humanAges.filter(value => value > 18);
    console.log(adult);
    
    const avg =
    adult.reduce(
      (previousValue, currentValue) => previousValue + currentValue/ adult.length ,0);
      
      return avg;
    };
    const avg1 = calAvgHumanAge(ages1);
    
    const avg2 = calAvgHumanAge(ages2);
    
    console.log(avg1, avg2);
    
    
    
    
    // 
    // 
    // 
    //////// coading Challenge #3
    //
    // arrays <----------   .map() .reduce() .filter()
    // 
    //        (((  OPTIONAL CHAINING  )))
    
    
    Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
    Test data:
    § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
    GOOD LUCK 😀
    
    
    ///////////////////// ---> solution <--- ///////////////
    
    const calcAverageHumanAge = ages => 
    ages
    .map(value => (value <= 2 ? 2 * value : 16 + value * 4))
    .filter(age => age >= 18)
    .reduce((pre, cur,_,arr) => pre + cur / arr.length, 0);
    
    console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
    console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
    
    
    
    
    // 
    // 
    // 
    //////// coading Challenge #4
    //
    // arrays <----------   .map() .reduce() .filter()
    // 
    
    
    

    Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
    Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
    Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
    Your tasks:

    1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

    2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

    3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
    4. Logastringtotheconsoleforeacharraycreatedin3.,likethis:"Matildaand Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
    5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
    6. Logtotheconsolewhetherthereisanydogeatinganokayamountoffood (just true or false)
    7. Createanarraycontainingthedogsthatareeatinganokayamountoffood(try to reuse the condition used in 6.)
    8. Createashallowcopyofthe'dogs'arrayandsortitbyrecommendedfood portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
    The Complete JavaScript Course 25
    Hints:
    § Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
    § Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
    Test data:
    */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// GOOD LUCK 😀

///////////////////// ---> solution <--- ///////////////

// 1.

dogs.forEach(
  dog => (dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.

// const calcFoodPortion = dog =>
//   dog.curFood > dog.recommendedFood ? 'too Much' : 'too Litle';

// for (const dog of dogs) {
//   if (dog.owners.includes('Sarah'))
//     console.log(`Sarah's Dog is eating ${calcFoodPortion(dog)}`);
// }
// console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'Much' : 'Less'
  }`
);

// 3.

// let ownersEatTooMuch = [];
// let ownersEatTooLittle = [];
// for (const dog of dogs) {
//   dog.recommendedFood > dog.curFood
//     ? ownersEatTooMuch.push(dog.owners)
//     : ownersEatTooLittle.push(dog.owners);
// }
// // Array.from({length: dogs.length}, ())
// console.log(ownersEatTooMuch.flat());
// console.log(ownersEatTooLittle.flat());

const ownersEatTooMuch = dogs
  .filter(dog => dog.recommendedFood > dog.curFood)
  .flatMap(ele => ele.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.recommendedFood < dog.curFood)
  .flatMap(ele => ele.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4.

console.log(
  `${ownersEatTooMuch.join(' and ')}'s
dogs eat too Much! and
${ownersEatTooLittle.join(' and ')}'s
dogs eat too Little !`
);

//5.

const exact = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(exact);

// 6.

// const okayFood = dogs.map(
//   dog =>
//     dog.curFood <= dog.recommendedFood * 1.1 &&
//     dog.curFood >=dog.recommendedFood * 0.9
// );
// console.log(okayFood);

const checkEating = dog =>
  dog.curFood <= dog.recommendedFood * 1.1 &&
  dog.curFood >= dog.recommendedFood * 0.9;

const okayFood = dogs.some(dog => checkEating(dog));

console.log(okayFood);

// 7.

// let okayDogs = [];
// let notOkayDogs = [];
// for (const dog of dogs) {
//   if (
//     dog.curFood < dog.recommendedFood * 1.1 &&
//     dog.curFood > dog.recommendedFood * 0.9
//   ) {
//     okayDogs.push(dog);
//   } else notOkayDogs.push(dog);
// }
// console.log(okayDogs);
// console.log(notOkayDogs);

console.log(dogs.filter(checkEating));

// 8.

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogs);
console.log(dogsCopy);
