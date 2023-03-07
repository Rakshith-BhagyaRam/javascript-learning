"use strict";
/*
const airline = "rajiv G Gandhi University";
const plain = "A320";

console.log(plain);
console.log(plain[0]);
console.log(plain[1]);
console.log(plain[2]);
console.log(plain[3]);
console.log(`Rakshith`[0]);

console.log("Rajiv Gandhi Airaporte".length);
console.log(airline.length);
console.log(plain.length);

console.log(airline);

/////////////////////////////////////////////////////////////////////////////////string Methods

//  indexOf <------- returns the index of letters in a string
console.log(airline.indexOf("r"));
console.log(airline.indexOf("Gandhi")); // it works on words also

// lastIndexOf <------- returns the index of last letters in a string
console.log(airline.lastIndexOf("r"));

//slice <---  extract the text between indexes provided
console.log(airline.slice(5));
console.log(airline.slice(5, 20));

// it also takes negative indexes  // it tracks from last
console.log(airline.slice(-5));
console.log(airline.slice(1, -1));

//extracting words without knowing the index
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

const middleSeat = function (seatNumber) {
  const letter = seatNumber.slice(-1);
  letter == "B" || letter == "E"
    ? console.log("its a middle seat ")
    : console.log("its not a midddle seat");
};

middleSeat("11B");
middleSeat("3C");
middleSeat("1E");

for (const letter of plain) {
  // console.log([letter]);
}

console.log(typeof new String(`Rakshith`)); //<----- this is an object
console.log(new String(`Rakshith`).slice(0, 6) + "i");
console.log(typeof new String(`Rakshith`).slice(6)); //<----- this is an string

// converting string to UpperCase
console.log(airline.toUpperCase());
console.log(airline.toLocaleUpperCase());

// converting string to LowerCase
console.log(airline.toLowerCase());
console.log(airline.toLocaleLowerCase());

//
//
// capitalization of first letter in the String aka .title() in python
// using .toLowerCase() and .toUpperCase()

const capitalization = function (string) {
  const stringLower = string.toLowerCase();
  const firstLetter = stringLower[0].toUpperCase();
  return firstLetter + stringLower.slice(1);
};
console.log(capitalization("RaKsHiTh"));

// .trim() <----  getting rid of white spaces

const email = "rakshithbhagyaram@outlook.com";
const loginMail = "    RakshithBhagyaRam@OutLook.com \n";
console.log(email, loginMail);
console.log(email === loginMail);
//

//
const email1 = "rakshithbhagyaram@outlook.com";
const loginMail1 = "    RakshithBhagyaRam@OutLook.com \n";
const updated = loginMail1.toLowerCase().trim();
console.log(email1, updated);
console.log(email1 === updated);

// Replacing    ----> .replace()   and   .replaceAll()
// syntax   --->    .replace(subStringOrRegexp, newSubstringOrReplacer)
// replace is also case sensitive

const price = "260,24£";
const priceRs = price.replace("£", "₹").replace(",", ".");
console.log(price, "  ", priceRs);

// replacing words
const announcement = "All passengers come to Boarding door 23. Boarding door !";
// console.log(announcement.replaceAll("door", "gate"));

// replacing using regular expression
console.log(announcement.replace(/door/g, "gate"));

// methods return Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Air"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

// simple example
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("its a new AirBus");
}

// practice Excersise

const checkbaggage = (items) => {
  const baggage = items.toLowerCase().trim();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("you are not allowed to Board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkbaggage("Pizza, burger");
checkbaggage("food and Gun for protection");

// .split()  <------ it splits the string using delimiters

console.log("a+very+nice+string".split("+")); /// it stores the result in a array
console.log("Rakshith Bhagya Ram".split(" "));
const [firstName, middleName, lastName] = "Rakshith Bhagya Ram".split(" ");
console.log(firstName, middleName, lastName);

//
//.join(separator) // joins the string in the array using separator/delimiters
const Name = ["Mr.", firstName, middleName, lastName.toUpperCase()].join(" ");
console.log(Name);

//
// capitalization of first letter in the string using .split() and .join() methods
const capitalization2 = (name) => {
  let final = [];
  const lowerName = name.toLowerCase().trim();
  const newName = lowerName.split(" ");
  for (const word of newName) {
    final.push(word[0].toUpperCase() + word.slice(1));
    // console.log(final)
  }

  const finalString = final.join(" ");
  if (name !== finalString) {
    console.log("Idigo nee kotha peru \nEnjoy!! Pandagoo!!");
  } else {
    console.log(
      "nuvve correct ga enter chesav kada raa malli nannu correct cheyyamantav..! \nyadavaaa"
    );
  }
  console.log(finalString);
};
capitalization2("rakshith BhaGya ram");
capitalization2("Rakshith Bhagya Ram");
capitalization2("Manikanta Chintapalli");

// capitalization of first letter in the string using .split() and .join() and .replace() methods
const capitalization3 = (name) => {
  let final = [];
  const lowerName = name.toLowerCase().trim();
  const newName = lowerName.split(" ");
  for (const word of newName) {
    final.push(word.replace(word[0], word[0].toUpperCase()));
    // console.log(final)
  }
  console.log(final.join(" "));
};
capitalization3("kUsHaL");

//
//
// padding a string  using  .padStart() and .padEnd()
// syntax  --->  .padStart(maxLength, fillString) .padEnd(maxLength, fillString)

const message = " my name is Bose ";
console.log(message.length);
console.log(message.padStart(22, "*").padEnd(27, "*"));

console.log(" It's a IMP message ".padStart(24, "+").padEnd(27, "+"));

const mapCreditcard = (number) => {
  const str = number + "";
  console.log(str.slice(-4).padStart(str.length, "*"));

  //  const last =  str.slice(-4).padStart(str.length,"*")
  // return last
};
// console.log(mapCreditcard(2345678900987654))
// console.log(mapCreditcard("msbdhcjdhsdhhgdf"))
mapCreditcard(42345678900987654);
mapCreditcard("msbdhcjdhsdhhgdf");


//////////////////////////////////////  Repeat method 
const msg = "Bad weather.... departure late\n"
console.log(msg.repeat(5))

// practical Example  

const planesInLine =(n)=>
{
console.log(`${n} Planes are In line ${'🛩'.repeat(n)}`)
} 
planesInLine(5)
planesInLine(2)
planesInLine(4)
planesInLine(3)
planesInLine(6)


// // reversing a string using arrays and .reverse() method
// const string = (string) =>{
//   let arr =[]
//   for (const letter of string) {
//     arr.push(letter)
//   }
//   console.log(arr.reverse().join(""))
// }
// string('asdfghjkl')


// // reversing a string using arrays .unshift()method
// const reve = (string) => {
//   let arr = [];
//   for (const letter of string) {
//     arr.unshift(letter);
//   }
//   console.log(arr.join(""));
// };
// reve("asdfghjkl");
*/

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//  🔴 Delayed Departure from FAO to TXL (11h25)
//               Arrival from BRU to FAO (11h45)
//    🔴 Delayed Arrival from HEL to FAO (12h05)
//             Departure from FAO to LIS (12h30)

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.includes("Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`;
  console.log(output.padStart(46));
}
