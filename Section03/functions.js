// Write function that output your favorite drink, you must use a parameter for the drink
function favoriteDrink(drink) {
  console.log(drink);
}
favoriteDrink('pepsi')
favoriteDrink('dr pepper')

// Write a function that outputs your favorite pizza toppings and returns your favorite pizza brand
// Hint: use a rest parameter
function favoritePizza(brand, ...toppings) {
  console.log(toppings);
  return brand;
}
const pizzaBrand = favoritePizza('Romas', 'pineapple', 'ham', 'cheese', 'sauce')
console.log("I love pizza from " + pizzaBrand)


// Write a function that multipys two numbers... set the both numbers to default to 1.
function numbers(num1 = 1, num2 = 1) {
  console.log(num1 * num2);
}
numbers();
numbers(2, 4)
numbers(5)
