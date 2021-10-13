// // -------------Pure Functions-------------

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(1, 5)); // 6
// console.log(add(12, 15)); // 27

// function addRandom(num1) {
//   return num1 + Math.random();
// }

// console.log(addRandom(5));

// // -------------Impure Functions-------------

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

// -------------Factory Functions-------------

// let multiplier = 1.1;

// function createTaxCalculator(tax) {
//   function calculateTax(amount) {
//     return amount * tax * multiplier;
//   }
//   return calculateTax;
// }

// const claculateVatAmount = createTaxCalculator(0.19);
// const claculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

// console.log(claculateVatAmount(100));
// console.log(claculateIncomeTaxAmount(200));

// // -------------Scopes and environments-------------

// let userName = "Max";

// function greetUser() {
//   // let name = 'Anna';
//   console.log("Hi " + name);
// }

// let name = "Maximilian";

// userName = "Manuel";

// greetUser();

// -------------Recursion-------------

// function powerOf(x, n) {
//   //   if (n === 1) {
//   //     return x;
//   //   }
//   //   return x * powerOf(x, n - 1);

//   return n === 1 ? x : x * powerOf(x, n - 1);
// }

// console.log(powerOf(2, 3));

// -------------Advanced Recursion-------------

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Chris",
          friends: [
            {
              name: "Hari",
            },
            {
              name: "Amilia",
            },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
