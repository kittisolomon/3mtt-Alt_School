// Attach an event with HTML-Attribute

// function displayGreeting(){
//     alert("Hello World, Howdy?");
// }


// Assign a event using Dom property
//get the h1 element using any method
const h1Element = document.querySelector("h1");
function addNums() {
    alert("Your lucky number is: " + 20 + 30);
}
h1Element.oncopy = addNums;

// add a double click event to the h1 element
h1Element.onclick = () => {
    h1Element.innerText = "Welcome to my Page.";
}

// Assign event with Listeners
// This helps us assign more than one event to an element

const p1Element = document.querySelector("p");
// add a click event to the p element

p1Element.addEventListener("click", () => {
    alert("You clicked on the paragraph");
});

let callBack = () => {
    p1Element.innerText = "You changed the content!";
}
p1Element.addEventListener("click", callBack);


