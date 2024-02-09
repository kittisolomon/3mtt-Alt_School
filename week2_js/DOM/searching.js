// Get element by ID
const h1 = document.getElementById("h1_text")
// console.log(h1)
// h1.style.color = 'blue';
// h1.innerText = 'I changed this Text';
// h1.style.fontSize = '40px';

// // Get properties from the selected element
// console.log(h1.id) // returns "h1_text"
// console.log(h1.innerText) // returns "Hello World"
// console.log(h1.innerHTML) // returns "<h1>Hello World</h1>"
// console.log(h1.style.color) // returns "rgb(0, 0, 0)"
// console.log(h1.style.fontSize) // returns "20px"
// console.log(h1.style.backgroundColor) // returns "rgb(255, 255, 255)"

// // Change properties of the selected element
// h1.id = "new_id"
// h1.innerText = "New Text"
// h1.innerHTML = "<h1>New HTML</h1>"
// h1.style.color = "green"
// h1.style.fontSize = "30px"
// h1.style.backgroundColor = "yellow"

// // Get elements by class name
// const h1_class = document.getElementsByClassName("my_table")
// console.log(h1_class)

// for(let table of h1_class){
//     table.style.backgroundColor = "yellow"
// }

// // Get elements by tag name
// const h1_tag = document.getElementsByTagName("h1")
// console.log(h1_tag)

// for(let i=0; i < h1_tag.length; i++){
//     if(i % 2 == 0){
//         h1_tag[i].style.color = "red";
//     }else {
//         h1_tag[i].style.color = "green";
//     }
// }

// const my_table = document.getElementsByClassName("my_table")
// const rows = my_table[0].children[0].children;

// for(let i=0; i < rows.length; i++){
//     if(i % 2 == 0){
//         rows[i].style.backgroundColor = "yellow";
        
//     }else{
//         rows[i].style.backgroundColor = "aqua";
//     }

// const cells =  rows[i].getElementsByTagName("td");
// //console.log(cells);

// for(let j = 0; j < cells.length; j++){
//     cells[j].style.padding = "15px";
// }

// }

// // Get elements by Query selectors

// // querySelector() returns the first element that matches the specified CSS selector(s) in the document
// const tr = document.querySelector("tr") 
// console.log(tr)

// // After selecting, you work with the element
// tr.innerText = "New Table Row"

// Type Selector
// const h1 = document.querySelector("h1")
// console.log(h1)

//Class selector
// const tableElem = document.querySelector(".my_table")
// console.log(tableElem)

//  ID selector
// const tableElem2 = document.querySelector("#h1_text")
// console.log(tableElem2)



// // querySelectorAll() returns a static NodeList containing all elements that match the specified CSS selector(s) in the document
 const trs = document.querySelectorAll("tr") // returns a NodeList of all <tr> elements
// console.log(trs)

// const store = [];
// for (let tr of trs){
//     store.push(tr.innerText);
// }
// console.log(store);

// // After selecting, you work with the NodeList
// trs[1].innerHTML = "<td>New Table Column</td><td>New Table Number</td>"


// // loop through NodeList, and change the color of each <td> element
for(i = 0; i < trs.length; i++){
    trs[i].style.color = randomColor()
}

function randomColor(){
    const randomColors = ["red", "green", "blue", "yellow", "orange", "purple"];
    return randomColors[Math.floor(Math.random() * randomColors.length)];
}

console.log(randomColor());


// Advanced searching: See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

// Child combinator
// const secondTr = document.querySelector("table > tbody > tr > td.r_table_data")
// console.log(secondTr)

// Descendant combinator
// const h1_elem = document.querySelector("table > tbody")
// console.log(h1_elem)
// h1_elem.style.backgroundColor = "black";

// Adjacent sibling combinator
// const h1_next = document.querySelector("body h1 + h2")
// console.log(h1_next)

