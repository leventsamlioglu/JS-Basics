// // Pure Functions

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(1, 5)); // 6
// console.log(add(12, 15)); // 27

// function addRandom(num1) {
//   return num1 + Math.random();
// }

// console.log(addRandom(5));

// // Impure Functions

// let previousResult = 0;

// function addMoreNumbers(num1, num2) {
//   const sum = num1 + num2;
//   previousResult = sum; // Side effect
//   return sum;
// }

// console.log(addMoreNumbers(1, 5));

// const hobbies = ["Sports", "Cooking"];

// function printHobbies(h) {
//   h.push("NEW HOBBY"); // Side effect
//   console.log(h);
// }

// printHobbies(hobbies);

// Factory Functions

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const claculateVatAmount = createTaxCalculator(0.19);
const claculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(claculateVatAmount(100));
console.log(claculateIncomeTaxAmount(200));
