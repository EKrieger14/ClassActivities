const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable

const lastItem1 = nums.pop(); 
const lastItem2 = nums.pop(); 

// remove each of the first two items with shift(), saving each item to a variable

const firstItem1 = nums.shift(); 
const firstItem2 = nums.shift();

// use push and unshift to add the variables back to the array in numerical order, 0-6

nums.push(lastItem1, lastItem2); 
nums.unshift(firstItem2, firstItem1); 

console.log("Final array in num order:", nums);