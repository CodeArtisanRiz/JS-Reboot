// Declare a constant variable for account ID.
const accountId = 1001

// Declare a let variable for account email
let accountEmail = "connect@codeartisanriz.dev"

// Declare a var variable for account password
var accountPassword = "12345"

// Declare a global variable for account city (no keyword used)
accountCity = "Silchar"

// Declare a let variable for account state, but do not initialize it.
let accountState

// The following line is commented out because it would cause an error as Constants cannot be reassigned.
// accountId = 2 // not allowed.

// Update the email address.
accountEmail = "dev@codeartisanriz.dev"

// Update the password.
accountPassword = "21212121"

// Update the city.
accountCity = "Bengaluru"

// Log the account ID to the console.
console.log(accountId)

/*
Prefer not to use var because of issues in block scope and functional scope.
*/

// Display account details in a table format.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
