// While loop

let i = 0;

// while(i < 5){
//     console.log(`Iteration : ${i}`);
//     i++;
// }

// do while loop

let j = 1; 

// do {
//     console.log(`Iteration : ${j}`);
//     j++;
// } while(j <= 5)

// for loop

for(let x = 1; x < 4; x++){
    console.log(`Loop : ${x}`);
}

// for...of

fruits = ['Apple','Coconut','Mango','Banana','Orange'];

for (let fruit of fruits){
    console.log(fruit);
}

// for...in

const object = { 
    name: "John", 
    age: 20,
    email: "john@gmail.com"
 };

 for (let detail in object){
    console.log(`${detail} : ${object[detail]}`);
 }

//  for (const [key, value] of Object.entries(object)){
//     console.log(`${key} : ${value}`);
//  }

//console.log(Object.entries(object))