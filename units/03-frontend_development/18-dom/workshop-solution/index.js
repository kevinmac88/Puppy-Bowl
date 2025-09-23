/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  const randomName = Math.floor(Math.random() * NAMES.length);
  const randomOccupation = Math.floor(Math.random() * OCCUPATIONS.length);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  // return a freelancer object with the random data
  return {
    name: NAMES[randomName],
    occupation: OCCUPATIONS[randomOccupation],
    rate: rate,
  };
}

// State variable - this array will have NUM_FREELANCERS freelancers objects in it
const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

// Create a function that gets the average rate for ALL freelancers
function getAverageRate() {
  const total = freelancers.reduce((total, curr) => total + curr.rate, 0);
  return total / freelancers.length;
}

// State variable - this will store the average rate for the freelancers

const freelancerAverage = getAverageRate();

// Function to create UI for a single freelancer

function FreelancerRow({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
        <td>${name}</td>
        <td>${occupation}</td>
        <td>${rate}</td>
    `;
  return $tr;
}

// Function to create UI for all freelancers

function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  console.log($freelancers);
  $tbody.replaceChildren(...$freelancers);
  console.log($tbody);
  return $tbody;
}

function AverageRate() {
  const $p = document.createElement("p");
  $p.textContent = freelancerAverage;
  console.log($p);
  return $p;
}

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <AverageRate></AverageRate>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody id="FreelancerRows"></tbody>
  </table>
  `;

  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();
