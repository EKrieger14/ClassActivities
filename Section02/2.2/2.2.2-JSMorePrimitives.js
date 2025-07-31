// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let car = 'Jeep';
let year = 2012;
let goodGasMilage = false;
let desireToSell = null;
let creativity;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof car, typeof year, typeof goodGasMilage, typeof desireToSell);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let carStr = `I own a ${car} that is from the year ${year}.`

// reassign the value of the variable that references "null"
desireToSell = false;
// print the value and its type
console.log(desireToSell, typeof desireToSell);
// print a variable that causes a ReferenceError
// console.log(iAmAReferenceError);

// alter the previous line to no longer cause a ReferenceError
let iAmAReferenceError;
console.log(iAmAReferenceError);
