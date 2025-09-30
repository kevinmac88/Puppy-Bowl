const BASE = "https://fsa-puppy-bowl.herokuapp.com/api/";
const COHORT = "/2803-PUPPIES"; // Make sure to change this!
const RESOURCE = "/players";
const API = BASE + COHORT + RESOURCE;

let puppies = [];
let selectedPuppy;

//updates state w/ all puppies from API
async function getPuppies() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    render();
  } catch (e) {
    console.error(e);
  }
}
