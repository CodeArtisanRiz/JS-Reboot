// Immediately Invoked Function Expressions (IIFE) are functions that are executed immediately after they are defined.
(function tea(){
    // Named IIFE
    console.log(`DB Connected`);
})(); // Semicolon ; is necessary to avoid potential issues when other statements follow this IIFE
// (Function definition) (execution)

// With Arrow Function
( (name) => {
    // Anonymous IIFE
    console.log(`DB Connected 2 by ${name}`);
}) ('Riz'); // passed parameter
