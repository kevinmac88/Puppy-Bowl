/**
 * @typedef Artist
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} imageUrl
 */

// === Constants ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2508-FTB-ET-WEB-FT"; // Make sure to change this!
const RESOURCE = "/artists";
const API = BASE + COHORT + RESOURCE;

// === State ===
let artists = [];
let selectedArtist;

/** Updates state with all artists from the API */
async function getArtists() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    artists = result.data;
    render();
  } catch (e) {
    console.error(e);
  }
}

/** Updates state with a single artist from the API */
async function getArtist(id) {
  try {
    const response = await fetch(API + "/" + id);
    const result = await response.json();
    selectedArtist = result.data;
    render();
  } catch (e) {
    console.error(e);
  }
}

/**
 * Invites a new artist via the API
 * @param {Artist} artist - The artist to invite
 */
async function addArtist(artist) {
  try {
    const res = await fetch(API, {
      method: "POST",
      body: JSON.stringify(artist),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    console.log(json);
    if (json.success) {
      getArtists();
    }
  } catch (err) {
    console.error(err);
  }
}

/**
 * Deletes the artist with the given ID via the API
 * @param {string | number} id
 */
async function removeArtist(id) {
  try {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    console.log(res);
    if (res.status === 204) {
      selectedArtist = null;
      getArtists();
    }
    // getArtists();
  } catch (err) {
    console.error(err);
  }
}

// === Components ===

/** Artist name that shows more details about the artist when clicked */
function ArtistListItem(artist) {
  const $li = document.createElement("li");
  $li.innerHTML = `
    <a href="#selected">${artist.name}</a>
  `;
  $li.addEventListener("click", () => getArtist(artist.id));
  return $li;
}

/** A list of names of all artists */
function ArtistList() {
  const $ul = document.createElement("ul");
  $ul.classList.add("lineup");

  const $artists = artists.map(ArtistListItem);
  $ul.replaceChildren(...$artists);

  return $ul;
}

/** Detailed information about the selected artist */
function ArtistDetails() {
  if (!selectedArtist) {
    const $p = document.createElement("p");
    $p.textContent = "Please select an artist to learn more.";
    return $p;
  }

  const $artist = document.createElement("section");
  $artist.classList.add("artist");
  $artist.innerHTML = `
    <h3>${selectedArtist.name} #${selectedArtist.id}</h3>
    <figure>
      <img alt=${selectedArtist.name} src=${selectedArtist.imageUrl} />
    </figure>
    <p>${selectedArtist.description}</p>
    <button>Remove artist</button>
  `;

  const $button = $artist.querySelector("button");
  $button.addEventListener("click", function () {
    removeArtist(selectedArtist.id);
  });

  return $artist;
}

function NewArtistForm() {
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
      Profile Picture
      <input name="imageUrl" required />
    </label>
    <button>Invite artist</button>
  `;

  $form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData($form);
    addArtist({
      name: data.get("name"),
      description: data.get("description"),
      imageUrl: data.get("imageUrl"),
    });
  });

  return $form;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Fullstack Gala Admin</h1>
    <main>
      <section>
        <h2>Lineup</h2>
        <ArtistList></ArtistList>
        <h3>Invite a new artist</h3>
        <NewArtistForm></NewArtistForm>
      </section>
      <section id="selected">
        <h2>Artist Details</h2>
        <ArtistDetails></ArtistDetails>
      </section>
    </main>
  `;
  $app.querySelector("ArtistList").replaceWith(ArtistList());
  $app.querySelector("NewArtistForm").replaceWith(NewArtistForm());
  $app.querySelector("ArtistDetails").replaceWith(ArtistDetails());
}

async function init() {
  await getArtists();
  render();
}

init();
