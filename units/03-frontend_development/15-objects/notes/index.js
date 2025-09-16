/*
Arrays can be elements in arrays! These are called **nested** arrays.
An example of a 2D array:
*/
{
  const weather = [
    ["temperature", 29.4],
    ["forecast", "partly cloudy"],
    ["humidity", 0.38],
    ["precipitation", 0.16],
  ];

  weather[0][1]; // 29.4
  weather[3][0]; // "precipitation"
}

/*
An **object** is a collection of **properties** (key-value pairs), denoted by curly braces.
{
  key: value,
  key: value,
}
*/

const weather = {
  temperature: 29.4,
  forecast: "partly cloudy",
  humidity: 0.38,
  precipitation: 0.16,
};

/*
The **shape** of an object refers to the names of the keys and the types of their values.
You can hover over an object variable in VS Code to see its shape.

Generally, use an array for a group of similar things.
Use an object for a single thing with multiple properties.
*/

{
  // === Access ===
  // To access a value in an object, we need the key.
  // If we know the name of the key, we can use dot notation.
  weather.temperature; // 29.4
  weather.forecast; // "partly cloudy"
  weather.wind; // undefined

  // If the developer does not know the key ahead of time,
  // or if the key will change (i.e. a variable),
  // we use bracket notation
  const key = prompt("Give me a key");
  weather[key]; // Will change depending on the value of `key`

  // If we want _just_ the keys or _just_ the values:
  // The order will not be consistent.
  Object.keys(weather); // array of all the keys
  Object.values(weather); // array of all the values

  // Check if a key exists:
  "humidity" in weather; // true
  "wind" in weather; // false
}

{
  // === Mutation ===

  delete weather.temperature; // Delete the temperature property from weather

  // To add it back or mutate, we treat it like a variable & assign a value
  // This creates a new property if the key doesn't already exist
  weather.temperature = 24.1;

  // This mutates the value if the key does already exist
  weather.temperature = 72.6;
}

{
  // === Iteration ===
  // We iterate through an object via its keys using a for..in loop
  // The order of iteration is _not_ consistent.
  for (const property in weather) {
    const value = weather[property];
    console.log(property, value);
  }
}

{
  // === JSON ===
  // Java Script Object Notation
  // It is a way for us to translate between an object & its text representation.
  // Since all website communication is done via HTTP, which only transfers text,
  // we want to be able to turn objects into text and vice versa.

  // Stringify turns object -> string
  const weatherAsText = JSON.stringify(weather);

  // Parse turns JSON -> object
  const weatherAsObject = JSON.parse(weatherAsText);
}
