// Different types of loops:

// for loop - loops through a block of code a specified number of timeStamp.
var i = 5;
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
// i = 10 here

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// i = 5 here

// for...in loop - loops through the properties of object
const person = {
  fname: "Riddhi",
  lname: "Damani",
  age: 25,
};
let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

// for.. in over arrays:
const numbers = [45, 9, 4, 16, 16];
const num1 = new Set(numbers);
let text1 = "";
for (let i in numbers) {
  text1 += numbers[i];
}

numbers.forEach((e) => console.log(e));
console.log(num1);

// for...of loop -  loops through the values of iterable object - String, Array, Map, NodeLists

let language = "JavaScript";

let text2 = "";
for (let x of language) {
  text2 += x;
}
console.log(text2);
// while - loops through a block of code while a specified condition is True
