// DOM

// Display the title of the current page
// alert(document.title);

// Display the content of the head tag
//console.log(document.head);

// Display the content of the body tag
console.log(document.body);

// changing the background style from the DOM
// document.body.style.backgroundColor = "red";

// setTimeout(()=> {
//     document.body.style.backgroundColor = "red";
// },3000)

setInterval(()=> {
    document.body.style.backgroundColor = "red";
},3000)