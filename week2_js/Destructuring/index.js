// The destructuring assignment syntax is a JavaScript expression that
// makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Destructuring an Array
// destructiong maps the variable to be assigned to the array based on one to one mapping

let names = ['Tersuur', 'Oche', 'Obande'];
//let [firstName, middleName, lastName] = names; // destructuring an array
//get firstName
// let [ firstName] = names;
// console.log(firstName);

// get middleName 
// let [ , middleName] = names;
// console.log(middleName);

// get lastName
// let [, , lastName] = names;
// console.log(lastName); 

// Use the rest operator to get the rest of the names
// let [firstName, ...otherNames] = names;
// console.log(firstName);
// console.log(otherNames.join(' '));

//Destructuring an Object
let settings = { theme: "dark", fontSize: 20, fullScreen: true };
// let { theme, fontSize, fullScreen } = settings;
// console.log(theme);

// Get only the theme, and assign it to a new variable
//let {theme} = settings
let {theme: newTheme} = settings; //retrieves the theme and assigned it to a new variale newTheme

// console.log(newTheme);
// console.log(theme);

// using the rest operator to get the rest of the settings
let { theme, ...otherSettings } = settings;
console.log(theme);
console.log(otherSettings);

// Destructuring in a function
// This is done when you want to pass an object as a function parameter
// as use destructuring to grab the needed values

function getUserInfor({name, age}){
    console.log(name);
    console.log(age);
}

let user = {
    name: 'Jon Deo',
    age: 35
}

getUserInfor(user);