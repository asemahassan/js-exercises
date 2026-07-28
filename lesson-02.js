"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const cafeName = "Lo-Fi Corner"; // the name of our coffee shop
const openingHours = "Monday to Saturday (07:00AM until 07:00 PM)"; //opening hours
const menuHotBeverages = "Espresso, Cafe Latte, Green Tea"; //menu as string
const isCafeOpen = "true"; //the status of our cafe

let menuPriceSmall = 3.0; //in € all beverages small cup costs the same in our cafe might adjust later
let menuPriceLarge = 5.0; //in € all beverages large cup costs the same in our cafe might adjust later

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof cafeName);
console.log(typeof openingHours);
console.log(typeof menuHotBeverages);
console.log(typeof true);
console.log(typeof menuPriceSmall);
console.log(typeof menuPriceLarge);

/*Terminal: 
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-02.js
string
string
string
boolean
number
number
asemahassan@Asemas-MacBook-Pro JS-Exercises %  */

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let currentSpecial = null; //our special menu item, keeping intentionally empty
let orderStatus; //undefined orderStatus, a signal to bug as no value is assigned

console.log(typeof currentSpecial);
console.log(typeof orderStatus);
/*asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-02.js
string
string
string
boolean
number
number
object
undefined
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */
// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

console.log(typeof String(priceText));
console.log(String(priceText));

console.log(typeof Number(countText));
console.log(Number(countText));

console.log(typeof Boolean(flagText));
console.log(Boolean(flagText));

console.log(Number(flagText)); //only flagText string will give NaN when converted to number
/*
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-02.js
string
string
string
boolean
number
number
object
undefined
string
4.50
number
12
boolean
true
NaN
asemahassan@Asemas-MacBook-Pro JS-Exercises %
 */
// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:

//const bakeryName = "Maison Sarah";
let bakeryName = "Maison Sarah"; //Error 1a: fixed with the 'let' type
bakeryName = "The Corner Bakery"; // Error 1b: We can't change the const variable type with a new value, It should be let.
// openingHour = 7; //Error 2: openingHour was never declared before it needs a type
let openingHour = 7; //Error 2: fixed here with a type
//  console.log(loafCount); //Error 3: printing loafCount before declaration of the variable
let loafCount = 12;
console.log(loafCount); //Error 3: resolved here

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

//Init two variables with initial random values
let a = 1007;
let b = 7007;
let cTemp = null; // a third value used as temp container defined with null first.

//print before swap values
console.log(`Before swap: a = ${a}, b = ${b}`);

cTemp = a; //assigned cTemp with 'a' value first
a = b; //assigned 'a' with 'b' value
b = cTemp;

//print after swap values
console.log(`After swap: a = ${a}, b = ${b}`);

cTemp = null; //clearing cTemp value
console.log(`cTemp = ${cTemp}`);

/*
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-02.js
string
string
string
boolean
number
number
object
undefined
string
4.50
number
12
boolean
true
NaN
12
Before swap: a = 1007, b = 7007
After swap: a = 7007, b = 1007
cTemp = null
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
