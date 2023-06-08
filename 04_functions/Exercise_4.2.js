
/*
Exercise 4.2
Create a function named rand10() that returns a random integer between 1 and 10. 
Create a program that will display the result of that function each time it is run.

Write a documentation for the rand10() function.

You will have to search on Google how to generate random numbers in JavaScript for this exercise.
*/

//in case we would like any number, not only integers, just remove parseInt.

function rand10(){
    let a = parseInt(Math.random()*10);
    return a;
}
console.log(rand10());