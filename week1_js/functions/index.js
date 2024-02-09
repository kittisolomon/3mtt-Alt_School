// functions

// functions without parameters
let count = 0;

function addCount(){
    let localCount = 0;

    count += 1;
    localCount += 1;

    console.log(count);
    console.log(localCount);
}

addCount();

// function with parameters

function addNumbers(num1, num2){
    let res = num1 + num2;
    console.log(res);
}

addNumbers(20,50);

// specifying functions  default parameter values 
function displayDetails(firstName = '', lastName = '', age = 18, height = 5.2){
    console.log(`Your name is ${firstName} ${lastName}, you are ${age} year's old, and have a height of ${height}`)
}


displayDetails('Jon', 'Doe', 28, 6.5);

// function with returns 

function addNumbers(num1, num2){
  const  result = num1 + num2;
    return result;
}

let addValues = addNumbers(4,9);

console.log(addValues);

function performMathsOperation(number1, number2, mathOps){
    if(mathOps == 'plus'){
        const getResult = number1 + number2;
        return getResult;
    }else if(mathOps == 'minus'){
        const getResult = number1 - number2;
        return getResult;
    }else if(mathOps == 'mult'){
        const getResult = number1 * number2;
        return getResult;
    } else {
        return 'Operation not supported!';
    }
}

let mathsResult = performMathsOperation(5,3, 'div');

console.log(mathsResult);

// function expression

let greeting = function (name){
    console.log('Howdy ' + name + '?');
}

greeting('Jonnie');

// Callback functions

function displayUser(displayType, showFullname, showUserName){
    if(displayType == 'full'){
        showFullname();
    }else{
        showUserName();
    }
}

function showFullname(){
    console.log("Jonnie Mulkin");
}

function showUserName(){
    console.log("Jonnie456");
}

displayUser("no", showFullname, showUserName);

// Arrow functions

let sum = (a,b) => a + b;

console.log(sum(3,5));






