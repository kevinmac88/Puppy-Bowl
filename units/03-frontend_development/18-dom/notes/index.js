/** Identical to `notes.js` but without the extra comments */
/**
 * @typedef Problem
 * @property {number} num1
 * @property {number} num2
 * @property {number} answer - the sum of num1 and num2
 */

// === Constants ===
const DIFFICULTY = 100;
const NUM_PROBLEMS = 100;

// === State ===
/** @returns {Problem} a randomly generated math problem */
function makeProblem() {
  const num1 = Math.floor(Math.random() * DIFFICULTY);
  const num2 = Math.floor(Math.random() * DIFFICULTY);
  const answer = num1 + num2;
  return { num1, num2, answer };
}

const problems = Array.from({ length: NUM_PROBLEMS }, makeProblem);

// === Components ===
/**
 * @param {Problem} problem
 * @returns {HTMLElement} a card representing the given problem
 */
function MathCard(problem) {
  const { num1, num2, answer } = problem;

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
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
      <h1>Math Cards</h1>
      <MathCards></MathCards>
    `;
  $app.querySelector("MathCards").replaceWith(MathCards());
}

render();
