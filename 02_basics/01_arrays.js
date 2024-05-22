// Array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]) // Logs the first element: 0

const myHeroes = ["Ironman", "Black Widow"]
// console.log(myHeroes[1]) // Logs the second element: Black Widow

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[2]) // Logs the third element: 3

// Array Methods

myArr.push(6) // Adds 6 to the end of the array
myArr.push(7) // Adds 7 to the end of the array
myArr.pop() // Removes the last element (7)
myArr.unshift(0) // Inserts 0 at the start of the array
myArr.shift() // Removes the first element (0)

console.log(myArr.includes(9)) // Checks if 9 is in the array: false
console.log(myArr.indexOf(3)) // Finds the index of 3: 3
console.log(myArr.indexOf(9)) // Finds the index of 9: -1 (not found)

const newArr = myArr.join() // Joins the array elements into a string

console.log(myArr) // Logs the modified array: [1, 2, 3, 4, 5, 6]
console.log(newArr) // Logs the joined string: "1,2,3,4,5,6"
console.log(typeof newArr) // Logs the type of newArr: string

// Slice, Splice

console.log("A ", myArr) // Logs the array before slicing: [1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3) // Creates a new array with elements from index 1 to 3 (not included)

console.log(myn1) // Logs the sliced array: [2, 3]
console.log("B ", myArr) // Logs the original array (unchanged): [1, 2, 3, 4, 5, 6]

const myn2 = myArr.splice(1, 3) // Removes 3 elements starting from index 1, modifying the original array

console.log("C ", myArr) // Logs the modified array: [1, 5, 6]
console.log(myn2) // Logs the removed elements: [2, 3, 4]
