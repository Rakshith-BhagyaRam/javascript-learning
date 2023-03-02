let js = "amazing";
console.log(3 + 100 + 40);

let firstName = 'Rakshith';
console.log( firstName );
let $fun = 55;
console.log($fun);

let country = "India";
let continent = "Asia";
let population ; 
population = 2.5;
console.log(continent + " has a country called " + country + " has the population of " + population + " billion");

// console.log(typeof null);

let isIsland = true;
let language;
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language);

/* 

let age = 150;
console.log(age);
// let is block scoped and var is function scoped

age = 50;
console.log(age);

*/

//coading challenge #1

let markHeight  = 1.88, markWeight = 95;
let johnHeight = 1.76 , johnWeight =85;
markBMI = markWeight / markHeight ** 2; console.log(markBMI);
johnBMI = johnWeight / johnHeight ** 2;console.log(johnBMI);
let markHigherBMI = markBMI < johnBMI;

console.log(markHigherBMI)

/*coading challenge #2

let markHeight  = 1.88, markWeight = 95;
let johnHeight = 1.76 , johnWeight =85;
markBMI = markWeight / markHeight ** 2; console.log(markBMI);
johnBMI = johnWeight / johnHeight ** 2;console.log(johnBMI);
if (markBMI < johnBMI) { console.log(`john's bmi is (${johnBMI}) that is larger`); }
else {
    console.log(`marks bmi is (${markBMI}) that is larger`);
*/

//type conversion

// --------> Number
// --------> String


const iy = '1991';
console.log(Number(iy), iy)

    //type coercion 
    //    (+)  converts number to string automatically behind the scenes
console.log('23' + '10' + 3);

//    ( - , * , / )  converts string to number automatically behind the scenes
console.log('23' - '10' - 3);

/* **** falsy values ****
    0, '' , undefined , null , NaN   */

console.log("\n");
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('rakshith'));
console.log(Boolean({}));

// === (stright equality operator) , == (loose equality operator)
/*
        const adultAge =18
        if (adultAge == 18) console.log('adult (loose)');
        if (adultAge === 18) console.log('adult (stright)');

    const fav = Number( prompt("what is your fav number"));
    console.log(fav);
    if (fav === 23) console.log('23 is a cool number')
    else if (fav === 7) console.log('7 is also a cool number')
    else console.log(`${fav} is a cool number `);

*/


// **** boolean logic ****  -->  and(&&) , or(!) , not(||)
console.log(' ')
const hasLicence = true;
const hasVision = false;
console.log(hasLicence || hasVision);

const shouldDrive = hasLicence && hasVision;

if (shouldDrive) console.log('can able to drive')
else console.log('somone else should drive')

/*
 // coading challenge #3

 =======> test case 1 <========

const d1 = 96, d2 = 108, d3 = 89
const k1= 88,k2=91, k3 = 110

const avgD = (d1 + d2 + d3) / 3
const avgK = (k1 + k2 + k3) / 3

if (avgD > avgK) console.log(`winner is Dolphin`)
else if (avgK > avgD) console.log(`winner is kolen`)
else console.log(`Draw`)



 =======> test case 2 <=======

const d1 = 97, d2 = 112, d3 = 80
const k1= 109 ,k2=95 , k3 = 50

const avgD = (d1 + d2 + d3) / 3
const avgK = (k1 + k2 + k3) / 3

console.log(avgD, avgK);


if ((avgD > avgK) && avgD >= 100) console.log(`winner is Dolphin`)
else if ((avgK > avgD) && avgK>= 100) console.log(`winner is kolen`)
else if ((avgK === avgD) && avgK>= 100 && avgD >= 100) console.log(`both win`)
else console.log('no one win')

*/


/* 
******** Switch Case ********
    ch = prompt ("Enter a day") 
    switch (ch)
    {
        case "monday":
            console.log('play')
            break
        case 'tuesday':
            console.log("don't play")
            break
        default: 
            console.log("naaku thelidamma")
    }
*/


// 23-55 , true,   ==> expresssion
// if (0) {console.log("message"); }  ==> statement



/* 

******* ternary operator *******  (expression)
age = 2
age >= 18 ? console.log('elegible to vote') : console.log("not ");



age = 29
age = age >= 18 ? "elegible to vote" : "not ";
console.log(age)
*/


/*

*************   Coading challenge #4   **************

const bill = 27

const tip = bill <= 300 && bill >= 50 ? (15 / 100) * bill : (20/100)*bill ;
console.log(`bill = ${bill} 
tip = ${tip}
total = ${tip+bill}`)

*/