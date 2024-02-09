// Creating a new element

//create element node
const newElem = document.createElement("span"); // Can't see it yet because we haven't inserted it to the DOM
// Add content and style to the new element
newElem.innerText = "This is a Span Element";
newElem.style.color = "red";
newElem.style.fontSize = "22px";

// Insert the new element to the end of body element
//document.body.prepend(newElem);

 const createSpan = document.getElementById("myText");
// createSpan.append(newElem);

// // insert an element after the first table element
// const h1Element = document.createElement("h3");
// h1Element.innerText = "I am a H3 Element";

// const table = document.querySelector(".my_table");
// table.append(h1Element);

// Insert the new element after the first table element
document.body.insertBefore(newElem, document.querySelector("table"))

// Insert element in specific position using insertAdjacentHTML
const secondTable = document.querySelectorAll("table")[1]
secondTable.insertAdjacentHTML("beforebegin", "<h2>Hello New Section</h2>")
// Other variants are "beforebegin", "afterbegin", "beforeend", "afterend"

// Removing an element
// select the element to remove
// const elemToRemove = document.querySelectorAll("h1");

// for(let i = 0; i < elemToRemove.length; i++){
//       elemToRemove[i].remove();
// }

// clone element

const elemToClone = document.querySelector("h1");
const clonedElem = elemToClone.cloneNode(true);
document.body.append(clonedElem)



