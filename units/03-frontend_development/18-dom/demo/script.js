// get browser object corresponding to the h1 tag in our document (our index.html file)
// note this is in fact a BROWSER thing - this would not work in node
console.log(document);
const h1 = document.querySelector("h1");
// h1.style.color = "orange";
h1.classList.add("green-text");
console.log(h1.classList);
// document.querySelector("p").style.color = "red";

// select the FIRST paragraph with the class highlighted-text...
// const highlightedParagraph = document.querySelector(".highlighted-text");
// ...remove the class highlighted-text from it.
// highlightedParagraph.classList.remove("highlighted-text");

// modify ALL paragraphs with the class highlighted text...
const highlightedParagraphAll = document.querySelectorAll(".highlighted-text");
// .. inspect the object that .querySelectorAll gives us - it's called a NodeList,
// an array-like object - has some of the properties and methods of arrays, but not all
console.log(highlightedParagraphAll);
// loop through the NodeList and update the styles of each element in that NL
for (let i = 0; i < highlightedParagraphAll.length; i++) {
  highlightedParagraphAll[i].classList.remove("highlighted-text");
  highlightedParagraphAll[i].style.color = "green";
  highlightedParagraphAll[i].style.fontSize = "70px";
}

// we want to add some text to our button with the id of some-action
// first we select the button object from the document object - we'll use the id as our
// selector
const actionButton = document.querySelector("#some-action");
console.log(actionButton);
// use the object stored in actionButton to update the text of the button by
// accessing that objects innerText property
actionButton.innerText = "Click Here";

// we would like to add a list item to our <ul> with the id todo-list

// 1. create element
const newListItem = document.createElement("li");
console.log(newListItem);
// 2. we need to add some text to our new list item -
// you could add styling at this point if you want
newListItem.innerText = "Take nap";
console.log(newListItem);
// 3. if we don't tell the browser where to put the newListItem
// it will NOT appear in our browser. so tell it where!
// 3a. i want to put this newListItem in my <ul>. so i need
// to first get a reference to the ul#todo-list node
const todoList = document.querySelector("#todo-list");
console.log(todoList);
// 3b. this is where we actually tell the browser where to put
// our newListItem:
// todoList.appendChild(newListItem);

// removing node - select node to remove, then use .removeChild to
// delete it
// const elementToRemove = todoList.lastChild;
// todoList.removeChild(elementToRemove);
