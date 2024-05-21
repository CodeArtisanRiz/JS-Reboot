// Dates

let myDate = new Date()
// console.log(myDate) // Logs the current date and time
// console.log(myDate.toString()) // Logs the date as a string
// console.log(myDate.toDateString()) // Logs the date in a human-readable format
// console.log(myDate.toLocaleString()) // Logs the date in a locale-specific format
// console.log(typeof myDate) // Logs the type of myDate, which is 'object'

let myCreatedDate = new Date(2023, 0, 23) // 0 is January in JS
// console.log(myCreatedDate.toDateString()) // Logs the created date in a human-readable format
// console.log(myCreatedDate.toLocaleString()) // Logs the created date in a locale-specific format

let newCreatedDate = new Date(2023, 0, 23, 5, 3) 
console.log(newCreatedDate.toLocaleString()) // Logs the created date with time in a locale-specific format

let formattedDate = new Date("2023-01-14") // YYYY-MM-DD format
console.log(formattedDate.toLocaleString()) // Logs the formatted date in a locale-specific format

let formattedDateIN = new Date("01-14-2023") // MM-DD-YYYY format
console.log(formattedDateIN.toLocaleString()) // Logs the formatted date in a locale-specific format

let myTimeStamp = Date.now() // Gets the current timestamp
console.log(myTimeStamp) // Logs the current timestamp in milliseconds
console.log(formattedDateIN.getTime()) // Logs the timestamp of the formatted date

console.log(Math.floor(Date.now() / 1000)) // Converts the current timestamp to seconds and logs it

let newDate = new Date()
console.log(newDate) // Logs the current date and time
console.log(newDate.getDay()) // Logs the day of the week (0-6, where 0 is Sunday)
console.log(newDate.getMonth()) // Logs the month (0-11, where 0 is January)
console.log(newDate.getFullYear()) // Logs the full year

console.log(`Day: ${newDate.getDay()} and the time: ${newDate.getTime() / 1000}`) // Logs the day of the week and the current timestamp in seconds

// Formats the date to show the full weekday name
newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate.getDay()) // Logs the day of the week (0-6, where 0 is Sunday)
