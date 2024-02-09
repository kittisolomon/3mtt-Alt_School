//A class with constructor

class MathHelper {

    constructor(num1, num2, instanceName){
        //Code in constructoe always runs before creating the instance
        // check if num1 and num2 are numbers
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            throw new Error('Arguments must be numbers');
        }

        this.num1 = num1; //this => Reference to the instance
        this.num2 = num2;
        this.instanceName = `This instance is: ${instanceName}` 
    }

    add(){
        return this.num1 + this.num2;
    }

    substract(){
        return this.num1 - this.num2;
    }

    multiply(){
        return this.num1 * this.num2;
    }

    divide(){
        return this.num1 / this.num2;
    }

    modulo(){
        return this.num1 % this.num2;
    }

    power(){
        return this.num1 ** this.num2;
    }
}

// create the instance of the class 
const mathHelper1 = new MathHelper(20,10, 'Math 1 Instance');

//using the instance 
// console.log(mathHelper1.add());
// console.log(mathHelper1.substract());
// console.log(mathHelper1.multiply());
// console.log(mathHelper1.divide());
// console.log(mathHelper1.modulo());
// console.log(mathHelper1.power());

console.log(mathHelper1.instanceName);

const arr = new Array();

arr.push(20);
arr.length

// Create another instance from the class
// const mathHelper2 = new MathHelper(10, 20);

// console.log(mathHelper2.add());
// console.log(mathHelper2.substract());
// console.log(mathHelper2.multiply());
// console.log(mathHelper2.divide());
// console.log(mathHelper2.modulo());
// console.log(mathHelper2.power());

// Try to create an instance from the class with wrong arguments
// const mathHelper3 = new MathHelper(10, 'girl');
// mathHelper3.add()