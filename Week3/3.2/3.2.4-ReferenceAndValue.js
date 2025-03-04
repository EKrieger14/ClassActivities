// comparing and passing by reference and value
// ? determine whether each log will print true or false

// console.log(4 === 4);
// console.log("Hello, world" === "Hello, world");

// let x = false;
// let y = x;
// console.log(x === y); // true
// x = !x;
// console.log(x === y); // false

// console.log([1, 2, "c"] === [1, 2, "c"]); // false
// console.log({} === {}); // false

// y = { id: 1 };
// x = y;
// console.log(x === y); // true
// y.id += 1;
// console.log(x.id === y.id); // true


// function add(a,b) {
//  return a + b;
// }



// let sum = add(1,4);

// console.log(sum)

// const add = (a,b) => a + b

// console.log(add(4,4))

// const greet = () => "hello friend";

// console.log(greet())


const multiply = (a, b) => {
  let x = a*b
  return x
}

console.log(multiply(4,4))
console.log(multiply(4,40))
console.log(multiply(7,4))


