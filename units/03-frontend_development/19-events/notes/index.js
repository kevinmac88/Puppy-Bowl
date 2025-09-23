// === State ===
const words = ["this", "is", "a", "sentence"];

/*
  We need to rerender the app whenever the state changes!
  One way to ensure this is to organize that logic into
  functions that handle changing state.
  Instead of directly modifying state variables, we now
  call these functions instead.
*/

/** Adds the word to the sentence */
function addWord(word) {
  words.push(word);
  render();
}

/** Removes the word at the given index from the sentence */
function removeWord(index) {
  words.splice(index, 1);
  render();
}

// === Components ===

/** Form that allows user to add a word to the sentence */
function SentenceForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add a word to the sentence
      <input name="word" />
    </label>
    <button>+</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    // FormData is preferable to manually extracting values from individual inputs.
    const data = new FormData($form);
    const word = data.get("word");
    addWord(word);
  });
  return $form;
}

/**
 * A single Word that removes itself when clicked
 * @param {string} word
 * @param {number} index - the index of the word in the sentence
 */
function Word(word, index) {
  const $word = document.createElement("span");
  $word.classList.add("word");
  $word.textContent = word;

  // We need the index in order to know which word to remove
  $word.addEventListener("click", () => removeWord(index));

  return $word;
}

/** A group of Words */
function Sentence() {
  const $sentence = document.createElement("p");
  $sentence.classList.add("sentence");

  // `map` will also pass the index into Word!
  const $words = words.map(Word);
  $sentence.replaceChildren(...$words);

  return $sentence;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Sentence Builder</h1>
    <SentenceForm></SentenceForm>
    <Sentence></Sentence>
  `;
  $app.querySelector("SentenceForm").replaceWith(SentenceForm());
  $app.querySelector("Sentence").replaceWith(Sentence());
}
render();
