const readlineSync = require("readline-sync");

/*
Exercise 2.7
Make a program that ask the user to enter a number named n. 
Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
*/

let n=readlineSync.questionInt("Please enter a number: ");
//n=parseInt(n);
let sum = 0;


for(i=1;i<=n; i++){
    let a = parseInt(readlineSync.question("Please enter a number: "));
    sum =sum + a ;
}
console.log(sum);
