// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
// string
let name = "SavvyCoders";
// number
let age = 39;
// boolean
let satisfied = true;
// undefined
let favoriteThing;
// null
let empty = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof name,
  typeof age,
  typeof satisfied,
  typeof favoriteThing,
  typeof empty
);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
// age and name
let myInfo = `Hi, my name is ${name} and I am ${age} years old.`;

// reassign the value of the variable that references "null"
empty = "blue";
// print the value and its type
console.log(empty, typeof empty);
// print a variable that causes a ReferenceError
let favoriteSong;
console.log(favoriteSong);
// alter the previous line to no longer cause a ReferenceError
