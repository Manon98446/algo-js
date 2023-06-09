const readlineSync = require("readline-sync");
//Function from 4.2 &4.3

function rand10(){
    return parseInt(Math.random()*10+1);
}

function multiRand(n){
    let arr=[];
    for(i=0; i<n; i++){
        arr[i]=rand10();
    }
    return arr;
}

/*
Exercise 4.4
Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers 
but also displays their average, min and max. To do so, use the three functions you just created as well 
as the multiRand(n) function created in Exercise 3.

Write a documentation for all the functions you created.
*/

//AVERAGE
function average(arr){
    let averageArray=0;
    for(i=0; i<arr.length; i++){
        averageArray += arr[i];
    }
    averageArray = (averageArray/arr.length);
    return averageArray;
}

//MIN
function min(arr){
    let minArray=arr[0];
    for(i=0; i<arr.length;i++){
        if(arr[i]<arr[i+1] && arr[i]<minArray){
            minArray=arr[i];
        }
    }
    return minArray
}
//MAX
function max(arr){
    let maxArray=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>maxArray){
            maxArray=arr[i]
        }
    }
    return maxArray;
}



function minmaxaverage(){
    let array= multiRand(readlineSync.questionInt("Enter a number: "));
    console.log(array);
    console.log (average(array));
    console.log(max(array));
    console.log(min(array));
}
minmaxaverage();
