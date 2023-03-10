
//
//
//  Find method
//
//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// find return onle the element not an array
// find will return the first element that match the condition

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// .find(value,index,array) method on objects
const account = accounts.find(acc => acc.owner === `Rakshith Bhagya Ram`);
console.log(account);



/// same in for-of loop
for (const i of accounts) {
  if (i.owner === 'Rakshith Bhagya Ram') {
    const acc = i;

    console.log(acc);
  }
}
