// Map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using map to create a new array with each number incremented by 10
const newNums = myNumbers.map((num) => { 
    return num + 10 
})
console.log(newNums) 
// Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chaining map and filter methods
const newNums2 = myNumbers
    .map((num) => num * 10) // Multiply each number by 10
    .map((num) => num + 1)  // Add 1 to each number
    .filter((num) => num >= 40) // Filter numbers that are greater than or equal to 40

console.log(newNums2)
// Output: [41, 51, 61, 71, 81, 91, 101]
