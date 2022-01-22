let numbers = [1, 2, 3];
numbers.concat(4); //[1,2,3,4]
let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
sentanceArray.concat("dog"); //"A quick brown fox jumped over a lazy dog"
let colors = ["red", "green", "blue"];
colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]

console.log(sentanceArray.concat(`dog`));
