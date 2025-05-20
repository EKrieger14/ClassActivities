// bracket and dot notation
const key = "1";
const obj = {
  key:  console.log("the key is 'key'"),
  1:  console.log("the key is 1"),
};

// what will the following lines print?
obj[key]; // "key is 1"
obj.key; // "key is key"
obj["key"]; // key is key

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.

const myObj = {
  name: "Bob",
  age: 55,
  isCool: true,
  collection: {
    favoriteGames: ["Zelda", "Elden Ring", "Skyrim"]
  }
}

// Access a value in the "collection" property

// console.log(myObj.collection.favoriteGames[1]);


// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "LOTR",
  number: 88,
  color: "green"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// console.log(obj.favorites)

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key of keys) {
  // console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
// console.log(` My fav movie is ${obj.favorites["movie"]}`)

// Access the values "b", 4, and 6 from obj.list
// console.log(obj.list[1])
// console.log(obj.list[4][1])
// console.log(obj.list[5].f)


