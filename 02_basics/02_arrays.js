const marvel_heroes = ["Ironman", "Thor", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// Using push to add an array within an array
// marvel_heroes.push(dc_heroes) // modifies the existing array

// console.log(marvel_heroes) // Logs: [ 'Ironman', 'Thor', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marvel_heroes[3][1]) // Accesses and logs 'Batman' from the nested array

// Using concat to combine two arrays
const heroList = marvel_heroes.concat(dc_heroes) // Concatenates the two arrays
console.log(heroList) // Logs: [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

// Using the spread operator to combine two arrays
const all_new_heros = [...marvel_heroes, ...dc_heroes] // Spreads the elements into a new array
console.log(all_new_heros) // Logs: [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

// Flattening nested arrays
const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_arr) // Logs: [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
const real_another_array = another_arr.flat(Infinity) // Flattens the array to a single level
console.log(real_another_array) // Logs: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// Checking if a value is an array
console.log(Array.isArray("Rizwan")) // Checks if "Rizwan" is an array: false
console.log(Array.from("Rizwan")) // Converts a string into an array of characters
// Logs: [ 'R', 'i', 'z', 'w', 'a', 'n' ]

// Using Array.from with an object returns an empty array
console.log(Array.from({name: "Rizwan"})) // Logs: []

// Creating an array from individual values
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // Logs: [ 100, 200, 300 ]