// closures are created when a function is defined inside a function and the inner function
// has access to the variables and parameters of the outer function

function sayHello(name){
    return function(){
        console.log('Howdy ' + name);
    }
}

let bob = sayHello('Bob');

bob();

function outerFunction(name){
  
    function innerFunction(){
        console.log('This is an: ' + name);
    }

    return innerFunction;
}

let fruit = outerFunction('Orange');

fruit();