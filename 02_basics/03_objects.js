// Singleton
// Object.create 

// Symbol
const mySym = Symbol("key1") // Creating a symbol for unique property keys

// Object Literals
const jsUser = {
    name: "Rizwan",
    age: 27,
    "full name": "Rizwan Mazumder", // Using spaces in property names requires quotes
    [mySym]: "mykey1", // Defining a symbol property, using brackets for dynamic keys
    location: "Silchar",
    email: "connect@codeartisan.dev",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] // Array property
}
// Keys in objects are by default treated as strings

console.log(jsUser.email) // Commonly used dot notation for accessing properties
console.log(jsUser["email"]) // Bracket notation, useful for dynamic or non-standard keys
// console.log(jsUser.full name) // Cannot call "full name" via dot notation
console.log(jsUser["full name"]) // Bracket notation is required for keys with spaces
console.log(jsUser[mySym]) // Accessing the symbol property

// Changing property values
jsUser.email = "hello@codeartisan.dev" // Updating the email property
// Object.freeze(jsUser) // Freezes the object(jsUser), making it immutable. 
// Note: Once an object has been frozen there is no way to unfreeze it.
jsUser.email = "yo@codeartisan.dev" // This change won't work if the object is frozen
console.log(jsUser["email"]) // Logs the updated email

console.log(jsUser) // Logs the entire jsUser object

// Adding methods to the object
jsUser.greeting = function(){
    console.log("Hello js User")
}
console.log(jsUser.greeting()) // Calls the greeting method

// Adding another method that references object properties
jsUser.greetingTwo = function(){
    console.log(`Hello js User: ${this.name}`) // 'this' refers to the jsUser object
}
console.log(jsUser.greetingTwo()) // Calls the greetingTwo method
