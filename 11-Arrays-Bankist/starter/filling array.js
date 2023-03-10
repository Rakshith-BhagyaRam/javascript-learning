const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//
// empty array + fill method

const x = new Array(7); // creates new array of 7 empty elements
console.log(x);

// x.map(a => 5);
// console.log(x);      map doesn't work on empty array

//
// .fill(ele) method
//
//
// syntax
//
/// array.fill(target, start, end)
//
// it mutates theoriginal array

// x.fill(1)
// console.log(x)  // it fills the element all the way

x.fill(5, 3, 6);
console.log(x); // it fills the element upto the index specified

// it not only work on empty array it works on any arrays

arr.fill(7, 2, 5);
console.log(arr);

// Array.from  to fill the array
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const dice = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(dice);

labelBalance.addEventListener('click', function (e) {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    ele => Number(ele.textContent.replace('₹', ''))
  );

  console.log(movementsUI.reduce((pre,cur)=> pre+cur))
});
