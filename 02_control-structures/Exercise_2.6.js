const readlineSync = require("readline-sync");

/*
Exercise 2.6
Make a program that ask the user to enter a number between 1 and 7. 
Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
*/
let numberUser = readlineSync.question("Enter a number between 1 and 7: ");
let day = "day of the week"

switch(numberUser){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6": 
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
    default:
        console.log("Error, we asked a number between 1 and 7");
}

