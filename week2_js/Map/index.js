// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
// creating a Map 
let map = new Map();

map.set(1, 'An integer Key');
map.set(true, 'A boolean Key');
map.set('hobby', 'I love bowling')

let person = { name: 'Mary'};

map.set(person, 'An object Key');

console.log(map);

// Display the keys
console.log(map.keys());

// Display the values
console.log(map.values());

// Display the entries
console.log(map.entries());

// Display the size
console.log(map.size);

// // Check if a key exists
console.log(map.has(true));

//  Remove a key
map.delete(1);
console.log(map);



// Iterate over the map
for (let entry of map){
    console.log(`The key: ${JSON.stringify(entry[0])}, and the value: ${entry[1]}`);
}

// Convert the map to an array
let mapToArray = Array.from(map);
console.log(mapToArray);

// Convert the map to an object
let mapToObject = Object.fromEntries(map);
console.log(mapToObject);


