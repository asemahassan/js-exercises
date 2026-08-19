"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.

//create a class artist with a constructor
class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }

  describe() {
    return `${this.name}, ${this.genre}, ${this.total} of music`;
  }

  //added another method similar to describe but with get for part six.
  get description() {
    return `${this.name}, ${this.genre}, ${this.total} of music`;
  }

  // Static method added here in original Artist class for part six.
  static named(artistsArray, searchName) {
    const match = artistsArray.find((artist) => artist.name === searchName);

    if (match) {
      // Access the getter like a property (no parentheses)
      console.log(match.description);
    } else {
      console.log(`Artist "${searchName}" not found.`);
    }

    return match;
  }
}

//create new object of the class artist by calling constructor() with new parameters
const jayZ = new Artist("Jay Z", "Hip Hop", "12:05");
const singh = new Artist("Jr. Singh", "India Banghra", "13:80");

//log class objects and call function from the class to get results for each
console.log("Part One:");
console.log(jayZ.describe());
console.log(singh.describe());

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

console.log("Part Two:");
// * The artists as plain objects, provided:
const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const artistArray = [];
for (const keyID of artistData) {
  const artistObj = new Artist(keyID.name, keyID.genre, keyID.total);
  artistArray.push(artistObj);
  // console.log(artistObj.describe());
}

for (const obj of artistArray) {
  console.log(obj.describe());
}

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:

//const broken = Artist("Pinkfong", "Children's music", "11:31");
//Prediction: error cant initiate the class object
//Output: TypeError: Class constructor Artist cannot be invoked without 'new'

console.log("Part Three:");
// ! Snippet two, an arrow function used as a method that reads this:
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`, //Prediction: error here  because there is no return?
};
console.log(single.describe()); //Output: undefined by undefined

// * Snippet three, the correct call. Uncomment after part one:
console.log(new Artist("Asake", "Afrobeats", "14:08").describe());
//Output: Asake, Afrobeats, 14:08 of music

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.

console.log("Part Four:");
//inheritance in action extending Artist class from part one
class FeaturedArtist extends Artist {
  constructor(name, genre, total, blurb) {
    super(name, genre, total);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()}. Featured: ${this.blurb}`;
  }
}

const featured = new FeaturedArtist(
  "Bobby",
  "Electronic",
  "14:08",
  "The GenZ voice of the year.",
);
console.log(featured.describe());

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:
//equivalent of class Artist {
function ArtistOld(name, genre) {
  //equivalent to the class constructor(name, genre) {....
  this.name = name;
  this.genre = genre;
}
//class method describe(){}
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};
//class method tag(){}
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};

console.log("Part Five:");
const testObj = new ArtistOld("Bumble Bee", "Techno");
console.log(testObj.describe()); //calls the describe method with name and genre
console.log(testObj.tag()); //output the genre in lowercase with #

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

console.log("Part six:");
//a. Added the named() method in the original Artist class
const artistList = [
  new Artist("Pink Floyd", "Electronic", "14:30"),
  new Artist("Cha Cha", "NA", "50:30"),
];

// b. Called internally by the static method
Artist.named(artistList, "Cha Cha"); //find the one with specific name match and print

// c. Called directly on an instance at index 0 of the list
const singleArtist = artistList[0];
console.log(singleArtist.description);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
