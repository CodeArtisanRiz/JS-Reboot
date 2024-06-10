// For...each Loop
const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// Using forEach with an anonymous callback function
coding.forEach(function (val) {
    console.log(val);
    // Logs each value in the coding array
})

// Using forEach with an arrow function
coding.forEach((item) => {
    console.log(item)
    // Logs each value in the coding array
})

// Defining a named function and using it as a callback for forEach
function printMe(item) {
    console.log(item)
    // Logs each value in the coding array
}
coding.forEach(printMe)

// Using forEach with an arrow function to log item, index, and the array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    // Logs each value, its index, and the entire array
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: 'js'
    },
    {
        languageName: "java",
        languageFileName: 'java'
    },
    {
        languageName: "python",
        languageFileName: 'py'
    },
]

// Using forEach to log the languageName property of each object in myCoding array
myCoding.forEach((item) => {
    console.log(item.languageName)
    // Logs the languageName of each object in the myCoding array
})
