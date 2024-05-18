// Primitive: 7 types [String, Number, Boolean, null, undefined, Symbol, BigInt]

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// const bigNumber = 3456543576654356754n


// Reference Type (Non-Primitive): 3 types [Array, Objects, Functions]

const herosArray = ["Iron man", "Hulk", "Black Widow"];

let myObject = {
    name: "riz",
    age: 27,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log('score: '+ typeof score); // number
console.log('scoreValue: '+ typeof scoreValue); // number
console.log('isLoggedIn: '+ typeof isLoggedIn); // boolean
console.log('outsideTemp: '+ typeof outsideTemp); // object
console.log('userEmail: '+ typeof userEmail); // undefined
console.log('id: '+ typeof id); // symbol
console.log('anotherId: '+ typeof anotherId); // symbol

console.log('Is id & anotherId same? :')
console.log(id === anotherId); // false

// typeof Operator Results

// Type of val	Result

// Undefined:	"undefined"
// Null:	"object"
// Boolean:	"boolean"
// Number:	"number"
// String:	"string"
// Object (native and does not implement [[Call]]):	"object"
// Object (native or host and does implement [[Call]]):	"function"
// Object (host and does not implement [[Call]]):	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

// https://262.ecma-international.org/5.1/#sec-11.4.3


// JavaScript is a dynamically typed language. Variables in JavaScript do not have a fixed type and can hold any type of value at any time. You can assign a value of one type to a variable and then later assign a value of a different type to the same variable without any type errors.

let myVariable = 42;       // myVariable is a number
myVariable = "Hello";      // now myVariable is a string
myVariable = true;         // now myVariable is a boolean
 