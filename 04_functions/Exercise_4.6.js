const readlineSync = require("readline-sync");
/*
Exercise 4.6
Create a function factorial(a) that returns the factorial of a number.
*/
function factorial(n){
    let x=1
    for(i=1;i<=n;i++){
        x *= i;
    }
    return x;
}
console.log(factorial(readlineSync.questionInt("Enter a number: ")));

