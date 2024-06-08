// For

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("Halfway Crossed")
    }
    // console.log(element);
    
}
// console.log(element); // Err


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop: ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArr = ["Flash", "Batman", "Superman"]
// console.log(myArr.length)
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
    
}

// Keywords: 
// break and continue


for (let index = 1; index <= 20; index++) {
    if(index == 5 ){
        console.log(`Got ${index}`);
        break; // Stops the loop
    }
    console.log(`Value of i is: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(index == 5 ){
        console.log(`Got ${index}`);
        continue // Skip current
    }
    console.log(`Value of i is: ${index}`);
}