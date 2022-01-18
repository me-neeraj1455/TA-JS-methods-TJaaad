Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
3. `toLowerCase`
4. `trim`
5. `trimEnd`
6. `trimStart`
7. `concat`
8. `endsWith`
9. `includes`
10. `indexOf`
11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`


``let user='Altcampus'
user.replace('campus','school');
'Altschool'
let user='Altcampus'
user.replace('s','l');
'Altcampul'
let user='Altcampus is an alternate school of programming in the Himanchal Dharmashala India'
user.replace('s','l');

user.slice();
'Altcampus is an alternate school of programming in the Himanchal Dharmashala India'
let user='Altcampus is an alternate school of programming in the Himanchal Dharmashala India'

user.slice(" ");
'Altcampus is an alternate school of programming in the Himanchal Dharmashala India'
let user='Altcampus is an alternate school of programming in the Himanchal Dharmashala India'

user.split(' ');
(12) ['Altcampus', 'is', 'an', 'alternate', 'school', 'of', 'programming', 'in', 'the', 'Himanchal', 'Dharmashala', 'India']0: "Altcampus"1: "is"2: "an"3: "alternate"4: "school"5: "of"6: "programming"7: "in"8: "the"9: "Himanchal"10: "Dharmashala"11: "India"length: 12[[Prototype]]: Array(0)
let user='Altcampus is an alternate school of programming in the Himanchal Dharmashala India'

user.substring(10,5);
'mpus '
let user='Altcampus is an alternate school of programming in the Himanchal Dharmashala India'
user.replace('s','l');

user.slice(-10,-1);
'hala Indi'
let user='Altcampus is an alternate school of programming in the Himanchal Dharmashala India'
user.replace('s','l');

user.slice(-10,-1);
'hala Indi'

