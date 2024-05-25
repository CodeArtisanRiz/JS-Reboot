// Basic Function Definition and Invocation
function sayMyName() {
    console.log("Riz"); // Logs "Riz" to the console
}

// Function invocation
sayMyName(); // Output: Riz

// Function definition for addTwoNumbers
function addTwoNumbers(num1, num2) { 
    console.log(num1 + num2); // Logs the sum of num1 and num2 to the console
}

// Function invocation without arguments
addTwoNumbers(); // Output: NaN (since num1 and num2 are undefined)

// Function invocation with arguments
addTwoNumbers(3, 5); // Output: 8


// Note on Nomenclature
// Parameters: Variables listed in the function definition.
// Arguments: Values passed to the function when it is invoked.

// Inputs taken when defining a function are called Parameters
// Example: function abc(num1, num2) { ... } - Here, num1 and num2 are parameters

// Values passed when calling the function are called Arguments
// Example: abc(2, 3) - Here, 2 and 3 are arguments


// Return Values and Undefined

// Function invocation and capturing the result
const result = addTwoNumbers(3, 5); // Calls the function but doesn't return anything
console.log("Result", result); // Output: Result undefined (since addTwoNumbers doesn't return anything)

// Function definition for addTwoNumbers2 with a return statement
function addTwoNumbers2(num1, num2) { 
    // Return the sum of num1 and num2
    return num1 + num2;
    console.log("Yo"); // This line will not execute because it is after the return statement
}

// Function invocation and capturing the result
const result2 = addTwoNumbers2(3, 5); // Calls the function and returns the sum
console.log("Result2: ", result2); // Output: Result2: 8


// Function definition with a default parameter
function loginUserMessage(username = "user") { // Default value for username is "user"
    if (!username) {
        console.log("Please enter username."); // Logs message if username is falsy
        return;
    }
    // Returns a message indicating the user just logged in
    return `${username} just logged in.`;
}

// Function invocation with an argument
console.log(loginUserMessage("riz")); // Output: riz just logged in.

// Function invocation without an argument
console.log(loginUserMessage()); // Output: user just logged in. (since default value is used)


// Function definition using the rest operator (...)
// The rest operator allows us to accept an indefinite number of arguments as an array
function calcCartPrice(...num1) { 
    return num1; // Returns the array of values passed as arguments
}

// Function invocation with multiple arguments
console.log(calcCartPrice(200, 500, 1000)); // Output: [200, 500, 1000]

// Define an object user with properties username and prices
const user = {
    username: "riz",
    prices: "999"
};

// Function definition that accepts an object as a parameter
function handleObject(anyobject) {
    // Logs a string with values from the object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Function invocation with the user object
handleObject(user); // Output: Username is riz and price is 999

// Function invocation with a new object passed directly
handleObject({
    username: "Artisan",
    price: 999
}); // Output: Username is Artisan and price is 999

// Define an array myNewArr
const myNewArr = [200, 400, 600];

// Function definition that accepts an array as a parameter
function returnSecondArr(getArray) {
    // Returns the second element of the array (index 1)
    return getArray[1];
}

// Function invocation with myNewArr
console.log(returnSecondArr(myNewArr)); // Output: 400

// Function invocation with a new array passed directly
console.log(returnSecondArr([1000, 2000, 4000])); // Output: 2000

