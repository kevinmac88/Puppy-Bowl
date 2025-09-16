// Object literals - objects that we write out

const employee = {
  name: "John Smith",
  age: 35,
  state: "Texas",
  salary: 70000,
  position: "accountant",
  "start-date": "Sept 16, 2025",
};

const employeeTwo = {
  name: "Jane Doe",
  age: 28,
  state: "Wyoming",
  salary: 130000,
  position: "programmer",
};

const employeeThree = {
  name: "John Doe",
  age: 23,
  state: "New York",
  salary: 200000,
  position: "ML Engineer",
};

// access properties with dot notation

console.log(employee.name);

// update an existing property with dot notation
employee.name = "Jon Smith";

// this function takes one of our employee objects and outputs a description. Notice
// this function relies on/assumes a given shape for the object, viz. the object has
// properties 'name', 'position' and 'salary'
function describeEmployee(employeeObj) {
  console.log(
    `${employeeObj.name} is a(n) ${employeeObj.position} and earns ${employeeObj.salary} dollars.`
  );
}

// call our function
describeEmployee(employeeThree);

// update an existing property on employee
employee.salary = 80000;

// mutate employeeTwo - we will add and set a property 'startDate'
employeeTwo.startDate = "Sept. 16, 2025";

console.log(JSON.stringify(employeeTwo));

delete employeeTwo.startDate;

console.log(employeeTwo);

// example of using bracket notation to access a dynamic value/property
const propertyIWantToAccess = "position";

console.log(employeeThree[propertyIWantToAccess]);

// example of using bracket notation to access a property that does NOT follow JS naming rules
// above, employee has a property "start-date", which is kebab case, which violates JS naming rules,
// so we use bracket notation to access it. this is something that often happens with 3rd party APIs

console.log(employee["start-date"]);

// loop through employee Two to see keys - here 'banana' demonstrates that we can create
// any alias/nickname for the individual keys that we want

for (const banana in employee) {
  console.log(banana); // this logs the key stored in banana at a given iteration
  // here, we access the VALUE of employee that belongs to the current key
}
for (const banana in employee) {
  // here, we access the VALUE of employee that belongs to the current key
  console.log(employee[banana]);
}

const employeeKeys = Object.keys(employee);
console.log(Object.values(employee));

// older way to loop through array and access values
for (let i = 0; i < employeeKeys.length; i++) {
  console.log(employee[employeeKeys[i]]);
}
