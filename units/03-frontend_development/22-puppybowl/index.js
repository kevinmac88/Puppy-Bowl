const BASE = "https://fsa-puppy-bowl.herokuapp.com/api";
const COHORT = "/2803-PUPPIES";
const RESOURCE = "/players";
const API = BASE + COHORT + RESOURCE;

let players = [];
let selectedPlayer;

//updates state w/ all puppies from API
async function getPlayers() {
  try {
    const response = await fetch(API);
    const result = await response.json(); //converts response to obj
    players = result.data.players;
    render();
  } catch (err) {
    console.error(err);
  }
}

//update state w/ single puppy from API
async function getPlayer(id) {
  try {
    const response = await fetch(API + "/" + id);
    const result = await response.json();
    selectedPlayer = result.data.player;
    render();
  } catch (e) {
    console.error(e);
  }
}

console.log(API);

//invite new player via API
async function addPlayer(player) {
  try {
    const res = await fetch(API, {
      method: "POST",
      body: JSON.stringify(player),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    if (json.success) {
      getPlayers();
    }
  } catch (err) {
    console.error(err);
  }
}

//delete the player w/ given ID via API
async function removePlayer(id) {
  try {
    const res = await fetch(`${API}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`Delete failed: ${res.status}`);

    // this one clears the details pain if you just deleted the current one selected
    if (selectedPlayer?.id === id) {
      selectedPlayer = undefined;
    }
    //note to self: ? is the optional chaining operator. basically stops the program from crashing if selectedplayer is undefined by letting it just do nothing.

    await getPlayers(); // updates `players` and calls render()
  } catch (err) {
    console.error(err);
  }
}
// components

//player name that shows details when clicked
function PlayerListItem(player) {
  const $li = document.createElement("li");
  $li.innerHTML = `
    <a href="#selected">${player.name}</a>`;
  $li.addEventListener("click", () => getPlayer(player.id));
  return $li;
}

//list of all players
function PlayerList() {
  const $ul = document.createElement("ul");
  $ul.classList.add("lineup");

  const $players = players.map(PlayerListItem);
  $ul.replaceChildren(...$players);

  return $ul;
}

//detailed info on selected player
function PlayerDetails() {
  if (!selectedPlayer) {
    const $p = document.createElement("p");
    $p.textContent = "Please select a player to learn more.";
    return $p;
  }
  const { name, id, imageUrl, description, breed, status } = selectedPlayer;

  const $player = document.createElement("section");
  $player.classList.add("player");
  $player.innerHTML = `
<h3>${selectedPlayer.name} ${selectedPlayer.id}</h3>
<figure>
  <img alt="${selectedPlayer.name}" src="${selectedPlayer.imageUrl}" />
  </figure>
  <p><span class="key"> Name: </span>${selectedPlayer.name} </p>
   <p> <span class="key">Breed:</span> ${selectedPlayer.breed} </p>
    <p> <span class="key">Team:</span> ${selectedPlayer.team} </p>
     <p> <span class="key">Status:</span> ${selectedPlayer.name}</p>
  <button>Remove Player</button>`;
  const $button = $player.querySelector("button");
  $button.addEventListener("click", function () {
    removePlayer(selectedPlayer.id);
  });
  return $player;
}

function NewPlayerForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
    Name
    <input name="name" required />
    </label>
   
     <label>
      Breed
      <input name="breed" required />
    </label>
    <label>
    Profile Pic
    <input name="imageUrl"  />
    </label>
    <label>
      Status
      <select name="status">
        <option value="bench" selected>Bench</option>
        <option value="field">Field</option>
      </select>
    </label>
    <button>Invite Player</button>`;

  $form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData($form);
    addPlayer({
      name: data.get("name"),
      breed: data.get("breed"),
      imageUrl: data.get("imageUrl"),
      status: data.get("status"),
    });
  });
  return $form;
}

//render
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Kevin's Puppy Bowl</h1>
    <main>
    <section>
    <h2>Lineup</h2>
    <PlayerList></PlayerList>
    <h3>Invite a new player</h3>
    <NewPlayerForm></NewPlayerForm>
    </section>
    <section id="selected">
    <h2>Player Details</h2>
    <PlayerDetails></PlayerDetails>
    </section>
    </main>`;

  $app.querySelector("PlayerList").replaceWith(PlayerList());
  $app.querySelector("NewPlayerForm").replaceWith(NewPlayerForm());
  $app.querySelector("PlayerDetails").replaceWith(PlayerDetails());
}

async function init() {
  await getPlayers();
  render();
}
init();
