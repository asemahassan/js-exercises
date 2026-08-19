"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// * The pricing chain from the previous exercise, provided again:
/*const orderSize = 14;
if (orderSize > 12) {
  console.log("Large order, call the bakery ahead");
} else if (orderSize > 6) {
  console.log("Medium order, ready in an hour");
} else {
  console.log("Small order, walk right in");
}*/

//Solution Part one. Create a function for pricingMessageWithLog using console.log
function priceMessageWithLog(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}
//testing with parameters of all cases, calling functions 4 times
console.log("Order Size 14: ");
priceMessageWithLog(14);
console.log("Order Size 12: ");
priceMessageWithLog(12);
console.log("Order Size 7: ");
priceMessageWithLog(7);
console.log("Order Size 3: ");
priceMessageWithLog(3);

/*Console output:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-05.js
Order Size 14: 
Large order, call the bakery ahead
Order Size 12: 
Medium order, ready in an hour
Order Size 7: 
Medium order, ready in an hour
Order Size 3: 
Small order, walk right in
Welcome to The Corner Bakery, Anna
Maison Sarah
visible in here
asemahassan@Asemas-MacBook-Pro JS-Exercises %

 */
// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.

//Create a function for pricingMessageWithReturn using return statement.
/*Using return statement is better than using console.log to have *cleaner control flow* and reusability of data.
>>>When a function uses console.log, its output is trapped in the terminal. When a function uses return,
it hands the data back to the program. You can then use that data anywhere. It also eliminates
 the execution of extra else if statements, the functions breaks and return what is asked.*/
function priceMessageWithReturn(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}
//testing with parameters all cases.
console.log("Order Size 14: ", priceMessageWithReturn(14));
console.log("Order Size 12: ", priceMessageWithReturn(12));
console.log("Order Size 7: ", priceMessageWithReturn(7));
console.log("Order Size 3: ", priceMessageWithReturn(3));

/*Output Part two:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-05.js
Order Size 14: 
Large order, call the bakery ahead
Order Size 12: 
Medium order, ready in an hour
Order Size 7: 
Medium order, ready in an hour
Order Size 3: 
Small order, walk right in
Order Size 14:  Large order, call the bakery ahead
Order Size 12:  Medium order, ready in an hour
Order Size 7:  Medium order, ready in an hour
Order Size 3:  Small order, walk right in
Welcome to The Corner Bakery, Anna
Maison Sarah
visible in here
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */
// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:
/*
function double(n) {
  return n * 2;
}
function shout(text) {
  return `${text.toUpperCase()}!`;
}*/

//Solution Part three:
//a. Function expression of the double function
const double = function (n) {
  return n * 2;
};
//b. converting shout function into a one-line arrow function with implicit return
const shout = (text) => `${text.toUpperCase()}!`;

//c. test both functions with different parameters
console.log(`Calling double(2) got: ${double(2)}`);
console.log(`Calling double(10) got: ${double(10)}`);
console.log(`Calling shout("maison") got: ${shout("maison")}`);
console.log(`Calling shout("lalaland") got: ${shout("lalaland")}`);

/*semahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-05.js
Order Size 14: 
Large order, call the bakery ahead
Order Size 12: 
Medium order, ready in an hour
Order Size 7: 
Medium order, ready in an hour
Order Size 3: 
Small order, walk right in
Order Size 14:  Large order, call the bakery ahead
Order Size 12:  Medium order, ready in an hour
Order Size 7:  Medium order, ready in an hour
Order Size 3:  Small order, walk right in
Calling double(2) got: 4
Calling double(10) got: 20
Calling shout("maison") got: MAISON!
Calling shout("lalaland") got: LALALAND!
Welcome to The Corner Bakery, Anna
Maison Sarah
visible in here
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.

//Solution Part four: update the pricing function
// Added a default value of 3 to the orderSize parameter
function priceMessageWithDefaultValue(orderSize = 3) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

// a. Call the function with no value
console.log(
  "When passing no argument, default value is used:",
  priceMessageWithDefaultValue(),
);

//b. Test the Order Size with three different cases.
console.log("Order Size 14 :", priceMessageWithDefaultValue(14));
console.log("Order Size 12: ", priceMessageWithDefaultValue(12));
console.log("Order Size 7: ", priceMessageWithDefaultValue(7));
console.log("Order Size 3: ", priceMessageWithDefaultValue(3));

/*Output Part four:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-05.js
Order Size 14: 
Large order, call the bakery ahead
Order Size 12: 
Medium order, ready in an hour
Order Size 7: 
Medium order, ready in an hour
Order Size 3: 
Small order, walk right in
Order Size 14:  Large order, call the bakery ahead
Order Size 12:  Medium order, ready in an hour
Order Size 7:  Medium order, ready in an hour
Order Size 3:  Small order, walk right in
Calling double(2) got: 4
Calling double(10) got: 20
Calling shout("maison") got: MAISON!
Calling shout("lalaland") got: LALALAND!
When passing no argument, default value is used: Small order, walk right in
Order Size 14 : Large order, call the bakery ahead
Order Size 12:  Medium order, ready in an hour
Order Size 7:  Medium order, ready in an hour
Order Size 3:  Small order, walk right in
Welcome to The Corner Bakery, Anna
Maison Sarah
visible in here
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */
// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.

// * The starter counting pattern for repeat(callback, count):
// * let i = 1;
// * while (i <= count) { call the callback here; i = i + 1; }

//Solution Part five:

function repeat(callback, count) {
  let i = 1;
  while (i <= count) {
    // Calling the callback here and passing the current count 'i' to it
    callback(i);
    i = i + 1;
  }
}

//create an arrow function and pass parameter to iterate the callback function as many times
const arrowFunction = (iteration) => {
  console.log(`[Arrow Callback] Running task number: ${iteration}`);
};
// Running the repeat function 5 times using the arrow function
repeat(arrowFunction, 5);

/*
semahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-05.js
Order Size 14: 
Large order, call the bakery ahead
Order Size 12: 
Medium order, ready in an hour
Order Size 7: 
Medium order, ready in an hour
Order Size 3: 
Small order, walk right in
Order Size 14:  Large order, call the bakery ahead
Order Size 12:  Medium order, ready in an hour
Order Size 7:  Medium order, ready in an hour
Order Size 3:  Small order, walk right in
Calling double(2) got: 4
Calling double(10) got: 20
Calling shout("maison") got: MAISON!
Calling shout("lalaland") got: LALALAND!
When passing no argument, default value is used: Small order, walk right in
Order Size 14 : Large order, call the bakery ahead
Order Size 12:  Medium order, ready in an hour
Order Size 7:  Medium order, ready in an hour
Order Size 3:  Small order, walk right in
[Arrow Callback] Running task number: 1
[Arrow Callback] Running task number: 2
[Arrow Callback] Running task number: 3
[Arrow Callback] Running task number: 4
[Arrow Callback] Running task number: 5
Welcome to The Corner Bakery, Anna
Maison Sarah
visible in here
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */

// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
const shopName = "Maison Sarah";
function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Anna")); // prediction: Welcome to The Corner Bakery, Anna
console.log(shopName); // prediction: Maison Sarah
if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // prediction: visible in here
}
//console.log(insideIf); // prediction first, then uncomment to verify:
//Prediction: Error: insideIf is block-scoped to the if statement and cant be access outside.
//Actual Error message: ReferenceError: insideIf is not defined

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

//Solution part seven. Create functions to calculate temparature

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

// Converts Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32; //standard formula
}

// Converts Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9; //standard formula
}

// --- Celsius to Fahrenheit Table using standard values to show similar results from both functions ---
console.log("--- Convert Celsius to Fahrenheit ---");
let c1 = 0;
let c2 = 22.2;
let c3 = 100;
console.log(
  `${c1.toFixed(1)}°C is equal to ${celsiusToFahrenheit(c1).toFixed(1)}°F`,
);
console.log(
  `${c2.toFixed(1)}°C is equal to ${celsiusToFahrenheit(c2).toFixed(1)}°F`,
);
console.log(
  `${c3.toFixed(1)}°C is equal to ${celsiusToFahrenheit(c3).toFixed(1)}°F`,
);

// --- Fahrenheit to Celsius Table ---
console.log("\n--- Convert Fahrenheit to Celsius ---");
let f1 = 32;
let f2 = 72;
let f3 = 212;
console.log(
  `${f1.toFixed(1)}°F is equal to ${fahrenheitToCelsius(f1).toFixed(1)}°C`,
);
console.log(
  `${f2.toFixed(1)}°F is equal to ${fahrenheitToCelsius(f2).toFixed(1)}°C`,
);
console.log(
  `${f3.toFixed(1)}°F is equal to ${fahrenheitToCelsius(f3).toFixed(1)}°C`,
);

/*Output Part seven:
--- Convert Celsius to Fahrenheit ---
0.0°C is equal to 32.0°F
22.2°C is equal to 72.0°F
100.0°C is equal to 212.0°F

--- Convert Fahrenheit to Celsius ---
32.0°F is equal to 0.0°C
72.0°F is equal to 22.2°C
212.0°F is equal to 100.0°C
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
*/

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:

/*const answer = 42;
console.log(answer.toUpperCase());*/
/*Throws an Error: /Users/asemahassan/Documents/SAP Developer/projects/js-practice/JS-Exercises/lesson-05.js:367
console.log(answer.toUpperCase()); */

//Solution part eight:
try {
  const answer = 42;
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`Oops! An error occurred because: ${error.message}`);
}

console.log("The program survived it and continues running successfully!");

/*Output:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-05.js
Order Size 14: 
Large order, call the bakery ahead
Order Size 12: 
Medium order, ready in an hour
Order Size 7: 
Medium order, ready in an hour
Order Size 3: 
Small order, walk right in
Order Size 14:  Large order, call the bakery ahead
Order Size 12:  Medium order, ready in an hour
Order Size 7:  Medium order, ready in an hour
Order Size 3:  Small order, walk right in
Calling double(2) got: 4
Calling double(10) got: 20
Calling shout("maison") got: MAISON!
Calling shout("lalaland") got: LALALAND!
When passing no argument, default value is used: Small order, walk right in
Order Size 14 : Large order, call the bakery ahead
Order Size 12:  Medium order, ready in an hour
Order Size 7:  Medium order, ready in an hour
Order Size 3:  Small order, walk right in
[Arrow Callback] Running task number: 1
[Arrow Callback] Running task number: 2
[Arrow Callback] Running task number: 3
[Arrow Callback] Running task number: 4
[Arrow Callback] Running task number: 5
Welcome to The Corner Bakery, Anna
Maison Sarah
visible in here
--- Convert Celsius to Fahrenheit ---
0.0°C is equal to 32.0°F
22.2°C is equal to 72.0°F
100.0°C is equal to 212.0°F

--- Convert Fahrenheit to Celsius ---
32.0°F is equal to 0.0°C
72.0°F is equal to 22.2°C
212.0°F is equal to 100.0°C
Oops! An error occurred because: answer.toUpperCase is not a function
The program survived it and continues running successfully!
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
