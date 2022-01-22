let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Add a new element ('Papaya') into fruits array at end
fruits.push(`Papaya`);
// console.log(fruits);
// Remove the last element from fruits array
fruits.pop();
// console.log(fruits);
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
// console.log(fruits);
let array = fruits.values();
for (value of array) {
  console.log(value);
}
// Log the element on index 0 and 1
console.log(fruits[(0, 1)]);
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();
console.log(fruits);
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift(`Guava`);
fruits.splice(0, 0, `Guava`);
console.log(fruits);
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift(`Dragon Fruit`);
console.log(fruits);
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
console.log(fruits[0] === `Dragon Fruit` && fruits[1] === `Guava`);
// Update the value of index 1 to `Pears`
fruits[1] = `Pears`;
console.log(fruits);
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1, 0, `Kiwi`, `Lemon`);
// console.log(fruits);
// Remove (slice) all the element from index 5
console.log(fruits.slice(5));
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ["Berries", "Melons"];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits = fruits.concat(fruits);

// Log the name of all fruit in console
fruits.forEach(fruit => console.log(fruits));
// Convert each fruit name to lowercase and log it
for (eachFruit of fruits) {
  console.log(eachFruit.toLowerCase());
}
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = fruits.map(fruit => fruits.toLowerCase());
// allFruits.forEach(function (cb) {
//   return lowercaseFruits.push(cb.toLowerCase());
// });
// console.log(lowercaseFruits);

// Convert all fruits name into uppercase and store in new array named uppercaseFruits

let uppercaseFruits = fruits.map(fruit => fruits.toUpperCase());
// allFruits.forEach(function (cb) {
//   return uppercaseFruits.push(cb.toUpperCase());
// });
// console.log(uppercaseFruits);

//

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat());
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
console.log(numbersTwo.flat(2));
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

// Convert the numbersThree array to one level element.
numbersThree.flat(Infinity);
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
let newNumbers = numbersThree.flat(Infinity);

// Use forEach to log all the elements of numberThree array
newNumbers.forEach(function (num) {
  console.log(num);
});
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = numbersThree.flat(Infinity).map(element => element * 2);
console.log(doubleNumbers);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = numbersThree.flat(Infinity).map(ele => ele * 3);
console.log(tripleNumbers);
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = numbersThree.flat(Infinity).map(ele => ele / 2);
console.log(halfNumbers);
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = numbersThree.filter(elm => ele % 2 !== 0);
// numbersThree.flat(Infinity).map(function (ele) {
//   if (ele % 2 !== 0) {
//     oddNumbers.push(ele);
//   }
// });
// console.log(oddNumbers);
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = numbersThree.filter(elm => ele % 2 === 0);
// numbersThree.flat(Infinity).map(function (ele) {
//   if (ele % 2 === 0) {
//     evenNumbers.push(ele);
//   }
// });
// console.log(evenNumbers);
// Find the index of 10 in numbersThree array
console.log(numbersThree.flat(Infinity).indexOf(10));
// Reverse the values of numbersThree array
console.log(numbersThree.flat(Infinity).reverse());
// Reverse the values of numbersTwo array
console.log(numbersTwo.flat(Infinity).reverse());
// Join all fruits with '-', convert to uppercase and log it
console.log(allFruits.join("-")).toUpperCase();
// Join all fruits with '&', convert to lowercase and log it
console.log(allFruits.join(" & ")).toLowerCase();
