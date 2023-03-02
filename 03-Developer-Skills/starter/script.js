// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
// **************** temp problem *********************

// ====================>  my soln <=======================
const temp = [2, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let max = 0;
let min = 0;
for (let i = 0; i < temp.length; i++) {
  if (temp[i] === "error") continue;
  if (temp[i] > max) max = temp[i];
  if (temp[i] < min) min = temp[i];
}
console.log(max, min);
console.log(`temp amplitude = ${max - min}`);

// ======================> actual soln <========================

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];

    if (typeof curtemp !== "number") continue;
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temp);
console.log(amplitude);

// ======================> merge 2 arrays <========================

//    *****  array1.concat(array2)  *****

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];

    if (typeof curtemp !== "number") continue;
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [1, 4, 3]);
console.log(amplitudeNew);
console.log('')



// ======================> Debugging <========================
const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        
        // C) fix the bug
        // value: Number(prompt("Degree celsius:")),
        value : 10
    };
    
    // B) Find the bug
    //   console.log(measurement);
    //   console.log(measurement.value);
    //   console.warn(measurement);
    //   console.error(measurement);
    console.table(measurement);
    
    const kelvin = measurement.value + 273;
    return kelvin;
};

// A) identify the bug
console.log(measureKelvin());



//#2
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    //   debugger;
    if (typeof curtemp !== "number") continue;
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 9, 1], [1, 4, 3]);
// identified bug
console.log(amplitudeBug);
console.log("");

*/

//////////////////////////////////////////////////////

// coading Challenge  #1
// trail 1

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}°C in ${[i + 1]} ${i === 0 ? "day" : "days"} `);
  }
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
console.log("");

// trail 2
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${[i + 1]} ${i === 0 ? "day" : "days"} ... `;
  }
  console.log(str);
}
printForecast(data1);
printForecast(data2);
