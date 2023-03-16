let emp = [
  { name: 'shri', age: 26, 'salary': 45000 },
  { name: 'maha', age: 24, 'salary': 40000 },
  { name: 'Burr', age: 74, 'salary': 31409 },
  { name: 'Benjy', age: 64, 'salary': 36339 },
  { name: 'Levey', age: 60, 'salary': 30744 },
  { name: 'Royall', age: 42, 'salary': 15835 },
  { name: 'Rabi', age: 92, 'salary': 91729 },
  { name: 'Innis', age: 26, 'salary': 90548 },
  { name: 'Sanford', age: 2, 'salary': 91049 },
  { name: 'Trever', age: 36, 'salary': 50901 },
  { name: 'Norman', age: 40, 'salary': 98628 },
  { name: 'Giacobo', age: 12, 'salary': 89228 },
  { name: 'Guntar', age: 56, 'salary': 26693 },
  { name: 'Jarred', age: 88, 'salary': 29428 },
  { name: 'Iago', age: 14, 'salary': 15531 },
  { name: 'Claudianus', age: 36, 'salary': 66959 },
  { name: 'Todd', age: 22, 'salary': 14032 },
  { name: 'Svend', age: 53, 'salary': 09278 },
  { name: 'Carleton', age: 62, 'salary': 23563 },
  { name: 'Jermayne', age: 39, 'salary': 93718 },

];

// 1.
emp.push({name:"rakshith",age:25,'salary': 50000})
console.log(emp)

// 2.
for (const [i,empl] of emp.entries()) {
  if(empl.name === 'Burr')
  console.log(emp.slice(0,i).concat(emp.slice(i+1))) 
}

for (const [i, empl] of emp.entries()) {
  if (empl.name === 'Burr')
    console.log(...emp.splice(i,1));
}


// 3.
const totSalary = emp.reduce((a,b)=> a + b.salary,0)
console.log(totSalary) 

// 4. 
const emplRecord = emp.find(empl => empl.name === 'rakshith')
console.log(emplRecord)

const emplIndex = emp.findIndex(empl => empl.name === 'rakshith');
console.log(emplIndex);

// 5. 

const ageFilter = emp.filter(empl => empl.age >= 25)
console.log(ageFilter) 