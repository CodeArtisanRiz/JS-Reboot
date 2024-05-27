// Object Methods and 'this'
const user = {
    user: "Rizwan",
    price: "999",

    welcomeMessage: function() {
        console.log(`${this.user}, welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage() // Calls the welcomeMessage method, outputs "Rizwan, welcome to Website" and the user object
// user.user = "Riz" // Changes the user property of the user object to "Riz"
// user.welcomeMessage() // Calls the welcomeMessage method again, outputs "Riz, welcome to Website" and the user object

console.log(this); // Outputs the global object in non-strict mode or an empty object in strict mode


// Regular Functions vs Arrow Functions and 'this'
// function chai(){
//     let username = "Rizwan";
//     console.log(this.username); // undefined since 'this' refers to the global object and 'username' is not a property of it
// }

// chai()

// const chai = function(){
//     let username = "Rizwan";
//     console.log(this.username); // undefined for the same reason as above
// }
// chai()

const chai = () => {
    let username = "Rizwan";
    console.log(this.username); // undefined because arrow functions do not have their own 'this' context
    console.log(this); // refers to the enclosing lexical context (global object in this case)
}

// chai()

// Arrow Functions and Implicit/Explicit Returns
// Arrow Function with Explicit Return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)); // 7

// Arrow Function with Implicit Return (without curly braces)
const addthree = (num1, num2) => num1 + num2;
console.log(addthree(3, 4)); // 7

// Arrow Function with Implicit Return (with parentheses)
const addFour = (num1, num2) => (num1 + num2);
console.log(addFour(3, 4)); // 7

// Arrow Function Returning an Object (needs parentheses to avoid confusion with block syntax)
const addFive = (num1, num2) => ({ username: "riz" });
console.log(addFive()); // { username: "riz" }
