const readlineSync = require("readline-sync");
/*
Exercise 5.1
Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.
*/



function askTvSerie(){
    let a = readlineSync.question("Enter the name of your favorite tv show: ");
    let b = readlineSync.question("Production year: ");
    let c =readlineSync.question("Castmembers: ");
    let myObject={
        name: a ,
        prodYear:b ,
        castmembers:c ,
    }
    return myObject;
}
let newObject=askTvSerie();
console.log(newObject);
