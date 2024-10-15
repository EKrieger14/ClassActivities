// select the root node
console.log(document.querySelector("html"));

let root = document.querySelector("html");
// select the last child of the root node
root.lastElementChild;

// above is same as:
document.querySelector("html").lastElementChild;

// select all the children of the body element
// select the body element
let body = document.querySelector("body");
console.log(body.children);
console.log(body.lastElementChild);

document.querySelector("body").children;

// select the next sibling of the h2 node
// select the h2 node
document.querySelector("h2").nextElementSibling;

let h2 = document.querySelector("h2");
h2.nextElementSibling;
// select the parent element of the h1 node
document.querySelector("h1").parentElement;
