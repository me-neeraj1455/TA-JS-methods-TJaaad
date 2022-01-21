Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

3. `flat`
4. `push`

5. `indexOf`
6. `lastIndexOf`
7. `includes`
8. `reverse`
9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
var array1 = [5, 12, 8, 130, 44];

array1.unshift(10)
14. `findIndex`
var array1 = [5, 12, 8, 130, 44];
array1.findIndex(currentValue=>currentValue%7===0)
15. `filter`
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


words.filter(word=>word.length>6)
16. `flat`
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

arr4.flat(Infinity)
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
17. `forEach`
18. `map`
var array1 = [1, 4, 9, 16];

let array2=array1.map(x => x*2)
array2
(4) [2, 8, 18, 32]
19. `pop`
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

plants.pop()
'tomato'
20. `reduce`
let array=[1,2,3,4,5]
array.reduce((acc,elem)=>acc+elem);
15
21. `slice`
let array=[1,2,3,4,5]
array1.slice(1,4)
(3) [2, 3, 4]
22. `some`
var array = [1, 2, 3, 4, 5];
array.some((num)=>num%2===0)
true