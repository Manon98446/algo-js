const readlineSync = require("readline-sync");

/* Ask the user to enter three numbers: minAge, maxAge and currentAge. Display if current is between min and max.

Bonus: if minAge is greater than maxAge, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

Bonus 2: be polite in the error messages. (facultative) */

let minAge = readlineSync.question("Enter the minimum age: ");
let maxAge = readlineSync.question("Enter the maximum age: ");
let currentAge = readlineSync.question("Enter the current age: ");
minAge = parseInt(minAge);
maxAge = parseInt(maxAge);
currentAge = parseInt(currentAge);


if (minAge>maxAge){
    console.log("You didn't understand the assignment...");
}
else if(minAge<currentAge){
    if (currentAge<maxAge){
        console.log("minimum age = " + minAge + ", maximum age = " + maxAge + ", current age = " + currentAge);
    }
}

else{
    console.log(" ");
}
