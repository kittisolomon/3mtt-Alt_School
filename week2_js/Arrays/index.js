// arrays are used to store ordered collections of items.
// creating an Array :
// let users = new Array(); - using the class method
// let numbers = []; - this method is preferred

let items = ['Jon', 'Houston', 'Janice', 20, 3.56, {theme: 'dark'}];

console.log(items);

// get values from Array
console.log(items[2]);

// updating avlues in Array

items[2] = 'Maurice';
console.log(items);

// getting the length
console.log(items.length);

console.log(items.includes('Houston'))

// removes elements from the end of an Array
items.pop();
console.log(items);

// remove element from the begining of an Array
items.shift();
console.log(items);

// adding element to the begining of an Array
items.unshift('Calvin');
console.log(items);

// adding to Array push() add elements to the end of the array
items.push('Jonnie');
console.log(items);

// Get the index of a value
console.log(items.indexOf('Maurice')); // returns -1 when the value is not present

// geting a slice (portion) of the array
console.log(items.slice(1, 3));
// if only 1 value is passed it returns the element with that index to the end of the array
console.log(items.slice(3));

// Get a copy of the array. use the slice() without any value passed.
let copyOfItems = items.slice();
console.log(copyOfItems);

// reversing elements of the array
console.log(items.reverse());

// sorting array elements
console.log(items.sort());

// iterating over elements of an array
// using for...of loop
for (let item of items){
    console.log(item);
}

// using for...in loop - if used on arrays returns the index and not values

for (let index in items){
    console.log(`Element index: ${index} and value: ${items[index]}`);
}

// Using forEach

function dispayItems(item){
    console.log(`Current Item: ${item}`);
}

items.forEach(dispayItems);


// this is preferred
items.forEach(item => {
    console.log(item);
})

// iterating arrays using map() and applyig a computation
let numbers = [1,2,3,4,5];
let compute = numbers.map((number) => {
   return number * 2;
})

console.log(compute);

// iterate over arrays with filter
let filteredNumbers = numbers.filter(( numbers) => {
 return   numbers > 2;
});

console.log(filteredNumbers);

// 2D Arrays
let matrix = [[1,2,3], [4,5,6], [7,8,9]];

console.log(matrix[0][2])
console.log(matrix.flat())








