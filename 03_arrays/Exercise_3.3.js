/*
Exercise 3.3
Write a program that will create a duplicate of a given array.

Bonus: make a first version that will only do it using push(). 
Make a second version that uses a single method call to perform the copy. 
(You'll have to search on the MDN or Google for this one.)
*/

let originalArray = [1,2,9,4,7];
//let copyArray = [];

//only using push 
/*
for(i=0; i < originalArray.length;i++){
    copyArray.push(originalArray[i])
}
*/
//deep copy of the original array!

let copyArray = structuredClone(originalArray);
originalArray[2]=11;


console.log(copyArray);
console.log(originalArray);

