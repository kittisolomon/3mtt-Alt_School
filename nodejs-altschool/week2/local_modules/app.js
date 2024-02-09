const mathLib = require('./math_function');
const userWelcome = require('./user');

const sum = mathLib.add(10,40);
const sub = mathLib.sub(10,4);

console.log(sum);
console.log(sub);

userWelcome('Kitti');