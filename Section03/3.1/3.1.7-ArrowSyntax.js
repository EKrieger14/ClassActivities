// refactor the functions below into arrow syntax
// Syntax for both Concise and Block Arrow syntax
// You'll need to decided which syntax to use

// for example the following function:
function printName(name) {
  console.log(`My Name is ${name}`);
}
// could be rewritten with concise arrow syntax:
const printNameConcise = name => console.log(`My Name is ${name}`);
// or block arrow syntax
const printNameBlock = name => {
  console.log(`My Name is ${name}`);
};

function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
// Return is implicit with concise
const myNumberFunctionConcise = () => ((2 ** 2 + 3) % 4) * 14;
// Block body, return is explicit
const myNumberFunctionBlock = () => {
  return ((2 ** 2 + 3) % 4) * 14;
};

function greet(name) {
  return `Hello, ${name}`;
}
// concise
const greetConcise = name => `Hello, ${name}`;
// block
const greetBlock = name => {
  return `Hello, ${name}`;
};

const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};
// concise
const timeOfDayGreetConcise = (name, timeOfDay) =>
  `Hello, ${name}, good ${timeOfDay}`;

function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
// Block
const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};

function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
// Block
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
