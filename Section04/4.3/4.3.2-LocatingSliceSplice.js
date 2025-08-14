const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a"); // 0
let firstB = arr.indexOf("b"); // 2
let firstC = arr.indexOf("c"); // 4

// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a"); // 6
let lastB = arr.lastIndexOf("b"); // 8
let lastC = arr.lastIndexOf("c"); // 12

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicate(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);

  while (firstIndex !== array.lastIndexOf(duplicatedValue)) {
    array.splice(array.lastIndexOf(duplicatedValue), 1);
  }
}
removeDuplicate(arr, "a");
removeDuplicate(arr, "b");
removeDuplicate(arr, "c");

console.log(arr);
