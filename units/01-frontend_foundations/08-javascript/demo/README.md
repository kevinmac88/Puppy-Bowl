# JavaScript Intro

## Instructions

1. Each person in the group should clone this repository down to their local machine. This will not be submitted.
2. Open the cloned folder with VS Code.
3. Live serve `index.html` in your browser, then open the browser console.
4. Choose one person in the group to share their screen.
5. Everyone else in the group should follow along and type the answers on their own computers.
6. As a team, read each question out loud and reach a consensus on the answer before moving to the next question.

## Evaluate expressions with browser console

1. Identify the **operator** and **operands** in this **expression**: `2 + 3`
2. Use the browser console to **evaluate** the following expressions.
   1. `2 + 2`
   2. `1.01 * 5`
   3. `18 / 3 - 2`
   4. `-5 - 20 * 3`
3. Which of the following is _not_ an operator?
   1. `*`
   2. `-`
   3. `9`
   4. `/`
4. What does `2 ** 3` evaluate to?
5. What does the `**` operator do?
6. Which of the following expressions does not evaluate to the same **value**?
   1. `16`
   2. `4 ** 2`
   3. `-8 * -2`
   4. `4 + 1 * 4`
7. Write three different expressions that evaluate to 64.

## Use the modulo operator

8. Use the browser console to **evaluate** the following expressions.
   1. `13 % 3`
   2. `14 % 3`
   3. `15 % 3`
   4. `15 % 4`
   5. `15 % 5`
9. List two numbers `% 5` that would evaluate to `0`.
10. How can **modulo** (`%`) be used to check if a number is even?
11. What does the modulo operator do?

## Store information as variables

Computers store information in **memory**, which you can imagine as a long sequence of data. A **memory address** is the location of a specific piece of information in memory.

| Variable      | Memory Address | Value     |
| ------------- | -------------- | --------- |
|               | 243            |           |
| numJellybeans | 244            | 102       |
|               | 245            |           |
|               | ...            |           |
| color         | 306            | 🟩        |
|               | 307            |           |
| temperature   | 308            | 72.5      |
|               | ...            |           |
| hobby         | 419            | "crochet" |

12. The **variable** `numJellybeans` **points to** which memory address?
13. What value is stored at that address?
14. Which variable points to memory address 308?
15. What value is stored at that address?
16. Which variable points to the **string** `"crochet"`?
17. Explain how the table should be modified to indicate that a variable named `pet` points to a cat (🐈‍⬛) which is stored at address 245.
18. In your own words, define **variable** in relation to **memory** and **memory addresses**.

## Let JavaScript handle addresses

Here is the same table again, but this time, the memory addresses have been obscured. Different programming languages have different philosophies for exposing memory addresses to developers. JavaScript prefers to handle the memory addresses for you, so you don't need to worry about them!

| Variable      | Memory Address | Value     |
| ------------- | -------------- | --------- |
|               | ???            |           |
| numJellybeans | ???            | 102       |
|               | ???            |           |
|               | ...            |           |
| color         | ???            | 🟩        |
|               | ???            |           |
| temperature   | ???            | 72.5      |
|               | ...            |           |
| hobby         | ???            | "crochet" |

19. What is the value of the variable named `temperature`?
20. The green square is stored in which variable?
21. Why might a programmer _want_ to care about memory addresses?
22. Why might a programmer _not_ want to care about memory addresses?
