/* ==============          ARROW FUNCTIONS =================== */

// // function hoisting - works with function declarations
// greetPeople();

// function greetPeople() {
//   console.log("Greetings, people!");
// }

// // variables DO NOT work the same way - must initialize BEFORE using
// const people = "Everyone in the world";
// console.log(people);

// // Ditto function expressions
// // greetPeopleVeeTwo(); if we call this function here, we get a ReferenceError

// const greetPeopleVeeTwo = () => {
//   console.log("Greetings, people!!");
// };

// greetPeopleVeeTwo();

// When learning an array method, two basic questions to always ask
// 1. DOES THIS MUTATE THE ORIGINAL ARRAY?
// 2. What does this method return?

// .forEach() - this does NOT mutate the original array - it does not return anything
// .forEach() is declarative, compact way of iterating (read: looping) through an array
// and doing something with/to each element in the array

// GOAL: Create a string - 'The attendees were John, Juan, Ioannis (...), Jean and Giovanni.'

// first, the mechanics of .forEach()

// .forEach is an array method - that means we have to call it on array
// .forEach is a higher-order function - in this case, we will pass a CALLBACK FUNCTION to it
// and .forEach will call that function on each element of the array

// here, we will simply call 'logName' on each attendee

const attendees = [
  "John",
  "Juan",
  "Ioannis",
  "Johannes",
  "Ivan",
  "Jean",
  "Giovanni",
];

function logName(n) {
  console.log(n);
}

let mySentence = "The attendees were ";
attendees.forEach((name, index) => {
  // check if we are on the second-to-last element
  if (index === attendees.length - 2) {
    mySentence += name + " and ";
  } else if (index === attendees.length - 1) {
    mySentence += name + ".";
  } else {
    mySentence += name + ", ";
  }
});

console.log(mySentence);

const productNames = [
  "Coffee Filters",
  "Puppy Formula",
  "Stochastic Calculus Textbook",
];

// GOAL: Create <h2> tags, one for each of the above products, with the product name inside
// the tag - e.g. <h2>Coffee Filters</h2>

// use .map() to achieve
// .map() does NOT mutate original array and it returns a new array with the transformed values

// .map() requires that you return a value - this value will be placed in the new array
// that .map() creates. if you do not return a value, you will get undefined in the array
const productHTML = productNames.map((product) => `<h2>${product}</h2>`);
console.log(productNames);
console.log(productHTML);

// GOAL: Given an array of numbers, filter out the even numbers and put into a new array

// use .filter() to achieve this
// .filter() does NOT mutate the original array it returns a new array with the filtered values

// how does it actually filter? we return a boolean - if the boolean is true, the
// current item in the loop gets added to the array, else nothing is added to the array

const myNumbers = ["1", "2", 3, 4, 5, 6];

const evens = myNumbers.filter((currentNumber) => {
  currentNumber = Number(currentNumber);
  return currentNumber % 2 === 0;
});
console.log(evens);

const numsToAdd = [1, 2, 3, 4, 5, 6];

// GOAL: take the array of numbers and return a single value - the sum of those numbers
// use .reduce() to do this
// .reduce() does NOT mutate the array, and it returns the final value of total/accumulator - which can be almost anything!
const total = numsToAdd.reduce((total, current) => (total += current), 0);
console.log(total);
console.log(numsToAdd);

// GOAL: take an array and return the first value that is divisible by 5

const numsToSearch = [41, 78, 69, 55, 105];

// use .find() to do this
// .find() does NOT mutate the array, and it returns the value found (if any), else undefined

const result = numsToSearch.find((num) => num % 9 === 0);
console.log(result);
