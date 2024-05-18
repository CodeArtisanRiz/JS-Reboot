const name = "Rizwan-Mazumder";
const repoCount = 92;

// Concatenating strings using the old method
// console.log(name + " has " + repoCount + " Repos"); // Old method

// Using backticks `` for string interpolation
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`); 

// String Methods
console.log(name.length); // Returns the length of the string
console.log(name.toUpperCase()); // Converts the string to uppercase
console.log(name.charAt(2)); // Returns the character at the specified index
console.log(name.indexOf('z')); // Returns the index of the first occurrence of the specified character
console.log(name.substring(0, 4)); // Extracts characters from index 0 to 3
console.log(name.substring(-6, 4)); // Negative values are treated as 0, extracts characters from index 0 to 3

const anotherString = name.slice(0, 4);
console.log(anotherString); // Extracts characters from index 0 to 3

const anotherString1 = name.slice(-8, 4);
console.log(anotherString1); // Extracts characters from index 4 to -8, results in an empty string

const anotherString2 = "    Rizwan    ";
console.log(anotherString2); // Logs the string with spaces
console.log(anotherString2.trim()); // Removes whitespace from both ends of the string

// Link to documentation for String.prototype.trim method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://riz.com/web%20dev";
console.log(url.replace('%20', '-')); // Replaces '%20' with '-'
console.log(url.includes('riz')); // Checks if 'riz' is in the string

console.log(name.split('-')); // Splits the string into an array of substrings using '-' as the delimiter
