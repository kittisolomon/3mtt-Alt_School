// Nummbers
let seize_in_meters = 20; // integer
let seize_in_inches = 20.3120; // floating point number
let maxSize =  Infinity; // positive infinity
let minSize = -Infinity; // negative infinity
let not_a_number = NaN; // Not a Number

// Arithmetic operations can be performed on numbers
let sum = 20 + 23.1;
let difference = 20 - 10;
let multiplication_result = 20 * 10;
let division_result = 20 / 2;

// BigInt 
let very_big_number = 872765678901234567890123567890134567890n; 
let very_large_number = BigInt(872765678901234567890123567890134567890);

// Boolean 
isBigSize = true;
isSmallSize = false;

// Null type
let seize = null;
let num = null;

// Undifined type
let weight;
let age = undefined;

// objects 

let user1 = {}; // recommended way for creating objects
let user2 = new Object()

user1['name'] = 'Oliver Willis';
user1['age'] = 20;
user1['username'] = 'willis_olive';
user1['email_verifield'] = true;
user1['profile_setings'] = {theme: 'dark', font_size: 20, show_my_profile_picture: true}

user3 = {
    name: "Jon Doe",
    "age": 20,
    "weight": 20.3,
    "verifiedUser": true,
    "Profile settings": { theme: 'dark', font_size: 20, show_my_profile_picture: true}

}

// update values in an object
user3["name"] = "Molly Jane";
delete user3.weight;

// get all values && keys in an object

console.log(Object.values(user3));
console.log(Object.keys(user3));

//console.log(user3); // use the do notation when you dont have space in your keys
console.log(user3["Profile settings"]); // use the square bracket notation to call keys that are separated by space

// Strings
let name = "Jon";  // using double quotes
let name2 = 'Doe'; // using single quotes
let name3 = `Hicent`; // using backticks

// embedding variables
let firstName = "Mike";
let lastName = 'Tinker';
let fullName = `Mr ${firstName} ${lastName}`;

// special character
let message = "Hello my friends\n My name is Johnson\n I am a software engineer";

// functions that cant be performed on strings
console.log(message.toUpperCase());
console.log(message.startsWith('Hello'));
console.log(message.indexOf('name')); 
console.log("\u{1F60D}");



