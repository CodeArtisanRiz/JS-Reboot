// Falsy Values: Considered false when evaluated in a Boolean context.
// Ex: false, 0, -0, BigInt(0), "" (empty string), null, undefined, and NaN.


// Truthy Values: Considered true when evaluated in a Boolean context. All values other than the falsy values are considered truthy. 
// Ex: "0" (a string containing a single zero), "false" (a string containing the text "false"), " " (a string containing a space), arrays [], objects {}, and function(){}

const userEmail = "riz@codeartisan.dev"

if(userEmail){
    console.log("Got user email.");
} else{
    console.log("Don't have user email")
}

const emptyArr = []
if(emptyArr){
    console.log("Array is empty.");
} else{
    console.log("Array is not empty.")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty.");
} else{
    console.log("Object is not empty.")
} 
