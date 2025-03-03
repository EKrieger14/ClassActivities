// Create an Array using an Array literal
const fruits = ["Apple", "Banana", "Cherry", "Date"];

// Access the 1st item in the Array
console.log(fruits[0]);

// Access the last item in the Array
console.log(fruits[fruits.length - 1]);

// Print the length of the Array
console.log(fruits.length);

// Use the length property to access the last item in the Array
const lastItem = fruits[fruits.length - 1];
console.log(lastItem);

// With for...of, loop over the Array, modify the value and add to a different Array
const modifiedFruits = [];
for (const fruit of fruits) {
    modifiedFruits.push(fruit.toUpperCase()); // Convert each fruit name to uppercase
}

console.log(modifiedFruits);
