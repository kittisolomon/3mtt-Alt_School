// Location Object (https://developer.mozilla.org/en-US/docs/Web/API/Window/location)

//Change location of web page
// alert(location.href); // shows current URL

// if(confirm("open altschool?")){
//     location.href = "https://3mtt.altschoolafrica.com/topics/introduction-22/"
// }

// Reload a page
// if(confirm("Reload the page?")){
//     location.reload();
// }

// Change the URL and add a parameter
// if (confirm("Change the URL and add a parameter?")) {
//     location.href = "https://www.google.com?q=javascript";
// }

// // Window Navigator (https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator)

// // Get the browser name
console.log("You're browising from: " + navigator.userAgent );

// // Get the browser version
console.log("You're using an engine created by : " + navigator.vendor);

// Get the browser language
console.log("Your browser language is: " + navigator.languages);

// Get user location
// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition((position) => {
//     alert("You're at: " + position.coords.latitude + ", " + position.coords.longitude);
// });
// }else {
//     alert("You are not allowed to see location");
// }

// console.log(navigator.contacts);

const colorBoard = document.getElementById("randColor");

setInterval(()=>{ 
    colorBoard.style.backgroundColor = randomColor();
},2000)

function randomColor(){
    const colors = ["red", "green", "blue", "yellow", "orange", "purple", "aqua","pink", "violet", "black"];
    return colors[Math.round(Math.random() * colors.length)];
}


