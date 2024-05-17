let score = "thirty three";

// Checking the type of the variable 'score'
// console.log(typeof score);
// console.log(typeof(score));

// Converting the 'score' string to a number
let valueInNumber = Number(score);
// Checking the type after conversion
// console.log(typeof valueInNumber);
// Checking the value after conversion
// console.log(valueInNumber);

// Conversion examples:
// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = "riz";

// Converting the 'isLoggedIn' string to a boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
// Checking the boolean value
// console.log(booleanIsLoggedIn);

// Conversion examples:
// 1 => true; 0 => false
// "" => false (empty string is falsye)
// "riz" => true (non-empty string is truth)

let someNumber = 33;

// Converting the number to a string
let stringNumber = String(someNumber);
// Checking the string value
// console.log(stringNumber);
// Checking the type after conversion
// console.log(typeof stringNumber);

// Operations
let value = 3;
let negValue = -value; // Negating the value
// console.log(negValue);

// Basic arithmetic operations
// console.log(2 + 2); // Addition
// console.log(2 - 2); // Subtraction
// console.log(2 * 2); // Multiplication
// console.log(2 ** 3); // Exponentiation (2 to the power of 3)
// console.log(2 / 3); // Division
// console.log(2 % 3); // Modulus (remainder of 2 divided by 3)

let str1 = "hello";
let str2 = " riz";

let str3 = str1 + str2; // Concatenating two strings
// console.log(str3);

// Examples of type coercion in JavaScript
// console.log("1" + 2); // "12" (string concatenation)
// console.log(1 + "2"); // "12" (string concatenation)
// console.log("1" + 2 + 2); // "122" (left to right evaluation)
// console.log(1 + 2 + "2"); // "32" (left to right evaluation)

// Order of operations and modulus
// console.log((3 + 4) * 5 % 3); // 2 (order of operations)

// Unary plus operator converting to number
// console.log(+true); // 1
// console.log(+""); // 0

// Variable declaration and assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // Assigning the same value to multiple variables

let gameCounter = 100;

gameCounter++ // Incrementing the gameCounter using prefix
++gameCounter; // Incrementing the gameCounter using postfix
console.log(gameCounter); // 102

// Link to study more about type conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
