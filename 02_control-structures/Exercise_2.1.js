const readlineSync = require("readline-sync");

let userAge = readlineSync.question("Enter your age: ");
userAge = parseInt(userAge);
if (userAge >= 18){
   console.log("You are an adult!")
}
else{
    console.log("You are not yet an adult.")
}