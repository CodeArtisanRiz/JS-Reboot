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