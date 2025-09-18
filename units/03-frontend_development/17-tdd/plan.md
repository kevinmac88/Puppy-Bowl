# Block 17 | Test Driven Development | Plan

## Review

Walk students through some of the Array Methods workshop solutions. Show the same solution with a while loop, for loop, for..of loop, array method, etc. Students should at the very least be comfortable with while loops. The rest will come with time and practice.

## Lesson

[Slides](https://docs.google.com/presentation/d/1FjZ823prAErKatpyuiNW5hsr4jm-dHYRWAuXaltF0Ss)

Live demo: start from an empty repo and build the starting code for the guided practice, up to the test suite and function definition of `add`. You can follow the comments in `math.test.js`.

1. Node
   1. Node vs browser
   2. Run `js` file with Node
2. NPM
   1. `npm add`, `npm install`
   2. Use `vitest` as testing framework
   3. `package.json`, scripts, `npm run`
3. Export empty `add` from `math.js` and import to `math.test.js`
4. Write simple test suite for `add` using `describe`, `it`/`test`, and `expect`. Explain the `toEqual` or `toBe` matcher.
5. TDD: write tests: simple cases and edge cases for `add`, then write code to pass the tests
6. `Math.random()`
7. Transition to students doing guided practice.

This block is mostly to introduce students to Node and get them more practice writing simple functions with loops. Don't stress too much about testing itself. Testing won't really be used too much in the future; this is a sneak peak.

> [!NOTE]
>
> Vitest was chosen as the testing framework since it doesn't require any additional dependencies and is relatively readable for beginners. It also meshes well with Vite, which we will be using for React in Unit 3.

## Guided Practice

[Link](https://github.com/FullstackAcademy/math-test)

Pair programming. Students write a test suite, then write code to pass a test suite.

## Workshop

[Link](https://github.com/FullstackAcademy/patterns)

Students write functions to pass test specs. Make sure they know how to read tests, but they won't have to write any more tests of their own. The functions are organized in ascending difficulty.

These can all be done without array methods. If students are feeling behind, tell them to use loops first before translating the solutions into a corresponding array method.

Students might struggle with nested loops.
