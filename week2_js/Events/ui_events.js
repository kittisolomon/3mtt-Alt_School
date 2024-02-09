// Capturing Mouse Events

const button = document.querySelector("#submit-btn");

// Mouse Enter event
// button.addEventListener("mouseenter", () => {
//     alert("You are hovering over the Button");
// });

// Mouse leave event
// button.addEventListener("mouseleave", () => {
//     alert("You are no longer hovering over the Button");
// });

// Mouse Over Event
// document.body.addEventListener("mousemove", (e) => {
//     console.log("You moved the mouse to position: " + e.clientX + ":" + e.clientY)
// })

// Context Menu Event
// button.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//     console.log("You right clicked the Button");
// });

// const myName = document.querySelector("#name");
// const showText = document.querySelector("#show");

// myName.addEventListener("input", (e) => {
//     showText.innerText = myName.value;
//     showText.style.color = "red"; 
// })

// // Capturing Keyboard Events

// // Key Down Event

// document.body.addEventListener("keydown", (e) => {
//     console.log("You pressed key: " + e.key.toUpperCase());
// });

// Combining Key Events
// On ALT + S, alert "You pressed the ALT + S key combo!"
// document.body.addEventListener("keydown", (e) => {
//     if(e.altKey && e.key === "s"){
//         console.log("You pressed the ALT + S key combo!");
//     }
// })

// Extra fancy event feature
// Prevent user from copying text in your webpage
document.body.addEventListener("copy", (e) => {
    e.preventDefault();
    console.log("You can't copy text!");
});



