'use strict';

/*
let dL = false;

const pass = true;
if (pass) dL = true
if (dL) console.log('i can drive')

// const interface = 678;
// console.log(interface)



// ********  functions  ************ 
function logger()
{
    console.log("My name is Rakshith")
}

    // calling / running / invoking function
logger();


function fruitProcesser(apples, oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcesser(5, 6);
console.log(appleJuice);

console.log(fruitProcesser(2, 0));



// function declaration

function calAge(birthyear) {           
    return 2023 - birthyear;
}


// function expression

const calAge2 = function (birthyear) {    
    return 2037 - birthyear;
    }
console.log(calAge(2001));
console.log(calAge2(2002));



// arrow function

const calAge3 = birthyear => 2037 - birthyear;
console.log(calAge3(2002));

const yearsRetirement = birthyear => {
    const age = 2023 - birthyear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsRetirement(1975))

const yearsuntilRetirement = (birthyear, name) => {
    const age = 2023 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${name} retires in ${retirement} years`;
}
console.log(yearsuntilRetirement(1975, 'bhagya'))




// functions calling another function

function Cutfruit(fruit) {
    return fruit * 3;
}

function fruitProcesser(apples, oranges) {
    let applePieces = Cutfruit(apples);
    let orangePieces = Cutfruit(oranges);
    const juice = `juice with ${applePieces} apple pieces and ${orangePieces } orange pieces.`
    return juice;
}
console.log(fruitProcesser(2, 1));




//Reviewing Functions

const calAge = function (birthyear) {
    return 2023 - birthyear;
}

const yearsuntilRetirement = function (birthyear, name) {
    const age  = calAge(birthyear)
    const retirement = 65 - age;
    
    if (retirement > 0) {
        return retirement;
    }else {
        return "already retired"
        
    }

    //return `${name} retires in ${retirement} years`;
}

console.log(yearsuntilRetirement(1955, 'Rakshith'))








=============================>  coading challenge #1  <=======================

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas*2) {
        console.log(`Dolphin win ${avgDolphins} vs. ${avgKoalas}`)
    } else if(avgKoalas >= avgDolphins*2){
        console.log(`koalas win ${avgKoalas} vs. ${avgDolphins}`)
    } else{
        console.log('No team wins...')
    }
}


//test 1
let avgDolphins = calcAvg(44, 23, 71);
let avgKoalas = calcAvg(65, 54, 49);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);

//test 2
avgDolphins = calcAvg(85, 54, 41);
avgKoalas = calcAvg(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);



const frnds = ['bunny', 'chinni', 'rakshith',];
console.log(frnds);
console.log(frnds[0]);
console.log(frnds[1]);
console.log(frnds.length);
console.log(frnds[frnds.length - 1]);


const calAge = function (birthyear) {
    return 2023 - birthyear;
}
const years = [1990, 2000, 2002, 2010, 2018];
console.log(calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1]))

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])]
console.log(ages)

const frnds = ['bunny', 'chinni', 'rakshith',];
frnds.push('rowdy');console.log(frnds);
frnds.pop(); console.log(frnds);
frnds.unshift('Kanna'); console.log(frnds);
frnds.shift(); console.log(frnds);
delete (frnds[2]); console.log(frnds);
//console.log(frnds[2]);

if (frnds.includes('buny')) {
    console.log('you hava a frnd to visit namely Bunny')
}else {
    console.log('no one came to visit')
}







======================>  coading challenge #2  <=======================
     

                        ****** if else approach ********
const calcTip = bill => {
    if (bill <= 300 && bill >= 50) {
        let tip = bill * 0.15;
        return tip
    } else {
        let tip = bill * 0.20;
        return tip
    }
}

                       ********* ternary approach **********
const calcTip = bill => bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.20 

console.log(calcTip(100)) 

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`bills = ${bills} `);
console.log(`tips = ${tips}`);
console.log(`total = ${total}`);







=======================>  Assignment <======================

//#1 even or odd
const evenOrOdd = num => (num % 2 === 0) ? "Even" : "Odd"; 
console.log(evenOrOdd(51));

// #2 concatination
const s1 = 'java'
const s2 = 'Script'
console.log(s1 + s2);

console.log('java' + 'script') 

//#3 kid or teen
const age = 11
age===11 ? console.log("kid") : console.log("teen")

//#4
function reverseString(str) {
    let revrs = [];
    let length = str.length - 1;

    for(let i = length; i >= 0; i--) {
        revrs.push(str[i]);
    }
    
    
    return revrs.join("")
}
console.log(reverseString('mathematics'))



// ******************  objects   .,// dictionary in python ******************

const bio = [
    'Rakshith',
    'BhagyaRam',
    2023 - 2001,
    'student',
    ['bunny', 'bharath', 'Thukku']
];

console.log(bio)
console.log(bio[0])
console.log(bio[1])
console.log(bio[2])
console.log(bio[3])
console.log(bio[4])

const BR_bio = { 
    firstName: "Rakshith",
    lastName: "BhagyaRam",
    age: 2023 - 2001,
    job: 'student',
    friends: ['bunny', 'bharath', 'Thukku'],
}
console.log(BR_bio)
console.log(BR_bio.firstName)     //type 1  using  .
console.log(BR_bio.lastName)
console.log(BR_bio.age)
console.log(BR_bio.job)
console.log(BR_bio.friends[0])


console.log(BR_bio['job'])        //type 2 using ['']
// --------------------------------
const nameKey = 'Name';
console.log(BR_bio['first' + nameKey])

const intrest = prompt("choose one from firstname, lastname, job, age, friends");
console.log(BR_bio[intrest]);

if (BR_bio[intrest]) {
    console.log(BR_bio[intrest])
}else {
    console.log('ooooops!!!!!!! object doesnot exists')
}

BR_bio.location = 'GBD';
BR_bio['presentLocation'] = "mysuru";
console.log(BR_bio);






// ===================>  coading challenge #2.1 <=====================

console.log(`${BR_bio.firstName} has ${BR_bio.friends.length} friends and his best friend is ${BR_bio.friends[1]}`)


const rakshi = {
    firstName: "Rakshith",
    lastName: "BhagyaRam",
    birthYear: 2001,
    job: 'student',
    friends: ['bunny', 'bharath', 'Thukku'],
    deiversLicesnse: true,
    
    // calcAge: function (birthYear) {
        //    // console.log(this)
        //     return 2023 - birthYear;
        // }

        
        // calcAge: function () {
            //    // console.log(this)
            //     return 2023 - this.birthYear;
            // }
            
            calcAge: function () {
                // console.log(this)
                this.age = 2023 - this.birthYear;
                return this.age; 
            },
            





            // =================> coading challange #2.2 <===================   
            
            summary: function () {
                return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.deiversLicesnse ? "a" : "no"} drivers License`
                
            }
        };
        
        console.log(rakshi.calcAge());
        console.log(rakshi.age);
        console.log(rakshi.age);
        console.log(rakshi.age);
        console.log(rakshi.age);
        console.log(rakshi.summary())
        






=========================> coading challange #3 <=====================


const mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
    BMI: function () {
        this.bmi  =  this.mass / this.height ** 2
        return this.bmi
    }
    
}
 const john = {
     name: "John Smith",
     mass: 92,
     height: 1.95,
     BMI: function () {
         this.bmi  =  this.mass / this.height ** 2
         return this.bmi
        }
        
    }
    mark.BMI();
    john.BMI();
    
    // ternary version 
    console.log(`${mark.bmi > john.bmi ? `${mark.name}'s BMI (${mark.bmi}) ` : `${john.name}'s BMI (${john.bmi})`} is higher than ${mark.bmi < john.bmi ? `${mark.name}'s BMI (${mark.bmi}) ` : `${john.name}'s BMI (${john.bmi})!`} `)
    
    // if else version
    if (mark.bmi > john.bmi)
    {
        console.log(`${mark.name}'s BMI (${mark.bmi})  is higher than ${john.name}'s BMI (${john.bmi})!`)
}else {
    console.log(`${john.name}'s BMI (${john.bmi})  is higher than ${mark.name}'s BMI (${mark.bmi})!`)
}



*********************** loops ************************
// `````for loop`````


for (let i = 1; i <= 30; i++) {
    // arr.push(i);
    console.log(`Lifting weights repetition ${i} 🏋🏻`);
    
} 

let  type = [];

console.log('')
let arr = [
    'rakshith',
    'bhagyaram',
    2023 - 2001,
    'student',
    ['bunny', 'Bharath', 'Rowdy'],
    true
];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i],typeof arr[i]);
    //  type[i] = typeof arr[i];
    type.push(typeof arr[i])
    
}
console.log(type)

const years  = [1991,2000,2002,2002,2031]
const ages = [];

for (let key = 0; key < years.length; key++){
    
    ages.push(2023 - years[key])
    
}
console.log(ages)


// --------------- continue / break ----------------------------
type = []
console.log('-------------- continue----------------')
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i]!== 'string') continue
    //  type[i] = typeof arr[i];
    console.log(arr[i])
    type.push(typeof arr[i])
}


type = []
console.log('-------------- Break----------------')
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i]!== 'string') break
    //  type[i] = typeof arr[i];
    console.log(arr[i])
    type.push(typeof arr[i])
}


// --------------- back looping ----------------------------


type = []
for (let i = arr.length-1 ; i >= 0; i-- ){
    type.push(arr[i])
}
console.log(type);   


// -------------------- nested Loop ------------------------
const exe = ['crunches', 'push-ups','benchpress','pull-ups']

for (let i = 0; i < exe.length; i++){
    console.log(`-------starting exercise ${[i+1]} '${exe[i]}'`)
    for (let j = 1; j <= 5; j++){
        console.log(`repetition ${j}`);
    }
}


//------------------------- While loop -----------------------
let n = 1;
while (n <= 5) {
    console.log('im here ' + n)
    n++;
}

console.log('')
console.log('')
console.log('')

let dice = Math.trunc (Math.random()*6)+1
// console.log(dice)
console.log('dont roll 6 , loop ends')
while (dice !== 6) {
    console.log(`you rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("cheppa kada bangaaram 6 veyyoddu ani, ippudu loop aagipoindi choodu \n\
    chii pora!!! 😏")
}







// =============================> Coading Challenge #4 <=====================


// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// let tip=0;
// for (let bill = 0; bill < bills.length; bill++) {
//     if (bills[bill] >= 50 && bills[bill] <= 300) {
//         tips.push(bills[bill]*0.15);
//         total.push(tips[bill] + bills[bill]);
//     } else {
    //         tips.push(bills[bill]*0.20);
    //         total.push(tips[bill] + bills[bill]);
    //     }
    // }
// for (let i = 0; i < tips.length; i++) {
    //     tip = tip + tips[i];
    // }
// console.log(bills);
// console.log(tips);
// console.log(`avg of tips = ${tip/tips.length}`)
// console.log(total);


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.20
}

const calAvg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        
    } console.log(`sum = ${sum}   ,  avg = ${[sum/arr.length]}`)
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
let tip=0;
for (let bill = 0; bill < bills.length; bill++) {
    tips.push(calcTip(bills[bill]));
    total.push(bills[bill] + tips[bill])
}
for (let i = 0; i < tips.length; i++) {
    tip += tips[i];
}
console.log(bills);
console.log(tips);
// console.log(`avg of tips = ${tip/tips.length}`)
console.log(total);
calAvg(total);
calAvg(tips)


*/