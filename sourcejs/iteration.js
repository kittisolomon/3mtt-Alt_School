// Iteration allows us to loop through a collection until a condition is meet

// for loop
// for(i = 1; i <=5; i++){
//     console.log('Count: ' + i);
// }

let nums = [2,23,14,44,55,66,12];

// for(j=0; j < nums.length; j++){
//     console.log('Value: ' + nums[j]);
// }

// for (let j = 0; j < nums.length; j++) {
//     const result = nums[j];
//     console.log(result);
// }

// while loop

let x = 1;
while(x < 5){
    console.log(x);
    x++;
    if(x == 3) break; // shorthand without the curly braces, if you have a one liner
}