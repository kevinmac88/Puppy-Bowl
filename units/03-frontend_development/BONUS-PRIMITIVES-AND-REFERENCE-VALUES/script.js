let variable = { something: "value" };
// let variable = 5;
function updateVariableInLocalScope(variable) {
  if (typeof variable === "number") {
    variable += 1;
    console.log(variable);
  } else if (typeof variable === "object") {
    variable.newProperty = "hello";
  }
}
updateVariableInLocalScope(variable);
console.log(variable);

// PRIMITIVE VALUES - numbers, string, null, undefined, booleans
// REFERENCE VALUES - objects (literals or instances of classes) and arrays

// comparing primitive values
const num1 = 5;
const num2 = 5;
console.log(num1 === num2); // do i get T or F?

// comparing reference values
const book1 = { title: "Great Expectations", author: "Charles Dickens" };
const book2 = { title: "Great Expectations", author: "Charles Dickens" };
const book3 = book1;
book3.publisher = "Penguin";
console.log(book1);
console.log(book3);
delete book1.publisher;
console.log(book3);
console.log(book1 === book2); // do I get T or F?
