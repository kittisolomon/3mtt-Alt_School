const p1element = document.querySelector("p");

p1element.addEventListener("copy", (e) => {
     console.log(e);
    console.log(e.target.id);
    console.log(e.target.innerText);
    console.log("cordinates: " + e.clientX + ":" + e.clientY);

});