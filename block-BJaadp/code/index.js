let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// NOTE: Use reduce method wherever you can to solve this exercise:

// Find the average grade
// let allGrade = persons.map(element => {
//   return element.grade;
// });
// console.log(allGrade);

let allGradeAvg =
  persons.reduce((acc, cv) => {
    return acc + cv.grade;
  }, 0) / persons.length;
// console.log(allGrade);
// Find the average grade of male
let male = persons.filter(cb => cb.sex === `M`);
let maleGradeAvg =
  male.reduce((acc, cv) => {
    return acc + cv.grade;
  }, 0) / male.length;
// console.log(maleGradeAvg);
// Find the average grade of female
let female = persons.filter(cb => cb.sex === `F`);
let femaleGradeAvg =
  female.reduce((acc, cv) => {
    return acc + cv.grade;
  }, 0) / female.length;
// console.log(femaleGradeAvg);
// Find the highest grade
let allGrade = persons.map(a => a.grade);
let highestGrade = [...allGrade]
  .sort((a, b) => {
    return a - b;
  })
  .pop();
// console.log(highestGrade);
// Find the highest grade in male
let maleGrade = male.map(a => a.grade);
let highestMaleGrade = [...maleGrade]
  .sort((a, b) => {
    return a - b;
  })
  .pop();
// console.log(highestMaleGrade);
// Find the highest grade in female
let femaleGrade = female.map(a => a.grade);
let highestFemaleGrade = [...femaleGrade]
  .sort((a, b) => {
    return a - b;
  })
  .pop();
// console.log(highestFemaleGrade);
// Find the highest grade for people whose name starts with 'J' or 'P'
let startWithJorP = persons.filter(
  a => a.name.charAt(0) === `J` || a.name.charAt(0) === `P`
);
let highestGradeOfJp = startWithJorP
  .map(a => a.grade)
  .sort((a, b) => {
    a - b;
  });
// console.log(highestGradeOfJp);
const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = fruitBasket.values();
for (let key of fruitsObj) {
  console.log(key);
}

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]/.
*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let newData = [];
newData = data.reduce((acc, cv) => {
  return acc + `, ` + cv;
});
console.log(newData);
// Using reduce flat data array

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let newDataTwo = dataTwo.reduce((acc, cv) => {
  return acc + ` ,` + cv;
});
console.log(newDataTwo);
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
function increment(num) {
  function double(num) {
    function decrement(num) {
      return num - 1;
    }
    return decrement(num * 2);
  }
  return double(num + 1);
}

// function decrement(num) {
//   return num - 1;
// }

function triple(num) {
  return num * 3;
}
function half(num) {
  return Math.round(num / 2);
}
let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];
console.log(pipeline(3));
/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
