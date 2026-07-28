"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

const shopName = "Lo-Fi Corner"; // the name of our coffee shop
const openingDays = "Monday to Saturday";
const openingHours = "from 07:00 AM"; //opening hours
const closingHours = "till 07:00 PM";

console.log(shopName, openingDays, openingHours, closingHours);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
console.log("Length before trim:", messy.length);

//1. Cleaned string logged to the console, remove spaces from start
const cleaned = messy.trim().replace(" ", "");
console.log("Length after trim:", cleaned.length);
console.log(cleaned);

//2. Clean the start, end, and all middle duplicate spaces
const fullyCleaned = messy.trim().replace(/\s+/g, " ");
console.log("Length after trim:", fullyCleaned.length);
console.log(fullyCleaned);

//3. slice a part of string
console.log("Slice first name:", fullyCleaned.slice(0, 6));

//4. Replace the bread with coffee
const replacedString = messy.trim().replace("bread", "coffee");
console.log("Replaced original string:", replacedString);

//5. Switch all to uppercase letters
const uppercaseString = fullyCleaned.trim().toUpperCase();
console.log("Changed fullyCleaned version to:", uppercaseString);

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

// 1. Log the length of the product string
console.log("Length of product:", product.length);

// 2. Find and log the starting position of a given word e-g "Loaf"
const targetWord = "Loaf";
const wordPosition = product.indexOf(targetWord);
console.log("Word Position in product string:", wordPosition);

// 3. Extract and log a slice containing exactly that word
const wordSlice = product.slice(wordPosition, wordPosition + targetWord.length);
console.log("Slice the word:", wordSlice);

// 4. Split the comma separated list and log the resulting pieces
const splitFlavors = flavorList.split(",");
console.log("Split all flavors as list:", splitFlavors);

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

// 1. Calculate the final price from given variables
const finalPrice = netPrice * (1 + taxRate);

// 2. Log inside a template literal formatted to two decimal places
console.log(`The final price is: $${finalPrice.toFixed(2)}`);
/* Reason: The .toFixed() method converts a number into a string to lock in the decimal places. 
If you use it earlier, you cannot perform further mathematical operations on it 
without causing errors or accidental string concatenation.*/

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

// 1. Generate a Random whole number from 1 to 6 (as dice)
const dieRoll = Math.floor(Math.random() * 6) + 1;
console.log("Random Diced Roll:", dieRoll);

// 2. Adapted recipe for a random whole number from 10 to 20
const rangeRoll = Math.floor(Math.random() * 11) + 10;
console.log("Adapt Recipe Roll:", rangeRoll);
/* Adaptation Reason: To get a number from 10 to 20, there are 11 possible outcomes in total (10, 11, 12... up to 20).
Multiplying Math.random() by 11 generates a floating-point number from 0 up to (but not including) 11.
Math.floor() rounds this down to a whole number from 0 to 10.
Finally, adding 10 shifts that entire range upward, changing 0-10 into the desired 10-20 range.*/

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const itemToSell = "Bread! ";
// Use the chosen method to repeat(times) the string 3 times
/*This method constructs and returns a new string containing
 the specified number of copies of the original string tied together.*/
const repeatedText = itemToSell.repeat(3);
console.log("Final string:", repeatedText); // It should output: "Bread! Bread! Bread! "

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

//generating a username
const firstName = "Maison";
const lastName = "Sarah";

// Extract the first initial, combine it with the last name, and lowercase everything
const firstInitial = firstName.slice(0, 1); //take only first letter of the first name
const username = (firstInitial + lastName).toLowerCase();

console.log("Username:", username);

// mad-libs story
const adjective = "super-fast";
const noun = "a rabbit";
const verb = "jumped";
const place = "the hanging bridge";

// Build and log the story using a single template literal
const madLibStory = `Yesterday, ${adjective} ${noun} unexpectedly came out of nowhere and ${verb} right off the top of ${place}!`;

console.log("Full story:", madLibStory);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
