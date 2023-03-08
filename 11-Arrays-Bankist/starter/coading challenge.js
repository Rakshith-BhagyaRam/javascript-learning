//////// coading Challenge #1
// arrays <---------- .slice(), .splice() and forEach loop

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
