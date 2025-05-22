const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const last = nums.pop()
const secondLast = nums.pop()

// remove each of the first two items with shift(), saving each item to a variable

const first = nums.shift()
const second = nums.shift()

// use push and unshift to add the variables back to the array in numerical order, 0-6

nums.unshift(last, secondLast)
nums.push(first, second)

console.log(nums)
