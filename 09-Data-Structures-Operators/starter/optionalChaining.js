/////////////////////// Optional  Chaining /////////////////

if (restaurant.openingHours && restaurant.openingHours.fri)
  // console.log(restaurant.openingHours.fri.open);

  //with ｏｐｃｈｉｏｎａｌ chaining

  //  console.log(restaurant.openingHours?.thurs?.open)

  for (const i of weekdays) {
    const open = restaurant.openingHours[i]?.open ?? "closed";
    console.log(`on ${i}, we open at ${open}`);
  }

// methods

// console.log(restaurant.order?.(1, 0) ?? "method does not exists");
// console.log(restaurant.orderPasta?.(1, 0) ?? "method does not exists");

// arrays

const user = [
  {
    name: "Rakshith",
    email: "rakshithbhagyaram@gmail.com",
    age: 22,
  },
];

console.log(user[0]?.name ?? "user doesnot exist ");

/////////////////////////////// Looping Objects

// property Names
const properties = Object.keys(openingHours);

let openString = `here we open for ${properties.length} days on `;
console.log(properties);
for (const day of properties) {
  openString += `${day} ,`;
}
console.log(openString);

// Property Values

const values = Object.values(openingHours);
console.log(values);

//Entries object

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}
