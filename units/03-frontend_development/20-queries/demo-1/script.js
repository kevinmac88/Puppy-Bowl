// // demo of synchronous code.
// console.log("one");
// console.log("two");
// // this is blocking code - the code that comes AFTER it cannot run until this code
// // finishes
// for (let i = 0; i < 20000; i++) {
//   console.log("processing");
// }
// console.log("three");
// console.log("four");

// demo of asynchronous code

// console.log("one");
// console.log("two");
// console.log("three");

// // this code is non-blocking - it runs ASYNCHRONOUSLY - it runs 'off to the side'
// // the code after it can run as the timer counts off
// setTimeout(function () {
//   console.log("four");
// }, 3000);
// console.log("five");

console.log("first");

const todoList = document.querySelector("#todo-list");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    // now that the request is finished AND we turned the response body into a JS object
    // that we can work with, we'll do some DOM stuff
    const todosUI = json.map((todo) => {
      const newTodoItem = document.createElement("li");
      newTodoItem.textContent = `${todo.title} COMPLETED: ${todo.completed}`;
      return newTodoItem;
    });
    todoList.replaceChildren(...todosUI);
  })
  .catch((err) => console.log(err));
console.log("second");
