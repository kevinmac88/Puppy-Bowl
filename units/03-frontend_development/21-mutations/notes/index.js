/**
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
    recipes = result.data;

    render();
  } catch (e) {
    console.error(e);
  }
}

/**
 * Create a new recipe via the API
 * @param {Recipe} recipe
 */
async function addRecipe(recipe) {
  try {
    // `fetch` requires some extra information to make non-GET requests
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    });

    // Since this is a **mutation**, that means the data on the server has changed.
    // We need to query the API again to get the updated data.
    await getRecipes();
  } catch (e) {
    console.error(e);
  }
}

/**
 * Deletes the recipe with the given id
 * @param {string | number} id
 */
async function deleteRecipe(id) {
  try {
    // The ID of the recipe to delete is sent via the URL, not the body!
    // DELETE requests don't have a body.
    await fetch(API + "/" + id, {
      method: "DELETE",
    });

    // This is also a mutation, so we need to query the API again.
    await getRecipes();
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
    <button>Delete</button>
  `;

  const $delete = $card.querySelector("button");
  $delete.addEventListener("click", () => deleteRecipe(recipe.id));

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

function NewRecipeForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Name
      <input name="name" required />
    </label>
    <label>
      Description
      <input name="description" required />
    </label>
    <label>
      Image URL
      <input name="imageUrl" required />
    </label>
    <button>
      Add new recipe
    </button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData($form);

    // The shape of this object should match the schema provided in the API docs!
    addRecipe({
      name: data.get("name"),
      imageUrl: data.get("imageUrl"),
      description: data.get("description"),
    });
  });
  return $form;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Recipes</h1>
    <NewRecipeForm></NewRecipeForm>
    <RecipeCollection></RecipeCollection>
  `;
  $app.querySelector("RecipeCollection").replaceWith(RecipeCollection());
  $app.querySelector("NewRecipeForm").replaceWith(NewRecipeForm());
}

async function init() {
  await getRecipes();
  render();
}

init();
