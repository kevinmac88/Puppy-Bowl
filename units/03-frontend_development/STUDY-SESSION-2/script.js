/**
 * @typedef Employee
 * @property {string} name - Name of the employee
 * @property {string} position - Employee's position in the company
 * @property {number} salary - Employee's current salary
 */

/** @type {Employee[]} */
const employeeList = [
  { name: "Employee A", position: "Manager", salary: 50000 },
  { name: "Employee B", position: "Salesperson", salary: 60000 },
];

// References to DOM node for tbody
const tableBody = document.querySelector("#employee-table tbody");

function createEmployeeRows() {
  const employeeRows = employeeList.map((employee) => {
    const newRow = document.createElement("tr");
    for (const property in employee) {
      const newCell = document.createElement("td");
      newCell.textContent = employee[property];
      newRow.appendChild(newCell);
    }
    return newRow;
  });
  console.log(employeeRows);
  tableBody.replaceChildren(...employeeRows);
}

createEmployeeRows();

// DOM nodes for the form and error & success messages
const addEmployeeForm = document.querySelector("#add-employee");
const errorMessage = document.querySelector("#error-msg");
const successMessage = document.querySelector("#success-msg");
// our eventlistner that will create and add the new employee from the form inputs
addEmployeeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!errorMessage.classList.contains("hidden")) {
    errorMessage.classList.add("hidden");
  }
  const formData = new FormData(addEmployeeForm);
  const name = formData.get("name");
  const position = formData.get("position");
  const salary = +formData.get("salary");
  if (!name || !position || !salary) {
    errorMessage.classList.remove("hidden");
    return;
  }
  const newEmployee = {
    name,
    position,
    salary,
  };
  employeeList.push(newEmployee);

  createEmployeeRows();
  successMessage.classList.remove("hidden");
  addEmployeeForm.reset();
  setTimeout(function () {
    successMessage.classList.add("hidden");
  }, 2000);
});
// global variable that can be updated to stop the loop below
let userIsFinished = false;

// while (!userIsFinished) {
//   // 1. Prompt the user for the new employee data - name, position, salary - as a
//   // comma-separated string
//   const newEmployeeData = prompt(
//     "Please enter the employee's name, position and salary",
//     "John Wayne, Sales, 65000"
//   );
//   if (newEmployeeData === null) {
//     userIsFinished = true;
//     continue;
//   }
//   // 2. Create an object of type Employee from this data
//   // a. Split the newEmployeeData string by commas - we assume the first item will be the
//   // employee name, the second their position, the third their salary all separated by commas
//   // so split will give us an array that looks like this ["John Wayne", "Sales", "65000"]
//   const namePositionSalaryArray = newEmployeeData.split(",");

//   // 3. Put the object created in step 2 into our list of employees
//   // call the function declared below to create the new employee
//   const newEmployee = createEmployee(namePositionSalaryArray);
//   employeeList.push(newEmployee);
//   console.log(employeeList);
//   // 4. Alert the user that the employee was added successfully
//   alert("Employee added successfully!");
// }

/**
 *
 * @param {String[]} employeeDataArr - array with name, position and salary in that order
 * @returns @type Employee
 */
function createEmployee(employeeDataArr) {
  // b. create a variable containing an empty object literal e.g. const newEmployee = {}
  const newEmployee = {};
  // c. set the properties of this object to the corresponding value in the array
  newEmployee.name = employeeDataArr[0].trim();
  newEmployee.position = employeeDataArr[1].trim();
  newEmployee.salary = Number(employeeDataArr[2].trim());
  // We COULD combine steps b and c
  // const newEmployee = {
  //   name: employeeDataArray[0].trim(),
  //   position: employeeDataArray[1].trim(),
  //   salary: Number(employeeDataArray[2].trim()),
  // };
  return newEmployee;
}
