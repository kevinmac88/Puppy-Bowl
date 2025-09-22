// what is 'variable scope'?
// think of it as 'where the variable lives' - OR -
// from where can we access the variable?

// global scope - this is the 'top-level' of the code
// top level? that means the variable is NOT inside {} in a given file

// this variable has global scope - it 'lives' in the top level
// of the code (top level of lexical environment). This means
// ANY OTHER CODE CAN ACCESS THIS VARIABLE - i.e. this var can
// be used from anywhere inside this file
const BASE_RATE = 0.9;

console.log("I AM AT THE TOP LEVEL", BASE_RATE);

if (true) {
  console.log("I AM IN A CONDITIONAL", BASE_RATE);
}

// SCOPE CHAIN - when you use a variable in a block {},
// JS Will first look in that block for a variable with that name.
// if it finds it, it uses that local value/variable
// if not, it goes to the immediate parent context and looks there
// and so on until it finds a match. it will then use that value
function calculateAdjustedTotal(value) {
  const BASE_RATE = "NOT 0.9";
  console.log("I AM IN A FUNCTION", BASE_RATE);
  if (true) {
    // const BASE_RATE = "SUPER NESTED";
    console.log("I'm REALLY nested", BASE_RATE);
  }
}

for (let i = 0; i < 3; i++) {
  console.log("HELLO FROM INSIDE THE LOOP", BASE_RATE);
}

calculateAdjustedTotal(2.5);
if (true) {
  const BASE_RATE = "SOME OTHER RATE";
  console.log(BASE_RATE);
}
console.log("BACK OUTSIDE", BASE_RATE);

// BLOCK-SCOPED VARIABLES - these are variables that live inside
// a block - think of a block as code inside {}, e.g. if-statements,
// and loops.

if (true) {
  const ifBlockVar = "I LIVE IN THE IF-STMT";
  console.log(ifBlockVar);
  if (true) {
    console.log(ifBlockVar);
  }
}

// BUT that block-scoped variable, ifBlockVar, canNOT be accessed
// back here outside of the block

// Throws ReferenceError
// console.log(ifBlockVar);

// WHY WE DON'T WANT TO USE VAR

var newValue = "I am a VAR variable and i live in the global scope";

function anotherFunction() {
  console.log(newValue);
}

if (true) {
  console.log(newValue);
}

for (let i = 0; i < 3; i++) {
  console.log(newValue);
}
anotherFunction();

// So far, so good, but...

if (true) {
  var ifVarVariable = "I was created with VAR and I was born in an if-stmt";
  console.log(ifVarVariable);
}

// !!!

console.log(ifVarVariable);

// remember, we have var newValue up above...
if (true) {
  var newValue = "I am newValue of the if-stmt";
}

// newValue got re-created/redeclared and intialized to the value
// inside the if-stmt

console.log(newValue);

function someFunctionThatUsesVar() {
  var newValue = "I am newValue of someFunctionThatUsesVar";
}
someFunctionThatUsesVar();

console.log(newValue);

// DON'T DO THIS PLEASE
// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }

// for (i = 0; i < 3; i++) {
//   console.log(i);
// }

// not using a keyword when declaring a variable is the
// same as using the var keyword
if (true) {
  anotherVar = "hi";
}

console.log(anotherVar);

let thisLetVar = "I was created with let in the global scope";

function changeValue(newLetVarValue) {
  let thisLetVar = newLetVarValue;
}

console.log(thisLetVar);
changeValue("I was updated in changeValue function");
console.log(thisLetVar);
