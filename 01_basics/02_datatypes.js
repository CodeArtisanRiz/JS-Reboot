"use strict"; // Treat all JS code as newer version (ES6+)

// alert(3 + 3) // It's commented out because we are using Node.js, not a browser

// Log the result of 3 + 3 to the console, demonstrating proper readability
console.log(3 + 3) // Code readability should be high
// Don't write like:
// console.log(3 
//     + 3);

// Declare some variables
let name = "Riz"; // String variable
let age = 27; // Number variable
let isLoggedIn = false; // Boolean variable

// Primitive datatypes: 
// number => 2 to the power of 53
// bigint => For large integers
// string => "" or '' => Values within quotes
// boolean => true/false
// null => Standalone value indicating no value
// undefined => Variable that has been declared but not yet assigned a value
// symbol => Unique and immutable data type

// objects => Used to store collections of data and more complex entities

// Log the type of various values to the console
console.log(typeof "Riz"); // String
console.log(typeof age); // Number
console.log(typeof null); // Object (this is a known bug in JavaScript)
console.log(typeof undefined); // Undefined
