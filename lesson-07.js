"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
const oneItem = {
  name: "Butter Croissant",
  price: 1.8,
  quantity: 1,
  vegetarian: true,
  describe: function () {
    return `${this.name} costs ${this.price} €`;
  },
};
console.log("Item Name:", oneItem.name);
console.log("Item Price:", oneItem.price);
console.log("Item Type:", oneItem.vegetarian);

const keyID = "quantity";
console.log("Item Quantity:", oneItem[keyID]); //the keyID represents here the name of property in <key:value> pair.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

//added describe function in the oneItem object of part One, calling here:
console.log("Describe MenuItem:", oneItem.describe());

/*Output part one and part two:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-07.js
Item Name: Butter Croissant
Item Price: 1.8
Item Type: true
Item Quantity: 1
Describe MenuItem: Butter Croissant costs 1.8 euros

*/
// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
//array of objects for the menuItems with multiple properties, same like oneItem as part one.
const menuItems = [
  { name: "Butter Croissant", price: 1.8, quantity: 1, vegetarian: true },
  { name: "Chocolate Croissant", price: 2.5, quantity: 1, vegetarian: false },
  { name: "Omelet", price: 5.0, quantity: 2, vegetarian: false },
  { name: "Latte", price: 4.0, quantity: 1, vegetarian: true },
  { name: "Espresso", price: 3.0, quantity: 1, vegetarian: true },
];

for (const item of menuItems) {
  console.log(
    `${item.name} costs ${item.price}€, and is type vegetarian: ${item.vegetarian} with quantity: ${item.quantity}`,
  );
}
/*Output part three:
utter Croissant costs 1.8€, and is type vegetarian: true with quantity: 1
Chocolate Croissant costs 2.5€, and is type vegetarian: false with quantity: 1
Omelet costs 5€, and is type vegetarian: false with quantity: 2
Latte costs 4€, and is type vegetarian: true with quantity: 1
Espresso costs 3€, and is type vegetarian: true with quantity: 1
 */

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const vegItems = menuItems
  .filter((item) => item.vegetarian) //to check boolean
  .map((item) => ({ name: item.name, price: item.price }));
//print all items that are vegetarian
console.log(vegItems);

const budgetItem = menuItems.find((item) => item.price < 3.0);
//print the items less than 3.00€
console.log(budgetItem);
/*Output part four:
[
  { name: 'Butter Croissant', price: 1.8 },
  { name: 'Latte', price: 4 },
  { name: 'Espresso', price: 3 }
]
{ name: 'Butter Croissant', price: 1.8, quantity: 1, vegetarian: true }
asemahassan@Asemas-MacBook-Pro JS-Exercises %
 */

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

// Pick single item from the menuItems to print key, value
const singleItem = menuItems[0];

// Log the keys
console.log("--- Keys ---");
console.log(Object.keys(singleItem));

// Log the Values
console.log("\n--- Values ---");
console.log(Object.values(singleItem));

// Log every pair using for...of with a destructured pair
console.log("\n--- Key: Value Pairs ---");
for (const [key, value] of Object.entries(singleItem)) {
  console.log(`${key}: ${value}`);
}

/*Output part five:

--- Keys ---
[ 'name', 'price', 'quantity', 'vegetarian' ]

--- Values ---
[ 'Butter Croissant', 1.8, 1, true ]

--- Key: Value Pairs ---
name: Butter Croissant
price: 1.8
quantity: 1
vegetarian: true
*/

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

let newPrice = menuItems[0].price; //only changing price of item one
newPrice = 2.0;
//this will not change the value of the original menuItem
console.log(`The price for ${menuItems[0].name} is ${menuItems[0].price}€`);

//using spread copy method to create a realCopy
const realCopy = { ...menuItems };
realCopy[0].price = 2.0;
console.log(menuItems); //original menuItems object array has also updated
console.log(realCopy); //the copy of the menuItems

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

// a. First clean and split the text into an array of lowercase words and removes punctuation
const allWords = sentence
  .toLowerCase()
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .split(" ");

// b. Then init an empty object to hold our word counts
const wordCounts = {};

// c. using for...of loop find each word and increase counter
for (const word of allWords) {
  // If the word is empty (due to double spaces), skip it
  if (!word) continue;

  // If the word exists, increment it, if it doesn't, init it at 1.
  wordCounts[word] = (wordCounts[word] || 0) + 1;
}

// Lastly, log the results as the keys, values, and destructured pairs
console.log("--- All Unique Words (Keys) ---");
console.log(Object.keys(wordCounts));

console.log("\n--- Frequencies (Values) ---");
console.log(Object.values(wordCounts));

console.log("\n--- Formatted Results (Key: Value) ---");
for (const [word, count] of Object.entries(wordCounts)) {
  console.log(`${word}: ${count}`);
}

/*Output part seven:
--- All Unique Words (Keys) ---
[
  'the',    'quick',
  'brown',  'fox',
  'jumps',  'over',
  'lazy',   'dog',
  'sleeps', 'and',
  'dreams'
]

--- Frequencies (Values) ---
[
  4, 1, 1, 2, 1,
  1, 1, 2, 1, 1,
  1
]

--- Formatted Results (Key: Value) ---
the: 4
quick: 1
brown: 1
fox: 2
jumps: 1
over: 1
lazy: 1
dog: 2
sleeps: 1
and: 1
dreams: 1
 */
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
