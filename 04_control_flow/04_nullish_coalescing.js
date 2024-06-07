// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10

val1 = null ?? 10
console.log(val1)


let value1 = null;
let value2 = 10;

let result1 = value1 ?? 'default'; // 'default' because value1 is null
let result2 = value2 ?? 'default'; // 10 because value2 is not null

console.log(result1); // 'default'
console.log(result2); // 10
