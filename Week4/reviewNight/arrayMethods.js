// Challenge 1: String Manipulation Basics
// Write a function that takes a string as input and returns the string in uppercase.

function toUpperCaseString(str) {
    return str.toUpperCase();
}
console.log(toUpperCaseString("hello world"));


// Challenge 2: Finding Substring Index
//  Find both indices of the word "fox" in the sentence "The quick brown fox jumps over the lazy fox."

const sentence = "The quick brown fox jumps over the lazy fox.";
const firstIndex = sentence.indexOf("fox");
const lastIndex = sentence.lastIndexOf("fox");
console.log(`The first index is ${firstIndex}, and the last index is ${lastIndex}.`);

// Challenge 3: Combining Arrays
//  Combine ["apple", "banana"] and ["cherry", "date"] into a single array, and join the array into a string separated by commas.

const fruits1 = ["apple", "banana"];
const fruits2 = ["cherry", "date"];
const combined = fruits1.concat(fruits2);
console.log(combined.join(", ")); // Output: "apple, banana, cherry, date"

// Challange 4: Slicing and Splicing Arrays
// Grab the first three months of the year from an array of months ["Jan", "Feb", "Mar", "Apr", "May"]. Then, replace "Mar" with "March" in the original array.

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const sliced = months.slice(0, 3);
months.splice(2, 1, "March");
console.log(sliced); // Output: ["Jan", "Feb", "Mar"]
console.log(months); // Output: ["Jan", "Feb", "March", "Apr", "May"]

A
// Challange 5: Advanced String Manipulation
// Write a function that takes a string, converts it to uppercase, and returns both the uppercase string and the number of characters in it in an object.

function toUpperCaseAndCount(str) {
    return { uppercase: str.toUpperCase(), length: str.length };
}
console.log(toUpperCaseAndCount("hello"));

// CHallange 6:
// Add "grape" and "orange" to the array ["apple", "banana"]. Then, remove the second element and reverse the array.

const arr = ["apple", "banana"];
arr.push("grape", "orange");
arr.splice(1, 1); // Removes the second element
arr.reverse();
console.log(arr); // Output: ["orange", "grape", "apple"]

// Challange 7:
// Grab the middle elements of [1, 2, 3, 4, 5, 6, 7], then merge it with [8, 9] into a new array

const numbers = [1, 2, 3, 4, 5, 6, 7];
const middle = numbers.slice(2, 5);
const merged = middle.concat([8, 9]);
console.log(merged); // Output: [3, 4, 5, 8, 9]
