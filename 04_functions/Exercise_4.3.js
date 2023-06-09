const readlineSync = require("readline-sync");

function rand10(){
    return parseInt(Math.random()*10);
}
console.log(rand10());

/*
Exercise 4.3
By reusing the function rand10() created in Exercise 2, write a function named 
multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers 
to generate then display that same number of random numbers.
*/




//let a = readlineSync.questionInt("Please enter a number: ");
function multiRand(n){
    let arr=[];
    for(i=0; i<n; i++){
        arr[i]=rand10();
    }
    return arr;
}
console.log(multiRand(readlineSync.questionInt("Enter a number: ")));
