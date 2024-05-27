// Global Scope
// Variable declared with let, scoped to the script
let a = 300; 

if(true) {
    // Block Scope
    let a = 10; // This 'a' is a separate variable within this block
    const b = 20; // 'b' is block-scoped, cannot be accessed outside this block
    // var c = 30; // 'c' would be function-scoped or globally scoped, causing potential issues
    console.log("Inner: ", a); // Output: Inner: 10
}

console.log(a); // Output: 300, refers to the global 'a'
// console.log(b); // Error: 'b' is not defined, as 'b' is block-scoped
// console.log(c); // Error or problematic: 'c' would be globally scoped if declared with var, causing unintended behavior

// Closures and Scope
function one() {
    const username = "riz"; // 'username' is in the scope of function 'one'

    function two() {
        const website = "codeartisan.dev"; // 'website' is in the scope of function 'two'
        console.log(username); // 'username' is accessible here due to closure
    }
    // console.log(website); // Error: 'website' is not defined in the scope of function 'one'

    two(); // Calling 'two' from within 'one'
}
// one(); // Uncomment to execute function 'one'

// Block Scope
if(true){
    const username = "rizwan"; // 'username' is block-scoped to the 'if' block
    if(username === "rizwan"){
        const website = "codeartisan.dev"; // 'website' is block-scoped to the nested 'if' block
        console.log(`${username}: ${website}`); // Output: rizwan: codeartisan.dev
    }
    // console.log(website); // Error: 'website' is not defined in the outer 'if' block
}
// console.log(username); // Error: 'username' is not defined in the global scope

// Hoisting
// Function Declaration
addOne(5); // Function call before declaration due to hoisting

function addOne(num) {
    return num + 1;
}

// Function Expression
addTwo(5); // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};
