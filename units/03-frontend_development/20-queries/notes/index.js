/**
 * How do we know what properties a Recipe has? By reading the documentation!
 * @typedef Recipe
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} imageUrl
 */

// === Constants ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/COHORT-DEMO"; // Make sure to change this!
const RESOURCE = "/recipes";
const API = BASE + COHORT + RESOURCE;

// === State ===
let recipes = [];

/** Get all recipes from the API */
async function getRecipes() {
  try {
    const response = await fetch(API);
    const result = await response.json();

    // Why do we need to do `.data` on the result?
    // Use a debugger or console.log to see the shape of the result
    recipes = result.data;

    // State changed, so we still need to re-render!
    render();
  } catch (e) {
    console.error(e);
  }
}

// === Components ===

/** A card with information about a Recipe */
function RecipeCard(recipe) {
  const $card = document.createElement("article");
  $card.classList.add("recipe");
  $card.innerHTML = `
    <h2>${recipe.name} #${recipe.id}</h2>
    <figure>
      <img alt=${recipe.name} src=${recipe.imageUrl} />
    </figure>
    <p>${recipe.description}</p>
  `;
  return $card;
}

/** A gallery of RecipeCards */
function RecipeCollection() {
  const $collection = document.createElement("article");
  $collection.classList.add("recipes");
  const $recipes = recipes.map(RecipeCard);
  $collection.replaceChildren(...$recipes);
  return $collection;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Recipes</h1>
    <RecipeCollection></RecipeCollection>
  `;
  $app.querySelector("RecipeCollection").replaceWith(RecipeCollection());
}

// We need to call getRecipes once at the beginning to get the data
// We don't want to call `getRecipes` in `render`, since we call `render` in `getRecipes`
async function init() {
  await getRecipes();
  render();
}

init();
