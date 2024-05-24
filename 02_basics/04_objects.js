// Creating an empty object using an object literal
const instaUser = {}

// Adding properties to the instaUser object
instaUser.id = "123abc"
instaUser.name = "Barry Allen"
instaUser.isLoggedIn = false

// Logging the instaUser object
console.log(instaUser)

// Creating a nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rizwan",
            lastname: "Mazumder"
        }
    }
}

// Accessing nested object properties
console.log(regularUser.fullname.userfullname.firstname)

// Creating two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// Merging objects using spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3) // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Creating an array of user objects
const users = [
    {
        id: 1,
        email: "r@live.com"
    },
    {
        id: 2,
        email: "riz@live.com"
    },
    {
        id: 3,
        email: "r@live.com"
    },
    {
        id: 4,
        email: "r@live.com"
    },
]

// Accessing array elements and their properties
console.log(users[0].email) // Output: r@live.com

// Logging the instaUser object and its properties
console.log(instaUser) // Output: { id: '123abc', name: 'Barry Allen', isLoggedIn: false }
console.log(Object.keys(instaUser)) // Output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser)) // Output: [ '123abc', 'Barry Allen', false ]
console.log(Object.entries(instaUser)) // Output: [ [ 'id', '123abc' ], [ 'name', 'Barry Allen' ], [ 'isLoggedIn', false ] ]

// Checking if properties exist in instaUser
console.log(instaUser.hasOwnProperty('isLoggedIn')) // true
console.log(instaUser.hasOwnProperty('isLogged')) // false
