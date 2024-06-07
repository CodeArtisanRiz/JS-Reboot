// Comparison Operators
// <, >, <=, >=: Less than, greater than, less than or equal to, greater than or equal to.
// ==, !=: Equality and inequality (type coercion allowed).
// ===, !==: Strict equality and strict inequality (no type coercion).


// if Statement with Comparison Operators
const temperature = 41;

if(2 == "2"){
    console.log("executed");
}
if(2 === "2"){
    console.log("executed 2");
}

// if-else Statement
if (temperature < 50) {
    console.log("less than 50");
} else if(temperature === 41) {
    console.log("is 41");
} else {
    console.log("temperature is greater than 50");
}


// Block Scope with const
const score = 200;

if (score > 100) {
    const power = "fly";
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); // Error: `power` is not defined outside the block.


// Single-line if Statement
const balance = 1000;

if(balance > 500) console.log("test");
// if(balance > 500) console.log("test"), console.log("test2"); // Bad practice to chain with `,`.


// Logical Operators in if Statements

const isUserloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserloggedIn && debitCard && 2 === "2"){
    console.log("allowed to shop");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}