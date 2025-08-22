// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let i = 0;
// 2) create a variable to represent the current total
let total = 0;
// 3) write a while loop that sums the numbers from 1 to 100


while(i <= 100) {
  console.log(i);
  total = total + i;
  console.log(total)
  i++;
}

// For loop to print the cumulative addition of all numbers from 1 to 100
for (let i = 0; i <= 100; i++) {
  console.log(i);
  total = total + i;
  console.log(total);
}
