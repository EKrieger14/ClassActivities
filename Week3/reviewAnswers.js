// Level 1
function greet(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}


// Level 2
function doubleNumber(num) {
    return num * 2;
}

// Level 3

function isPositive(num) {
    if (num <= 0) {
        return false;
    }
    return true;
}

// Level 4
const colors = ["red", "green", "blue"];
console.log(colors[1]); // Output: "green"

//Level 5
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length - 1); // Output: 5


// Level 6
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 }
];
console.log(students[0].name); // Output: "Alice"


// Level 7
const fruits = ["apple", "banana", "cherry"];
const newFruitsArray = [];

let index = 0;

for (const fruit of fruits) {
  newFruitsArray[index] = fruit;
  index++;
}

// Level 8
const librarySystem = {
    branches: {
      mainBranch: {
        books: [
          { title: "1984", author: "George Orwell", publisher: "Secker & Warburg" },
          { title: "Brave New World", author: "Aldous Huxley" }
        ],
        manager: { name: "Alice Smith", email: "alice@library.com" }
      },
      westBranch: {
        books: [
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
            { title: "Moby Dick", author: "Herman Melville" },
            { title: "The Catcher in the Rye", author: "J.D. Salinger" },
            { title: "Crime and Punishment", author: "Fyodor Dostoevsky" }
        ],
        manager: { name: "Bob Johnson" }
      },
      eastBranch: {
        books: [
            { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
            { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling" },
            { title: "The Hobbit", author: "J.R.R. Tolkien" },
            { title: "The Alchemist", author: "Paulo Coelho" }
        ],
        manager: { name: "Sarah Thompson", email: "sarah@library.com" }
    }
    },
    systemInfo: {
      establishedYear: 1985
      // certification is optional
    }
  };
  
  // 1. Check if the manager of mainBranch has an email property
  const branchName = "mainBranch";
  console.log("email" in librarySystem.branches[branchName].manager); // Output: true
  
  // 2. Check if the first book in mainBranch has a publisher property
  console.log("publisher" in librarySystem.branches[branchName].books[0]); // Output: true
  
  // 3. Verify if systemInfo has the certification property
  console.log("certification" in librarySystem.systemInfo); // Output


  // 4. 
  // Challenge: Add a function listBooks to the librarySystem object. 
  // The function should take the name of a branch (mainBranch or westBranch or eastBranch)
  // as an argument and log the titles of the books in that branch.

  listBooks(branchName) {
    const branch = this.branches[branchName];
    if (branch) {
        console.log(`Books in ${branchName}:`);
        for (let book of branch.books) {
            console.log(book.title);
        }
    } else {
        console.log("Branch not found.");
    }
};

// Example Usage
librarySystem.listBooks("mainBranch");
// Output:
// Books in mainBranch:
// 1984
// Brave New World


