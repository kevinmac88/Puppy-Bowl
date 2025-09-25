features/spec

Improve Add Employees UI

user stories:

As a user, I see page with three inputs; one is labeled 'Name',
another 'Position', the last 'Salary'. under the inputs, there is a
'submit' button

The top of the page has a title - Add an Employee

under the title, we see a list of current employees

When I fill in the inputs, and I click the submit button,
the new employee appears in the list.

Problem decomposition - this problem has a lot to it

1.  Capture all user inputs in our text fields (text input elements) - how would you do this?
2.  when the button is clicked to submit the form, we create an employee object, put
    it into the employeeList array (update our state)

    WE can do steps 1 and 2 together in the eventListener for the form when it
    is submitted. we will use a FormData object to get the inputs' values, create a new Employee object and push that object into employeeList

3.  re-render the employee table
    call createEmployeeRows() - this only re-renders the employeeTable

If I try to add an employee but have not filled in all the inputs,
I see an error message that tells me to fill in the inputs.
