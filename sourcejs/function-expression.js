// Function Expression 
// useful when we want to create a function that would never be called
// or function that will run in the future
// setTimeout() takes in a function, and the amount of time taken to execute the function

// setTimeout(function () {
//     console.log('I waited for 3 seconds!!');
// }, 3000);


let counter = 0;

function timeOut(){
    setTimeout(function(){
        console.log('Counter: ' + counter++);
        timeOut();
    }, 2000);
}

// timeOut();

// Immediately invoked function expression (IIFE)

(function(){
    console.log('invoked!!!');
})();