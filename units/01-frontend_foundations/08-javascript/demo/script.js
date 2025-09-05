// the alert command causes a popup in the browser *tab*, but
// console.log("hello world") causes output in the browser *console*
// (found in devtools in chrome). the results of the JS appear
// in these different places, but the the JS is parsed in the same place
// - the runtime

// alert("Test!");
// console.log("hello, world!");

// creating variables in JS - 'declaring variables'

// we have two *keywords* (aka 'reserved words') used
// create vars - keywords are special
// words that are part of the JS language itself

// the two keywords are const and let

// first create with let and initialize to 0

let total = 0;
console.log(total);
// update a variable (change its current value)
//  - i'm adding 3 to total, and total's new value
// will be 3
// total = total + 3; // now total's value is 3
total += 3; // this is the exact equivalent of total = total + 3
// you can do this with subtraction (-=), multiplication (*=) and division (/=)
console.log(total);

// IMPORTANT! - if you want to update a variable, i.e.
// you want to be able to change its value because you know it is going to
// change over time, you must
// use let keyword

// now we create a variable with const

const myName = "Byron Holmes";

console.log(myName);

// myName = "Byron Brown Holmes";

let customerAcctNumber = 123456;

let recentTransaction = 10;

// this is a disaster! and it could have all avoided by using the wise words
// 'use const until you can't'
customerAcctNumber = total + recentTransaction;

console.log(customerAcctNumber);

// multiple declaration of variables - they are NOT intialized!
let firstName, lastName, birthdate;

console.log(firstName);
console.log(lastName);
console.log(birthdate);

// the basic data types in js - string, number, null, undefined, booleans (true or false without quotes)

// to check the type of a value in js, you can use the typeof operator

// earlier, I created the var myName and put a string in it

console.log(typeof myName);

// the var total from above holds a number
console.log(typeof total);

// JS is loosely typed - that means i can store any type in any variable

// one consequence of this is that i can take a var that currently holds
// one data type, and if that var was created with let, i can put a value
// of a completely different data type in that variable

console.log(2 + 2);

function addTwoNums(num1, num2) {
  // check if the arguments (passed-in values) are actually numbers
  if (typeof num1 == "number" && !Number.isNaN(num1) && Number.isFinite(num1))
    return num1 + num2;
}

console.log(addTwoNums(5, 5));

console.log(addTwoNums("5", "5"));
