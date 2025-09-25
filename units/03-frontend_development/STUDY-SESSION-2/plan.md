features/spec

Add Employee Feature

user story:
As a user of this app, i open the web page and i see a prompt window that
tells me to add an employee. It first asks for the employee's name, then
their position and their salary. After i put this in, I see an alert that tells me
the employee was added to the system successfully (note to developers - we will also
see the updated list of ALL employees in the console)

Data:

a list of employees - we add to this list. LIST - array
what does an employee look like? OBJECT - an Employee object: it will have a name (string), position (string) and a salary(number).

Program Flow:

we want to allow the user to keep adding employees - WHILE loop because we don't know in advance how many employees we're gonna add

each iteration (step in the loop): 1. prompt the user (with a prompt window) for the employee's name - we'll start
with a single prompt, asking for the employee data in a string containing a comma-separated list (e.g.
"Zach Taylor, Accountant, 70000") - this will be stored in a variable
create an object with the shape described above in the 'Data' section with the employee
data
put this object (push) into our list (array)
alert the user that the employee was added successfully
