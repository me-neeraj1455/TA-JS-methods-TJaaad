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

// Create an array peopleName and store value of name key from persons array
let peopleName = [...persons].map(a => a.name);
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = [...persons].map(a => a.grade);
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = [...persons].map(a => a.sex);
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let startWithJ = peopleName.filter(a => a[0] == `J`);
console.log(startWithJ);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let startWithAc = peopleName.filter(a => a[0] == `A` || `C`);
// console.log(startWithAc);+
// Log all the filtered male ('M') in persons array
let male = [...persons].filter(a => a.sex === `M`);
console.log(male);
// Log all the filtered female ('F') in persons array
let female = [...persons].filter(a => a.sex === `F`);
console.log(female);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let startWihCj = persons.filter(a => a[0] === (`C` || `J`));
console.log(startWihCj);

// Log all the even numbers from peopleGrade array
let evenNum = peopleGrade.filter(num => num % 2 === 0);
console.log(evenNum);
// Find the first name that starts with 'J' in persons array and log the object

// Find the first name that starts with 'P' in persons array and log the object

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let nameJ = [...persons].filter(
  a => a[0] === `J` && a.grade > 10 && a.sex === `F`
);
console.log(nameJ);
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(a => a.sex === `F`);
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(a => a.sex === `M`);
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc, cv) => {
  return acc + cv.grade;
}, 0);
console.log(gradeTotal);
// Find the average grade
let gradeAvg =
  persons.reduce((acc, cv) => {
    return acc + cv.grade;
  }, 0) / persons.length;
console.log(gradeAvg);
// Find the average grade of male
let gradeOfMale =
  malePersons.reduce((acc, cv) => {
    return acc + cv.grade;
  }, 0) / malePersons.length;
console.log(gradeOfMale);
// Find the average grade of female
let gradeOfFemale =
  femalePersons.reduce((acc, cv) => {
    return acc + cv.grade;
  }, 0) / femalePersons.length;
console.log(gradeOfFemale);
// Find the highest grade
let highestGrade = [...persons]
  .sort((a, b) => {
    a.grade - b.grade;
  })
  .find(a => {
    persons.length - 1;
  });
console.log(highestGrade);
// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
