// Reduce
const myNums = [1, 2, 3]

// Normal function
const total = myNums.reduce(function (acc, curval) {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0)

console.log(total)
// Output: 6

// Arrow function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal)
// Output: 6

const cart = [
    {
        itemName: "Tshirt",
        price: 299
    },
    {
        itemName: "Jeans",
        price: 1299
    },
    {
        itemName: "Shirt",
        price: 1699
    },
    {
        itemName: "Jacket",
        price: 10699
    },
]

const myCart = cart.reduce((acc, item) => acc + item.price, 0)
console.log(myCart)
// Output: 13996
