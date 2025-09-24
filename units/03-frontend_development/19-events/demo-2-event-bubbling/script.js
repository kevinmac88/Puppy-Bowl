const grandparentDiv = document.querySelector(".grandparent");
const parentDiv = document.querySelector(".parent");
const childDiv = document.querySelector(".child");
const todos = document.querySelector(".todos");

todos.addEventListener("click", function (e) {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("completed");
  }
});

grandparentDiv.addEventListener("click", function (e) {
  console.log(e.target);
  alert("Grandparent div was clicked!");
});

parentDiv.addEventListener("click", function (e) {
  console.log(e.target);
  e.stopPropagation();
  alert("Parent div was clicked");
});

childDiv.addEventListener("click", function (e) {
  console.log(e.target);
  e.stopPropagation();
  alert("Child div was clicked");
});
