// select the root node
const root = document.querySelector("html");
// select the last child of the root node
const lastRootChild = root.lastElementChild;
console.log(lastRootChild);
// select all the children of the body element
console.log(document.querySelector("body").children);
// select the next sibling of the h2 node
console.log(document.querySelector("h2").nextElementSibling);

const h2Sibling = document.querySelector("h2").nextElementSibling;
console.log(h2Sibling);

// select the parent element of the h1 node
console.log(document.querySelector("h1").parentElement);
