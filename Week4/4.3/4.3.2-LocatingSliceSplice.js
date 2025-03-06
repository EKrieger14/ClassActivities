const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
// find the last index of "a", "b", and "c"
const firstIndexA = arr.indexOf("a");
const lastIndexA = arr.lastIndexOf("a");

const firstIndexB = arr.indexOf("b");
const lastIndexB = arr.lastIndexOf("b");

const firstIndexC = arr.indexOf("c");
const lastIndexC = arr.lastIndexOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
let lastA = arr.lastIndexOf('a')

while (arr.indexOf('a') !== arr.lastIndexOf('a')) {
    arr.splice(lastA, 1)
}


console.log(arr)
