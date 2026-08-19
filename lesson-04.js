"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

console.log("Part one results:");

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: false
console.log(3 == "3"); // prediction: true
console.log("5" - 1); // prediction: 4
console.log("5" + 1); // prediction: 51
console.log(1 + true); // prediction:2
console.log(10 >= 10); // prediction:true
console.log(!(5 > 2)); // prediction:false
console.log(4 !== "4"); // prediction:true
console.log("b" > "a"); // prediction:true because it takes ASCII values of the letters.
console.log(0 === -0); // prediction:true

/*Output:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-04.js 
false
true
4
51
2
true
false
true
true
true
 */
// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.

console.log("Part two if else statement:");

const isOpen = "true"; //is shop open or closed set true or false here
if (isOpen === "true") {
  console.log("We are open to take orders!");
} else {
  console.log("We are closed!");
}

/*Output 1:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-04.js 
false
true
4
51
2
true
false
true
true
true
We are open to take orders!
Open 8:00 to 12:00
Welcome in
Medium
Large
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */
/*Output 2:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-04.js
false
true
4
51
2
true
false
true
true
true
We are closed!
Open 8:00 to 12:00
Welcome in
Medium
Large
asemahassan@Asemas-MacBook-Pro JS-Exercises %
 */

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.

console.log("Part three if else if statement:");

let orderSize = null;
let grossPrice = null;
const basePricePerItem = 5.0; //euros
let discountRate = 0.0;

/* if-else statements */
orderSize = 3; //change its value to check the outputs

if (isOpen === "true") {
  if (orderSize > 12) {
    console.log("Large order accepted, you get 10% discount on total.");
    discountRate = 0.1; //10% applied
  } else if (orderSize > 6) {
    console.log("Medium order accepted, you get 5% discount on total.");
    discountRate = 0.05; //5% applied
  } else {
    console.log("Small order accepted");
    discountRate = 0.0; //0% applied
  }
  // 2. Calculate prices
  grossPrice = orderSize * basePricePerItem;

  const discountedAmount = grossPrice * discountRate;
  const finalPriceToPay = grossPrice - discountedAmount;

  // 3. Log results formatted to two decimal places
  console.log("Price/Item:", basePricePerItem);
  console.log("Order Size/Quantity:", orderSize);
  console.log(`Subtotal: $${grossPrice.toFixed(2)}`);
  console.log(
    `Discount Applied: ${discountRate * 100}% (-$${discountedAmount.toFixed(2)})`,
  );
  console.log(`Total Price to Pay: $${finalPriceToPay.toFixed(2)}`);
} else {
  console.log("We can't take orders, we are closed!");
}

/*
We are open to take orders!
Large order accepted, you get 10% discount on total.
Price/Item: 5
Order Size/Quantity: 15
Subtotal: $75.00
Discount Applied: 10% (-$7.50)
Total Price to Pay: $67.50
Open 8:00 to 12:00
Welcome in
Medium
Large
asemahassan@Asemas-MacBook-Pro JS-Exercises %

We are open to take orders!
Medium order accepted, you get 5% discount on total.
Price/Item: 5
Order Size/Quantity: 7
Subtotal: $35.00
Discount Applied: 5% (-$1.75)
Total Price to Pay: $33.25
Open 8:00 to 12:00
Welcome in
Medium
Large
asemahassan@Asemas-MacBook-Pro JS-Exercises %

We are open to take orders!
Small order accepted
Price/Item: 5
Order Size/Quantity: 3
Subtotal: $15.00
Discount Applied: 0% (-$0.00)
Total Price to Pay: $15.00
Open 8:00 to 12:00
Welcome in
Medium
Large
asemahassan@Asemas-MacBook-Pro JS-Exercises %

We are closed!
We can't take orders, we are closed!
Open 8:00 to 12:00
Welcome in
Medium
Large
asemahassan@Asemas-MacBook-Pro JS-Exercises %
*/
// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];
//prediction:[false, 0 is falsy, truthy as "0" non empty string, falsy a complete empty string,
//  truthy as string with space, truthy as bread is a proper string, falsy, falsy]
console.log("Part four results of courtValues array in boolean:");
console.log(Boolean(courtValues[0])); // false
console.log(Boolean(courtValues[1])); // false
console.log(Boolean(courtValues[2])); // true
console.log(Boolean(courtValues[3])); // false
console.log(Boolean(courtValues[4])); // true
console.log(Boolean(courtValues[5])); // true
console.log(Boolean(courtValues[6])); // false
console.log(Boolean(courtValues[7])); // false
// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.
// * The provided day-based if chain, rewrite it as a switch beneath it:

console.log("Part five if else if and switch:");

const day = "Sunday";
//if else if statement
if (day === "Saturday") {
  console.log("Saturday:Open 7:00 to 14:00");
} else if (day === "Sunday") {
  console.log("Sunday:Open 8:00 to 12:00");
} else if (day === "Monday") {
  console.log("Monday:Closed today");
} else {
  console.log("Open 7:00 to 18:00");
}

//switch statement
switch (day) {
  case "Saturday":
    console.log("Saturday:Open 7:00 to 14:00");
    break;
  case "Sunday":
    console.log("Sunday:Open 8:00 to 12:00");
    break;
  case "Monday":
    console.log("Monday:Closed today");
    break;
  default:
    console.log("Open 7:00 to 18:00");
    break;
}

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

console.log("Part six switch size results:");
// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "closed";
/*
if ((shopStatus = "open")) {
  console.log("Welcome in");
}
const size = "M";
switch (size) {
  case "S":
    console.log("Small");
  case "M":
    console.log("Medium");
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}
*/
// Fix 1: Changed the assignment operator (=) to a strict equality comparison operator (===).
if (shopStatus === "open") {
  console.log("Welcome in");
}

const size = "M";
switch (size) {
  case "S":
    console.log("Small");
    break; // Fix 2: Added a missing break statement here to prevent fall-through to the next case.
  case "M":
    console.log("Medium");
    break; // Fix 2: Added a missing break statement here to prevent fall-through to the next case.
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

/*Leap Year Checker*/
console.log("Part seven *Leap Year Checker* :");

const thisYear = 2024; // Check against different value to test all cases (1900,2024,2000)

// A year is a leap year if it's divisible by 4 AND (NOT divisible by 100 OR divisible by 400)
const isLeapYear =
  (thisYear % 4 === 0 && thisYear % 100 !== 0) || thisYear % 400 === 0;

if (isLeapYear) {
  console.log(`${thisYear} is a leap year.`);
} else {
  console.log(`${thisYear} is not a leap year.`);
}
// Check Test Results:
// 2024 -> true (divisible by 4, not 100)
// 1900 -> false (divisible by 4 and 100, but not 400)
// 2000 -> true (divisible by 4, 100, and 400)

/*  FizzBuzz if else if statement */
console.log("Testing FizzBuzz results:");
const num = 15; // Test values: try 3 (Fizz), 5 (Buzz), 15 (FizzBuzz), or 7 (7)
// The most specific condition (divisible by both 3 and 5) must come first!
if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}
// Check Test Results:
// 3 -> Fizz
// 5 -> Buzz
// 15 -> FizzBuzz
// 7 -> 7

/* All output at once from all parts:

semahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-04.js
Part one results:
false
true
4
51
2
true
false
true
true
true
Part two if else statement:
We are open to take orders!
Part three if else if statement:
Small order accepted
Price/Item: 5
Order Size/Quantity: 3
Subtotal: $15.00
Discount Applied: 0% (-$0.00)
Total Price to Pay: $15.00
Part four results of courtValues array in boolean:
false
false
true
false
true
true
false
false
Part five if else if and switch:
Sunday:Open 8:00 to 12:00
Sunday:Open 8:00 to 12:00
Part six switch size results:
Medium
Part seven *Leap Year Checker* :
2024 is a leap year.
Testing FizzBuzz results:
FizzBuzz
asemahassan@Asemas-MacBook-Pro JS-Exercises %
*/

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
