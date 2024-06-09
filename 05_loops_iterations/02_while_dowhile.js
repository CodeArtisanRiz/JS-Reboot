// While Loop

// Basic while loop to increment index by 2 until it's greater than 10
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index += 2 // Increment index by 2
}

// Iterating over an array using a while loop
let myArr = ["Flash", "Batman", "Superman"]
let arr = 0
while (arr < myArr.length) {
    console.log(`Value of arr is ${myArr[arr]}`)
    arr++ // Increment arr to move to the next element
}

// Do-While Loop
let score = 11

// This loop will execute at least once even if the condition is false initially
do {
    console.log(`Score is ${score}`)
    score++ // Increment score
} while (score <= 10); // Condition checked after the block is executed
