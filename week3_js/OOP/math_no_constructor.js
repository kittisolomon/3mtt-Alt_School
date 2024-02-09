//A class withou constructor
class MathHelper {

// define mehods that the class will have
// you dont need to use the function keyword
   add(num1, num2) {
        return num1 + num2;
    }

    substract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }

    modulo(num1, num2) {
        return num1 % num2;
    }

    power(num1, num2) {
        return num1 ** num2;
    }
}

// initialize the object of the class 
const mathHelper = new MathHelper();

// using the instance of the class
console.log(mathHelper.add(2,4));
console.log(mathHelper.substract(10,4));
console.log(mathHelper.multiply(6,4));
console.log(mathHelper.add(100,4));
console.log(mathHelper.modulo(15,4));
console.log(mathHelper.power(5,4));
//console.log("Ox" + (300).toString(16));