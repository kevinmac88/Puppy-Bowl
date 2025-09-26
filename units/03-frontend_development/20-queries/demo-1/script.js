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

// const todoList = document.querySelector("#todo-list");
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((json) => {
//     console.log(json);
//     // now that the request is finished AND we turned the response body into a JS object
//     // that we can work with, we'll do some DOM stuff
//     const todosUI = json.map((todo) => {
//       const newTodoItem = document.createElement("li");
//       newTodoItem.textContent = `${todo.title} COMPLETED: ${todo.completed}`;
//       return newTodoItem;
//     });
//     console.log(todosUI);
//     todoList.replaceChildren(...todosUI);
//   })
//   .catch((err) => console.error(err));

// goal: create a function that can fetch todos from the JSON placeholder API and
// return the array of todos so that some other code can work with them. the above code,
// with its promise-based .then().catch() syntax is not ideal for this.

async function getTodos() {
  try {
    // fetch the data - get the response object
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    // convert the response object's stream (in its body) to a JS object
    const json = await res.json();
    // return that JS object (which for this API is an array)}
    return json;
  } catch (err) {
    console.error(err);
    return { message: "Something went wrong fetching todos" };
  }
}

function createTodoList(todos) {
  if (!todos || !Array.isArray(todos)) return;
  console.log("the todos", todos);
  const todosUI = todos.map((todo) => {
    const newItem = document.createElement("li");
    newItem.textContent = `${todo.title} COMPLETED: ${todo.completed}`;
    return newItem;
  });

  todoList.replaceChildren(...todosUI);
}
const todoList = document.querySelector("#todo-list");

// const todosData = await getTodos();
// console.log("the next code that's supposed to run");
// createTodoList(todosData);
// // todos.map(createTodo)
// console.log("AFTER CREATETODOLIST");

async function render() {
  // get todos with getTodos()
  // create the todos UI with createTodoList
  const todosData = await getTodos();
  createTodoList(todosData);
}

render();
