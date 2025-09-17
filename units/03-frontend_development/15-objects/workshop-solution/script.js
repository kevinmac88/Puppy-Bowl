// get user's order in the form of a comma-separated list

const usersOrder = prompt(
  "Enter the frozen yogurt flavors you'd like as a comma-separated list.",
  "vanilla, vanilla, strawberry, chocolate, boysenberry"
);

// take user's order and create an array of flavors, by splitting the string
// along the commas
const flavors = usersOrder.split(",");

// create an empty order object
const orders = {};

// loop over array
for (let i = 0; i < flavors.length; i++) {
  // check if flavor is NOT already in the orders object
  // use the in operator, treat the flavor from the array as a key for
  // the object - remember, the object's format should be something like
  // {vanilla: 2, chocolate: 3}
  // remove leading and trailing whitespace in case user adds spaces after commas
  flavors[i] = flavors[i].trim();

  if (!(flavors[i] in orders)) {
    console.log("adding flavor...");
    // add the flavor to the orders object AND set the value to 1
    orders[flavors[i]] = 1;
  } // else we increase the value of the property/flavor by 1
  else {
    orders[flavors[i]] += 1;
  }
}

console.log(orders);
