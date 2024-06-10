// For...of Loop

// Iterating over an array using for...of
const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i); // Prints each element of the array
}

// Iterating over a string using for...of
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`); // Prints each character of the string
}

// Working with Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map); // Logs the entire map

for (const [key, value] of map) {
    console.log(key, ":", value); // Prints each key-value pair of the map
}

// Attempting to use for...of with an object
const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of Object.entries(myObj)) {
    console.log(key, ":", value); // Prints each key-value pair of the object
}
