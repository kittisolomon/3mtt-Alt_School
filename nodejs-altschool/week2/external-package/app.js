const math = require("mathjs");

function substract(num1,num2) {
    return math.subtract(num1,num2);
}

const result = substract(10,4);

// console.log(result);

const mean = math.mean([4,6,4,1]);
console.log(mean);
