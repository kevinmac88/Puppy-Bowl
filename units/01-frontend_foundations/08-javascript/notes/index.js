// `let` is the declaration operator.
// It allows us to **declare** a new variable.
// It means connect the name of the variable to a memory address.
let hobby;
console.log(hobby);

// = is called the **assignment** operator.
// Assign the value "crochet" to the variable hobby.
// Set hobby to "crochet".
// DO NOT SAY hobby equals "crochet".
// This is how we **assign** a value to a variable.
hobby = "crochet";
console.log(hobby);

// Reassign hobby to "painting"
// This overwrites what was in the box with a new value.
hobby = "painting";
console.log(hobby);

hobby = null;
console.log(hobby);

// **Initialize**: we declare & assign a variable in one statement
// `const` means we can NOT reassign the variable.
const interest = "movies";
console.log(interest);

console.log(hobby + interest);

// String concatenation = combine strings together with +
console.log("I am interested in " + interest + ".");
