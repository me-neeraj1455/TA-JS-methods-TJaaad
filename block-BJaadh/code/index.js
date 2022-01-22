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
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(` `));
// - Add two new words in the strings array "called" and "sentance"
// strings = strings + ` ` + `called ` + `sentance`;
strings.splice(0,0,`called`,`sentance`)
// console.log(strings);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(` `));
// - Remove the first word in the array (strings).

console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((st) => strings.includes(`is`));
// - Find all the words that contain 'is' use string method 'indexOf'
let allIsAgain = strings.filter((st) => strings.indexOf(`is`)!==-1);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every(num => num % 3 === 0)
// -  Sort Array from smallest to largest
let newNumbers = numbers.sort((a, b) => a - b)
// console.log(newNumbers);
// - Remove the last word in strings
console.log(strings.pop());
// - Find largest number in numbers
let largeNum=[...numbers].sort((a, b) => a - b).pop()
// - Find longest string in strings
let longString=[...strings].sort((a, b) => a.length - b.length).pop()
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
console.log(strings.unshift(`all`));
console.log(strings.unshift(`All`));
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3,7));
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(3,4));
// - Replace 12 & 18 with 1221 and 1881

numbers.splice(numbers.indexOf(12),1,1221)
//
// - Replace words in strings array with the length of the word
let stringLength=strings.map((string)=>strings.length));
// - Find the sum of the length of words using above question
stringLength.reduce((acc,elm)=>acc+elm,0)
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

let filterCustomer=customers.filter((customers)=>customers.firstname.startsWith(`J`))
// - Create new array with only first name
let fristNameCustomer=customers.map((customers)=>`${customer.firstname}`)
// console.log(firstName);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = [];
for (let name of customers) {
  fullName.push(name);
}
// console.log(fullName);
// - Sort the array created above alphabetically
[...fullName].sort()
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes(`a`) ||
    customer.firstname.toLowerCase().includes(`e`) ||
    customer.firstname.toLowerCase().includes(`i`) ||
    customer.firstname.toLowerCase().includes(`o`) ||
    customer.firstname.toLowerCase().includes(`u`)
  ) {
    return true
  } else {
    return false
  }
})