// TODO: using the function expressions below, refactor them into function declarations
// Function Expression
const greet = function() {
  console.log("Hello!");
};
// refactored as Function Declaration
function greet2() {
  console.log("Hello!");
}


// Function Expression
const threeModTwo = function() {
  console.log(3 % 2);
};
// refactored as Function Declaration
function threeModTwoDeclaration() {
  console.log(3 % 2);
}


let age = 18;
// Function Expression
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// refactored as Function Declaration
function checkDrivingAge2() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
