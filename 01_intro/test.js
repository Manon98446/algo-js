const readlineSync = require("readline-sync");

//Exercise 1.2
/*let name = "manon";
let city = "liege";
let lastname = "van de merckt";
console.log("Your name is " + name + " " + lastname + " and you live in " + city + ".");*/

//Exercise 1.4
/*
let userName = readlineSync.question('Can you give me your name please?');
let userCity = readlineSync.question('What city do you live in? ');
let userLastName = readlineSync.question('What is your last name? ')
console.log("Your name is " + userName + " " + userLastName + " and you live in " + userCity + ".");
*/

//Exercise 1.5
/*
let numberOne = readlineSync.question('Enter the first decimal number: ');
let numberTwo = readlineSync.question('Enter the second decimal (or not) number: ');
numberOne = Math.round(numberOne);
console.log(numberOne * numberTwo);
*/

//Exercise 1.6
let numberOne = readlineSync.question('Enter the first integrer: ');
let numberTwo = readlineSync.question('Enter the second integrer: ');
let numberModulo = numberOne % numberTwo;
console.log(`The rest of the division is: ` + numberModulo);















