"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menuItems = [
  "Egg Drop",
  "Panini",
  "Choco Muffin",
  "Macchiato",
  "Espresso",
];

//Solution part one without using loops.
// 1. Log the whole array
console.log("Whole Array:", menuItems);

// 2. Log the first item
console.log("First Item:", menuItems[0]);

// 3. Log the last item read through `length` minus 1
console.log("Last Item:", menuItems[menuItems.length - 1]);

// 4. Log the array's length
console.log("Array Length:", menuItems.length);

/*Output part one:
asemahassan@Asemas-MacBook-Pro JS-Exercises % node lesson-06.js
Whole Array: [ 'Egg Drop', 'Panini', 'Choco Muffin', 'Macchiato', 'Espresso' ]
First Item: Egg Drop
Last Item: Espresso
Array Length: 5
 */

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menuItems.push("Cinnamon Roll"); //push() adds an item to the end#
//print the whole list again after push()
console.log("Adding an item at end of the array list.");
console.log("MenuItems:", menuItems);

console.log("Removing item from end of the array list.");
console.log(menuItems.pop()); //pop() removes the last item and returns it
//print the whole list again after push()
console.log("MenuItems:", menuItems);

menuItems.unshift("Cappuccino"); //unshift() adds at the front
console.log("Adding an item at front of the array list.");
//print the whole list again after unshift()
console.log("MenuItems:", menuItems);

console.log("Removing item from front of the array list.");
console.log(menuItems.shift()); //shift() removes from the front
//print the whole list again after shift()
console.log("MenuItems:", menuItems);

/*Output:
Adding an item at end of the array list.
MenuItems: [
  'Egg Drop',
  'Panini',
  'Choco Muffin',
  'Macchiato',
  'Espresso',
  'Cinnamon Roll'
]
Removing item from end of the array list.
Cinnamon Roll
MenuItems: [ 'Egg Drop', 'Panini', 'Choco Muffin', 'Macchiato', 'Espresso' ]
Adding an item at front of the array list.
MenuItems: [
  'Cappuccino',
  'Egg Drop',
  'Panini',
  'Choco Muffin',
  'Macchiato',
  'Espresso'
]
Removing item from front of the array list.
Cappuccino
MenuItems: [ 'Egg Drop', 'Panini', 'Choco Muffin', 'Macchiato', 'Espresso' ]
 */

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

//a. for loop with index counter, used when need to access a specific index in the array with position value
for (let index = 0; index < menuItems.length; index++) {
  console.log("Item at position ", index, "is: ", menuItems[index]);
}

//b. for...of loop with items accessed directly, position is not known here.
for (const item of menuItems) {
  console.log(`Menu Item: ${item}`);
}

/*Output part three: 
Item at position  0 is:  Egg Drop
Item at position  1 is:  Panini
Item at position  2 is:  Choco Muffin
Item at position  3 is:  Macchiato
Item at position  4 is:  Espresso
Menu Item: Egg Drop
Menu Item: Panini
Menu Item: Choco Muffin
Menu Item: Macchiato
Menu Item: Espresso
asemahassan@Asemas-MacBook-Pro JS-Exercises %*/

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

//creating displayString of the pricing array, formats to "€4.50", "€12.00", etc.
const displayString = prices.map((price) => `€${price.toFixed(2)}`).join(", "); // Join the new string with a comma and space

/*
//forEach would throws TypeError: Cannot read properties of undefined (reading 'join')
const stringForEach = prices.forEach((price) => `€${price.toFixed(2)}`).join(", ");
*/

console.log("Display String Of Prices:", displayString); // Output: "€4.50, €12.00, €3.20, €8.00"

const result = prices.filter((price) => price < 5);
console.log("Less than 5:", result); //Output: [ 4.5, 3.2 ]

const found = prices.find((element) => element > 10);
console.log("Greater than 10:", found); //Output: 12

/*Output part four: 
Display String Of Prices: €4.50, €12.00, €3.20, €8.00
Less than 5: [ 4.5, 3.2 ]
Greater than 10: 12
asemahassan@Asemas-MacBook-Pro JS-Exercises %
*/
// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
  "Jay Z",
];

//a. ranking each artist with a number using forEach
artists.forEach((name, index) => {
  const card = `Artist: ${name} Rank: #${index + 1}`;
  console.log(card);
});
/*Output:#
Artist: Pinkfong Rank: #1
Artist: Adriano Celentano Rank: #2
Artist: Asake Rank: #3
Artist: Miyagi and Andy Panda Rank: #4
Artist: Johnny Cash Rank: #5
Artist: Jay Z Rank: #6
asemahassan@Asemas-MacBook-Pro JS-Exercises % 
 */
/*
//b. ranking each artist with a number using index counter for loop
for (let index = 0; index < artists.length; index++) {
  console.log(`Artist: ${artists[index]} (Rank: #${index + 1})`);
}*/

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

/* //commenting out this one to avoid updating the menu item for the spread copy method below
const updatedMenuItems = menuItems; //assigning array to a new variable
updatedMenuItems.push("Almond Cake");
console.log("Array items before spread copy method:");
console.log("Original Menu Items:", menuItems);
console.log("Updated Menu Items:", updatedMenuItems);*/

/*Output of part a: 
Array items before spread copy method:
Original Menu Items: [
  'Egg Drop',
  'Panini',
  'Choco Muffin',
  'Macchiato',
  'Espresso',
  'Almond Cake'
]
Updated Menu Items: [
  'Egg Drop',
  'Panini',
  'Choco Muffin',
  'Macchiato',
  'Espresso',
  'Almond Cake'
] */

//  The right way to copy the array (using Spread Copy)
const copyMenuItems = [...menuItems];
copyMenuItems.push("Almond Cake");
console.log("Array items after spread copy method:");
console.log("Original Menu Items:", menuItems);
console.log("Spread Copy Menu Items:", copyMenuItems);

/*Output:
Array items after spread copy method:
Original Menu Items: [ 'Egg Drop', 'Panini', 'Choco Muffin', 'Macchiato', 'Espresso' ]
Spread Copy Menu Items: [
  'Egg Drop',
  'Panini',
  'Choco Muffin',
  'Macchiato',
  'Espresso',
  'Almond Cake'
]
  */

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

function fizzBuzz(maxLength) {
  //fizzbuzz loop from 1 to maxLength
  for (let i = 1; i <= maxLength; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
//call fizzBuzz function to max length of 100
fizzBuzz(100);
/*Output of fizzbuzz is very long:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz ....... 
97
98
Fizz
Buzz*/

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

// Init tracking variables to find the sum and the largest number
let sum = 0;
let largestNum = numbers[0]; // Assume the first item is the largest to start with

for (let i = 0; i < numbers.length; i++) {
  const currentNum = numbers[i];

  // 1. Add current value to the sum total
  sum += currentNum;

  // 2. If current value is bigger than our tracker, update the tracker
  if (currentNum > largestNum) {
    largestNum = currentNum;
  }
}
// Output the final results
console.log(`Sum of total array: ${sum}`); //output 128
console.log(`Largest number from array: ${largestNum}`); //largest num is 41

/*Output:
Sum of total array: 128
Largest number from array: 41
 */

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

const fullString = "I am learning Javascript today."; //string to reverse

//a. creating a function for the reserve string and pass it multiple parameters to test
function reverseString(str) {
  let reversed = "";

  // Start at the last index, walk down to index 0
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("My name is Asema"));
console.log(reverseString("FizzBuzz"));
console.log(reverseString(fullString));

/*Output:
amesA si eman yM
zzuBzziF
.yadot tpircsavaJ gninrael ma I */

//b. create a function to count vowels
function vowelsInString(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  // Normalize to lowercase to catch uppercase vowels safely
  const lowerStr = str.toLowerCase();

  //usign for loop to go over each character
  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }

  return count;
}
//print all vowels found in the string
console.log("The Vowel Count in the string is:", vowelsInString(fullString));

//Output: The Vowel Count in the string is: 10

//c. Palindrome string function to test if the string passes the test
function isThisPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  const reversedWord = reverseString(lowerCaseWord); // Reuses our function from Part 1

  return lowerCaseWord === reversedWord;
}

//c. Testing three different words
const testWords = ["Kayak", "Speed", "Noon"];

testWords.forEach((word) => {
  console.log(`"${word}" is a palindrome: ${isThisPalindrome(word)}`);
});

/*Output:
"Kayak" is a palindrome: true
"Speed" is a palindrome: false
"Noon" is a palindrome: true
 */
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
