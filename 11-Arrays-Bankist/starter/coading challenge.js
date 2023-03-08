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
        
        
        

        
Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
GOOD LUCK 😀
*/

const calcAverageHumanAge = ages => 
  ages
    .map(value => (value <= 2 ? 2 * value : 16 + value * 4))
    .filter(age => age >= 18)
    .reduce((pre, cur,_,arr) => pre + cur / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
