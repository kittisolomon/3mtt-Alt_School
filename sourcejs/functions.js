// Function are block of code that can called many times
// function declaration

// function sayHello(){
//     console.log('hello world!');
// }

// sayHello();

// Or
// let a = sayHello;
// a();

// function with parameters

function sayHello(name){
    console.log('hello ' + name );
}

sayHello('Bob');

// returning values from functions

function calculateTax(amount){
    let result = amount * 0.825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);