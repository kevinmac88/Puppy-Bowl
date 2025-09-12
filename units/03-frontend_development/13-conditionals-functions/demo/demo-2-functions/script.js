// function declaration - this defines the function
// function addTwoNums() {
//   console.log(2 + 2);
// }

// function call or function invocation - this makes the function run
// addTwoNums();

// the above function is not very useful - it can only add the specific numbers 2 and 2,
// and log the result. two problems: not flexible (limited to those 2 numbers) AND
// it doesn't give us a value that we can use in code that comes after

function addTwoNums(num1, num2) {
  // check our numbers
  // num1 = 1 , num2 = "2"
  num1 = Number(num1);
  num2 = Number(num2);
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    !Number.isFinite(num1) ||
    !Number.isFinite(num2)
  ) {
    console.log("Both values must be a number!");
    return;
  }

  return num1 + num2;
}

// console.log(addTwoNums(2, 2));
// addTwoNums(500, 1000);
// console.log(addTwoNums("Dog", "cat"));
console.log(addTwoNums(Infinity, Infinity));
// let total = 0;
// const firstSum = addTwoNums(5, 5);
// console.log(firstSum);
// // the line below is equivalent to total = total + firstSum
// total += firstSum;
// console.log(total);
