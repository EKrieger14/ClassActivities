const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const merged = arrOne.concat(arrTwo, 4, "e")

const flat = merged.join(",")

const split = flat.split(",")

// print the new, merged array
console.log(merged)

// join the merged array and print the result
console.log(merged.join(","))

console.log("split", split)
