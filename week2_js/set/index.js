// The Set object lets you store unique values of any type, whether primitive values or object references.

let usersList = new Set();

let user1 = {name: 'Mary', age: 32}
let user2 = {name: 'Bose', age: 19}
let user3 = {name: 'Avadoo', age: 21}

usersList.add(user1);
usersList.add(user2);
usersList.add(user3);

console.log(usersList)

// Get the size of the set
console.log(usersList.size) // 2

// Check if a value is in the set
console.log(usersList.has(user1)) // true

// Remove a value from the set
usersList.delete(user3)
console.log(usersList.has(user3)) // false

// Iterate over the set
for (let user of usersList) {
    console.log(user) 
}

// Convert set to array
let setToArray = Array.from(usersList);
console.log(setToArray);