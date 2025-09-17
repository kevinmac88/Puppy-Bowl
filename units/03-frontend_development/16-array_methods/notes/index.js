/*
In JavaScript, functions are **first-class**. They are treated like any other variable.
- assigned as value to a variable
- passed as argument into other functions
- returned by another function
*/

// A **function expression** is an expression that evaluates to a function (value).
const foo = function () {
  console.log("foo");
};

// It can be called like any other function.
foo();

// **Arrow function expressions** are another way to write functions.
// Arrow functions are not hoisted!
const bar = () => {
  console.log("bar");
};
bar();

// Functions can be passed as arguments to **higher-order** functions.
// These input functions are often referred to as **callback** functions.
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

repeat(foo, 5);
repeat(bar, 5);

// Function expressions are often called **anonymous** functions because they have no name.
// These are commonly combined with higher-order functions.
repeat(() => console.log("hello"), 20);

// Functions can be returned by higher-order functions
function speak(word) {
  // Arrow functions without curly braces are single-line returns.
  return () => console.log(word);
}

// speak() returns a function value that we assign to baz
const baz = speak("baz");
const wobble = speak("wobble");

baz();
wobble();

// ===

const numbers = [-5, -1, 0, 28, 99];

console.log("=== map ===");

/**
 * @param {A[]} array
 * @param {(element: A) => B} transform
 * @returns {B[]} a new array with the given `transform` function applied to each element in `array`
 */
function map(array, transform) {
  const output = [];
  for (const element of array) {
    output.push(transform(element));
  }
  return output;
}
console.log(map(numbers, (n) => n * 2));

console.log("=== filter ===");
/**
 * @param {A[]} array
 * @param {(element: A) => boolean} keep
 * @returns {A[]} a new array containing the elements in `array` for which `keep` returns true
 */
function filter(array, keep) {
  const output = [];
  for (const element of array) {
    if (keep(element)) {
      output.push(element);
    }
  }
  return output;
}
console.log(filter(numbers, (n) => n > 0));

// These are built-in array methods!
console.log(numbers.map((n) => n * 2));
console.log(numbers.filter((n) => n > 0));

console.log("=== reduce ===");
/**
 * Start an accumulator at the `initial` value.
 * For each element in `array`, update the accumulator to
 * the return value of calling `reducer` on that element.
 * @param {A[]} array
 * @param {(accumulator: B, element: A) => B} reducer
 * @param {B} initial
 * @returns {B} the final value of the accumulator
 */
function reduce(array, reducer, initial) {
  let accumulator = initial;
  for (const element of array) {
    accumulator = reducer(accumulator, element);
  }
  return accumulator;
}

const add = (num1, num2) => num1 + num2;
console.log(reduce(numbers, add, 5));

// Reduce is also built-in!
console.log(numbers.reduce(add, 5));

// If no initial value is given, it defaults to the first element of the array
console.log(numbers.reduce(add));

// Some more common array methods:

console.log("=== forEach ===");
// forEach runs a function but DOES NOT return a new array.
numbers.forEach((n) => console.log(n));

// You can think of forEach as equivalent to the for..of loop
for (const n of numbers) {
  console.log(n);
}

// This is BAD!! `map` implies that we care about the output array.
numbers.map((n) => console.log(n));

console.log("=== find ===");
// Find is like `filter` except you just get the first thing.
console.log(numbers.find((n) => n > 0));
