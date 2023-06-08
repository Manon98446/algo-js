const readlineSync = require("readline-sync");

/*
Exercise 4.1
Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. 
That program must use the function you created.

Write a documentation for the calcSurface function.
*/

//making the function
let calcSurface = (length, width) => {
    return length * width;
}

//asking the user for the length and width
let length=readlineSync.questionFloat("Enter the length: ");
let width=readlineSync.questionFloat("Enter the width: ");
//returning the surface of the rectangle
console.log("The surface is", calcSurface(length,width),".");