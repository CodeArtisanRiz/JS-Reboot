// For...in Loop

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

// Using for...in to iterate over an object's properties
for (const key in myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`);
    // Logs each key and its corresponding value in myObject
}

const programming = ['js', 'ruby', 'java', 'cpp']

// Using for...in to iterate over an array's indices
for (const key in programming) {
    console.log(programming[key]);
    // Logs each element of the programming array
}

// Creating a Map and setting key-value pairs
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// Using for...in to iterate over a Map object does not work
// for (const key in map) {
//    console.log(key); // doesn't work for Map
// }
