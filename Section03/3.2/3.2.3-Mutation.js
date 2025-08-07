let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0;
y = false;
z = "";

// print x, y, and z

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = "";
// b = false;
// c = 0;

console.log(a, b, c);

// using BRACKET NOTATION, assign a value to b
b[5] = "Max";
console.log(b);
for (let name of b) {
  console.log(name);
}
// using DOT NOTATION, assign a PROPERTY to c
c.name = "Matt";
console.log(c);
// using DOT NOTATION, assign a METHOD to c
c.talk = function() {
  if ("name" in this) {
    console.info(`My name is ${this.name}`);
  } else {
    console.error("I don't have anything to say");
  }
};
// using BRACKET NOTATION, call the method in c
c.talk();
// print a, b, and c
