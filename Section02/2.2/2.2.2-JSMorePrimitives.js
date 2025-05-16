// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const name = "Colt";
let age = 34;
let isEmployed = true;
let myVariable;
let myEmptyVariable = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof name)
console.log(typeof age)
console.log(typeof isEmployed)
console.log(typeof myVariable)
console.log(typeof myEmptyVariable)

// create a variable that references a template literal
// inside the template literal, use two of the above variables

const template =  `"My name is ${name} and I am ${age} years old"`
console.log(template);

// reassign the value of the variable that references "null"
myEmptyVariable = "I have a value now"

// print the value and its type
console.log(myEmptyVariable)
console.log(typeof myEmptyVariable)

// print a variable that causes a ReferenceError
let doesNotExist = 0
console.log(doesNotExist)
// console.log(myNumber = 7)

// alter the previous line to no longer cause a ReferenceError
