console.log("Hello, World!");

function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Outputs: 8

function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 4)); // Outputs: 6

function multiply(a, b) {
  return a * b;
}
console.log(multiply(7, 6)); // Outputs: 42

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

console.log(divide(20, 4)); // Outputs: 5
