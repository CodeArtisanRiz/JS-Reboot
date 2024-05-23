// Singleton 
Object.create

// symbol
const mySym = Symbol("key1")

// Object Literals

const jsUser = {
    name: "Rizwan",
    age: 27,
    "full name": "Rizwan Mazumder",
    [mySym]: "mykey1", // defining symbol. need to use [] brackets
    location: "Silchar",
    email: "connect@codeartisan.dev",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// keys are by default treated as strings

console.log(jsUser.email) // commonly used (. notation)
console.log(jsUser["email"]) // best practise
// console.log(jsUser.full name) // cannot call "full name" via . method, "" are also not allowed in . method
console.log(jsUser["full name"]) // can use 
console.log(jsUser[mySym]) // logging mysym Symbol

jsUser.email = "hello@codeartisan.dev" // change values
// Object.freeze(jsUser) // freezes/locks the object
jsUser.email = "yo@codeartisan.dev" // wont work as ojbect is locked, also wont give any error.
console.log(jsUser["email"])

console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js User")
}
console.log(jsUser.greeting())
jsUser.greetingTwo = function(){
    console.log(`Hello js User: ${this.name}`) // referencing name from object. here this refers to jsUser
}
console.log(jsUser.greetingTwo())
