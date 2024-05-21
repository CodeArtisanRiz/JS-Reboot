// Numbers
const score = 400
// console.log(score) // 400

const balance = new Number(100)
// console.log(balance) // [Number: 100]

// Converting number to string and checking its length
// console.log(balance.toString().length) // 3
// Formatting number to fixed decimal places
// console.log(balance.toFixed(2)) // 100.00

const otherNumber = 123.8986
// Formatting number to a specified precision
// console.log(otherNumber.toPrecision(4)) // 123.9

const hundreds = 1000000
// Formatting number with locale-specific separators
// console.log(hundreds.toLocaleString('en-IN')) // 10,00,000

// Math Object
console.log(Math) // Logs the Math object

console.log(Math.abs(-4)) // Converts -4 to positive: 4
console.log(Math.round(4.6)) // Rounds 4.6 to the nearest integer: 5
console.log(Math.ceil(4.2)) // Rounds 4.2 up to the nearest integer: 5
console.log(Math.floor(4.2)) // Rounds 4.2 down to the nearest integer: 4
console.log(Math.min(4, 3, 8, 9, 1)) // Returns the minimum value: 1
console.log(Math.max(4, 3, 8, 9, 1)) // Returns the maximum value: 9
console.log(Math.random()) // Returns a random number between 0 and 1

// Generating a random number between 1 and 10
console.log((Math.random() * 10) + 1)
// Generating a random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

// Generating a random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
