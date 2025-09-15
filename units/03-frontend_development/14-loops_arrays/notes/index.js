// LOOPS / Iteration
// A loop allows a computer to repeat the same set of instructions.

{
  // Initialization
  // The conventional variable name for loops is i, j, k
  // i is short for "iteration"
  let i = 0;

  // Condition
  while (i < 5) {
    // Body
    console.log(i);

    // Afterthought
    // If you forget the afterthought, you might get stuck in an infinite loop!
    i = i + 1;

    // Syntactic sugar = code that is syntactically sweeter to write
    // The code has identical or very similar semantics
    // i += 1;
    // i++; Avoid b/c it's harder to maintain
  }

  console.log("Done!");
}

{
  // A for loop is syntactic sugar for a while loop
  // for (initialization; condition; afterthought) { body }
  for (let i = 0; i < 5; i++) {
    // debugger;
    // The debugger statement sets a **breakpoint** in the code.
    // The browser will freeze your code when it sees a breakpoint.
    // Put debugger _before_ the code you want to debug.

    console.debug("for", i);
  }
  console.log("Done!");
}
