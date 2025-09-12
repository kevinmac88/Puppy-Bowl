function getTicketPrice() {
  const age = prompt("Please enter ticketholder's age");

  if (
    age === null ||
    typeof Number(age) !== "number" ||
    !Number.isFinite(Number(age))
  ) {
    alert("sorry you must enter a valid age!");
    return;
  }
  // assume a base price of $20
  const baseTicketPrice = 20;
  const seniorDiscountRate = 0.6;
  const childDiscountRate = 0.9;

  // first check age for discounts - in this example,
  // we're checking if the ticketholder is a senior citizen
  if (age >= 65) {
    const discount = baseTicketPrice * seniorDiscountRate;
    const newTicketPrice = baseTicketPrice - discount;
    alert(`you will pay ${newTicketPrice}`);
  } else if (age <= 12) {
    const discount = baseTicketPrice * childDiscountRate;
    const newTicketPrice = baseTicketPrice - discount;
    alert(`You will pay ${newTicketPrice}`);
  } else {
    alert(`You will pay ${baseTicketPrice}`);
  }
}

getTicketPrice();
// this example we're checking if the ticketholder is a child
// if (age <= 12) {
//   const discount = baseTicketPrice * childDiscountRate;
//   const newTicketPrice = baseTicketPrice - discount;
//   alert(`You will pay ${newTicketPrice}`);
// }

// if (age < 65 && age > 12) {
//   alert(`You will pay ${baseTicketPrice}`);
// }
