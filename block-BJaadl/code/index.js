let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let longestWord = [...words];

longestWord.sort((a, b) => a.length - b.length);
console.log(longestWord.slice(longestWord.length - 1));

// - Convert the above array "words" into an array of length of word instead of word.
let lengthOfWord = words.map(arr => arr.length);
console.log(lengthOfWord);

// - Create a new array that only contains word with atleast one vowel.
let vowelArray = words.filter(cb =>
  cb.includes(`a` || `e` || `i` || `o` || `u`)
);
console.log(vowelArray);

// - Find the index of the word "rhythm"
console.log(words.indexOf(`rhythm`));
// - Create a new array that contians words not starting with vowel.
let noStartVowel = words.filter(
  arr => arr[0] !== (`a` || `e` || `i` || `o` || `u`)
);
console.log(noStartVowel);
// - Create a new array that contianse words not ending with vowel
let noEndVowel = words.filter(
  arr => arr[arr.length - 1] !== (`a` || `e` || `i` || `o` || `u`)
);
console.log(noEndVowel);
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(acc, cv) {
  return acc + cv;
}
let sum = numbers.reduce(sumArray, 0);

// let sum = numbers.reduce((acc, cv, index, arr) => acc + cv, 0);
console.log(sum);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplied = numbers.map(cb => cb * 3);
console.log(multiplied);
// - Create a new array that contains only even numbers
let evenNum = numbers.filter(num => num % 2 === 0);
console.log(evenNum);

// - Create  a new array that contains only odd numbers.
let oddNum = numbers.filter(num => num % 2 !== 0);
console.log(oddNum);
// - Create a new array that should have true for even number and false for odd numbers.
// let bothNum = [];
function check(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let bothNum = numbers.map(check);
console.log(bothNum);
// - Sort the above number in assending order.
let assendingNum = [...numbers];
assendingNum.sort((a, b) => a - b);
console.log(assendingNum);
// - Does sort mutate the original array?//yes
(" sort()method  mutate the original array and return the reference . ");
// - Find the sum of the numbers in the array.
// let sum = numbers.reduce((acc, cv, index, arr) => acc + cv, 0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(acc, cv) {
  return acc + cv;
}

let average = numbers.reduce(averageNumbers, 0);
console.log(average / numbers.length);

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(array) {
  return array.length;
}
let wordLenth = strings.map(averageWordLength);
console.log(wordLenth);
