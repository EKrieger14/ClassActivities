// create an Array using an Array literal
const names = ["Chris", "Matt", "Fred", "Bob", "Sue"];
// access the 1st item in the Array
console.log(names[0]);
// access the last item in the Array
console.log(names[4]);
// print the length of the Array
console.log(names.length); // 5
// use the length property to access the last item in the Array
const lastIndex = names.length - 1; // 5 - 1 = 4
console.log(names[lastIndex]);
// or preferred
console.log(names[names.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
const list = [];
for (let name of names) {
  const greeting = `My name is ${name}.`;
  list.push(greeting);
}
console.dir(list);
