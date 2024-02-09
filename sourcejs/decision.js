// Decision Statement

// if, if-else 
// let count = 2;

// if(count == 3){
//     console.log('Count is 3');
// }else if (count < 3 ){
//     console.log('Count is less than 3');
// }else if (count > 3 ){
//     console.log('Count is greater than 3');
// } else {
//     console.log('Count is NOT 3')
// }

// switch
let hero = 'Batman';
switch (hero.toLowerCase()) {
    case 'superman':
        console.log('Has strength && X-ray vision');
        break;
    case 'batman':
        console.log('Can fly, super power');
        break;
    case 'wonderwoman':
        console.log('Fighting skills');
        break;
    default:
        console.log('Unrecognized Hero!!!');
        break;
}

// Ternary operator

let a = 1, b = '1';
let result = (a === b) ? 'equal' : 'inequal';
console.log(result);

