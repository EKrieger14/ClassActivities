// TODO: using the function expressions below, refactor them into function declarations
// Function Expression
const greet = function() {
  console.log("Hello!");
};

// Function Declaration
function greetDeclaration() {
  console.log("Hello!");
}

// Function Expression
const threeModTwo = function() {
  console.log(3 % 2);
};

// Function Declaration
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

// Function Declaration
function checkDrivingAgeDeclaration() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
