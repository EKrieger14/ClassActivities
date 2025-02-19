// create a constant variable called "name" that references a string
const name = "Michael";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "My immortal";
// create a reassignable variable called "wage" that references a number
let wage = 36;
// create a variable called "age" that references a number, should it be reassignable?
let age = 39;
// create a variable called "onlyChild" that references a boolean
let onlyChild = true;
// create a variable called "satisfied" that references a boolean
const satisfied = false;
// print the types of two variables that reference two different data types (typeof)
// print name and age
console.log(typeof name);
console.log(typeof age);
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "thing";
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "new favorite song";

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = true;
console.log(typeof favoriteThing);

// Happy Birthday!
// Reassign "age" to a new value
age = 28;

// You got a big raise at work.
// Reassign "wage" to a new value
wage = 20;

// Your raise changed your job satisfaction.
// Assign "satisfied" to true
// satisfied has an error, because it was declared using const
// satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "Hi, my name is " + name + " and my favorite thing is " + favoriteThing
);

console.log(`Hi, my name is ${name} and my favorite thing is ${favoriteThing}`);
