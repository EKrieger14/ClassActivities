const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstA = arr.indexOf("a")
const firstB = arr.indexOf("b")
const firstC = arr.indexOf("c")

// find the last index of "a", "b", and "c"
const lastA = arr.lastIndexOf("a")
const lastB = arr.lastIndexOf("b")
const lastC = arr.lastIndexOf("c")

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

while (arr.indexOf("b") !== arr.lastIndexOf("b")) {
  const lastIndex = arr.lastIndexOf("b")
  arr.splice(lastIndex, 1)
}

console.log(arr)
