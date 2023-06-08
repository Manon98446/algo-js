const readlineSync = require("readline-sync");

/*
Write a program that will add all the elements of an array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 15
[100, 101, 102] => 303
*/

//let arr = [1, 2, 3, 4, 5];
let arr=[100, 101, 102];
let sum = 0;


for (let i = 0; i < arr.length; i += 1) {

    sum = sum + arr[i];
}
console.log(sum);