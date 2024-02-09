// Returning Functions

// Dont do this: its bad practice to define global variables in web dev
//var myVar = 'I am globally scoped.'; 
// This either
// var myFunction = function () {
//     console.log('me too!');
// }

// Retrning function

function one(){
    return 'One';
}

let value = one();

// console.log(value);
// console.log(one());
// console.log(typeof one);
// console.log(value());

function addNum(a,b){
    return a * b;
}

const nums = addNum(4,4);
console.log(nums);

function testFunc(){
    return function(){
        console.log('This is a test Function');
    }
}

// function declaration
let myFunction = testFunc();
// inoke the function
myFunction();


// Yiy rarely do this 
function three(){
    return function (){
        return 'Three';
    }
}

console.log(three()());