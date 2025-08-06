// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function twoParams(param1, param2) {
  console.log(param1, param2);
  return param1 + param2;
}

// invoke the function and pass in two numbers
twoParams(5, 10);
// prints 5 10
// returns 15

// invoke the function and pass in more than two numbers
twoParams(5, 10, 20);
// prints 5 10
// returns 15

// invoke the function and pass in only one number
twoParams(15);
// prints 15 undefined
// returns NaN

// change the function to set default values for the parameters
function twoDefaultParams(param1 = 20, param2 = 5) {
  console.log(param1, param2);
  return param1 + param2;
}
// again, invoke the function and pass in only one number
twoDefaultParams(100);
// print 100, 5
// return

twoDefaultParams();
// print 20, 5
// return

twoDefaultParams(30, 50);
// print 30, 50
// return

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function twoDefaultParamsWithRestParam(param1 = 20, param2 = 5, ...lastParam) {
  console.log(param1, param2);
  console.log(lastParam);
  return param1 + param2;
}
// again, invoke the function and pass in more than two numbers
twoDefaultParamsWithRestParam(5, 10, 20, 50, 250, 48, 99);
