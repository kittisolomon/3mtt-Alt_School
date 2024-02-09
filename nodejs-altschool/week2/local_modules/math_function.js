// my function library

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

//Export the functions so they can be used by another file
module.exports = {
    add,
    sub,
    mult
}