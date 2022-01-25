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
let startWithJp = peopleName.filter(
  a => a.startsWith(`J`) || a.startsWith(`P`)
);
console.log(startWithJp);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let startWithAc = peopleName.filter(
  a => a.startsWith(`A`) || a.startsWith(`C`)
).length;
console.log(startWithAc);
// Log all the filtered male ('M') in persons array
let male = [...persons].filter(a => a.sex === `M`);
console.log(male);
// Log all the filtered female ('F') in persons array
let female = [...persons].filter(a => a.sex === `F`);
console.log(female);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let startWihCj = [...persons]
  .filter(a => a.sex == `F`)
  .filter(a => a.name.startsWith(`C`) || a.name.startsWith(`J`));
console.log(startWihCj);

// Log all the even numbers from peopleGrade array
let evenNum = peopleGrade.filter(num => num % 2 === 0);
console.log(evenNum);
// Find the first name that starts with 'J' in persons array and log the object
let startWithJ = persons.find(p => p.name.startsWith(`J`));
console.log(startWithJ);
// Find the first name that starts with 'P' in persons array and log the object
let startWithP = persons.find(p => p.name.startsWith(`P`));
console.log(startWithP);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let nameJ = [...persons].find(
  a => a.name.startsWith(`J`) && a.grade > 10 && a.sex == `F`
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
let highestGrade = [...peopleGrade].sort((a, b) => a - b).pop();

console.log(highestGrade);
// Find the highest grade in male
let highestGradeMale = [...malePersons].sort((a, b) => a.grade - b.grade).pop();
console.log(highestGradeMale);
// Find the highest grade in female
let highestFemaleGrade = [...femalePersons]
  .sort((a, b) => a.grade - b.grade)
  .pop();
console.log(highestFemaleGrade);
// Find the highest grade for people whose name starts with 'J' or 'P'
let nameWithJorP = persons.filter(
  a => a.name.startsWith(`J`) || a.name.startsWith(`P`)
);
let gradeWithNameJorP = nameWithJorP.map(a => a.grade);
[...gradeWithNameJorP].sort((a, b) => a - b).pop();
console.log(gradeWithNameJorP);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

console.log(peopleGrade.sort((a, b) => a - b));

// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let descendingGrade = [...peopleGrade].sort((a, b) => b - a);
console.log(descendingGrade);
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort((a, b) => a - b));
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort((a, b) => a - b));
