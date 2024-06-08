// For loop examples

// Basic for loop to iterate from 0 to 9
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("Halfway Crossed") // Prints when halfway through the loop
    }

    console.log(element) // Prints each element
}

// console.log(element); // Error: Will cause an error because 'element' is not defined outside the loop

// Nested for loops
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`); // Prints the value of the outer loop
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value: ${j} and outer loop: ${i}`); // Prints the value of the inner loop and the product of i and j
        console.log(i + '*' + j + ' = ' + i*j); // Prints tables of 1-10
    }
}

let myArr = ["Flash", "Batman", "Superman"]
// console.log(myArr.length) // Prints the length of the array
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element) // Prints each element of the array
}

// Keywords: break and continue

// Example of using 'break' to exit the loop when index is 5
for (let index = 1; index <= 20; index++) {
    if(index == 5 ){
        console.log(`Got ${index}`);
        break; // Stops the loop
    }
    console.log(`Value of i is: ${index}`);
}

// Example of using 'continue' to skip the current iteration when index is 5
for (let index = 1; index <= 20; index++) {
    if(index == 5 ){
        console.log(`Got ${index}`);
        continue // Skip current iteration
    }
    console.log(`Value of i is: ${index}`);
}