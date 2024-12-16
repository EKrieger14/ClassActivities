const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
// find the last index of "a", "b", and "c"

const firstIndexA = arr.indexOf("a");
const lastIndexA = arr.lastIndexOf("a");

const firstIndexB = arr.indexOf("b");
const lastIndexB = arr.lastIndexOf("b");

const firstIndexC = arr.indexOf("c");
const lastIndexC = arr.lastIndexOf("c");

console.log(`First index of "a": ${firstIndexA}, Last index of "a": ${lastIndexA}`);
console.log(`First index of "b": ${firstIndexB}, Last index of "b": ${lastIndexB}`);
console.log(`First index of "c": ${firstIndexC}, Last index of "c": ${lastIndexC}`);


// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

while (arr.indexOf("a") !== arr.lastIndexOf("a")) {
    arr.splice(arr.lastIndexOf("a"), 1); // Remove the last instance of "a"
  }
  
  console.log("Array after removing duplicate 'a's:", arr);