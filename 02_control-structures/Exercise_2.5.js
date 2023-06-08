const readlineSync = require("readline-sync");

/*
Exercise 2.5
Make a program that asks the favorite number of the user. 
If that number is anything other than 42 display "Are you sure?" and ask again. 
(This program should never end as long as the user didn't chose 42).
*/

let userNumber=readlineSync.question("Please enter your favorite number : ");
userNumber=parseInt(userNumber);

while (userNumber!=42){
    console.log("Are you sure?")
    userNumber=readlineSync.question("Please enter your favorite number: ")
}
if (userNumber == 42){
    console.log("Yeeey")
}
