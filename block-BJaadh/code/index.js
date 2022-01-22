// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
let newArray = [...numbers];
let final = newArray.sort((a, b) => a - b);
// console.log(final);

// - Find the index of `101` in numbers
// console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
// console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
// console.log(strings.join(` `));
// - Add two new words in the strings array "called" and "sentance"
strings = strings + ` ` + `called ` + `sentance`;
// console.log(strings);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
// console.log(strings.join(` `));
// - Remove the first word in the array (strings).

// console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
for (let i = 0; i <= strings.length; i++) {}
// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
// console.log(numbers.every(num => num % 3 === 0));
// -  Sort Array from smallest to largest
let newNumbers = numbers.sort((a, b) => a - b);
// console.log(newNumbers);
// - Remove the last word in strings
// console.log(strings.pop());
// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
// numbers.forEach(function (element) {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

let evenNumbers = numbers.filter(em => em % 2 === 0);
console.log(evenNumbers);
// - Find all the odd numbers
let oddNumbers = numbers.filter(em => em % 2 !== 0);
console.log(oddNumbers);
// - Place a new word at the start of the array use (unshift)
// console.log(strings.unshift(`all`));
// console.log(strings.unshift(`All`));
// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881
// numbers.replace(12 & 18, 1221, 1881);
// console.log(numbers);
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
for (let name of customers) {
  if (name.firstname[0] === `J`) {
    console.log(name.firstname);
  }
}
// - Create new array with only first name
let firstName = [];
for (let name of customers) {
  // console.log(name[0]);
}
// console.log(firstName);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = [];
for (let name of customers) {
  fullName.push(name);
}
// console.log(fullName);
// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel = []
for (let name of customers) {
  name.
}