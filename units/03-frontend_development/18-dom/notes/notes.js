/**
 * @typedef Problem
 * @property {number} num1
 * @property {number} num2
 * @property {number} answer - the sum of num1 and num2
 */

// === Constants ===
/*
  **Constants**, denoted by SCREAMING_SNAKE_CASE, are values that do not change
  during the lifetime of an application. Examples include:
  - application settings and configuration
  - math constants
*/
const DIFFICULTY = 100;
const NUM_PROBLEMS = 100;

// === State ===
/*
  **State** refers to data that might change as a result of user interaction.
  An application will **render** different HTML based on the current state.
  We'll learn how to change state in response to user interaction soon!
*/
/** @returns {Problem} a randomly generated math problem */
function makeProblem() {
  const num1 = Math.floor(Math.random() * DIFFICULTY);
  const num2 = Math.floor(Math.random() * DIFFICULTY);
  const answer = num1 + num2;

  // This **object property shorthand** is syntactic sugar for
  // when the value of a key is a variable with the same name.
  // { num1: num1, num2: num2, answer: answer }
  return { num1, num2, answer };
}

const problems = Array.from({ length: NUM_PROBLEMS }, makeProblem);

// Array.from is syntactic sugar for building an array:
{
  const problems = [];
  for (let i = 0; i < NUM_PROBLEMS; i++) {
    problems.push(makeProblem());
  }
}

// === Components ===
/*
  **Components** are reusable functions that build HTML elements based on some data.
  They are the main building blocks of a web application.
*/

/**
 * @param {Problem} problem
 * @returns {HTMLElement} a card representing the given problem
 */
function MathCard(problem) {
  // This **object destructuring** syntax allows us to quickly extract properties.
  const { num1, num2, answer } = problem;
  // It is shorthand for:
  {
    const num1 = problem.num1;
    const num2 = problem.num2;
    const answer = problem.answer;
  }

  // $ prefix is being used here to reinforce the distinction between a
  // "regular" JS variable and a variable that holds a reference to a DOM element.
  const $card = document.createElement("article");
  $card.classList.add("card");
  $card.innerHTML = `
    <p>${num1}</p>
    <p class="operation">
      <span>+</span><span>${num2}</span>
    <p>
    <hr>
    <p>${answer}</p>
  `;

  return $card;
}

/** An article containing all problems as MathCards */
function MathCards() {
  const $container = document.createElement("article");
  $container.classList.add("cards");

  const $cards = problems.map(MathCard);
  $container.replaceChildren(...$cards);

  return $container;
}

// === Render ===
/*
  **Render** is the process of converting state into HTML elements that users see.
  Even though we can build and create elements in JS, users will not see them
  until the components are **mounted** onto an existing element in the document.
*/
function render() {
  const $app = document.querySelector("#app");

  /*
    INSTRUCTOR NOTE:
    `innerHTML` with "fake" components + `replaceWith` is a hack to replicate JSX
    & avoid the verbosity / tedium of `createElement` and `append` for bigger components.
    It's not the most elegant, but it's a compromise between students getting to
    use React-like syntax while still understanding the underlying concepts
    of how React works.
  */
  $app.innerHTML = `
      <h1>Math Cards</h1>
      <MathCards></MathCards>
    `;
  $app.querySelector("MathCards").replaceWith(MathCards());
}

render();
