// NOTE: You can not use reduce methods to solve this exercise

let count = got.houses.map(a => a.people.length).flat(Infinity);
function countAllPeople(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
}

console.log(countAllPeople(count));

let peopleCount = got.houses.map(a => a);
function peopleByHouses(array) {
  let final = {};
  got.houses.forEach(house => {
    final[house.name] = house.people.length;
  });
  return final;
}
console.log(peopleByHouses(peopleCount));

let allPeople = got.houses.map(a => a.people).flat(Infinity);
function everyone(array) {
  let allPeopleName = [];
  for (let people of array) {
    allPeopleName.push(people.name);
  }
  return allPeopleName;
}
console.log(everyone(allPeople));

let people = got.houses.map(a => a.people).flat(Infinity);
let peopleName = people.map(a => a.name);
function nameWithS(array) {
  let nameStartWithS = [];
  for (let name of array) {
    if (name.charAt(0) === `s` || name.charAt(0) === `S`) {
      nameStartWithS.push(name);
    }
  }
  return nameStartWithS;
}
console.log(nameWithS(peopleName));

let people = got.houses.map(a => a.people).flat(Infinity);
let peopleName = people.map(a => a.name);

function nameWithA(array) {
  let nameStartWithA = [];
  for (let name of array) {
    if (name.includes(`a`) || name.includes(`A`)) {
      nameStartWithA.push(name);
    }
  }
  return nameStartWithA;
}
console.log(nameWithA(peopleName));

let surname = got.houses
  .map(a => a.people)
  .flat(Infinity)
  .map(a => a.name);

function surnameWithS(array) {
  let withS = [];
  for (let name of array) {
    if (name.split(` `)[1].charAt(0) === `S`) {
      withS.push(name);
    }
  }
  return withS;
}
console.log(surnameWithS(surname));

let surname = got.houses
  .map(a => a.people)
  .flat(Infinity)
  .map(a => a.name);

function surnameWithA(array) {
  let withA = [];
  for (let name of array) {
    if (name.split(` `)[1].charAt(0) === `A`) {
      withA.push(name);
    }
  }
  return withA;
}
console.log(surnameWithA(surname));

let allPeople = got.houses.map(a => a);

function peopleNameOfAllHouses(array) {
  let final = {};
  got.houses.forEach(a => {
    final[a.name] = a.people.map(a => a.name);
  });
  return final;
}
console.log(peopleNameOfAllHouses(allPeople));

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
