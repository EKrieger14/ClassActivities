// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
// functionWithTwoParams
function functionWithTwoParams(param1, param2) {
  console.log(param1);
  console.log(param2);

  return param1 + param2;
}

// invoke the function and pass in two numbers
functionWithTwoParams(5, 10);
// what is printed: 5 and 10
// what is returned: 15

// invoke the function and pass in more than two numbers
functionWithTwoParams(5, 10, 15, 20);
// what is printed: 5 and 10
// what is returned: 15

// invoke the function and pass in only one number
console.log(functionWithTwoParams(5));
// what is printed: 5 and undefined
// what is returned: 5 + undefined

// change the function to set default values for the parameters
function functionWithTwoDefaultParams(param1 = 10, param2 = 15) {
  console.log(param1);
  console.log(param2);

  return param1 + param2;
}
// again, invoke the function and pass in only one number
functionWithTwoParams(5);
// what is printed: 5 and 15
// what is returned: 20

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParams(
  paramTen = 10,
  paramInfinity = 15,
  ...myRestParam
) {
  console.log(paramTen);
  console.log(paramInfinity);
  console.log(myRestParam);
  return paramTen + paramInfinity;
}

// again, invoke the function and pass in more than two numbers
functionWithRestParams(1, 2, 3, 4, 5, 6, 7, 8);
