// Comparison operators examples
// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// Comparing strings and numbers
// console.log("2" > 1); // true (string '2' is converted to number 2)
// console.log("02" > 1); // true (string '02' is converted to number 2)

console.log(null > 0); // false (null is not greater than 0)
console.log(null == 0); // false (null is only loosely equal to undefined)
console.log(null >= 0); // true (null is converted to 0, and 0 >= 0 is true)

console.log(undefined == 0); // false (undefined is not loosely equal to 0)
console.log(undefined > 0); // false (undefined is not greater than 0)
console.log(undefined < 0); // false (undefined is not less than 0)

// Strict equality comparison (no type conversion)
console.log("2" === 2); // false (string '2' is not strictly equal to number 2)